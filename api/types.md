# Sandkit API types

TypeScript declarations and community docs for the live Sandustry `sandkit` modding API.
Package name: `@sandustry-modding/types`.

Originally a fork of [flamableassassin/sandustry-modding-types](https://github.com/flamableassassin/sandustry-modding-types/).

The [docs site](https://sandustry-modding.github.io/) ships API reference pages, modding guides, and JSON Schema for `modinfo.json` / `patches.json`.
Folder layout mirrors runtime shape so you can jump from code to the matching `.d.ts` path.

## Runtime map

| Path                            | Runtime object                                                          |
| ------------------------------- | ----------------------------------------------------------------------- |
| `src/sandkit/api/`              | `sandkit.api` (main thread)                                             |
| `src/sandkit/engine/api/`       | `sandkit.engine.api`                                                    |
| `src/sandkit/engine/state.d.ts` | `sandkit.engine.state` / `sandkit.state`                                |
| `src/sandkit/enums/`            | `sandkit.enums`                                                         |
| `src/sandkit/react.d.ts`        | `sandkit.react`                                                         |
| `src/sandkit/index.d.ts`        | Composed `Sandkit` root type                                            |
| `src/global.d.ts`               | Ambient `sandkit` free variable and type aliases                        |
| `src/worker/`                   | Worker-thread `sandkit.api` (see `WorkerSandkitApi`)                    |
| `src/shared/`                   | Shared primitives only (`geometry`, `nominal`, `player`, etc.)        |
| `src/worker/api/`               | Worker-only and worker-extended `sandkit.api` namespaces                |
| `src/configs/`                  | `modinfo.json` / `patches.json` TypeScript types (not a runtime object) |
| `src/electron/`                 | Renderer preload bridge (`window.electron`; not a runtime `sandkit` object) |

## Runtime shape vs `export namespace`

At runtime, every API bag is a **plain object** with function properties — not a TypeScript `namespace`. MCP checks on a live game session show:

- `sandkit.api`, `sandkit.api.ui`, `sandkit.api.ui.overlays`, and `sandkit.engine.api.game` are all `typeof "object"` with `Object.prototype`
- Nested keys hold functions or further plain objects

Declaration files use `export namespace` because it is the usual `.d.ts` pattern for nested object APIs. It matches how you call the API (`sandkit.api.ui.update`) and supports `export import` when a worker or main module extends another declaration file in the same thread.

`interface` or `type` object literals would also work for runtime shape, but they do not support the `export import` re-export style used across main and worker API modules.

`src/shared/` holds geometry and other cross-cutting primitives — not API barrels.
Runtime `sandkit.api.shared` (shared-memory buffers) is unrelated to the `src/shared/` folder path.

## Install

```bash
npm install @sandustry-modding/types
```

### Ambient types (main thread)

Pull the host `sandkit` ambient into your main-thread program with a triple-slash reference at the top of `main.js`, or in a small ambient `.d.ts` that your main `tsconfig` / `jsconfig` includes:

```ts
/// <reference types="@sandustry-modding/types" />
```

That works in `.ts` and `.js` (including checked JS with `checkJs`).

Do **not** list `@sandustry-modding/types` under `compilerOptions.types`. That list only loads packages from `node_modules/@types` (for example `"react"` or `"node"`).

### Worker ambient (filename tsconfig)

Typecheck `worker.ts` and `*.worker.ts` in a **second** TypeScript project.
Do not load main and worker ambients in the same program.
Never import worker entry files from main-thread source.
Shared helpers used by both threads must not assume either ambient `sandkit.api` shape, or they belong on one thread only.

The [Sandustry mod template](https://github.com/sandustry-modding/SandustryModTemplate) ships a solution `tsconfig.json` plus `tsconfig.main.json` and `tsconfig.worker.json`:

- `tsconfig.json` has an empty `files` list and `references` both projects, so the editor typechecks each file in the matching project.
- `tsconfig.main.json` excludes `**/worker.ts` and `**/*.worker.ts`.
- `tsconfig.worker.json` extends the main config, sets `exclude` to `[]`, includes only those worker globs, and lists `node_modules/@sandustry-modding/types/src/worker/global.d.ts` under `files`.
- Run both projects in CI: `tsc --noEmit -p tsconfig.main.json && tsc --noEmit -p tsconfig.worker.json`.

Standalone consumers should copy that `tsconfig.worker.json` layout instead of triple-slash references on worker files or extra worker-only ambient `.d.ts` shims.

Deep declaration modules are also available, for example:

```ts
import type { RetroConsoleGame } from "@sandustry-modding/types/sandkit/engine";
import type { ModInfo, BundlePatch } from "@sandustry-modding/types/configs";
import type { Vector2, CellCoordinates, CellXY, Size2 } from "@sandustry-modding/types/shared";
```

## Usage

- **Main mod (`main.js`):** use the ambient free name `sandkit`. Type aliases such as `SandkitApi` are global; do not import a value binding.
- **Worker mod (`worker.ts` / `*.worker.ts`):** typecheck with a worker-only tsconfig (see **Worker ambient** above) so `sandkit.api` is `WorkerSandkitApi` with no cast.
- **Shared folder:** not a runtime namespace. Import `Vector2`, `CellCoordinates`, and related primitives from `@sandustry-modding/types/shared` or `@sandustry-modding/types/shared/geometry`. API namespaces are declared under `src/sandkit/api/` (main) and `src/worker/api/` (worker).
- **Configs folder:** `modinfo.json` and `patches.json` TypeScript types (`@sandustry-modding/types/configs`). Not part of the live `sandkit` object. JSON Schema: https://sandustry-modding.github.io/schemas/modinfo.json and https://sandustry-modding.github.io/schemas/patches.json
- **Electron folder:** renderer preload bridge (`@sandustry-modding/types/electron`). Ambient `electron` on `@sandustry-modding/types`. Docs: [Electron bridge](https://sandustry-modding.github.io/#/electron-bridge).

## Maintaining types

Edit `.d.ts` files under `src/`. Regenerate the API reference and JSON Schema after JSDoc or config-type changes.

`npm run generate` merges `scripts/api-gen/overrides.json`, the official [Sandkit API](https://sandustry.com/sandkit.html) HTML, and `src/sandkit/api/` plus `src/worker/api/` declarations.
It writes `scripts/api-gen/generated/api-catalog.json` and refreshes `scripts/api-gen/generated/namespace-summaries.json`.
It fails when any official or expected member is missing from the declarations.
Edit namespace descriptions and alias mappings in `scripts/api-gen/overrides.json`.

`npm run scrape` walks the live `sandkit` object in a running Sandustry renderer (CDP `:9222`) and writes `scripts/api-gen/generated/runtime-api.json`.
Start the game with the debug port open (F5 or `npm run sandustry` from the mod template), load a save, then run scrape from this repo.

## Docs site

Guides and the docs site live in [sandustry-modding.github.io](https://github.com/sandustry-modding/sandustry-modding.github.io).
Clone that repo as `../docs` (the mod template does this during `npm run setup`).
Regenerate the API reference and JSON Schema from these declarations:

```bash
npm run generate                  # catalog + API markdown + schemas on the docs site
npm run scrape                    # live sandkit inventory from running Sandustry (CDP :9222)
npm run generate -- --catalog     # overrides + official HTML + declarations → catalog
npm run generate -- --schemas     # JSON Schema only
npm run docs:archive-sandkit      # Fetch official sandkit.html into official-api/ on the docs site
```

Output lands in `api/` and `schemas/` on that clone.
`npm run generate` overwrites those API pages in place.
It does not delete `api/`.
Browse namespaces from Search on the docs site.
On an API namespace page the sidebar also lists that namespace and its children.
The combined page is `full.md`.
`npm run docs` runs that step, then serves the docs site.
`npm run docs:links` fails when a markdown link does not resolve to a docs page or heading id.
`npm run validate` fails when committed schemas on the docs site do not match `src/configs/`.

`npm run docs:archive-sandkit` asks for a base file name, then writes `official-api/<name>.md` from https://sandustry.com/sandkit.html.
