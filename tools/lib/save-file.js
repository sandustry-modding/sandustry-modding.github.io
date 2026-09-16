const GZIP0 = 0x1f;
const GZIP1 = 0x8b;
const RLE_MAX = 65535;

function asBytes(buffer) {
  if (buffer instanceof Uint8Array) return buffer;
  return new Uint8Array(buffer);
}

async function bytesToText(bytes) {
  if (bytes.length >= 2 && bytes[0] === GZIP0 && bytes[1] === GZIP1) {
    if (typeof DecompressionStream !== "function") {
      throw new Error("This browser cannot decompress gzip saves.");
    }
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
    return new TextDecoder().decode(await new Response(stream).arrayBuffer());
  }
  return new TextDecoder().decode(bytes);
}

async function textToGzip(text) {
  if (typeof CompressionStream !== "function") {
    throw new Error("This browser cannot compress gzip saves.");
  }
  const stream = new Blob([text]).stream().pipeThrough(new CompressionStream("gzip"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

/** Parse a Steam `.save` buffer: JSON meta line, then gzip (or raw JSON) body. */
export async function parseSaveFile(buffer) {
  const buf = asBytes(buffer);
  const newline = buf.indexOf(0x0a);
  if (newline === -1) throw new Error("Invalid save: missing newline separator.");
  const meta = JSON.parse(new TextDecoder().decode(buf.subarray(0, newline)));
  const data = JSON.parse(await bytesToText(buf.subarray(newline + 1)));
  if (!data || typeof data !== "object") throw new Error("Invalid save body.");
  return { meta, data };
}

/** Write a `.save` buffer in the format the game loader expects. */
export async function serializeSaveFile(meta, data) {
  const head = new TextEncoder().encode(`${JSON.stringify(meta)}\n`);
  const compressed = await textToGzip(JSON.stringify(data));
  const out = new Uint8Array(head.length + compressed.length);
  out.set(head, 0);
  out.set(compressed, head.length);
  return out;
}

export function worldSize(data) {
  const size = data?.store?.world?.size;
  const width = Number(size?.width);
  const height = Number(size?.height);
  if (!Number.isFinite(width) || !Number.isFinite(height) || width < 1 || height < 1) {
    throw new Error("Save is missing store.world.size.");
  }
  return { width, height };
}

/**
 * Expand matrix RLE `[value, count, …]` (row-major).
 * Object cells (moving elements) are stored in `extras`; grid codes are negative indexes.
 */
export function decodeMatrix(rle, width, height) {
  if (!Array.isArray(rle)) throw new Error("Save is missing matrix.");
  const total = width * height;
  const cells = new Int32Array(total);
  const extras = [];
  let offset = 0;
  for (let i = 0; i + 1 < rle.length && offset < total; i += 2) {
    const raw = rle[i];
    const count = rle[i + 1] | 0;
    let code;
    if (raw !== null && typeof raw === "object") {
      extras.push(raw);
      code = -extras.length;
    } else {
      code = raw | 0;
    }
    const run = Math.min(Math.max(count, 0), total - offset);
    cells.fill(code, offset, offset + run);
    offset += run;
  }
  return { cells, extras };
}

export function encodeMatrix(cells, extras) {
  const total = cells.length;
  const out = [];
  if (total === 0) return out;
  let prev = valueAt(cells[0], extras);
  let run = 1;
  const flush = () => {
    while (run > 0) {
      const n = Math.min(run, RLE_MAX);
      out.push(prev, n);
      run -= n;
    }
  };
  for (let i = 1; i < total; i++) {
    const next = valueAt(cells[i], extras);
    if (next === prev) {
      run += 1;
      continue;
    }
    flush();
    prev = next;
    run = 1;
  }
  flush();
  return out;
}

function valueAt(code, extras) {
  if (code < 0) return extras[-code - 1];
  return code;
}
