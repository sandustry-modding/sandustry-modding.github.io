# sandkit.api.energy

`sandkit.api.energy` — structure energy networks, storage, and consumption.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.energy.EnergyRegisterTypeOptions :id=energyregistertypeoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L75" target="_blank" rel="noopener">energy.d.ts:75</a></p>

| Property | Type | Description |
| --- | --- | --- |
| capacity? | <code>number</code> | Maximum stored energy for storage nodes. |
| energyType? | <code>string</code> | Energy type id when multiple networks exist. |

<div class="smt-member-anchors">

##### capacity? <!-- {docsify-ignore} -->

##### energyType? <!-- {docsify-ignore} -->

</div>

Options for [registerType](?id=registertype).

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.energy.EnergyAddOptions :id=energyaddoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L84" target="_blank" rel="noopener">energy.d.ts:84</a></p>

| Property | Type | Description |
| --- | --- | --- |
| energyType? | <code>string</code> | Energy type id when multiple networks exist. |

<div class="smt-member-anchors">

##### energyType? <!-- {docsify-ignore} -->

</div>

Options for [addAtCell](?id=addatcell).

#### Indexable

```ts
[key: string]: unknown
```

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.energy.registerType :id=registertype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L14" target="_blank" rel="noopener">energy.d.ts:14</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.energy.registerType(structureId: string, type: &quot;storage&quot; | &quot;conductor&quot;, options?: EnergyRegisterTypeOptions): void">

```ts
registerType(structureId: string, type: "storage" | "conductor", options?: EnergyRegisterTypeOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureId | `string` | Structure type id string. |
| type | `"storage"` &#124; `"conductor"` | `conductor` forwards energy; `storage` holds energy. |
| options? | <code>[`EnergyRegisterTypeOptions`](?id=energyregistertypeoptions)</code> | Capacity and energy-type options for storage nodes. |

<div class="smt-member-anchors">

##### structureId <!-- {docsify-ignore} -->

##### type <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Registers an energy type on a structure as conductor or storage.

</div>

<div class="smt-member-card">

### sandkit.api.energy.addAtCell :id=addatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L26" target="_blank" rel="noopener">energy.d.ts:26</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.energy.addAtCell(...args: number, number, number, [EnergyAddOptions]): number">

```ts
addAtCell(...args: number, number, number, [EnergyAddOptions]): number
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`, [`EnergyAddOptions`](?id=energyaddoptions)\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Adds energy at a cell. Returns the amount actually added.

</div>

<div class="smt-member-card">

### sandkit.api.energy.consume :id=consume

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L34" target="_blank" rel="noopener">energy.d.ts:34</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.energy.consume(amount: number, options?: object): number">

```ts
consume(amount: number, options?: object): number
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| amount | `number` | Energy amount to consume. |
| options? | <code>When `allOrNothing` is true, consume zero unless the full amount is available.</code> |  |

<div class="smt-member-anchors">

##### amount <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Consumes energy from the global pool. Returns the amount consumed.

</div>

<div class="smt-member-card">

### sandkit.api.energy.consumeExcludingNetworkAtCell :id=consumeexcludingnetworkatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L46" target="_blank" rel="noopener">energy.d.ts:46</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.energy.consumeExcludingNetworkAtCell(...args: [number, number, number]): number">

```ts
consumeExcludingNetworkAtCell(...args: [number, number, number]): number
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...\[`number`, `number`, `number`\]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Consumes energy from networks other than the one at the cell.

</div>

<div class="smt-member-card">

### sandkit.api.energy.getNetworkAtCell :id=getnetworkatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L62" target="_blank" rel="noopener">energy.d.ts:62</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.energy.getNetworkAtCell(...args: CellCoordinates): object[]">

```ts
getNetworkAtCell(...args: CellCoordinates): object[]
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Returns energy network nodes connected at the cell.

`object`[]

#### Example

```ts
const network = api.energy.getNetworkAtCell(cellX, cellY);
for (const entry of network) {
  useNetworkCell(entry.cellX, entry.cellY, entry.type);
}
```

</div>

<div class="smt-member-card">

### sandkit.api.energy.getNetworkFreeCapacityAtCell :id=getnetworkfreecapacityatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/energy.d.ts#L72" target="_blank" rel="noopener">energy.d.ts:72</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.energy.getNetworkFreeCapacityAtCell(...args: CellCoordinates): number">

```ts
getNetworkFreeCapacityAtCell(...args: CellCoordinates): number
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Returns free storage capacity in the network at the cell.

</div>
