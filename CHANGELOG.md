# CHANGELOG

## 2026-04-20 · NARST Slides port

Ported the authoritative "NARST Slides" source (Luke, Laurie, Şule content; Zach left as-is) into `index.html`, replacing the Lorem Ipsum scaffolding. Every change is listed below.

### Global

- Overall title slide: wording updated from "Community, Transparency, and Tinkering for Just Futures / Lessons Learned from the Critical AI Literacy Institute" to "Community, Transparency & Tinkering for Just Futures / Lessons Learned from the Critical AI Literacy Institute (CALI)". Panelist list punctuation changed from interpuncts to comma-separated list ("Luke Waltzer, Laurie Hurson, Zach Muhlbauer, and Sule Aksoy"). Institution line changed to "CUNY Graduate Center, New York City, NY, USA".
- **Standalone campus map slide (prior deck slide 2, `data-slide="campus-map"`) dropped.** The upgraded map lives only on LW5.
- Scrubber `max` and counter text updated 50 → 51.
- New CSS layouts appended to `src/styles.css`: `.slide-testimonial`, `.quote-stack`, `.slide-two-col-text` + `.two-col-inner`, `.syllabus-list`, `.borough-steps`, `.campus-legend.compact`, `.campus-label-permanent.non-participating`, paper-title variant (`[data-variant="paper-title"]`) for `.slide-break`.
- New JS: `syncBoroughForward/Backward` and `syncAllBoroughsOnShow` in `src/slides.js`, wired into `advance()`, `retreat()`, and `show()`. Inline map script exposes `window.__cunyBoroughReveal(borough, show)`.

### Luke Waltzer section

- **Section divider → paper-title slide.** `data-slide="break-luke"` previously held "Community / Ten talks — one references slide". Replaced with the full paper title "The Critical AI Literacy Institute: Asserting and Preserving Scholarly Agency in the Age of AI" + the source's single affiliation line "Director, Teaching and Learning Center, CUNY Graduate Center". Added `data-variant="paper-title"`.
- **LW1 (`luke-1`)** — was `luke-talk-1` with placeholder Lorem Ipsum titled "The Critical AI Literacy Institute". Now "About the Teaching and Learning Center" with the one source bullet. Visual slot: TLC 1–4 gallery (TBD).
- **LW2 (`luke-2`)** — was `luke-talk-2`. Now "About the Critical AI Literacy Institute (CALI)" with Origins + Elements (Faculty Development / Research / Research & Development / Advocacy). Visual: `images/cali-website-home.png` (copied from `narst-00-01-18/CALI Website home.png`).
- **LW3 (`luke-3`)** — was `luke-talk-3` "Institutional context". Now "Grounding Scholarship" with Critical University Studies / Critical Ed Tech / DH, Science Education, Educational Development.
- **LW4 (`luke-4`)** — was `luke-talk-4` "Project scope". Now "Defining Critical AI Literacy" with Literacies / Critical or Comprehensive AI Literacies / Why the need?
- **LW5 (`luke-5`)** — was `luke-talk-5` "Faculty, student, and staff agency". Now **"The CUNY Context"** — this slide inherits the full campus map, upgraded: full-CUNY coverage (18 campuses), participating (CALI 1–2) vs other color coding, borough step-reveals sequenced Staten Island → Manhattan → Bronx → Queens → Brooklyn. Compact two-row legend. Map id changed from `campus-map` to `cuny-map`.
- **LW6 (`luke-6`)** — was `luke-talk-6` "Critical AI studies framing". Now "Our Goals" with Reasoned Adoption ↔ Informed Refusal / Communities of Practice / Research, Tinker, Advocate.
- **LW7 (`luke-7`)** — was `luke-talk-7` "Critical university studies framing". Now "The Google Question" with 3 years/1m and Empire AI Initiative.
- **LW8 (`luke-8`)** — was `luke-talk-8` "Scholarship of teaching and learning". Now "CALI's Strategy" with Emphasize agency / Identify small teaching moments / Ground interventions in critical inquiry.
- **Dropped slides** — prior `luke-talk-9` "Preliminary findings" and `luke-talk-10` "Institutional implications". The NARST source contains 8 content slides, not 10.
- **References slide (`luke-references`)** — unchanged structure; label updated from "References" / "Luke Waltzer references" / "Luke Waltzer" to "Luke Waltzer · References" / "References" / "To be filled in". Content still placeholder.

### Laurie Hurson section

