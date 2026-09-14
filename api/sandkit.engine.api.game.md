# sandkit.engine.api.game

**`Internal`**

`sandkit.engine.api.game` — game session start, save, and load.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.game.load :id=load

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/game.d.ts#L15" target="_blank" rel="noopener">game.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.game.load(...args: unknown[]): unknown">

```ts
load(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Load a saved game into the session.

</div>

<div class="smt-member-card">

### sandkit.engine.api.game.save :id=save

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/game.d.ts#L20" target="_blank" rel="noopener">game.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.game.save(...args: unknown[]): unknown">

```ts
save(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Save the current session.

</div>

<div class="smt-member-card">

### sandkit.engine.api.game.start :id=start

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/game.d.ts#L25" target="_blank" rel="noopener">game.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.game.start(...args: unknown[]): unknown">

```ts
start(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Start a new game session.

</div>
