---
type: Reference
title: Management overlay
description: Full-screen Tab/Q/T/U management chrome shared by Toolbox, Building, Research, and Upgrades.
tags:
  - sandustry
  - okf
  - ui
  - management
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: extract
    resource: sandustry/source/
---

# Management overlay

Full-screen `z-[10004]`.
HUD column stays visible.

| Tab      | Key | Detail                                           |
| -------- | --- | ------------------------------------------------ |
| Toolbox  | Tab | [Toolbox](/okf/ui/toolbox.md)                    |
| Building | Q   | [Building](/okf/ui/building.md)                  |
| Research | T   | [Research](/okf/ui/research.md)                  |
| Upgrades | U   | [Upgrades](/okf/ui/upgrades.md)                |

Detail pane: **Hover over an item to see details.**
Toolbox/Building: drag to hotbar; **Disable Drag & Drop** if clicks stick.

Open with `window` `keydown` when a HUD button has focus.

## Related concepts

- [HUD screen map](/okf/ui/hud.md)
- [Keybindings](/okf/ui/bindings.md)
- [DOM and scenes](/okf/ui/dom.md)
