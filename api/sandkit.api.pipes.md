# sandkit.api.pipes

Pipe network queries and enablement at grid cells.

Available as `sandkit.api.pipes`.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.pipes.PipeVentCell :id=pipeventcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L48" target="_blank" rel="noopener">pipes.d.ts:48</a></p>

| Property | Type | Description |
| --- | --- | --- |
| cellX | <code>number</code> |  |
| cellY | <code>number</code> |  |

<div class="smt-member-anchors">

##### cellX <!-- {docsify-ignore} -->

##### cellY <!-- {docsify-ignore} -->

</div>

Connected vent cell position.

#### Indexable

```ts
[key: string]: unknown
```

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.pipes.isAtCell :id=isatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L17" target="_blank" rel="noopener">pipes.d.ts:17</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.pipes.isAtCell(...args: CellCoordinates): boolean">

```ts
isAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when a pipe occupies the cell.

</div>

<div class="smt-member-card">

### sandkit.api.pipes.isEnabledAtCell :id=isenabledatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L26" target="_blank" rel="noopener">pipes.d.ts:26</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.pipes.isEnabledAtCell(...args: CellCoordinates): boolean">

```ts
isEnabledAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when pipe flow is enabled at the cell.

</div>

<div class="smt-member-card">

### sandkit.api.pipes.getConnectedVentsAtCell :id=getconnectedventsatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L35" target="_blank" rel="noopener">pipes.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.pipes.getConnectedVentsAtCell(...args: CellCoordinates): readonly PipeVentCell[]">

```ts
getConnectedVentsAtCell(...args: CellCoordinates): readonly PipeVentCell[]
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return connected liquid vent cell positions for the pipe at a cell.

readonly [`PipeVentCell`](?id=pipeventcell)[]

</div>

<div class="smt-member-card">

### sandkit.api.pipes.setEnabledAtCell :id=setenabledatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L45" target="_blank" rel="noopener">pipes.d.ts:45</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.pipes.setEnabledAtCell(...args: [number, number, boolean]): void">

```ts
setEnabledAtCell(...args: [number, number, boolean]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `boolean`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Enable or disable pipe flow at a cell.

</div>
