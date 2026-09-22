---
type: Reference
title: Sim crafting — reactions, excavation, fire, patterns
description: sandkit.api.reactions, excavation, fire, patterns, and random helpers for world simulation on live 0.5.5.
tags:
  - sandustry
  - okf
  - world
  - reactions
  - excavation
  - fire
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: world-guide
    resource: /guides/world.md
  - id: extract
    resource: sandustry/source/
---

# Reactions, excavation, fire, patterns, random

Registration and pattern helpers for world sim.
Official: [sandkit.html](https://sandustry.com/sandkit.html).

## `api.reactions` (main)

`registerContact(definition)`:

- `inputA`, `inputB` — element string ids
- `outputA`, `outputB` — element string ids or `null`
- `orientation` (optional): `"any"` | `"stacked"`

Live store (0.5.5): registered contacts land in `state.sandkit.mods.recipes.contacts` (often empty).
Contact **mix** lookup also merges:

1. Engine builtins (not in `recipes.contacts`): Water+Sand→WetSand, Water+Seed→WetSeed, Water+Lava→Steam, Water+Flame→Steam — table in `js/bundle.js` as `[[r.RJ.Water,r.RJ.Sand,r.RJ.WetSand],…]`
2. Element defs with `mixes[]`: `{ elementType, result, secondaryResult? }` (example: Void Petal + Redsand → Voidbloom)
3. Mod `registerContact` rows (participant-bound A/B outputs; skipped when a mix already covers the pair)

Same `recipes` bag also holds **mod** machine rows: `condensers`, `steamDryers`, `synthesizers`, `snowmakers`, `smelters`, `growers`, `shakers`, `kineticPresses`.
Vanilla shaker / grower / press work is **not** in those arrays (they start empty).
Hardcoded machine paths: see [Factory: structures and pipes](/okf/factory/structures-and-pipes.md).

## `api.excavation` (main)

`registerProfile(id, definition)`:

- `definition.pattern`, `definition.power`, `definition.options` (same flags as `grid.excavateAtCell`)
- `definition.terrainRules[]`: `{ cellType, damage, outputElementType }` — deprecated alias `terrainType` → `cellType`

## `api.fire` (main and worker)

| Method                               | Role                 |
| ------------------------------------ | -------------------- |
| `canBurnElementAtCell(cellX, cellY)` | Burn eligibility     |
| `burnElementAtCell(cellX, cellY)`    | Ignite (**mutates**) |

Main entry deprecated alias: `burnElementAtCellWhenIdle` → `burnElementAtCell`.
Engine twin: `engine.api.fire.canBurnElementAt` / `burnElementAt`.

Residue is burnable with **no** `def.flammable` object (only `interactions: [{ kind: "flammable" }]`).
`burnElementAt` replaces it with Flame whose `data.output` is Burnt Residue at chance **0.25**.
Water also lists `kind: "flammable"` with no burn product.
Mod elements that set `flammable.outputElementId` use that object instead.

### Lava and flame spread

Lava and Flame share one duration handler.
There is no element flag that means “emit fire.”
On that pulse the handler checks the four orthogonal neighbors.

| Source | Empty neighbor | Spawn |
| --- | --- | --- |
| Lava | **1%** (`0.01`) | **Fire** with `data.temperature` **1200** |
| Flame | **25%** (`0.25`) | **Fire** (duration copied from the flame when set) |

Lava’s definition `duration` is **0.28** seconds.
After the neighbor pass, lava sets `durationLeft` to `durationMax * random(0.5, 1.5)`, picks `variantIndex` **0–3**, refreshes color, and stays.
`durationLeft` decreases by the same `dt` the mover uses for gravity.
Fire’s own definition is Gas, density **25**, `duration` **1.28** seconds, `durationRandom` **1.03–2.53**, default temperature **1000**.

A flammable neighbor on that same pass burns in place.
Residue becomes Flame with Burnt Residue as the **0.25** output.
See [Elements](/okf/world/elements.md) for duration expiry and `setDurationAtCell`.

## `api.patterns` (main and worker)

| Method                                                                | Role                      |
| --------------------------------------------------------------------- | ------------------------- |
| `createCircle(diameterCells)`                                         | `number[][]` mask         |
| `excavateAtCell(cellX, cellY, pattern, outVelocity, power, options?)` | Pattern dig (**mutates**) |

## `api.random` (main and worker)

| Method            | Role              |
| ----------------- | ----------------- |
| `int(min, max)`   | Inclusive integer |
| `float(min, max)` | Inclusive float   |

## Related concepts

- [Elements API](/okf/world/elements.md)
- [Terrains API](/okf/world/terrains.md)
- [Grid, world alias, and pickups](/okf/world/world-api.md)
