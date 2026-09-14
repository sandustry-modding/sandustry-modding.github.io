---
type: Reference
title: Factory enums
description: StructureType, BuildingClearance, AuthorizationType, and BuildMode live values on 0.5.5.
tags:
  - sandustry
  - okf
  - factory
  - enums
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: vanilla-055-probe
    resource: sandustry 0.5.5 live session
---

# Enums

Live values from `sandkit.enums` on 0.5.5.
Prefer string structure ids from API when registering mods.

## `StructureType` (builtin 1–27)

| Name                       | Value |
| -------------------------- | ----- |
| ConveyorLeft               | 1     |
| ConveyorRight              | 2     |
| ShakerLeft                 | 3     |
| ShakerRight                | 4     |
| LauncherUp                 | 5     |
| LauncherLeft               | 6     |
| LauncherRight              | 7     |
| SplitterLeft               | 8     |
| SplitterRight              | 9     |
| Dropper                    | 10    |
| Foundation                 | 11    |
| FoundationAngledLeft       | 12    |
| FoundationTriangleLeftDel  | 13    |
| FoundationAngledRight      | 14    |
| FoundationTriangleRightDel | 15    |
| Collector                  | 16    |
| FilterLeft                 | 17    |
| FilterRight                | 18    |
| SlidingFoundation          | 19    |
| VelocitySoaker             | 20    |
| Grower                     | 21    |
| SoundBox                   | 22    |
| Pipe                       | 23    |
| Pump                       | 24    |
| LiquidVent                 | 25    |
| Light                      | 26    |
| FluxEmanator               | 27    |

Mod structures use string ids (`conveyorLeftMk2`, `signalButton`, ...).
`store.structures[].type` may be number or string.

Duplicate enum also on `sandkit.api.building.StructureType` (same values).

## `BuildingClearance`

| Member           | Value |
| ---------------- | ----- |
| Available        | 1     |
| FullyBlocked     | 2     |
| PartiallyBlocked | 3     |
| CanBeReplaced    | 4     |

Used during placement checks.
`PartiallyBlocked` and `CanBeReplaced` (with shape overlap) set `structure.queued`.

## `AuthorizationType`

See [Authorization](/okf/factory/authorization.md).

## `BuildMode`

| Member      | Value |
| ----------- | ----- |
| Linear      | 1     |
| Rectangular | 2     |

On structure definition `buildModes`, not on instances.

## Related

- Full enum bag list: [Internals: engine and workers](/okf/internals/engine-and-workers.md).
- `CellType` conveyor/shaker/grower terrain ids overlap logistics — [World: grid and elements](/okf/world/grid-and-elements.md).
