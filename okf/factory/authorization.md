---
type: Reference
title: Authorization
description: Build, grab, and tool permission zones on the authorization grid.
tags:
  - sandustry
  - okf
  - factory
  - authorization
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: vanilla-055-probe
    resource: sandustry 0.5.5 live session
  - id: live-056
    resource: CDP :9222 0.5.6 dev-tools save
  - id: bundle-056
    resource: sandustry 0.5.6 bundle.js extract
  - id: official-sandkit
    resource: https://sandustry.com/sandkit.html
---

# Authorization

Build and grab permission zones.
Main thread only.

## `sandkit.api.authorization` (live)

| Method                                            | Role                        |
| ------------------------------------------------- | --------------------------- |
| `canBuildAtCell(cellX, cellY)`                    | Player may place structures |
| `canGrabAtCell(cellX, cellY)`                     | Player may grab elements    |
| `canUseTool(player, isFlamethrower?)`             | Tool use at player position |
| `canUseToolAtCell(cellX, cellY, isFlamethrower?)` | Tool use at cell            |
| `getZoneIdAtCell(cellX, cellY)`                   | Zone id at cell             |
| `getPlayerZoneId()`                               | Zone id under player        |

Engine twin (state first): `canBuild`, `canGrab`, `canUseTool`, `canUseToolAt`, `getZoneIdAt`, `getPlayerZoneId`.

## `shared.authorization`

| Field             | Live                                                          |
| ----------------- | ------------------------------------------------------------- |
| `width`, `height` | Match world grid (3840² campaign; **720** on `irishbruse.dev-tools` saves probed 0.5.6; **1024** on other dev autosaves) |
| `data`            | `Uint8Array` len **width × height**, zone id per cell |

Zone `0` means unrestricted.
`getZoneIdAtCell` / engine `getZoneIdAt` returns the raw cell value (`0`–`12` on vanilla maps).

## Zone id → restrictions (0.5.6 bundle)

Each zone id maps to a list of `AuthorizationType` flags.
Engine precomputes a bitmask per zone for fast player-rect scans.

| Zone id | Restrictions | F3 overlay RGB |
| --- | --- | --- |
| 1 | NoJetpack, NoGrab, NoBuild, NoTool | 255, 0, 0 |
| 2 | NoBuild, NoGrab, NoTool | 255, 255, 0 |
| 3 | NoBuild | 255, 255, 255 |
| 4 | NoExcavation | 0, 0, 255 |
| 5 | NoJetpack, NoGrab, NoBuild, NoExcavation | 0, 255, 0 |
| 6 | NoJetpack, NoGrab, NoBuild, NoTool, NoExcavation | 255, 0, 255 |
| 7 | NoGrab, NoBuild, NoExcavation | 0, 255, 255 |
| 8 | NoGrab, NoBuild, NoExcavation, NoTool | 255, 128, 0 |
| 9 | NoJetpack, NoGrab, NoTool, NoExcavation | 128, 0, 255 |
| 10 | NoBuild, NoGrab | 0, 128, 255 |
| 11 | NoToolExceptFlamethrower, NoBuild | 128, 255, 0 |
| 12 | NoJetpack, NoGrab, NoBuild, NoExcavation, NoToolExceptFlamethrower | 128, 128, 0 |

`canBuild` / `canBuildAtCell`: false when the cell's zone list includes `NoBuild` (zone **3** is NoBuild-only).
Tutorial override: active tutorial before `BuildShaker` step forces build allowed.

## Engine twin via FH (0.5.6 evaluate)

When ambient `sandkit.api.authorization` is undefined in CDP evaluate, bind webpack module **46781** — [Evaluate](/okf/live/evaluate.md).

| Public | Engine twin (`FH.authorization`) |
| --- | --- |
| `canBuildAtCell(x, y)` | `canBuild(state, x, y)` |
| `canGrabAtCell(x, y)` | `canGrab(state, x, y)` |
| `getZoneIdAtCell(x, y)` | `getZoneIdAt(state, x, y)` |
| `getPlayerZoneId()` | `getPlayerZoneId(state)` |

Live dev-tools save (`irishbruse.dev-tools-exitsave`, scene 4): `(500,500)` → zone **0**, `canBuild` **true**.
Stamped zone **3** behavior unchanged from prior probe — see below.

Live 0.5.6 probe: stamped zone **3** on a 5×5 block at `(260,260)` → **25** non-zero cells; center sample `3`, outside stamp `0`.

Do not dump `data` in probe scripts.
Sample sparse cells only.

## `sandkit.enums.AuthorizationType`

| Member                     | Value |
| -------------------------- | ----- |
| `NoJetpack`                | 1     |
| `NoGrab`                   | 2     |
| `NoBuild`                  | 3     |
| `NoTool`                   | 4     |
| `NoExcavation`             | 5     |
| `NoToolExceptFlamethrower` | 6     |

## Debug

F3 `config.debug.showAuthorizationZones` — overlay ([UI: HUD and overlays](/okf/ui/hud-and-overlays.md)).

## Related

- Placement blocked by terrain uses `sandkit.api.building.isBlockedAtCell` — separate from authorization.
- Player session building: [Player: inventory and items](/okf/player/inventory-and-items.md).
- Enum values: [Enums](/okf/factory/enums.md).
