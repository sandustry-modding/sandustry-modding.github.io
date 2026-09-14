# sandkit.api.fire (worker)

**`Internal`**

Worker-thread `sandkit.api.fire` — ignite and burn elements at grid cells.

Worker burns are immediate. Main thread defers burns with `burnElementAtCell`.

 Worker-only surface; do not use main-thread [sandkit.api.fire](api/sandkit.md?id=fire).

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.fire.canBurnElementAtCell :id=canburnelementatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/fire.d.ts#L18" target="_blank" rel="noopener">fire.d.ts:18</a></p>

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

Return true when the element at the cell can burn.

</div>

<div class="smt-member-card">

### sandkit.api.fire.burnElementAtCell :id=burnelementatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/fire.d.ts#L28" target="_blank" rel="noopener">fire.d.ts:28</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.fire.burnElementAtCell(...args: CellCoordinates): boolean">

```ts
burnElementAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Burn the element at the cell immediately on this worker.

True when the burn succeeded.

</div>
