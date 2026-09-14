---
type: Reference
title: Engine energy
description: Internal sandkit.engine.api.energy registry, method name map, and state.sandkit.mods.energy structure types.
tags:
  - sandustry
  - okf
  - energy
  - engine
  - runtime
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: engine-guide
    resource: /guides/engine.md
---

# Engine energy

Internal: `sandkit.engine.api.energy` (state-first, pass `state` as arg 0).
Prefer public `sandkit.api.energy` in mods.

## Engine method names (live)

| Engine | Public wrapper |
| --- | --- |
| `registerType` | `registerType` |
| `add` | `addAtCell` |
| `consume` | `consume` |
| `consumeExcludingNetwork` | `consumeExcludingNetworkAtCell` |
| `getNetwork` | `getNetworkAtCell` |
| `getNetworkFreeCapacity` | `getNetworkFreeCapacityAtCell` |

Also on engine only: `addBatch`.

## state.sandkit.mods.energy

Registry written by `registerType`.
Live on this save:

| Structure id | Type | Notable options |
| --- | --- | --- |
| `powerBrick` | storage | `priority: 1`, `spritesheetThresholds`, `onCharge` |
| `goldBattery` | storage | `excludeFromNetwork`, `canConsume`, `onConsume`, `spritesheetThresholds` |
| `steamTurbine` | conductor | — |
| `electricityConnector` | conductor | — |
| `snowmaker` | conductor | — |

`state.sandkit.mods.energyPriorities` — live `[0, 1]` (storage drain order).

Networks walk orthogonal neighbors at **4-cell** spacing (structure snap grid).
Nodes with `excludeFromNetwork` (goldBattery) are omitted from graph traversal but still store energy locally.

## Related

- [sandkit.api.energy](/okf/energy/api-energy.md) — public wrapper surface.
- [Engine and workers](/okf/internals/engine-and-workers.md) — when to use engine vs public API.
