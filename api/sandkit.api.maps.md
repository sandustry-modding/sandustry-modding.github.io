# sandkit.api.maps

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.maps.ActiveMapV1 :id=activemapv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L23" target="_blank" rel="noopener">maps.d.ts:23</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.maps.ActiveMapV1 = object">

```ts
ActiveMapV1 = object
```

</div>

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

<div class="smt-member-card">

### sandkit.api.maps.ArtifactLocation :id=artifactlocation

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L60" target="_blank" rel="noopener">maps.d.ts:60</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.maps.ArtifactLocation = CellXY &amp; object">

```ts
ArtifactLocation = CellXY & object
```

</div>

Artifact location entry from [getArtifactLocations](?id=getartifactlocations).

#### Type Declaration

##### name

```ts
name: string
```

</div>

<div class="smt-member-card">

### sandkit.api.maps.AvailableMapV1 :id=availablemapv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L65" target="_blank" rel="noopener">maps.d.ts:65</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.maps.AvailableMapV1 = object">

```ts
AvailableMapV1 = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Map identifier passed to [start](?id=start). |
| name? | <code>string</code> | Display name or translation key. |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### name? <!-- {docsify-ignore} -->

</div>

Available map entry shape.

#### Indexable

```ts
[key: string]: unknown
```

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.maps.getActive :id=getactive

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L16" target="_blank" rel="noopener">maps.d.ts:16</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.maps.getActive(): Readonly&lt;ActiveMapV1&gt; | null">

```ts
getActive(): Readonly<ActiveMapV1> | null
```

</div>

Return the currently loaded custom map definition.

`Readonly`&lt;[`ActiveMapV1`](?id=activemapv1)&gt; &#124; `null` Active map metadata, or `null` outside custom maps.

</div>

<div class="smt-member-card">

### sandkit.api.maps.getAvailable :id=getavailable

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L37" target="_blank" rel="noopener">maps.d.ts:37</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.maps.getAvailable(): readonly Readonly&lt;AvailableMapV1&gt;[]">

```ts
getAvailable(): readonly Readonly<AvailableMapV1>[]
```

</div>

Return maps the player can start.

readonly `Readonly`&lt;[`AvailableMapV1`](?id=availablemapv1)&gt;[]

</div>

<div class="smt-member-card">

### sandkit.api.maps.start :id=start

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L42" target="_blank" rel="noopener">maps.d.ts:42</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.maps.start(mapId: string): boolean">

```ts
start(mapId: string): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| mapId | `string` | Custom map identifier. |

<div class="smt-member-anchors">

##### mapId <!-- {docsify-ignore} -->

</div>

Start a map by id. Return true when start succeeds.

</div>

<div class="smt-member-card">

### sandkit.api.maps.getArtifactLocations :id=getartifactlocations

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L57" target="_blank" rel="noopener">maps.d.ts:57</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.maps.getArtifactLocations(): readonly ArtifactLocation[]">

```ts
getArtifactLocations(): readonly ArtifactLocation[]
```

</div>

Return artifact marker locations for the active map.

readonly [`ArtifactLocation`](?id=artifactlocation)[]

#### Example

```ts
api.events.on("game:ready", () => {
  api.maps.getArtifactLocations().forEach(({ cellX, cellY, name }) => {
    addMarker(cellX, cellY, name);
  });
});
```

</div>
