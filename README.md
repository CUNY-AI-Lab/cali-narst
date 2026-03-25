# Critical AI Literacy Institute, Brooklyn College

27-slide presentation for the CALI faculty visit to Brooklyn College on March 25, 2026. Single-page HTML deck, no build system, no dependencies.

**Live** [cuny-ai-lab.github.io/cali-brooklyn](https://cuny-ai-lab.github.io/cali-brooklyn/)

**Presented by** Luke Waltzer, Laurie Hurson, Zach Muhlbauer
Teaching and Learning Center, CUNY Graduate Center

---

## Slide Overview

| # | Title | Section | Stage |
|---|-------|---------|-------|
| 1 | Title | | Boids iframe |
| 2 | Origins of CALI | About CALI | Step-grid (4) |
| 3 | CALI as an Intervention | About CALI | Step-grid (4) |
| 4 | Campuses | Cohort 1, 2025 | Table |
| 5 | Disciplines | Cohort 1, 2025 | Table |
| 6 | Faculty Rank | Cohort 1, 2025 | Bar chart |
| 7 | Second CALI Cohort | Cohort 2, 2026 | Step-grid (3) |
| 8 | Campuses | Cohort 2, 2026 | Table |
| 9 | Disciplines | Cohort 2, 2026 | Table |
| 10 | Faculty Rank | Cohort 2, 2026 | Bar chart |
| 11 | BREAK | Laurie Hurson | |
| 12 | Faculty Development | Curriculum | Image |
| 13 | Community of Practice | Curriculum | Image |
| 14 | Mixed Methods | Research | Image |
| 15 | Student Surveys | Research | Gallery (2) |
| 16 | Faculty Interventions | Research | Image |
| 17 | Teaching Critical AI Literacy | Research | Image |
| 18 | BREAK | Zach Muhlbauer | |
| 19 | Technical Lead | T(h)inkering | Step-grid (4) |
| 20 | Year 1 Infrastructure | T(h)inkering | Gallery (2) |
| 21 | Piloting on Hugging Face | T(h)inkering | Gallery (2) |
| 22 | Then and Now | T(h)inkering | Image |
| 23 | Then and Now | T(h)inkering | Gallery (3) |
| 24 | T(h)inkering to Come | T(h)inkering | Image |
| 25 | Lessons Learned | T(h)inkering | Step-grid (4) |
| 26 | Policy and Strategy | Looking Ahead | Step-grid (4) |
| 27 | Questions | Discussion | Links |

---

## Structure and Design

Custom engine (`src/slides.js`) with no framework dependencies. Each slide is a `<section class="slide">` with a `.content` panel (text) and `.stage` panel (visuals). Side by side on desktop (720px+), stacked on mobile.

Arrow keys, spacebar, or swipe to navigate. Esc toggles overview grid. Sticky footer scrubber for direct slide access.

Elements with `class="frag"` reveal one at a time on advance. Gallery sync attributes (`data-gallery-idx`, `data-frag-sync`) tie bullet reveals to carousel images.

Dark theme with soft grey-blue palette. CSS custom properties in `src/styles.css`. System sans-serif typography. TLC logo in footer. `prefers-reduced-motion` disables all animations.

**Template** [zmuhls/slide-templates](https://github.com/zmuhls/slide-templates)

---

## Quick Start

```bash
git clone https://github.com/CUNY-AI-Lab/cali-brooklyn.git
cd cali-brooklyn
open index.html
```

Push to `main` to deploy via GitHub Pages. No build step.
