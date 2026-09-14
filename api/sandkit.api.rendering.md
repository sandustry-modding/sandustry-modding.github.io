# sandkit.api.rendering

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.rendering.getDrawPositionAtCell :id=getdrawpositionatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/rendering.d.ts#L16" target="_blank" rel="noopener">rendering.d.ts:16</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.rendering.getDrawPositionAtCell(...args: CellCoordinates): Vector2">

```ts
getDrawPositionAtCell(...args: CellCoordinates): Vector2
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return screen draw position for a grid cell.

[`Vector2`](api/shared.player.md?id=vector2)

</div>

<div class="smt-member-card">

### sandkit.api.rendering.getDrawPositionAtWorld :id=getdrawpositionatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/rendering.d.ts#L32" target="_blank" rel="noopener">rendering.d.ts:32</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.rendering.getDrawPositionAtWorld(worldX: number, worldY: number): Vector2">

```ts
getDrawPositionAtWorld(worldX: number, worldY: number): Vector2
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` | World x position in pixels. |
| worldY | `number` | World y position in pixels. |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

</div>

Return screen draw position for a world-space point.

[`Vector2`](api/shared.player.md?id=vector2)

#### Example

```ts
api.events.on("frame:render", () => {
  const drawPos = api.rendering.getDrawPositionAtWorld(worldX, worldY);
  drawMarker(drawPos.x, drawPos.y);
});
```

</div>

<div class="smt-member-card">

### sandkit.api.rendering.getGridMetrics :id=getgridmetrics

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/rendering.d.ts#L41" target="_blank" rel="noopener">rendering.d.ts:41</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.rendering.getGridMetrics(): object">

```ts
getGridMetrics(): object
```

</div>

Return cell size and snap grid metrics.

cellSize: number snapGridCellSize: number

#### Example

```ts
const { cellSize, snapGridCellSize } = api.rendering.getGridMetrics();
```

</div>

<div class="smt-member-card">

### sandkit.api.rendering.getOverlayViewportSize :id=getoverlayviewportsize

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/rendering.d.ts#L43" target="_blank" rel="noopener">rendering.d.ts:43</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.rendering.getOverlayViewportSize(): object">

```ts
getOverlayViewportSize(): object
```

</div>

Return overlay viewport width and height in pixels.

width: number height: number

</div>

<div class="smt-member-card">

### sandkit.api.rendering.withOverlayContext :id=withoverlaycontext

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/rendering.d.ts#L55" target="_blank" rel="noopener">rendering.d.ts:55</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.rendering.withOverlayContext&lt;T&gt;(callback: (context: CanvasRenderingContext2D) =&gt; T): T">

```ts
sandkit.api.rendering.withOverlayContext<T>(callback: (context: CanvasRenderingContext2D) => T): T
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| callback | <code>(`context`: `CanvasRenderingContext2D`) =&gt; `T`</code> | Receives the overlay 2D context; return value is passed through. |

<div class="smt-member-anchors">

##### callback <!-- {docsify-ignore} -->

</div>

Run a callback with the overlay canvas context.

#### Example

```ts
api.rendering.withOverlayContext((context) => {
  context.fillRect(0, 0, 16, 16);
});
```

</div>
