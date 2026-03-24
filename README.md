# Slide Deck Template

A custom HTML slide deck engine used for CUNY AI Lab faculty workshops. No build system, no dependencies — open `index.html` in a browser.

**Live example:** <https://cuny-ai-lab.github.io/knowledge-collections/>

---

## Quick Start

```bash
git clone https://github.com/CUNY-AI-Lab/knowledge-collections.git
cd knowledge-collections
open index.html
```

Navigate with arrow keys or spacebar. Press Esc for slide overview. Deep-link to any slide: `index.html#/5`

---

## What's in the Repo

```
index.html        — all slide content; source of truth
SLIDES.md         — markdown mirror of slide content; keep in sync manually
css/
  styles.css      — layout, components, design tokens
  responsive.css  — breakpoint overrides
  animations.css  — keyframes + prefers-reduced-motion override
js/
  tabs.js         — tab component
  carousel.js     — auto-advancing image carousel
  scrubber.js     — nav bar scrubber / ARIA slider
  deck-engine.js  — core navigation, focus management, live announcements
images/           — screenshots; naming convention: slideN-letter.png
CLAUDE.md         — guidance for Claude Code and other AI coding agents
AGENTS.md         — guidance for CLI agents (Codex, Claude Code, etc.)
```

---

## Customizing for a New Workshop

1. Clone or fork the repo
2. Edit `index.html` — slides are `.slide` divs inside `#deck`
3. Update `SLIDES.md` to mirror any content changes
4. Replace or add images to `images/` as needed
5. Update the title, date, and roadmap slides (slides 1-2)
6. Push to a new GitHub repo and enable GitHub Pages (root `/`, `main` branch)

---

## Slide Layouts

| Class | Use |
|---|---|
| `layout-split` | Two-column: `.content` (left) + `.stage` (right panel) |
| `layout-content` | Single-column, light background |
| `layout-full-dark` | Centered, dark background |
| `layout-divider` | Section break, dark, large heading |
| `layout-grid` | Light background with `.grid-2` card layout |

---

## Accessibility

This deck targets WCAG 2.1 AA. Every slide requires `role="group" aria-roledescription="slide" aria-label="Slide N: Title" tabindex="-1"`. Do not remove or weaken accessibility attributes. See `AGENTS.md` for the full checklist.

---

## Deploy

Push to `main` — GitHub Pages rebuilds automatically. No build step required.

---

## Related Repos

- <https://github.com/CUNY-AI-Lab/system-prompting> — Workshop 1 (same engine)
- <https://github.com/milwrite/slide-decks> — aggregator tracking both workshops
