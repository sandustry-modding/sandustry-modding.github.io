# sandkit.api.elements (worker)

**`Internal`**

Worker-thread `sandkit.api.elements` — shared reads plus immediate grid mutations.

Worker-entry mutations apply immediately. Main thread defers matching helpers in
`sandkit.api.elements`.

 Worker extension; not interchangeable with main-thread
`sandkit.api.elements`.

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.elements.ElementType :id=elementtype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L17" target="_blank" rel="noopener">elements.d.ts:17</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.ElementType = ElementType">

```ts
ElementType = ElementType
```

</div>

Numeric id for a registered element type.

</div>

<div class="smt-member-card">

### sandkit.api.elements.ElementId :id=elementid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L19" target="_blank" rel="noopener">elements.d.ts:19</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.ElementId = ElementId">

```ts
ElementId = ElementId
```

</div>

Mod or built-in element string id.

</div>

<div class="smt-member-card">

### sandkit.api.elements.ElementRef :id=elementref

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L21" target="_blank" rel="noopener">elements.d.ts:21</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.ElementRef = ElementRef">

```ts
ElementRef = ElementRef
```

</div>

Type handle or string id accepted by lookup helpers.

</div>

<div class="smt-member-card">

### sandkit.api.elements.ElementDefinition :id=elementdefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L25" target="_blank" rel="noopener">elements.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.ElementDefinition = ElementDefinition">

```ts
ElementDefinition = ElementDefinition
```

</div>

Full definition used to register a custom element.

</div>

<div class="smt-member-card">

### sandkit.api.elements.ElementCreateOptions :id=elementcreateoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L27" target="_blank" rel="noopener">elements.d.ts:27</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.ElementCreateOptions = ElementCreateOptions">

```ts
ElementCreateOptions = ElementCreateOptions
```

</div>

Options for [createAtCell](?id=createatcell) and replace helpers.

</div>

<div class="smt-member-card">

### sandkit.api.elements.ElementRemovalOptions :id=elementremovaloptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L29" target="_blank" rel="noopener">elements.d.ts:29</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.ElementRemovalOptions = ElementRemovalOptions">

```ts
ElementRemovalOptions = ElementRemovalOptions
```

</div>

Options for [removeAtCell](?id=removeatcell).

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.elements.getIdByType :id=getidbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L37" target="_blank" rel="noopener">elements.d.ts:37</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getIdByType(elementType: ElementType): string &amp; object">

```ts
getIdByType(elementType: ElementType): string & object
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementType | <code>[`ElementType`](api/sandkit.api.elements.md?id=elementtype)</code> | Numeric element type. |

<div class="smt-member-anchors">

##### elementType <!-- {docsify-ignore} -->

</div>

Return the mod string id for a numeric element type.

`string` & `object`

</div>

<div class="smt-member-card">

### sandkit.api.elements.getTypeById :id=gettypebyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L45" target="_blank" rel="noopener">elements.d.ts:45</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getTypeById(elementId: string &amp; object): ElementType">

```ts
getTypeById(elementId: string & object): ElementType
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementId | `string` & `object` | Mod-registered element id. |

<div class="smt-member-anchors">

##### elementId <!-- {docsify-ignore} -->

</div>

Resolve a mod element string id to a type handle.

[`ElementType`](api/sandkit.api.elements.md?id=elementtype)

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.elements.getTypeFromId~~ :id=gettypefromid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L51" target="_blank" rel="noopener">elements.d.ts:51</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [getTypeById](api/sandkit.api.elements.worker.md?id=gettypebyid) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getTypeFromId(elementId: string &amp; object): ElementType">

```ts
getTypeFromId(elementId: string & object): ElementType
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementId | `string` & `object` |  |

<div class="smt-member-anchors">

##### elementId <!-- {docsify-ignore} -->

</div>

[`ElementType`](api/sandkit.api.elements.md?id=elementtype)

</div>

<div class="smt-member-card">

### sandkit.api.elements.getDefinitionByType :id=getdefinitionbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L59" target="_blank" rel="noopener">elements.d.ts:59</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getDefinitionByType(elementType: ElementType): ElementDefinition | undefined">

```ts
getDefinitionByType(elementType: ElementType): ElementDefinition | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementType | <code>[`ElementType`](api/sandkit.api.elements.md?id=elementtype)</code> | Numeric element type. |

<div class="smt-member-anchors">

##### elementType <!-- {docsify-ignore} -->

</div>

Look up the definition for a type handle.

[`ElementDefinition`](api/sandkit.api.elements.md?id=elementdefinition) &#124; `undefined`

</div>

<div class="smt-member-card">

### sandkit.api.elements.getTypeAtCell :id=gettypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L68" target="_blank" rel="noopener">elements.d.ts:68</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getTypeAtCell(...args: CellCoordinates): ElementType | null">

```ts
getTypeAtCell(...args: CellCoordinates): ElementType | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the raw element type at a cell (may differ from resolved type).

[`ElementType`](api/sandkit.api.elements.md?id=elementtype) &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.elements.getResolvedTypeAtCell :id=getresolvedtypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L77" target="_blank" rel="noopener">elements.d.ts:77</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null">

```ts
getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the resolved element type after overlays and particles.

