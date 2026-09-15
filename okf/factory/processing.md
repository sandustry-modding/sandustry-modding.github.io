---
type: Reference
title: Processing and recipes
description: Machine recipe slots, vanilla engine hardcoding, and custom structure processing callbacks.
tags:
  - sandustry
  - okf
  - factory
  - processing
  - recipes
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

# Processing and recipes

Machine recipes and per-cell processing toggles.

## `api.structures.recipes.register` (canonical)

Official HTML documents machine recipes as `api.structures.recipes.register(id, definition)`:

| `id` slot                                                        | Role                                |
| ---------------------------------------------------------------- | ----------------------------------- |
| `planterBox`                                                     | Grower input -> output              |
| `shaker`                                                         | Shaker weighted outputs above/below |
| `kineticPress`                                                   | Press velocity threshold + outputs  |
| `condenser`, `steamDryer`, `synthesizer`, `snowmaker`, `smelter` | Weighted refinery outputs           |

Recipe shapes: `node_modules/@sandustry-modding/types/src/sandkit/api/structures.d.ts` (`recipes.register` overloads).
Weighted outputs use `{ elementType, chance }`.

Live extra (not in official HTML): top-level `sandkit.api.processing` with `registerGrower`, `registerShaker`, `registerKineticPress`.
Prefer `structures.recipes.register`.

Engine twin: `engine.api.structures.recipes.getWeightedRecipe`, `selectWeightedOutput`, `register`.
`getWeightedRecipe(state, slot, inputType)` only sees **mod** rows in `mods.recipes`.
It returns null for vanilla shaker / grower / press inputs.

## Engine builtins (not in `mods.recipes`)

`recipes.shakers`, `growers`, and `kineticPresses` start as `[]`.
Vanilla processing is hardcoded in the engine.
Mod `registerShaker` stores `{ input, outputsAbove, outputsBelow }`.
Mod grower rows store `{ input, output, chance }` (not `outputs[]`).

`getWeightedRecipe` returns null for these vanilla inputs.
Live scrape sources (game `js/bundle.js`):

| Source                 | Pattern                                                                                                               |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Contacts               | `[[r.RJ.Water,r.RJ.Sand,r.RJ.WetSand],…]`                                                                             |
| Residue burn           | `RJ.Residue]:()=>({output:{elementType:r.RJ.BurntResidue,chance:.25}})`                                               |
| Press / shaker outputs | Locale `structures\|velocitySoaker\|description` / `structures\|shaker\|description` (`{t:elements\|…\|name}` tokens) |
| Shaker gold chance     | `RefineWetSand?.5:.25` (non-tutorial branch)                                                                          |
| Grower                 | `RJ.WetSeed&&…RJ.Seedling` (description is harvest copy, not the seedling step)                                       |

| Input         | Engine path                               | Outputs                                                                                    |
| ------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------ |
| Wet Sand      | Shaker (`ShakeWetSand`)                   | Residue (nearby empty cell) + Gold below at **0.25** (0.5 during tutorial `RefineWetSand`) |
| Residue       | `fire.burnElementAt` (no `def.flammable`) | Flame → Burnt Residue at **0.25**                                                          |
| Burnt Residue | Kinetic Press (`PressBurntResidue`)       | Gold + Seed                                                                                |
| Wet Seed      | Planter Box (fallback when no grower row) | Seedling                                                                                   |

Flower harvest after Seedling is entity-side (Gold + Amethelis), not a grower recipe row.

Vanilla builtin refinery tables (slot id vs structure id, chances, fuel rules): [Vanilla refinery recipes](/okf/factory/refinery-recipes.md).

## Thermal machine tick internals (0.5.6 bundle)

Worker-side structure ticks (not visible via renderer `sandkit.api` on CDP `:9222`).
Facts from `bundle.js` / `simulation-worker.js` extract.

### Condenser (`thermofroster`, recipe slot `condenser`)

- Scans element cells adjacent to the 4×4 footprint (top and bottom edges, order shuffled each tick).
- Requires `getWeightedRecipe(state, "condenser", inputType)` match.
- Heat gate `Th(state, originX, originY)`:
  - Adjacent `thermalRelay` heat via shared helper `bh.dv` (4×4 probe, offset **-2**), **or**
  - `freezingIce` on the row above: **10%** RNG to remove one ice cell and pass.
- On success: remove input, `selectWeightedOutput` (or single 1.0 output), create output element, particle burst.
- Florin input path also calls `factory.recordProcess(state, CondenseFlorin)` (process index **3**).

Builtin condenser rows (also in `mods.recipes.condensers` when mods register): florin → florinol/gold; steam → water.

### Smelter (`smelter`, recipe slot `smelter`)

