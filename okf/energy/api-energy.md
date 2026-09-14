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
| `getNetworkAtCell(cellX, cellY)` | Connected nodes `{ cellX, cellY, type }[]`. Deprecated property aliases: `x`, `y`. Empty `[]` when no energy structure is at the cell. This save had **0** `powerBrick` / `goldBattery` / `steamTurbine` / `electricityConnector` / `snowmaker`. |
| `getNetworkFreeCapacityAtCell(cellX, cellY)` | Free storage capacity in that network. |

`options.energyType` exists in types for multi-network mods.
This save uses one pool.

Engine twin (`sandkit.engine.api.energy`) uses shorter names: `add`, `getNetwork`, `getNetworkFreeCapacity`, `consumeExcludingNetwork`.
See [Engine energy](/okf/energy/engine-energy.md).

Storage nodes keep `structure.data.storedEnergy` and `structure.data.maxEnergy` (default 16 on goldBattery tiles, 100 on powerBrick).

## Pointers

- [Official Sandkit API](https://sandustry.com/sandkit.html) — signature truth for runtime shapes.
- [sandkit.api.energy](/api/sandkit.api.energy.md) — generated member page.
- [Networks and signals](/okf/energy/networks-and-signals.md) — domain overview.