- **Section divider → paper-title slide.** `data-slide="break-laurie"` previously held "Transparency / Ten talks — one references slide". Replaced with "Fostering Critical AI Literacy as Collective World-Building: Curricular Models for Teaching With/About Generative AI" + "CALI Curricular Lead & Assistant Director of Open Education" + "The Teaching and Learning Center, CUNY Graduate Center". Added `data-variant="paper-title"`.
- **LH1 (`laurie-1`)** — "Overview" with outline list: AI Literacy / CALI Curriculum / Institute as Method / Faculty Interventions / Fostering Critical AI Literacy as Collective World-Building.
- **LH2 (`laurie-2`)** — "Defining AI Literacy". **Layout changed to `.slide-testimonial` (single column with `.quote-stack`).** Two block quotes (Long & Magerko 2020; Almatrafi et al. 2024) with `<cite>` attributions; two arrow-prefixed follow-on bullets for context-dependent definitions.
- **LH3 (`laurie-3`)** — "The Critical AI Literacy Institute" with Disciplinary Questions / Critical Stance / Reflective, collaborative, critical inquiry / Mixed methods and longitudinal iteration. Visual: `images/cali-website-home.png`.
- **LH4 (`laurie-4`)** — "Faculty Development | Spring Meetings" with Reflective Writing / Framing disciplinary approaches / Interdisciplinary Collaboration. Visual: `images/faculty-questions.png`.
- **LH5 (`laurie-5`)** — "Faculty Development | Summer Institute" with Focus / Methods / Goals (Lave & Wenger, 1991; Haraway, 1988). Visual: `images/community-of-practice.jpg`.
- **LH6 (`laurie-6`)** — "Faculty Interventions" listing Sarah Cohn (CCNY) / Krystyna Michael (Hostos) / Martha Nadell (Brooklyn) / Spencer Hill (CCNY). Visual: `images/faculty-interventions.png`.
- **LH7 (`laurie-7`)** — "Research and Information in the Digital Age". **Layout changed to `.slide-two-col-text` with `.two-col-inner`.** Left column: 3 approach bullets. Right column: 8-item syllabus list (LLMs / Evaluating LLM output / Labor, environment, ethics / Plagiarism, cheating, academic integrity / Cognition / Creativity / Alternative models & resistance / Futures).
- **LH8 (`laurie-8`)** — "Integrated Reading and Composition" with Creativity and labor / Student Expertise / Reflection on value of writing. Visual: gallery of `images/km-1.png` + `images/km-5.png` (uses existing `.stage-gallery` scaffold; `data-fragSync="1"` disables auto-rotation to keep focus on text).
- **LH9 (`laurie-9`)** — "Introduction to History and Literature" with Readings on genAI / Collaborative AI class policy / Custom bots for brainstorming. Visual: `images/md-brainstormer.png`.
- **LH10 (`laurie-10`)** — "Statistical Methods in Earth and Atmospheric Sciences". **Layout changed to `.slide-testimonial.tall`.** Left bullets ("What are all the ways…" question + A/B + Claude Code discussion) above a single very long block quote (Spencer Hill faculty reflection), with `<cite>Spencer Hill, City College · CALI faculty reflection</cite>`.
- **LH11 (`laurie-11`)** — "Pedagogical Approaches for Teaching Critical AI Literacy". **Source typo "Pedagogiocal" corrected to "Pedagogical"** (flagged in CLAUDE.md uncertainties).
- **LH12 (`laurie-12`)** — "Critical AI Literacy and Student Agency" with 5 bullets (including Cottom citation).
- **LH13 (`laurie-13`)** — "Critical AI Literacy… as collective world-building" with 6 bullets (Haraway, Lave & Wenger, hooks citations).
- **Added slides** — LH11, LH12, LH13 are new (prior deck had 10 Laurie slides; NARST source has 13).
- **References slide (`laurie-references`)** — unchanged structure; label updated "Laurie Hurson · References" / "References" / "To be filled in".

### Zach Muhlbauer section

- **No changes.** Section divider, all 10 content slides (ZM1–ZM10), and references slide preserved exactly as in the prior deck. NARST source contained empty placeholders only.

### Şule Aksoy section

