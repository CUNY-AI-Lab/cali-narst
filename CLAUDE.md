# CLAUDE.md

## Project

This repository contains the NARST 2026 CALI presentation deck.

Current repository target:
- GitHub repo: `milwrite/cali-narst`
- Deployment target: GitHub Pages from `main`

## Current deck rules

- Single-page HTML slide deck, no build system required
- Keep `index.html` as the canonical deck file
- Use `src/styles.css` and `src/slides.js` for shared behavior and styling
- Prefer real session metadata and presenter names
- Keep placeholder text where real talk prose has not been approved yet
- Preserve large readable typography suitable for live presentation

## Current structure requirement

The deck should follow this structure:

- 1 title slide
- 4 section-divider (paper-title) slides, one for each presenter
- content slides per presenter (currently: Luke 8, Laurie 11, Zach 10, Sule 12)
- references slides removed 2026-04-20

That yields 46 total slides. (LH2 "Defining AI Literacy" and ZM4 "Historical OCR" cut on 2026-04-20 to match SLIDES.md.)

## Presenters and talk blocks

1. Luke Waltzer, Community
2. Laurie Hurson, Transparency
3. Zach Muhlbauer, Tinkering
4. Sule Aksoy, Science education and resistance

## Placeholder policy

For now, use placeholders for:
- body paragraphs
- bullet detail
- charts that do not yet have approved data
- references not yet entered

But keep these real:
- session title
- subtitle
- presenter names
- session date/time/location
- section titles
- talk titles drawn from the PDF

## Visual features already added

- `frappe-charts` included by CDN for future figures
- `p5.js` included by CDN for generative or animated visual space

## Local-asset contract (added 2026-04-20)

The deck runs entirely from `file://` with no network. Two things make
that work; do not undo them without replacing the local asset path:

- `vendor/fonts/fonts.css` + 27 `vendor/fonts/*.woff2` — Newsreader,
  IBM Plex Sans, IBM Plex Mono. Generated from a Google Fonts response
  with all `https://fonts.gstatic.com/...` URLs rewritten to bare
  filenames.
- `images/*` — every slide visual (gif, png, jpg) is copied locally.
  Source files live in `images-2/{Presenter}/`; canonical deck refs
  use the lowercase-hyphenated copies in `images/`.

`vendor/leaflet/` and `vendor/tiles/` are retained on disk but no longer
referenced by the deck — Leaflet was removed 2026-04-20 (see below). They
can be deleted to reclaim ~7 MB if nobody plans to revive the map.

## Leaflet removal (2026-04-20)

LW5 ("The CUNY Context") used a vendored Leaflet map (offline tiles +
campus circles + IntersectionObserver/ResizeObserver lifecycle). It was
replaced with a static `images/cuny.png` per the SLIDES.md visual spec.
The Leaflet `<link>`/`<script>` imports and the inline `createMap()` /
`__cunyBoroughReveal` JS block were removed from `index.html`.
Map-related CSS hooks (`.tiles-unavailable`, `.map-mount`, `.campus-*`)
remain in `src/styles.css` but no longer have any DOM target — safe to
clean up in a future pass.

## Typography token contract (added 2026-04-20)

Type sizes live as `--fs-*` custom properties at `:root` in
`src/styles.css`. Selectors reference the tokens; media queries toggle
*layout only*, not size. Do not add `font-size: <px>` overrides inside
`@media (max-width: …)` blocks — clamp() floors handle small viewports.
See `AUDIT-cali-hardening.md` for the full token list and rationale.

## Files to keep updated together

When changing structure, update these together:
- `index.html`
- `README.md`
- `OUTLINE.md`
- `CLAUDE.md`

## Notes for future edits

- Keep slides accessible with semantic headings where possible
- Maintain keyboard and scrubber navigation
- Prefer editable HTML over screenshot-heavy slides
- Use references slides to stage presenter-specific citations later

## Porting uncertainties (2026-04-20)

