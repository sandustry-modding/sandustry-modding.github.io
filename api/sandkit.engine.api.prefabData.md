# sandkit.engine.api.prefabData

**`Internal`**

`sandkit.engine.api.prefabData` — prefab artifact and metadata lookup.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.prefabData.getAll :id=getall

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabData.d.ts#L15" target="_blank" rel="noopener">prefabData.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.prefabData.getAll(...args: unknown[]): unknown">

```ts
getAll(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return all prefab data entries.

</div>

<div class="smt-member-card">

### sandkit.engine.api.prefabData.getAllMetadata :id=getallmetadata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabData.d.ts#L20" target="_blank" rel="noopener">prefabData.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.prefabData.getAllMetadata(...args: unknown[]): unknown">

```ts
getAllMetadata(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return metadata for all prefabs.

</div>

<div class="smt-member-card">

### sandkit.engine.api.prefabData.getArtifactLocations :id=getartifactlocations

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabData.d.ts#L25" target="_blank" rel="noopener">prefabData.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.prefabData.getArtifactLocations(...args: unknown[]): unknown">

```ts
getArtifactLocations(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return artifact locations for prefabs.

</div>

<div class="smt-member-card">

### sandkit.engine.api.prefabData.getAtCell :id=getatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabData.d.ts#L30" target="_blank" rel="noopener">prefabData.d.ts:30</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.prefabData.getAtCell(...args: unknown[]): unknown">

```ts
getAtCell(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return prefab data at one grid cell.

</div>

<div class="smt-member-card">

### sandkit.engine.api.prefabData.getMetadata :id=getmetadata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabData.d.ts#L35" target="_blank" rel="noopener">prefabData.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.prefabData.getMetadata(...args: unknown[]): unknown">

```ts
getMetadata(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return metadata for one prefab.

</div>