- **Section divider → paper-title slide.** Renamed from "Science Education and Resistance / Ten talks — one references slide" to the full paper title "Beyond the Black Box: Resisting AI Inevitability Rhetoric and Implications for Science Education". Display name changed from "Sule" to "Şule" (honorific diacritic, `&Scedil;`). Added `data-variant="paper-title"`. **No presenter-role / affiliation lines** — source contained only the paper title for Şule's title slide (unlike Luke and Laurie's title slides, which have left-panel role + affiliation).
- **SA1 (`sule-1`)** — "AI inevitability rhetoric as a knowledge claim deserving scientific scrutiny" (expanded title vs prior "Beyond the Black Box") with 4 source bullets.
- **SA2 (`sule-2`)** — "Conceptual Background" with Freire / Morales-Doyle / Bang / humanities-arts-social-sciences citation (TBD).
- **SA3 (`sule-3`)** — "CALI as evidence" with 3 bullets (Faculty reflections / written reflections / qualitative case study).
- **SA4 (`sule-4`)** — "Data analysis" with 4 grounded-theory bullets. **Source numbered this SLIDE 3 (duplicate of SA3); user directed to treat as SA4 and bump remaining slides down.**
- **SA5 (`sule-5`)** — "Themes" transition slide. **Source notes "MAYBE I DONT need this anymore"; retained for completeness, flagged in CLAUDE.md.**
- **SA6 (`sule-6`)** — "Theme #1 — Critique of Techno-determinism". **Layout `.slide-testimonial`** with two block quotes (both source-italicized).
- **SA7 (`sule-7`)** — "Theme #2 — Threat to Agency". **Layout `.slide-testimonial`** with two block quotes. Source typo "dishearthing" corrected to "disheartening" (flagged in CLAUDE.md).
- **Source typo "Inevitabiluty" silently corrected to "Inevitability"** on Şule's paper-title `<h1>` and throughout Sule-section `aria-label`s (flagged in CLAUDE.md).
- **SA8 (`sule-8`)** — "Theme #3 — Material Implications". **Layout `.slide-testimonial`** with two block quotes.
- **SA9 (`sule-9`)** — "Lessons Learned from CALI" with four named entries (Luke / Laurie / Zach / Şule) each with sub-bullet.
- **SA10 (`sule-10`)** — "Implications for Science Education" with Epistemic agency / Sensemaking / Interdisciplinary thinking / Pedagogy: SSI-based instruction.
- **SA11 (`sule-11`)** — "Conclusion". **Layout `.slide-testimonial`** with two long block quotes (CALI 2.0 Adjunct faculty, CS; Preservice Elementary Teacher).
- **Added slide** — SA11 is new (prior deck had 10 Sule slides; NARST source has 11 after SLIDE 3 duplicate fix).
- **References slide (`sule-references`)** — label updated "Şule Aksoy · References" / "References" / "To be filled in".

### Dropped from source (notes-to-self)

The following source items were not rendered as slide content, per the rule that notes-to-self, visual descriptions, and bracketed meta-commentary are not slide text:

- Pretext block before Title Slide ("CUNY Context … CALI Interdisciplinary Leadership Collective Historian, digital humanist, an environmental psychologist and science educator").
- Every `Notes: …` line (including "disciplinary divergence but shared concerns…", "mention the disservice to students comment", "IDK what to say here", "emotionally squished students" discussion note under SA11).
- Every `Visual:` descriptor line (used to choose the image slot, not rendered as text).
- Bracketed inline meta-commentary: "(maybe share a link to zotero)", "tbd", "MAYBE I DONT need this anymore".
- "That paper on in defense of humanities, arts, and social sciences …" rendered as a visible TBD-citation bullet on SA2 with flag in CLAUDE.md.

### Image assets imported

Copied from `~/Desktop/STUDIO/projects/thinkering/narst-00-01-18/` into `images/` and renamed:

- `CALI Website home.png` → `cali-website-home.png`
- `Community of Practice.jpg` → `community-of-practice.jpg`
- `Faculty interventions.png` → `faculty-interventions.png`
- `Faculty questions.png` → `faculty-questions.png`
- `KM 1.png` → `km-1.png`
- `KM 5.png` → `km-5.png`
- `MD brainstormer.png` → `md-brainstormer.png`
- `Mixed Methods 2.jpg` → `mixed-methods-2.jpg` (not yet placed on any slide; retained for possible future use, see CLAUDE.md).

### Files touched

- `index.html` — slides 1 and 3–26 rewritten; slide 2 dropped; slides 39–51 rewritten (Sule); slides 27–38 (Zach) unchanged. Inline map script extended with full-CUNY data, dual-color markers, compact legend, and `window.__cunyBoroughReveal` hook. Footer scrubber `max` and counter text bumped to 51.
- `src/styles.css` — new layouts appended at end of file; no existing rules modified.
- `src/slides.js` — borough-step sync added to `advance()`, `retreat()`, `show()`; gallery and lightbox paths untouched.
- `OUTLINE.md` — fully rewritten with per-presenter reset numbering.
- `CLAUDE.md` — Porting uncertainties section appended.
- `CHANGELOG.md` — this file, newly created.
