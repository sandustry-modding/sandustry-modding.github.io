# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## 0.8.0 - 2026-09-22

https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.8.0

### Added

- Missing Sandkit declarations: `cooldown.start`, `resources.refresh`, `player.inventory.hasById`, `items.getRegisteredIds`, `items.spriteMounts`, `signals.registerSenderType`, `signals.setOutputAtCell`, `signals.interactables`, `input.getMousePositionAtCell`, `input.getMousePositionAtWorld`

### Changed

- API catalog generation fails when official or expected members are undeclared.
- Catalog scans `src/worker/api/` as well as `src/sandkit/api/`.
- Official HTML path qualification prefixes nested dotted signatures and skips return-handle docs.
- Removed `scripts/api-gen/generated/api-gaps.md` (gaps stay in `api-catalog.json` and must be zero).

## 0.7.0 - 2026-09-16

https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.7.0

### Changed

- Generate writes API pages, schemas, and search assets into the sibling docs site clone (`../docs`).
- This package no longer keeps a `docs/` tree.
- `verify-package` runs the `tsc` CLI so TypeScript 7 still typechecks the packed tarball.

### Added

- Domain guides for world, factory, energy, player, UI, progression, entities, runtime services, and engine vs public API
- `sandkit.api.ui.select` and related dialog, region, override, hotbar, and component APIs
- `npm run docs:links` checks markdown links against docs pages and heading ids
- Docs sidebar Settings toggle hides deprecated API members and search hits
- Full API page heading ids use hyphens so the id is not printed after the member name

### Changed

- Generated API members use a request-style card (signature, argument table, description) with the site gold and orange colours
- Argument table union types use an HTML pipe so the table does not show a backslash
- Deprecated member callouts sit directly below the member heading.
- Hook-id maps use a small heading and a TypeScript fence for the args type.
  Deprecated hook ids use the same Deprecated marker as other members.
- `npm run generate` overwrites `docs/api/` pages in place and does not delete that folder
- The current in-page heading uses the gold header colour
- In-page TypeDoc hashes are rewritten to `?id=` heading links
- Docs sidebar lists direct pages.
  On an API namespace page it also lists that namespace and its child namespaces.
- Search is the place to open generated Sandkit API pages.
  Empty query lists names and one-line descriptions.
  Nested members stay on the namespace page and in typed search.

### Removed

- TypeDoc `References` re-export lists at the bottom of generated API pages
- TypeDoc `Namespaces` child lists at the top of generated API pages
  Child namespaces stay in the sidebar.
- TypeDoc `See` headings that only link Official docs.
- `docs/modules.md` alias page.
  Old `#/modules` URLs still open Search.
- Accidental `docs/api/_media.search.md` copy of the Search page.

## 0.6.0 - 2026-09-06

https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.6.0

### Added

- `ElectronBridge` and related types for the renderer preload bridge (`@sandustry-modding/types/electron`, deep imports via `@sandustry-modding/types/electron/*`; ambient `electron`, `ElectronBridge`, `ElectronLogLevel`, and `ElectronPlatform` on `@sandustry-modding/types`; full `@param` / `@returns` JSDoc on each bridge method)
- Modding guides under `docs/guides/` (getting started, lifecycle, manifest, patches, workers, Workshop)
- `docs/electron-bridge.md` — English overview of the renderer preload bridge with links to the generated `api/electron.md` reference
- `WorkshopJson` type for `workshop.json` (`@sandustry-modding/types/configs`)
- `scripts/namespace-summaries.json` — one-line descriptions and worker flags for each `sandkit.api` namespace
- `scripts/api-catalog/overrides.json` — namespace copy, official→declared aliases, and expected missing members
- `npm run generate:api-catalog` — build `scripts/generated/api-catalog.json` and `docs/generated/api-gaps.md` from overrides, official HTML, and declarations

### Changed

- Split electron declarations into focused modules under `src/electron/` (`bridge`, `platform`, `workshop`, `local-mods`, and related files)
- `ModInfo.entry` is optional when another manifest capability is declared (texture-only, map-only, and similar mods)
- Docs home page and sidebar link to guides; site title and description updated
- API namespace index (`docs/modules.md`) shows stats, descriptions, method counts, and worker badges per namespace
- Namespace summary copy in `scripts/namespace-summaries.json` rewritten for clarity
- `docs:api` runs `generate:api-catalog` first; method counts use the catalog (nested members and re-exports included)
- `npm run release` pushes the release branch, publishes to npm, pushes tag `v<version>`, and creates a GitHub release from `CHANGELOG.md`

## 0.5.0 - 2026-09-03

https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.5.0

### Added

