# sandkit.api.events

`sandkit.api.events` — subscribe to and emit named game events.
Main thread only. The `events` object is frozen; do not replace `on` or `emit`.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.events.PlayerCollisionPreparePayload :id=playercollisionpreparepayload

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L175" target="_blank" rel="noopener">events.d.ts:175</a></p>

| Property | Type | Description |
| --- | --- | --- |
| phaseThroughTerrain | <code>boolean</code> | When true, terrain collision is skipped this sub-step. |
| phaseThroughStructures | <code>boolean</code> | When true, structure collision is skipped this sub-step. |
| maxStepCells | <code>number</code> | Max cells the player can step up when blocked horizontally (1–8). |

<div class="smt-member-anchors">

##### phaseThroughTerrain <!-- {docsify-ignore} -->

##### phaseThroughStructures <!-- {docsify-ignore} -->

##### maxStepCells <!-- {docsify-ignore} -->

</div>

Mutable payload for `player:collision:prepare`.
Listeners may change `maxStepCells` (clamped 1–8) and phasing flags.

</div>

<div class="smt-member-card">

### sandkit.api.events.EventPayloadMap :id=eventpayloadmap

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L185" target="_blank" rel="noopener">events.d.ts:185</a></p>

<h4 class="smt-hook-heading" id="item-used"><code>item:used</code></h4>

```ts
{
  itemId: string;
  useId: string;
  kind: string;
  cellX: number;
  cellY: number;
  prepared: Readonly<Record<string, unknown>>;
}
```

<h4 class="smt-hook-heading" id="frame-render"><code>frame:render</code></h4>

```ts
Record<string, unknown>
```

<h4 class="smt-hook-heading" id="scene-game-started"><code>scene:game:started</code></h4>

```ts
Record<string, unknown>
```

<h4 class="smt-hook-heading" id="scene-started-game"><code>scene:started:game</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
Record<string, unknown>
```

<h4 class="smt-hook-heading" id="earlyAccess-completed"><code>earlyAccess:completed</code></h4>

```ts
Record<string, unknown>
```

<h4 class="smt-hook-heading" id="earlyAccess-complete"><code>earlyAccess:complete</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
Record<string, unknown>
```

<h4 class="smt-hook-heading" id="terrain-destroyed"><code>terrain:destroyed</code></h4>

```ts
{
  cellX: number;
  cellY: number;
  cellType: number;
  x: number;
  y: number;
}
```

<h4 class="smt-hook-heading" id="fog-cellRevealed"><code>fog:cellRevealed</code></h4>

```ts
{
  cellX: number;
  cellY: number;
  x: number;
  y: number;
}
```

<h4 class="smt-hook-heading" id="upgrade-levelSelected"><code>upgrade:levelSelected</code></h4>

```ts
{
  itemId: string;
  upgradeId: string;
  level: number;
}
```

<h4 class="smt-hook-heading" id="building-placed"><code>building:placed</code></h4>

```ts
{
  structure: Record<string, unknown>;
  x: number;
  y: number;
  isBatch: boolean;
  isCopied: boolean;
}
```

<h4 class="smt-hook-heading" id="building-removing"><code>building:removing</code></h4>

Fires before `building:removed`.

```ts
{
  structureId: string;
  x: number;
  y: number;
  byMove: boolean;
}
```

<h4 class="smt-hook-heading" id="building-removed"><code>building:removed</code></h4>

```ts
{
  structureId: string;
  x: number;
  y: number;
  isBatch: boolean;
}
```

<h4 class="smt-hook-heading" id="structures-placed"><code>structures:placed</code></h4>

```ts
{ structures: unknown[] }
```

<h4 class="smt-hook-heading" id="structures-removed"><code>structures:removed</code></h4>

```ts
{
  removed: unknown[];
  structures: unknown[];
  byMove: boolean;
}
```

<h4 class="smt-hook-heading" id="structures-moved"><code>structures:moved</code></h4>

```ts
{
  moved: unknown[];
  failedToPlace: unknown[];
}
```

<h4 class="smt-hook-heading" id="game-ready"><code>game:ready</code></h4>

```ts
Record<string, unknown>
```

<h4 class="smt-hook-heading" id="game-started"><code>game:started</code></h4>

```ts
Record<string, unknown>
```

<h4 class="smt-hook-heading" id="tutorial-stepChanged"><code>tutorial:stepChanged</code></h4>

```ts
{ step: unknown }
```

<h4 class="smt-hook-heading" id="tutorial-completed"><code>tutorial:completed</code></h4>

```ts
{ skipped: boolean }
```

<h4 class="smt-hook-heading" id="tech-unlocked"><code>tech:unlocked</code></h4>

```ts
{
  techId: string;
  suppressMusic: boolean;
}
```

<h4 class="smt-hook-heading" id="worldItem-pickedUp"><code>worldItem:pickedUp</code></h4>

```ts
{
  worldItemId: number;
  type: string;
}
```

<h4 class="smt-hook-heading" id="resource-collected"><code>resource:collected</code></h4>

```ts
{
  resourceId: string;
  amount: number;
  sourceKind: string;
  cellX: number;
  cellY: number;
}
```

<h4 class="smt-hook-heading" id="player-collision-prepare"><code>player:collision:prepare</code></h4>

```ts
PlayerCollisionPreparePayload
```

<h4 class="smt-hook-heading" id="player-moved"><code>player:moved</code></h4>

```ts
{
  dt: number;
  state: unknown;
}
```

