# sandkit.api.hooks

`sandkit.api.hooks` — intercept and modify internal game hook points.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.hooks.HookContext :id=hookcontext

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L395" target="_blank" rel="noopener">hooks.d.ts:395</a></p>

| Property | Type | Description |
| --- | --- | --- |
| cancelled | <code>boolean</code> | True after [cancel](?id=cancel) was called on this context. |

<div class="smt-member-anchors">

##### cancelled <!-- {docsify-ignore} -->

</div>

| Method | Signature | Description |
| --- | --- | --- |
| cancel() | <code>(): void</code> | When called, the intercepted action is skipped. |

<div class="smt-member-anchors">

##### cancel() <!-- {docsify-ignore} -->

</div>

Context passed to intercept hook callbacks.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.HookOptions :id=hookoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L403" target="_blank" rel="noopener">hooks.d.ts:403</a></p>

| Property | Type | Description |
| --- | --- | --- |
| priority? | <code>number</code> | Run this hook before others with lower priority. |

<div class="smt-member-anchors">

##### priority? <!-- {docsify-ignore} -->

</div>

Options shared by intercept and modify hooks.

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.hooks.InterceptHookMap :id=intercepthookmap

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L495" target="_blank" rel="noopener">hooks.d.ts:495</a></p>

<h4 class="smt-hook-heading" id="item-use"><code>item:use</code></h4>

```ts
{
  itemId: string;
  useId: string;
  kind: "instant" | "sustained" | "chargeThenFire";
  baseline: Readonly<Record<string, unknown>>;
  prepared: Record<string, unknown>;
}
```

<h4 class="smt-hook-heading" id="teleport-effect-create"><code>teleport:effect:create</code></h4>

```ts
Record<string, unknown>
```

<h4 class="smt-hook-heading" id="teleport-effect"><code>teleport:effect</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
Record<string, unknown>
```

<h4 class="smt-hook-heading" id="action-start"><code>action:start</code></h4>

```ts
{
  action: object & Record<string, unknown>;
  id: string;
}
```

<h4 class="smt-hook-heading" id="action-intercept"><code>action:intercept</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
{
  action: object & Record<string, unknown>;
  id: string;
}
```

<h4 class="smt-hook-heading" id="input-keyDown"><code>input:keyDown</code></h4>

```ts
{
  key: string;
  code: string;
  event: Event;
}
```

<h4 class="smt-hook-heading" id="input-keydown"><code>input:keydown</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
{
  key: string;
  code: string;
  event: Event;
}
```

<h4 class="smt-hook-heading" id="input-keyUp"><code>input:keyUp</code></h4>

```ts
{
  key: string;
  code: string;
  event: Event;
}
```

<h4 class="smt-hook-heading" id="input-keyup"><code>input:keyup</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
{
  key: string;
  code: string;
  event: Event;
}
```

<h4 class="smt-hook-heading" id="placePoints-suppress"><code>placePoints:suppress</code></h4>

```ts
{ type: string }
```

<h4 class="smt-hook-heading" id="placePoints-isSuppressed"><code>placePoints:isSuppressed</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
{ type: string }
```

<h4 class="smt-hook-heading" id="placePoints-directionalArrows-suppress"><code>placePoints:directionalArrows:suppress</code></h4>

```ts
{ type: string }
```

<h4 class="smt-hook-heading" id="placePoints-directionalArrows-isSuppressed"><code>placePoints:directionalArrows:isSuppressed</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
{ type: string }
```

<h4 class="smt-hook-heading" id="entity-update"><code>entity:update</code></h4>

```ts
{
  entityTypeId: string;
  entity: Record<string, unknown>;
  deltaTimeSeconds: number;
  phase: "normal" | "capturing" | "launching";
  isVisible: boolean;
  playerWorldX: number;
  playerWorldY: number;
  worldMinX: number;
  worldMinY: number;
  worldMaxX: number;
  worldMaxY: number;
  cellSize: number;
  timeSeconds: number;
}
```

