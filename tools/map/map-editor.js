import {
  applySaveMeta,
  buildSaveHeader,
  cellToPixels,
  CELL_SIZE,
  formatPlayTime,
  pixelsToCell,
  readSaveMeta,
} from "../lib/save-meta.js";
import {
  decodeMatrix,
  encodeMatrix,
  parseSaveFile,
  serializeSaveFile,
  worldSize,
} from "../lib/save-file.js";

const CELL_TYPES = [
  [0, "Empty"],
  [2, "Dirt"],
  [3, "SporeSoil"],
  [4, "Fog"],
  [5, "FogJetpackBlock"],
  [6, "FogWater"],
  [7, "FreezingIceSoil"],
  [8, "Divider"],
  [9, "Grass"],
  [10, "Moss"],
  [11, "GoldSoil"],
  [12, "Petal"],
  [13, "FogLava"],
  [14, "Fluxite"],
  [15, "Block"],
  [16, "SlidingBlock"],
  [17, "SlidingBlockLeft"],
  [18, "SlidingBlockRight"],
  [19, "ConveyorLeft"],
  [20, "ConveyorRight"],
  [21, "ShakerLeft"],
  [22, "ShakerRight"],
  [23, "Stone"],
  [24, "VelocitySoaker"],
  [25, "Ice"],
  [26, "Grower"],
  [27, "NascentWater"],
  [28, "SandiumSoil"],
  [29, "Obsidian"],
  [30, "Crackstone"],
];

const RGB = {
  0: [18, 18, 28],
  1: [210, 180, 80],
  2: [92, 64, 40],
  3: [70, 90, 50],
  4: [48, 36, 68],
  5: [58, 40, 82],
  6: [32, 52, 86],
  7: [160, 200, 214],
  8: [86, 86, 96],
  9: [52, 122, 56],
  10: [42, 92, 52],
  11: [168, 124, 32],
  12: [204, 92, 142],
  13: [96, 32, 24],
  14: [168, 64, 204],
  15: [72, 74, 80],
  16: [92, 94, 102],
  17: [86, 96, 104],
  18: [86, 96, 104],
  19: [118, 94, 52],
  20: [118, 94, 52],
  21: [138, 104, 62],
  22: [138, 104, 62],
  23: [118, 118, 126],
  24: [62, 84, 108],
  25: [184, 224, 242],
  26: [80, 142, 72],
  27: [70, 132, 186],
  28: [168, 36, 32],
  29: [42, 22, 22],
  30: [232, 222, 142],
};

const MAX_UNDO = 40;
const MAX_FILL = 400000;

const els = {
  open: document.getElementById("smt-map-open"),
  download: document.getElementById("smt-map-download"),
  meta: document.getElementById("smt-map-meta"),
  fields: document.getElementById("smt-map-fields"),
  id: document.getElementById("smt-meta-id"),
  name: document.getElementById("smt-meta-name"),
  timestamp: document.getElementById("smt-meta-timestamp"),
  now: document.getElementById("smt-meta-now"),
  worldId: document.getElementById("smt-meta-world-id"),
  worldName: document.getElementById("smt-meta-world-name"),
  seed: document.getElementById("smt-meta-seed"),
  playTime: document.getElementById("smt-meta-play-time"),
  playHuman: document.getElementById("smt-meta-play-human"),
  gold: document.getElementById("smt-meta-gold"),
  fluxite: document.getElementById("smt-meta-fluxite"),
  energy: document.getElementById("smt-meta-energy"),
  artAvail: document.getElementById("smt-meta-art-avail"),
  artFound: document.getElementById("smt-meta-art-found"),
  pp: document.getElementById("smt-meta-pp"),
  px: document.getElementById("smt-meta-px"),
  py: document.getElementById("smt-meta-py"),
  cx: document.getElementById("smt-meta-cx"),
  cy: document.getElementById("smt-meta-cy"),
  place: document.getElementById("smt-map-place"),
  readonly: document.getElementById("smt-meta-readonly"),
  paint: document.getElementById("smt-map-paint"),
  pick: document.getElementById("smt-map-pick"),
  fill: document.getElementById("smt-map-fill"),
  pan: document.getElementById("smt-map-pan"),
  brush: document.getElementById("smt-map-brush"),
  undo: document.getElementById("smt-map-undo"),
  fit: document.getElementById("smt-map-fit"),
  palette: document.getElementById("smt-map-palette"),
  stage: document.getElementById("smt-map-stage"),
  canvas: document.getElementById("smt-map-canvas"),
  empty: document.getElementById("smt-map-empty"),
  status: document.getElementById("smt-map-status"),
};

