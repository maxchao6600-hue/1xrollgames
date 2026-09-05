/**
 * Validates asset maps against files on disk (no TS import).
 * Also rejects soft-404 HTML files pretending to be .webp.
 */
import fs from "fs";
import path from "path";

const root = path.resolve("public");
const assetsSrc = fs.readFileSync("src/data/assets.ts", "utf8");
const gamesSrc = fs.readFileSync("src/data/games.ts", "utf8");

const errors = [];
const warnings = [];

function exists(publicPath) {
  return fs.existsSync(path.join(root, publicPath.replace(/^\//, "")));
}

function isRealImage(publicPath) {
  const abs = path.join(root, publicPath.replace(/^\//, ""));
  if (!fs.existsSync(abs)) return false;
  if (publicPath.endsWith(".svg") || publicPath.endsWith(".png")) return true;
  const b = Buffer.from(fs.readFileSync(abs)).subarray(0, 4);
  // RIFF....WEBP
  return b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46;
}

function extractRecord(blockName) {
  const re = new RegExp(
    `export const ${blockName}[^=]*=\\s*\\{([\\s\\S]*?)\\n\\};`,
  );
  const m = assetsSrc.match(re);
  if (!m) return {};
  const map = {};
  const pair = /"([^"]+)"\s*:\s*"([^"]+)"|(\w+)\s*:\s*"([^"]+)"/g;
  let hit;
  while ((hit = pair.exec(m[1]))) {
    const key = hit[1] || hit[3];
    const val = hit[2] || hit[4];
    if (key && val && val.startsWith("/")) map[key] = val;
  }
  return map;
}

const GAME_ASSETS = extractRecord("GAME_ASSETS");
const PROVIDER_ASSETS = extractRecord("PROVIDER_ASSETS");
const PROMOTION_ASSETS = extractRecord("PROMOTION_ASSETS");
const GUIDE_ASSETS = extractRecord("GUIDE_ASSETS");

function checkMap(label, map) {
  for (const [key, file] of Object.entries(map)) {
    if (!exists(file)) errors.push(`${label} missing file: ${key} → ${file}`);
    else if (!isRealImage(file)) {
      errors.push(`${label} invalid image payload: ${key} → ${file}`);
    }
  }
}

checkMap("GAME_ASSETS", GAME_ASSETS);
checkMap("PROVIDER_ASSETS", PROVIDER_ASSETS);
checkMap("PROMOTION_ASSETS", PROMOTION_ASSETS);
checkMap("GUIDE_ASSETS", GUIDE_ASSETS);

["/brand/logo.png", "/og-default.svg", "/app/qr.webp", "/app/screenshot.webp"].forEach(
  (p) => {
    if (!exists(p)) errors.push(`Brand/app missing: ${p}`);
    else if ((p.endsWith(".webp") || p.endsWith(".png")) && !isRealImage(p)) {
      errors.push(`Brand/app invalid image: ${p}`);
    }
  },
);

[
  "/categories/sports.svg",
  "/categories/lottery.svg",
  "/categories/hash-games.svg",
  "/categories/hash-roulette.svg",
  "/categories/chess-card.svg",
  "/categories/rebates.svg",
].forEach((p) => {
  if (!exists(p)) errors.push(`Category panel missing: ${p}`);
});

// CATEGORY_ASSETS image paths (nested objects)
{
  const catBlock = assetsSrc.match(
    /export const CATEGORY_ASSETS[\s\S]*?\n\};/,
  )?.[0];
  if (catBlock) {
    const imgs = [...catBlock.matchAll(/image:\s*"([^"]+)"/g)].map((m) => m[1]);
    for (const file of imgs) {
      if (!exists(file)) errors.push(`CATEGORY_ASSETS missing file: ${file}`);
    }
  }
}

const gameSlugs = [...gamesSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
for (const slug of gameSlugs) {
  if (!GAME_ASSETS[slug]) {
    warnings.push(`Game slug has no artwork map (gradient placeholder): ${slug}`);
  } else if (!exists(GAME_ASSETS[slug])) {
    errors.push(`Game artwork missing on disk: ${slug} → ${GAME_ASSETS[slug]}`);
  } else if (!isRealImage(GAME_ASSETS[slug])) {
    errors.push(`Game artwork invalid: ${slug}`);
  }
}

const files = fs
  .readdirSync(path.join(root, "games"))
  .filter((f) => f.endsWith(".webp"))
  .map((f) => f.replace(/\.webp$/, ""));
for (const slug of files) {
  if (!GAME_ASSETS[slug]) {
    warnings.push(`Orphan game file not mapped: ${slug}.webp`);
  }
}

const heroMatch = assetsSrc.match(/HERO_GAME_SLUGS[\s\S]*?\[([\s\S]*?)\]/);
const featuredMatch = assetsSrc.match(/FEATURED_RAIL_SLUGS[\s\S]*?\[([\s\S]*?)\]/);
const hero = heroMatch?.[1] || "";
const featured = featuredMatch?.[1] || "";
const featuredSlugs = [
  ...hero.matchAll(/"([^"]+)"/g),
  ...featured.matchAll(/"([^"]+)"/g),
].map((m) => m[1]);
for (const slug of featuredSlugs) {
  if (!GAME_ASSETS[slug]) errors.push(`Hero/featured slug missing map: ${slug}`);
}

if (warnings.length) {
  console.warn("WARNINGS");
  warnings.forEach((w) => console.warn(" -", w));
}
if (errors.length) {
  console.error("ERRORS");
  errors.forEach((e) => console.error(" -", e));
  process.exit(1);
}

console.log(
  `Asset validation OK — games:${Object.keys(GAME_ASSETS).length} providers:${Object.keys(PROVIDER_ASSETS).length} promotions:${Object.keys(PROMOTION_ASSETS).length} guides:${Object.keys(GUIDE_ASSETS).length}`,
);
