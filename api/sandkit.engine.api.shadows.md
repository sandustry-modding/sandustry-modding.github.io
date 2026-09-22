# sandkit.engine.api.shadows

**`Internal`**

`sandkit.engine.api.shadows` — shadow map refresh for regions.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods take [SandkitState](api/sandkit.engine.md?id=sandkitstate) as the first argument.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.shadows.refresh :id=refresh

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/shadows.d.ts#L19" target="_blank" rel="noopener">shadows.d.ts:19</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.shadows.refresh(state: SandkitState, cellX: number, cellY: number): void">

```ts
refresh(state: SandkitState, cellX: number, cellY: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| state | <code>[`SandkitState`](api/sandkit.engine.md?id=sandkitstate)</code> | Live game state (`sandkit.engine.state`). |
| cellX | `number` | Grid column of the target cell. |
| cellY | `number` | Grid row of the target cell. |

<div class="smt-member-anchors">

##### state <!-- {docsify-ignore} -->

##### cellX <!-- {docsify-ignore} -->

##### cellY <!-- {docsify-ignore} -->

</div>

Recompute the shadow value at one world cell.

</div>

<div class="smt-member-card">

### sandkit.engine.api.shadows.refreshRadius :id=refreshradius

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/shadows.d.ts#L29" target="_blank" rel="noopener">shadows.d.ts:29</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.shadows.refreshRadius(state: SandkitState, cellX: number, cellY: number, radius?: number): void">

```ts
refreshRadius(state: SandkitState, cellX: number, cellY: number, radius?: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| state | <code>[`SandkitState`](api/sandkit.engine.md?id=sandkitstate)</code> | Live game state (`sandkit.engine.state`). |
| cellX | `number` | Grid column at the center of the region. |
| cellY | `number` | Grid row at the center of the region. |
| radius? | `number` | Half-width of the square in cells (default `8`). |

<div class="smt-member-anchors">

##### state <!-- {docsify-ignore} -->

##### cellX <!-- {docsify-ignore} -->

##### cellY <!-- {docsify-ignore} -->

##### radius? <!-- {docsify-ignore} -->

</div>

Recompute shadows in a square neighborhood around a cell.

</div>

<div class="smt-member-card">

### sandkit.engine.api.shadows.refreshRect :id=refreshrect

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/shadows.d.ts#L46" target="_blank" rel="noopener">shadows.d.ts:46</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.shadows.refreshRect(state: SandkitState, minCellX: number, minCellY: number, maxCellX: number, maxCellY: number, padding?: number): void">

```ts
refreshRect(state: SandkitState, minCellX: number, minCellY: number, maxCellX: number, maxCellY: number, padding?: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| state | <code>[`SandkitState`](api/sandkit.engine.md?id=sandkitstate)</code> | Live game state (`sandkit.engine.state`). |
| minCellX | `number` | Inclusive minimum column. |
| minCellY | `number` | Inclusive minimum row. |
| maxCellX | `number` | Inclusive maximum column. |
| maxCellY | `number` | Inclusive maximum row. |
| padding? | `number` | Extra cells expanded on each side before refresh (default `8`). |

<div class="smt-member-anchors">

##### state <!-- {docsify-ignore} -->

##### minCellX <!-- {docsify-ignore} -->

##### minCellY <!-- {docsify-ignore} -->

##### maxCellX <!-- {docsify-ignore} -->

##### maxCellY <!-- {docsify-ignore} -->

##### padding? <!-- {docsify-ignore} -->

</div>

Recompute shadows in an axis-aligned rectangle of cells.

</div>
