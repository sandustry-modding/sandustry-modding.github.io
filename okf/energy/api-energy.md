---
type: Reference
title: sandkit.api.energy
description: Public energy network API — register conductor and storage types, add and consume power, and query networks at a cell.
tags:
  - sandustry
  - okf
  - energy
  - api
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: energy-guide
    resource: /guides/energy.md
  - id: sandkit-api-energy
    resource: /api/sandkit.api.energy.md
---

# sandkit.api.energy

Main thread only.
Live keys for Early Access 0.5.5.

| Method | Role |
| --- | --- |
| `registerType(structureId, type, options?)` | Register `conductor` or `storage` on a structure type. |
| `addAtCell(cellX, cellY, amount, options?)` | Add energy into the network at the cell. Returns amount added. |
| `consume(amount, options?)` | Take from the **global** energy pool (`store.resources.energy`). `allOrNothing` optional. |
| `consumeExcludingNetworkAtCell(cellX, cellY, amount)` | Consume from networks except the one at the cell. |
| `getNetworkAtCell(cellX, cellY)` | Connected conductor/storage nodes. Official type uses `cellX` / `cellY`; engine returns `{ x, y, type }` (same numbers). Empty `[]` when the start cell has no registered energy structure or only `excludeFromNetwork` storage (for example `goldBattery`). |
| `getNetworkFreeCapacityAtCell(cellX, cellY)` | Free storage capacity in that network (sums `maxEnergy - storedEnergy` on reachable storage nodes). |

### `addAtCell` partial fill (0.5.6 extract)

Internal storage charge (`Pt`) adds `min(requested, maxEnergy - storedEnergy)` per node.
`addAtCell` returns **`requested - remaining`** after the BFS pass (`return r - p` in bundle).
Example: network free capacity **400**, call `addAtCell(cell, 1000)` → return **`400`**, `storedEnergy` increases by 400 only.

### `energyType` (types vs runtime)

`EnergyAddOptions.energyType` and `EnergyRegisterTypeOptions.energyType` exist in [SandustryTypes](https://github.com/sandustry-modding/SandustryTypes) only.
The **0.5.6** shipping bundle has **zero** `energyType` string references — confirmed in `bundle.js` grep and live `state.sandkit.mods.energy` JSON (`bundleHasEnergyType: false` on CDP `:9222`).
Vanilla uses one global pool (`store.resources.energy`, `shared.energy`).
No structure `data` rows carry an `energyType` field on the probed saves.
Multi-network mods would need a future engine build or mod hook; there is no vanilla multi-pool sample to collect.

### Live network sample (CDP `:9222`, 0.5.6)

Dev-tools save after placement (webpack `FH.structures.build`, Block terrain under snap cells):

- `electricityConnector` at **(264, 260)** and **(268, 260)**.
- `getNetwork(264, 260)` → `[{ x: 264, y: 260, type: "electricityConnector" }, { x: 268, y: 260, type: "electricityConnector" }]`.
- `goldBattery` registers with `excludeFromNetwork` — not included in graph traversal; query from a battery cell returns `[]` unless a conductor shares the cell.

Engine twin (`sandkit.engine.api.energy`) uses shorter names: `add`, `getNetwork`, `getNetworkFreeCapacity`, `consumeExcludingNetwork`.
See [Engine energy](/okf/energy/engine-energy.md).

Storage nodes keep `structure.data.storedEnergy` and `structure.data.maxEnergy` (default 16 on goldBattery tiles, 100 on powerBrick).

## Pointers

- [Official Sandkit API](https://sandustry.com/sandkit.html) — signature truth for runtime shapes.
- [sandkit.api.energy](/api/sandkit.api.energy.md) — generated member page.
- [Networks and signals](/okf/energy/networks-and-signals.md) — domain overview.
