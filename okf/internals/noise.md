---
type: Reference
title: Procgen Noise
description: window.Noise simplex/perlin helper used during world generation — not sandkit.api.
tags:
  - sandustry
  - okf
  - internals
  - procgen
  - noise
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:30:00Z
sources:
  - id: bundle
    resource: sandustry/source/dist/js/bundle.js
  - id: procgen-vendor
    resource: sandustry/source/dist/js/procgen/noisejs
---

# Procgen Noise

`window.Noise` is a **renderer global** for procedural generation.
It is **not** part of `sandkit.api`.
Do not confuse it with Pixi `NoiseFilter` (shader uniform noise).

Listed in [Globals](/okf/internals/globals.md).
Vendored tables also live under `dist/js/procgen/noisejs` in the extract.

## Constructor

```javascript
const n = new Noise(seed);
```

| Argument | Type | Behavior |
| --- | --- | --- |
| `seed` | number (optional) | Passed to `seed()`; defaults to `0` when omitted |

Boot code also uses `new Noise(Math.random())` before terrain passes.

## Methods (0.5.6 bundle)

| Method | Args | Returns |
| --- | --- | --- |
| `seed(e)` | number | Rebuilds `perm` / `gradP` tables |
| `simplex2(x, y)` | two numbers | 2D simplex noise sample |
| `simplex3(x, y, z)` | three numbers | 3D simplex noise sample |
| `perlin2(x, y)` | two numbers | 2D Perlin noise sample |
| `perlin3(x, y, z)` | three numbers | 3D Perlin noise sample |

`seed` coerces fractional seeds: values in `(0, 1)` are multiplied by `65536` before flooring.

## Usage in vanilla

Terrain surface generation constructs `Noise`, calls `seed` with the world seed, then samples `simplex2` in octave stacks (for example weights `0.5`, `0.35`, `0.15` on scaled coordinates).
Cave and decor passes create fresh `Noise` instances with derived seeds.

Mods rarely need this class — prefer `sandkit.api.random` and map APIs for gameplay logic.

## Probe (read-only)

```javascript
() => {
  const N = globalThis.Noise;
  if (typeof N !== "function") return { ok: false };
  const a = new N(42);
  const b = new N(42);
  return {
    ok: true,
    methods: ["seed", "simplex2", "simplex3", "perlin2", "perlin3"].filter(
      (m) => typeof a[m] === "function"
    ),
    simplex2_00: a.simplex2(0, 0),
    repeatable: a.simplex2(1.5, 2.5) === b.simplex2(1.5, 2.5),
  };
};
```

## Related

- [Globals](/okf/internals/globals.md)
- [Maps API](/okf/world/maps.md)
- [Background layers](/okf/world/background-layers.md)
