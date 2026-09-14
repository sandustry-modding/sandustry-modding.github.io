# sandkit.api.tech.conservatory

Conservatory unlock wiring for built-in tech nodes.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.tech.conservatory.appendUnlock :id=appendunlock

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L126" target="_blank" rel="noopener">tech.d.ts:126</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.tech.conservatory.appendUnlock(techId: TechGridId, unlocks: ConservatoryUnlocks): void">

```ts
appendUnlock(techId: TechGridId, unlocks: ConservatoryUnlocks): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| techId | <code>[`TechGridId`](api/sandkit.api.tech.md?id=techgridid)</code> | Built-in or custom tech id. |
| unlocks | <code>[`ConservatoryUnlocks`](api/sandkit.api.tech.md?id=conservatoryunlocks)</code> | Optional structure and item ids to unlock. |

<div class="smt-member-anchors">

##### techId <!-- {docsify-ignore} -->

##### unlocks <!-- {docsify-ignore} -->

</div>

Append structure or item unlocks to a conservatory tech node.

#### Example

```ts
api.tech.conservatory.appendUnlock(sandkit.enums.Tech.SignalDevices, {
  structures: ["exampleSensor"],
});
```

</div>
