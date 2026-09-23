/**
 * Clean the homepage "Nation's Paradise" hero monument.
 *
 * Re-run from the repo root:
 *   pnpm clean:hero-monument
 *
 * Reads the preserved original WebP and writes AVIF, WebP, and JPEG at the
 * source pixel size. Never upscales. If the original is narrower than 1920px
 * the script still exports the native frame and prints that a higher-resolution
 * master is required.
 */
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const ORIGINAL = path.join(
  ROOT,
  "public/media/2026/E9BA618D-2E0A-4F15-A893-E86858069DA0-1_11zon-original.webp",
);
const OUT_DIR = path.join(ROOT, "public/media/2026");
const BASENAME = "hero-nations-paradise";

/**
 * Ellipse on the monument ring and pedestal only.
 * The right edge stops before the neighbouring brown building.
 */
const MONUMENT = {
  cx: 1000,
  cy: 470,
  rx: 95,
  ry: 250,
  /** Inner fraction of the ellipse that gets full strength. */
  inner: 0.78,
};

/**
 * Brown / orange / rust on the mosaic only.
 * Blue ring and lettering are excluded by the blue gate below.
 */
const MOSAIC = {
  hueMin: 15,
  hueMax: 45,
  saturationMin: 0.04,
  /** Remaining saturation as a fraction of the original. */
  saturationScale: 0.25,
  /** Added to HSL lightness, then clamped. */
  lightnessLift: 0.14,
  lightnessMax: 0.84,
};

/** Gentle whole-frame warm-cast neutralization. Does not touch saturated blue. */
const WARM_CAST = {
  hueMin: 10,
  hueMax: 60,
  saturationMax: 0.18,
  saturationScale: 0.75,
};

const BLUE_PROTECT = {
  hueMin: 185,
  hueMax: 255,
  saturationMin: 0.28,
};

/** Contrast pivot around mid grey: output = gain * input + bias. */
const CONTRAST = { gain: 1.05, bias: -6.4 };
/** Gentle denoise, then a light unsharp mask so lettering stays crisp. */
const DENOISE_SIGMA = 0.4;
const SHARPEN = { sigma: 0.85, m1: 0.55, m2: 0.3 };

const EXPORTS = {
  webp: { quality: 90, effort: 6, smartSubsample: false },
  avif: { quality: 68, effort: 6, chromaSubsampling: "4:4:4" },
  jpeg: { quality: 92, chromaSubsampling: "4:4:4", mozjpeg: true },
};

function rgbToHsl(r, g, b) {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const lightness = (max + min) / 2;
  const delta = max - min;
  if (delta === 0) {
    return { h: 0, s: 0, l: lightness };
  }
  const saturation =
    lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  let hue;
  switch (max) {
    case rn:
      hue = (gn - bn) / delta + (gn < bn ? 6 : 0);
      break;
    case gn:
      hue = (bn - rn) / delta + 2;
      break;
    default:
      hue = (rn - gn) / delta + 4;
  }
  return { h: hue * 60, s: saturation, l: lightness };
}

function hslToRgb(h, s, l) {
  const hue = ((h % 360) + 360) % 360;
  if (s === 0) {
    const value = Math.round(l * 255);
    return [value, value, value];
  }
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hp = hue / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  let r1 = 0;
  let g1 = 0;
  let b1 = 0;
  if (hp < 1) {
    r1 = c;
    g1 = x;
  } else if (hp < 2) {
    r1 = x;
    g1 = c;
  } else if (hp < 3) {
    g1 = c;
    b1 = x;
  } else if (hp < 4) {
    g1 = x;
    b1 = c;
  } else if (hp < 5) {
    r1 = x;
    b1 = c;
  } else {
    r1 = c;
    b1 = x;
  }
  const m = l - c / 2;
  return [
    Math.round((r1 + m) * 255),
    Math.round((g1 + m) * 255),
    Math.round((b1 + m) * 255),
  ];
}

function monumentStrength(x, y) {
  const nx = (x - MONUMENT.cx) / MONUMENT.rx;
  const ny = (y - MONUMENT.cy) / MONUMENT.ry;
  const distance = Math.hypot(nx, ny);
  if (distance >= 1) {
    return 0;
  }
  if (distance <= MONUMENT.inner) {
    return 1;
  }
  return 1 - (distance - MONUMENT.inner) / (1 - MONUMENT.inner);
}

function isProtectedBlue(h, s) {
  return (
    h >= BLUE_PROTECT.hueMin &&
    h <= BLUE_PROTECT.hueMax &&
    s >= BLUE_PROTECT.saturationMin
  );
}

