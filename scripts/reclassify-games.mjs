import fs from "node:fs";

const path = "src/data/games.ts";
let s = fs.readFileSync(path, "utf8");

for (const slug of ["aviator", "goal", "mines", "plinko"]) {
  const re = new RegExp(
    `(slug: "${slug}"[\\s\\S]*?category: )"fast-games"`,
  );
  if (!re.test(s)) {
    console.log("miss", slug);
  } else {
    s = s.replace(re, '$1"crypto-games"');
    console.log("ok", slug);
  }
}

s = s.replace(
  /(slug: "big-bass-bonanza"[\s\S]*?category: )"slots"/,
  '$1"fishing"',
);
console.log("bonanza -> fishing");

fs.writeFileSync(path, s);
