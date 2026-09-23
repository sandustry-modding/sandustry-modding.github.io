# sandkit.api.grid (worker)

**`Internal`**

Worker-thread `sandkit.api.grid` — grid reads, activity, and excavation.

Worker mutations are immediate. Main thread defers grid writes through `api.grid.mutate`.

 Worker subset; do not import main-thread [sandkit.api.grid](api/sandkit.md?id=grid) iteration helpers here.

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.grid.ExcavateOptions :id=excavateoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/grid.d.ts#L40" target="_blank" rel="noopener">grid.d.ts:40</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.ExcavateOptions = ExcavateOptions">

```ts
ExcavateOptions = ExcavateOptions
```

</div>

Options for [excavateAtCell](?id=excavateatcell).

</div>

<div class="smt-member-card">

### sandkit.api.grid.CellId :id=cellid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/grid.d.ts#L42" target="_blank" rel="noopener">grid.d.ts:42</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.CellId = CellId">

```ts
CellId = CellId
```

</div>

Packed cell id from [getCellIdAtCell](?id=getcellidatcell).

</div>

<div class="smt-member-card">

### sandkit.api.grid.GridDimensions :id=griddimensions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/grid.d.ts#L44" target="_blank" rel="noopener">grid.d.ts:44</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.GridDimensions = GridDimensions">

```ts
GridDimensions = GridDimensions
```

</div>

World grid width and height in cells.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.grid.getCellIdAtCell :id=getcellidatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/grid.d.ts#L13" target="_blank" rel="noopener">grid.d.ts:13</a></p>

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

[`CellId`](api/shared.nominal.md?id=cellid)

</div>

<div class="smt-member-card">

### sandkit.api.grid.isCellEmptyAtCell :id=iscellemptyatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/grid.d.ts#L16" target="_blank" rel="noopener">grid.d.ts:16</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/grid.d.ts#L19" target="_blank" rel="noopener">grid.d.ts:19</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/grid.d.ts#L22" target="_blank" rel="noopener">grid.d.ts:22</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/grid.d.ts#L25" target="_blank" rel="noopener">grid.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.excavateAtCell(...args: number, number, [Vector2, number, ExcavateOptions]): void">

```ts
excavateAtCell(...args: number, number, [Vector2, number, ExcavateOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2), `number`, [`ExcavateOptions`](api/sandkit.api.grid.md?id=excavateoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Apply excavation damage and eject velocity at a cell.

</div>

<div class="smt-member-card">

### sandkit.api.grid.getDimensions :id=getdimensions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/grid.d.ts#L37" target="_blank" rel="noopener">grid.d.ts:37</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.getDimensions(): GridDimensions">

```ts
getDimensions(): GridDimensions
```

</div>

Return the world grid size in cells.

[`GridDimensions`](api/sandkit.api.grid.md?id=griddimensions)

#### Example

**Worker entry**

```ts
const { widthCells, heightCells } = api.grid.getDimensions();
```

</div>
