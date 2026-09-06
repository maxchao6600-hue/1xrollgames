import { writeFileSync } from "fs";

const routes = [
  "/",
  "/en",
  "/en/games",
  "/en/games/slots",
  "/en/games/live-casino",
  "/en/games/hash-roulette",
  "/en/games/hash-games",
  "/en/games/crypto-games",
  "/en/games/fast-games",
  "/en/games/fishing",
  "/en/games/fishing-games",
  "/en/sports",
  "/en/games/chess-card",
  "/en/lottery",
  "/en/providers",
  "/en/promotions",
  "/en/rewards",
  "/en/vip",
  "/en/guides",
  "/en/download",
  "/en/agent",
  "/en/about",
  "/en/fair-play",
  "/en/responsible-gaming",
  "/en/faq",
  "/en/contact",
  "/zh",
  "/zh/games",
  "/zh/games/slots",
  "/zh/games/hash-roulette",
  "/zh/sports",
  "/zh/rewards",
  "/zh/vip",
  "/zh/faq",
  "/zh/about",
  "/robots.txt",
  "/sitemap.xml",
];

const needles = [
  "1XROLL Malaysia",
  "Preview unavailable",
  "Image unavailable",
  "No preview",
  "localhost:3000",
  "workers.dev",
  "official Android app",
  "1,187+",
  "1,187",
  "1XROLL · 1XROLL",
];

async function fetchText(url) {
  const res = await fetch(url, { redirect: "manual" });
  const loc = res.headers.get("location");
  let body = "";
  try {
    body = await res.text();
  } catch {
    body = "";
  }
  return { status: res.status, loc, body };
}

function countH1(html) {
  return [...html.matchAll(/<h1[\s>]/gi)].length;
}

function title(html) {
  const m = html.match(/<title>([^<]*)<\/title>/i);
  return m ? m[1] : "";
}

function canonical(html) {
  const m = html.match(/rel="canonical" href="([^"]+)"/i);
  return m ? m[1] : "";
}

function metaDesc(html) {
  const m = html.match(/name="description" content="([^"]*)"/i);
  return m ? m[1] : "";
}

function h1Text(html) {
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  return m ? m[1].replace(/<[^>]+>/g, "").trim().slice(0, 80) : "";
}

const origin = "https://1xrollgames.com";
const rows = [];
for (const path of routes) {
  const r = await fetchText(origin + path);
  const hits = needles.filter((n) => r.body.includes(n));
  rows.push({
    path,
    status: r.status,
    loc: r.loc,
    title: title(r.body),
    h1n: countH1(r.body),
    h1: h1Text(r.body),
    canonical: canonical(r.body),
    descLen: metaDesc(r.body).length,
    hits,
  });
  console.log(
    path,
    r.status,
    r.loc || "",
    "| t:",
    title(r.body).slice(0, 60),
    "| h1:",
    countH1(r.body),
    h1Text(r.body),
    "| hits:",
    hits.join(",") || "-",
  );
}

writeFileSync("scripts/prod-crawl.json", JSON.stringify(rows, null, 2));
