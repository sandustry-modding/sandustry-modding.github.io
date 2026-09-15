---
type: Reference
title: Engine signals runtime
description: Persisted and session signal state, engine-only methods, and vanilla sender and receiver registration counts.
tags:
  - sandustry
  - okf
  - energy
  - signals
  - engine
  - runtime
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: energy-guide
    resource: /guides/energy.md
---

# Engine signals runtime

Public surface: [sandkit.api.signals](/okf/energy/api-signals.md) (`targets`, `interactables`, `registerSenderType`, `setOutputAtCell`).
Full runtime is engine-internal (`Jd.Q` in bundle).
Persisted slice: `store.mods.signals`.

## Persisted (store.mods.signals)

| Field | Live | Role |
| --- | --- | --- |
| `links` | object | Wire graph (same ref as runtime). |
| `hideWires` | boolean | Live `false` on this save. |

## Session (state.session.mods.signals)

Built at init.
Live counts on this save (0.5.6): **17** sender types, **12** receiver types, **5** interactable handlers, **6** link buckets.

**Probe note:** `senderTypes` and `receiverTypes` are **`Set`** instances.
Use `.size`, not `Object.keys()` (returns `[]` on Sets).

| Field | Role |
| --- | --- |
| `links` | Map keyed `"senderX,senderY"` to `{ x, y, on }[]` receiver cells. |
| `pendingLink` | In-progress link tool `{ x, y }` or null. |
| `senderTypes` | `Set` of structure type ids that can emit. |
| `senderOutputGetters` | `Map<type, (state, structure) => boolean>`. |
| `receiverTypes` | `Set` of types with `targets.register` handlers. |
| `receiverApply` | `Map<type, apply callback>`. |
| `incomingByReceiver` | Derived index `"rx,ry"` to link entries. |
| `dirtyReceivers` | Receivers needing recompute (loop cap 128). |
| `lastAppliedCombined` / `lastAppliedInputCount` / `lastAppliedOnCount` | Dedup caches. |
| `interactableHandlers` | Structure interact overrides. |
| `onTargetRegistered` | Internal hook when a receiver type registers. |

## Engine-only methods (not on sandkit.api)

`init`, `registerReceiverType`, `set`, `setAll`, `getCombinedAt`, `getIncomingCountAt`, `getOnCountAt`, `link`, `unlink`, `unlinkAllAt`, `hasLink`, `getAnchorPoint`, `drawWireSegment`, plus link-mode `interactAtCell`.

`registerSenderType`, `registerInteractable`, and `set` output are exposed on `sandkit.api.signals` as `registerSenderType`, `interactables.register`, and `setOutputAtCell`.

Event: `signals:userChanged` (undo history).
Combinational loop toast when `dirtyReceivers` does not drain.

## Vanilla sender, receiver, and interactable ids

Full id lists with English display names: [Signal structure catalog](/okf/energy/structure-catalog.md).

Live counts (0.5.6): **17** senders, **12** receivers, **5** interactables.
Logic gates appear in both sender and receiver sets.
Sensors, `signalSwitch`, and `signalButton` are send-only; `signalLamp` is send-only.

Sprite and gate logic uses `getCombinedAt`.

## Related

- [Clipboard signal links](/okf/energy/clipboard.md) — blueprint and clipboard link shapes.
- [Probe](/okf/energy/probe.md) — safe session signal counts.