The NARST Slides source was ported into `index.html` today. The following items need resolution tomorrow before the session on 2026-04-21:

- **LW1 visual — TLC 1–4 gallery**: source says "Visual: tlc1, tlc2, tlc3, tlc4". No image files were supplied for `tlc1.png` etc. Currently a placeholder `diagram-card` sits in the stage. Decide: supply the four images, or reuse existing TLC-related assets (`images/TLC-Logo-v4-No-GC-white.png` is already used in the footer).
- **LW7 visual — "a gif"**: source says "Visual: A gif". No animated asset supplied; placeholder in place. Decide which GIF to embed (Google acquisition-era visual? CUNY-investment chart?).
- **LW3 visual — "Array of images of key books (or maybe slideshow?)"**: source is explicitly uncertain. Placeholder in place. Decide whether to pull book covers for Critical University Studies / Critical Ed Tech / DH titles.
- **LW4 visual — "Screenshots of key texts"**: similarly unspecified; placeholder in place.
- **LW2, LW6, LW8, LH11, LH12, LH13, SA1, SA2, SA3, SA5, SA9, SA10 visuals — "tbd"**: source marks these as `Visual: tbd` or equivalent. Placeholders in place.
- **LH2 / LH5 citations**: Long & Magerko, 2020; Almatrafi et al., 2024; Lave & Wenger, 1991; Haraway, 1988 all render inline. Full entries should be added to Laurie's references slide.
- **LH10 quote attribution**: the long testimonial is rendered with `<cite>Spencer Hill, City College · CALI faculty reflection</cite>`. Source did not formally attribute the quote; inference drawn from SLIDE 10 being Spencer Hill's course. Confirm before presenting.
- **LH11 typo "Pedagogiocal"**: corrected to "Pedagogical". Flag for Laurie's awareness.
- **SA2 citation — "That paper on in defense of humanities, arts, and social sciences …"**: rendered on SA2 as a visible TBD-citation bullet. The actual citation is still unknown.
- **SA5 (Themes) — "MAYBE I DONT need this anymore"**: source note suggests Şule may want to cut this transition slide. Retained for completeness; flag for Şule's decision.
- **SA6 / SA7 / SA8 / SA11 block-quote attributions**: all quotes are attributed to "CALI faculty reflection" or the specific persona cited in the source (CALI 2.0 Adjunct faculty, CS; Preservice Elementary Teacher). Verify attributions with Şule.
- **SA7 typo "dishearthing"**: corrected to "disheartening". Flag for Şule.
- **Source typo "Inevitabiluty" on Şule's paper title and SA2**: silently corrected to "Inevitability" on the break-sule paper-title slide and in all Sule-section aria-labels. Flag for Şule.
- **Şule paper-title slide has no role / affiliation line**: the NARST Slides source gives Şule only the paper title (no left-panel role or institutional line like Luke and Laurie have). The paper-title slide therefore renders with only the panelist name + paper title. Add role + affiliation text if Şule wants parity with the other two paper-title slides.
- **Luke paper-title role line reformatted**: source has one combined role-plus-institution line ("Director, Teaching and Learning Center, CUNY Graduate Center"). Rendered as a single `.affiliation` line to match the source; earlier split into separate role + affiliation lines has been reverted.
- **Şule display name**: section divider, labels, and aria-labels use "Şule" (with ş, `&Scedil;`). If the public-facing spelling is "Sule", run a find-and-replace in `index.html`.
- **Title-slide date**: source said "April 22nd, 2024"; retained the NARST-program date "April 21, 2026" (confirmed with user). Eyebrow reads "NARST 2026 · April 21". Adjust if the room block actually spans both days.
- **`images/mixed-methods-2.jpg`**: copied but not yet placed on any slide. Candidate for LH3 or LH4 as alternate mixed-methods visual; decide with Laurie.
- **References slides**: removed 2026-04-20 per Z's direction. Citations live in the paper, not on the deck.

See `CHANGELOG.md` for the full record of what was moved, renamed, and dropped.
