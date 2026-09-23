# sandkit.api.events (worker)

**`Internal`**

Worker-thread `sandkit.api.events` — subscribe to and emit worker-scoped events.

 Worker-only surface; do not use main-thread [sandkit.api.events](api/sandkit.md?id=events).

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.events.EventGuard :id=eventguard

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L68" target="_blank" rel="noopener">events.d.ts:68</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.EventGuard = object">

```ts
EventGuard = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| elementType? | <code>ElementType</code> | Required when subscribing to `element:moved`. Optional on emit. |
| terrainType? | <code>TerrainType</code> | Required when subscribing to `terrain:updated`. Optional on emit. |

<div class="smt-member-anchors">

##### elementType? <!-- {docsify-ignore} -->

##### terrainType? <!-- {docsify-ignore} -->

</div>

Guard filter for worker events.

</div>

<div class="smt-member-card">

### sandkit.api.events.EventOnOptions :id=eventonoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L76" target="_blank" rel="noopener">events.d.ts:76</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.EventOnOptions&lt;K *extends* EventId&gt; = K *extends* &quot;element:moved&quot; ? object : K *extends* &quot;terrain:updated&quot; | &quot;terrain:update&quot; ? object : object">

```ts
sandkit.api.events.EventOnOptions<K *extends* EventId> = K *extends* "element:moved" ? object : K *extends* "terrain:updated" | "terrain:update" ? object : object
```

</div>

Options for [on](?id=on).

`K` *extends* [`EventId`](?id=eventid)

</div>

<div class="smt-member-card">

### sandkit.api.events.EventEmitOptions :id=eventemitoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L83" target="_blank" rel="noopener">events.d.ts:83</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.EventEmitOptions = object">

```ts
EventEmitOptions = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| guard? | <code>EventGuard</code> |  |

<div class="smt-member-anchors">

##### guard? <!-- {docsify-ignore} -->

</div>

Options for [emit](?id=emit).

</div>

<div class="smt-member-card">

### sandkit.api.events.EventPayloadMap :id=eventpayloadmap

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L88" target="_blank" rel="noopener">events.d.ts:88</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.EventPayloadMap = object">

```ts
EventPayloadMap = object
```

</div>

<h4 class="smt-hook-heading" id="element-moved"><code>element:moved</code></h4>

```ts
InterceptHookMap["element:move"]
```

<h4 class="smt-hook-heading" id="terrain-updated"><code>terrain:updated</code></h4>

```ts
InterceptHookMap["cell:process"]
```

<h4 class="smt-hook-heading" id="terrain-update"><code>terrain:update</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
EventPayloadMap["terrain:updated"]
```

<h4 class="smt-hook-heading" id="worker-update-post"><code>worker:update:post</code></h4>

```ts
{ dt: number }
```

<h4 class="smt-hook-heading" id="update-post"><code>update:post</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
EventPayloadMap["worker:update:post"]
```

Known worker event payloads. Unlisted ids still use `unknown`.

</div>

<div class="smt-member-card">

### sandkit.api.events.EventId :id=eventid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L99" target="_blank" rel="noopener">events.d.ts:99</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.EventId = LooseString&lt;keyof EventPayloadMap&gt;">

```ts
EventId = LooseString<keyof EventPayloadMap>
```

</div>

Known worker event names plus any custom string id.

</div>

<div class="smt-member-card">

### sandkit.api.events.EventPayload :id=eventpayload

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L102" target="_blank" rel="noopener">events.d.ts:102</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.EventPayload&lt;K&gt; = K *extends* keyof EventPayloadMap ? EventPayloadMap[K] : unknown">

```ts
sandkit.api.events.EventPayload<K> = K *extends* keyof EventPayloadMap ? EventPayloadMap[K] : unknown
```

</div>

Event payload type for a given event id.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.events.on :id=on

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L47" target="_blank" rel="noopener">events.d.ts:47</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.on&lt;K *extends* EventId&gt;(eventId: K, callback: (payload: EventPayload&lt;K&gt;) =&gt; void, options?: EventOnOptions&lt;K&gt;): () =&gt; void">

```ts
sandkit.api.events.on<K *extends* EventId>(eventId: K, callback: (payload: EventPayload<K>) => void, options?: EventOnOptions<K>): () => void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| eventId | `K` | Registered event name. |
| callback | <code>(`payload`: [`EventPayload`](?id=eventpayload)&lt;`K`&gt;) =&gt; `void`</code> | Called when the event is emitted. |
| options? | <code>[`EventOnOptions`](?id=eventonoptions)&lt;`K`&gt;</code> | Required guard for filtered events. |

<div class="smt-member-anchors">

##### eventId <!-- {docsify-ignore} -->

##### callback <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Subscribe to a worker event. Returns an unsubscribe function.

`K` *extends* [`EventId`](?id=eventid)

() => `void`

#### Examples

**element:moved**

```ts
api.events.on(
  "element:moved",
  (payload) => handleElementMoved(payload),
  { guard: { elementType } },
);
```

**terrain:updated**

```ts
api.events.on(
  "terrain:updated",
  (payload) => {
    handleTerrainUpdate(payload);
  },
  { guard: { terrainType } },
);
```

**worker:update:post**

```ts
api.events.on("worker:update:post", (payload) => {
  runPostUpdate(payload);
});
```

</div>

<div class="smt-member-card">

### sandkit.api.events.emit :id=emit

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/events.d.ts#L61" target="_blank" rel="noopener">events.d.ts:61</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.events.emit&lt;K *extends* EventId&gt;(eventId: K, payload: EventPayload&lt;K&gt;, options?: EventEmitOptions): void">

```ts
sandkit.api.events.emit<K *extends* EventId>(eventId: K, payload: EventPayload<K>, options?: EventEmitOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| eventId | `K` | Registered event name. |
| payload | <code>[`EventPayload`](?id=eventpayload)&lt;`K`&gt;</code> | Serializable payload passed to listeners. |
| options? | <code>[`EventEmitOptions`](?id=eventemitoptions)</code> | Optional guard forwarded to filtered listeners. |

<div class="smt-member-anchors">

##### eventId <!-- {docsify-ignore} -->

##### payload <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Emit a worker event with a payload to subscribers.

`K` *extends* [`EventId`](?id=eventid)

</div>
