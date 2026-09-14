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
| `width`, `height` | `3840` `3840` (cell grid)                                     |
| `data`            | `Uint8Array` len **14745600** (3840 x 3840), zone id per cell |

Zone `0` means unrestricted.
Live player cell and sampled corners were **0**; `canBuildAtCell` true.
Non-zero zone layouts were not present on this save.

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
