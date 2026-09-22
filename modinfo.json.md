# modinfo.json reference

`modinfo.json` is the manifest for one mod folder.
It tells the loader which scripts to run and which optional assets to apply.

TypeScript types: [configs: ModInfo](api/configs.md?id=modinfo).
JSON Schema: [schemas/modinfo.json](types/schemas.md).

## JSON vs TypeScript

Author **either** `modinfo.json` or `modinfo.ts`.
When both exist in the same folder, **`modinfo.ts` wins** in the mod template build.

## Minimal manifest

```json
{
  "$schema": "https://sandustry-modding.github.io/schemas/modinfo.json",
  "manifestVersion": 1,
  "id": "author.example-mod",
  "name": "Example Mod",
  "version": "1.0.0",
  "apiVersion": 1,
  "entry": "main.js"
}
```

The game folder name is **`id`**, not `name`.

## Required fields

| Field | Type | Role |
| ----- | ---- | ---- |
| `manifestVersion` | `1` | Manifest schema version. Use `1`. |
| `id` | `string` | OS mods folder and Workshop identity (`author.mod`). |
| `name` | `string` | Display name in Options → Mods. |
| `version` | `string` | Mod version (for example `0.0.1`). |
| `apiVersion` | `number` | Sandkit API generation. Use `1`. |

## Entry points

| Field | Type | Role |
| ----- | ---- | ---- |
| `entry` | `string` | Main-thread script relative to the mod root (`main.js`). |
| `workerEntry` | `string` | Simulation-worker script (`worker.js`). Required for worker hooks. |

At least one capability is required.
See [Worker mods](guides/worker-mods.md) for `workerEntry`.

## Optional metadata

| Field | Type | Role |
| ----- | ---- | ---- |
| `description` | `string` | Short description for Options and Workshop fallback text. |
| `author` | `string` | Author display name. |
| `patches` | `string` | Path to `patches.json` (default: `patches.json` at mod root). |
| `gameVersion` | `object` | Declared compatible game version range (`minimum`, `maximum`). |
| `dependencies` | `string[]` | Other mod ids that must load first. |
| `loadOrder` | `number` | Sort key (lower loads earlier). |
| `configSchema` | `object` | Options UI fields for player settings. |

Full field list: [configs: ModInfo](api/configs.md?id=modinfo).

## Game version

Set `gameVersion` to declare compatibility:

- **Patch-only mods** (bundle rewrites tied to old minified text): set `maximum` to the last tested game version.
- **Sandkit API mods** (hooks, `configOverrides`, 0.5.5+): set `minimum` to `"0.5.5"` or higher.

## Overrides and provides

Mods can ship data without executable entry points:

- `configOverrides` — merge into game config
- `shaderOverrides` / `textureOverrides` — asset replacements
- `provides` — register content ids for other mods
- `map` — custom world map definition

See [configs](api/configs.md) for each shape.

## Template helpers

`defineModInfo` and `modinfo.ts`: [modinfo.ts](modinfo.md).

## Related

- [Getting started](guides/getting-started.md)
- [Patching with patches.json](patches.json.md)
- [JSON Schema for modinfo.json](types/schemas.md)
