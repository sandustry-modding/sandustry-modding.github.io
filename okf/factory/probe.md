---
type: Playbook
title: Factory probe
description: Safe sandustry MCP evaluate_script reads for factory state on vanilla 0.5.5.
tags:
  - sandustry
  - okf
  - factory
  - probe
  - mcp
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: vanilla-055-probe
    resource: sandustry 0.5.5 live session
---

# Factory probe

Read-only inspection via `sandustry` MCP `evaluate_script`.
Return JSON-serializable data only.

`sandkit` is ambient in the evaluate scope.
Check `typeof window.sandkit`.
`__debug.state === sandkit.state`.

## Safe reads

- `Object.keys` on `sandkit.api.structures`, `.structureBehaviors`, `.authorization`, `.building`, `.collector`, `.factory`, `.pipes`, `.blueprints`.
- `structures.getAtCell`, `getDefinitionByType`, `getAvailableTypes`, `isLockedByType`, `isTypeAtCell`, `hasBuiltAtCell`, `forEachOfType` (read callbacks only).
- `structures.processing.isEnabledAtCell`.
- `factory.getLevel`, `getProcessCount(processId)`, `getProcessRate(processId)` — `processId` required for count/rate.
- `pipes.isAtCell`, `isEnabledAtCell`, `getConnectedVentsAtCell`.
- `blueprints.serializeStructures`, `localizeStructures` on existing `store.structures` slices.
- `authorization.canBuildAtCell`, `canGrabAtCell`, `getZoneIdAtCell`, `getPlayerZoneId`.
- Store counts: `store.structures`, `store.pipes`, `store.pumpsCache`, `store.queue`, `store.viability`, `store.stratacores`, `store.factoryLevelCap`.
- `session.cache.structures`, `session.cache.pipes`, `session.factoryProcessRates`.
- `state.sandkit.mods.structures` keys, `state.sandkit.registeredLauncherTypes`.
- `shared.authorization` — report `{ width, height }` and sparse zone samples only.
- `sandkit.enums.StructureType`, `BuildingClearance`, `AuthorizationType`.

## Do not call without user ask

- `structures.buildAtCell`, `removeAtCell`, `removeBetweenCells`, `removeAtCells` (and `*WhenIdle` aliases).
- `structures.processing.setEnabledAtCell`, `pipes.setEnabledAtCell`.
- `structureBehaviors.register*`, `structures.recipes.register`, `structures.processing.register`.
- `building.selectStructure`, `cancelPlacement`.
- `engine.api.factory.addViabilityGold`, `unlockNextTier`, `recordProcess`, `ensureProcessAtLeast`.
- `engine.api.queue.enqueue*`, `process`.
- `engine.api.conveyors.registerType`, `engine.api.launchers.registerType`.
- `__debug.ensureQueuedStructuresAreBuilt`.

## Quick dump

```js
() => {
  const s = sandkit.state;
  const st = s.store;
  return {
    version: __debug?.config?.version,
    structures: st.structures.length,
    queued: st.structures.filter((x) => x.queued).length,
    pipes: st.pipes.length,
    viability: st.viability,
    factoryLevel: sandkit.api.factory.getLevel(),
    processCounts: {
      shakeWetSand: sandkit.api.factory.getProcessCount("shakeWetSand"),
      pressBurntResidue: sandkit.api.factory.getProcessCount("pressBurntResidue"),
      growFlowers: sandkit.api.factory.getProcessCount("growFlowers"),
      condenseFlorin: sandkit.api.factory.getProcessCount("condenseFlorin"),
    },
  };
};
```

Open [Gaps](/okf/factory/gaps.md) when probe data does not match a concept file.
