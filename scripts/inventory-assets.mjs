import fs from "fs";
import path from "path";

const gamesTs = fs.readFileSync("src/data/games.ts", "utf8");
const blocks = gamesTs.split(/\{\s*id:/).slice(1);
const rows = [];
for (const b of blocks) {
  const slug = (b.match(/slug:\s*"([^"]+)"/) || [])[1];
  const name = (b.match(/name:\s*"([^"]+)"/) || [])[1];
  const provider = (b.match(/providerSlug:\s*"([^"]+)"/) || [])[1];
  const cat = (b.match(/category:\s*"([^"]+)"/) || [])[1];
  const img = (b.match(/image:\s*"([^"]+)"/) || [])[1];
  const status = (b.match(/status:\s*"([^"]+)"/) || [])[1] || "-";
  if (!slug) continue;
  const exists = img ? fs.existsSync(path.join("public", img.replace(/^\//, ""))) : false;
  rows.push({ slug, name, provider, cat, img, status, exists });
}
console.log(JSON.stringify(rows, null, 2));
const files = fs.readdirSync("public/games").filter((f) => f.endsWith(".webp")).map((f) => f.replace(/\.webp$/, ""));
const slugs = new Set(rows.map((r) => r.slug));
console.error("orphan assets:", files.filter((s) => !slugs.has(s)));
console.error("missing files:", rows.filter((r) => !r.exists).map((r) => r.slug));
