# Skills

Portable, reusable skills for CLI agents (Claude Code, Codex, etc.) working with this slide deck template.

Load the relevant skill before starting work. Skills are self-contained — each `SKILL.md` contains everything the agent needs for that domain.

## Available Skills

| Skill | When to Use |
|---|---|
| [`frontend-design`](./frontend-design/SKILL.md) | Any CSS, layout, color, typography, animation, or visual component change |
| [`slide-author`](./slide-author/SKILL.md) | Writing or substantially revising slide content; adapting the deck for a new workshop |

## How to Use (Claude Code)

```
Read skills/frontend-design/SKILL.md before making any visual changes.
Read skills/slide-author/SKILL.md before writing or restructuring slide content.
```

## Adding a New Skill

Create a new folder under `skills/` and add a `SKILL.md` with a YAML front matter block:

```yaml
---
name: skill-name
description: One sentence — what this skill covers and when to use it.
---
```

Keep skills focused and portable. A skill should be usable in any fork of this template without modification.