const ctx = els.canvas.getContext("2d", { alpha: false });
const raster = document.createElement("canvas");
const rasterCtx = raster.getContext("2d", { alpha: false });

const state = {
  fileName: "world.save",
  meta: null,
  data: null,
  width: 0,
  height: 0,
  cells: null,
  extras: [],
  image: null,
  tool: "pan",
  brush: 4,
  paintId: 2,
  cam: { x: 0, y: 0, scale: 1 },
  dragging: false,
  panning: false,
  space: false,
  lastPan: null,
  hover: null,
  undo: [],
  dirty: false,
  filling: false,
};

function rgbFor(code) {
  if (code < 0) return [255, 196, 64];
  if (code >= 100) return [230, 190, 70];
  return RGB[code] || [(code * 17) % 255, (code * 37) % 200 + 40, (code * 53) % 180 + 40];
}

function cellLabel(code) {
  if (code < 0) {
    const extra = state.extras[-code - 1];
    const type = extra && typeof extra === "object" ? extra.type : "?";
    return `element ${type}`;
  }
  if (code >= 100) return `element ${code - 100}`;
  const row = CELL_TYPES.find((item) => item[0] === code);
  return row ? `${row[1]} (${code})` : `id ${code}`;
}

function buildPalette() {
  els.palette.replaceChildren();
  for (const [id, name] of CELL_TYPES) {
    const swatch = document.createElement("button");
    swatch.type = "button";
    swatch.className = "smt-map-swatch";
    swatch.style.background = `rgb(${rgbFor(id).join(",")})`;
    swatch.dataset.id = String(id);
    swatch.setAttribute("aria-pressed", id === state.paintId ? "true" : "false");
    swatch.title = `${name} (${id})`;
    const label = document.createElement("span");
    label.className = "smt-map-name";
    label.textContent = `${name} ${id}`;
    label.addEventListener("click", () => setPaintId(id));
    swatch.addEventListener("click", () => setPaintId(id));
    els.palette.append(swatch, label);
  }
}

function setPaintId(id) {
  state.paintId = id;
  els.palette.querySelectorAll(".smt-map-swatch").forEach((btn) => {
    btn.setAttribute("aria-pressed", Number(btn.dataset.id) === id ? "true" : "false");
  });
}

function setTool(tool) {
  state.tool = tool;
  els.paint.setAttribute("aria-pressed", tool === "paint" ? "true" : "false");
  els.pick.setAttribute("aria-pressed", tool === "pick" ? "true" : "false");
  els.fill.setAttribute("aria-pressed", tool === "fill" ? "true" : "false");
  els.pan.setAttribute("aria-pressed", tool === "pan" ? "true" : "false");
  els.place.setAttribute("aria-pressed", tool === "place" ? "true" : "false");
  const panCursor = tool === "pan" || state.space;
  els.stage.classList.toggle("pan", panCursor);
}

function inputValue(el) {
  return el.value === "" ? "" : el.value;
}

function inputNumber(el) {
  if (el.value === "") return "";
  const n = Number(el.value);
  return Number.isFinite(n) ? n : "";
}

function setInput(el, value) {
  if (value === "" || value == null) {
    el.value = "";
    return;
  }
  el.value = String(value);
}

