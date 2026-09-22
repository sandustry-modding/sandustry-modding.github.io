# Patch definitions (`patches.ts`)

`patches.ts` is the mod template source for `patches.json`.
When both files exist, **`patches.ts` wins**.
Manifest `modinfo.ts` patch exports also win over a root `patches.json`.

File format, operations, and target bundles: [patches.json](patches.json.md).

| Export | When it is written |
| --- | --- |
| `patches` | Always (`patches.json`) |
| `debugPatches` | Dev / `--debug` only. Merged after `patches`. |

Release (`npm run build`, `npm run dev:release`) omits `debugPatches`.
Dev (`npm run dev`) includes both.

The browser bundle stubs `@modkit/patches` so patch payloads stay out of `main.js`.

## Build checks

`scripts/lib/build-patches.js` checks each patch before it writes JSON:

- `id` is a non-empty string and unique in the written list
- `file` matches `js/<name>.js`
- `operation` is `insertBefore`, `replace`, or `wrap`
- `expectedMatches` is an integer
- exactly one of `find` or `regex` (`{ pattern, flags? }`)
- `replace` / `insertBefore` need non-empty `code`
- `wrap` needs `before` and `after` strings

Do not edit `dist/<modinfo.id>/patches.json` by hand.
Change the export and rebuild.

## Adding patches

```ts
import { definePatches } from "@modkit/patches";

export const patches = definePatches([
  {
    id: "bundle-log-prefix",
    file: "js/bundle.js",
    find: "initializing workers",
    operation: "insertBefore",
    code: "[patched]",
    expectedMatches: 1,
  },
]);

export const debugPatches = definePatches([
  // debug-only patches
]);
```

Or keep the list in `patches.ts` and re-export it from `modinfo.ts`:

```ts
export { patches } from "./patches";
```

Types: `@sandustry-modding/types/configs` (`BundlePatch`).
Example: [collector-element/patches.json](https://github.com/sandustry-modding/SandustryExamples/blob/main/content/collector-element/patches.json).
