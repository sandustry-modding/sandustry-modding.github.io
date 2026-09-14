# Worker mods

Simulation logic runs in worker threads.
Mods that hook element updates, grid mutation, or other sim-side behavior need a `workerEntry` script.

API reference: [sandkit.api.worker](../api/sandkit.api.worker.md).
Worker types: `WorkerSandkitApi` in `@sandustry-modding/types/worker`.

## Manifest

Add `workerEntry` to `modinfo.json`:

```json
{
  "workerEntry": "worker.js"
}
```

If the mod folder has `worker.ts`, the mod template build sets `"worker.js"` when this field is omitted.

A mod still needs at least one capability (`entry`, `workerEntry`, overrides, `provides`, or `map`).
Worker-only mods are valid when `workerEntry` and worker hooks are enough.

See [modinfo.json reference](modinfo.json.md).

## Typing worker code

The host injects `sandkit` into `workerEntry` the same way as `entry`.
Worker and main `sandkit.api` surfaces overlap but are **not** interchangeable.

```ts
/// <reference types="@sandustry-modding/types" />

const api = sandkit.api as unknown as WorkerSandkitApi;
```

Prefer declarations under `worker/` in this package.
Do not assume main-thread-only methods exist in workers.

## Main vs worker APIs

| Thread | Type | Docs |
| ------ | ---- | ---- |
| Main (`main.js`) | `sandkit.api` (full `SandkitApi`) | [sandkit.api](../api/sandkit.api.md) |
| Worker (`worker.js`) | `WorkerSandkitApi` | [sandkit.api.worker](../api/sandkit.api.worker.md) |

Main thread has UI, player, and building helpers workers lack.
Workers have `hooks`, `events`, `grid`, `elements`, and other sim namespaces.

## Shared buffers

Some APIs pass `SharedArrayBuffer` data between main and workers.
Read member docs before you cache buffer views across frames.

Search: [Search](../types/search.md) → `sandkit.api.worker`.

## Patches on worker bundles

Worker patches target `js/simulation-worker.js` (and other worker bundles).
Use the same `atomicGroup` on paired main and worker patches when both must apply together.

See [Patching with patches.json](patches.json.md).

## Development

`npm run dev` hot-reloads `main.js` in the renderer.
**Restart the game** after `worker.js` or patch changes.

## Related

- [The mod lifecycle](guides/mod-lifecycle.md)
- [sandkit.engine](../api/sandkit.engine.md) — internal engine API (prefer `sandkit.api` when both exist)
- [Mod template](https://github.com/IrishBruse/SandustryModTemplate)
