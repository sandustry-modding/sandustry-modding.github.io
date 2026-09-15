---
type: Reference
title: Vanilla refinery recipes
description: Builtin weighted refinery recipe tables per machine recipe slot and structure id from bundle 0.5.6.
tags:
  - sandustry
  - okf
  - factory
  - processing
  - recipes
status: stable
generated:
  by: agent
  at: 2026-09-15T20:00:00Z
sources:
  - id: bundle-056
    resource: sandustry/source/dist/js/bundle.js
  - id: processing
    resource: /okf/factory/processing.md
---

# Vanilla refinery recipes

Builtin thermal machines use `structures.recipes.register` recipe **slots** that differ from structure **ids**.
Vanilla rows are hardcoded at boot and mirrored into `state.sandkit.mods.recipes` slots.
`getWeightedRecipe` returns null for vanilla shaker, grower, and press inputs — see [Processing and recipes](/okf/factory/processing.md).

Source: `sandustry/source/dist/js/bundle.js` (0.5.6 extract).

## Slot vs structure id

| Recipe slot (`recipes.register` id) | Structure id | English name |
| --- | --- | --- |
| `condenser` | `thermofroster` | Condenser |
| `steamDryer` | `thermodryer` | Steam Dryer |
| `synthesizer` | `aurixiteCrystallizer` | Synthesizer |
| `snowmaker` | `snowmaker` | Snowmaker |
| `smelter` | `smelter` | Smelter |

## `condenser` (`thermofroster`)

Hardcoded source table `wh` in bundle.
Registered at `mods:internal-ready` into slot `condenser` (`vh`).

| Input (element id) | Outputs (`elementType`, `chance`) | Notes |
| --- | --- | --- |
| `florin` | Gold (0.5), `florinol` (0.5) | Records `CondenseFlorin` process index |
| `steam` | Water (1.0) | Deterministic |

Processing: `structures.processing.register` on `thermofroster`, interval **500** ms.
Uses cold from adjacent `thermalRelay` or `freezingIce` above.

## `steamDryer` (`thermodryer`)

| Input (element id) | Outputs (`elementType`, `chance`) | Notes |
| --- | --- | --- |
| `petalium` | `dryPetalium` (1.0) | Requires `steam` in the cell row below (10% consume chance per tick) |

## `synthesizer` (`aurixiteCrystallizer`)

| Input (element id) | Outputs (`elementType`, `chance`) | Notes |
| --- | --- | --- |
| `florinol` | `aurixite` (1.0) | Consumes **800** energy per conversion (`Lb` constant) |

Horizontal line structure.
Element enters from the side; conversion queues on `aurixiteCrystallizer:queueConvert`.

## `snowmaker` (`snowmaker`)

| Input (element id) | Outputs (`elementType`, `chance`) | Notes |
| --- | --- | --- |
| `water` | `freezingIce` (1.0) | Consumes **1** energy per cycle |

Registered at boot with `energy.registerType(..., "conductor")`.
Processing interval **100** ms.
Spawns output in a random 2×2 cell block below the machine footprint.

## `smelter` (`smelter`)

Hardcoded source table `pg` in bundle.

| Input (element id) | Outputs (`elementType`, `chance`) | Notes |
| --- | --- | --- |
| `gold` | `liquidGold` (0.5) | **25%** tick abort before conversion roll |
| `copper` | `liquidCopper` (1.0) | Requires `lava` below (10% consume chance) |

Processing interval **500** ms.
Fueled by heat from `thermalRelay` or `lava`.

## Mod rows

Mods append to the same `state.sandkit.mods.recipes` slot arrays.
Live probe sample: [Processing and recipes](/okf/factory/processing.md#mod-refinery-rows-statesandkitmodsrecipes).

## Related

- [Factory viability](/okf/factory/factory.md) — `condenseFlorin` process id for factory tier checks.
- [Enums](/okf/factory/enums.md) — builtin numeric structure types (thermal machines are string ids).
