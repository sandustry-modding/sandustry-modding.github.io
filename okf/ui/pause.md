---
type: Reference
title: Pause menu
description: Esc pause rows, footer links, and sandkit.api.ui.openPauseMenu.
tags:
  - sandustry
  - okf
  - ui
  - pause
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

# Pause menu

**Menu [Esc]** or **Escape**.
Dimmer `z-[10010]`.
HUD stays behind.

Rows are `w-64 cursor-pointer` (not buttons), except **Dev Tools**.

| Label         | Opens                                              |
| ------------- | -------------------------------------------------- |
| Unstuck       | Teleport                                           |
| Send feedback | [Feedback](/okf/ui/feedback.md) (also F2)          |
| Continue      | Close pause                                        |
| Save          | [Save and load](/okf/ui/save-load.md)              |
| Load          | [Save and load](/okf/ui/save-load.md)              |
| Options       | [Options](/okf/ui/options.md)                      |
| Exit          | Leave run                                          |

Underscores: **C**ontinue, **S**ave, **L**oad, **O**ptions, **E**xit.

Footer: Discord `https://discord.gg/HJNk5eMnmt`, **Early Access 0.5.5 | seed:**, **Copy info for bug report**.

API: `sandkit.api.ui.openPauseMenu()`.

## Related concepts

- [HUD screen map](/okf/ui/hud.md)
- [DOM and scenes](/okf/ui/dom.md)
