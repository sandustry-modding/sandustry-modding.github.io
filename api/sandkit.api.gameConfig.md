# sandkit.api.gameConfig

`sandkit.api.gameConfig` — read merged game configuration values.
Main thread only.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.gameConfig.get :id=get

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/gameconfig.d.ts#L12" target="_blank" rel="noopener">gameconfig.d.ts:12</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.gameConfig.get(key: string): JsonValueV1 | undefined">

```ts
get(key: string): JsonValueV1 | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Game config key (merged defaults and overrides). |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

</div>

Returns a config value by key, or undefined when missing.

[`JsonValueV1`](api/shared.jsonvalue.md?id=jsonvaluev1) &#124; `undefined`

</div>

<div class="smt-member-card">

### sandkit.api.gameConfig.getAll :id=getall

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/gameconfig.d.ts#L14" target="_blank" rel="noopener">gameconfig.d.ts:14</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.gameConfig.getAll(): JsonObjectV1">

```ts
getAll(): JsonObjectV1
```

</div>

Returns the full config object.

[`JsonObjectV1`](api/shared.jsonvalue.md?id=jsonobjectv1)

</div>
