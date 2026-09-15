---
type: Reference
title: Placement config
description: registerPlacementConfig field schemas, runtime storage, and engine.api.structures.getConfig return shape.
tags:
  - sandustry
  - okf
  - factory
  - structures
  - placement
status: stable
generated:
  by: agent
  at: 2026-09-15T20:00:00Z
sources:
  - id: bundle-056
    resource: sandustry/source/dist/js/bundle.js
  - id: sandkit-types
    resource: SandustryTypes/src/sandkit/api/structures.d.ts
  - id: official-sandkit
    resource: https://sandustry.com/sandkit.html
---

# Placement config

Hotbar overlay fields for per-placement options (channel, mode, and similar).
Official types: `SandustryTypes` `PlacementConfigDefinition` and overloads on `structures.registerPlacementConfig`.

## `sandkit.api.structures.registerPlacementConfig`

```ts
api.structures.registerPlacementConfig({
  structureId: string,
  fields: PlacementConfigField[],
});
```

### Field types

**Integer** (`type: "integer"`):

| Key | Required | Role |
| --- | --- | --- |
| `id` | yes | Stored key on `store.options.sandkitPlacementConfig[structureId]` |
| `label` or `labelKey` | one required | UI label (plain string or i18n key) |
| `default` | no | Fallback when unset |
| `min` | no | Lower bound (default `Number.MIN_SAFE_INTEGER`) |
| `max` | no | Upper bound as number **or** upgrade object (see below) |

**Choice** (`type: "choice"`):

| Key | Required | Role |
| --- | --- | --- |
| `id` | yes | Stored key |
| `label` or `labelKey` | one required | Field label |
| `default` | no | Default option `value` |
| `options` | yes (≥1) | `{ value: string, label?: string, labelKey?: string }[]` |

Each option needs `label` or `labelKey`.
Duplicate field ids throw at registration time.

### Integer `max` upgrade object

When `max` is an object, runtime resolves:

```
max = max(minimum, upgradeLevel + offset)
```

from `store.upgrades[itemId][upgradeId].level` (or `availableLevel`).

### Runtime storage (bundle)

| Location | Role |
| --- | --- |
| In-memory `Map` keyed by `structureId` | Registered field definitions |
| `store.options.sandkitPlacementConfig[structureId][fieldId]` | Current hotbar values while building |

Engine helpers (not on public `sandkit.api`): get definition by structure type, read/write field values, clamp integers.
Registration also triggers `HotbarOverlays` UI refresh.

### Vanilla usage

Shipping 0.5.6 bundle has **no** vanilla `registerPlacementConfig` calls — slot is mod-only today.
Defs in `state.sandkit.mods.structures` do not carry a `placementConfig` key; config lives in the separate Map above.

### Live sample (0.5.6 CDP)

`store.options.sandkitPlacementConfig` on dev-tools saves: **`{}`** (no keys) until a mod calls `registerPlacementConfig`.
Runtime init on first registration creates `store.options.sandkitPlacementConfig[structureId][fieldId]` with clamped integer or choice defaults.

## `engine.api.structures.getConfig`

```ts
engine.api.structures.getConfig(structureTypeOrId) => StructureDefinition | undefined
```

Implementation: `C.VI[structureTypeOrId]` — the same object written by `structures.register`.

### Common definition keys (live)

| Key | Role |
| --- | --- |
| `id` | String structure id |
| `nameKey`, `descriptionKey`, `categoryKey` | i18n keys |
| `descriptionParams` | Interpolation for description |
| `order` | Tech/build menu sort |
| `buildModes` | Line, rectangle, single, … |
| `variants` | `{ id, angles }[]` rotation variants |
| `render` | Spritesheet, size, offset, `z`, UI icon |
| `shape` | 4×4 `CellType` terrain matrix |
| `defaultData` | Initial `structure.data` on place |
| `copyData` | When `false`, sets `skipCopyData: true` for blueprint copy |
| `skipCopyData` | Skip `data` on blueprint paste |
| `disallowPick` | Block picker tool |
| `unlockedBy` | Tech id gate |
| `blockGridType` | Spatial index alias when id differs |

`draw` is stripped from the stored def and kept in a separate render callback table.
Builtin numeric types (e.g. `StructureType.Collector` = 16) and string mod ids both resolve through `getConfig`.

### Uses in engine

- Blueprint copy: `copyData` / `skipCopyData` gate whether `structure.data` is preserved.
- Picker: `disallowPick` blocks pick with toast `mods|shortcuts|cannotPickStructure`.
- Display name: `nameKey` or legacy `name` via i18n helper.

## Related

- [Structures](/okf/factory/structures.md) — instance shape and public `sandkit.api.structures` surface.
- [Structures and pipes](/okf/factory/structures-and-pipes.md) — placement session overview.
