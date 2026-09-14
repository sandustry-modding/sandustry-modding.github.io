---
type: Reference
title: Networks and signals
description: Index for the energy guide — power networks, global energy pool, collector value, and signal targets.
tags:
  - sandustry
  - okf
  - energy
  - signals
  - collector
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: energy-guide
    resource: /guides/energy.md
---

# Networks and signals

## Trigger

Load this concept when your mod registers energy network types, adds or consumes power, updates the global energy pool, handles collector gold value, or wires signal targets to structures.[^energy-guide]

## Guide outline

The energy guide states that `sandkit.api.energy` and `sandkit.api.collector` run on the main thread only.
It separates electrical power from gold economy and collector structures.
It lists read versus write members across `energy`, `resources`, `collector`, and `signals`.
It documents conductor and storage network registration with optional capacity and `energyType`.
It covers `addAtCell`, global `consume`, and network queries at a cell.
It explains `updateEnergy` for the player energy store and fluxite collection.
It walks through collector value queries, collectability checks, and pickup notification.
It shows signal target registration with payload fields that toggle processing or other behavior.
It points to factory registration for collector structures.

## Pointers

- [Official Sandkit API](https://sandustry.com/sandkit.html) — signature truth for runtime shapes.
- [How to read Sandkit](/okf/api/how-to-read-sandkit.md) — how to use generated member pages under `/api/`.
- Generated namespaces named in the guide:
  - [sandkit.api.energy](/api/sandkit.api.energy.md)
  - [sandkit.api.resources](/api/sandkit.api.resources.md)
  - [sandkit.api.collector](/api/sandkit.api.collector.md)
  - [sandkit.api.signals](/api/sandkit.api.signals.md)

## Detail concepts

- [API: energy](/okf/energy/api-energy.md) — `sandkit.api.energy` live keys and storage node data.
- [API: signals](/okf/energy/api-signals.md) — public sender, target, and interactable registration.
- [API: resources (energy)](/okf/energy/api-resources.md) — global pool `adjustEnergy` and HUD sync.
- [Shared state](/okf/energy/shared-state.md) — `shared.energy`, `energyChange`, and gold SABs.
- [Engine energy](/okf/energy/engine-energy.md) — `state.sandkit.mods.energy` registry and engine method map.
- [Engine signals runtime](/okf/energy/engine-signals.md) — session and persisted signal state.
- [Clipboard signal links](/okf/energy/clipboard.md) — blueprint vs runtime link shapes.
- [Gold, collector, and power](/okf/energy/gold-collector.md) — two currencies and goldBattery overlap.
- [Gaps](/okf/energy/gaps.md) — open runtime questions.
- [Probe](/okf/energy/probe.md) — safe MCP reads for energy and signals.

## Related domains

- [Factory: structures and pipes](/okf/factory/structures-and-pipes.md) — structure registration and `structures.processing.setEnabledAtCell` for signal handlers.
- [Engine and workers](/okf/internals/engine-and-workers.md) — energy APIs are not available in `workerEntry`.

## Sources

[^energy-guide]: Primary guide — [/guides/energy.md](/guides/energy.md).
