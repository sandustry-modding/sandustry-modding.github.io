# sandkit.api.ui.overlays

Overlay slot registration and updates.

## Deprecated

Use [regions](api/sandkit.api.ui.regions.md) instead.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.ui.overlays.register~~ :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L353" target="_blank" rel="noopener">ui.d.ts:353</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [regions.mount](api/sandkit.api.ui.regions.md?id=mount) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.ui.overlays.register(slot: OverlaySlot, overlayId: string, render: () =&gt; ReactNode): void">

```ts
register(slot: OverlaySlot, overlayId: string, render: () => ReactNode): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| slot | <code>[`OverlaySlot`](api/sandkit.api.ui.md?id=overlayslot)</code> | Slot name (for example `"hotbar"`). |
| overlayId | `string` | Unique id for this overlay within the slot. |
| render | <code>() =&gt; `ReactNode`</code> | Function that returns React content. |

<div class="smt-member-anchors">

##### slot <!-- {docsify-ignore} -->

##### overlayId <!-- {docsify-ignore} -->

##### render <!-- {docsify-ignore} -->

</div>

Register a render function in an overlay slot.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.ui.overlays.unregister~~ :id=unregister

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L361" target="_blank" rel="noopener">ui.d.ts:361</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [RegionMountHandle](api/sandkit.api.ui.md?id=regionmounthandle) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.ui.overlays.unregister(slot: OverlaySlot, overlayId: string): void">

```ts
unregister(slot: OverlaySlot, overlayId: string): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| slot | <code>[`OverlaySlot`](api/sandkit.api.ui.md?id=overlayslot)</code> | Slot name the overlay was registered in. |
| overlayId | `string` | Overlay id passed to [register](?id=register). |

<div class="smt-member-anchors">

##### slot <!-- {docsify-ignore} -->

##### overlayId <!-- {docsify-ignore} -->

</div>

Remove an overlay from a slot.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.ui.overlays.update~~ :id=update

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L368" target="_blank" rel="noopener">ui.d.ts:368</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [RegionMountHandle](api/sandkit.api.ui.md?id=regionmounthandle) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.ui.overlays.update(slot: OverlaySlot): void">

```ts
update(slot: OverlaySlot): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| slot | <code>[`OverlaySlot`](api/sandkit.api.ui.md?id=overlayslot)</code> | Slot name to refresh. |

<div class="smt-member-anchors">

##### slot <!-- {docsify-ignore} -->

</div>

Request a re-render for all overlays in a slot.

</div>
