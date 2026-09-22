---
type: Reference
title: sandkit.api.signals
description: Public signal API — register senders, targets, and interactables, and set sender output at a cell.
tags:
  - sandustry
  - okf
  - energy
  - signals
  - api
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: energy-guide
    resource: /guides/energy.md
  - id: sandkit-api-signals
    resource: /api/sandkit.api.signals.md
---

# sandkit.api.signals

Main thread only.
Official HTML (0.5.5) lists four public entry points.
Runtime detail is in [Engine signals runtime](/okf/energy/engine-signals.md).

## Live keys (0.5.5)

| Path | Method | Role |
| --- | --- | --- |
| `sandkit.api.signals.targets` | `register(structureTypeOrId, apply)` | Receiver handler when incoming links change. |
| `sandkit.api.signals.interactables` | `register(structureTypeOrId, handler)` | Override structure interact (click) behavior. |
| `sandkit.api.signals` | `registerSenderType(structureId, getOutput?)` | Register a structure type as a signal sender. |
| `sandkit.api.signals` | `setOutputAtCell(cellX, cellY, on)` | Set sender output at a structure origin cell. |

`targets.register` wraps `sandkit.engine.api.signals.targets.register`.
The handler receives:

- `structure` — structure instance at the receiver cell.
- `payload` — official shape `{ combined, inputCount, onCount }`.

`combined` is true when any incoming link to that receiver is on.
`inputCount` is incoming link count.
`onCount` is how many of those are on.

`interactables.register` handler receives `structure` only.
Use for custom toggle or lever logic.
Call `api.structures.update(structure)` when mutating `structure.data`.

`registerSenderType` optional `getOutput(structure)` returns boolean output.
Vanilla senders use this.
Mods can also drive output with `setOutputAtCell`.

`setOutputAtCell` is a **mutator**.
Do not call in read-only probes.

Types list `Structure`, `StructureType`, and `SignalTargetPayloadV1` (`combined`, `inputCount`, `onCount`).

There is no public `sandkit.api.signals.link`.
Linking is in-game UI or engine `signals.link`.

## Pointers

- [Official Sandkit API](https://sandustry.com/sandkit.html) — signature truth for runtime shapes.
- [sandkit.api.signals](/api/sandkit.api.signals.md) — generated member page.
- [Networks and signals](/okf/energy/networks-and-signals.md) — domain overview.