<h4 class="smt-hook-heading" id="building-place"><code>building:place</code></h4>

```ts
{
  structureId: string;
  x: number;
  y: number;
  data: Record<string, unknown>;
}
```

<h4 class="smt-hook-heading" id="building-clearShape"><code>building:clearShape</code></h4>

```ts
{ structure: Record<string, unknown> }
```

<h4 class="smt-hook-heading" id="input-scroll"><code>input:scroll</code></h4>

```ts
{ deltaY: number }
```

<h4 class="smt-hook-heading" id="input-boostDown"><code>input:boostDown</code></h4>

```ts
Record<string, unknown>
```

<h4 class="smt-hook-heading" id="input-boost-down"><code>input:boost-down</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
Record<string, unknown>
```

<h4 class="smt-hook-heading" id="input-descendDown"><code>input:descendDown</code></h4>

```ts
Record<string, unknown>
```

<h4 class="smt-hook-heading" id="input-descend-down"><code>input:descend-down</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
Record<string, unknown>
```

<h4 class="smt-hook-heading" id="input-escape"><code>input:escape</code></h4>

```ts
Record<string, unknown>
```

<h4 class="smt-hook-heading" id="interactable-suppressHover"><code>interactable:suppressHover</code></h4>

```ts
{
  type: string;
  structure: Record<string, unknown>;
}
```

<h4 class="smt-hook-heading" id="fire-element-ignite"><code>fire:element:ignite</code></h4>

```ts
{
  x: number;
  y: number;
  elementType: number;
}
```

<h4 class="smt-hook-heading" id="projectile-fire-overStructure"><code>projectile:fire:overStructure</code></h4>

```ts
{
  projectile: Record<string, unknown>;
  x: number;
  y: number;
}
```

<h4 class="smt-hook-heading" id="projectile-hit"><code>projectile:hit</code></h4>

```ts
{
  projectile: Record<string, unknown>;
  travelResult: Record<string, unknown>;
}
```

<h4 class="smt-hook-heading" id="player-position-commit"><code>player:position:commit</code></h4>

```ts
{
  previousWorldX: number;
  previousWorldY: number;
  proposedWorldX: number;
  proposedWorldY: number;
  velocityX: number;
  velocityY: number;
}
```

<h4 class="smt-hook-heading" id="progression-purchase"><code>progression:purchase</code></h4>

```ts
{
  domain: "tech" | "upgrade";
  id: string;
  itemId: string;
  costs: Record<string, unknown>;
}
```

Intercept hook argument shapes keyed by hook id.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ModifierHookMap :id=modifierhookmap

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L581" target="_blank" rel="noopener">hooks.d.ts:581</a></p>

<h4 class="smt-hook-heading" id="excavation-prepare"><code>excavation:prepare</code></h4>

```ts
{
  sourceId: string;
  sourceKind: "structure" | "tool" | "projectile" | "drone";
  originCellX: number;
  originCellY: number;
  consumedVoid: boolean;
  profileId: string;
  patternDiameterCells: number;
  drillTierDamage: number;
}
```

<h4 class="smt-hook-heading" id="locator-scan-prepare"><code>locator:scan:prepare</code></h4>

```ts
{
  originWorldX: number;
  originWorldY: number;
  hasTarget: boolean;
  targetCellX: number;
  targetCellY: number;
  outerTint: [number, number, number];
  innerTint: [number, number, number];
  noTargetToast: string;
  noTargetToastKey: string;
  triangulationLensOverride: boolean | null;
}
```

<h4 class="smt-hook-heading" id="vacuum-prepare"><code>vacuum:prepare</code></h4>

```ts
{
  nozzleCellX: number;
  nozzleCellY: number;
  targetCellX: number;
  targetCellY: number;
  pattern: number[][];
}
```

<h4 class="smt-hook-heading" id="vacuum-element-prepare"><code>vacuum:element:prepare</code></h4>

