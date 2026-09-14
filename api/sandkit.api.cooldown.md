# sandkit.api.cooldown

`sandkit.api.cooldown` — reusable cooldown timers for abilities and items.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.cooldown.Cooldown :id=cooldown

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/cooldown.d.ts#L20" target="_blank" rel="noopener">cooldown.d.ts:20</a></p>

| Property | Type | Description |
| --- | --- | --- |
| last | <code>number</code> | Timestamp when the cooldown was last triggered (game time). |
| time | <code>number</code> | Cooldown duration in milliseconds. |

<div class="smt-member-anchors">

##### last <!-- {docsify-ignore} -->

##### time <!-- {docsify-ignore} -->

</div>

Cooldown state object passed to [check](?id=check) and [isReady](?id=isready).

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.cooldown.check :id=check

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/cooldown.d.ts#L11" target="_blank" rel="noopener">cooldown.d.ts:11</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.cooldown.check(cooldown: Cooldown, overrideTime?: number): boolean">

```ts
check(cooldown: Cooldown, overrideTime?: number): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| cooldown | <code>[`Cooldown`](?id=cooldown)</code> | Cooldown state object to check and update. |
| overrideTime? | `number` | Optional timestamp (ms) instead of current game time. |

<div class="smt-member-anchors">

##### cooldown <!-- {docsify-ignore} -->

##### overrideTime? <!-- {docsify-ignore} -->

</div>

Starts the cooldown when ready and returns true; otherwise returns false.

</div>

<div class="smt-member-card">

### sandkit.api.cooldown.isReady :id=isready

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/cooldown.d.ts#L17" target="_blank" rel="noopener">cooldown.d.ts:17</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.cooldown.isReady(cooldown: Cooldown, overrideTime?: number): boolean">

```ts
isReady(cooldown: Cooldown, overrideTime?: number): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| cooldown | <code>[`Cooldown`](?id=cooldown)</code> | Cooldown state object to check. |
| overrideTime? | `number` | Optional timestamp (ms) instead of current game time. |

<div class="smt-member-anchors">

##### cooldown <!-- {docsify-ignore} -->

##### overrideTime? <!-- {docsify-ignore} -->

</div>

Returns true when the cooldown has elapsed.

</div>
