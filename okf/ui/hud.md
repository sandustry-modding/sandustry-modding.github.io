---
type: Reference
title: HUD screen map
description: Live Early Access 0.5.5 HUD layout — resources, management column, hotbar, objectives, and shortcuts.
tags:
  - sandustry
  - okf
  - ui
  - hud
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: extract
    resource: sandustry/source/
---

# HUD screen map

Version chip **v0.5.5**.
This save: **MAX LEVEL**, viability bar.
ComponentIds: **HudTopLeft** (resources column), **HudTopRight** (menu, viability, objectives).

## Top left

Resources: **Credits**, **Fluxite**, **Energy** (icon + count).

Collapse chevron, then rows:

| Label    | Badge | Overlay                                          |
| -------- | ----- | ------------------------------------------------ |
| Toolbox  | Tab   | [Toolbox](/okf/ui/toolbox.md)                    |
| Building | Q     | [Building](/okf/ui/building.md)                  |
| Research | T     | [Research](/okf/ui/research.md)                  |
| Upgrades | U     | [Upgrades](/okf/ui/upgrades.md)                |

Extra rows: `sandkit.api.ui.registerManagementMenuButton` — see [Overlay API](/okf/ui/overlay-api.md).

**Debug** ([Debug overlay](/okf/ui/debug.md)).
Hidden while DEBUG is open.

**Stats** expand/collapse: Elem, Dmg (Next, Free), % IDs free, Lights static/fx, Structures, Particles, Mouse World/Cell, Heap, SAB (sim/other), Calc, Measured.

## Top right

**Menu [Esc]** ([Pause menu](/okf/ui/pause.md)).
**Viability**.
**Objectives** (story card).
**SECONDARY** checklist.

## Bottom center — hotbar

Bank up / n / down.
Slots 1-9 and 0.
Two empty buttons after 0.

This session: Grabber, Gun, Flamethrower, Signal Button, Conveyor, Launcher, Flare Gun, Filter, Light, Velocity.

Banks: [Options](/okf/ui/options.md) **Hotbars**.
Keys: [Keybindings](/okf/ui/bindings.md) HOTBAR.

## Bottom left — shortcuts

**Hide Shortcuts**.
Default chips: Ctrl+Z Undo, Space Hover, E Radial, C Select, X Delete, Middle Click Picker, V Ruler.

## Chrome outside `#ui`

**Toggle Activity Heatmap**, zoom minus / plus.

## Hide UI

**F4**, or Options -> General -> **Hide UI**.
**Esc** shows UI again.

## Related concepts

- [DOM and scenes](/okf/ui/dom.md)
- [Overlay API](/okf/ui/overlay-api.md)