```ts
{
  elementType: number;
  matterType: number;
  isTransportable: boolean;
  collectable: boolean;
  visibleInPicker: boolean;
}
```

<h4 class="smt-hook-heading" id="player-movement-prepare"><code>player:movement:prepare</code></h4>

```ts
Record<string, unknown>
```

<h4 class="smt-hook-heading" id="player-movement"><code>player:movement</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
Record<string, unknown>
```

<h4 class="smt-hook-heading" id="building-placementLimit-prepare"><code>building:placementLimit:prepare</code></h4>

```ts
{ maxCount: number | null }
```

<h4 class="smt-hook-heading" id="building-placementLimit"><code>building:placementLimit</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
{ maxCount: number | null }
```

<h4 class="smt-hook-heading" id="building-placement-limit"><code>building:placement-limit</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
{ maxCount: number | null }
```

<h4 class="smt-hook-heading" id="fluxEmanator-processing-prepare"><code>fluxEmanator:processing:prepare</code></h4>

```ts
{ speedMultiplier: number }
```

<h4 class="smt-hook-heading" id="fluxEmanator-processing"><code>fluxEmanator:processing</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
{ speedMultiplier: number }
```

<h4 class="smt-hook-heading" id="flux-emanator-processing"><code>flux-emanator:processing</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
{ speedMultiplier: number }
```

<h4 class="smt-hook-heading" id="render-pipes-prepare"><code>render:pipes:prepare</code></h4>

```ts
{ layer: string }
```

<h4 class="smt-hook-heading" id="render-pipes"><code>render:pipes</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
{ layer: string }
```

<h4 class="smt-hook-heading" id="structures-moved-prepare"><code>structures:moved:prepare</code></h4>

```ts
{
  moved: unknown[];
  failedToPlace: unknown[];
}
```

<h4 class="smt-hook-heading" id="structures-removed-prepare"><code>structures:removed:prepare</code></h4>

```ts
{
  removed: unknown[];
  structures: unknown[];
  byMove: boolean;
}
```

<h4 class="smt-hook-heading" id="weapon-reload-prepare"><code>weapon:reload:prepare</code></h4>

```ts
{
  weaponId: string;
  reloadMs: number;
  maxAmmo: number;
}
```

<h4 class="smt-hook-heading" id="projectile-travel-prepare"><code>projectile:travel:prepare</code></h4>

```ts
{
  projectileType: string;
  firstCollisionStep: number;
  maxCollisionSteps: number;
  collidesWithTerrain: boolean;
  collidesWithStructures: boolean;
}
```

<h4 class="smt-hook-heading" id="projectile-impact-prepare"><code>projectile:impact:prepare</code></h4>

```ts
{
  projectileType: string;
  impactKind: string;
  profileId: string;
  power: number;
  centerPower: number;
  radiusCells: number;
  radius: number;
}
```

<h4 class="smt-hook-heading" id="player-collision-prepare"><code>player:collision:prepare</code></h4>

```ts
{
  phaseThroughTerrain: boolean;
  phaseThroughStructures: boolean;
  maxStepCells: number;
}
```

<h4 class="smt-hook-heading" id="trigger-schedule-prepare"><code>trigger:schedule:prepare</code></h4>

```ts
{
  triggerId: string;
  intervalMs: number;
  sequentialRuns: number;
}
```

<h4 class="smt-hook-heading" id="progression-cost-prepare"><code>progression:cost:prepare</code></h4>

```ts
{
  domain: "tech" | "upgrade";
  id: string;
  itemId: string;
  currencyId: string;
  amount: number;
}
```

<h4 class="smt-hook-heading" id="resource-collection-prepare"><code>resource:collection:prepare</code></h4>

```ts
{
  resourceId: string;
  sourceKind: string;
  cellX: number;
  cellY: number;
  amount: number;
  feedback: "silent" | "default" | "reduced";
}
```

