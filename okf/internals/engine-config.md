---
type: Reference
title: Engine config and extend
description: sandkit.engine.api.config and extend argument meanings from the shipping bundle.
tags:
  - sandustry
  - okf
  - internals
  - engine
  - config
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:00:00Z
sources:
  - id: extract
    resource: sandustry/source/dist/js/bundle.js
---

# Engine config and extend

Both live on `sandkit.engine.api` (internal).
Prefer public `sandkit.api` in mods unless you already hold state.

## `engine.api.config`

Not a plain namespace.
It is `Object.assign` of a reader function plus helpers:

| Member | Signature | Role |
| --- | --- | --- |
| `(state, key)` | arity **2** | Read merged mod JSON config for `key`. Delegates to internal resolver that merges defaults with per-mod overrides and legacy URL overrides. |
| `getLegacy()` | arity **0** | Returns the static legacy game config object (`r.A` / `__debug.config` — cell size, gravity, multithreading flags, etc.). |
| `set(state, value)` | arity **2** | Write config override into state (internal persistence path). |

Public mods use `sandkit.config("namespace", defaults)` at load time.
That registers defaults the `(state, key)` reader merges later.
Do not confuse `engine.api.config(state, key)` with the public `sandkit.config` function.

## `engine.api.extend`

| Arg | Type | Role |
| --- | --- | --- |
| `state` | game state | Required first arg (state-first API). |
| `namespace` | string | Target bag key on the internal API extension map (`Vt`). |
| `impl` | object or value | Implementation merged at `Vt[namespace]`. |

Implementation: `extend:(state, namespace, impl) => { Vt[namespace] = impl }`.

Used by the engine to register internal namespace fragments.
Mods should not call this unless mirroring engine boot patterns.

## Related concepts

- [Engine API](/okf/internals/engine.md)
- [`__debug`](/okf/internals/debug.md) — `__debug.config` is the legacy static object from `getLegacy()`.
