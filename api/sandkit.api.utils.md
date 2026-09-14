# sandkit.api.utils

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.utils.getDistance :id=getdistance

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L18" target="_blank" rel="noopener">utils.d.ts:18</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.utils.getDistance(pointA: Vector2, pointB: Vector2): number">

```ts
getDistance(pointA: Vector2, pointB: Vector2): number
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| pointA | <code>[`Vector2`](api/shared.player.md?id=vector2)</code> | First point. |
| pointB | <code>[`Vector2`](api/shared.player.md?id=vector2)</code> | Second point. |

<div class="smt-member-anchors">

##### pointA <!-- {docsify-ignore} -->

##### pointB <!-- {docsify-ignore} -->

</div>

Return distance between two points.

</div>

<div class="smt-member-card">

### sandkit.api.utils.getDirection :id=getdirection

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L27" target="_blank" rel="noopener">utils.d.ts:27</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.utils.getDirection(pointA: Vector2, pointB: Vector2): Vector2">

```ts
getDirection(pointA: Vector2, pointB: Vector2): Vector2
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| pointA | <code>[`Vector2`](api/shared.player.md?id=vector2)</code> | Origin point. |
| pointB | <code>[`Vector2`](api/shared.player.md?id=vector2)</code> | Target point. |

<div class="smt-member-anchors">

##### pointA <!-- {docsify-ignore} -->

##### pointB <!-- {docsify-ignore} -->

</div>

Return normalized direction from point A to point B.

[`Vector2`](api/shared.player.md?id=vector2)

</div>

<div class="smt-member-card">

### sandkit.api.utils.getAngle :id=getangle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L36" target="_blank" rel="noopener">utils.d.ts:36</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.utils.getAngle(pointA: Vector2, pointB: Vector2): number">

```ts
getAngle(pointA: Vector2, pointB: Vector2): number
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| pointA | <code>[`Vector2`](api/shared.player.md?id=vector2)</code> | Origin point. |
| pointB | <code>[`Vector2`](api/shared.player.md?id=vector2)</code> | Target point. |

<div class="smt-member-anchors">

##### pointA <!-- {docsify-ignore} -->

##### pointB <!-- {docsify-ignore} -->

</div>

Return angle in radians from point A to point B.

</div>

<div class="smt-member-card">

### sandkit.api.utils.getCoordinatesBetweenCells :id=getcoordinatesbetweencells

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L45" target="_blank" rel="noopener">utils.d.ts:45</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.utils.getCoordinatesBetweenCells(pointA: Vector2, pointB: Vector2): Vector2[]">

```ts
getCoordinatesBetweenCells(pointA: Vector2, pointB: Vector2): Vector2[]
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| pointA | <code>[`Vector2`](api/shared.player.md?id=vector2)</code> | Line start in cell coordinates. |
| pointB | <code>[`Vector2`](api/shared.player.md?id=vector2)</code> | Line end in cell coordinates. |

<div class="smt-member-anchors">

##### pointA <!-- {docsify-ignore} -->

##### pointB <!-- {docsify-ignore} -->

</div>

Return grid cells along a line between two points.

[`Vector2`](api/shared.player.md?id=vector2)[]

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.utils.getCoordinatesBetweenPoints~~ :id=getcoordinatesbetweenpoints

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/utils.d.ts#L51" target="_blank" rel="noopener">utils.d.ts:51</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [getCoordinatesBetweenCells](api/sandkit.api.utils.md?id=getcoordinatesbetweencells) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.utils.getCoordinatesBetweenPoints(pointA: Vector2, pointB: Vector2): Vector2[]">

```ts
getCoordinatesBetweenPoints(pointA: Vector2, pointB: Vector2): Vector2[]
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| pointA | <code>[`Vector2`](api/shared.player.md?id=vector2)</code> |  |
| pointB | <code>[`Vector2`](api/shared.player.md?id=vector2)</code> |  |

<div class="smt-member-anchors">

##### pointA <!-- {docsify-ignore} -->

##### pointB <!-- {docsify-ignore} -->

</div>

[`Vector2`](api/shared.player.md?id=vector2)[]

</div>