function readFormFields() {
  return {
    id: els.id.value.trim(),
    name: els.name.value,
    timestamp: els.timestamp.value.trim(),
    playTime: inputNumber(els.playTime),
    worldId: inputValue(els.worldId),
    worldName: inputValue(els.worldName),
    seed: inputNumber(els.seed),
    productionPoints: inputNumber(els.pp),
    gold: inputNumber(els.gold),
    fluxite: inputNumber(els.fluxite),
    energy: inputNumber(els.energy),
    artifactsAvailable: inputNumber(els.artAvail),
    artifactsFound: inputNumber(els.artFound),
    playerX: inputNumber(els.px),
    playerY: inputNumber(els.py),
  };
}

function fillForm(fields) {
  state.filling = true;
  setInput(els.id, fields.id);
  setInput(els.name, fields.name);
  setInput(els.timestamp, fields.timestamp);
  setInput(els.playTime, fields.playTime);
  setInput(els.worldId, fields.worldId);
  setInput(els.worldName, fields.worldName);
  setInput(els.seed, fields.seed);
  setInput(els.pp, fields.productionPoints);
  setInput(els.gold, fields.gold);
  setInput(els.fluxite, fields.fluxite);
  setInput(els.energy, fields.energy);
  setInput(els.artAvail, fields.artifactsAvailable);
  setInput(els.artFound, fields.artifactsFound);
  setInput(els.px, fields.playerX);
  setInput(els.py, fields.playerY);
  setInput(els.cx, pixelsToCell(fields.playerX));
  setInput(els.cy, pixelsToCell(fields.playerY));
  els.playHuman.textContent = formatPlayTime(fields.playTime);
  const bits = [];
  if (fields.width && fields.height) bits.push(`${fields.width}×${fields.height} cells`);
  bits.push(`${fields.structureCount} structures`);
  if (fields.version) bits.push(`version ${fields.version}`);
  if (fields.createdVersion) bits.push(`created ${fields.createdVersion}`);
  els.readonly.textContent = bits.join(" · ");
  state.filling = false;
}

function applyForm() {
  if (state.filling || !state.data) return;
  applySaveMeta(state.data, readFormFields());
  state.dirty = true;
  els.playHuman.textContent = formatPlayTime(els.playTime.value);
  setMeta();
  setStatus();
  draw();
}

function setPlayerPixels(x, y, fromCell) {
  state.filling = true;
  setInput(els.px, x);
  setInput(els.py, y);
  if (!fromCell) {
    setInput(els.cx, pixelsToCell(x));
    setInput(els.cy, pixelsToCell(y));
  }
  state.filling = false;
  applyForm();
}

function viewMetrics() {
  const rect = els.stage.getBoundingClientRect();
  const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
  return { width: rect.width, height: rect.height, dpr };
}

function resizeView() {
  const { width, height, dpr } = viewMetrics();
  els.canvas.width = Math.max(1, Math.floor(width * dpr));
  els.canvas.height = Math.max(1, Math.floor(height * dpr));
  draw();
}

function fit() {
  if (!state.width) return;
  const { width, height } = viewMetrics();
  const scale = Math.max(0.05, Math.min(width / state.width, height / state.height));
  state.cam.scale = scale;
  state.cam.x = (state.width - width / scale) / 2;
  state.cam.y = (state.height - height / scale) / 2;
  draw();
}

function screenToCell(clientX, clientY) {
  const rect = els.canvas.getBoundingClientRect();
  const x = Math.floor(state.cam.x + (clientX - rect.left) / state.cam.scale);
  const y = Math.floor(state.cam.y + (clientY - rect.top) / state.cam.scale);
  return { x, y };
}

function inBounds(x, y) {
  return x >= 0 && y >= 0 && x < state.width && y < state.height;
}

function drawRaster() {
  const { width, height, cells } = state;
  raster.width = width;
  raster.height = height;
  const image = rasterCtx.createImageData(width, height);
  const px = image.data;
  for (let i = 0; i < cells.length; i++) {
    const [r, g, b] = rgbFor(cells[i]);
    const o = i * 4;
    px[o] = r;
    px[o + 1] = g;
    px[o + 2] = b;
    px[o + 3] = 255;
  }
  rasterCtx.putImageData(image, 0, 0);
  state.image = image;
}