<h4 class="smt-hook-heading" id="resource-delivery-prepare"><code>resource:delivery:prepare</code></h4>

```ts
{
  resourceId: string;
  sourceKind: string;
  sourceId: string;
  sourceCellX: number;
  sourceCellY: number;
  targetCellX: number;
  targetCellY: number;
  mode: "world" | "collection";
  amount: number;
  feedback: "silent" | "default";
}
```

<h4 class="smt-hook-heading" id="resource-balance-prepare"><code>resource:balance:prepare</code></h4>

```ts
{
  resourceId: string;
  balance: number;
}
```

<h4 class="smt-hook-heading" id="gold-removal-prepare"><code>gold:removal:prepare</code></h4>

```ts
{
  requestedAmount: number;
  shortfall: number;
}
```

<h4 class="smt-hook-heading" id="gold-removal-settle"><code>gold:removal:settle</code></h4>

```ts
{
  requestedAmount: number;
  physicalRemoved: number;
  shortfall: number;
}
```

Modify hook argument shapes keyed by hook id.

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.hooks.InterceptHookOptions :id=intercepthookoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L410" target="_blank" rel="noopener">hooks.d.ts:410</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.InterceptHookOptions&lt;K *extends* InterceptHookId&gt; = HookOptions &amp; K *extends* &quot;item:use&quot; ? object : K *extends* &quot;entity:update&quot; ? object : K *extends* &quot;building:place&quot; ? object : K *extends* &quot;projectile:fire:overStructure&quot; | &quot;projectile:hit&quot; ? object : Record&lt;string, unknown&gt;">

```ts
sandkit.api.hooks.InterceptHookOptions<K *extends* InterceptHookId> = HookOptions & K *extends* "item:use" ? object : K *extends* "entity:update" ? object : K *extends* "building:place" ? object : K *extends* "projectile:fire:overStructure" | "projectile:hit" ? object : Record<string, unknown>
```

</div>

Options for [intercept](?id=intercept).

`K` *extends* [`InterceptHookId`](?id=intercepthookid)

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ModifyHookOptions :id=modifyhookoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L422" target="_blank" rel="noopener">hooks.d.ts:422</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.ModifyHookOptions = HookOptions &amp; { weaponIds?: string[]; priority?: number; } | { projectileTypes?: string[]; priority?: number; } | { triggerIds?: string[]; priority?: number; } | { resourceIds?: string[]; priority?: number; } | Record&lt;string, unknown&gt;">

```ts
ModifyHookOptions = HookOptions & { weaponIds?: string[]; priority?: number; } | { projectileTypes?: string[]; priority?: number; } | { triggerIds?: string[]; priority?: number; } | { resourceIds?: string[]; priority?: number; } | Record<string, unknown>
```

</div>

Options for [modify](?id=modify).

</div>

<div class="smt-member-card">

### sandkit.api.hooks.InterceptHookId :id=intercepthookid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L432" target="_blank" rel="noopener">hooks.d.ts:432</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.InterceptHookId = LooseString&lt;&quot;item:use&quot; | &quot;teleport:effect:create&quot; | &quot;teleport:effect&quot; | &quot;action:start&quot; | &quot;action:intercept&quot; | &quot;input:keyDown&quot; | &quot;input:keydown&quot; | &quot;input:keyUp&quot; | &quot;input:keyup&quot; | &quot;placePoints:suppress&quot; | &quot;placePoints:isSuppressed&quot; | &quot;placePoints:directionalArrows:suppress&quot; | &quot;placePoints:directionalArrows:isSuppressed&quot; | &quot;entity:update&quot; | &quot;building:place&quot; | &quot;building:clearShape&quot; | &quot;input:scroll&quot; | &quot;input:boostDown&quot; | &quot;input:boost-down&quot; | &quot;input:descendDown&quot; | &quot;input:descend-down&quot; | &quot;input:escape&quot; | &quot;interactable:suppressHover&quot; | &quot;fire:element:ignite&quot; | &quot;projectile:fire:overStructure&quot; | &quot;projectile:hit&quot; | &quot;player:position:commit&quot; | &quot;progression:purchase&quot;&gt;">

