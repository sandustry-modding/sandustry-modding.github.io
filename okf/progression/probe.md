---
type: Playbook
title: Probe
description: Read-only live inspection of progression state via sandkit.api and store fields.
tags:
  - sandustry
  - okf
  - progression
  - probe
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
---

# Probe

Read-only inspection of progression state.
Return JSON-serializable data only.

## Safe

- `Object.keys` on `sandkit.api.tech`, `upgrades`, `discoveries`, `progression`.
- `sandkit.api.tech.getDefinitionById(id)` (read).
- `sandkit.api.tech.isLockedById(id)` (read).
- `sandkit.api.tech.isResearchedById(id)` (read).
- `sandkit.api.upgrades.getLevelById(itemId, upgradeId)` and `getAvailableLevelById`.
- `sandkit.api.factory.getLevel()` (read).
  Process counts/rates: [Structures and pipes](/okf/factory/structures-and-pipes.md).
- Read `sandkit.state.store`: `lockedTechs`, `player.tech`, `upgrades`, `discoveries`, `viability`, `conservatory`, `creatures`, `tutorial`, `progression`, `objectives`, `productionPoints`, `hints`, `factoryLevelCap`.
- Read `sandkit.state.shared.productionPoints[0]` (worker sync mirror).
- Read `sandkit.state.session.lexicon`, `session.ui.discoveryPopups`, `session.windows`.
- Read `sandkit.enums.Tech` and `sandkit.enums.TechStatus`.

## Unsafe (needs user ask)

- `sandkit.api.tech.setLockedById`, `registerDefinition`, `addDefinition`, `updateDefinition`, `registerNode`, `conservatory.appendUnlock`.
- `sandkit.api.upgrades.register`, `registerCategory`, `updateDefinition`, `setLevelById`.
- `sandkit.api.discoveries.addElementByType`, `addTerrainByType`.
- `sandkit.api.progression.complete`.
- `sandkit.engine.api.factory.addViabilityGold`, `unlockNextTier`, `recordProcess`, `ensureProcessAtLeast`, `flushDeferredLevelUps`.
- `sandkit.engine.api.tutorialBuild.*` when it could affect placement checks during active tutorial.

Do not click Research nodes, **MAX EVERYTHING**, buy tech, spend tickets, or call mutators during probes.

## Sample script

```js
() => {
  const s = sandkit;
  const st = s.state.store;
  return {
    version: st.version,
    techApi: Object.keys(s.api.tech),
    isResearchedShaker: s.api.tech.isResearchedById(s.enums.Tech.Shaker),
    locked: st.lockedTechs,
    researchedCount: Object.values(st.player.tech).filter(Boolean).length,
    viability: st.viability,
    factoryLevel: s.api.factory.getLevel(),
    upgradesGrabber: st.upgrades?.grabber,
    discoveries: {
      elements: st.discoveries?.elements?.length,
      terrains: st.discoveries?.terrains?.length,
    },
    tutorial: st.tutorial,
    objectives: st.objectives?.active,
    techEnumKeys: Object.keys(s.enums.Tech).length,
    lexicon: {
      compiled: s.state.session.lexicon?.compiled,
      entries: s.state.session.lexicon?.entries?.length,
    },
  };
};
```

## Related concepts

- [Store cluster](/okf/progression/store.md) — key list for store reads
- [Gaps](/okf/progression/gaps.md) — what is not yet documented