- Reads element on row **above** footprint (`y - 1`), x order shuffled each tick.
- `getWeightedRecipe(state, "smelter", inputType)` — builtin table: gold → liquidGold (**0.5**), copper → liquidCopper (**1.0**).
- **25%** RNG early exit per tick (`Math.random() < 0.25` → no smelt).
- Heat gate (same helper family as condenser, offset **+10** for relay probe):
  - Adjacent `thermalRelay`, **or**
  - `lava` on row below relay column: **10%** RNG to remove lava cell.
- On success: `heatWave` effect, remove input, create liquid output from weighted recipe.

### Snowmaker / steam dryer / synthesizer

Use the same `getWeightedRecipe` slot lookup pattern (`snowmakers`, `steamDryers`, `synthesizers`) with structure-specific tick hooks in the worker bundle.
Snowmaker copy: consumes water above and energy (see structure i18n `structures|snowmaker|description`).

## Mod refinery rows (`state.sandkit.mods.recipes`)

Live 0.5.6 probe via `__debug.state` (dev-tools autosave).
Slots are arrays; vanilla builtin shaker/grower/press paths stay engine-hardcoded.

| Slot          | Rows | Input (`elementType`) | Outputs (`elementType`, `chance`) |
| ------------- | ---- | --------------------- | --------------------------------- |
| `condensers`  | 2    | 22 (`florin`)         | 7 / Gold (0.5), 23 / `florinol` (0.5) |
| `condensers`  |      | 10 / Steam            | 3 / Water (1.0)                       |
| `steamDryers` | 1    | 18 / Petalium         | 24 / `dryPetalium` (1.0)              |
| `synthesizers`| 1    | 23 / `florinol`       | 26 / `aurixite` (1.0)                 |
| `snowmakers`  | 1    | 3 / Water             | 12 / FreezingIce (1.0)                |
| `smelters`    | 2    | 7 / Gold              | 25 / `liquidGold` (0.5)           |
| `smelters`    |      | 36 / `copper`         | 37 / `liquidCopper` (1.0)         |

Empty on this save: `contacts`, `shakers`, `kineticPresses`, `growers` (all len **0**).

## Custom structure processing

`sandkit.api.structures.processing`:

| Method                                                 | Role                                 |
| ------------------------------------------------------ | ------------------------------------ |
| `register(id, { structureType, intervalMs, process })` | Bind periodic callback               |
| `isEnabledAtCell(cellX, cellY)`                        | Read whether processing runs at cell |
| `setEnabledAtCell(cellX, cellY, enabled)`              | **mutate** per-cell enable flag      |

Deprecated aliases (official HTML): `api.structures.addProcessor` -> `processing.register`; `isEnabledAt` -> `isEnabledAtCell`; `setEnabledAt` -> `setEnabledAtCell`.

`context` deprecated aliases: `getElementTypeAtCell` -> `getResolvedTypeAtCell`; `isCellEmpty` -> `isCellEmptyAtCell`.

Canonical registration:

```js
api.structures.processing.register(id, {
  structureType: id,
  intervalMs: number,
  process(structure, context) {
    // context.isCellEmptyAtCell, context.getResolvedTypeAtCell, context.commit
  },
});
```

Processing uses the triggers scheduler under the hood.
Main thread only for `setEnabledAtCell`.

## Factory process events

Shakers, presses, growers, and thermo machines call `engine.api.factory.recordProcess(state, processIndex)` when they complete work.
Public read ids: `shakeWetSand`, `pressBurntResidue`, `growFlowers`, `condenseFlorin` — see [Factory viability](/okf/factory/factory.md).

## Vanilla element → structure sinks (0.5.5)

Read from element `interactions` (`kind: "structure"`) plus structure i18n:

| Element       | Structure                        | Result                                |
| ------------- | -------------------------------- | ------------------------------------- |
| Wet Sand      | Shaker                           | Gold (↓, 25%) + Residue               |
| Residue       | Fire (`kind: "flammable"` only)  | Burnt Residue (25%)                   |
| Burnt Residue | Kinetic Press (`velocitySoaker`) | Gold + Seed (drop from height)        |
| Wet Seed      | Planter Box (`grower`)           | Seedling (harvest → Gold + Amethelis) |
| Gold          | Collector                        | Credits                               |
| Liquid Gold   | Collector                        | Credits (collectable value 2)         |
| Steam         | Steam Turbine                    | Energy                                |
| Voidbloom     | Flux Emanator (`gloomEmitter`)   | Fluxite terrain                       |
| Aurixite      | Shaker                           | Auralite                              |
| Florinol      | Florinol Battery / Synthesizer   | Energy / Aurixite                     |

## Related

- Thermal / refinery structure ids: [UI: HUD and overlays](/okf/ui/hud-and-overlays.md) (Thermal tab).
- Energy condense path records `CondenseFlorin` process index: [Energy: networks and signals](/okf/energy/networks-and-signals.md).
