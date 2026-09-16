/** Pixel size of one cell in `store.player` world coordinates. */
export const CELL_SIZE = 4;

function asObject(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return value;
}

function numOrEmpty(value) {
  if (value === "" || value == null || value === false) return "";
  const n = Number(value);
  return Number.isFinite(n) ? n : "";
}

function textOrEmpty(value) {
  if (value == null) return "";
  return String(value);
}

function artifactsFrom(resources, headerResources) {
  const fromStore = resources.artifacts;
  if (fromStore && typeof fromStore === "object" && !Array.isArray(fromStore)) {
    return {
      artifactsAvailable: numOrEmpty(fromStore.available),
      artifactsFound: numOrEmpty(fromStore.found),
    };
  }
  if (typeof fromStore === "number") {
    return { artifactsAvailable: fromStore, artifactsFound: "" };
  }
  const fromHeader = headerResources?.artifacts;
  if (fromHeader && typeof fromHeader === "object" && !Array.isArray(fromHeader)) {
    return {
      artifactsAvailable: numOrEmpty(fromHeader.available),
      artifactsFound: numOrEmpty(fromHeader.found),
    };
  }
  return { artifactsAvailable: numOrEmpty(fromHeader), artifactsFound: "" };
}

/** Flatten save header + `store` fields the editor can show. */
export function readSaveMeta(meta, data) {
  const header = asObject(meta);
  const store = asObject(data?.store);
  const sm = asObject(store.meta);
  const resources = asObject(store.resources);
  const headerResources = asObject(header.resources);
  const player = asObject(store.player);
  const size = asObject(store.world).size;
  const arts = artifactsFrom(resources, headerResources);
  const playTime = numOrEmpty(header.playTime);
  return {
    id: textOrEmpty(header.id),
    name: textOrEmpty(header.name),
    timestamp: textOrEmpty(header.timestamp),
    playTime: numOrEmpty(sm.time) === "" ? playTime : numOrEmpty(sm.time),
    worldId: textOrEmpty(sm.worldId || header.worldId),
    worldName: textOrEmpty(sm.worldName || header.worldName),
    seed: numOrEmpty(sm.seed ?? header.seed),
    productionPoints: numOrEmpty(store.productionPoints ?? header.productionPoints) || 0,
    structureCount: Array.isArray(store.structures)
      ? store.structures.length
      : numOrEmpty(header.structureCount) || 0,
    gold: numOrEmpty(resources.gold ?? headerResources.gold) || 0,
    fluxite: numOrEmpty(resources.fluxite ?? headerResources.fluxite) || 0,
    energy: numOrEmpty(resources.energy) || 0,
    artifactsAvailable: arts.artifactsAvailable === "" ? 0 : arts.artifactsAvailable,
    artifactsFound: arts.artifactsFound,
    playerX: numOrEmpty(player.x),
    playerY: numOrEmpty(player.y),
    version: textOrEmpty(store.version),
    createdVersion: textOrEmpty(store.createdVersion),
    width: Number(size?.width) || 0,
    height: Number(size?.height) || 0,
  };
}

function ensureBag(parent, key) {
  if (!parent[key] || typeof parent[key] !== "object" || Array.isArray(parent[key])) {
    parent[key] = {};
  }
  return parent[key];
}

function setOptNumber(obj, key, value) {
  if (value === "" || value == null) return;
  const n = Number(value);
  if (!Number.isFinite(n)) return;
  obj[key] = n;
}

function setOptText(obj, key, value, asNull) {
  const text = value == null ? "" : String(value).trim();
  if (!text) {
    if (asNull) obj[key] = null;
    return;
  }
  obj[key] = text;
}

function writeArtifacts(resources, available, found) {
  const current = resources.artifacts;
  const hasFound = found !== "" && found != null && Number.isFinite(Number(found));
  const hasAvail = available !== "" && available != null && Number.isFinite(Number(available));
  if (current && typeof current === "object" && !Array.isArray(current)) {
    if (hasAvail) current.available = Number(available);
    if (hasFound) current.found = Number(found);
    return;
  }
  if (hasAvail && hasFound) {
    resources.artifacts = { available: Number(available), found: Number(found) };
    return;
  }
  if (hasAvail) resources.artifacts = Number(available);
}

/** Copy editor fields into the gzip body `store` (source of truth on next save). */
export function applySaveMeta(data, fields) {
  if (!data || typeof data !== "object") throw new Error("Save body is missing.");
  const store = ensureBag(data, "store");
  const sm = ensureBag(store, "meta");
  const resources = ensureBag(store, "resources");
  const player = ensureBag(store, "player");

  setOptNumber(sm, "time", fields.playTime);
  setOptText(sm, "worldId", fields.worldId, true);
  setOptText(sm, "worldName", fields.worldName, true);
  if (fields.seed === "" || fields.seed == null) sm.seed = null;
  else setOptNumber(sm, "seed", fields.seed);

  setOptNumber(store, "productionPoints", fields.productionPoints);
  setOptNumber(resources, "gold", fields.gold);
  setOptNumber(resources, "fluxite", fields.fluxite);
  setOptNumber(resources, "energy", fields.energy);
  writeArtifacts(resources, fields.artifactsAvailable, fields.artifactsFound);
  setOptNumber(player, "x", fields.playerX);
  setOptNumber(player, "y", fields.playerY);
  return data;
}

/** Header line the game writes in `ipcMain.handle('save')`. */
export function buildSaveHeader(fields, data, fileId) {
  const store = asObject(data?.store);
  const sm = asObject(store.meta);
  const resources = asObject(store.resources);
  const artifacts = resources.artifacts;
  let artifactCount = 0;
  if (artifacts && typeof artifacts === "object" && !Array.isArray(artifacts)) {
    artifactCount = Number(artifacts.available) || 0;
  } else if (typeof artifacts === "number") {
    artifactCount = artifacts;
  }
  const id = String(fileId || fields.id || "").trim();
  return {
    id,
    name: String(fields.name ?? ""),
    timestamp: String(fields.timestamp || new Date().toISOString()),
    playTime: Number.isFinite(Number(sm.time)) ? Number(sm.time) : Number(fields.playTime) || 0,
    worldId: sm.worldId || null,
    worldName: sm.worldName || null,
    seed: sm.seed ?? null,
    productionPoints: store.productionPoints || 0,
    structureCount: Array.isArray(store.structures) ? store.structures.length : 0,
    resources: {
      gold: resources.gold,
      fluxite: resources.fluxite,
      artifacts: artifactCount,
    },
  };
}

export function formatPlayTime(ms) {
  const n = Number(ms);
  if (!Number.isFinite(n) || n < 0) return "";
  const totalSec = Math.floor(n / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  if (h > 0) return `${h}h ${m}m ${s}s`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

export function pixelsToCell(px) {
  if (px === "" || px == null) return "";
  const n = Number(px);
  if (!Number.isFinite(n)) return "";
  return Math.floor(n / CELL_SIZE);
}

export function cellToPixels(cell) {
  if (cell === "" || cell == null) return "";
  const n = Number(cell);
  if (!Number.isFinite(n)) return "";
  return n * CELL_SIZE;
}
