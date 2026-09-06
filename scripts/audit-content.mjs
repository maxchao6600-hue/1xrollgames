import fs from "fs";
const g = fs.readFileSync("src/data/games.ts", "utf8");
const cats = {};
for (const m of g.matchAll(/category:\s*"([^"]+)"/g)) {
  cats[m[1]] = (cats[m[1]] || 0) + 1;
}
console.log(cats);
console.log("total", Object.values(cats).reduce((a, b) => a + b, 0));

const files = [];
function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = dir + "/" + name;
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (/\.(ts|tsx|md|json)$/.test(name)) files.push(p);
  }
}
walk("src");
const needles = ["Malaysia", "Preview unavailable", "official Android app", "official Android"];
for (const n of needles) {
  const hits = [];
  for (const f of files) {
    const t = fs.readFileSync(f, "utf8");
    if (t.includes(n)) hits.push(f);
  }
  console.log(n, hits.length ? hits : "none");
}
