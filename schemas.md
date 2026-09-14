# JSON Schema files

Generated from `@sandustry-modding/types/configs` (`ModInfo`, `BundlePatchesFile`, and `WorkshopJson` in `src/configs/`).

Prefer the [official Sandkit docs](https://sandustry.com/sandkit.html#mod-files-heading ":target=_blank") when a schema and the game disagree.

## URLs

After GitHub Pages publishes `docs/`, use these raw schema URLs:

| File | Schema URL |
| ---- | ---------- |
| `modinfo.json` | https://sandustry-modding.github.io/SandustryTypes/schemas/modinfo.json |
| `patches.json` | https://sandustry-modding.github.io/SandustryTypes/schemas/patches.json |
| `workshop.json` | https://sandustry-modding.github.io/SandustryTypes/schemas/workshop.json |

## Use in editors

Point `$schema` at the URL for the file you edit.

### `modinfo.json`

```json
{
  "$schema": "https://sandustry-modding.github.io/SandustryTypes/schemas/modinfo.json",
  "manifestVersion": 1,
  "id": "author.example-mod",
  "name": "Example Mod",
  "version": "1.0.0",
  "apiVersion": 1,
  "entry": "main.js"
}
```

### `patches.json`

The game loads a bare **array**. For inline `$schema`, wrap the list (editors only — unwrap to a bare array before shipping, or map the schema by path):

```json
{
  "$schema": "https://sandustry-modding.github.io/SandustryTypes/schemas/patches.json",
  "patches": [
    {
      "file": "js/bundle.js",
      "find": "const message = 'Hello';",
      "operation": "replace",
      "code": "const message = 'Hello from my mod';",
      "expectedMatches": 1
    }
  ]
}
```

A bare `[ ... ]` array also validates. You can instead bind the schema by path (for example VS Code `json.schemas`) and keep the game array form in the file.

### `workshop.json`

Created by the in-game publisher or `npm run publish` after the first Steam Workshop upload.
Do not hand-edit `publishedFileId`.

```json
{
  "$schema": "https://sandustry-modding.github.io/SandustryTypes/schemas/workshop.json",
  "schemaVersion": 1,
  "publishedFileId": "1234567890"
}
```

## TypeScript

Import the same shapes from the npm package:

```ts
import type { ModInfo, BundlePatch, WorkshopJson } from "@sandustry-modding/types/configs";
```

See [configs](api/configs.md) for the full type reference.

## Regenerate

From the package repo root:

```bash
npm run generate
```

`npm run validate` fails when committed schemas do not match the TypeScript defs.