[`ElementType`](api/sandkit.api.elements.md?id=elementtype) &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.elements.getResolvedTypeFromCellId :id=getresolvedtypefromcellid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L85" target="_blank" rel="noopener">elements.d.ts:85</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getResolvedTypeFromCellId(cellId: CellId): ElementType | null">

```ts
getResolvedTypeFromCellId(cellId: CellId): ElementType | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| cellId | <code>[`CellId`](api/shared.nominal.md?id=cellid)</code> | Packed cell id from [grid.getCellIdAtCell](api/sandkit.api.grid.worker.md?id=getcellidatcell). |

<div class="smt-member-anchors">

##### cellId <!-- {docsify-ignore} -->

</div>

Return the resolved element type from a packed cell id.

[`ElementType`](api/sandkit.api.elements.md?id=elementtype) &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.elements.getInfoAtCell :id=getinfoatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L94" target="_blank" rel="noopener">elements.d.ts:94</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getInfoAtCell(...args: CellCoordinates): { elementType: ElementType; isParticle: boolean; cellId: CellId; elementIndex: number; } | null">

```ts
getInfoAtCell(...args: CellCoordinates): { elementType: ElementType; isParticle: boolean; cellId: CellId; elementIndex: number; } | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return element index, particle flag, and ids at a cell.

\{ `elementType`: [`ElementType`](api/sandkit.api.elements.md?id=elementtype); `isParticle`: `boolean`; `cellId`: [`CellId`](api/shared.nominal.md?id=cellid); `elementIndex`: `number`; \} &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.elements.getMatterTypeAtCell :id=getmattertypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L105" target="_blank" rel="noopener">elements.d.ts:105</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getMatterTypeAtCell(...args: CellCoordinates): MatterType | null">

```ts
getMatterTypeAtCell(...args: CellCoordinates): MatterType | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the matter category at a cell, or null when empty.

[`MatterType`](api/sandkit.api.elements.MatterType.md) &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.elements.isTypeAtCell :id=istypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L115" target="_blank" rel="noopener">elements.d.ts:115</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.isTypeAtCell(...args: number, number, [ElementRef]): boolean">

```ts
isTypeAtCell(...args: number, number, [ElementRef]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md?id=elementref)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the cell holds the given element type or id.

</div>

<div class="smt-member-card">

### sandkit.api.elements.isFreeFallingAtCell :id=isfreefallingatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L124" target="_blank" rel="noopener">elements.d.ts:124</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.isFreeFallingAtCell(...args: CellCoordinates): boolean">

```ts
isFreeFallingAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the element at the cell is falling.

</div>

<div class="smt-member-card">

### sandkit.api.elements.getVelocityAtCell :id=getvelocityatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L133" target="_blank" rel="noopener">elements.d.ts:133</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getVelocityAtCell(...args: CellCoordinates): Vector2 | null">

```ts
getVelocityAtCell(...args: CellCoordinates): Vector2 | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return per-cell velocity for moving elements.

[`Vector2`](api/shared.player.md?id=vector2) &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.elements.getDataFieldAtCell :id=getdatafieldatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L143" target="_blank" rel="noopener">elements.d.ts:143</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4]): number | null">

```ts
getDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4]): number | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `1` &#124; `2` &#124; `3` &#124; `4`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Read element data field 1–4 at a cell.

`number` &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.elements.createAtCell :id=createatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L163" target="_blank" rel="noopener">elements.d.ts:163</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L176" target="_blank" rel="noopener">elements.d.ts:176</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L188" target="_blank" rel="noopener">elements.d.ts:188</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L202" target="_blank" rel="noopener">elements.d.ts:202</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L218" target="_blank" rel="noopener">elements.d.ts:218</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L235" target="_blank" rel="noopener">elements.d.ts:235</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L246" target="_blank" rel="noopener">elements.d.ts:246</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L259" target="_blank" rel="noopener">elements.d.ts:259</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.markMovementBlockedByIndex(elementIndex: number): void">

```ts
markMovementBlockedByIndex(elementIndex: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementIndex | `number` | Element index from [getInfoAtCell](?id=getinfoatcell). |

<div class="smt-member-anchors">

##### elementIndex <!-- {docsify-ignore} -->

</div>

Mark an element index as movement-blocked for this tick.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.elements.markMovementBlockedByElementIndex~~ :id=markmovementblockedbyelementindex

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L265" target="_blank" rel="noopener">elements.d.ts:265</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L276" target="_blank" rel="noopener">elements.d.ts:276</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L288" target="_blank" rel="noopener">elements.d.ts:288</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L301" target="_blank" rel="noopener">elements.d.ts:301</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L313" target="_blank" rel="noopener">elements.d.ts:313</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L325" target="_blank" rel="noopener">elements.d.ts:325</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L336" target="_blank" rel="noopener">elements.d.ts:336</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L346" target="_blank" rel="noopener">elements.d.ts:346</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L368" target="_blank" rel="noopener">elements.d.ts:368</a></p>

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
