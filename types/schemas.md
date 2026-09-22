# JSON Schema

Generated from `@sandustry-modding/types/configs` (`ModInfo`, `BundlePatchesFile`, and `WorkshopJson`).

Prefer the [official Sandkit docs](https://sandustry.com/sandkit.html#mod-files-heading ":target=_blank") when a schema and the game disagree.

## URLs

| File | Schema URL |
| --- | --- |
| `modinfo.json` | https://sandustry-modding.github.io/SandustryTypes/schemas/modinfo.json |
| `patches.json` | https://sandustry-modding.github.io/SandustryTypes/schemas/patches.json |
| `workshop.json` | https://sandustry-modding.github.io/SandustryTypes/schemas/workshop.json |

Point `$schema` at the URL for the file you edit.
Field lists and examples: [modinfo.json](modinfo.json.md) and [patches.json](patches.json.md).

`patches.json` ships as a bare array.
Bind the schema by path in the editor when you need to keep that array form.

`workshop.json` is written by the in-game publisher or `npm run publish`.
Do not hand-edit `publishedFileId`.

## TypeScript

```ts
import type { ModInfo, BundlePatch, WorkshopJson } from "@sandustry-modding/types/configs";
```

Member reference: [Config types](api/configs.md).

## Regenerate

From the types package:

```bash
npm run generate
```

`npm run validate` fails when committed schemas do not match the TypeScript defs.
