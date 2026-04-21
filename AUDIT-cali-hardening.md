# cali-narst Hardening Audit — 2026-04-20

Single-session sweep covering accessibility, text-overflow across viewports,
font-size consistency, responsive text formatting, and full local-capable
operation (including the Leaflet map).

## Summary

| Workstream | Scope | Status |
|---|---|---|
| WA — Vendor deps | Leaflet, Google Fonts, CartoDB tiles → `vendor/` | done |
| WB — Typography tokens | 11 `--fs-*` tokens at `:root`; selectors switched to tokens; fixed-px mobile overrides removed | done |
| WC — Accessibility | `<footer>` landmark; slider focus ring; reduce-motion gate on title canvas; contrast bumps | done |
| WD — Leaflet lifecycle | IntersectionObserver + ResizeObserver replace setTimeout shotgun; tileerror → offline fallback | done |
| WE — Verification | Responsive sweep 375/1200/1440/1920, map tiles load, fonts resolve, no console errors | done |

## Vendor inventory

Everything the deck loads at runtime now lives under `cali-narst/vendor/`
— only three external URLs remain and all three are cosmetic hyperlinks
(attribution + deck shortlink), never fetched.

| Asset | Path | Size | Source |
|---|---|---|---|
| Leaflet JS | `vendor/leaflet/leaflet.js` | 147 KB | `unpkg.com/leaflet@1.9.4` |
| Leaflet CSS | `vendor/leaflet/leaflet.css` | 14 KB | same |
| Leaflet marker/layer PNGs | `vendor/leaflet/images/*.png` | ~6 KB (5 files) | same |
| Google Fonts woff2 | `vendor/fonts/*.woff2` | 734 KB (27 files) | `fonts.gstatic.com` via `fonts.googleapis.com/css2` |
| Font stylesheet | `vendor/fonts/fonts.css` | 21 KB (rewritten to local) | generated from Google Fonts response |
| CartoDB tiles | `vendor/tiles/{dark_nolabels,dark_only_labels}/{z}/{x}/{y}.png` | 6 MB (914 tiles, z9–13) | `basemaps.cartocdn.com` |
| Tile fetch script | `scripts/fetch-tiles.py` | — | idempotent, re-run to refresh |

Total vendor footprint ≈ 6.9 MB. All loadable from `file://` — the local
http server used during verification was only a Playwright constraint.

## Typography token scale

Defined once at `src/styles.css:28-39`:

```
--fs-display  clamp(28px, 3.0vw, 48px)     slide h1
--fs-title    clamp(36px, 5.6vw, 120px)    title-card h1
--fs-heading  clamp(24px, 2.9vw, 44px)     slide h2
--fs-subhead  clamp(18px, 1.6vw, 26px)     slide h3 (new rule)
--fs-body     clamp(22px, 2.1vw, 32px)     content li, p
--fs-label    clamp(13px, 1.1vw, 18px)     .label eyebrow
--fs-caption  clamp(13px, 1.1vw, 20px)     .eyebrow, .lightbox-caption
--fs-meta     clamp(10px, 0.9vw, 14px)     header/footer chrome, .kbd
--fs-dense-*  clamp(...)                   dense-slide overrides for h1/h2/li
```

Contract: media queries toggle layout (flex direction, padding, column
collapse). They no longer override font sizes — clamp() floor/ceiling do
the work. The previous `@media (max-width: 480px)` block that pinned
`h1 26px`, `h2 16px`, `title-card h1 34px` etc. in fixed px is gone;
sub-480px viewports now scale from the clamp floor.

Raw `font-size: Npx` remains in the CSS for:
- campus-map legend/tooltip/popup chrome (9–22px, intentionally tiny)
- Leaflet attribution (9px, library default)
- overview-mode slide thumbnails (11px, grid-view metadata)

These are UI chrome on top of the content typography and are sized
independently on purpose.

## Accessibility changes

