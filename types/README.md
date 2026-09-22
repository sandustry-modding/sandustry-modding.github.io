# SandustryTypes

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
| `src/shared/`                   | Internal base shapes reused by main and worker declarations             |
| `src/configs/`                  | `modinfo.json` / `patches.json` TypeScript types (not a runtime object) |
| `src/electron/`                 | Renderer preload bridge (`window.electron`; not a runtime `sandkit` object) |

## Runtime shape vs `export namespace`

At runtime, every API bag is a **plain object** with function properties — not a TypeScript `namespace`. MCP checks on a live game session show:

- `sandkit.api`, `sandkit.api.ui`, `sandkit.api.ui.overlays`, and `sandkit.engine.api.game` are all `typeof "object"` with `Object.prototype`
- Nested keys hold functions or further plain objects

Declaration files use `export namespace` because it is the usual `.d.ts` pattern for nested object APIs. It matches how you call the API (`sandkit.api.ui.update`) and supports `export import` when main and worker share base shapes under `shared/`.

`interface` or `type` object literals would also work for runtime shape, but they do not support the `export import` re-export style used across main, worker, and shared modules.

## Install

```bash
npm install @sandustry-modding/types
```

### Ambient types (preferred)

Pull the host `sandkit` ambient into your project with a triple-slash reference. Put it at the top of `main.js` / `worker.js`, or in a small ambient `.d.ts` that your `tsconfig` / `jsconfig` includes:

```ts
/// <reference types="@sandustry-modding/types" />
```

That works in `.ts` and `.js` (including checked JS with `checkJs`).

Do **not** list `@sandustry-modding/types` under `compilerOptions.types`. That list only loads packages from `node_modules/@types` (for example `"react"` or `"node"`).

Deep declaration modules are also available, for example:

```ts
import type { RetroConsoleGame } from "@sandustry-modding/types/sandkit/engine";
import type { ModInfo, BundlePatch } from "@sandustry-modding/types/configs";
```

## Usage

- **Main mod (`main.js`):** use the ambient free name `sandkit`. Type aliases such as `SandkitApi` are global; do not import a value binding.
- **Worker mod (`worker.js`):** type `sandkit.api` as `WorkerSandkitApi`. Worker and main APIs overlap but are not interchangeable.
- **Shared folder:** not a runtime namespace. It holds domain shapes and API bases that main and worker modules extend.
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