- Sandkit 0.5.6 API surface:
  - `api.terrains.meltAtCell(cellX, cellY)` (main and worker)
  - `api.events` event `building:removing` (fires before `building:removed`)
  - Worker intercept hook `fire:terrain:burn` (requires `guard.terrainType`)
  - `resource:collection:prepare` feedback value `"reduced"`
- `ElementDefinition.metaColor` (discovery and lexicon label color as `0xRRGGBB`)
- `ElementDefinition.isGrabbable` and `ElementDefinition.isTransportable` (grabber and conveyor)
- JSON Schema files for `modinfo.json` and `patches.json` under `docs/schemas/` (GitHub Pages URLs; see [JSON Schema](schemas.md))
- `npm run docs:schemas` generates those schemas from `src/configs/` via `ts-json-schema-generator`; `validate` checks they are not stale
- `ConfigSchemaChoice.description` / `descriptionKey` (same help fields as number and boolean)
- Optional `ModInfo.$schema` for editor schema association (ignored by the game)
- Optional `BundlePatchesDocument` (`$schema` + `patches`) so editors can attach a schema URL; bare arrays still validate
- `BundlePatch.occurrence` (`"all"` or a 1-based index) from the game patch loader
- Official Sandkit HTML archive script (`npm run docs:archive-sandkit`) writing Markdown under `docs/official-api/`

### Fixed

- Generated `modinfo.json` schema rejected `$schema` and `choice` settings that set `descriptionKey`

## 0.4.0 - 2026-08-29

https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.4.0

### Added

- `npm run release` script: changelog/registry/auth checks, `validate`, then `npm publish` (optional `--dry-run`)
- `src/configs/` types for `modinfo.json` and `patches.json` (`@sandustry-modding/types/configs`), with JSDoc on every key
- Stronger structure definition fields: `tooltipHover`, `spanTiles`, `linkedClearance`, spritesheet/ui render blocks
- Stronger `TechDefinition` fields used by tech nodes (`cost`, `unlocks`, `currencyType`, `branch`)
- JSDoc `@example` blocks on many Sandkit members (main, worker, and configs)
- Prebuilt search index (`docs/assets/search-index.js`) so API search works without a runtime crawl
- Nested namespace roots in the docs sidebar (`sandkit`, `sandkit.api`, worker, engine, react)

### Changed

- Official `@see` links use a short “Official docs” label that deep-links to Sandkit HTML sections
- Docs search ranks full runtime paths (`sandkit.api.settings.get()`) instead of local member names only
- Move Full API reference to the bottom of the docs root nav block
- Drop the page TOC plugin and the nested `docs/api/_sidebar.md` in favor of one site sidebar

## 0.3.1 - 2026-08-27

https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.3.1

### Fixed

- Deep package imports such as `@sandustry-modding/types/sandkit/engine` (Node `exports` `*` matches one path segment; map file and `index.d.ts` targets under `src/`)
- Ship root `CHANGELOG.md` and `LICENSE` in the npm tarball
- Document ambient setup with `/// <reference types="@sandustry-modding/types" />` (do not list this package under `compilerOptions.types`)

### Added

- `npm run validate` gate: declaration typecheck, unit tests, and packed-tarball consumer probes

## 0.3.0 - 2026-08-27

https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.3.0

### Changed

- Move declaration sources into `src/` (`src/sandkit`, `src/worker`, `src/shared`, `src/global.d.ts`). Package subpaths such as `@sandustry-modding/types/sandkit/engine` stay the same
- Show local names for API member headings in the API reference (full runtime path stays under each heading)

## 0.2.0 - 2026-08-27

https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.2.0

### Added

- Official Sandkit API coverage from [sandustry.com/sandkit.html](https://sandustry.com/sandkit.html): `api.entities`, `api.pipes`, `api.factory`, `api.game`, `api.blueprints`, `api.pickups`, `api.grid.mutate`, and related worker surfaces
- JSDoc `@see` links back to the official Sandkit page on documented members

### Changed

- Canonical mutation names match official docs (`createAtCell`, `grid.mutate`, `getTypeById`, and similar). Old names stay as `@deprecated` aliases (`*WhenIdle`, `api.world`, `getTypeFromId`, and similar)

## 0.1.1 - 2026-08-27

https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.1.1

### Changed

- Export subpaths (`./*`) so mods can import declaration modules such as `@sandustry-modding/types/sandkit/engine`

## 0.1.0 - 2026-08-27

https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.1.0

### Added

- Initial public release of `@sandustry-modding/types`
- TypeScript declarations for main-thread `sandkit` (`sandkit/api`, `sandkit/engine`, `sandkit/enums`, `sandkit/react`)
- Worker-thread declarations under `worker/` (`WorkerSandkitApi`)
- Shared base shapes under `shared/` for main and worker reuse
- Ambient `sandkit` free variable and type aliases via `global.d.ts`
- API reference generated from the declarations
