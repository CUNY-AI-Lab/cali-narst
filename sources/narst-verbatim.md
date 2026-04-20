# NARST Slides — user-pasted source of truth

Captured 2026-04-20 from the user's conversation with Claude. This file is the authoritative reference for the port into `index.html`. Do not edit without the user's direction.

> **Transcript-capture gap.** In the terminal transcript shown to the audit agent, the user's paste was displayed with a middle block collapsed as `── (261 lines hidden) ────` by the terminal UI. The full paste existed in the prior session but was not retrievable here. Laurie Hurson's middle slides (roughly LH2 through LH13) and parts of Şule Aksoy's block (roughly SA3 through SA9) are therefore not present in this snapshot. What is preserved below is the visible portion; authoritative reconstruction of the gap would require a re-paste from the user. Cross-reference the previous agent's porting log at `../CHANGELOG.md` and the uncertainties section of `../CLAUDE.md` to see which items were rendered from the missing interior.

---

## Pretext block (NOT to be rendered; user directed "don't include")

    CUNY Context public, social and economic mobility. institutions 25 instititions across boroughs, TLC foundational principles
    Design
    Theoretical and conceptual underpinnings (maybe share a link to zotero)
    PAR, mixed method, visual
    reflection on google funding
    CALI Interdisciplinary Leadership Collective Historian, digital humanist, an environmental psychologist and science educator

---

## Overall Title Slide

    TITLE SLIDE — Community, Transparency & Tinkering for Just Futures: Lessons Learned from the Critical AI Literacy Institute (CALI)
    Left Panel:
    CUNY Graduate Center, New York City, NY, USA
    Luke Waltzer, Laurie Hurson, Zach Muhlbauer, and Sule Aksoy
    April 22nd, 2024
    TLC Logo
    Right Panel (Visual):
    Interactive visualization

---

## Luke Waltzer

    TITLE SLIDE — The Critical AI Literacy Institute: Asserting and Preserving Scholarly Agency in the Age of AI
    Left Panel:
    Luke Waltzer
    Director, Teaching and Learning Center, CUNY Graduate Center
    Right Panel (Visual):
    Interactive visualization

    SLIDE 1 — About the Teaching and Learning Center
    Teaching and Learning Center, Graduate Center, City University of New York
    Visual:
    tlc1, tlc2, tlc3, tlc4
    Notes:

    SLIDE 2 — About the Critical AI Literacy Institute (CALI)
    Origins
    Elements
    Faculty Development
    Research
    Research & Development
    Advocacy
    Visual:
    CALI screenshot
    Notes: Two steps… Origins, then Elements with the four sub bullets

    SLIDE 3 — Grounding Scholarship
    Critical University Studies
    Critical Ed Tech
    DH, Science Education, Educational Development
    Visual: Array of images of key books (or maybe slideshow?)
    Notes: 3 steps, screenshots of books for each

    SLIDE 4 — Defining Critical AI Literacy
    Literacies
    Critical/Comprehensive AI Literacies
    Why the need?
    Visual: Screenshots of key texts
    Notes:

    SLIDE 5 — The CUNY Context
    Large, federated system
    Heavy turnover at central office
    Emphasis on career-connected learning
    Vulnerable population
    Visual: cuny
    Notes:

    SLIDE 6 — Our Goals
    Reasoned Adoption <-> Informer Refusal
    Communities of Practice
    Research, Tinker, Advocate
    Visual: tbd
    Notes:

    SLIDE 7 — The Google Question
    3 years/1m
    Second grant: Empire AI Initiative
    Visual: A gif
    Notes:

    SLIDE 8 — CALI's Strategy
    Emphasize agency
    Identify small teaching moments
    Ground interventions in critical inquiry
    Visual: tbd
    Notes:

---

