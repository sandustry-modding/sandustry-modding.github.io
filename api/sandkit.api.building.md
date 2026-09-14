# sandkit.api.building

`sandkit.api.building` — structure placement and built-in structure types.
Main thread only.

## Enumerations <!-- {docsify-ignore} -->

- [StructureType](api/sandkit.api.building.StructureType.md)

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.building.getSnappedPositionAtCell :id=getsnappedpositionatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L73" target="_blank" rel="noopener">building.d.ts:73</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.building.getSnappedPositionAtCell(...args: CellCoordinates): Vector2">

```ts
getSnappedPositionAtCell(...args: CellCoordinates): Vector2
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the snapped world position for placement at the cell.

[`Vector2`](api/shared.player.md?id=vector2) Snapped world position in pixels.

</div>

<div class="smt-member-card">

### sandkit.api.building.isBlockedAtCell :id=isblockedatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L81" target="_blank" rel="noopener">building.d.ts:81</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.building.isBlockedAtCell(...args: CellCoordinates): boolean">

```ts
isBlockedAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when placement is blocked at the cell.

True when a structure cannot be placed at the cell.

</div>

<div class="smt-member-card">

### sandkit.api.building.cancelPlacement :id=cancelplacement

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L84" target="_blank" rel="noopener">building.d.ts:84</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.building.cancelPlacement(): void">

```ts
cancelPlacement(): void
```

</div>

Cancel the current structure placement preview.

</div>

<div class="smt-member-card">

### sandkit.api.building.selectStructure :id=selectstructure

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/building.d.ts#L91" target="_blank" rel="noopener">building.d.ts:91</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.building.selectStructure(structureTypeOrId: StructureRef | StructureType): StructureRef | null">

```ts
selectStructure(structureTypeOrId: StructureRef | StructureType): StructureRef | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureTypeOrId | <code>[`StructureRef`](api/sandkit.api.structures.worker.md?id=structureref) &#124; [`StructureType`](api/sandkit.api.building.StructureType.md)</code> | Built-in [StructureType](api/sandkit.api.building.StructureType.md) value or registered structure id. |

<div class="smt-member-anchors">

##### structureTypeOrId <!-- {docsify-ignore} -->

</div>

Select a structure for placement by type or id.

[`StructureRef`](api/sandkit.api.structures.worker.md?id=structureref) &#124; `null` Resolved selection, or null when the type or id is invalid.

</div>