```ts
InterceptHookId = LooseString<"item:use" | "teleport:effect:create" | "teleport:effect" | "action:start" | "action:intercept" | "input:keyDown" | "input:keydown" | "input:keyUp" | "input:keyup" | "placePoints:suppress" | "placePoints:isSuppressed" | "placePoints:directionalArrows:suppress" | "placePoints:directionalArrows:isSuppressed" | "entity:update" | "building:place" | "building:clearShape" | "input:scroll" | "input:boostDown" | "input:boost-down" | "input:descendDown" | "input:descend-down" | "input:escape" | "interactable:suppressHover" | "fire:element:ignite" | "projectile:fire:overStructure" | "projectile:hit" | "player:position:commit" | "progression:purchase">
```

</div>

Known main-thread intercept hook ids plus custom strings.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ModifyHookId :id=modifyhookid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L464" target="_blank" rel="noopener">hooks.d.ts:464</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.ModifyHookId = LooseString&lt;&quot;excavation:prepare&quot; | &quot;locator:scan:prepare&quot; | &quot;vacuum:prepare&quot; | &quot;vacuum:element:prepare&quot; | &quot;player:movement:prepare&quot; | &quot;player:movement&quot; | &quot;building:placementLimit:prepare&quot; | &quot;building:placementLimit&quot; | &quot;building:placement-limit&quot; | &quot;fluxEmanator:processing:prepare&quot; | &quot;fluxEmanator:processing&quot; | &quot;flux-emanator:processing&quot; | &quot;render:pipes:prepare&quot; | &quot;render:pipes&quot; | &quot;structures:moved:prepare&quot; | &quot;structures:removed:prepare&quot; | &quot;weapon:reload:prepare&quot; | &quot;projectile:travel:prepare&quot; | &quot;projectile:impact:prepare&quot; | &quot;player:collision:prepare&quot; | &quot;trigger:schedule:prepare&quot; | &quot;progression:cost:prepare&quot; | &quot;resource:collection:prepare&quot; | &quot;resource:delivery:prepare&quot; | &quot;resource:balance:prepare&quot; | &quot;gold:removal:prepare&quot; | &quot;gold:removal:settle&quot;&gt;">

```ts
ModifyHookId = LooseString<"excavation:prepare" | "locator:scan:prepare" | "vacuum:prepare" | "vacuum:element:prepare" | "player:movement:prepare" | "player:movement" | "building:placementLimit:prepare" | "building:placementLimit" | "building:placement-limit" | "fluxEmanator:processing:prepare" | "fluxEmanator:processing" | "flux-emanator:processing" | "render:pipes:prepare" | "render:pipes" | "structures:moved:prepare" | "structures:removed:prepare" | "weapon:reload:prepare" | "projectile:travel:prepare" | "projectile:impact:prepare" | "player:collision:prepare" | "trigger:schedule:prepare" | "progression:cost:prepare" | "resource:collection:prepare" | "resource:delivery:prepare" | "resource:balance:prepare" | "gold:removal:prepare" | "gold:removal:settle">
```

</div>

Known main-thread modify hook ids plus custom strings.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.InterceptHookArgs :id=intercepthookargs

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L718" target="_blank" rel="noopener">hooks.d.ts:718</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.InterceptHookArgs&lt;K *extends* InterceptHookId&gt; = K *extends* keyof InterceptHookMap ? InterceptHookMap[K] : unknown">

```ts
sandkit.api.hooks.InterceptHookArgs<K *extends* InterceptHookId> = K *extends* keyof InterceptHookMap ? InterceptHookMap[K] : unknown
```

</div>

Intercept hook args for a given hook id.

