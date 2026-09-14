# sandkit.api.resources

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.resources.collectFluxiteAtCell :id=collectfluxiteatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/resources.d.ts#L16" target="_blank" rel="noopener">resources.d.ts:16</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.resources.collectFluxiteAtCell(...args: CellCoordinates): void">

```ts
collectFluxiteAtCell(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Collect fluxite at the given cell.

</div>

<div class="smt-member-card">

### sandkit.api.resources.updateEnergy :id=updateenergy

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/resources.d.ts#L27" target="_blank" rel="noopener">resources.d.ts:27</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.resources.updateEnergy(amount: number, options?: object): void">

```ts
updateEnergy(amount: number, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| amount | `number` | Energy delta (positive or negative). |
| options? | <code>When `deferUi` is true, skip immediate UI refresh.</code> |  |

<div class="smt-member-anchors">

##### amount <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Update stored energy by amount with optional UI deferral.

#### Example

**Official \`api.resources.adjustEnergy\` (typed deprecated alias: updateEnergy)**

```ts
api.resources.adjustEnergy(100, { deferUi: true });
```

</div>
