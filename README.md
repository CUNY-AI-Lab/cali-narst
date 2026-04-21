# cali-narst

NARST 2026 presentation deck for the Critical AI Literacy Institute related paper set.

## Session

**Community, Transparency & Tinkering for Just Futures: Lessons Learned from the Critical AI Literacy Institute (CALI)**

- Tuesday, April 21, 2026
- 16:15 – 17:45
- Jefferson B (L4)
- Track Strand 12: Technology for Teaching, Learning, and Research
- Presentation type: Related Paper Set

## Presenters

- Luke Waltzer
- Laurie Hurson
- Zach Muhlbauer
- Şule Aksoy

## Current deck status

The deck runs as a 46-slide single-page HTML presentation:

- 1 title slide
- 4 paper-title section dividers (one per presenter)
- content slides per presenter (Luke 8, Laurie 11, Zach 9, Şule 11)
- 1 consolidated references slide + 1 closing slide (QR + contact), added 2026-04-21

Content policy:

- real title, presenter names, section titles, and event metadata are in place
- most body content remains placeholder text pending talk-specific revision
- slide visuals use restrained, presenter-specific imagery in `images/`
- p5.js drives the title-slide domain-warp background canvas
- frappe-charts is loaded via CDN for future data figures
- Leaflet map on LW5 was retired 2026-04-20 in favor of a static `images/cuny.png`
- NARST header badge and TLC footer badge are clickable: NARST → conference page; TLC → tlc.commons.gc.cuny.edu

## Files

- `index.html` — canonical slide deck
- `src/styles.css` — deck styling (typography tokens, layouts, presenter accents)
- `src/slides.js` — slide engine, keyboard + scrubber navigation, lightbox
- `images/`, `images-2/` — slide assets (lowercase-hyphenated canonical copies; originals per-presenter)
- `vendor/fonts/` — self-hosted Newsreader / IBM Plex woff2 bundles (file:// runs offline)
- `OUTLINE.md` — full slide map
- `CHANGELOG.md` — dated record of deck changes
- `CLAUDE.md` — repo working notes and contracts for future edits

## Local preview

```bash
open index.html
```

The deck runs entirely from `file://` — no build step, no network.

## GitHub Pages

Deploys from the `main` branch of `milwrite/cali-narst`.