function paintPixels(indices, value) {
  const px = state.image.data;
  const [r, g, b] = rgbFor(value);
  for (const i of indices) {
    const o = i * 4;
    px[o] = r;
    px[o + 1] = g;
    px[o + 2] = b;
  }
  rasterCtx.putImageData(state.image, 0, 0);
}

function draw() {
  const { width, height, dpr } = viewMetrics();
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = "#0c0c0c";
  ctx.fillRect(0, 0, width, height);
  if (!state.cells) return;
  ctx.imageSmoothingEnabled = state.cam.scale < 1.5;
  ctx.save();
  ctx.setTransform(
    dpr * state.cam.scale,
    0,
    0,
    dpr * state.cam.scale,
    -state.cam.x * state.cam.scale * dpr,
    -state.cam.y * state.cam.scale * dpr,
  );
  ctx.drawImage(raster, 0, 0);
  const player = state.data?.store?.player;
  if (player && Number.isFinite(player.x) && Number.isFinite(player.y)) {
    const px = player.x / CELL_SIZE;
    const py = player.y / CELL_SIZE;
    ctx.strokeStyle = "#ffb800";
    ctx.lineWidth = 2 / state.cam.scale;
    ctx.beginPath();
    ctx.moveTo(px - 4, py);
    ctx.lineTo(px + 4, py);
    ctx.moveTo(px, py - 4);
    ctx.lineTo(px, py + 4);
    ctx.stroke();
  }
  ctx.restore();
}

function setStatus() {
  if (!state.cells) {
    els.status.textContent = "";
    return;
  }
  const bits = [`${state.width}×${state.height}`];
  if (state.hover && inBounds(state.hover.x, state.hover.y)) {
    const i = state.hover.y * state.width + state.hover.x;
    bits.push(`${state.hover.x},${state.hover.y}`);
    bits.push(cellLabel(state.cells[i]));
  }
  if (state.tool === "place") bits.push("click to place player");
  if (state.dirty) bits.push("unsaved edits");
  els.status.textContent = bits.join(" · ");
}

function setMeta() {
  if (!state.meta) {
    els.meta.textContent = "No file loaded.";
    return;
  }
  const name = els.name.value || state.meta.name || state.meta.id || state.fileName;
  els.meta.textContent = `${name}\n${state.fileName}`;
}

function pushUndo(changes) {
  if (!changes.length) return;
  state.undo.push(changes);
  if (state.undo.length > MAX_UNDO) state.undo.shift();
  els.undo.disabled = false;
}

function undo() {
  const stroke = state.undo.pop();
  if (!stroke) return;
  for (const change of stroke) state.cells[change.i] = change.prev;
  drawRaster();
  state.dirty = true;
  els.undo.disabled = state.undo.length === 0;
  draw();
  setStatus();
}

function stamp(cx, cy, value) {
  const r = Math.max(1, state.brush | 0);
  const changes = [];
  for (let y = cy; y < cy + r; y++) {
    for (let x = cx; x < cx + r; x++) {
      if (!inBounds(x, y)) continue;
      const i = y * state.width + x;
      const prev = state.cells[i];
      if (prev === value) continue;
      state.cells[i] = value;
      changes.push({ i, prev, next: value });
    }
  }
  if (!changes.length) return;
  paintPixels(
    changes.map((c) => c.i),
    value,
  );
  pushUndo(changes);
  state.dirty = true;
  draw();
}

