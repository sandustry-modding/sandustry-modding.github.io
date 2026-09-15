---
type: Reference
title: DOM and scenes
description: Renderer DOM layers, z-index anchors, and Scene enum values for the Game screen.
tags:
  - sandustry
  - okf
  - ui
  - dom
  - scenes
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

# DOM and scenes

| Node              | Role                       |
| ----------------- | -------------------------- |
| `#canvas`         | World                      |
| `#overlay-canvas` | 2D overlay canvas          |
| `#ui`             | React HUD and menus        |
| Last `body` child | Heatmap, zoom minus / plus |

Typical `#ui` children in **Game**:

| Index | Anchor                            | Contents                                    |
| ----- | --------------------------------- | ------------------------------------------- |
| 0     | full screen, often `display:none` | Hidden debug/perf                           |
| 1     | `z-[10005]`                       | Global overlays / toasts                    |
| 2     | bottom center                     | Hotbar                                      |
| 3     | top left `z-[9999]`               | Resources, management column, Debug / Stats   |
| 4     | top center                        | Notifications                               |
| 5     | high z                            | Dialogs / tooltips                          |
| 6     | top right                         | Menu, Viability, Objectives                 |
| 7     | bottom left                       | Shortcut helper                             |

Management overlay: `z-[10004]`.
Pause dimmer: `z-[10010]`.

`sandkit.enums.Scene`: MainMenu 1, Intro 2, Deploy 3, Game 4.
Live probe: `store.scene.active` **4** (Game).

## Session path (live 0.5.6)

Runtime session lives at `__debug.state.session` (not `store.session`).
Use this path in CDP `evaluate_script` when `sandkit` is undefined.

## `session.windows` keys (live 0.5.6)

All probed with `open: false` during play:

`building`, `inventory`, `techTree`, `upgrades`, `menu`, `loader`, `options`, `lexicon`, `blueprints`, `modsScreen`, `customMapsScreen`, `conservatory`, `feedback`.

`session.ui` keys: `visible`, `listeners`, `tooltip`, `introScreen`, `dialogs`, `discoveryPopups`, `hudHidden`.

## Related concepts

- [HUD screen map](/okf/ui/hud.md)
- [Management overlay](/okf/ui/management.md)
- [Pause menu](/okf/ui/pause.md)
