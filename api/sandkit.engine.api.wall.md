# sandkit.engine.api.wall

**`Internal`**

`sandkit.engine.api.wall` — wall tile palette and cell data.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.wall.getPaletteData :id=getpalettedata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/wall.d.ts#L15" target="_blank" rel="noopener">wall.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.wall.getPaletteData(...args: unknown[]): unknown">

```ts
getPaletteData(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return wall palette data for rendering.

</div>

<div class="smt-member-card">

### sandkit.engine.api.wall.getWallDataAt :id=getwalldataat

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/wall.d.ts#L20" target="_blank" rel="noopener">wall.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.wall.getWallDataAt(...args: unknown[]): unknown">

```ts
getWallDataAt(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return wall tile data at one cell.

</div>

<div class="smt-member-card">

### sandkit.engine.api.wall.getWallDataSize :id=getwalldatasize

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/wall.d.ts#L25" target="_blank" rel="noopener">wall.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.wall.getWallDataSize(...args: unknown[]): unknown">

```ts
getWallDataSize(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the byte size of wall tile data.

</div>

<div class="smt-member-card">

### sandkit.engine.api.wall.setWallDataAt :id=setwalldataat

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/wall.d.ts#L30" target="_blank" rel="noopener">wall.d.ts:30</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.wall.setWallDataAt(...args: unknown[]): unknown">

```ts
setWallDataAt(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set wall tile data at one cell.

</div>