function flood(sx, sy, value) {
  if (!inBounds(sx, sy)) return;
  const start = sy * state.width + sx;
  const target = state.cells[start];
  if (target === value) return;
  const w = state.width;
  const h = state.height;
  const seen = new Uint8Array(w * h);
  const stack = [start];
  const changes = [];
  seen[start] = 1;
  while (stack.length && changes.length < MAX_FILL) {
    const i = stack.pop();
    if (state.cells[i] !== target) continue;
    state.cells[i] = value;
    changes.push({ i, prev: target, next: value });
    const x = i % w;
    const y = (i / w) | 0;
    if (x > 0 && !seen[i - 1]) {
      seen[i - 1] = 1;
      stack.push(i - 1);
    }
    if (x + 1 < w && !seen[i + 1]) {
      seen[i + 1] = 1;
      stack.push(i + 1);
    }
    if (y > 0 && !seen[i - w]) {
      seen[i - w] = 1;
      stack.push(i - w);
    }
    if (y + 1 < h && !seen[i + w]) {
      seen[i + w] = 1;
      stack.push(i + w);
    }
  }
  if (!changes.length) return;
  drawRaster();
  pushUndo(changes);
  state.dirty = true;
  draw();
  if (changes.length >= MAX_FILL) {
    els.status.textContent = `Fill stopped at ${MAX_FILL} cells.`;
  }
}

function pick(x, y) {
  if (!inBounds(x, y)) return;
  const code = state.cells[y * state.width + x];
  if (code >= 0 && code < 100) setPaintId(code);
}

function act(x, y, additive) {
  const tool = state.space ? "pan" : state.tool;
  if (tool === "pan") return;
  if (tool === "place") {
    if (!additive && inBounds(x, y)) setPlayerPixels(cellToPixels(x), cellToPixels(y), false);
    return;
  }
  if (tool === "pick") {
    pick(x, y);
    return;
  }
  if (tool === "fill") {
    if (!additive) flood(x, y, state.paintId);
    return;
  }
  if (tool === "paint") stamp(x, y, state.paintId);
}

async function loadBuffer(buffer, fileName) {
  els.empty.textContent = "Loading save…";
  els.empty.hidden = false;
  const parsed = await parseSaveFile(buffer);
  const { width, height } = worldSize(parsed.data);
  const { cells, extras } = decodeMatrix(parsed.data.matrix, width, height);
  state.fileName = fileName || `${parsed.meta?.id || "world"}.save`;
  state.meta = parsed.meta;
  state.data = parsed.data;
  state.width = width;
  state.height = height;
  state.cells = cells;
  state.extras = extras;
  state.undo = [];
  state.dirty = false;
  els.undo.disabled = true;
  els.download.disabled = false;
  els.fit.disabled = false;
  els.fields.disabled = false;
  fillForm(readSaveMeta(parsed.meta, parsed.data));
  drawRaster();
  els.empty.hidden = true;
  setMeta();
  fit();
  setStatus();
}

