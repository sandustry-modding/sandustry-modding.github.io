---
type: Reference
title: Signal structure catalog
description: Vanilla sender, receiver, and interactable structure ids with English display names from bundle 0.5.6.
tags:
  - sandustry
  - okf
  - energy
  - signals
  - structures
status: stable
generated:
  by: agent
  at: 2026-09-15T20:00:00Z
sources:
  - id: bundle-056
    resource: sandustry/source/dist/js/bundle.js
  - id: engine-signals
    resource: /okf/energy/engine-signals.md
---

# Signal structure catalog

Vanilla signal wiring ids and English names mined from `sandustry/source/dist/js/bundle.js` (0.5.6 extract).
Runtime registration: [Engine signals runtime](/okf/energy/engine-signals.md).

## Sender types (17)

Structures registered with `signals.registerSenderType`.
Logic gates appear in both sender and receiver sets.

| Structure id | English name | Notes |
| --- | --- | --- |
| `signalSensor` | Signal Sensor | ON when 4×4 cell above is full |
| `signalPulseSensor` | Pulse Sensor | Emits a pulse on change |
| `signalPresenceSensor` | Presence Sensor | ON when player is nearby |
| `signalGate` | Door | Also a receiver and interactable |
| `signalSwitch` | Signal Switch | Send-only toggle |
| `signalButton` | Signal Button | Send-only momentary |
| `signalLamp` | Signal Lamp | Send-only indicator |
| `signalBuffer` | Buffer | Send and receive |
| `signalRepeater` | Repeater | Send and receive |
| `signalNor` | NOR Gate | Send and receive |
| `signalAnd` | AND Gate | Send and receive |
| `signalOr` | OR Gate | Send and receive |
| `signalNand` | NAND Gate | Send and receive |
| `signalXor` | XOR Gate | Send and receive |
| `signalXnor` | XNOR Gate | Send and receive |
| `signalNot` | NOT Gate | Send and receive |
| `signalToggle` | Toggle (T-FlipFlop) | Send, receive, and interactable |

## Receiver types (12)

Structures registered with engine `registerReceiverType` (wrapped by `signals.targets.register`).

| Structure id | English name |
| --- | --- |
| `signalGate` | Door |
| `signalLamp` | Signal Lamp |
| `signalBuffer` | Buffer |
| `signalRepeater` | Repeater |
| `signalNor` | NOR Gate |
| `signalAnd` | AND Gate |
| `signalOr` | OR Gate |
| `signalNand` | NAND Gate |
| `signalXor` | XOR Gate |
| `signalXnor` | XNOR Gate |
| `signalNot` | NOT Gate |
| `signalToggle` | Toggle (T-FlipFlop) |

Send-only types: `signalSensor`, `signalPulseSensor`, `signalPresenceSensor`, `signalSwitch`, `signalButton`.

## Interactable handlers (5)

Structures registered with `signals.interactables.register`.
Player use overrides default building behavior.

| Structure id | English name | Role |
| --- | --- | --- |
| `swarmConsole` | Aura Extractor | Swarm console UI |
| `signalGate` | Door | Open/close and default-open mode |
| `signalSwitch` | Signal Switch | Flip on/off |
| `signalButton` | Signal Button | Momentary pulse |
| `signalToggle` | Toggle (T-FlipFlop) | Flip stored state |

## Related

- [API: signals](/okf/energy/api-signals.md) — public registration surface.
- [Clipboard signal links](/okf/energy/clipboard.md) — persisted wire graph.
