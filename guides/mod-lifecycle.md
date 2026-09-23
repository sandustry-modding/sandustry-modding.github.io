# The mod lifecycle

This page describes when mod code runs and how the loader orders mods.
It complements the [official Sandkit docs](https://sandustry.com/sandkit.html#mod-files-heading).

## Load and compile

1. Sandustry reads each enabled mod folder.
2. The loader parses `modinfo.json` (or the built output from `modinfo.ts`).
3. Optional `patches.json` rewrites game bundles at process start.
4. The main `entry` script runs in the renderer.
5. Optional `workerEntry` runs in simulation workers.

Patches apply once per game process.
Renderer hot reload does **not** re-apply patches.
Restart the game after patch changes.

Details: [Patching with patches.json](patches.json.md).

## Manifest capabilities

A mod must declare at least one capability in `modinfo.json`:

- `entry` — main-thread script (`main.js`)
- `workerEntry` — simulation-worker script (`worker.js`)
- `configOverrides`, `shaderOverrides`, `textureOverrides`, `provides`, or `map` — data-only mods

See [modinfo.json reference](modinfo.json.md) and [configs: ModInfo](../api/configs.md?id=modinfo).

## Load order

Mods sort by `loadOrder` (lower first).
Ties break on `id` alphabetically.

Use `dependencies` to require other mod ids before yours loads.
The loader skips mods whose dependencies are missing or disabled.

## Runtime API

The host injects a global `sandkit` object into `entry` and `workerEntry`.
Do not import `sandkit` as a module.

In TypeScript or checked JavaScript:

```ts
/// <reference types="@sandustry-modding/types" />
```

Use the free name `sandkit` in `main.js`.
Worker typing uses a separate tsconfig project — see [Worker mods](guides/worker-mods.md).

## Hooks and events

Prefer public Sandkit APIs over bundle patches.

- `sandkit.api.hooks.register(event, handler)` — subscribe to named game events
- `sandkit.api.events` — worker-thread event surface (see [Worker mods](guides/worker-mods.md))

Search the API for event names: [Search](../types/search.md).

On **0.5.5+**, use hooks, `configOverrides`, and `register` APIs before you rewrite game bundles.

## Development vs release

The mod template `npm run dev` watches source and writes `main.js` into the game mods folder.
Restart the game for worker scripts and patches.

`npm run dev:release` matches a Workshop upload build (no debug patches or source maps).

## Related

- [Getting started](guides/getting-started.md)
- [sandkit.api.hooks](../api/sandkit.api.hooks.md)
- [Mod template builds](builds.md)
