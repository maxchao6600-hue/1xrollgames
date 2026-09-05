import fs from "fs";

const extras = {
  "fruit-party": "/games/fruit-party.webp",
  "aztec-gems": "/games/aztec-gems.webp",
  "candy-village": "/games/candy-village.webp",
  "great-rhino": "/games/great-rhino.webp",
  "buffalo-king-megaways": "/games/buffalo-king-megaways.webp",
  "wolf-gold": "/games/wolf-gold.webp",
  "power-of-thor": "/games/power-of-thor.webp",
  "hand-of-midas": "/games/hand-of-midas.webp",
  "fortune-ox": "/games/fortune-ox.webp",
  "fortune-rabbit": "/games/fortune-rabbit.webp",
  "fortune-dragon": "/games/fortune-dragon.webp",
  "fortune-mouse": "/games/fortune-mouse.webp",
  crash: "/games/crash.webp",
  "chicken-road": "/games/chicken-road.webp",
  "speed-baccarat-b": "/games/speed-baccarat-b.webp",
  "super-sic-bo": "/games/super-sic-bo.webp",
  "bac-bo": "/games/bac-bo.webp",
};

let a = fs.readFileSync("src/data/assets.ts", "utf8");

if (!a.includes('"fruit-party"')) {
  const lines = Object.entries(extras)
    .map(([k, v]) =>
      /^[a-zA-Z_$][\w$]*$/.test(k)
        ? `  ${k}: "${v}",`
        : `  "${k}": "${v}",`,
    )
    .join("\n");
  a = a.replace(
    '  plinko: "/games/plinko.webp",\n};',
    `  plinko: "/games/plinko.webp",\n${lines}\n};`,
  );
}

a = a.replace(
  /export const HERO_GAME_SLUGS = \[[\s\S]*?\] as const;/,
  `export const HERO_GAME_SLUGS = [
  "fortune-tiger",
  "mahjong-ways-2",
  "lucky-neko",
] as const;`,
);

fs.writeFileSync("src/data/assets.ts", a);
console.log("GAME_ASSETS keys approx", (a.match(/\/games\//g) || []).length);