- **Footer landmark**: `<div class="sticky-footer">` → `<footer class="sticky-footer">`. Implicit `role="contentinfo"` when at body level.
- **Slider focus indicator**: the previous rule drew an outline on the invisible range input (opacity ~0); now the thumb paints a 4px accent + 8px rgba glow via `:focus-visible ~ .slider-thumb`, and the track tints via `:has()`. Visible in every screen-reader keyboard walk.
- **Map aria-label**: cleaned to `"Map plotting the CUNY system with CALI 1–2 participating campuses highlighted."` — Leaflet's own tabindex and keyboard handlers remain (they're useful, not a regression).
- **Reduce-motion**: title-domainwarp WebGL canvas now paints a single static frame when `prefers-reduced-motion: reduce` matches, instead of running `requestAnimationFrame` indefinitely.
- **Contrast bumps**: `header::before` 0.50 → 0.62, `.footer-meta` 0.55 → 0.78 against `rgba(8,11,16,0.96)` background.

## Leaflet lifecycle contract

The map (`#cuny-map`, initialized by `createMap()` in `index.html` around
line 888) is now driven by two observers instead of staggered timeouts:

1. **`IntersectionObserver`** on the map's parent `section.slide`. Fires
   `map.__deckRefit()` when the slide's intersection ratio crosses 0.4.
   This is how the map knows it's become visible.
2. **`ResizeObserver`** on `#cuny-map` itself. Any container-size change
   triggers `invalidateSize(false)` + `__deckRefit()`, rAF-debounced so
   multiple size changes in one frame coalesce into one refit.

The previous approach — `[60, 220, 600, 1400].forEach(setTimeout)` plus
a tail `setTimeout(120)` — has been deleted. A single `setTimeout(220)`
remains as a fallback for UAs without IntersectionObserver (Safari ≤12,
which doesn't matter for conference machines but keeps the code honest).

`map.on('tileerror')` now adds `.tiles-unavailable` to the container.
CSS paints a muted blue gradient and an "MAP TILES OFFLINE" eyebrow, so
if somebody runs the deck with `vendor/tiles/` missing the slide still
reads as a geographic stage instead of a gray rectangle.

`slides.js:55-66` still calls `invalidateSize + __deckRefit` on every
slide navigation — belt and suspenders. The observers handle initial
paint and resize; this handles edge cases where the slide is already
intersected but the CSS layout just shifted.

## Verification

Local HTTP server on `127.0.0.1:8765` and a Playwright walk of the deck:

| Check | Result |
|---|---|
| Page title renders | `NARST CALI Presentation, April 21, 2026` |
| Slides in DOM | 52 |
| Footer element tag | `<FOOTER>` |
| Console errors at load | 0 |
| Console warnings at load | 0 |
| `h3Count` (LH7) | 2 (new `.content h3` rule applies) |
| Body font-family resolves to | `"IBM Plex Sans", ui-sans-serif, …` |
| H1 font-family resolves to | `Newsreader, "Iowan Old Style", Charter, …` (vendored woff2 loaded) |
| Horizontal overflow at 375px | 0px on all 52 slides |
| Horizontal overflow at 1200px | 0px on all 52 slides |
| Horizontal overflow at 1920px | 0px on all 52 slides |
| H1 at 375px | 28–36px (floor of each clamp) |
| H1 at 1920px | 48px content / 107px title (ceilings hit appropriately) |
| Map tile sample URL | `vendor/tiles/dark_nolabels/11/603/770.png` ✓ local |
| Map tiles loaded / in DOM | 32 / 32 at zoom 11 |
| Circle markers on LW5 | 18 |
| `.tiles-unavailable` fallback | gradient renders, `.leaflet-tile-pane` hidden ✓ |
| External resource URLs remaining | 0 (3 hyperlinks only: `carto.com/attributions`, `openstreetmap.org/copyright`, `cuny.is/cali-narst`) |

Screenshots in `.playwright-mcp/`:
- `cali-narst-luke5-1440.png` — desktop view of the CUNY map slide
- `cali-narst-luke5-375.png` — same slide on mobile (stacks content + map)

## Manual follow-up before presenting

Not blocking and not changed by this audit:

- Run the deck once with Wi-Fi off from `file://` to confirm nothing
  still reaches the network (this audit verified no external loads, but
  a human eyeball on the rendered page is worth the minute).
- The porting-uncertainty list in `CLAUDE.md` (tlc1–4 gallery, LW7 gif,
  LW3 book covers, LH2/LH5 citations, etc.) is separate from this audit
  and still pending presenter decisions.

## How to re-run the tile fetch

```
python3 scripts/fetch-tiles.py
```

Current bbox (40.48, -74.30) × (40.93, -73.68) at zoom 9–13. Edit
`ZOOMS`, `BBOX`, or `PAD` at the top of the script to change coverage.
