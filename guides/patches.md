# Patching with patches.json

`patches.json` applies exact (or regex) rewrites to Sandustry JavaScript bundles at mod load.

Types: [configs: BundlePatch](../api/configs.md?id=bundlepatch).
JSON Schema: [schemas/patches.json](../schemas.md).

## When to patch

On **0.5.5+**, prefer the public [Sandkit API](https://sandustry.com/sandkit.html) (`api.hooks`, `configOverrides`, `register`) before you rewrite game bundles.

Use a patch only when the public API cannot do the job.

Patches break when the game updates.
Minified `find` strings move.
Re-test every patch after a game update.

## Apply timing

The loader applies `patches.json` at **mod load** (once per process).
Renderer hot reload does **not** re-apply them.
Stop and start the game.
Save reload is not enough.

## File layout

Ship a bare **array** at the mod root:

```json
[
  {
    "id": "bundle-log-prefix",
    "file": "js/bundle.js",
    "find": "initializing workers",
    "operation": "insertBefore",
    "code": "[patched]",
    "expectedMatches": 1
  }
]
```

For IDE validation, point `$schema` at the published URL or bind the schema by file path in your editor.
The game loads a bare array without `$schema`.

Wrapped document form (editors only):

```json
{
  "$schema": "https://sandustry-modding.github.io/SandustryTypes/schemas/patches.json",
  "patches": [ ... ]
}
```

Unwrap to a bare array before shipping, or map the schema by path in VS Code.

## Target files

| `file` value | Bundle |
| ------------ | ------ |
| `js/bundle.js` | Main renderer bundle |
| `js/simulation-worker.js` | Simulation workers |
| `js/manager-worker.js` | Manager worker |
| `js/utility-worker.js` | Utility worker |

Pair main and worker patches with the same `atomicGroup` id when both must succeed or fail together.

## Operations

| Operation | Effect |
| --------- | ------ |
| `replace` | Replace the matched substring |
| `insertBefore` | Insert `code` before the match |
| `insertAfter` | Insert `code` after the match |
| `delete` | Remove the matched substring |

Set `expectedMatches` so a failed find fails fast.

Patch `code` runs **outside** the game bundle IIFE.
Put shared runtime helpers on `globalThis` when patch code must call them.

## Game version in modinfo

Declare compatibility in [modinfo.json](guides/modinfo.md):

- Patch-only mods: cap `gameVersion.maximum` at the last tested release.
- API mods: set `gameVersion.minimum` to `"0.5.5"` or higher.

## Template workflow

The [mod template](patches.md) documents `patches.ts`, `definePatches`, and `debugPatches`.

When both `patches.json` and `patches.ts` exist, **`patches.ts` wins**.

## Related

- [The mod lifecycle](guides/mod-lifecycle.md)
- [configs: patches](../api/configs.md)
- [Example patches.json](https://github.com/sandustry-modding/SandustryExamples/blob/main/content/collector-element/patches.json)
