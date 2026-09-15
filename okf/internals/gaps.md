---
type: Reference
title: Gaps
description: Open internals questions not yet fully documented.
tags:
  - sandustry
  - okf
  - internals
  - gaps
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:40:00Z
---

# Gaps

Still open:

- Live attach to simulation / manager / utility workers (extract surface: [Workers runtime](/okf/internals/workers-runtime.md), [Worker entry API](/okf/internals/worker-api.md), [Worker attach](/okf/live/worker-attach.md)) — CDP `:9222` still exposes **one** renderer page on **0.5.6** (re-checked this pass)
- `platforms/msstore.js` and `platforms/gog.js` **source bodies** — not shipped in Steam `app.asar`; platform **interface** and detection documented in [Store platforms](/okf/internals/platforms.md); per-store cloud / achievement IPC shapes stay unknown until a non-Steam build is extracted
- Webpack module ids after the next game build (re-grep — [Webpack module ids](/okf/internals/webpack-modules.md))

Resolved in this pass:

- `shared.sim` / `store.world` / related shared raster **headers** (no full dumps) — [Shared buffer headers](/okf/internals/shared-buffers.md); live **0.5.6** probe on CDP `:9222`
- Live worker-thread **sandkit parity** (main vs worker namespaces, extract facade) — [Worker entry API](/okf/internals/worker-api.md)
- MS Store / GOG **availability** in Steam channel — confirmed missing from live Steam `app.asar` file list; detection and main-process guards in [Store platforms](/okf/internals/platforms.md)

Resolved earlier (2026-09-15):

- MS Store / GOG platform detection and Steam-only extract limits — [Store platforms](/okf/internals/platforms.md)
- `Noise` constructor API (`seed`, `simplex2`/`3`, `perlin2`/`3`) — [Procgen Noise](/okf/internals/noise.md)
- `webpackChunksand_v1` probe ids **46781** (`FH`) and **77135** (tech grid) on 0.5.6 — [Webpack module ids](/okf/internals/webpack-modules.md)
- `engine.api.config` / `extend` — [Engine config and extend](/okf/internals/engine-config.md)
- `__debug.admin.run` command strings — [`__debug`](/okf/internals/debug.md)
- Custom maps IPC payloads — [Custom maps IPC](/okf/internals/custom-maps-ipc.md)
- Fixed sim worker count (dynamic, not 14) — [Renderer boot](/okf/internals/boot.md), [Workers runtime](/okf/internals/workers-runtime.md)

Deprecated aliases on the public API: see [API gaps](/okf/api/gaps.md).
`api.factory.getProcessCount()` without an id throws — see [Factory: structures and pipes](/okf/factory/structures-and-pipes.md).

This Steam session: `typeof window.sandkit === "object"` and ambient `sandkit` both work in mod entry.
CDP evaluate on 0.5.6 often lacks ambient `sandkit` — use `__debug.state` or webpack `FH`.
Still verify after reload.
