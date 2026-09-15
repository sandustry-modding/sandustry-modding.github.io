---
type: Reference
title: API gaps
description: Drift between official Sandkit HTML, SandustryTypes, generated docs, and live sandkit on 0.5.6.
tags:
  - sandustry
  - okf
  - api
  - gaps
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T21:45:00Z
---

# API gaps

Track signature and surface drift across the three API layers agents use.
Baseline: game **0.5.6**, `apiVersion` **1**.
Signature truth: [official Sandkit HTML](https://sandustry.com/sandkit.html).

## Layer order

| Layer | Role | When it lies |
| --- | --- | --- |
| [Official HTML](https://sandustry.com/sandkit.html) | Signature truth for public methods | Lags a new game build until the host page updates |
| Live `sandkit` / `sandkit.engine.api` | Runtime object in mod entry and probes | CDP evaluate may not see ambient `sandkit`; `state.sandkit.engine` often absent |
| `@sandustry-modding/types` + `/api/*.md` | Browse aid and `tsc` | Generated from types + HTML ingest; can include undeclared live aliases or miss new members |

When layers disagree on a **public** method, follow official HTML.
When official HTML is silent but live exposes a member, treat it as **undocumented live** until the host page lists it.

## Live-only or HTML-silent (0.5.6)

Verified CDP `:9222` evening pass via webpack **46781** (`FH`) when ambient `sandkit` is undefined in evaluate.

| Surface | Official HTML | Live / extract | OKF domain |
| --- | --- | --- | --- |
| `sandkit.api.processing` | Not a top-level namespace heading | **Present** on engine bag: `registerGrower`, `registerShaker`, `registerKineticPress` | [Factory processing](/okf/factory/processing.md) |
| `sandkit.api.world` | Deprecated alias of `api.grid` | **Present** on engine bag (`getDimensions`, `pickups`, `*WhenIdle`, …) | [Grid, world alias, and pickups](/okf/world/world-api.md) |
| `sandkit.api.tech.getStatusById` | — | **`undefined`** on engine `tech` keys; use `isResearched` / `isLocked` or `parseTechTree` | [Tech status](/okf/progression/tech-status.md) |
| `shared.upgrades` mirror | — | **`false`**; `store.upgrades` is truthy on probed save | [Upgrades](/okf/progression/upgrades.md) |

## Deprecated aliases still on the live object

Official HTML marks these; generated `/api/` pages may still list them.
Prefer the canonical name in mod code.

| Canonical | Deprecated live alias | OKF pointer |
| --- | --- | --- |
| `api.grid` | `api.world` (partial — also owns `pickups`, `*WhenIdle`) | [World API](/okf/world/world-api.md) |
| `api.processing.register` | `api.structures.addProcessor` | [Processing](/okf/factory/processing.md) |
| `api.pickups.remove` | `destroy` | [World items](/okf/entities/world-items.md) |
| `api.tech.registerDefinition` | `addDefinition` | [Tech](/okf/progression/tech.md) |
| `api.terrains` `hitPoints` | `hp` | [Terrains](/okf/world/terrains.md) |
| `api.ui.regions.mount` | `api.ui.overlays.register` | [Overlay API](/okf/ui/overlay-api.md) |
| `*AtCell` / `*WhenIdle` suffixes | Shorter `*At` / bare names on several bags | Domain concept for the namespace |

Full alias tables live in domain concepts — do not duplicate every row here.

## Arity and throw behavior

| Call | Drift | Proof |
| --- | --- | --- |
| `api.factory.getProcessCount()` | No-arg call **throws** (`Cannot read properties of undefined (reading 'shared')` on 0.5.6 `FH`) | [Factory](/okf/factory/factory.md) |
| `engine.api.factory.getProcessCount(state)` | State-first; returned **4000** on dev-tools autosave probe | [Engine API](/okf/internals/engine.md) |
| Public `entities.spawnAtWorld` | Arity **3** on `api` | [Worker entry API](/okf/internals/worker-api.md) |
| Engine `entities.spawn` | Arity **4** (state first) | [Worker entry API](/okf/internals/worker-api.md) |

## CDP and probe gaps (not API signature drift)

These affect **how** you read the API, not what the game ships.

| Issue | Workaround |
| --- | --- |
| Ambient `sandkit` **undefined** in MCP `evaluate_script` on 0.5.6 | `__debug.state`, webpack module **46781** (`FH`) — [Evaluate](/okf/live/evaluate.md) |
| `state.sandkit.engine` absent on probed saves | Same `FH` hook or domain extract notes |
| Worker `sandkit.api` not reachable on `:9222` | Renderer proxy + extract — [Worker attach](/okf/live/worker-attach.md) |
| `window.sandkit` vs ambient `sandkit` | Both can work in mod entry; evaluate scope differs — [Globals](/okf/internals/globals.md) |

## Types and generated docs lag

| Symptom | Action |
| --- | --- |
| Member on live object, missing from `/api/` page | Check [official HTML](https://sandustry.com/sandkit.html); file gap in [SandustryTypes](https://github.com/sandustry-modding/SandustryTypes) |
| Member on `/api/` page, absent on older game build | Pin mod target version; see [Version alignment](/okf/references/version-alignment.md) |
| `sandkit.engine.api` namespaces | Types under `src/sandkit/engine/`; many are engine-only — [Engine API](/okf/internals/engine.md) |

## Resolved in prior passes

- `api.grid` vs `api.world` alias behavior — documented in [World API](/okf/world/world-api.md).
- Worker official namespace list — [Worker entry API](/okf/internals/worker-api.md).
- Public `api.processing` registration surface — [Factory processing](/okf/factory/processing.md).
- Live-only table rows above — re-probed on CDP `:9222` with `FH` hook (2026-09-15).
- `TechStatus.Unknown` / `Hidden` — reserved enum values; vanilla assigns only 0–2 ([TechStatus](/okf/progression/tech-status.md#unknown-and-hidden-future-use)).

## Related

- [Namespace routing](/okf/api/namespace-routing.md)
- [How to read Sandkit](/okf/api/how-to-read-sandkit.md)
- [Version alignment](/okf/references/version-alignment.md)