## Laurie Hurson — partial (top portion visible in transcript)

    TITLE SLIDE — Fostering Critical AI Literacy as Collective World-Building: Curricular Models for Teaching With/About Generative AI
    Left Panel:
    Laurie Hurson
    CALI Curricular Lead

    [── TRANSCRIPT GAP: approximately 261 lines of Laurie's SLIDE 1 through SLIDE 13
     were not captured in the audit agent's context. See ../CHANGELOG.md for the
     previous agent's rendering decisions for LH1–LH13 and ../CLAUDE.md
     "Porting uncertainties" for flagged items (LH2 / LH5 citations, LH10 quote
     attribution, LH11 source typo "Pedagogiocal" → "Pedagogical"). ──]

---

## Şule Aksoy — tail only (conclusion slide visible; earlier slides in gap)

    [── TRANSCRIPT GAP covering paper-title slide through SA9. See
     ../CHANGELOG.md for every SA rendering decision: source typo
     "Inevitabiluty" → "Inevitability" on paper title; SLIDE 3 duplicate
     numbering resolved by making "Data analysis" SA4; source typo "dishearthing"
     → "disheartening" on SA7; SA5 "MAYBE I DONT need this anymore"
     meta-commentary retained as a transition slide; and the
     "In Defense of the Humanities, Arts, and Social Sciences" citation
     TBD on SA2. ──]

    SLIDE 10 — Conclusion
    "The danger I see with gen AI right now is just how far we are abstracted away from understanding the scale of planetary computation. Someone writing or coding or communicating in the so-called "cloud" - as we are literally doing right now - does not need to envision the massive network of industrial processes, labor and power relationships, mineral extractions, deals between massive companies, etc. that continually weave the web that is the Internet. Gen AI only further scales this development, especially if students (or any of us) continue to lean on the tools. I worry that we are learning not to look at this massive infrastructure, at the materiality of the cloud." (CALI 2.0 Adjunct faculty, CS)
    "this shift does make me feel that I can be more assertive by questioning my colleagues, professors, and future students when I see frivolous use of AI. Honest discussion about use of AI is especially important since my entire program and career path centers around reducing harm to marginalized communities. It is very difficult to be excited about new technology when I know my own students in an underserved urban area will be impacted most by its negative impacts." (Preservice Elementary Teacher)
    Visual:
    Notes: IDK what to say here. Will figure it out eventually.
     "emotionally squished" students. internal conflict my students were talking; trying to balance professors' (or SBTEs') enthusiasm for AI with the consistent discussions we have around reducing the amount of harm done to marginalized communities? Overall, it feels uncomfortable to have that internal conflict and feel like no one is talking about how the growth of AI will negatively impact marginalized communities most.

---

## Follow-up clarifications from the user (after the paste)

1. Use **Community, Transparency & Tinkering for Just Futures: Lessons Learned from the Critical AI Literacy Institute (CALI)** as the intro title slide.
2. **SLIDE 5 for the map** — make the legend much smaller and more compact; map the entire CUNY system and participating campuses with different plot colors; step-through borough reveals in this order: **Staten Island → Manhattan → Bronx → Queens → Brooklyn**.
3. **Leave Zach's slides as is.**
4. **Keep the references** — they'll be filled in tomorrow.
5. Presenter TITLE SLIDE goes where that presenter's **first slide after the overall title slide** would be (i.e., replaces the section-divider position with a paper-title treatment).
6. **Don't include** the "CUNY Context → CALI Interdisciplinary Leadership Collective" block — that's pretext.
7. "Data analysis is slide 4 treat as [incomplete — message was cut off; previous agent inferred this meant Şule's duplicate SLIDE 3 numbering is resolved by making Data analysis SA4 and bumping later slides down]."
8. "You should plan to implement the other two as well" — meaning Laurie's and Şule's blocks, in addition to Luke's.

---

## Known silent corrections flagged in `../CLAUDE.md`

- LH11 title: source "Pedagogiocal" → rendered "Pedagogical".
- SA7 quote: source "dishearthing" → rendered "disheartening".
- Şule paper title and all Sule `aria-label`s: source "Inevitabiluty" → rendered "Inevitability".
- LW6 bullet 1: source "Informer Refusal" → rendered "Informed Refusal" (NOT in the CLAUDE.md uncertainties list — surfaced by this audit).

All four are documented as revisions in the audit report.
