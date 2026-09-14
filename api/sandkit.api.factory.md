# sandkit.api.factory

Factory progression level and process counters.

Available as `sandkit.api.factory`.

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.factory.FactoryProcessId :id=factoryprocessid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/factory.d.ts#L31" target="_blank" rel="noopener">factory.d.ts:31</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.factory.FactoryProcessId = &quot;shakeWetSand&quot; | &quot;pressBurntResidue&quot; | &quot;growFlowers&quot; | &quot;condenseFlorin&quot;">

```ts
FactoryProcessId = "shakeWetSand" | "pressBurntResidue" | "growFlowers" | "condenseFlorin"
```

</div>

Built-in factory process identifiers.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.factory.getLevel :id=getlevel

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/factory.d.ts#L12" target="_blank" rel="noopener">factory.d.ts:12</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.factory.getLevel(): number">

```ts
getLevel(): number
```

</div>

Return the current factory level.

</div>

<div class="smt-member-card">

### sandkit.api.factory.getProcessCount :id=getprocesscount

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/factory.d.ts#L20" target="_blank" rel="noopener">factory.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.factory.getProcessCount(processId: FactoryProcessId): number">

```ts
getProcessCount(processId: FactoryProcessId): number
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| processId | <code>[`FactoryProcessId`](?id=factoryprocessid)</code> | Built-in factory process id. |

<div class="smt-member-anchors">

##### processId <!-- {docsify-ignore} -->

</div>

Return completed count for a factory process.

</div>

<div class="smt-member-card">

### sandkit.api.factory.getProcessRate :id=getprocessrate

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/factory.d.ts#L28" target="_blank" rel="noopener">factory.d.ts:28</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.factory.getProcessRate(processId: FactoryProcessId): number">

```ts
getProcessRate(processId: FactoryProcessId): number
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| processId | <code>[`FactoryProcessId`](?id=factoryprocessid)</code> | Built-in factory process id. |

<div class="smt-member-anchors">

##### processId <!-- {docsify-ignore} -->

</div>

Return completion rate for a factory process.

</div>
