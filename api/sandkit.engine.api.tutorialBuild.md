# sandkit.engine.api.tutorialBuild

**`Internal`**

`sandkit.engine.api.tutorialBuild` — tutorial build-step constraints and targets.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.tutorialBuild.areAllTargetsBuilt :id=arealltargetsbuilt

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L15" target="_blank" rel="noopener">tutorialBuild.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.tutorialBuild.areAllTargetsBuilt(...args: unknown[]): unknown">

```ts
areAllTargetsBuilt(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether all active tutorial targets are built.

</div>

<div class="smt-member-card">

### sandkit.engine.api.tutorialBuild.areFamilyTargetsBuilt :id=arefamilytargetsbuilt

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L20" target="_blank" rel="noopener">tutorialBuild.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.tutorialBuild.areFamilyTargetsBuilt(...args: unknown[]): unknown">

```ts
areFamilyTargetsBuilt(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether all targets in a structure family are built.

</div>

<div class="smt-member-card">

### sandkit.engine.api.tutorialBuild.canPlaceAtActiveTarget :id=canplaceatactivetarget

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L25" target="_blank" rel="noopener">tutorialBuild.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.tutorialBuild.canPlaceAtActiveTarget(...args: unknown[]): unknown">

```ts
canPlaceAtActiveTarget(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether placement is allowed at the active target.

</div>

<div class="smt-member-card">

### sandkit.engine.api.tutorialBuild.getFoundationMoveDests :id=getfoundationmovedests

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L30" target="_blank" rel="noopener">tutorialBuild.d.ts:30</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.tutorialBuild.getFoundationMoveDests(...args: unknown[]): unknown">

```ts
getFoundationMoveDests(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return foundation move destination cells for the tutorial step.

</div>

<div class="smt-member-card">

### sandkit.engine.api.tutorialBuild.getFoundationMoveSources :id=getfoundationmovesources

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L35" target="_blank" rel="noopener">tutorialBuild.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.tutorialBuild.getFoundationMoveSources(...args: unknown[]): unknown">

```ts
getFoundationMoveSources(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return foundation move source cells for the tutorial step.

</div>

<div class="smt-member-card">

### sandkit.engine.api.tutorialBuild.getTargets :id=gettargets

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L40" target="_blank" rel="noopener">tutorialBuild.d.ts:40</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.tutorialBuild.getTargets(...args: unknown[]): unknown">

```ts
getTargets(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return build targets for the current tutorial step.

</div>

<div class="smt-member-card">

### sandkit.engine.api.tutorialBuild.hasDefinition :id=hasdefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L45" target="_blank" rel="noopener">tutorialBuild.d.ts:45</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.tutorialBuild.hasDefinition(...args: unknown[]): unknown">

```ts
hasDefinition(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether a tutorial build definition exists.

</div>

<div class="smt-member-card">

### sandkit.engine.api.tutorialBuild.isStepConstrained :id=isstepconstrained

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L50" target="_blank" rel="noopener">tutorialBuild.d.ts:50</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.tutorialBuild.isStepConstrained(...args: unknown[]): unknown">

```ts
isStepConstrained(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether the current step restricts building.

</div>

<div class="smt-member-card">

### sandkit.engine.api.tutorialBuild.matchesFoundationMove :id=matchesfoundationmove

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L55" target="_blank" rel="noopener">tutorialBuild.d.ts:55</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.tutorialBuild.matchesFoundationMove(...args: unknown[]): unknown">

```ts
matchesFoundationMove(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether a foundation move matches tutorial rules.

</div>

<div class="smt-member-card">

### sandkit.engine.api.tutorialBuild.matchesFoundationRemove :id=matchesfoundationremove

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L60" target="_blank" rel="noopener">tutorialBuild.d.ts:60</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.tutorialBuild.matchesFoundationRemove(...args: unknown[]): unknown">

```ts
matchesFoundationRemove(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether a foundation remove matches tutorial rules.

</div>

<div class="smt-member-card">

### sandkit.engine.api.tutorialBuild.shouldProtectActiveTargetAt :id=shouldprotectactivetargetat

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/tutorialBuild.d.ts#L65" target="_blank" rel="noopener">tutorialBuild.d.ts:65</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.tutorialBuild.shouldProtectActiveTargetAt(...args: unknown[]): unknown">

```ts
shouldProtectActiveTargetAt(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether the active target should be protected at a cell.

</div>
