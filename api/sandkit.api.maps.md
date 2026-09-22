# sandkit.api.maps

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.maps.ArtifactLocation :id=artifactlocation

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L42" target="_blank" rel="noopener">maps.d.ts:42</a></p>

| Property | Type | Description |
| --- | --- | --- |
| name | <code>string</code> |  |
| cellX | <code>number</code> | Cell column. |
| cellY | <code>number</code> | Cell row. |

<div class="smt-member-anchors">

##### name <!-- {docsify-ignore} -->

##### cellX <!-- {docsify-ignore} -->

##### cellY <!-- {docsify-ignore} -->

</div>

Artifact location entry from [getArtifactLocations](?id=getartifactlocations).

#### Extends

- [`CellXY`](api/shared.player.md?id=cellxy)

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.maps.AvailableMapV1 :id=availablemapv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L48" target="_blank" rel="noopener">maps.d.ts:48</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L19" target="_blank" rel="noopener">maps.d.ts:19</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L24" target="_blank" rel="noopener">maps.d.ts:24</a></p>

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

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/maps.d.ts#L39" target="_blank" rel="noopener">maps.d.ts:39</a></p>

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
