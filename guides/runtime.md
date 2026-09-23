# Runtime services

These `sandkit.api` namespaces handle subscriptions, persistence, assets, localization, audio, sprites, and timing.
They run on the **main thread** unless noted below.

Member signatures live in the generated API pages linked below.

## Hooks — intercept and modify

`sandkit.api.hooks` registers callbacks at internal hook points.
Both methods return an unsubscribe function.

- `hooks.intercept(hookId, callback, options?)` — observe or cancel an action
- `hooks.modify(hookId, callback, options?)` — mutate hook payload before the game applies it

Intercept callbacks receive `(args, context)`.
Call `context.cancel()` to skip the action.
Modify callbacks receive `(args)` only.

Options include `priority`, `itemIds`, `entityTypes`, `structureTypes`, `projectileTypes`, `weaponIds`, `triggerIds`, and `resourceIds` where supported.
Custom string hook ids are allowed.

API: [sandkit.api.hooks](../api/sandkit.api.hooks.md).

## Events — subscribe and emit

`sandkit.api.events` is a frozen pub/sub bus.

- `events.on(eventId, callback)` — subscribe; returns unsubscribe
- `events.emit(eventId, payload)` — emit to all subscribers

Common ids include `game:ready`, `game:started`, `frame:render`, `building:placed`, and `resource:collected`.
Custom string event ids are allowed.

API: [sandkit.api.events](../api/sandkit.api.events.md).

## Worker hooks and events

Workers use the same method names with different ids and optional `guard` filters.
Type worker code with a worker-only tsconfig so `sandkit.api` is `WorkerSandkitApi` — see [Worker mods](guides/worker-mods.md).

## Storage

Save-scoped JSON keyed by mod id:

- `storage.ensure(modId)`
- `storage.get(modId, key)`
- `storage.set(modId, key, value)`
- `storage.remove(modId, key)`

Session-only keys (no mod id scope):

- `storage.local.get(key)`
- `storage.local.set(key, value)`
- `storage.local.remove(key)`

Use your `modinfo.json` `id` as `modId`.
Prefix local keys with your mod id to avoid collisions.
Values must be JSON-serializable.

API: [sandkit.api.storage](../api/sandkit.api.storage.md).

## Assets and mod providers

- `assets.getUrl(relativePath)` — URL under the calling mod folder
- `assets.getSelectedProvider(kind)` — selected provider or `null`
- `assets.selectProvider(kind, providerId)` — select or clear
- `mods.getProviders(kind)` — readonly `AssetProviderV1` list

Provider fields: `id`, `kind`, optional `localId` and `modId`, and `modName`.

API: [sandkit.api.assets](../api/sandkit.api.assets.md), [sandkit.api.mods](../api/sandkit.api.mods.md).

## i18n

| Member | Role |
| --- | --- |
| `t(key, params?)` | Translate with placeholders |
| `register(locale, translations)` | Add strings for a locale |
| `getLocale()` | Active locale code |
| `setLocale(locale)` | Switch locale (`Promise`) |
| `hasTranslation(key, locale?)` | Test key presence |
| `getLanguages()` | Known language metadata |
| `getAvailableLocales()` | Locales with registered strings |
| `formatNumber(value, options?)` | Locale number format |
| `joinKey(...parts)` | Build a dotted key (`key` deprecated) |
| `getName(definition)` | Resolve `nameKey` or `name` |
| `getDescription(definition)` | Resolve `descriptionKey` or `description` |
| `createTranslatable(key, fallback)` | Translatable object (`translatable` deprecated) |
| `setGlobal(key, value)` | Static or lazy global helper |
| `getGlobal(key)` | Read global helper |
| `removeGlobal(key)` | Remove helper (`clearGlobal` deprecated) |
| `getGlobals()` | All global helpers |
| `formatKeyForDisplay(keyCode)` | Display label for a key code |

API: [sandkit.api.i18n](../api/sandkit.api.i18n.md).

## Sound

- `sound.play(soundId, options?)` — returns `SoundHandle`
- `sound.playActive(soundId, options?)`
- `sound.playLayers(layers, options?)`
- `sound.calculateDistanceOptionsAtWorld(worldX, worldY, baseVolume?)`
- `sound.stopBySoundId(soundId)` (`stopById` deprecated)
- `sound.stopActive()`
- `sound.stopAll()`

API: [sandkit.api.sound](../api/sandkit.api.sound.md).

## Sprites

- `sprites.load(spriteId, path, options?)`
- `sprites.loadFromMod(spriteId, relativePath, options?)`
- `sprites.getById(spriteId)`
- `sprites.hideAllPlayerModSprites()`
- `sprites.rotatePlayerModSprites(angle)`

API: [sandkit.api.sprites](../api/sandkit.api.sprites.md).

## Schedule and time

- `schedule.nextTick(callback)` — run on the next game tick
- `time.getTimeMs()` — elapsed game time in milliseconds
- `time.getTick()` — current simulation tick

API: [sandkit.api.schedule](../api/sandkit.api.schedule.md), [sandkit.api.time](../api/sandkit.api.time.md).

## Settings

- `settings.get(fieldId)` — one field value
- `settings.getAll()` — readonly map of all fields
- `settings.onChange(callback)` — subscribe; returns unsubscribe

API: [sandkit.api.settings](../api/sandkit.api.settings.md).

## Subscribe on load, persist on change

```ts
const MOD_ID = "author.example";
sandkit.api.storage.ensure(MOD_ID);
sandkit.api.events.on("resource:collected", (p) => {
  const k = "total";
  const n = (sandkit.api.storage.get(MOD_ID, k) as number) ?? 0;
  sandkit.api.storage.set(MOD_ID, k, n + p.amount);
});
```

Register `i18n.register` during load.
Use `schedule.nextTick` to defer work to the next tick.

Load order and timing: [The mod lifecycle](guides/mod-lifecycle.md).

## Related

- [The mod lifecycle](guides/mod-lifecycle.md) — load order and when code runs
- [Worker mods](guides/worker-mods.md) — worker hooks and events
- [sandkit.api.hooks](../api/sandkit.api.hooks.md) — intercept and modify reference
- [Search](../types/search.md) — browse all Sandkit namespaces
