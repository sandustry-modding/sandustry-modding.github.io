# sandkit.api.grid

`sandkit.api.grid` — grid cell queries, deferred mutations, and iteration.

Main thread only.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.grid.GridMutationWriter :id=gridmutationwriter

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L150" target="_blank" rel="noopener">grid.d.ts:150</a></p>

| Property | Type | Description |
| --- | --- | --- |
| elements | <code>GridMutationWriterElements</code> | Element cell mutations inside a [mutate](?id=mutate) callback. |
| terrains | <code>GridMutationWriterTerrains</code> | Terrain cell mutations inside a [mutate](?id=mutate) callback. |

<div class="smt-member-anchors">

##### elements <!-- {docsify-ignore} -->

##### terrains <!-- {docsify-ignore} -->

</div>

Deferred element and terrain mutations passed to [mutate](?id=mutate).

</div>

<div class="smt-member-card">

### sandkit.api.grid.GridMutationWriterElements :id=gridmutationwriterelements

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L158" target="_blank" rel="noopener">grid.d.ts:158</a></p>

| Method | Signature | Description |
| --- | --- | --- |
| createAtCell() | <code>(...args: number, number, [ElementRef, ElementCreateOptions]): void</code> | Create an element at a cell inside a [mutate](?id=mutate) callback. |
| replaceAtCell() | <code>(...args: number, number, [ElementRef, ElementCreateOptions]): void</code> | Replace the element at a cell inside a [mutate](?id=mutate) callback. |
| removeAtCell() | <code>(...args: number, number, [ElementRemovalOptions]): void</code> | Remove the element at a cell inside a [mutate](?id=mutate) callback. |

<div class="smt-member-anchors">

##### createAtCell() <!-- {docsify-ignore} -->

##### replaceAtCell() <!-- {docsify-ignore} -->

##### removeAtCell() <!-- {docsify-ignore} -->

</div>

Element writers available on [GridMutationWriter.elements](?id=elements).

</div>

<div class="smt-member-card">

### sandkit.api.grid.GridMutationWriterTerrains :id=gridmutationwriterterrains

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L205" target="_blank" rel="noopener">grid.d.ts:205</a></p>

| Method | Signature | Description |
| --- | --- | --- |
| createAtCell() | <code>(...args: number, number, [TerrainRef, TerrainMutationOptions]): void</code> | Create terrain at a cell inside a [mutate](?id=mutate) callback. |
| replaceAtCell() | <code>(...args: number, number, [TerrainRef, TerrainMutationOptions]): void</code> | Replace terrain at a cell inside a [mutate](?id=mutate) callback. |
| removeAtCell() | <code>(...args: number, number, [TerrainMutationOptions]): void</code> | Remove terrain at a cell inside a [mutate](?id=mutate) callback. |

<div class="smt-member-anchors">

##### createAtCell() <!-- {docsify-ignore} -->

##### replaceAtCell() <!-- {docsify-ignore} -->

##### removeAtCell() <!-- {docsify-ignore} -->

</div>

Terrain writers available on [GridMutationWriter.terrains](?id=terrains).

</div>

<div class="smt-member-card">

### sandkit.api.grid.GridDimensions :id=griddimensions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L74" target="_blank" rel="noopener">grid.d.ts:74</a></p>

| Property | Type | Description |
| --- | --- | --- |
| widthCells | <code>number</code> | Grid width in cells. |
| heightCells | <code>number</code> | Grid height in cells. |

<div class="smt-member-anchors">

##### widthCells <!-- {docsify-ignore} -->

##### heightCells <!-- {docsify-ignore} -->

</div>

World grid width and height in cells.

</div>

<div class="smt-member-card">

### sandkit.api.grid.ExcavateOptions :id=excavateoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L82" target="_blank" rel="noopener">grid.d.ts:82</a></p>

