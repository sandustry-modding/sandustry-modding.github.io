---
type: Reference
title: Drones and projectiles
description: Index for the entities guide — live entities, projectiles, pickups, and internal drone surfaces.
tags:
  - sandustry
  - okf
  - entities
  - drones
  - projectiles
  - pickups
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: entities-guide
    resource: /guides/entities.md
---

# Drones and projectiles

## Trigger

Load this concept when your mod spawns or removes critters, registers or fires projectiles, manages world pickups, or must know what has no public Sandkit namespace (drones, portals, teleport zones).[^entities-guide]

## Guide outline

The entities guide covers live world objects through public main-thread namespaces only.
It documents entity lookup, spawn, launch, capture, and collect by runtime id and type id.
It states hauler and sweeper drones have no public API and live on internal `sandkit.engine.api.drones`.
It walks through projectile registration, blueprints, spawn at angle, and instance removal.
It lists pickup types, spawn with optional light, collect, and deprecated destroy alias.
It notes portals and teleport zones are engine-only and lists public alternatives for player and element movement.
It directs sim-side grid logic to worker hooks instead of these namespaces.

## Pointers

- [Official Sandkit API](https://sandustry.com/sandkit.html) — signature truth for runtime shapes.
- [How to read Sandkit](/okf/api/how-to-read-sandkit.md) — how to use generated member pages under `/api/`.
- Generated namespaces named in the guide:
  - [sandkit.api.entities](/api/sandkit.api.entities.md)
  - [sandkit.api.projectiles](/api/sandkit.api.projectiles.md)
  - [sandkit.api.pickups](/api/sandkit.api.pickups.md)
  - [sandkit.api.player](/api/sandkit.api.player.md)
  - [sandkit.api.hooks](/api/sandkit.api.hooks.md)

## Domain concepts

- [Entity store keys](/okf/entities/store.md) — `store.drones`, `store.projectiles`, `store.worldItems`, session caches.
- [Live entities and capture](/okf/entities/entities.md) — public and engine entity APIs, creature typeIds.
- [Drones](/okf/entities/drones.md) — hauler, digger, sweeper store model and internal spawn.
- [Projectiles](/okf/entities/projectiles.md) — shot registration, blueprints, and store fields.
- [World items](/okf/entities/world-items.md) — pickups, prefab cache, and `api.pickups`.
- [Teleport zones and portals](/okf/entities/teleport-portals.md) — grid zones and map markers.
- [Swarm console and sweeper](/okf/entities/swarm-sweeper.md) — convergence minigame and sweeper selection.
- [Launchers](/okf/entities/launchers.md) — structure element launchers (not critter toss).
- [Enums](/okf/entities/enums.md) — `DroneType`, `ProjectileType`, `PickupType`.
- [Gaps](/okf/entities/gaps.md) — facts not yet confirmed in live probes.
- [Probe](/okf/entities/probe.md) — safe read-only MCP scripts.

## Related domains

- [World: grid and elements](/okf/world/grid-and-elements.md) — grid pickups and element teleport between cells.
- [Player: inventory and items](/okf/player/inventory-and-items.md) — player teleport and movement alternatives to engine zones.
- [Engine and workers](/okf/internals/engine-and-workers.md) — internal `sandkit.engine.api.drones` and worker thread boundaries.

## Sources

[^entities-guide]: Primary guide — [/guides/entities.md](/guides/entities.md).
