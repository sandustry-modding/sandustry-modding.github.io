> [!WARNING]
> **Unofficial** community docs.
> Not affiliated with Lantto Games, Hooded Horse, or the [official Sandustry wiki](https://wiki.hoodedhorse.com/Sandustry/Sandustry_Official_Wiki ":target=_blank").
> Prefer the [official Sandkit API](https://sandustry.com/sandkit.html#api-access-heading ":target=_blank") when the two disagree.

# Sandustry Modding

Community docs for Sandustry mods: Sandkit API reference, domain guides, and the TypeScript mod template kit.

Install types as [`@sandustry-modding/types`](https://www.npmjs.com/package/@sandustry-modding/types ":target=_blank").
Project setup lives in the [mod template README](https://github.com/IrishBruse/SandustryModTemplate ":target=_blank").

## Guides

New to modding?
Start with the step-by-step guides:

- [Getting started](guides/getting-started.md) — what a mod is, required files, and a minimal example
- [The mod lifecycle](guides/mod-lifecycle.md) — compilation, load order, events, and hooks
- [Worker mods](guides/worker-mods.md) — simulation-worker entry and shared buffers
- [Publishing to Steam Workshop](guides/publishing.md) — packaging and `workshop.json`

Sandkit domains:

- [World and grid](guides/world.md) — cells, elements, terrains, maps, pickups
- [Structures and factory](guides/factory.md) — buildings, pipes, recipes, blueprints
- [Energy and signals](guides/energy.md) — power networks, collector, signal targets
- [Player and items](guides/player.md) — inventory, tools, camera, input, placement
- [UI](guides/ui.md) — HUD, overlays, dialogs, hotbar
- [Tech and progression](guides/progression.md) — research, upgrades, discoveries
- [Entities and drones](guides/entities.md) — creatures, projectiles, pickups
- [Hooks, storage, and assets](guides/runtime.md) — events, i18n, sound, sprites
- [Engine vs public API](guides/engine.md) — `sandkit.api`, `engine`, `state`, `enums`

[All guides →](guides/)

## Template kit

- [Builds](builds.md) — watch rebuild, Workshop upload, Tailwind
- [modinfo.ts](modinfo.md) — typed manifest helpers
- [configSchema](config-schema.md) — in-game Options for mods
- [patches.ts](patches.md) — `definePatches` and debug patches
- [Modkit](modkit/) — shared helpers
- [React](modkit/react.md) — JSX via `sandkit.react`
- [UI kit](ui/) — reusable HUD widgets

## Browse the API

Open generated Sandkit pages from [Search](types/search.md).
Empty search lists namespaces.
Typed search finds methods and types by live `sandkit` path.

Direct pages:

- Electron — host preload bridge (`window.electron`), not part of `sandkit`
  - [Overview](electron-bridge.md) — when to use the bridge and IPC patterns
  - [API](api/electron.md) — generated `electron` reference
- Mod files — not runtime `sandkit` objects
  - [modinfo.json](modinfo.json.md) — manifest fields, limits, and capabilities
  - [patches.json](patches.json.md) — bundle find-and-replace patches
- [Types](types/) — install `@sandustry-modding/types`, Search, JSON Schema
- [Full API reference](full.md) — every namespace on one page

## Types

Install and browse `@sandustry-modding/types` on the [Types](types/) pages.
Use [Search](types/search.md) for namespaces and members.

## Related links

- [Changelog](Changelog.md) — types package and docs history
- [Official Sandkit API](https://sandustry.com/sandkit.html#api-access-heading ":target=_blank") — host API from the game
- [npm package](https://www.npmjs.com/package/@sandustry-modding/types ":target=_blank")
- [Mod template](https://github.com/IrishBruse/SandustryModTemplate ":target=_blank") — starter mod and setup guide
- [Official Sandustry wiki](https://wiki.hoodedhorse.com/Sandustry/Sandustry_Official_Wiki ":target=_blank")

## Regenerate API pages

From a local [SandustryTypes](https://github.com/sandustry-modding/SandustryTypes) clone next to this site (the mod template puts this repo in `docs/`):

```bash
npm run generate
```

That writes `api/`, `full.md`, `schemas/`, and the search index.
It does not overwrite this `_sidebar.md` when kit pages are present.