| Property | Type | Description |
| --- | --- | --- |
| fromGun? | <code>boolean</code> | Treat the dig as gun fire for terrain resistance checks. |
| fromRocketExplosion? | <code>boolean</code> | Treat the dig as rocket or dynamite explosion damage. |
| fromDrill? | <code>boolean</code> | Treat the dig as drill damage. |
| useLiteralOutVelocity? | <code>boolean</code> | Use outVelocity literally instead of deriving ejection speed. |
| destroyNonDestructible? | <code>boolean</code> | Allow removing terrain marked non-destructible. |
| forceRemoveAll? | <code>boolean</code> | Force-remove all matched cells regardless of normal rules. |
| drillTierDamage? | <code>number</code> | Extra drill-tier damage when [fromDrill](?id=fromdrill) is true. Clamped to 0–1000. |

<div class="smt-member-anchors">

##### fromGun? <!-- {docsify-ignore} -->

##### fromRocketExplosion? <!-- {docsify-ignore} -->

##### fromDrill? <!-- {docsify-ignore} -->

##### useLiteralOutVelocity? <!-- {docsify-ignore} -->

##### destroyNonDestructible? <!-- {docsify-ignore} -->

##### forceRemoveAll? <!-- {docsify-ignore} -->

##### drillTierDamage? <!-- {docsify-ignore} -->

</div>

Flags that control how [excavateAtCell](?id=excavateatcell) resolves damage and drops.

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.grid.CellId :id=cellid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L71" target="_blank" rel="noopener">grid.d.ts:71</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.CellId = CellId">

```ts
CellId = CellId
```

</div>

Packed cell id from [getCellIdAtCell](?id=getcellidatcell).

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.grid.mutate :id=mutate

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L80" target="_blank" rel="noopener">grid.d.ts:80</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.mutate(callback: (writer: GridMutationWriter) =&gt; void): void">

```ts
mutate(callback: (writer: GridMutationWriter) => void): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| callback | <code>(`writer`: [`GridMutationWriter`](?id=gridmutationwriter)) =&gt; `void`</code> | Receives a writer for element and terrain cell mutations. |

<div class="smt-member-anchors">

##### callback <!-- {docsify-ignore} -->

</div>

Run deferred grid mutations on the main thread. Reads see the old grid until
mutations apply.

#### Examples

**Deferred main-thread mutations**

```ts
api.grid.mutate((writer) => {
  if (api.terrains.isTypeAtCell(cellX, cellY, "ice")) {
    writer.elements.replaceAtCell(cellX, cellY, "water");
  }
});
```

```ts
const waterType = api.elements.getTypeById("water");

