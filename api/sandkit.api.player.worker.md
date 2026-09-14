# sandkit.api.player (worker)

**`Internal`**

Shared `sandkit.api.player` base — player position and collision queries.

 Base namespace reused by main and worker declarations.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.player.getPositionAtWorld :id=getpositionatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L15" target="_blank" rel="noopener">player.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.getPositionAtWorld(): Vector2">

```ts
getPositionAtWorld(): Vector2
```

</div>

Return the player center position in world pixels.

[`Vector2`](api/shared.player.md?id=vector2) World position as `{ x, y }` in pixels.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.player.getWorldPosition~~ :id=getworldposition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L21" target="_blank" rel="noopener">player.d.ts:21</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [getPositionAtWorld](api/sandkit.api.player.worker.md?id=getpositionatworld) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.player.getWorldPosition(): Vector2">

```ts
getWorldPosition(): Vector2
```

</div>

[`Vector2`](api/shared.player.md?id=vector2)

</div>

<div class="smt-member-card">

### sandkit.api.player.isCollidingWithCell :id=iscollidingwithcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L31" target="_blank" rel="noopener">player.d.ts:31</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.isCollidingWithCell(...args: CellCoordinates): boolean">

```ts
isCollidingWithCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the player hitbox overlaps the cell.

True when the player overlaps the cell.

</div>

<div class="smt-member-card">

### sandkit.api.player.isWithinRadiusOfCell :id=iswithinradiusofcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L42" target="_blank" rel="noopener">player.d.ts:42</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.isWithinRadiusOfCell(...args: [number, number, number]): boolean">

```ts
isWithinRadiusOfCell(...args: [number, number, number]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the player is within `radius` cells of the point.

True when the player is inside the radius.

</div>
