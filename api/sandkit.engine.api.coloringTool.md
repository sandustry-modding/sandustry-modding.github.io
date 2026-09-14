# sandkit.engine.api.coloringTool

**`Internal`**

`sandkit.engine.api.coloringTool` — paint-bucket and flood-fill structure coloring.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.coloringTool.colorStructure :id=colorstructure

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L15" target="_blank" rel="noopener">coloringTool.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.coloringTool.colorStructure(...args: unknown[]): unknown">

```ts
colorStructure(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Apply a color to one structure.

</div>

<div class="smt-member-card">

### sandkit.engine.api.coloringTool.floodFillColor :id=floodfillcolor

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L20" target="_blank" rel="noopener">coloringTool.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.coloringTool.floodFillColor(...args: unknown[]): unknown">

```ts
floodFillColor(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Flood-fill connected structures with a color.

</div>

<div class="smt-member-card">

### sandkit.engine.api.coloringTool.getColor :id=getcolor

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L25" target="_blank" rel="noopener">coloringTool.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.coloringTool.getColor(...args: unknown[]): unknown">

```ts
getColor(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the color on a structure.

</div>

<div class="smt-member-card">

### sandkit.engine.api.coloringTool.isColorableStructure :id=iscolorablestructure

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L30" target="_blank" rel="noopener">coloringTool.d.ts:30</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.coloringTool.isColorableStructure(...args: unknown[]): unknown">

```ts
isColorableStructure(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether a structure can be colored.

</div>

<div class="smt-member-card">

### sandkit.engine.api.coloringTool.isMatchColorMode :id=ismatchcolormode

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L35" target="_blank" rel="noopener">coloringTool.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.coloringTool.isMatchColorMode(...args: unknown[]): unknown">

```ts
isMatchColorMode(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether match-color mode is active.

</div>

<div class="smt-member-card">

### sandkit.engine.api.coloringTool.isPaintBucketMode :id=ispaintbucketmode

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L40" target="_blank" rel="noopener">coloringTool.d.ts:40</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.coloringTool.isPaintBucketMode(...args: unknown[]): unknown">

```ts
isPaintBucketMode(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether paint-bucket mode is active.

</div>

<div class="smt-member-card">

### sandkit.engine.api.coloringTool.setColor :id=setcolor

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L45" target="_blank" rel="noopener">coloringTool.d.ts:45</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.coloringTool.setColor(...args: unknown[]): unknown">

```ts
setColor(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set the color on a structure.

</div>

<div class="smt-member-card">

### sandkit.engine.api.coloringTool.toggleMatchColorMode :id=togglematchcolormode

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L50" target="_blank" rel="noopener">coloringTool.d.ts:50</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.coloringTool.toggleMatchColorMode(...args: unknown[]): unknown">

```ts
toggleMatchColorMode(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Toggle match-color mode on or off.

</div>

<div class="smt-member-card">

### sandkit.engine.api.coloringTool.togglePaintBucketMode :id=togglepaintbucketmode

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L55" target="_blank" rel="noopener">coloringTool.d.ts:55</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.coloringTool.togglePaintBucketMode(...args: unknown[]): unknown">

```ts
togglePaintBucketMode(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Toggle paint-bucket mode on or off.

</div>
