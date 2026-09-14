# sandkit.api.elements (worker)

**`Internal`**

Worker-thread `sandkit.api.elements` — shared reads plus immediate grid mutations.

Worker-entry mutations apply immediately. Main thread defers matching helpers in
`sandkit.api.elements`.

 Worker extension; not interchangeable with main-thread
`sandkit.api.elements`.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.elements.createAtCell :id=createatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L76" target="_blank" rel="noopener">elements.d.ts:76</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void">

```ts
createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md?id=elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md?id=elementcreateoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Create an element at a cell immediately on this worker.

#### Example

**Worker entry**

```ts
api.elements.createAtCell(cellX, cellY, "water", {
  durationTicks: 60,
});
```

</div>

<div class="smt-member-card">

### sandkit.api.elements.replaceAtCell :id=replaceatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L89" target="_blank" rel="noopener">elements.d.ts:89</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void">

```ts
replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md?id=elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md?id=elementcreateoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Replace the element at a cell immediately on this worker.

</div>

<div class="smt-member-card">

### sandkit.api.elements.removeAtCell :id=removeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L101" target="_blank" rel="noopener">elements.d.ts:101</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.removeAtCell(...args: number, number, [ElementRemovalOptions]): void">

```ts
removeAtCell(...args: number, number, [ElementRemovalOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`ElementRemovalOptions`](api/sandkit.api.elements.md?id=elementremovaloptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Remove the element at a cell immediately on this worker.

</div>

<div class="smt-member-card">

### sandkit.api.elements.moveBetweenCells :id=movebetweencells

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L115" target="_blank" rel="noopener">elements.d.ts:115</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.moveBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): boolean">

```ts
moveBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| fromCellX | `number` | Source cell column. |
| fromCellY | `number` | Source cell row. |
| toCellX | `number` | Destination cell column. |
| toCellY | `number` | Destination cell row. |

<div class="smt-member-anchors">

##### fromCellX <!-- {docsify-ignore} -->

##### fromCellY <!-- {docsify-ignore} -->

##### toCellX <!-- {docsify-ignore} -->

##### toCellY <!-- {docsify-ignore} -->

</div>

Move an element between cells immediately on this worker.

True when the move succeeded.

</div>

<div class="smt-member-card">

### sandkit.api.elements.teleportBetweenCells :id=teleportbetweencells

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L131" target="_blank" rel="noopener">elements.d.ts:131</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.teleportBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void">

```ts
teleportBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| fromCellX | `number` | Source cell column. |
| fromCellY | `number` | Source cell row. |
| toCellX | `number` | Destination cell column. |
| toCellY | `number` | Destination cell row. |

<div class="smt-member-anchors">

##### fromCellX <!-- {docsify-ignore} -->

##### fromCellY <!-- {docsify-ignore} -->

##### toCellX <!-- {docsify-ignore} -->

##### toCellY <!-- {docsify-ignore} -->

</div>

Teleport an element between cells immediately on this worker.

</div>

<div class="smt-member-card">

### sandkit.api.elements.swapBetweenCells :id=swapbetweencells

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L148" target="_blank" rel="noopener">elements.d.ts:148</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.swapBetweenCells(firstCellX: number, firstCellY: number, secondCellX: number, secondCellY: number): boolean">

```ts
swapBetweenCells(firstCellX: number, firstCellY: number, secondCellX: number, secondCellY: number): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| firstCellX | `number` | First cell column. |
| firstCellY | `number` | First cell row. |
| secondCellX | `number` | Second cell column. |
| secondCellY | `number` | Second cell row. |

<div class="smt-member-anchors">

##### firstCellX <!-- {docsify-ignore} -->

##### firstCellY <!-- {docsify-ignore} -->

##### secondCellX <!-- {docsify-ignore} -->

##### secondCellY <!-- {docsify-ignore} -->

</div>

Swap elements between two cells immediately on this worker.

True when the swap succeeded.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.elements.swapCells~~ :id=swapcells

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L159" target="_blank" rel="noopener">elements.d.ts:159</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [swapBetweenCells](api/sandkit.api.elements.worker.md?id=swapbetweencells) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.elements.swapCells(firstCellX: number, firstCellY: number, secondCellX: number, secondCellY: number): boolean">

