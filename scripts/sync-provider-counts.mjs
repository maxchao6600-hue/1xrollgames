import fs from "fs";

const t = fs.readFileSync("src/data/games.ts", "utf8");
const blocks = t.split(/\{\s*id:/).slice(1);
const c = {};
for (const b of blocks) {
  const p = (b.match(/providerSlug:\s*"([^"]+)"/) || [])[1];
  if (p) c[p] = (c[p] || 0) + 1;
}
console.log(c);

let p = fs.readFileSync("src/data/providers.ts", "utf8");
for (const [slug, count] of Object.entries(c)) {
  const re = new RegExp(`(slug: "${slug}"[\\s\\S]*?gameCount: )\\d+`);
  if (!re.test(p)) {
    console.warn("no match", slug);
    continue;
  }
  p = p.replace(re, `$1${count}`);
}
fs.writeFileSync("src/data/providers.ts", p);
console.log("synced");