api.events.on("item:used", ({ itemId, cellX, cellY }) => {
  if (itemId !== "laser") return;

  api.grid.mutate((writer) => {
    if (!api.terrains.isTypeAtCell(cellX, cellY, "ice")) return;
    writer.elements.replaceAtCell(cellX, cellY, waterType);
  });
});
```

</div>

<div class="smt-member-card">

### sandkit.api.grid.revealFogAtCell :id=revealfogatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L89" target="_blank" rel="noopener">grid.d.ts:89</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.revealFogAtCell(...args: CellCoordinates): void">

```ts
revealFogAtCell(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Reveal fog of war at a cell.

</div>

<div class="smt-member-card">

### sandkit.api.grid.redrawAroundCell :id=redrawaroundcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L99" target="_blank" rel="noopener">grid.d.ts:99</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.redrawAroundCell(...args: [number, number, number]): void">

```ts
redrawAroundCell(...args: [number, number, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Request redraw around a cell.

</div>

<div class="smt-member-card">

### sandkit.api.grid.forEachCellInCircle :id=foreachcellincircle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L110" target="_blank" rel="noopener">grid.d.ts:110</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.forEachCellInCircle(centerCellX: number, centerCellY: number, radiusCells: number, callback: (...args: CellCoordinates) =&gt; void): void">

```ts
forEachCellInCircle(centerCellX: number, centerCellY: number, radiusCells: number, callback: (...args: CellCoordinates) => void): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| centerCellX | `number` | Circle center cell column. |
| centerCellY | `number` | Circle center cell row. |
| radiusCells | `number` | Circle radius in cells. |
| callback | <code>(...`args`: [`CellCoordinates`](api/shared.player.md?id=cellcoordinates)) =&gt; `void`</code> | Invoked for each cell with `(cellX, cellY)`. |

<div class="smt-member-anchors">

##### centerCellX <!-- {docsify-ignore} -->

##### centerCellY <!-- {docsify-ignore} -->

##### radiusCells <!-- {docsify-ignore} -->

##### callback <!-- {docsify-ignore} -->

</div>

Calls the callback for each cell inside a circle.

</div>

<div class="smt-member-card">

### sandkit.api.grid.forEachCellInRectangle :id=foreachcellinrectangle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L127" target="_blank" rel="noopener">grid.d.ts:127</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.forEachCellInRectangle(...args: number, number, number, number, (...args: [CellCoordinates) =&gt; void]): void">

```ts
forEachCellInRectangle(...args: number, number, number, number, (...args: [CellCoordinates) => void]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`, `number`, (...`args`: [`CellCoordinates`](api/shared.player.md?id=cellcoordinates)) =&gt; `void`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Calls the callback for each cell in a rectangle.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.grid.forEachCellInRect~~ :id=foreachcellinrect

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L140" target="_blank" rel="noopener">grid.d.ts:140</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [forEachCellInRectangle](api/sandkit.api.grid.md?id=foreachcellinrectangle) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.grid.forEachCellInRect(...args: number, number, number, number, (...args: [CellCoordinates) =&gt; void]): void">

```ts
forEachCellInRect(...args: number, number, number, number, (...args: [CellCoordinates) => void]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`, `number`, (...`args`: [`CellCoordinates`](api/shared.player.md?id=cellcoordinates)) =&gt; `void`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.grid.getCellIdAtCell :id=getcellidatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L21" target="_blank" rel="noopener">grid.d.ts:21</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.getCellIdAtCell(...args: CellCoordinates): CellId">

```ts
getCellIdAtCell(...args: CellCoordinates): CellId
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the packed cell id at grid coordinates.

[`CellId`](api/shared.nominal.md?id=cellid) Packed cell id for the cell.

</div>

<div class="smt-member-card">

### sandkit.api.grid.isCellEmptyAtCell :id=iscellemptyatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L30" target="_blank" rel="noopener">grid.d.ts:30</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.isCellEmptyAtCell(...args: CellCoordinates): boolean">

```ts
isCellEmptyAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the cell has no element or terrain content.

</div>

<div class="smt-member-card">

### sandkit.api.grid.isTerrainAtCell :id=isterrainatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L39" target="_blank" rel="noopener">grid.d.ts:39</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.isTerrainAtCell(...args: CellCoordinates): boolean">

```ts
isTerrainAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the cell holds terrain (not an element).

</div>

<div class="smt-member-card">

### sandkit.api.grid.reportActivityAtCell :id=reportactivityatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L48" target="_blank" rel="noopener">grid.d.ts:48</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.reportActivityAtCell(...args: CellCoordinates): void">

```ts
reportActivityAtCell(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Mark the cell active for simulation this tick.

</div>

<div class="smt-member-card">

### sandkit.api.grid.excavateAtCell :id=excavateatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L60" target="_blank" rel="noopener">grid.d.ts:60</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.excavateAtCell(...args: number, number, [Vector2, number, ExcavateOptions]): void">

```ts
excavateAtCell(...args: number, number, [Vector2, number, ExcavateOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2), `number`, [`ExcavateOptions`](?id=excavateoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Apply excavation damage and eject velocity at a cell.

</div>

<div class="smt-member-card">

### sandkit.api.grid.getDimensions :id=getdimensions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L68" target="_blank" rel="noopener">grid.d.ts:68</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.getDimensions(): GridDimensions">

```ts
getDimensions(): GridDimensions
```

</div>

Return the world grid size in cells.

[`GridDimensions`](?id=griddimensions)

</div>