`K` *extends* [`InterceptHookId`](?id=intercepthookid)

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ModifyHookArgs :id=modifyhookargs

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L723" target="_blank" rel="noopener">hooks.d.ts:723</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.ModifyHookArgs&lt;K *extends* ModifyHookId&gt; = K *extends* keyof ModifierHookMap ? ModifierHookMap[K] : unknown">

```ts
sandkit.api.hooks.ModifyHookArgs<K *extends* ModifyHookId> = K *extends* keyof ModifierHookMap ? ModifierHookMap[K] : unknown
```

</div>

Modify hook args for a given hook id.

`K` *extends* [`ModifyHookId`](?id=modifyhookid)

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.hooks.intercept :id=intercept

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L177" target="_blank" rel="noopener">hooks.d.ts:177</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.intercept&lt;K *extends* InterceptHookId&gt;(hookId: K, callback: (args: InterceptHookArgs&lt;K&gt;, context: HookContext) =&gt; void, options?: InterceptHookOptions&lt;K&gt;): () =&gt; void">

```ts
sandkit.api.hooks.intercept<K *extends* InterceptHookId>(hookId: K, callback: (args: InterceptHookArgs<K>, context: HookContext) => void, options?: InterceptHookOptions<K>): () => void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| hookId | `K` | Registered hook identifier. |
| callback | <code>(`args`: [`InterceptHookArgs`](?id=intercepthookargs)&lt;`K`&gt;, `context`: [`HookContext`](?id=hookcontext)) =&gt; `void`</code> | Called with hook arguments and context; may cancel the hook. |
| options? | <code>[`InterceptHookOptions`](?id=intercepthookoptions)&lt;`K`&gt;</code> | Optional priority and filter options. |

<div class="smt-member-anchors">

##### hookId <!-- {docsify-ignore} -->

##### callback <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Registers an intercept hook. Returns an unsubscribe function.

`K` *extends* [`InterceptHookId`](?id=intercepthookid)

() => `void`

#### Examples

**item:use**

```ts
const unsubscribe = api.hooks.intercept(
  "item:use",
  (args, context) => {
    args.prepared.energyCost = Number(args.baseline.energyCost) * 2;

    if (args.prepared.energyCost > 1000) {
      context.cancel();
    }
  },
  { itemIds: ["laser"], priority: 0 },
);
```

**teleport:effect:create**

```ts
api.hooks.intercept("teleport:effect:create", (args, context) => {
  context.cancel();
});
```

**action:start**

```ts
api.hooks.intercept("action:start", (args, context) => {
  if (args.action?.id === "example") context.cancel();
});
```

**input:keyDown**

```ts
api.hooks.intercept("input:keyDown", (args, context) => {
  if (args.code === "KeyK") context.cancel();
});
```

**input:keyUp**

```ts
api.hooks.intercept("input:keyUp", (args, context) => {
  if (args.code === "KeyK") context.cancel();
});
```

**placePoints:suppress**

```ts
api.hooks.intercept("placePoints:suppress", (args, context) => {
  if (args.type === "exampleStructure") context.cancel();
});
```

**placePoints:directionalArrows:suppress**

```ts
api.hooks.intercept(
  "placePoints:directionalArrows:suppress",
  (args, context) => {
    if (args.type === "exampleStructure") context.cancel();
  },
);
```

**entity:update**

```ts
const unsubscribe = api.hooks.intercept(
  "entity:update",
  (args) => {
    if (args.phase !== "normal") return;
    args.entity.targetX = args.playerWorldX;
    args.entity.targetY = args.playerWorldY;
  },
  { entityTypes: ["lumling"], priority: 0 },
);
```

**building:place**

```ts
api.hooks.intercept("building:place", (args, context) => {
  if (args.structureId === "exampleStructure") context.cancel();
});
```

**building:clearShape**

```ts
api.hooks.intercept("building:clearShape", (args, context) => {
  if (args.structure.data?.protected) context.cancel();
});
```

**input:scroll**

```ts
api.hooks.intercept("input:scroll", (args, context) => {
  if (args.deltaY !== 0) context.cancel();
});
```

**input:boostDown**

```ts
api.hooks.intercept("input:boostDown", (args, context) => {
  context.cancel();
});
```

**input:descendDown**

```ts
api.hooks.intercept("input:descendDown", (args, context) => {
  context.cancel();
});
```

**input:escape**

```ts
api.hooks.intercept("input:escape", (args, context) => {
  context.cancel();
});
```

**interactable:suppressHover**

```ts
api.hooks.intercept("interactable:suppressHover", (args, context) => {
  if (args.type === "exampleStructure") context.cancel();
});
```

**fire:element:ignite**

```ts
api.hooks.intercept("fire:element:ignite", (args, context) => {
  if (args.elementType === exampleElementType) context.cancel();
});
```

**projectile:fire:overStructure**

```ts
api.hooks.intercept(
  "projectile:fire:overStructure",
  (args, context) => {
    if (args.projectile.type === "exampleProjectile") context.cancel();
  },
);
```

**projectile:hit**

```ts
api.hooks.intercept("projectile:hit", (args, context) => {
  if (args.projectile.type === "exampleProjectile") context.cancel();
});
```

**player:position:commit**

```ts
api.hooks.intercept("player:position:commit", (args) => {
  args.velocityX *= 0.5;
  args.velocityY *= 0.5;
});
```

**progression:purchase**

```ts
api.hooks.intercept("progression:purchase", (args, context) => {
  if (args.id === "exampleTech") context.cancel();
});
```

</div>

<div class="smt-member-card">

### sandkit.api.hooks.modify :id=modify

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/hooks.d.ts#L388" target="_blank" rel="noopener">hooks.d.ts:388</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.modify&lt;K *extends* ModifyHookId&gt;(hookId: K, callback: (args: ModifyHookArgs&lt;K&gt;) =&gt; void, options?: ModifyHookOptions): () =&gt; void">

```ts
sandkit.api.hooks.modify<K *extends* ModifyHookId>(hookId: K, callback: (args: ModifyHookArgs<K>) => void, options?: ModifyHookOptions): () => void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| hookId | `K` | Registered hook identifier. |
| callback | <code>(`args`: [`ModifyHookArgs`](?id=modifyhookargs)&lt;`K`&gt;) =&gt; `void`</code> | Called with hook arguments; may mutate hook payload. |
| options? | <code>[`ModifyHookOptions`](?id=modifyhookoptions)</code> | Optional priority and filter options. |

