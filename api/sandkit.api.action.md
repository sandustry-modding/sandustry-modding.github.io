# sandkit.api.action

`sandkit.api.action` — active hotbar action and custom handler data.
Main thread only.

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.action.Action :id=action

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L9" target="_blank" rel="noopener">action.d.ts:9</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.action.Action = AssetRef">

```ts
Action = AssetRef
```

</div>

Hotbar action asset reference.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.action.getActive :id=getactive

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L15" target="_blank" rel="noopener">action.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.action.getActive(): AssetRef">

```ts
getActive(): AssetRef
```

</div>

Return the action slot the player is using.

[`AssetRef`](api/shared.asset.md?id=assetref) Active hotbar action reference.

</div>

<div class="smt-member-card">

### sandkit.api.action.getSelected :id=getselected

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L21" target="_blank" rel="noopener">action.d.ts:21</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.action.getSelected(): AssetRef">

```ts
getSelected(): AssetRef
```

</div>

Return the action slot selected in the hotbar.

[`AssetRef`](api/shared.asset.md?id=assetref) Selected hotbar action reference.

</div>

<div class="smt-member-card">

### sandkit.api.action.setCustomData :id=setcustomdata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/action.d.ts#L32" target="_blank" rel="noopener">action.d.ts:32</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.action.setCustomData&lt;Input&gt;(data: Input): void">

```ts
sandkit.api.action.setCustomData<Input>(data: Input): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| data | `Input` | Serializable payload attached to the active action. |

<div class="smt-member-anchors">

##### data <!-- {docsify-ignore} -->

</div>

Store custom data on the active action handler.

#### Example

```ts
api.action.setCustomData({ mode: "example" });
```

</div>
