# sandkit.api.ui.hotbar

Hotbar bank sources, selection, and slot queries.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.ui.hotbar.createBankSource :id=createbanksource

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L248" target="_blank" rel="noopener">ui.d.ts:248</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.hotbar.createBankSource(options: HotbarBankSourceOptions): HotbarBankSource">

```ts
createBankSource(options: HotbarBankSourceOptions): HotbarBankSource
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| options | <code>[`HotbarBankSourceOptions`](api/sandkit.api.ui.md?id=hotbarbanksourceoptions)</code> | Bank offset and optional minimum bank count. |

<div class="smt-member-anchors">

##### options <!-- {docsify-ignore} -->

</div>

Create a hotbar bank source for extra action banks.

[`HotbarBankSource`](api/sandkit.api.ui.md?id=hotbarbanksource) Source used by [components.ActionSlot](api/sandkit.api.ui.components.md?id=actionslot).

#### Example

```ts
const source = api.ui.hotbar.createBankSource({
  bankOffset: 1,
  minimumBankCount: 2,
});
```

</div>

<div class="smt-member-card">

### sandkit.api.ui.hotbar.selectAction :id=selectaction

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L254" target="_blank" rel="noopener">ui.d.ts:254</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.hotbar.selectAction(action: AssetRef): void">

```ts
selectAction(action: AssetRef): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| action | <code>[`AssetRef`](api/shared.asset.md?id=assetref)</code> | Action to select. |

<div class="smt-member-anchors">

##### action <!-- {docsify-ignore} -->

</div>

Select a hotbar action programmatically.

</div>

<div class="smt-member-card">

### sandkit.api.ui.hotbar.getBankCount :id=getbankcount

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L259" target="_blank" rel="noopener">ui.d.ts:259</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.hotbar.getBankCount(): number">

```ts
getBankCount(): number
```

</div>

Return the number of hotbar banks.

</div>

<div class="smt-member-card">

### sandkit.api.ui.hotbar.getActiveBankIndex :id=getactivebankindex

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L264" target="_blank" rel="noopener">ui.d.ts:264</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.hotbar.getActiveBankIndex(): number">

```ts
getActiveBankIndex(): number
```

</div>

Return the active hotbar bank index.

</div>

<div class="smt-member-card">

### sandkit.api.ui.hotbar.getActiveSlotIndex :id=getactiveslotindex

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L269" target="_blank" rel="noopener">ui.d.ts:269</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.hotbar.getActiveSlotIndex(): number">

```ts
getActiveSlotIndex(): number
```

</div>

Return the active hotbar slot index.

</div>

<div class="smt-member-card">

### sandkit.api.ui.hotbar.getSlotKeyLabel :id=getslotkeylabel

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L275" target="_blank" rel="noopener">ui.d.ts:275</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.hotbar.getSlotKeyLabel(bindingId: KeyBinding): string">

```ts
getSlotKeyLabel(bindingId: KeyBinding): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| bindingId | <code>[`KeyBinding`](api/sandkit.enums.KeyBinding.md)</code> | Key binding id for the slot. |

<div class="smt-member-anchors">

##### bindingId <!-- {docsify-ignore} -->

</div>

Return the key label for a hotbar slot binding.

</div>

<div class="smt-member-card">

### sandkit.api.ui.hotbar.useHotbar :id=usehotbar

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L291" target="_blank" rel="noopener">ui.d.ts:291</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.hotbar.useHotbar(): HotbarState">

```ts
useHotbar(): HotbarState
```

</div>

React hook for hotbar bank and slot state.

[`HotbarState`](api/sandkit.api.ui.md?id=hotbarstate) Current bank count and active bank and slot indexes.

#### Example

```ts
const hotbar = api.ui.hotbar.useHotbar();
console.log(
  hotbar.bankCount,
  hotbar.activeBankIndex,
  hotbar.activeSlotIndex,
);
```

</div>