async function download() {
  if (!state.data || !state.cells) return;
  applySaveMeta(state.data, readFormFields());
  state.data.matrix = encodeMatrix(state.cells, state.extras);
  const fields = readFormFields();
  const fileId = fields.id || state.meta?.id || "world";
  const meta = buildSaveHeader(fields, state.data, fileId);
  const bytes = await serializeSaveFile(meta, state.data);
  const blob = new Blob([bytes], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  const stem = fileId.endsWith(".save") ? fileId.slice(0, -5) : fileId;
  a.download = `${stem}.save`;
  a.click();
  URL.revokeObjectURL(url);
  state.meta = meta;
  state.fileName = a.download;
  state.dirty = false;
  setMeta();
  setStatus();
}

function onPointerDown(event) {
  if (!state.cells) return;
  els.canvas.setPointerCapture(event.pointerId);
  const cell = screenToCell(event.clientX, event.clientY);
  if (event.button === 1 || state.space || (state.tool === "pan" && !event.altKey)) {
    state.panning = true;
    state.lastPan = { x: event.clientX, y: event.clientY };
    return;
  }
  if (event.button !== 0) return;
  state.dragging = true;
  if (event.altKey) pick(cell.x, cell.y);
  else act(cell.x, cell.y, false);
}

function onPointerMove(event) {
  if (!state.cells) return;
  const cell = screenToCell(event.clientX, event.clientY);
  state.hover = cell;
  setStatus();
  if (state.panning && state.lastPan) {
    const dx = (event.clientX - state.lastPan.x) / state.cam.scale;
    const dy = (event.clientY - state.lastPan.y) / state.cam.scale;
    state.cam.x -= dx;
    state.cam.y -= dy;
    state.lastPan = { x: event.clientX, y: event.clientY };
    draw();
    return;
  }
  if (state.dragging && !state.panning && state.tool === "paint") {
    act(cell.x, cell.y, true);
  }
}

function onPointerUp(event) {
  state.dragging = false;
  state.panning = false;
  state.lastPan = null;
  try {
    els.canvas.releasePointerCapture(event.pointerId);
  } catch {
    /* already released */
  }
}

function onWheel(event) {
  if (!state.cells) return;
  event.preventDefault();
  const rect = els.canvas.getBoundingClientRect();
  const before = screenToCell(event.clientX, event.clientY);
  const factor = event.deltaY < 0 ? 1.12 : 1 / 1.12;
  state.cam.scale = Math.min(32, Math.max(0.04, state.cam.scale * factor));
  const afterX = state.cam.x + (event.clientX - rect.left) / state.cam.scale;
  const afterY = state.cam.y + (event.clientY - rect.top) / state.cam.scale;
  state.cam.x += before.x - afterX;
  state.cam.y += before.y - afterY;
  draw();
}

async function onFile(file) {
  if (!file) return;
  try {
    await loadBuffer(await file.arrayBuffer(), file.name);
  } catch (err) {
    els.empty.hidden = false;
    els.empty.textContent = err && err.message ? err.message : String(err);
  }
}

buildPalette();
setTool("pan");

els.open.addEventListener("change", (event) => {
  const file = event.target.files && event.target.files[0];
  onFile(file);
});
els.download.addEventListener("click", () => {
  download().catch((err) => {
    els.status.textContent = err.message || String(err);
  });
});
els.paint.addEventListener("click", () => setTool("paint"));
els.pick.addEventListener("click", () => setTool("pick"));
els.fill.addEventListener("click", () => setTool("fill"));
els.pan.addEventListener("click", () => setTool("pan"));
els.place.addEventListener("click", () => setTool(state.tool === "place" ? "pan" : "place"));
els.brush.addEventListener("change", () => {
  state.brush = Number(els.brush.value) || 1;
});
els.undo.addEventListener("click", undo);
els.fit.addEventListener("click", fit);
els.now.addEventListener("click", () => {
  els.timestamp.value = new Date().toISOString();
  applyForm();
});
els.fields.addEventListener("input", (event) => {
  if (state.filling || !state.data) return;
  const target = event.target;
  if (target === els.cx || target === els.cy) {
    const x = cellToPixels(els.cx.value);
    const y = cellToPixels(els.cy.value);
    setPlayerPixels(x === "" ? els.px.value : x, y === "" ? els.py.value : y, true);
    return;
  }
  if (target === els.px || target === els.py) {
    state.filling = true;
    setInput(els.cx, pixelsToCell(els.px.value));
    setInput(els.cy, pixelsToCell(els.py.value));
    state.filling = false;
  }
  applyForm();
});

els.canvas.addEventListener("pointerdown", onPointerDown);
els.canvas.addEventListener("pointermove", onPointerMove);
els.canvas.addEventListener("pointerup", onPointerUp);
els.canvas.addEventListener("pointercancel", onPointerUp);
els.canvas.addEventListener("wheel", onWheel, { passive: false });
els.canvas.addEventListener("contextmenu", (event) => event.preventDefault());

window.addEventListener("keydown", (event) => {
  if (event.target && /^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName)) return;
  if (event.code === "Space") {
    state.space = true;
    els.stage.classList.add("pan");
    event.preventDefault();
  }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "z") {
    event.preventDefault();
    undo();
  }
});
window.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    state.space = false;
    els.stage.classList.toggle("pan", state.tool === "pan");
  }
});

["dragover", "drop"].forEach((type) => {
  window.addEventListener(type, (event) => {
    event.preventDefault();
    if (type === "drop") {
      const file = event.dataTransfer && event.dataTransfer.files[0];
      onFile(file);
    }
  });
});

window.addEventListener("resize", resizeView);
resizeView();