Known event payloads. Unlisted ids still use `unknown`.

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.events.EventId :id=eventid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L285" target="_blank" rel="noopener">events.d.ts:285</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.EventId = LooseString&lt;keyof EventPayloadMap&gt;">

```ts
EventId = LooseString<keyof EventPayloadMap>
```

</div>

Known event names plus any custom string id.

</div>

<div class="smt-member-card">

### sandkit.api.events.EventPayload :id=eventpayload

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L288" target="_blank" rel="noopener">events.d.ts:288</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.EventPayload&lt;K&gt; = K *extends* keyof EventPayloadMap ? EventPayloadMap[K] : unknown">

```ts
sandkit.api.events.EventPayload<K> = K *extends* keyof EventPayloadMap ? EventPayloadMap[K] : unknown
```

</div>

Event payload type for a given event id.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.events.on :id=on

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L157" target="_blank" rel="noopener">events.d.ts:157</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.on&lt;K *extends* EventId&gt;(eventId: K, callback: (payload: EventPayload&lt;K&gt;) =&gt; void): () =&gt; void">

```ts
sandkit.api.events.on<K *extends* EventId>(eventId: K, callback: (payload: EventPayload<K>) => void): () => void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| eventId | `K` | Registered event name. |
| callback | <code>(`payload`: [`EventPayload`](?id=eventpayload)&lt;`K`&gt;) =&gt; `void`</code> | Called when the event is emitted. |

<div class="smt-member-anchors">

##### eventId <!-- {docsify-ignore} -->

##### callback <!-- {docsify-ignore} -->

</div>

Subscribes to an event. Returns an unsubscribe function.

`K` *extends* [`EventId`](?id=eventid)

() => `void`

#### Examples

**item:used**

```ts
const unsubscribe = api.events.on("item:used", (payload) => {
  if (payload.itemId !== "laser") return;

  spawnSparklesAtCell(payload.cellX, payload.cellY);
});
```

**frame:render**

```ts
api.events.on("frame:render", () => {
  drawOverlay();
});
```

**scene:game:started**

```ts
api.events.on("scene:game:started", () => {
  initializeGameScene();
});
```

**earlyAccess:completed**

```ts
api.events.on("earlyAccess:completed", (payload) => {
  onEarlyAccessCompleted(payload);
});
```

**terrain:destroyed**

```ts
api.events.on("terrain:destroyed", (payload) => {
  onTerrainDestroyed(payload.cellX, payload.cellY, payload.cellType);
});
```

**fog:cellRevealed**

```ts
api.events.on("fog:cellRevealed", (payload) => {
  onFogCellRevealed(payload.cellX, payload.cellY);
});
```

**upgrade:levelSelected**

```ts
api.events.on("upgrade:levelSelected", (payload) => {
  onLevelSelected(payload.itemId, payload.upgradeId, payload.level);
});
```

**building:placed**

```ts
api.events.on("building:placed", (payload) => {
  onBuildingPlaced(payload.structure, payload.x, payload.y);
});
```

**building:removing**

```ts
api.events.on("building:removing", (payload) => {
  prepareBuildingRemoval(payload.structureId, payload.x, payload.y);
});
```

**building:removed**

```ts
api.events.on("building:removed", (payload) => {
  onBuildingRemoved(payload.structureId, payload.x, payload.y);
});
```

**structures:placed**

```ts
api.events.on("structures:placed", (payload) => {
  onStructuresPlaced(payload.structures);
});
```

**structures:removed**

```ts
api.events.on("structures:removed", (payload) => {
  onStructuresRemoved(payload.removed, payload.byMove);
});
```

**structures:moved**

```ts
api.events.on("structures:moved", (payload) => {
  onStructuresMoved(payload.moved, payload.failedToPlace);
});
```

**game:ready**

```ts
api.events.on("game:ready", () => {
  initializeExample();
});
```

**game:started**

```ts
api.events.on("game:started", () => {
  startExample();
});
```

**tutorial:stepChanged**

```ts
api.events.on("tutorial:stepChanged", (payload) => {
  onTutorialStepChanged(payload.step);
});
```

**tutorial:completed**

```ts
api.events.on("tutorial:completed", (payload) => {
  onTutorialCompleted(payload.skipped);
});
```

**tech:unlocked**

```ts
api.events.on("tech:unlocked", (payload) => {
  onTechUnlocked(payload.techId, payload.suppressMusic);
});
```

**worldItem:pickedUp**

```ts
api.events.on("worldItem:pickedUp", (payload) => {
  onPickup(payload.worldItemId, payload.type);
});
```

**resource:collected**

```ts
api.events.on("resource:collected", (payload) => {
  onResourceCollected(payload.resourceId, payload.amount);
});
```

</div>

<div class="smt-member-card">

### sandkit.api.events.emit :id=emit

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/events.d.ts#L169" target="_blank" rel="noopener">events.d.ts:169</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.emit&lt;K *extends* EventId&gt;(eventId: K, payload: EventPayload&lt;K&gt;): void">

```ts
sandkit.api.events.emit<K *extends* EventId>(eventId: K, payload: EventPayload<K>): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| eventId | `K` | Registered event name. |
| payload | <code>[`EventPayload`](?id=eventpayload)&lt;`K`&gt;</code> | Serializable payload passed to listeners. |

<div class="smt-member-anchors">

##### eventId <!-- {docsify-ignore} -->

##### payload <!-- {docsify-ignore} -->

</div>

Emits an event with a payload to all subscribers.

`K` *extends* [`EventId`](?id=eventid)

</div>
