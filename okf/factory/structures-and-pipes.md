---
type: Reference
title: Structures and pipes
description: Index for the factory guide — structure definitions, placement, pipes, recipes, processing, and factory level.
tags:
  - sandustry
  - okf
  - factory
  - structures
  - pipes
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: factory-guide
    resource: /guides/factory.md
---

# Structures and pipes

## Trigger

Load this concept when your mod registers or places structures, configures pipes, recipes, custom processing, factory level, blueprints, or conveyor and launcher behaviors.[^factory-guide]

## Guide outline

The factory guide separates query helpers from mutate helpers for structures and related systems.
It explains structure definitions at mod load versus built instances on the world map.
It documents deferred `buildAtCell` and `removeAtCell` on the main thread.
It covers the building session namespace for player-driven placement previews.
It describes authorization zones that gate build, grab, and tool use.
It walks through pipe fluid tiles, flow toggles, and connected vents.
It explains recipe registration for vanilla machines and custom processing callbacks with enablement flags.
It notes read-only factory level and process counters.
It covers blueprint serialize and localize for portable layouts.
It documents structure behavior registration for conveyors and launchers.
It includes a main-versus-worker capability table for factory namespaces.

## Pointers

- [Official Sandkit API](https://sandustry.com/sandkit.html) — signature truth for runtime shapes.
- [How to read Sandkit](/okf/api/how-to-read-sandkit.md) — how to use generated member pages under `/api/`.
- Generated namespaces named in the guide:
  - [sandkit.api.structures](/api/sandkit.api.structures.md) and [sandkit.api.structures (worker)](/api/sandkit.api.structures.worker.md)
  - [sandkit.api.building](/api/sandkit.api.building.md) and [building.StructureType](/api/sandkit.api.building.StructureType.md)
  - [sandkit.api.authorization](/api/sandkit.api.authorization.md)
  - [sandkit.api.pipes](/api/sandkit.api.pipes.md)
  - [sandkit.api.processing](/api/sandkit.api.processing.md)
  - [sandkit.api.structures.processing](/api/sandkit.api.structures.processing.md) and [worker processing](/api/sandkit.api.structures.processing.worker.md)
  - [sandkit.api.structures.recipes](/api/sandkit.api.structures.recipes.md)
  - [sandkit.api.factory](/api/sandkit.api.factory.md)
  - [sandkit.api.blueprints](/api/sandkit.api.blueprints.md)
  - [sandkit.api.structureBehaviors](/api/sandkit.api.structureBehaviors.md)

## Domain concepts

Vanilla facts for Early Access **0.5.5** live in these concept files.

- [Structures](/okf/factory/structures.md) — instance shape, shape matrix, mod registry
- [Collector admission](/okf/factory/collector.md) — value map vs tile admission
- [Processing and recipes](/okf/factory/processing.md) — vanilla hardcoding and mod registration
- [Pipes and fluids](/okf/factory/pipes.md) — `store.pipes` and pump cache
- [Factory viability](/okf/factory/factory.md) — tier math and process ids
- [Blueprints](/okf/factory/blueprints.md) — copy and localize payloads
- [Conveyors and launchers](/okf/factory/conveyors.md) — `structureBehaviors` registration
- [Authorization](/okf/factory/authorization.md) — zone grid and permission checks
- [Build queue](/okf/factory/queue.md) — deferred placement and tick queue
- [Enums](/okf/factory/enums.md) — `StructureType` and clearance values
- [Gaps](/okf/factory/gaps.md) — open questions on this probe save
- [Probe](/okf/factory/probe.md) — safe MCP inspection patterns

## Related domains

- [Player: inventory and items](/okf/player/inventory-and-items.md) — hotbar flow and the building placement session.
- [Energy: networks and signals](/okf/energy/networks-and-signals.md) — collector structures and signal-driven processing enablement.
- [Progression: tech and upgrades](/okf/progression/tech-and-upgrades.md) — factory tier is separate from the Research tree.
- [Engine and workers](/okf/internals/engine-and-workers.md) — worker-safe structure lookup versus main-thread registration.

## Sources

[^factory-guide]: Primary guide — [/guides/factory.md](/guides/factory.md).
