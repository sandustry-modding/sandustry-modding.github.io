# sandkit.api.assets

`sandkit.api.assets` — mod asset URLs and asset provider selection.
Main thread only.

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.assets.AssetProviderV1 :id=assetproviderv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L7" target="_blank" rel="noopener">assets.d.ts:7</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.assets.AssetProviderV1 = object">

```ts
AssetProviderV1 = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| id | ` ${string}:${string}:${string} ` |  |
| kind | <code>string</code> |  |
| localId? | <code>string</code> |  |
| modId? | <code>number</code> |  |
| modName | <code>string</code> |  |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### kind <!-- {docsify-ignore} -->

##### localId? <!-- {docsify-ignore} -->

##### modId? <!-- {docsify-ignore} -->

##### modName <!-- {docsify-ignore} -->

</div>

Describes a mod or pack that supplies assets for a kind.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.assets.getUrl :id=geturl

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L18" target="_blank" rel="noopener">assets.d.ts:18</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.assets.getUrl(relativePath: string): string">

```ts
getUrl(relativePath: string): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| relativePath | `string` | Path relative to the calling mod folder. |

<div class="smt-member-anchors">

##### relativePath <!-- {docsify-ignore} -->

</div>

Resolves a path under the mod folder to a loadable URL.

</div>

<div class="smt-member-card">

### sandkit.api.assets.getSelectedProvider :id=getselectedprovider

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L23" target="_blank" rel="noopener">assets.d.ts:23</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.assets.getSelectedProvider(kind: string): AssetProviderV1 | null">

```ts
getSelectedProvider(kind: string): AssetProviderV1 | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| kind | `string` | Asset kind identifier. |

<div class="smt-member-anchors">

##### kind <!-- {docsify-ignore} -->

</div>

Returns the selected provider for an asset kind, or null.

[`AssetProviderV1`](?id=assetproviderv1) &#124; `null`

</div>

<div class="smt-member-card">

### sandkit.api.assets.selectProvider :id=selectprovider

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/assets.d.ts#L29" target="_blank" rel="noopener">assets.d.ts:29</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.assets.selectProvider(kind: string, providerId: string | null): boolean">

```ts
selectProvider(kind: string, providerId: string | null): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| kind | `string` | Asset kind identifier. |
| providerId | `string` &#124; `null` | Provider id from [getSelectedProvider](?id=getselectedprovider), or null to clear. |

<div class="smt-member-anchors">

##### kind <!-- {docsify-ignore} -->

##### providerId <!-- {docsify-ignore} -->

</div>

Selects a provider for an asset kind. Returns true on success.

</div>
