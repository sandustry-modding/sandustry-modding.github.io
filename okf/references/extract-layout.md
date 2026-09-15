---
type: Reference
title: Extract layout
description: sandustry/source/ tree map for OKF source miners after npm run setup.
tags:
  - sandustry
  - okf
  - references
  - extract
  - source
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:10:00Z
sources:
  - id: extract
    resource: sandustry/source/
---

# Extract layout

`sandustry/source/` is the **extracted game app** (not the mod template).
It appears after `npm run setup` unpacks `app.asar`.
Version label: `sandustry/source/package.json` (OKF extract baseline **0.5.6**).

Use this map before grepping the tree.
OKF scope is **shipping game facts only** — see [OKF agent rules](/okf/AGENTS.md).

## Top level

| Path | Role |
| --- | --- |
| `main.js` | Electron main process — windows, IPC, save IO, workshop, GPU log |
| `preload.js` | Renderer preload — `window.electron` bridge, DevTools IPC |
| `platform.js` | Platform detection and `createPlatform()` (Steam, MS Store, …) |
| `platforms/` | Platform-specific helpers |
| `steam.js` | Steamworks integration |
| `workshop-mods.js` | Workshop subscribe, local mod discovery, manifest IO |
| `logger.js` | Main-process log writer |
| `local-mod-publisher.js` | Dev publish helper |
| `package.json` | Game name/version (**0.5.6** on current extract) |
| `dist/` | Shipped renderer assets and webpack bundles |

There is **no** TypeScript source tree in the extract — game logic lives in minified `dist/js/*.js`.

## `dist/` — renderer and assets

| Path | Role |
| --- | --- |
| `dist/index.html` | Renderer entry (CDP attach URL) |
| `dist/js/bundle.js` | Main webpack bundle — boot, React UI, sim host, worker factory, `window.__debug` |
| `dist/js/simulation-worker.js` | Simulation thread worker (webpack chunk **937**) |
| `dist/js/manager-worker.js` | Manager worker (chunk **147**) — small standalone script |
| `dist/js/utility-worker.js` | Utility worker (chunk **360**) |
| `dist/js/external-mod-runtime.js` | Main-thread external mod runtime (chunk **134**) |
| `dist/js/external-mod-worker-runtime.js` | Mod `workerEntry` facade (chunk **247**) |
| `dist/js/locales/*.js` | Per-locale string tables |
| `dist/js/procgen/` | `noisejs`, `seedrandom` vendored helpers |
| `dist/mods/` | Builtin structure/HUD PNG sprites (~126 files) |
| `dist/img/procgen/prefabs/` | Prefab JSON configs (start, timer, rocket, …) |
| `dist/css/`, `dist/fonts/`, `dist/music/`, `dist/sfx/` | Static assets |

Chunk id → filename map lives inline in `bundle.js` (`147===e?"manager-worker.js":…`).

## High-value mining targets

| Question | Start here |
| --- | --- |
| Worker boot, thread count, `postAll` | `bundle.js` — search `yi=`, `vi=`, `multithreading` — [Workers runtime](/okf/internals/workers-runtime.md) |
| Mod worker `sandkit.api` list | `external-mod-worker-runtime.js` — `createExternalWorkerEntryRuntime` |
| Manager launcher defaults | `manager-worker.js` — embedded JSON |
| `__debug.admin.run` commands | `bundle.js` — search `admin.run` / command strings — [__debug](/okf/internals/debug.md) |
| Signal engine internals | `bundle.js` — large minified module (referenced as `Jd.Q` in OKF) |
| Structure / pipe / energy registration | `bundle.js` + grep structure id strings |
| Save format / IPC | `main.js` — `ipcMain` save/load handlers — [Electron bridge](/okf/internals/electron.md) |
| Renderer boot order | `bundle.js` loader progress keys — [Renderer boot](/okf/internals/boot.md) |

## Search tips

- Prefer **string literals** (`"powerBrick"`, `"signalGate"`, `"buildAtCell"`) over minified identifiers — names change every build.
- Read **standalone** worker files directly when the question is worker-only (`manager-worker.js` is human-scannable).
- `bundle.js` is multi-megabyte — use ripgrep with `-o` context or node slice scripts; do not load whole file into editor chat.
- Webpack module numbers (e.g. `n(38394)`) are **not** stable across versions — capture behavior in OKF concepts, not module ids alone.
- Cross-check public API on [official Sandkit](https://sandustry.com/sandkit.html) before documenting new members.

## What is not in the extract

| Missing | Where to look instead |
| --- | --- |
| `platforms/msstore.js`, `platforms/gog.js` | Not in **any** Steam-channel `app.asar` (confirmed 0.5.6 file list) — [Store platforms](/okf/internals/platforms.md) |
| Mod template npm scripts, F5 flow | Template root `README.md` |
| `@modkit/*`, template patches | `docs/modkit/` |
| Generated `/api/` pages | [SandustryTypes](https://github.com/sandustry-modding/SandustryTypes) |
| Live runtime values | CDP probes — [Live index](/okf/live/index.md) |

## Related

- [Official Sandkit](/okf/references/official-sandkit.md)
- [Types package](/okf/references/types-package.md)
- [Workers runtime](/okf/internals/workers-runtime.md)
- [Worker attach](/okf/live/worker-attach.md)
