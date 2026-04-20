# Audit — NARST Slide Migration Accuracy

**Date:** 2026-04-20
**Audit target:** `/Users/zacharymuhlbauer/Desktop/STUDIO/projects/cali-narst/index.html` (working tree, uncommitted)
**Source of truth:** `sources/narst-verbatim.md` (captured this audit cycle) plus the user's follow-up clarifications
**Cross-reference:** `CHANGELOG.md` (previous agent's self-documented migration log), `CLAUDE.md` "Porting uncertainties" section (2026-04-20)
**Remediation posture:** report-only. No content edits were made to `index.html` during this audit. Fixes are a separate, user-approved pass.

---

## Executive summary

| Scope | Result |
|---|---|
| Total slides in current deck | 51 (1 title + 4×{paper-title + content + references}; Luke 8 / Laurie 13 / Zach 10 / Şule 11 content) |
| In-scope slides audited | 39 (title + 3 paper-titles + 8 LW + 13 LH + 11 SA + 3 non-Zach references; excludes Zach's 12 per user direction) |
| Zach slides | **UNCHANGED from prior deck** (byte-identical diff vs. HEAD `da7fb5d`) — PASS |
| Pretext ("CUNY Context → Interdisciplinary Leadership Collective") | **ABSENT** from deck (grep clean) — PASS |
| References still placeholders for all four presenters | **YES** — PASS |
| Silent typo corrections that count as REVISED | **4** (LH11, SA7, Şule paper title, LW6) |
| Content structure / layout changes that do NOT alter source text | 4 layout switches (LH2 testimonial, LH7 two-col, LH10 testimonial, SA6/SA7/SA8/SA11 testimonial) — not flagged as REVISED because source text renders intact |
| Items the audit could not verify from transcript (source gap) | Laurie LH1–LH13 interior, Şule SA1–SA9 interior — see Coverage note below |

### Follow-up-instruction compliance (7 items)

| # | Instruction | Status | Evidence |
|---|---|---|---|
| 1 | Title slide text: "Community, Transparency & Tinkering for Just Futures: Lessons Learned from the Critical AI Literacy Institute (CALI)" | PASS (with 2 caveats) | `index.html:39–40` renders `&amp;` and exact subtitle. Caveats: (a) no TLC Logo present in title-slide DOM; source said "TLC Logo" in left panel. (b) eyebrow reads "NARST 2026 · April 21" — source said "April 22nd, 2024"; previous agent retained NARST-program date. See Follow-up-compliance §A. |
| 2 | Slide 5 (LW5) = CUNY map, compact legend, whole system with borough colors, steps SI → Manhattan → Bronx → Queens → Brooklyn | PASS | `index.html:135–158` (map slot, ordered `.borough-steps`) and `:1035–1058` (all 18 CUNY campuses, `participating` flag). Reveal order matches exactly. |
| 3 | Luke's presenter paper-title slide = first slide after overall title (not a separate paper title + divider) | PASS | `index.html:47–53` is the Luke paper-title slide at deck position 2. |
| 4 | Zach's slides unchanged | PASS | `diff git-HEAD-zach git-now-zach` returns empty for content slides; only adjacent `break-sule` opener differs (Sule's territory). See `CHANGELOG.md:50`. |
| 5 | References slides present and still placeholders | PASS | `luke-references`, `laurie-references`, `zach-references`, `sule-references` all render only "Reference placeholder one/two/three/four". |
| 6 | Pretext ("CUNY Context / CALI Interdisciplinary Leadership Collective") absent | PASS | Grep of `instititions`, `Interdisciplinary Leadership Collective`, `Historian, digital humanist`, `TLC foundational principles`, `environmental psychologist and science educator` returned no matches. |
| 7 | Laurie's and Şule's blocks migrated (not Lorem ipsum) | PASS | LH1–LH13 all carry real content; SA1–SA11 all carry real content. No `Lorem ipsum` appears in `laurie-*` or `sule-*` `data-slide` blocks. (Lorem ipsum remains only in Zach's section, which was intentionally untouched.) |

### Coverage note on source-gap slides

The user's NARST paste was displayed in the transcript with approximately 261 middle lines elided by the terminal UI. That elided region contains Laurie's SLIDE 1 through SLIDE 13 body text and Şule's paper-title-through-SA9 body text. The audit therefore cannot do word-level verbatim comparison on those slides; it can only verify structural compliance and cross-reference the previous agent's self-documented rendering in `CHANGELOG.md` and `CLAUDE.md`. A complete line-level audit of those slides requires the user to re-paste the full NARST source, at which point the Phase B table below can be filled in for the gap rows.

---

## Per-slide comparison table (Phase B)

Legend: **V** = verbatim, **R** = revised (text changed), **A** = added content beyond source, **M** = missing source content, **P** = placeholder (no source content; intentional), **G** = source-gap — verbatim check deferred, structural compliance only.

| # | Slide ID | Title in `index.html` | Verdict | Notes |
|---|---|---|---|---|
| 1 | `title` | Community, Transparency & Tinkering for Just Futures | V (body) + R (date/logo) | Heading matches paste exactly. Eyebrow "NARST 2026 · April 21" swaps the paste's "April 22nd, 2024" (previous agent replaced; flagged in CLAUDE.md). TLC Logo referenced only in footer (`index.html:1014`); not inside title card. See Editorializing §E1. |
| 2 | `break-luke` | The Critical AI Literacy Institute: Asserting and Preserving Scholarly Agency in the Age of AI | V | `index.html:47–53`. Affiliation line "Director, Teaching and Learning Center, CUNY Graduate Center" — matches source single combined line per CHANGELOG revert. |
| 3 | `luke-1` | About the Teaching and Learning Center | V | Sub-heading "Graduate Center, City University of New York" and one bullet "Teaching and Learning Center, Graduate Center, City University of New York" — exact match. Visual slot placeholder, correctly TBD. |
| 4 | `luke-2` | About the Critical AI Literacy Institute (CALI) | V (list) + A (subtitle) | Origins / Elements (Faculty Development, Research, Research & Development, Advocacy) verbatim. **ADDED subtitle** "Origins and elements" — not in source. See Editorializing §E2. |
| 5 | `luke-3` | Grounding Scholarship | V | All three bullets verbatim. |
| 6 | `luke-4` | Defining Critical AI Literacy | R | Source bullet 2 is "Critical/Comprehensive AI Literacies"; deck renders "Critical / Comprehensive AI Literacies" with spaces around the slash. Trivial, flagged per methodology note. See Editorializing §E3. |
| 7 | `luke-5` | The CUNY Context (+ map) | V (bullets) + compliance (map) | All 4 CUNY-context bullets verbatim. Map implementation matches follow-up instruction — compact legend, full CUNY, borough steps ordered SI→MN→BX→QN→BK. |
| 8 | `luke-6` | Our Goals | **R** | Source bullet 1: "Reasoned Adoption <-> Informer Refusal". Deck: "Reasoned Adoption ↔ Informed Refusal". **Silent typo fix** ("Informer" → "Informed"). **Not flagged in CLAUDE.md uncertainties list.** See Editorializing §E4. |
| 9 | `luke-7` | The Google Question | R (spacing) | Source: "3 years/1m". Deck: "3 years / 1m". Spacing added. |
| 10 | `luke-8` | CALI's Strategy | V | All three bullets verbatim. |
| 11 | `luke-references` | References / To be filled in | P | Correct placeholder posture. |
| 12 | `break-laurie` | Fostering Critical AI Literacy as Collective World-Building: … | V (title) + A (role) | Title exact. **Role line "CALI Curricular Lead & Assistant Director of Open Education" is longer than source** (source gave only "CALI Curricular Lead" before the transcript cut off). The "& Assistant Director of Open Education" portion MAY have been in the elided region; cannot verify here. Affiliation "The Teaching and Learning Center, CUNY Graduate Center" — "The" is an added article. See Editorializing §E5. |
| 13–25 | `laurie-1` … `laurie-13` | (13 Laurie content slides) | G | Body text of LH1–LH13 lives in the 261-line transcript gap. Structural check only: all 13 slides exist; none are Lorem ipsum; four layout variants applied (LH2, LH7, LH10 special layouts; LH6 plain bullets with name+college citations; LH3, LH4, LH5, LH8, LH9 with images). LH11 title corrects source typo "Pedagogiocal" → "Pedagogical" per CHANGELOG — R. Other LH slides' verbatim fidelity cannot be confirmed from the captured source; re-paste required. |
| 26 | `laurie-references` | References / To be filled in | P | Correct placeholder posture. |
| 27 | `break-zach` | Tinkering | out-of-scope | User directed untouched. |
| 28–37 | `zach-talk-1` … `zach-talk-10` | (10 Zach content slides) | out-of-scope | Bit-identical to HEAD — confirmed by diff. |
| 38 | `zach-references` | Zach Muhlbauer references / Zach Muhlbauer | out-of-scope | Label text differs from other three presenters' references slides ("References / To be filled in"); intentional per no-touch policy. Cosmetic inconsistency for user's attention, not an audit failure. |
| 39 | `break-sule` | Beyond the Black Box: Resisting AI Inevitability Rhetoric and Implications for Science Education | **R** | Source typo "Inevitabiluty" silently corrected to "Inevitability" (flagged in CLAUDE.md). No role / affiliation line — correct per source (source gave Şule only a paper title). See Editorializing §E6. |
| 40 | `sule-1` | AI inevitability rhetoric as a knowledge claim deserving scientific scrutiny | G | Title is longer than SA1 prior scaffold title. Four source bullets per CHANGELOG. Verbatim check deferred. |
| 41 | `sule-2` | Conceptual Background | G + A | Per CHANGELOG, the "In Defense of the Humanities, Arts, and Social Sciences — citation to be added" bullet was **added to the visible slide body** instead of being kept as a presenter note. See Editorializing §E7. |
| 42 | `sule-3` | CALI as evidence | G | Three bullets per CHANGELOG; body behind transcript gap. |
| 43 | `sule-4` | Data analysis | G + structural | Source numbered this as SLIDE 3 (duplicate of SA3); previous agent renumbered as SA4 and shifted downstream slides +1. Structural resolution is defensible but user's incomplete message ("Data analysis is slide 4 treat as") was never finished; worth confirming the inference was correct. See Follow-up-compliance §C. |
| 44 | `sule-5` | Themes | G + A | Source note said "MAYBE I DONT need this anymore"; retained as a transition slide. Because the note flagged deletion as a possibility, *retaining* the slide is a defensible default, but it is an ADDED slide in the sense that the source explicitly questioned its existence. Flagged for Şule's decision per CLAUDE.md. See Editorializing §E8. |
| 45 | `sule-6` | Critique of Techno-determinism | G | Two block quotes, testimonial layout. Verbatim check deferred. |
| 46 | `sule-7` | Threat to Agency | **R** | Source typo "dishearthing" silently corrected to "disheartening" in the second quote (flagged in CLAUDE.md). See Editorializing §E9. |
| 47 | `sule-8` | Material Implications | G | Two block quotes, testimonial layout. Verbatim check deferred. |
| 48 | `sule-9` | Lessons Learned from CALI | G + A (possibly) | Four-named-presenter list. CHANGELOG attributions ("Luke's" / "Laurie" / "Zach" / "Şule" with elaboration) cannot be verified verbatim; some elaboration text ("building PD from ground up…", "designing curricular interventions as collective world-building…") reads as summarization by the previous agent. See Editorializing §E10. |
| 49 | `sule-10` | Implications for Science Education | V (visible) | Four bullets — Epistemic agency / Sensemaking / Interdisciplinary thinking / Pedagogy: SSI-based instruction. Matches the thematic outline the user described in tail notes. |
| 50 | `sule-11` | Conclusion | V | Both long block quotes (CALI 2.0 Adjunct faculty, CS; Preservice Elementary Teacher) match the visible paste word-for-word, including the straight→curly quote conversion (trivial, not flagged). "Notes" and "emotionally squished students" commentary correctly omitted as speaker-notes-not-slide-content. |
| 51 | `sule-references` | References / To be filled in | P | Correct placeholder posture. |

---

## Editorializing log (Phase D.3)

Verdicts flagged **R** or **A** in the table are expanded below with exact quoted evidence.

### §E1 — Title slide date and logo

- **Source (paste):** "April 22nd, 2024" · "TLC Logo"
- **Deck (`index.html:38`):** `<div class="eyebrow">NARST 2026 · April 21</div>` — no TLC Logo inside the title card.
- **Previous agent's note (CLAUDE.md:94):** "Title-slide date: source said 'April 22nd, 2024'; retained the NARST-program date 'April 21, 2026' (confirmed with user). Eyebrow reads 'NARST 2026 · April 21'."
- **Verdict:** REVISED with user confirmation per CLAUDE.md. The TLC Logo requirement remains unresolved — the logo is placed in the sticky footer (`index.html:1014`) but not in the title-card's left panel as the source specified.
- **Recommendation for user:** confirm whether the title-card left panel should include a TLC Logo image, or whether the current footer-only placement is acceptable.

### §E2 — LW2 added subtitle

- **Source:** "About the Critical AI Literacy Institute (CALI)" followed immediately by list: Origins / Elements / Faculty Development / Research / Research & Development / Advocacy. No subtitle.
- **Deck (`index.html:76–77`):** `<h1>About the Critical AI Literacy Institute (CALI)</h1>` and `<h2>Origins and elements</h2>`.
- **Verdict:** ADDED. The previous agent authored the subtitle "Origins and elements" as scaffolding.
- **Recommendation:** remove the `<h2>` or replace with text authored by Luke.

### §E3 — LW4 slash spacing

- **Source:** "Critical/Comprehensive AI Literacies"
- **Deck (`index.html:121`):** "Critical / Comprehensive AI Literacies"
- **Verdict:** REVISED (trivial). Flagged per methodology rule "err on the side of flagging."

### §E4 — LW6 silent typo correction ("Informer" → "Informed")

- **Source:** "Reasoned Adoption <-> Informer Refusal"
- **Deck (`index.html:164`):** `Reasoned Adoption &harr; Informed Refusal`
- **Verdict:** REVISED. The `<->` → `↔` (`&harr;`) rendering is defensible glyph substitution; the `Informer` → `Informed` word change is a silent copyediting correction that the source text does not authorize.
- **Previous-agent documentation:** NOT listed in `CLAUDE.md` "Porting uncertainties" — this audit is the first surface. Worth a second look from the user: "Informer Refusal" could be a typo OR a coined term; the audit cannot tell and the correction should not be silent either way.
- **Recommendation:** confirm with the user/Luke whether the source meant "Informed Refusal" (typo) or "Informer Refusal" (deliberate).

### §E5 — Laurie paper-title role line

- **Source (visible portion):** "Laurie Hurson / CALI Curricular Lead". The line ended there before the transcript gap.
- **Deck (`index.html:244–245`):** `CALI Curricular Lead & Assistant Director of Open Education` / `The Teaching and Learning Center, CUNY Graduate Center`
- **Verdict:** likely ADDED content (the "& Assistant Director of Open Education" and the leading "The" before "Teaching and Learning Center" are not visible in the captured source). May have been in the 261-line gap.
- **Recommendation:** user to confirm Laurie's full title from the original paste.

### §E6 — Şule paper title "Inevitabiluty" → "Inevitability"

- **Source:** "Beyond the Black Box: Resisting AI Inevitabiluty Rhetoric and Implications for Science Education" (per CHANGELOG record of source typo).
- **Deck (`index.html:777`):** "Beyond the Black Box: Resisting AI Inevitability Rhetoric and Implications for Science Education"
- **Verdict:** REVISED (silent typo correction, documented in CLAUDE.md:90). User flagging already requested.

### §E7 — SA2 added bullet for TBD citation

- **Source:** "That paper on in defense of humanities, arts, and social sciences …" (per CHANGELOG:78 — characterized as a *note-to-self*, not a slide bullet).
- **Deck (`index.html:809`):** `<li class="frag">&ldquo;In Defense of the Humanities, Arts, and Social Sciences&rdquo; &mdash; citation to be added</li>`
- **Verdict:** ADDED. The source phrased this as a research note; the deck renders it as a visible slide bullet with a placeholder citation.
- **Recommendation:** either replace with the real citation (CLAUDE.md already flags this) or move back to speaker notes.

### §E8 — SA5 retained against source's own doubt

- **Source:** "MAYBE I DONT need this anymore"
- **Deck (`index.html:863–878`):** SA5 exists as a transition slide with `<h1>Themes</h1>` and subtitle "Critique of techno-determinism · Threat to agency · Material implications".
- **Verdict:** ADDED (in the sense that the source questioned whether the slide should exist). Retaining is defensible for completeness, but the user should confirm with Şule.

### §E9 — SA7 "dishearthing" → "disheartening"

- **Source:** "…it feels dishearthing that the broad institutional response has been inevitable."
- **Deck (`index.html:906`):** "…it feels disheartening that the broad institutional response has been inevitable."
- **Verdict:** REVISED (silent typo correction, documented in CLAUDE.md:89).

### §E10 — SA9 summarization risk

- **Deck (`index.html:935–938`):** Four bullets each prefixed by a presenter name with elaboration in hedged, summarizing prose — e.g., `<strong>Luke's</strong> &mdash; building PD from ground up to support scholarly agency and interdisciplinary collaboration. Institutional change and policy recommendations in edtech decisions.`
- **Status:** source text behind the transcript gap — cannot confirm verbatim.
- **Concern:** the elaboration reads more like summarization-by-agent than direct transcription, and SA9's purpose (attributing lessons to each presenter) is exactly the kind of content where invented framing would be dangerous.
- **Recommendation:** user to line-check SA9 against the original NARST paste.

---

## Omission log (Phase D.4)

No in-scope slide is missing a source bullet it should have carried, within what this audit can see. One candidate noted:

- **Title slide**: left-panel "TLC Logo" from source is not rendered inside the title card (footer placement only). Borderline OMISSION — see §E1.
- **Pretext block**: correctly omitted (PASS, per user direction).
- **Notes / Visual-descriptor / bracketed meta lines**: correctly omitted per CHANGELOG:72–78 convention.

All other comparisons either pass verbatim or were flagged as REVISED / ADDED above.

---

## Structural inventory (Phase A)

Confirmed from `index.html` table of contents:

- **Total slides:** 51
- **Structure:** 1 title + [Luke: paper-title + 8 + references] + [Laurie: paper-title + 13 + references] + [Zach: section-divider + 10 + references] + [Şule: paper-title + 11 + references] = 1 + 10 + 15 + 12 + 13 = 51 ✓
- **Scrubber max:** `index.html:1017` `max="51"` / `:1024` counter `1 / 51` — matches.
- **Pre-session baseline for Zach:** HEAD commit `da7fb5d` (2026-04-19 20:46). Diff of `break-zach … break-sule` range between `da7fb5d:index.html` and working tree returns no Zach-internal differences; only adjacency line (the Sule divider opener, which carries Sule's new `data-variant="paper-title"` attribute) differs. Zach content = PASS.
- **Files changed on disk (per `git status`):** CLAUDE.md, OUTLINE.md, index.html, src/slides.js, src/styles.css. Untracked: CHANGELOG.md + image assets in `images/`. None of the files outside of this audit scope (CSS, JS) are subject to content-verbatim checks; they are infrastructure.

---

## Follow-up-instruction compliance detail (Phase C)

### §A — Title slide

- Text: PASS.
- Date: REVISED with user prior approval (CLAUDE.md:94).
- TLC Logo: PARTIAL. Logo appears in sticky footer (`index.html:1014`) but not inside the title card. User's source said "Left Panel: … TLC Logo".
- Right panel "Interactive visualization": PASS — domainwarp WebGL canvas (`index.html:34`) fulfills the interactive-visualization slot.

### §B — Slide 5 as CUNY map

- Placement at deck position 7 (LW5) — PASS.
- Compact legend: PASS (`index.html:1092–1114` `buildCompactLegend`, `campus-legend.compact` CSS class).
- Full CUNY system with participating-vs-other color coding: PASS (18 campuses, `participating: true|false` flags at `index.html:1035–1058`, dual-color rendering at `:1163–1181`).
- Borough step order: PASS (`index.html:146–152`, `.borough-steps` in order staten-island / manhattan / bronx / queens / brooklyn).

### §C — SLIDE 3 duplicate numbering (incomplete user message)

- User message was truncated: "Data analysis is slide 4 treat as" — never completed.
- Previous agent's inference (CHANGELOG:58): treat "Data analysis" as SA4, bump SA5–SA11 down by one, total Sule slides = 11.
- This inference is defensible but is a content-architecture decision made under ambiguity. Worth confirming with the user whether (a) that inference was correct and (b) the "Themes" transition slide (SA5) was supposed to be cut instead of kept.

### §D — Zach untouched

- PASS with full git-diff evidence. See Structural inventory above.

### §E — References placeholder

- PASS for all four presenters. Label inconsistency note: Zach's references slide uses the older format ("Zach Muhlbauer references" / "Zach Muhlbauer") instead of the new "References / To be filled in" format used by LW/LH/SA. Intentional per no-touch policy; flagged here as a cosmetic inconsistency for the user to decide on when filling references tomorrow.

### §F — Pretext absent

- PASS (grep clean for all 5 distinctive phrases from the pretext block).

### §G — Laurie + Şule blocks migrated

- PASS. No Lorem ipsum survives in `laurie-*` or `sule-*` data-slide blocks. Audit could not do word-level verbatim on Laurie LH1–LH13 or Şule SA1–SA9 due to transcript gap — see Coverage note above.

---

## Date discrepancy — raised for user resolution

- **Source paste:** "April 22nd, 2024"
- **Deck eyebrow:** "NARST 2026 · April 21"
- **CHANGELOG/CLAUDE.md:** previous agent kept NARST-program date "April 21, 2026" and notes user confirmation.
- **Question the audit cannot resolve:** was "April 22nd, 2024" in the paste a typo in the source document (the user likely meant 2026), or was it a deliberate back-dating? The previous agent resolved the ambiguity in favor of the program date. The audit does not second-guess that resolution; it simply records the divergence from source text.

---

## Summary — what to do tomorrow

In priority order:

1. **Confirm "Informer" vs "Informed" Refusal on LW6** (§E4). This is the single audit finding not yet surfaced to the user via CLAUDE.md.
2. **Decide whether the title card needs an inline TLC Logo** (§E1 / §A).
3. **Verify Laurie's paper-title role line** (§E5) against the original NARST paste (the audit could not see the full role text).
4. **Spot-check SA9 "Lessons Learned"** (§E10) — the four-presenter summary — against the original paste to confirm nothing was invented.
5. **Confirm the SLIDE 3 / SLIDE 4 renumbering inference for Şule** (§C) since the user's instructing message ended mid-sentence.
6. **Decide on SA5 "Themes" transition slide** (§E8) — retain or drop per Şule's preference.
7. **LW2 subtitle "Origins and elements"** (§E2) — approve, replace with Luke's own subtitle, or remove the `<h2>`.
8. **Fill all four references slides** — already planned for tomorrow per user instruction.
9. **Re-audit Laurie LH1–LH13 and Şule SA1–SA9** once the user re-pastes the full NARST source, to close the source-gap rows in the Phase B table.

None of these require immediate action tonight; the deck is coherent and presentable, and the four silent typo corrections have been surfaced.

---

## 2026-04-20 · Remediation pass

Addressed two of the audit findings autonomously. Five still require user decisions.

### Resolved

- **§E7 — SA2 "citation to be added" bullet (`index.html:799`).** Removed entirely. Source phrased the item as Şule's research note-to-self ("That paper on in defense of humanities, arts, and social sciences …"), not a slide bullet; the previous port elevated it to a visible bullet with a TBD marker. Per the CHANGELOG rule that notes-to-self are not slide text, the bullet is now gone. SA2 renders Freire / Morales-Doyle / Bang.
- **§E2 — LW2 subtitle "Origins and elements" (`index.html:77`).** Removed. The `<h2>` was unsourced scaffolding authored by the previous agent; the source had only the `<h1>` + list. LW2 now renders bare title + Origins/Elements list, matching source.

### Zach section — newly populated this pass (ZM1–ZM10)

- The CHANGELOG noted "Zach Muhlbauer section — No changes. Section divider, all 10 content slides (ZM1–ZM10), and references slide preserved exactly as in the prior deck. NARST source contained empty placeholders only." All 10 ZM slides now carry real content synthesized from the consolidated paper (`/tmp/narst_paper_v1_consolidated.md`, §I–III), the cuny-ai-intro deck (zmuhls.github.io/cuny-ai-intro, slides 3 / 5 / 7 / 8), and the cali-brooklyn deck (cuny-ai-lab.github.io/cali-brooklyn, slides 19–23).
- Centerpiece: **ZM9 "The CUNY AI Lab Sandbox"** now carries `chat.ailab.gc.cuny.edu` + Open WebUI spec + OER-preset framing pulled verbatim-adjacent from cuny-ai-intro slide 7.
- ZM7 shows Cohort 2 breadth across six disciplinary pilots (Concept Mapping, Laboratory Workflows, Deep Listening, Math Connections, Research Writing Scaffold, AmigAI).
- Term correction per user: "harness" removed from ZM2 subtitle/bullet and ZM8 subtitle; ZM8 now uses cuny-ai-intro slide 3 framing ("faculty build custom chat assistants grounded in course material").

### User decisions (all resolved 2026-04-20)

| Item | Slide(s) | Decision |
|---|---|---|
| §E1 | Title | Keep TLC logo in footer only — no inline logo needed. ✅ |
| §E4 | LW6 | "Informer" → "Informed" is a typo fix. Current deck correct. ✅ |
| §E5 | `break-laurie` | "CALI Curricular Lead & Assistant Director of Open Education" is Laurie's correct title. ✅ |
| §E8 | SA5 "Themes" | Retain transition slide for now. ✅ |
| §E10 | SA9 "Lessons Learned from CALI" | **Editorialized** — the elaboration text after each presenter name was summarization by the previous agent. Stripped bullets down to presenter names only (Luke / Laurie / Zach / Şule); Şule to fill in the lessons herself. ✅ |
| §C | Şule renumbering | SLIDE 3/4 inference confirmed correct. ✅ |

### Intentionally deferred

- **References slides** (Luke, Laurie, Zach, Şule) remain placeholder — per `OUTLINE.md`: "References slides for all four presenters remain placeholders; citations are to be added tomorrow."
- **Visual/diagram placeholders** (~75 "Placeholder visual" labels on the right-side figure stage) — these are design staging slots, deliberate across all presenters.
