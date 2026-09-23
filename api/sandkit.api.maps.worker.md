# sandkit.api.maps (worker)

**`Internal`**

Worker-thread `sandkit.api.maps` — active custom map metadata.

 Worker subset; main thread exposes map start and artifact helpers.

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.maps.ActiveMapV1 :id=activemapv1

<p class="smt-member-defined">Defined in: worker/api/maps.d.ts:13</p>

<div class="smt-member-sig" data-sig="sandkit.api.maps.ActiveMapV1 = ActiveMapV1">

```ts
ActiveMapV1 = ActiveMapV1
```

</div>

Active custom map record (version 1 schema).

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.maps.getActive :id=getactive

<p class="smt-member-defined">Defined in: worker/api/maps.d.ts:10</p>

<div class="smt-member-sig" data-sig="sandkit.api.maps.getActive(): Readonly&lt;ActiveMapV1&gt; | null">

```ts
getActive(): Readonly<ActiveMapV1> | null
```

</div>

Return the currently loaded custom map definition.

`Readonly`&lt;[`ActiveMapV1`](api/sandkit.api.maps.md?id=activemapv1)&gt; &#124; `null`

</div>
