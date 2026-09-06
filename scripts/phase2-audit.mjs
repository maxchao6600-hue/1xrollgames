import fs from "fs";
const t = fs.readFileSync("src/data/category-pages.ts", "utf8");
console.log(
  "brace delta",
  (t.match(/\{/g) || []).length - (t.match(/\}/g) || []).length,
);
const titles = [...t.matchAll(/id: "([^"]+)"[\s\S]*?pageTitle:\s*\{[\s\S]*?en: "([^"]+)"/g)];
for (const m of titles) console.log(m[1], "=>", m[2]);
const banned = ["1,187", "1187", "1XROLL Malaysia", "Preview unavailable"];
for (const b of banned) {
  const n = (t.match(new RegExp(b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length;
  console.log("in category-pages", b, n);
}
const faq = fs.readFileSync("src/data/faq.ts", "utf8");
for (const b of banned) {
  const n = (faq.match(new RegExp(b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length;
  console.log("in faq", b, n);
}
