# sandkit.api.mods

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.mods.AssetProviderV1 :id=assetproviderv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/mods.d.ts#L17" target="_blank" rel="noopener">mods.d.ts:17</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.mods.AssetProviderV1 = AssetProviderV1">

```ts
AssetProviderV1 = AssetProviderV1
```

</div>

Asset provider entry shape.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.mods.getProviders :id=getproviders

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/mods.d.ts#L15" target="_blank" rel="noopener">mods.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.mods.getProviders(kind: string): readonly AssetProviderV1[]">

```ts
getProviders(kind: string): readonly AssetProviderV1[]
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| kind | `string` | Asset kind identifier (e.g. texture pack category). |

<div class="smt-member-anchors">

##### kind <!-- {docsify-ignore} -->

</div>

Return asset providers registered for a kind string.

readonly [`AssetProviderV1`](api/sandkit.api.assets.md?id=assetproviderv1)[]

</div>
