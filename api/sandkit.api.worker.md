# sandkit.api (worker)

Worker-thread `sandkit.api` namespaces.

Prefer these declarations in `worker.js`. Type `sandkit.api` as
[WorkerSandkitApi](?id=workersandkitapi). Do not assume main-thread methods exist here.
See [sandkit.api](api/sandkit.api.md) for the main-thread public API.

## Type Aliases <!-- {docsify-ignore} -->

### sandkit.api (worker) :id=workersandkitapi

```ts
WorkerSandkitApi = object
```

Defined in: [worker/sandkit-api.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L14)

Composed worker-thread `sandkit.api` object.

Namespace members are documented under [worker](api/sandkit.api.worker.worker.md). Use this type in
`worker.js` / `worker.ts`:

```ts
const api = sandkit.api as unknown as WorkerSandkitApi;
```

Main and worker surfaces overlap but are not interchangeable. Do not use
[sandkit.SandkitApi](api/sandkit.md?id=sandkitapi) on worker threads.

#### Properties

##### constants

```ts
constants: constants
```

Defined in: [worker/sandkit-api.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L15)

##### collector

```ts
collector: collector
```

Defined in: [worker/sandkit-api.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L16)

##### effects

```ts
effects: effects
```

Defined in: [worker/sandkit-api.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L17)

##### elements

```ts
elements: elements
```

Defined in: [worker/sandkit-api.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L18)

##### events

```ts
events: events
```

Defined in: [worker/sandkit-api.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L19)

##### fire

```ts
fire: fire
```

Defined in: [worker/sandkit-api.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L20)

##### grid

```ts
grid: grid
```

Defined in: [worker/sandkit-api.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L21)

##### hooks

```ts
hooks: hooks
```

Defined in: [worker/sandkit-api.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L22)

##### lights

```ts
lights: lights
```

Defined in: [worker/sandkit-api.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L23)

##### main

```ts
main: main
```

Defined in: [worker/sandkit-api.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L24)

##### maps

```ts
maps: maps
```

Defined in: [worker/sandkit-api.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L25)

##### patterns

```ts
patterns: patterns
```

Defined in: [worker/sandkit-api.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L26)

##### player

```ts
player: player
```

Defined in: [worker/sandkit-api.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L27)

##### random

```ts
random: random
```

Defined in: [worker/sandkit-api.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L28)

##### shared

```ts
shared: shared
```

Defined in: [worker/sandkit-api.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L29)

##### structures

```ts
structures: structures
```

Defined in: [worker/sandkit-api.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L30)

##### terrains

```ts
terrains: terrains
```

Defined in: [worker/sandkit-api.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L31)

##### ui

```ts
ui: ui
```

Defined in: [worker/sandkit-api.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L32)

##### utils

```ts
utils: utils
```

Defined in: [worker/sandkit-api.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L33)

##### worker

```ts
worker: worker
```

Defined in: [worker/sandkit-api.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L34)

##### ~~world~~

```ts
world: world
```

Defined in: [worker/sandkit-api.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts#L39)

###### Deprecated

Use [grid](api/sandkit.api.grid.worker.md) instead.
