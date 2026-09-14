---
type: Reference
title: HUD and overlays
description: Index for the UI guide — HUD updates, toasts, dialogs, region mounts, hotbar banks, and React UI hooks.
tags:
  - sandustry
  - okf
  - ui
  - hud
  - overlays
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: ui-guide
    resource: /guides/ui.md
---

# HUD and overlays

## Trigger

Load this concept when your mod updates vanilla HUD components, shows toasts or tooltips, opens dialogs, mounts React UI in overlay regions, extends the hotbar, or adds controller focus.[^ui-guide]

## Guide outline

The UI guide states that `sandkit.api.ui` runs on the main thread except worker-safe toast.
It separates Sandkit `api.ui` from the mod template kit UI overview.
It documents pushing state to built-in HUD components via `ComponentId` and `useRefresh`.
It covers pause menu opening and custom panel injection when Options schema is not public.
It explains toast variants, localized text shapes, and cursor tooltips.
It lists modal dialog helpers that return promises.
It prefers `regions.mount` over deprecated overlays with docked and raised placement.
It covers `inject`, component overrides, and built-in Panel, Button, and ActionSlot widgets.
It documents hotbar bank sources, slot selection, and hook-based hotbar state.
It notes controller navigation scopes and UI scale hooks.

## Vanilla screen map

Open one concept file when you need live Early Access 0.5.5 layout facts.

| Branch                                                               | Concept                                              |
| -------------------------------------------------------------------- | ---------------------------------------------------- |
| `#canvas` / `#ui` layers, z-index, scenes                            | [DOM and scenes](/okf/ui/dom.md)                     |
| Resources, management column, hotbar, objectives, shortcuts, heatmap | [HUD screen map](/okf/ui/hud.md)                     |
| Esc pause rows, Discord, seed, Mods inspector                        | [Pause menu](/okf/ui/pause.md)                       |
| Options General / Video / Audio / Mods schema                        | [Options](/okf/ui/options.md)                        |
| Save Game / Load Game dialogs                                        | [Save and load](/okf/ui/save-load.md)                |
| Send feedback / F2                                                   | [Feedback](/okf/ui/feedback.md)                      |
| Shared Tab/Q/T/U overlay chrome                                      | [Management overlay](/okf/ui/management.md)          |
| Toolbox items and Stratacores                                        | [Toolbox](/okf/ui/toolbox.md)                        |
| Building structures and blueprints                                   | [Building](/okf/ui/building.md)                      |
| Research tech tree and Conservatory                                  | [Research](/okf/ui/research.md)                      |
| Upgrades cards                                                       | [Upgrades](/okf/ui/upgrades.md)                      |
| Debug F3 tabs (spawn, cheats, sim)                                   | [Debug overlay](/okf/ui/debug.md)                    |
| Default keybindings                                                  | [Keybindings](/okf/ui/bindings.md)                   |
| `inject`, `regions`, `overrides`, `hotbar`, `select`, ComponentId    | [Overlay API](/okf/ui/overlay-api.md)                |
| Screens not walked yet                                               | [Screen gaps](/okf/ui/gaps.md)                       |

## Pointers

- [Official Sandkit API](https://sandustry.com/sandkit.html) — signature truth for runtime shapes.
- [How to read Sandkit](/okf/api/how-to-read-sandkit.md) — how to use generated member pages under `/api/`.
- Generated namespaces named in the guide:
  - [sandkit.api.ui](/api/sandkit.api.ui.md) and [sandkit.api.ui (worker toast)](/api/sandkit.api.ui.worker.md)
  - [sandkit.api.ui.regions](/api/sandkit.api.ui.regions.md)
  - [sandkit.api.ui.hotbar](/api/sandkit.api.ui.hotbar.md)
  - [sandkit.api.ui.components](/api/sandkit.api.ui.components.md)
  - [sandkit.api.ui.navigation](/api/sandkit.api.ui.navigation.md)
  - [sandkit.api.ui.overrides](/api/sandkit.api.ui.overrides.md)
  - [sandkit.enums.ComponentId](/api/sandkit.enums.ComponentId.md)

## Related domains

- [Player: inventory and items](/okf/player/inventory-and-items.md) — hotbar slot logic and input bindings behind UI mounts.
- [Engine and workers](/okf/internals/engine-and-workers.md) — main-thread React via `sandkit.react` and worker toast-only surface.

## Sources

[^ui-guide]: Primary guide — [/guides/ui.md](/guides/ui.md).
