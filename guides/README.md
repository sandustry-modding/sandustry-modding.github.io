# Guides

Step-by-step guides for Sandustry mod authors.

These pages focus on mod files, types, and the Sandkit API.
For project setup, watch builds, and Workshop upload commands, use the [mod template](https://github.com/IrishBruse/SandustryModTemplate).

## Start here

- [Getting started](guides/getting-started.md) — what a mod is, required files, and a minimal example
- [The mod lifecycle](guides/mod-lifecycle.md) — compilation, load order, events, and hooks

## Mod files

- [Worker mods](guides/worker-mods.md) — simulation-worker entry and shared buffers
- [Publishing to Steam Workshop](guides/publishing.md) — packaging and `workshop.json`

## Sandkit domains

- [World and grid](guides/world.md) — cells, elements, terrains, maps, pickups
- [Structures and factory](guides/factory.md) — buildings, pipes, recipes, blueprints
- [Energy and signals](guides/energy.md) — power networks, collector, signal targets
- [Player and items](guides/player.md) — inventory, tools, camera, input, placement
- [UI](guides/ui.md) — HUD, overlays, dialogs, hotbar
- [Tech and progression](guides/progression.md) — research, upgrades, discoveries
- [Entities and drones](guides/entities.md) — creatures, projectiles, pickups
- [Hooks, storage, and assets](guides/runtime.md) — events, i18n, sound, sprites
- [Engine vs public API](guides/engine.md) — `sandkit.api`, `engine`, `state`, `enums`

## API reference

- [Search](../search.md) — find namespaces and members by live `sandkit` path
- [Full API reference](../full.md) — every namespace on one page
- [modinfo.json](../modinfo.json.md) — manifest fields, limits, and capabilities
- [patches.json](../patches.json.md) — bundle find-and-replace patches
- [TypeScript types](../api/configs.md) — `modinfo.json`, `patches.json`, and `workshop.json`
- [JSON Schema](../schemas.md) — raw schema URLs for editors
