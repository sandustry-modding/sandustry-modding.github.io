---
type: Reference
title: Upgrades
description: sandkit.api.upgrades registration, level getters, store shape, and core item ids for Early Access 0.5.5.
tags:
  - sandustry
  - okf
  - progression
  - upgrades
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: progression-guide
    resource: /guides/progression.md
  - id: types-package
    resource: node_modules/@sandustry-modding/types/src/sandkit/api/upgrades.d.ts
---

# Upgrades

Public API: `sandkit.api.upgrades`.
Official signatures: [sandkit.html](https://sandustry.com/sandkit.html).
Types: `@sandustry-modding/types` `src/sandkit/api/upgrades.d.ts`.
Upgrades overlay: [HUD and overlays](/okf/ui/hud-and-overlays.md).

## API

| Method                                         | Role                                                                      |
| ---------------------------------------------- | ------------------------------------------------------------------------- |
| `registerCategory(definition)`                 | Mod category (`id`, `nameKey`).                                           |
| `register(definition)`                         | Mod upgrade. Also creates `store.upgrades[itemId][upgradeId]` if missing. |
| `updateDefinition(itemId, upgradeId, partial)` | Patch definition. Clamps levels to new `maxLevel`.                        |
| `getLevelById(itemId, upgradeId)`              | Current purchased level.                                                  |
| `getAvailableLevelById(itemId, upgradeId)`     | Max level the player may buy now.                                         |
| `setLevelById(itemId, upgradeId, level)`       | Set purchased level. **Write** - do not call during probes.               |

## Store shape

`store.upgrades` is nested: `store.upgrades[itemId][upgradeId]`.

Each leaf:

```ts
{ level: number, availableLevel: number }
```

- `level`: purchased rank.
- `availableLevel`: cap from progression (often 0 until `store.progression.upgradesUnlocked`).

## Core item ids (live)

`grabber`, `jetpack`, `shovel`, `gun`, `rocketLauncher`, `hauler`, `digger`, `flamethrower`, `cryoblaster`, `drill`, `sweeper`, `implosionGun`, `thruster`, `vacuum`, `locator`, `laser`.

### Vanilla `itemId:upgradeId` pairs (38 leaves, CDP 0.5.6)

| itemId | upgradeId |
| --- | --- |
| grabber | scanner, waterGrab, maxSize |
| jetpack | speed, rideBoost |
| shovel | speed, size, momentum |
| gun | speed, damage, bullets, tracer, velocity |
| rocketLauncher | reload, maxAmmo, napalm, damage |
| hauler | maxDrones, speed |
| digger | cooldown, hp, gravity, maxDrones |
| flamethrower | range, vaporize |
| cryoblaster | output |
| drill | bore |
| sweeper | maxDrones, selectionRadius, mouseLight |
| implosionGun | tankCapacity |
| thruster | pullStrength |
| vacuum | capacity, tankCount |
| locator | artifactGuidance |
| laser | beamFocus, cycleRate, cryoAblation |

`sandkit.mods.upgrading` holds **mod `register()` metadata only** — not vanilla core upgrade defs.
Vanilla pairs (38 leaves) live only on `store.upgrades` and in bundled item scripts.
They do **not** appear under `sandkit.mods.upgrading`.

### Mod metadata shape (CDP `:9222`, dev-tools save, 0.5.6)

Each registered item id maps to:

```ts
{
  upgrades: Record<upgradeId, UpgradeDefinition>;
  itemName?: string;
  itemNameKey?: string;
  categoryId?: string | null;
}
```

Each `UpgradeDefinition` leaf includes `id`, `nameKey`, `descriptionKey`, `maxLevel`, `costs[]`, and optional `afterUpgradeId`, `oneOff`, `descriptionParams`.
The same `itemId:upgradeId` keys also exist on `store.upgrades[itemId][upgradeId]` as `{ level, availableLevel }` after `register()`.

Live dev-tools save: **7** item ids and **10** metadata pairs (workshop mod upgrades re-registered through Sandkit):

| itemId | upgradeId |
| --- | --- |
| drill | bore |
| grabber | maxSize |
| implosionGun | tankCapacity |
| locator | artifactGuidance |
| sweeper | maxDrones, selectionRadius, mouseLight |
| thruster | pullStrength |
| vacuum | capacity, tankCount |

The remaining **28** vanilla store leaves (gun, jetpack, shovel, …) have no `sandkit.mods.upgrading` entry on this save.
Probe `Object.keys(state.sandkit.mods.upgrading[itemId].upgrades)` for mod-added pairs; use `store.upgrades` for runtime levels.

## Unlock flag

`store.progression.upgradesUnlocked` is `false` on a new save.
When `true`, the Upgrades overlay is available and `availableLevel` may rise above 0.

Mod definitions live under `sandkit.state.sandkit.mods.upgrading` and `upgradeCategories`.

## Related concepts

- [Progression flags](/okf/progression/progression.md) — `upgradesUnlocked` gate
- [Lexicon](/okf/progression/lexicon.md) — upgrade entries in encyclopedia
- [Store cluster](/okf/progression/store.md) — nested `store.upgrades` bag
