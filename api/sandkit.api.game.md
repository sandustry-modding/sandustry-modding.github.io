# sandkit.api.game

Game session start helpers.

Available as `sandkit.api.game`.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.game.GameStartOptions :id=gamestartoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/game.d.ts#L22" target="_blank" rel="noopener">game.d.ts:22</a></p>

| Property | Type | Description |
| --- | --- | --- |
| skipIntro? | <code>boolean</code> | When true, skip the intro sequence. |

<div class="smt-member-anchors">

##### skipIntro? <!-- {docsify-ignore} -->

</div>

Options for [start](?id=start).

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.game.start :id=start

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/game.d.ts#L19" target="_blank" rel="noopener">game.d.ts:19</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.game.start(options?: GameStartOptions): void">

```ts
start(options?: GameStartOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| options? | <code>[`GameStartOptions`](?id=gamestartoptions)</code> | Optional session start flags. |

<div class="smt-member-anchors">

##### options? <!-- {docsify-ignore} -->

</div>

Start or restart the game session.

#### Example

```ts
api.game.start({ skipIntro: true });
```

</div>
