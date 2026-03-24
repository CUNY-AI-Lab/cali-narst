---
name: slide-author
description: Create or substantially revise slide content. Use this skill when adding new slides, rewriting existing slides, restructuring the deck arc, or adapting the template for a new workshop topic.
---

# Slide Author Skill

Load this skill when writing or significantly revising slide content. It covers voice, structure, content conventions, and the sync discipline between `index.html` and `SLIDES.md`.

## Source of Truth

`index.html` is always the source of truth. `SLIDES.md` is a markdown mirror — keep it in sync after every content edit. Edit HTML first, then update `SLIDES.md` to match.

## Content Voice

- Write for faculty who are curious but not technical — no jargon unless it's the term being taught
- Direct imperative instructions for procedural steps ("Click **New Model**", not "You should click")
- No em dashes (`—`) anywhere in slide text
- Short labels above main content (`<p class="slide-label">Label Text</p>`) — one to three words
- "Next:" tips at the bottom of procedural slides to tell participants what's coming

## Deck Arc

Standard three-part structure for a CUNY AI Lab workshop deck:

1. **Title + Roadmap** (2 slides) — workshop title, date, three-week series overview
2. **Setup** (2-3 slides) — sign in, pre-flight steps before the main exercise
3. **Concept** (4-6 slides) — what the feature is, where it lives, why it matters, how it works
4. **Examples** (6-9 slides) — discipline-specific examples with weak → getting warmer → strong progression
5. **Best Practices & Pitfalls** (2 slides) — curation guidelines and common mistakes in two-column layout
6. **Hands-On Exercise** (3-4 slides) — step-by-step guided build with copyable templates
7. **Closing** (1-2 slides) — what's next, road ahead

## Slide Structure (HTML)

Every `.slide` must have all four attributes:

```html
<div class="slide layout-split" role="group" aria-roledescription="slide" aria-label="Slide N: Title" tabindex="-1">
```

Slide interior for `layout-split`:

```html
<div class="content">
  <p class="slide-label">Label</p>
  <h2>Slide Title</h2>
  <p>Intro sentence.</p>
  <ol>
    <li>Step one</li>
    <li>Step two</li>
  </ol>
  <p class="next-tip"><strong>Next:</strong> What to do next.</p>
</div>
<div class="stage">
  <!-- screenshot, carousel, diagram, or template -->
</div>
```

## Examples Convention

All discipline example progressions follow this pattern:

```html
<!-- Three examples per discipline, using step-reveal -->
<div class="prompt-block prompt-bad step-hidden" data-step="1">
  <span class="prompt-label">Weak</span>
  <p>...</p>
</div>
<div class="prompt-block prompt-mid step-hidden" data-step="2">
  <span class="prompt-label">Getting Warmer</span>
  <p>...</p>
</div>
<div class="prompt-block prompt-good step-hidden" data-step="3">
  <span class="prompt-label">Strong</span>
  <p>...</p>
</div>
```

Frame the instructor as the curator. Students do not upload their own work to the collection — the instructor selects and uploads course materials.

## Exercise Slides (Hands-On)

Exercise slides (Part III) follow this pattern:
- Template in the `.stage` panel with a copy button
- "Your turn" tip-box in `.content` after instructions
- Three steps maximum per exercise arc

Copy button pattern:

```html
<button class="copy-btn" onclick="copyTemplate('template-id')" aria-label="Copy template to clipboard">
  Copy Template
</button>
<pre id="template-id" class="template-block">
Template text here
</pre>
```

## Updating Slide Count

When adding or removing slides, update the `aria-label` numbers on all subsequent slides. Also search `deck-engine.js` for `totalSlides` and update that value.

## SLIDES.md Format

After every `index.html` edit, update `SLIDES.md`. Each slide section follows:

```markdown
## Slide N -- Title (`layout-class`)

**Label:** Label Text

Main content summary or verbatim key text.

**Stage:** Description of what's in the stage panel.
```

## Adapting for a New Workshop

To use this template for a different topic:

1. Update slides 1-2: new title, date, roadmap position
2. Replace the concept section (slides 6-10) with the new feature's what/where/why/how
3. Replace discipline examples with examples relevant to the new topic
4. Keep the exercise section structure; swap in new templates
5. Update the roadmap "next week" entry in slide 2
6. Update `CLAUDE.md` project overview section with the new workshop description
