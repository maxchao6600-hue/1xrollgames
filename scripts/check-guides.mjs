import fs from "fs";
const g = fs.readFileSync("src/data/guides.ts", "utf8");
const slugs = [...g.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);
console.log("guides", slugs.length, slugs);
