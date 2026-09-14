# sandkit.engine.api.heatTransfer

**`Internal`**

`sandkit.engine.api.heatTransfer` — temperature diffusion and absorption.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.heatTransfer.absorbAdjacentElements :id=absorbadjacentelements

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/heatTransfer.d.ts#L15" target="_blank" rel="noopener">heatTransfer.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.heatTransfer.absorbAdjacentElements(...args: unknown[]): unknown">

```ts
absorbAdjacentElements(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Absorb heat from adjacent elements into a cell.

</div>

<div class="smt-member-card">

### sandkit.engine.api.heatTransfer.addTemperature :id=addtemperature

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/heatTransfer.d.ts#L20" target="_blank" rel="noopener">heatTransfer.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.heatTransfer.addTemperature(...args: unknown[]): unknown">

```ts
addTemperature(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Add temperature to a cell or region.

</div>

<div class="smt-member-card">

### sandkit.engine.api.heatTransfer.computeDiffusedTemperatures :id=computediffusedtemperatures

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/heatTransfer.d.ts#L25" target="_blank" rel="noopener">heatTransfer.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.heatTransfer.computeDiffusedTemperatures(...args: unknown[]): unknown">

```ts
computeDiffusedTemperatures(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Compute diffused temperatures for connected cells.

</div>

<div class="smt-member-card">

### sandkit.engine.api.heatTransfer.computeEqualizedTemperature :id=computeequalizedtemperature

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/heatTransfer.d.ts#L30" target="_blank" rel="noopener">heatTransfer.d.ts:30</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.heatTransfer.computeEqualizedTemperature(...args: unknown[]): unknown">

```ts
computeEqualizedTemperature(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Compute one equalized temperature across connected cells.

</div>

<div class="smt-member-card">

### sandkit.engine.api.heatTransfer.consumeTemperatureNear :id=consumetemperaturenear

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/heatTransfer.d.ts#L35" target="_blank" rel="noopener">heatTransfer.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.heatTransfer.consumeTemperatureNear(...args: unknown[]): unknown">

```ts
consumeTemperatureNear(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Consume temperature near a point or cell.

</div>

<div class="smt-member-card">

### sandkit.engine.api.heatTransfer.ensureTemperature :id=ensuretemperature

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/heatTransfer.d.ts#L40" target="_blank" rel="noopener">heatTransfer.d.ts:40</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.heatTransfer.ensureTemperature(...args: unknown[]): unknown">

```ts
ensureTemperature(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Ensure a cell has at least the given temperature.

</div>

<div class="smt-member-card">

### sandkit.engine.api.heatTransfer.equalizeConnected :id=equalizeconnected

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/heatTransfer.d.ts#L45" target="_blank" rel="noopener">heatTransfer.d.ts:45</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.heatTransfer.equalizeConnected(...args: unknown[]): unknown">

```ts
equalizeConnected(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Equalize temperature across a connected component.

</div>
