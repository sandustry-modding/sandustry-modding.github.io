# sandkit.api.collector

`sandkit.api.collector` — collector structure value and pickup handling.
Main thread only.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.collector.getValueFromCellId :id=getvaluefromcellid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/collector.d.ts#L14" target="_blank" rel="noopener">collector.d.ts:14</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.collector.getValueFromCellId(cellId: CellId): number">

```ts
getValueFromCellId(cellId: CellId): number
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| cellId | <code>[`CellId`](api/shared.nominal.md?id=cellid)</code> | Packed cell identifier. |

<div class="smt-member-anchors">

##### cellId <!-- {docsify-ignore} -->

</div>

Returns the collector value for a cell id.

</div>

<div class="smt-member-card">

### sandkit.api.collector.getValueByType :id=getvaluebytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/collector.d.ts#L19" target="_blank" rel="noopener">collector.d.ts:19</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.collector.getValueByType(elementType: ElementType): number">

```ts
getValueByType(elementType: ElementType): number
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementType | <code>[`ElementType`](api/sandkit.api.elements.md?id=elementtype)</code> | Numeric element type id. |

<div class="smt-member-anchors">

##### elementType <!-- {docsify-ignore} -->

</div>

Returns the collector value for an element type.

</div>

<div class="smt-member-card">

### sandkit.api.collector.isCellIdCollectable :id=iscellidcollectable

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/collector.d.ts#L24" target="_blank" rel="noopener">collector.d.ts:24</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.collector.isCellIdCollectable(cellId: CellId): boolean">

```ts
isCellIdCollectable(cellId: CellId): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| cellId | <code>[`CellId`](api/shared.nominal.md?id=cellid)</code> | Packed cell identifier. |

<div class="smt-member-anchors">

##### cellId <!-- {docsify-ignore} -->

</div>

Returns true when the cell id can be collected.

</div>

<div class="smt-member-card">

### sandkit.api.collector.isCellIdCollectableForSprite :id=iscellidcollectableforsprite

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/collector.d.ts#L29" target="_blank" rel="noopener">collector.d.ts:29</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.collector.isCellIdCollectableForSprite(cellId: CellId): boolean">

```ts
isCellIdCollectableForSprite(cellId: CellId): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| cellId | <code>[`CellId`](api/shared.nominal.md?id=cellid)</code> | Packed cell identifier. |

<div class="smt-member-anchors">

##### cellId <!-- {docsify-ignore} -->

</div>

Returns true when the cell id can be collected for sprite display.

</div>

<div class="smt-member-card">

### sandkit.api.collector.notifyPickupAtCell :id=notifypickupatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/collector.d.ts#L35" target="_blank" rel="noopener">collector.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.collector.notifyPickupAtCell(...args: CellCoordinates): void">

```ts
notifyPickupAtCell(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Notifies collector logic that a pickup happened at the cell.

</div>
