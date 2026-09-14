# sandkit.api.maps

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.maps.ArtifactLocation :id=artifactlocation

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L41" target="_blank" rel="noopener">maps.d.ts:41</a></p>

| Property | Type | Description |
| --- | --- | --- |
| cellX | <code>number</code> |  |
| cellY | <code>number</code> |  |
| name | <code>string</code> |  |

<div class="smt-member-anchors">

##### cellX <!-- {docsify-ignore} -->

##### cellY <!-- {docsify-ignore} -->

##### name <!-- {docsify-ignore} -->

</div>

Artifact location entry from [getArtifactLocations](?id=getartifactlocations).

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.maps.AvailableMapV1 :id=availablemapv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L49" target="_blank" rel="noopener">maps.d.ts:49</a></p>

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

### sandkit.api.maps.getAvailable :id=getavailable

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L18" target="_blank" rel="noopener">maps.d.ts:18</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L23" target="_blank" rel="noopener">maps.d.ts:23</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L38" target="_blank" rel="noopener">maps.d.ts:38</a></p>

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
