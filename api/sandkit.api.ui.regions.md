# sandkit.api.ui.regions

Mount React content in a named UI region.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.ui.regions.mount :id=mount

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L188" target="_blank" rel="noopener">ui.d.ts:188</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.regions.mount(regionId: OverlaySlot, mountId: string, options: RegionMountOptions): RegionMountHandle">

```ts
mount(regionId: OverlaySlot, mountId: string, options: RegionMountOptions): RegionMountHandle
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| regionId | <code>[`OverlaySlot`](api/sandkit.api.ui.md?id=overlayslot)</code> | Region name (for example `"hotbar"`). |
| mountId | `string` | Unique id for this mount within the region. |
| options | <code>[`RegionMountOptions`](api/sandkit.api.ui.md?id=regionmountoptions)</code> | Placement, order, and render function. |

<div class="smt-member-anchors">

##### regionId <!-- {docsify-ignore} -->

##### mountId <!-- {docsify-ignore} -->

##### options <!-- {docsify-ignore} -->

</div>

Mount a React region in a UI slot.
`"docked"` sits on the hotbar.
`"raised"` sits above panels such as Filter Config.

[`RegionMountHandle`](api/sandkit.api.ui.md?id=regionmounthandle) Handle used to update or unmount the region.

#### Example

```ts
const mountHandle = api.ui.regions.mount(
  "hotbar",
  "extra-actions",
  {
    placement: "docked",
    order: 0,
    render: () => sandkit.react.createElement(ExtraActions),
  },
);
```

</div>

<div class="smt-member-card">

### sandkit.api.ui.regions.setVisible :id=setvisible

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L200" target="_blank" rel="noopener">ui.d.ts:200</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.regions.setVisible(regionId: OverlaySlot, visible: boolean): VisibilityHandle">

```ts
setVisible(regionId: OverlaySlot, visible: boolean): VisibilityHandle
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| regionId | <code>[`OverlaySlot`](api/sandkit.api.ui.md?id=overlayslot)</code> | Region name passed to [mount](?id=mount). |
| visible | `boolean` | When false, hide the region until restored. |

<div class="smt-member-anchors">

##### regionId <!-- {docsify-ignore} -->

##### visible <!-- {docsify-ignore} -->

</div>

Show or hide a mounted region.

[`VisibilityHandle`](api/sandkit.api.ui.md?id=visibilityhandle) Handle whose [VisibilityHandle.restore](api/sandkit.api.ui.md?id=restore) shows the region again.

</div>
