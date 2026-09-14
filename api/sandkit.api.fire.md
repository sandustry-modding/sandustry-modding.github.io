# sandkit.api.fire

`sandkit.api.fire` — ignite and burn elements at grid cells.
Main thread only.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.fire.canBurnElementAtCell :id=canburnelementatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/fire.d.ts#L16" target="_blank" rel="noopener">fire.d.ts:16</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.fire.canBurnElementAtCell(...args: CellCoordinates): boolean">

```ts
canBurnElementAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Returns true when the element at the cell can burn.

</div>

<div class="smt-member-card">

### sandkit.api.fire.burnElementAtCell :id=burnelementatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/fire.d.ts#L25" target="_blank" rel="noopener">fire.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.fire.burnElementAtCell(...args: CellCoordinates): void">

```ts
burnElementAtCell(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Burn the element at the cell. Main-entry writes are deferred; reads see the old grid.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.fire.burnElementAtCellWhenIdle~~ :id=burnelementatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/fire.d.ts#L31" target="_blank" rel="noopener">fire.d.ts:31</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [burnElementAtCell](api/sandkit.api.fire.md?id=burnelementatcell) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.fire.burnElementAtCellWhenIdle(...args: CellCoordinates): void">

```ts
burnElementAtCellWhenIdle(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

</div>
