---
type: Reference
title: Research
description: Research management tab — Tech Tree graph and Conservatory creatures and rewards.
tags:
  - sandustry
  - okf
  - ui
  - research
  - tech
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: extract
    resource: sandustry/source/
---

# Research

Chrome: [Management overlay](/okf/ui/management.md).
Sub-tabs **Tech Tree**, **Conservatory**.

## Tech Tree

Graph (SVG) inside the management overlay.
Sub-tab button **Tech Tree** (sibling **Conservatory**).

Live a11y on CDP `:9222` (0.5.6):

- Dozens of clickable nodes labeled **✓** only (unlocked).
- At least one node shows badge text **AUTHORIZED** (not clickable like checkmarks).
- Visible cost label on graph: **Aura** **10,000** (repeated near nodes).
- Node display names are **not** in the research graph a11y tree (only **✓**, **AUTHORIZED**, and cost labels).

Map graph nodes to Lexicon `kind: "tech"` entries (`session.lexicon.entries`, **56** on dev autosave).
Each entry has `id`, `name`, and optional `details.nameKey`.

| Graph id (examples) | Lexicon name |
| --- | --- |
| 1 | Shaker |
| 2 | Logistics |
| 91 | Map |
| 108 | Hover |
| voidOrb | voidOrb |
| swarmConsole | swarmConsole |
| fluxEmanator | fluxEmanator |

Full grid coordinates: [Tech tree structure](/okf/progression/tech-tree.md#live-grid-056).
Numeric ids without Lexicon `name` strings (e.g. **71**, **106**) resolve via unlock-target i18n — see [Numeric grid ids](/okf/progression/tech-tree.md#numeric-grid-ids--lexicon-and-unlock-names-056).

## Conservatory

Sub-tab button **Conservatory**.
Headings **Creatures** and **Rewards** (h2).

**Creatures** (live 5/5 on dev autosave): each row is image + name + flavor + **Captured:** count.

| Name       | Flavor (short)                                      |
| ---------- | --------------------------------------------------- |
| Shinelet   | Delicate light-bug in the dark                      |
| Lumling    | Springborn cavern drifter, water bursts             |
| Redweaver  | Threads strings of Redsand                          |
| Voltblub   | Electric creature for solid energy blocks           |
| Voidgrazer | Liquefies Voidhusk into Voidjuice                   |

**Rewards** (live 11/11): clickable tickets with unlock blurbs — Coloring Tool, Glass Foundation, Critter Fence, Door, Grappling Hook, Precision Tools, Signal Devices, Signal Controls, Logic Gates, Wall Tool, Retro Console.

## Related concepts

- [Management overlay](/okf/ui/management.md)
- [Progression: tech and upgrades](/okf/progression/tech-and-upgrades.md)
- [Debug overlay](/okf/ui/debug.md)
