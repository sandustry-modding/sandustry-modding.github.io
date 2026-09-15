---
type: Reference
title: Entity gaps
description: Open vanilla facts not yet confirmed in live probes for entities, drones, projectiles, and related systems.
tags:
  - sandustry
  - okf
  - entities
  - gaps
status: draft
generated:
  by: human:ethan
  at: 2026-09-15T20:00:00Z
sources:
  - id: extract
    resource: sandustry/source/
---

# Entity gaps

Still open (live probes with active entities still needed for some runtime-only paths):

- None from the prior entity gap list.

Resolved this pass (CDP `:9222`, 0.5.6):

- Live `DroneType.Digger` drone instances — [Drones](/okf/entities/drones.md#live-dronetypedigger-instance-cdp-9222-056) (`FH.drones.spawn(state, 1, …)` in-memory probe)
- Live `getMarkers` with GlyphKey unlock — [Teleport zones and portals](/okf/entities/teleport-portals.md) (`b93kqvog6zn-exitsave`, two portal rows; reconfirmed this pass)
- Live hauler / sweeper `data` mid-sim — [Drones](/okf/entities/drones.md) (`FH.drones.spawn` on dev autosave; in-memory only)
- Portal static table and runtime marker fields — [Teleport zones and portals](/okf/entities/teleport-portals.md)
- Full stratacore id catalog for 0.5.6 — [World items](/okf/entities/world-items.md) (`terracortex` only in `store.stratacores`)
- F3 debug display name drift (five creatures) — [Creature instance fields](/okf/entities/creature-fields.md)

Resolved earlier (see linked concepts):

- Per-creature instance fields — [Creature instance fields](/okf/entities/creature-fields.md)
- Sweeper drone `data` spawn shape — [Drones](/okf/entities/drones.md)
- `registerSpawner` config (not a callback) — [Live entities and capture](/okf/entities/entities.md)
- Base launcher velocities — [Launchers](/okf/entities/launchers.md)
- `prefabWorldItemCache` entry shape — [World items](/okf/entities/world-items.md)
- Grappling / Fire / Digger projectile `attributes` — [Projectiles](/okf/entities/projectiles.md)
- Worker `store.projectiles` / `store.drones` (main store; not on worker public API) — [Entity store keys](/okf/entities/store.md)

Public `api.entities` has no `getAll()`: see [Live entities and capture](/okf/entities/entities.md).
`store.gloom.emitterPositions` was `[]` in the prior empty-entity probe save.

## Related concepts

- [Probe](/okf/entities/probe.md)
