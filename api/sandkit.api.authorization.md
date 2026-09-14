# sandkit.api.authorization

`sandkit.api.authorization` — player permission checks for build, grab, and tools.
Main thread only.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.authorization.canBuildAtCell :id=canbuildatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L14" target="_blank" rel="noopener">authorization.d.ts:14</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.authorization.canBuildAtCell(...args: CellCoordinates): boolean">

```ts
canBuildAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the player may place a structure at the cell.

True when building is allowed in the authorization zone.

</div>

<div class="smt-member-card">

### sandkit.api.authorization.canGrabAtCell :id=cangrabatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L22" target="_blank" rel="noopener">authorization.d.ts:22</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.authorization.canGrabAtCell(...args: CellCoordinates): boolean">

```ts
canGrabAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the player may grab at the cell.

True when grabbing is allowed in the authorization zone.

</div>

<div class="smt-member-card">

### sandkit.api.authorization.canUseTool :id=canusetool

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L30" target="_blank" rel="noopener">authorization.d.ts:30</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.authorization.canUseTool(player: Player, isFlamethrower?: boolean): boolean">

```ts
canUseTool(player: Player, isFlamethrower?: boolean): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| player | <code>[`Player`](api/shared.player.md?id=player)</code> | Player state snapshot. |
| isFlamethrower? | `boolean` | When true, apply flamethrower-specific rules. |

<div class="smt-member-anchors">

##### player <!-- {docsify-ignore} -->

##### isFlamethrower? <!-- {docsify-ignore} -->

</div>

Return true when the player may use a tool.

True when tool use is allowed for the player.

</div>

<div class="smt-member-card">

### sandkit.api.authorization.canUseToolAtCell :id=canusetoolatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L39" target="_blank" rel="noopener">authorization.d.ts:39</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.authorization.canUseToolAtCell(...args: [number, number, boolean]): boolean">

```ts
canUseToolAtCell(...args: [number, number, boolean]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `boolean`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the player may use a tool at the cell.

True when tool use is allowed at the cell.

</div>

<div class="smt-member-card">

### sandkit.api.authorization.getZoneIdAtCell :id=getzoneidatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L49" target="_blank" rel="noopener">authorization.d.ts:49</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.authorization.getZoneIdAtCell(...args: CellCoordinates): number">

```ts
getZoneIdAtCell(...args: CellCoordinates): number
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the authorization zone id at the cell.

Numeric zone id for the cell.

</div>

<div class="smt-member-card">

### sandkit.api.authorization.getPlayerZoneId :id=getplayerzoneid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/authorization.d.ts#L55" target="_blank" rel="noopener">authorization.d.ts:55</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.authorization.getPlayerZoneId(): number">

```ts
getPlayerZoneId(): number
```

</div>

Return the authorization zone id for the player.

Numeric zone id for the player's current position.

</div>
