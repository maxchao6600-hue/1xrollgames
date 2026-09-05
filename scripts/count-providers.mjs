import fs from "fs";
const t = fs.readFileSync("src/data/games.ts", "utf8");
const blocks = t.split(/\{\s*id:/).slice(1);
const c = {};
for (const b of blocks) {
  const p = (b.match(/providerSlug:\s*"([^"]+)"/) || [])[1];
  if (p) c[p] = (c[p] || 0) + 1;
}
console.log(c);