<div class="smt-member-anchors">

##### hookId <!-- {docsify-ignore} -->

##### callback <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Registers a modifier hook. Returns an unsubscribe function.

`K` *extends* [`ModifyHookId`](?id=modifyhookid)

() => `void`

#### Examples

**excavation:prepare**

```ts
const unsubscribe = api.hooks.modify(
  "excavation:prepare",
  (args) => {
    if (args.sourceId !== "implosionGun") return;

    args.profileId = "example:voidGun";
    args.patternDiameterCells = 21;
    args.drillTierDamage = 8;
  },
  { priority: 0 },
);
```

**locator:scan:prepare**

```ts
const unsubscribe = api.hooks.modify(
  "locator:scan:prepare",
  (args) => {
    const target = findNearestTarget(args.originWorldX, args.originWorldY);
    args.hasTarget = target !== null;

    if (!target) {
      args.noTargetToast = "No example target was found.";
      args.noTargetToastKey = "mods|example|noTarget";
      return;
    }

    args.targetCellX = target.cellX;
    args.targetCellY = target.cellY;
    args.outerTint[0] = 103;
    args.outerTint[1] = 232;
    args.outerTint[2] = 249;
    args.triangulationLensOverride = true;
  },
  { priority: 0 },
);
```

**vacuum:prepare**

