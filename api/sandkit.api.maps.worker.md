# sandkit.api.maps (worker)

**`Internal`**

Shared `sandkit.api.maps` base — active custom map metadata.

 Base namespace reused by main and worker declarations.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.maps.ActiveMapV1 :id=activemapv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/maps.d.ts#L18" target="_blank" rel="noopener">maps.d.ts:18</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id? | <code>string</code> |  |
| deployment? | <code>unknown</code> |  |
| spawn? | <code>unknown</code> |  |
| topBounds? | <code>{ soft: number; hard: number }</code> |  |
| parallax? | <code>unknown</code> |  |
| depthLight? | <code>unknown</code> |  |

<div class="smt-member-anchors">

##### id? <!-- {docsify-ignore} -->

##### deployment? <!-- {docsify-ignore} -->

##### spawn? <!-- {docsify-ignore} -->

##### topBounds? <!-- {docsify-ignore} -->

##### parallax? <!-- {docsify-ignore} -->

##### depthLight? <!-- {docsify-ignore} -->

</div>

Active custom map record (version 1 schema).

Shape varies by map. Known fields are optional; additional keys may exist.

#### Indexable

```ts
[key: string]: unknown
```

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.maps.getActive :id=getactive

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/maps.d.ts#L11" target="_blank" rel="noopener">maps.d.ts:11</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.maps.getActive(): Readonly&lt;ActiveMapV1&gt; | null">

```ts
getActive(): Readonly<ActiveMapV1> | null
```

</div>

Return the currently loaded custom map definition.

`Readonly`&lt;[`ActiveMapV1`](?id=activemapv1)&gt; &#124; `null` Active map metadata, or `null` outside custom maps.

</div>
