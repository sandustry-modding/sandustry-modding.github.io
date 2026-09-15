---
type: Reference
title: Input
description: session.input fields, sandkit.api.input methods, and live KeyBinding key map for Early Access 0.5.5.
tags:
  - sandustry
  - okf
  - player
  - input
  - bindings
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: player-guide
    resource: /guides/player.md
---

# Input

Key **binding ids** and live key codes — not the full Options Controls table.
Full controls UI lives in [UI: HUD and overlays](/okf/ui/hud-and-overlays.md).

## `session.input`

| Field                                  | Role                                                                                                              |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `mode`                                 | `"kbm"` or deck mode                                                                                              |
| `currentLastKey`, `currentLastKeyCode` | Last key event                                                                                                    |
| `keys`                                 | Map of `KeyboardEvent.code` -> pressed (`KeyW`, `ShiftLeft`, ...)                                                 |
| `bindingStates`                        | Per-binding hold state (often `{}`)                                                                               |
| `action`                               | `{ move: { order: [] }, boost: bool }` — movement intent                                                          |
| `mouse`                                | `pressed`, `clicked`, `released`, `position`, `worldPosition`, `cellPosition`, `lastCellPosition`, `lastBigMoveX` |
| `deckLastManagementTab`, `deckCursor`  | Steam Deck UI — fields still exist when `mode` is `"kbm"` (see below)                                             |

## `sandkit.api.input`

| Method                                  | Arity | Notes                                                                |
| --------------------------------------- | ----- | -------------------------------------------------------------------- |
| `registerBinding(id, defaultKeys, def)` | 3     | **mutate**                                                           |
| `getMousePositionAtCell()`              | 0     | `{ x, y }` cell under cursor, alias `getMouseCellPosition` (same fn) |
| `getMousePositionAtWorld()`             | 0     | `{ x, y }` world pixels under cursor                                 |
| `getBoundKeys(bindingId)`               | 1     | Key strings from settings                                            |
| `getDisplayKey(bindingId, fallback?)`   | 2     | UI label                                                             |
| `triggerBinding(id)`                    | 1     | **mutate** — fire down handler                                       |
| `pressBinding(id)`                      | 1     | **mutate** — down without release                                    |
| `releaseBinding(id)`                    | 1     | **mutate** — fire up handler                                         |
| `resetMouseState()`                     | 0     | **mutate**                                                           |
| `isCtrlHeld()`                          | 0     | Modifier                                                             |
| `isAltHeld()`                           | 0     | Modifier                                                             |

`getBoundKeys` uses settings strings like `"Control+KeyC"`.
`session.input.keys` uses `KeyboardEvent.code`.
Modifier aliases (`Shift`, `Control`, ...) expand to `ShiftLeft` / `ShiftRight`, etc.

## Live `KeyBinding` -> keys (this session)

Probe: `api.input.getBoundKeys(sandkit.enums.KeyBinding.<Name>)`.

| Binding id                     | Live keys                                  |
| ------------------------------ | ------------------------------------------ |
| OpenBuildMenu                  | KeyQ                                       |
| OpenInventory                  | Tab                                        |
| OpenTechTree                   | KeyT                                       |
| OpenUpgrades                   | KeyU                                       |
| GrapplingHook                  | KeyG                                       |
| Escape                         | Escape                                     |
| Pause                          | KeyP                                       |
| Left / Right / Boost / Descend | KeyA / KeyD / KeyW / KeyS                  |
| Hover                          | Space                                      |
| SprintBoost                    | Shift                                      |
| Marquee                        | KeyC                                       |
| Demolish                       | KeyX                                       |
| BuildMode                      | KeyR                                       |
| ReverseBuildDirection          | Alt                                        |
| OverrideReplaceStructures      | Control                                    |
| Ruler                          | KeyV                                       |
| Copy / Paste / Flip            | Control+KeyC / Control+KeyV / Control+KeyH |
| Delete                         | Backspace                                  |
| QuickSave / QuickLoad          | F5 / F9                                    |
| ToggleGameHud                  | F4                                         |
| PauseCamera                    | KeyN                                       |

Mod and per-save rebinding can change these.
Re-probe before simulating keys.

## Deck fields on keyboard saves

When `session.input.mode` is `"kbm"`, deck helpers remain on the object but stay idle until deck mode is active.

Live probe (0.5.6, kbm):

| Field | Live value | Role |
| --- | --- | --- |
| `deckCursor.x`, `deckCursor.y` | `0`, `0` | Virtual cursor cell position |
| `deckCursor.initialized` | `false` | Deck cursor not active on this session |
| `deckCursor.aimX`, `deckCursor.aimY` | `1`, `0` | Aim vector when deck aims |
| `deckLastManagementTab` | `"inventory"` | Last management column tab for deck navigation |

## Deck cursor flow (`mode === "pad"`) — 0.5.6 extract

Gamepad activity sets `session.input.mode` to `"pad"` and clears `deckCursor.initialized`.
When `mode !== "pad"`, the keyboard/mouse input path runs instead.

During gameplay (not paused, menu closed):

| Aim mode | When | Cursor behavior |
| --- | --- | --- |
| **Free** | Building active, grabber tool, or other free-aim tools | On first use, `deckCursor.{x,y}` seeds from current mouse position (canvas-normalized). Left stick moves `deckCursor` and writes `session.input.mouse.position`. Sets `mouse.available = true`. |
| **Fixed** | Most weapons and tools | `mouse.position` = player center + `40 * deckCursor.aimX/Y` offset from camera. Right stick updates `aimX` / `aimY` (normalized). |

Other pad routing (same handler):

- **Start** (gamepad button 9): toggles pause menu.
- **Select** (button 8): cycles management tabs using `deckLastManagementTab`.
- **D-pad** while paused/menu: tab navigation helpers.
- Left stick below threshold synthesizes `KeyBinding.Left` / `Right` key codes into `session.input.action.move`.
- Triggers map to boost (`session.input.action.boost`).

Return to `"kbm"` when Steam Input reports keyboard/mouse activity (`lt` loop checks `(0,ue.A0)()`).

## Related concepts

- [Session state](/okf/player/state.md)
- [Enums](/okf/player/enums.md)
- [UI: HUD and overlays](/okf/ui/hud-and-overlays.md)
- [Probe](/okf/player/probe.md)