function adjustPixels(data, width, height) {
  let mosaicPixels = 0;
  let castPixels = 0;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = (y * width + x) * 4;
      const red = data[index];
      const green = data[index + 1];
      const blue = data[index + 2];
      const { h, s, l } = rgbToHsl(red, green, blue);
      if (isProtectedBlue(h, s)) {
        continue;
      }

      const strength = monumentStrength(x, y);
      const inMosaic =
        strength > 0 &&
        h >= MOSAIC.hueMin &&
        h <= MOSAIC.hueMax &&
        s >= MOSAIC.saturationMin;

      if (inMosaic) {
        const nextS = s * (1 - strength * (1 - MOSAIC.saturationScale));
        const nextL = Math.min(
          MOSAIC.lightnessMax,
          l + MOSAIC.lightnessLift * strength,
        );
        const [nr, ng, nb] = hslToRgb(h, nextS, nextL);
        data[index] = nr;
        data[index + 1] = ng;
        data[index + 2] = nb;
        mosaicPixels += 1;
        continue;
      }

      if (
        h >= WARM_CAST.hueMin &&
        h <= WARM_CAST.hueMax &&
        s > 0.02 &&
        s <= WARM_CAST.saturationMax
      ) {
        const [nr, ng, nb] = hslToRgb(h, s * WARM_CAST.saturationScale, l);
        data[index] = nr;
        data[index + 1] = ng;
        data[index + 2] = nb;
        castPixels += 1;
      }
    }
  }
  return { mosaicPixels, castPixels };
}

async function blueRingAverage(file) {
  const { data, info } = await sharp(file)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  let count = 0;
  let red = 0;
  let green = 0;
  let blue = 0;
  for (let y = 0; y < info.height; y += 2) {
    for (let x = 0; x < info.width; x += 2) {
      if (monumentStrength(x, y) < 0.6) {
        continue;
      }
      const index = (y * info.width + x) * 4;
      const { h, s } = rgbToHsl(data[index], data[index + 1], data[index + 2]);
      if (!isProtectedBlue(h, s)) {
        continue;
      }
      count += 1;
      red += data[index];
      green += data[index + 1];
      blue += data[index + 2];
    }
  }
  if (count === 0) {
    return null;
  }
  return {
    count,
    rgb: [red / count, green / count, blue / count].map((value) =>
      Number(value.toFixed(2)),
    ),
  };
}

async function main() {
  const file = await stat(ORIGINAL);
  const meta = await sharp(ORIGINAL).metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;

  console.log(
    `source ${path.relative(ROOT, ORIGINAL)} ${width}x${height} ${file.size} bytes`,
  );
  if (width < 1920) {
    console.log(
      `STOP upscale: source is ${width}px wide, under 1920. A higher-resolution original is needed. Exporting at ${width}x${height} only.`,
    );
  }

  const { data, info } = await sharp(ORIGINAL)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const pixels = Buffer.from(data);
  const counts = adjustPixels(pixels, info.width, info.height);
  console.log(
    `mosaic pixels adjusted ${counts.mosaicPixels}; warm-cast pixels ${counts.castPixels}`,
  );

  const cleaned = sharp(pixels, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .blur(DENOISE_SIGMA)
    .linear(CONTRAST.gain, CONTRAST.bias)
    .sharpen(SHARPEN);

  await mkdir(OUT_DIR, { recursive: true });
  const webpPath = path.join(OUT_DIR, `${BASENAME}.webp`);
  const avifPath = path.join(OUT_DIR, `${BASENAME}.avif`);
  const jpegPath = path.join(OUT_DIR, `${BASENAME}.jpg`);

  await cleaned.clone().webp(EXPORTS.webp).toFile(webpPath);
  await cleaned.clone().avif(EXPORTS.avif).toFile(avifPath);
  await cleaned.clone().jpeg(EXPORTS.jpeg).toFile(jpegPath);

  const beforeBlue = await blueRingAverage(ORIGINAL);
  const afterBlue = await blueRingAverage(webpPath);
  console.log("blue ring before", beforeBlue);
  console.log("blue ring after", afterBlue);
  if (beforeBlue && afterBlue) {
    const drift = beforeBlue.rgb.map((value, index) =>
      Number((afterBlue.rgb[index] - value).toFixed(2)),
    );
    console.log("blue ring RGB drift", drift);
  }

  for (const filePath of [webpPath, avifPath, jpegPath]) {
    const written = await stat(filePath);
    const writtenMeta = await sharp(filePath).metadata();
    console.log(
      `wrote ${path.relative(ROOT, filePath)} ${writtenMeta.width}x${writtenMeta.height} ${written.size} bytes`,
    );
  }
}

await main();
