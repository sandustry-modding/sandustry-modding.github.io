---
type: Reference
title: Tools and grabber
description: sandkit.api.tools.grabber methods, engine twin, and related construction session flags for Early Access 0.5.5.
tags:
  - sandustry
  - okf
  - player
  - tools
  - grabber
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: player-guide
    resource: /guides/player.md
---

# Tools and grabber

Grabber is the main documented tool namespace.
Other tools (Shovel, Demolisher, Copier, …) are hotbar `ItemId` entries with abilities — see [Enums](/okf/player/enums.md).

## Per-tool runtime bags (0.5.6 extract + live)

There is no `session.tools` object.
Vanilla tool state lives on **inventory item `data`**, **`session.action.customData`**, or **`store.projectiles`** (digger).

| Tool (`ItemId`) | Primary bag | Keys (when active) |
| --- | --- | --- |
| Copier (7) | `session.action.customData` | `marqueeSelected`, `mode`, `start`, `end`, `selectedStructures[]`, `signalLinks[]`, `mouseOffset`, optional `pos`, `copiedStructure` |
| Digger (9) | `store.projectiles[]` | `type === ProjectileType.Digger`; recall sets `attributes.despawning` / `despawnTimer` on each |
| Teleporter (11) | Teleporter inventory item `data` | `{ teleporting, locations[], actionStartTime }` at spawn — see below |
| Hauler (14) | Hauler inventory item `data` + `session.action.customData` | Item: `pendingLine`, `nextLineId`; session edit: `{ type:"hauler", mode:"editEndpoint", lineId, endpoint }` |

`store.mods.*` holds mod-system bags (color pickers, portals unlock flag, blueprints storage).
It is **not** the copier/digger/teleporter/hauler runtime path.

### Copier `customData.mode`

Uses `sandkit.enums` clipboard/move modes (extract: `Selected`, `Moving`, `Copying`).
`selectedStructures[]` entries — see [Clipboard structure schema](/okf/player/clipboard.md?id=structure-array-schema).

### Digger recall

Mouse2 (binding text in i18n) runs the `diggerDroneCancel` trigger.
It marks every live `ProjectileType.Digger` with `attributes.despawning = true` and shrinks sprites until removal.
No digger state bag on the inventory item (weapon uses `abilities[]` Shoot → digger projectile).

### Teleporter item `data` (factory default)

Live probe after `__debug.admin.run("teleporter")` (CDP `:9222`, 0.5.6):

```json
{ "teleporting": false, "locations": [], "actionStartTime": 0 }
```

| Field | Type | Notes |
| --- | --- | --- |
| `teleporting` | boolean | Factory `false`. No other writes in 0.5.6 `bundle.js`. |
| `locations` | array | Factory `[]`. **No push or index writes** anywhere in the extract. |
| `actionStartTime` | number | Factory `0`. No other writes in the extract. |

The teleporter tool handler (module `15283`) only lerps the camera on `ActionState.Start`.
It does not read or write `locations`.

**`locations[]` entry schema:** not defined in shipping 0.5.6.
The array stays empty after admin item push and remains unused in vanilla code.
Treat `locations` as a reserved bag slot, not an active save field.

### Hauler item `data`

Accessor `j(state, item?)` ensures `data` on the hauler inventory row.

| Field | Role |
| --- | --- |
| `pendingLine` | In-progress line before drop-off: `{ lineId, name, origin:{x,y}, target? }` |
| `nextLineId` | Monotonic id allocator for new lines |

After drop-off confirmation, drones use `store.drones[]` — see [Drones](/okf/entities/drones.md).

## `sandkit.api.tools.grabber`

| Method       | Arity | Notes                                     |
| ------------ | ----- | ----------------------------------------- |
| `getSize()`  | 0     | Radius in **cells** (live default **25**) |
| `setSize(n)` | 1     | **mutate**                                |
| `isActive()` | 0     | Grabber is the selected tool              |
| `isLoaded()` | 0     | Buffer holds elements                     |

Path: `sandkit.api.tools.grabber` (not top-level `api.grabber`).

Element opt-in: definition `isGrabbable` — see [Grid and elements](/okf/world/grid-and-elements.md).
Grab skips when `isGrabbable === false`.

## Engine twin

`sandkit.engine.api.tools`: `getGrabberSize(state)`, `setGrabberSize(state, n)`, `isGrabberActive(state)`, `isGrabberLoaded(state)`, `blockSwitchIfGrabberLoaded(state)`.

## Live probe snippet

```js
() => {
  const g = window.sandkit.api.tools.grabber;
  return { size: g.getSize(), active: g.isActive(), loaded: g.isLoaded() };
};
```

## Related session flags

- `session.construction.demolisherActive` — demolish mode (binding `KeyBinding.Demolish`).
- Grabber loaded state blocks some hotbar switches (`blockSwitchIfGrabberLoaded` on engine).

## Related concepts

- [Items and hotbar](/okf/player/items.md)
- [Building mode](/okf/player/building.md)
- [Input](/okf/player/input.md)
- [Probe](/okf/player/probe.md)