```ts
swapCells(firstCellX: number, firstCellY: number, secondCellX: number, secondCellY: number): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| firstCellX | `number` |  |
| firstCellY | `number` |  |
| secondCellX | `number` |  |
| secondCellY | `number` |  |

<div class="smt-member-anchors">

##### firstCellX <!-- {docsify-ignore} -->

##### firstCellY <!-- {docsify-ignore} -->

##### secondCellX <!-- {docsify-ignore} -->

##### secondCellY <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.elements.markMovementBlockedByIndex :id=markmovementblockedbyindex

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L172" target="_blank" rel="noopener">elements.d.ts:172</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.markMovementBlockedByIndex(elementIndex: number): void">

```ts
markMovementBlockedByIndex(elementIndex: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementIndex | `number` | Element index from [getInfoAtCell](api/sandkit.api.elements.md?id=getinfoatcell). |

<div class="smt-member-anchors">

##### elementIndex <!-- {docsify-ignore} -->

</div>

Mark an element index as movement-blocked for this tick.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.elements.markMovementBlockedByElementIndex~~ :id=markmovementblockedbyelementindex

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L178" target="_blank" rel="noopener">elements.d.ts:178</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [markMovementBlockedByIndex](api/sandkit.api.elements.worker.md?id=markmovementblockedbyindex) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.elements.markMovementBlockedByElementIndex(elementIndex: number): void">

```ts
markMovementBlockedByElementIndex(elementIndex: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementIndex | `number` |  |

<div class="smt-member-anchors">

##### elementIndex <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.elements.setVelocityAtCell :id=setvelocityatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L189" target="_blank" rel="noopener">elements.d.ts:189</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setVelocityAtCell(...args: number, number, [Vector2]): boolean">

```ts
setVelocityAtCell(...args: number, number, [Vector2]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set particle velocity at a cell immediately on this worker.

True when velocity was set.

</div>

<div class="smt-member-card">

### sandkit.api.elements.addParticleVelocityAtCell :id=addparticlevelocityatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L201" target="_blank" rel="noopener">elements.d.ts:201</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.addParticleVelocityAtCell(...args: number, number, [Vector2, number]): boolean">

```ts
addParticleVelocityAtCell(...args: number, number, [Vector2, number]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2), `number`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Add velocity to a particle at a cell immediately on this worker.

True when velocity was updated.

</div>

<div class="smt-member-card">

### sandkit.api.elements.convertToParticleAtCell :id=converttoparticleatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L214" target="_blank" rel="noopener">elements.d.ts:214</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.convertToParticleAtCell(...args: number, number, [Vector2]): boolean">

```ts
convertToParticleAtCell(...args: number, number, [Vector2]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Convert a cell element to a particle immediately on this worker.

True when conversion succeeded.

</div>

<div class="smt-member-card">

### sandkit.api.elements.convertFromParticleAtCell :id=convertfromparticleatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L226" target="_blank" rel="noopener">elements.d.ts:226</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.convertFromParticleAtCell(...args: CellCoordinates): boolean">

```ts
convertFromParticleAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Convert a particle back to a solid element immediately on this worker.

True when conversion succeeded.

</div>

<div class="smt-member-card">

### sandkit.api.elements.setDataFieldAtCell :id=setdatafieldatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L238" target="_blank" rel="noopener">elements.d.ts:238</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4, number]): boolean">

```ts
setDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4, number]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `1` &#124; `2` &#124; `3` &#124; `4`, `number`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set a data field on the element at a cell immediately on this worker.

True when the field was set.

</div>

<div class="smt-member-card">

### sandkit.api.elements.refreshColorAtCell :id=refreshcoloratcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L249" target="_blank" rel="noopener">elements.d.ts:249</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.refreshColorAtCell(...args: CellCoordinates): void">

```ts
refreshColorAtCell(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Refresh the rendered color at a cell immediately on this worker.

</div>

<div class="smt-member-card">

### sandkit.api.elements.setPhysicsAtCell :id=setphysicsatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L259" target="_blank" rel="noopener">elements.d.ts:259</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setPhysicsAtCell(...args: [number, number, number]): void">

```ts
setPhysicsAtCell(...args: [number, number, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set the physics skip mode at a cell immediately on this worker.

</div>

<div class="smt-member-card">

### sandkit.api.elements.setDurationAtCell :id=setdurationatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L281" target="_blank" rel="noopener">elements.d.ts:281</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setDurationAtCell(...args: [number, number, number, object]): boolean">

```ts
setDurationAtCell(...args: [number, number, number, object]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`, `object`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set element duration at a cell immediately on this worker.

True when duration was updated.

#### Example

**Worker entry**

```ts
const updated = api.elements.setDurationAtCell(
  cellX,
  cellY,
  120,
  { updateMax: true },
);
```

</div>
