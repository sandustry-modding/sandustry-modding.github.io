# sandkit.engine.api.augments

**`Internal`**

`sandkit.engine.api.augments` — player augment levels and unlocked perks.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.augments.getDigLevel :id=getdiglevel

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L15" target="_blank" rel="noopener">augments.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.augments.getDigLevel(...args: unknown[]): unknown">

```ts
getDigLevel(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the current dig augment level.

</div>

<div class="smt-member-card">

### sandkit.engine.api.augments.getGunLevel :id=getgunlevel

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L20" target="_blank" rel="noopener">augments.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.augments.getGunLevel(...args: unknown[]): unknown">

```ts
getGunLevel(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the current gun augment level.

</div>

<div class="smt-member-card">

### sandkit.engine.api.augments.getPhaseLevel :id=getphaselevel

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L25" target="_blank" rel="noopener">augments.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.augments.getPhaseLevel(...args: unknown[]): unknown">

```ts
getPhaseLevel(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the current phase augment level.

</div>

<div class="smt-member-card">

### sandkit.engine.api.augments.getRocketAmmoLevel :id=getrocketammolevel

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L30" target="_blank" rel="noopener">augments.d.ts:30</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.augments.getRocketAmmoLevel(...args: unknown[]): unknown">

```ts
getRocketAmmoLevel(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the current rocket ammo augment level.

</div>

<div class="smt-member-card">

### sandkit.engine.api.augments.getRocketReloadLevel :id=getrocketreloadlevel

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L35" target="_blank" rel="noopener">augments.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.augments.getRocketReloadLevel(...args: unknown[]): unknown">

```ts
getRocketReloadLevel(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the current rocket reload augment level.

</div>

<div class="smt-member-card">

### sandkit.engine.api.augments.getSprintCapLevel :id=getsprintcaplevel

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L40" target="_blank" rel="noopener">augments.d.ts:40</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.augments.getSprintCapLevel(...args: unknown[]): unknown">

```ts
getSprintCapLevel(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the current sprint cap augment level.

</div>

<div class="smt-member-card">

### sandkit.engine.api.augments.hasBigDig :id=hasbigdig

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L45" target="_blank" rel="noopener">augments.d.ts:45</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.augments.hasBigDig(...args: unknown[]): unknown">

```ts
hasBigDig(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether the big-dig augment is unlocked.

</div>

<div class="smt-member-card">

### sandkit.engine.api.augments.hasBulletSpeed :id=hasbulletspeed

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L50" target="_blank" rel="noopener">augments.d.ts:50</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.augments.hasBulletSpeed(...args: unknown[]): unknown">

```ts
hasBulletSpeed(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether the bullet-speed augment is unlocked.

</div>

<div class="smt-member-card">

### sandkit.engine.api.augments.hasBulletTracer :id=hasbullettracer

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L55" target="_blank" rel="noopener">augments.d.ts:55</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.augments.hasBulletTracer(...args: unknown[]): unknown">

```ts
hasBulletTracer(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether the bullet-tracer augment is unlocked.

</div>

<div class="smt-member-card">

### sandkit.engine.api.augments.hasKickstartBoost :id=haskickstartboost

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L60" target="_blank" rel="noopener">augments.d.ts:60</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.augments.hasKickstartBoost(...args: unknown[]): unknown">

```ts
hasKickstartBoost(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether the kickstart-boost augment is unlocked.

</div>

<div class="smt-member-card">

### sandkit.engine.api.augments.hasPhaseDash :id=hasphasedash

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L65" target="_blank" rel="noopener">augments.d.ts:65</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.augments.hasPhaseDash(...args: unknown[]): unknown">

```ts
hasPhaseDash(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether the phase-dash augment is unlocked.

</div>

<div class="smt-member-card">

### sandkit.engine.api.augments.hasPhaseDashCharge :id=hasphasedashcharge

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L70" target="_blank" rel="noopener">augments.d.ts:70</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.augments.hasPhaseDashCharge(...args: unknown[]): unknown">

```ts
hasPhaseDashCharge(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether the phase-dash-charge augment is unlocked.

</div>

<div class="smt-member-card">

### sandkit.engine.api.augments.hasRideBoost :id=hasrideboost

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L75" target="_blank" rel="noopener">augments.d.ts:75</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.augments.hasRideBoost(...args: unknown[]): unknown">

```ts
hasRideBoost(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether the ride-boost augment is unlocked.

</div>

<div class="smt-member-card">

### sandkit.engine.api.augments.hasRocketDamage :id=hasrocketdamage

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L80" target="_blank" rel="noopener">augments.d.ts:80</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.augments.hasRocketDamage(...args: unknown[]): unknown">

```ts
hasRocketDamage(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether the rocket-damage augment is unlocked.

</div>

<div class="smt-member-card">

### sandkit.engine.api.augments.hasRocketWarhead :id=hasrocketwarhead

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L85" target="_blank" rel="noopener">augments.d.ts:85</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.augments.hasRocketWarhead(...args: unknown[]): unknown">

```ts
hasRocketWarhead(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether the rocket-warhead augment is unlocked.

</div>

<div class="smt-member-card">

### sandkit.engine.api.augments.hasSprintPower :id=hassprintpower

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L90" target="_blank" rel="noopener">augments.d.ts:90</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.augments.hasSprintPower(...args: unknown[]): unknown">

```ts
hasSprintPower(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether the sprint-power augment is unlocked.

</div>

<div class="smt-member-card">

### sandkit.engine.api.augments.hasTripleShot :id=hastripleshot

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L95" target="_blank" rel="noopener">augments.d.ts:95</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.augments.hasTripleShot(...args: unknown[]): unknown">

```ts
hasTripleShot(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether the triple-shot augment is unlocked.

</div>
