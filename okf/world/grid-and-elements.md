---
type: Reference
title: Grid and elements
description: Index for the world simulation guide — grid cells, elements, terrains, maps, and worker-facing sim APIs.
tags:
  - sandustry
  - okf
  - world
  - grid
  - elements
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

# Grid and elements

## Trigger

Load this concept when your mod reads or writes the cell grid, registers elements or terrains, handles maps, pickups, reactions, excavation, fire, raycast, or worker element hooks.[^world-guide]

## Guide outline

The world guide explains how Sandustry simulates sand, liquids, and terrain on a fixed cell grid.
It covers packed cell ids, element matter categories, and terrain hit points with excavation rules.
It documents grid queries, fog, redraw, and area iteration on the main thread versus workers.
It explains deferred writes through `grid.mutate` and immediate mutations in worker code.
It walks through registering custom elements and terrains with id resolution and tooltips.
It describes custom maps via `maps.getActive`, session start, and artifact locations.
It covers world pickups at pixel positions separate from grid cells.
It documents contact reactions between element pairs.
It lists excavation profiles, pattern matrices, and single-cell dig helpers.
It notes fire ignition and world-pixel raycast tracing.
It flags deprecated `sandkit.api.world` aliases and points to worker entry for sim-side hooks.

## Pointers

- [Official Sandkit API](https://sandustry.com/sandkit.html) — signature truth for runtime shapes.
- [How to read Sandkit](/okf/api/how-to-read-sandkit.md) — how to use generated member pages under `/api/`.
- Generated namespaces named in the guide:
  - [sandkit.api.grid](/api/sandkit.api.grid.md) and [sandkit.api.grid (worker)](/api/sandkit.api.grid.worker.md)
  - [sandkit.api.elements](/api/sandkit.api.elements.md) and [sandkit.api.elements (worker)](/api/sandkit.api.elements.worker.md)
  - [sandkit.api.terrains](/api/sandkit.api.terrains.md) and [sandkit.api.terrains (worker)](/api/sandkit.api.terrains.worker.md)
  - [sandkit.api.maps](/api/sandkit.api.maps.md) and [sandkit.api.maps (worker)](/api/sandkit.api.maps.worker.md)
  - [sandkit.api.pickups](/api/sandkit.api.pickups.md)
  - [sandkit.api.reactions](/api/sandkit.api.reactions.md)
  - [sandkit.api.excavation](/api/sandkit.api.excavation.md)
  - [sandkit.api.patterns](/api/sandkit.api.patterns.md)
  - [sandkit.api.fire (worker)](/api/sandkit.api.fire.worker.md)
  - [sandkit.api.raycast](/api/sandkit.api.raycast.md)

## Live facts (0.5.5)

Use these concepts for runtime shapes, buffer sizes, and enum samples confirmed on live Early Access **0.5.5**.

| Topic | Concept |
| --- | --- |
| Read-only live inspection | [World probe](/okf/world/probe.md) |
| Grid size, cell ids, chunks | [Grid and chunks](/okf/world/grid-chunks.md) |
| CellType, ElementType, MatterType | [Cells](/okf/world/cells.md) |
| `api.grid`, `api.world`, pickups | [Grid, world alias, and pickups](/okf/world/world-api.md) |
| `api.elements` | [Elements API](/okf/world/elements.md) |
| `api.terrains` | [Terrains API](/okf/world/terrains.md) |
| Grid iteration | [Grid iteration](/okf/world/grid-api.md) |
| `api.maps` | [Maps API](/okf/world/maps.md) |
| Reactions, excavation, fire | [Sim crafting](/okf/world/sim-crafting.md) |
| `store.world` | [store.world session metadata](/okf/world/store-world.md) |
| Wall, heat, shadows | [Wall, heat, shadows, foliage](/okf/world/wall-heat-foliage.md) |
| Background rasters and Pixi | [Background layers](/okf/world/background-layers.md) |
| Workers and scheduling | [Workers and scheduling](/okf/world/workers.md) |
| idStats and water zones | [Sim stats buffers](/okf/world/sim-stats.md) |
| Unconfirmed items | [Open gaps](/okf/world/gaps.md) |

## Related domains

- [Engine and workers](/okf/internals/engine-and-workers.md) — `workerEntry`, `WorkerSandkitApi`, and thread boundaries.
- [Entities: drones and projectiles](/okf/entities/drones-and-projectiles.md) — world pickups overlap with `sandkit.api.pickups`.
- [Factory: structures and pipes](/okf/factory/structures-and-pipes.md) — structures sit on the same grid.

## Sources

[^world-guide]: Primary guide — [/guides/world.md](/guides/world.md).
