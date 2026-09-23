# sandkit.api.discoveries

`sandkit.api.discoveries` — unlock element and terrain entries in the discovery log.
Main thread only.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.discoveries.addElementByType :id=addelementbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/discoveries.d.ts#L13" target="_blank" rel="noopener">discoveries.d.ts:13</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.discoveries.addElementByType(elementType: ElementType): void">

```ts
addElementByType(elementType: ElementType): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementType | <code>[`ElementType`](api/sandkit.api.elements.md?id=elementtype)</code> | Numeric element type id. |

<div class="smt-member-anchors">

##### elementType <!-- {docsify-ignore} -->

</div>

Marks an element type as discovered for the player.

</div>

<div class="smt-member-card">

### sandkit.api.discoveries.addTerrainByType :id=addterrainbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/discoveries.d.ts#L18" target="_blank" rel="noopener">discoveries.d.ts:18</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.discoveries.addTerrainByType(terrainType: TerrainType): void">

```ts
addTerrainByType(terrainType: TerrainType): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| terrainType | <code>[`TerrainType`](api/sandkit.api.terrains.md?id=terraintype)</code> | Numeric terrain type id. |

<div class="smt-member-anchors">

##### terrainType <!-- {docsify-ignore} -->

</div>

Marks a terrain type as discovered for the player.

</div>
