# sandkit.api.patterns

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.patterns.PatternExcavateOptions :id=patternexcavateoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/patterns.d.ts#L61" target="_blank" rel="noopener">patterns.d.ts:61</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.patterns.PatternExcavateOptions = ExcavateOptions">

```ts
PatternExcavateOptions = ExcavateOptions
```

</div>

Options for pattern-based excavation. Same shape as [shared.api.world.ExcavateOptions](api/sandkit.api.grid.md?id=excavateoptions).

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.patterns.createCircle :id=createcircle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/patterns.d.ts#L17" target="_blank" rel="noopener">patterns.d.ts:17</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.patterns.createCircle(size: number): number[][]">

```ts
createCircle(size: number): number[][]
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| size | `number` | Pattern width and height in cells. |

<div class="smt-member-anchors">

##### size <!-- {docsify-ignore} -->

</div>

Build a circular excavation pattern matrix for the given size.

`number`[][] Square matrix with `1` inside the circle and `0` outside.

</div>

<div class="smt-member-card">

### sandkit.api.patterns.excavateAtCell :id=excavateatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/patterns.d.ts#L50" target="_blank" rel="noopener">patterns.d.ts:50</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.patterns.excavateAtCell(...args: [number, number, number[][], Vector2, number, ExcavateOptions]): void">

```ts
excavateAtCell(...args: [number, number, number[][], Vector2, number, ExcavateOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`[][], [`Vector2`](api/shared.player.md?id=vector2), `number`, [`ExcavateOptions`](api/sandkit.api.grid.md?id=excavateoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Excavate at a cell using a pattern matrix and output velocity.

#### Examples

**Main entry**

```ts
api.patterns.excavateAtCell(
  cellX,
  cellY,
  api.patterns.createCircle(5),
  { x: 0, y: -120 },
  2,
);
```

**Worker entry**

```ts
api.patterns.excavateAtCell(
  cellX,
  cellY,
  pattern,
  { x: 0, y: -1 },
  10,
);
```

</div>
