# Mod manifest (`modinfo.ts`)

Use `modinfo.ts` when the mod template should write `modinfo.json`.
When both files exist, **`modinfo.ts` wins**.

Field list, JSON example, and `$schema`: [modinfo.json](modinfo.json.md).
Settings fields: [configSchema](config-schema.md).

## TypeScript manifest

```ts
import { defineModInfo } from "@modkit/modinfo";

export const modinfo = defineModInfo({
  manifestVersion: 1,
  id: "author.template",
  name: "Template",
  version: "0.0.1",
  apiVersion: 1,
  entry: "main.js",
});
```

Or wrap an existing JSON file:

```ts
import manifest from "./modinfo.json";
import { modinfoFromJson } from "@modkit/modinfo";

export const modinfo = modinfoFromJson(manifest);
```

Patch exports can live on `modinfo.ts` (`export { patches } from "./patches"`).
See [patches.ts](patches.md).

The build writes `modinfo.json` into `dist/<modinfo.id>/` without `$schema`.
The game folder name is `id`.

Shapes: `@sandustry-modding/types/configs` (`ModInfo`), via [`modkit/modinfo.ts`](../modkit/modinfo.ts).
Starter file: [`src/template/modinfo.ts`](../src/template/modinfo.ts).