```ts
const vacuumPattern = [
  [0, 1, 0],
  [1, 1, 1],
  [0, 1, 0],
];

const unsubscribe = api.hooks.modify(
  "vacuum:prepare",
  (args) => {
    const target = api.input.getMousePositionAtCell();
    args.targetCellX = target.x;
    args.targetCellY = target.y;
    args.pattern = vacuumPattern;
  },
  { priority: 0 },
);
```

**vacuum:element:prepare**

```ts
const unsubscribe = api.hooks.modify(
  "vacuum:element:prepare",
  (args) => {
    if (args.matterType !== sandkit.enums.MatterType.Liquid) return;

    args.collectable = true;
    args.visibleInPicker = true;
  },
  { priority: 0 },
);
```

**player:movement:prepare**

```ts
api.hooks.modify("player:movement:prepare", (args) => {
  args.horizontalMaxSpeed *= 1.25;
});
```

**building:placementLimit:prepare**

```ts
api.hooks.modify("building:placementLimit:prepare", (args) => {
  args.maxCount = args.maxCount === null ? 10 : args.maxCount + 10;
});
```

**fluxEmanator:processing:prepare**

```ts
api.hooks.modify("fluxEmanator:processing:prepare", (args) => {
  args.speedMultiplier *= 2;
});
```

**render:pipes:prepare**

```ts
api.hooks.modify("render:pipes:prepare", (args) => {
  args.layer = "foreground";
});
```

**structures:moved:prepare**

```ts
api.hooks.modify("structures:moved:prepare", (args) => {
  prepareMovedStructures(args.moved, args.failedToPlace);
});
```

**structures:removed:prepare**

```ts
api.hooks.modify("structures:removed:prepare", (args) => {
  prepareRemovedStructures(args.removed, args.byMove);
});
```

**weapon:reload:prepare**

```ts
api.hooks.modify("weapon:reload:prepare", (args) => {
  args.reloadMs *= 0.8;
}, { weaponIds: ["exampleWeapon"] });
```

**projectile:travel:prepare**

```ts
api.hooks.modify("projectile:travel:prepare", (args) => {
  args.collidesWithStructures = false;
}, { projectileTypes: ["exampleProjectile"] });
```

**projectile:impact:prepare**

```ts
api.hooks.modify("projectile:impact:prepare", (args) => {
  args.radiusCells = 8;
}, { projectileTypes: ["exampleProjectile"] });
```

**player:collision:prepare**

```ts
api.hooks.modify("player:collision:prepare", (args) => {
  args.maxStepCells = 4;
});
```

**trigger:schedule:prepare**

```ts
api.hooks.modify("trigger:schedule:prepare", (args) => {
  args.intervalMs *= 0.5;
}, { triggerIds: ["pump"] });
```

**progression:cost:prepare**

```ts
api.hooks.modify("progression:cost:prepare", (args) => {
  if (args.currencyId === "gold") args.amount *= 0.9;
});
```

**resource:collection:prepare**

```ts
api.hooks.modify("resource:collection:prepare", (args) => {
  args.amount *= 2;
}, { resourceIds: ["fluxite"] });
```

**resource:delivery:prepare**

```ts
api.hooks.modify("resource:delivery:prepare", (args) => {
  args.mode = "collection";
}, { resourceIds: ["fluxite"] });
```

**resource:balance:prepare**

```ts
api.hooks.modify("resource:balance:prepare", (args) => {
  args.balance += api.storage.get("example", "gold") ?? 0;
}, { resourceIds: ["gold"] });
```

**gold:removal:prepare**

```ts
api.hooks.modify("gold:removal:prepare", (args) => {
  const banked = api.storage.get("example", "gold") ?? 0;
  args.shortfall = Math.max(0, args.shortfall - banked);
});
```

**gold:removal:settle**

```ts
api.hooks.modify("gold:removal:settle", (args) => {
  const banked = api.storage.get("example", "gold") ?? 0;
  const covered = Math.min(banked, args.shortfall);
  api.storage.set("example", "gold", banked - covered);
  args.shortfall -= covered;
});
```

</div>
