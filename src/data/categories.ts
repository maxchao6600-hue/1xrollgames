import type { Category, CategoryId } from "@/types/content";

export const categories: Category[] = [
  {
    id: "slots",
    slug: "slots",
    inventoryMode: "catalogue",
    routeBase: "games",
    name: { en: "Slots", zh: "老虎机" },
    shortDescription: {
      en: "Reel games with themes, feature rounds, and studio-specific pacing.",
      zh: "以转轴为核心的主题游戏，包含特色回合与各工作室独特的节奏设计。",
    },
    description: {
      en: `Slot games remain the broadest discovery surface in the 1XROLL catalogue. Browse themes and studios, then open titles for mechanics notes — without invented RTP claims.`,
      zh: `老虎机仍是 1XROLL 目录中最广阔的发现入口。按主题与工作室浏览，再打开作品页了解机制说明——不编造返还率。`,
    },
    accent: "#FFC45A",
  },
  {
    id: "live-casino",
    slug: "live-casino",
    inventoryMode: "catalogue",
    routeBase: "games",
    name: { en: "Live Casino", zh: "真人赌场" },
    shortDescription: {
      en: "Hosted live tables and game shows with real-time studio pacing.",
      zh: "由主持人带动的真人桌台与游戏秀，强调实时工作室节奏。",
    },
    description: {
      en: `Live tables blend classic structures with studio production. Compare baccarat, roulette, game shows and more from verified catalogue entries.`,
      zh: `真人桌台把经典结构与工作室制作结合。从已核实目录中比较百家乐、轮盘、游戏秀等体验。`,
    },
    accent: "#F59E0B",
  },
  {
    id: "hash-roulette",
    slug: "hash-roulette",
    inventoryMode: "hub",
    routeBase: "games",
    name: { en: "Hash Roulette", zh: "哈希轮盘" },
    shortDescription: {
      en: "Hash-based roulette experiences on the 1XROLL platform.",
      zh: "1XROLL 平台上的哈希轮盘体验。",
    },
    description: {
      en: `Hash Roulette sits in the 1XROLL entertainment ecosystem as a transparency-oriented roulette lane. This brand site explains the category and connects you to platform access — individual lobby titles are opened on the 1XROLL platform after login. Review Fair Play for how we talk about transparency concepts without inventing on-chain guarantees.`,
      zh: `哈希轮盘是 1XROLL 娱乐生态中偏透明取向的轮盘通道。本品牌站说明类别并连接平台入口——具体大厅作品需登录 1XROLL 平台后查看。关于透明度表述请参阅公平游戏页，我们不编造链上保证。`,
    },
    accent: "#A78BFA",
  },
  {
    id: "hash-games",
    slug: "hash-games",
    inventoryMode: "hub",
    routeBase: "games",
    name: { en: "Hash Games", zh: "哈希游戏" },
    shortDescription: {
      en: "Hash entertainment formats available on the platform lobby.",
      zh: "平台大厅中的哈希娱乐玩法。",
    },
    description: {
      en: `Hash Games cover blockchain-inspired short formats on the 1XROLL platform. This hub describes the lane and links to fair-play guidance. Catalogue detail pages are not invented here — open the live lobby for current titles.`,
      zh: `哈希游戏涵盖 1XROLL 平台上偏区块链灵感的短格式玩法。本页说明通道并链接公平游戏指引。此处不虚构作品详情页——请在实时大厅查看当前作品。`,
    },
    accent: "#8B5CF6",
  },
  {
    id: "crypto-games",
    slug: "crypto-games",
    inventoryMode: "catalogue",
    routeBase: "games",
    name: { en: "Crypto Games", zh: "加密游戏" },
    shortDescription: {
      en: "Spribe-style short rounds with clear decision loops.",
      zh: "偏 Spribe 风格、决策清晰的短回合玩法。",
    },
    description: {
      en: `Crypto Games on this site highlight verified Spribe catalogue titles such as Aviator, Mines, Plinko and Goal — mobile-friendly rounds with transparent interfaces. Play happens on the 1XROLL platform.`,
      zh: `本站加密游戏聚焦已核实的 Spribe 目录作品，如 Aviator、Mines、Plinko 与 Goal——界面清晰、适合移动端的短回合。实际游玩在 1XROLL 平台进行。`,
    },
    accent: "#22D3EE",
  },
  {
    id: "fast-games",
    slug: "fast-games",
    inventoryMode: "catalogue",
    routeBase: "games",
    name: { en: "Fast Games", zh: "快速游戏" },
    shortDescription: {
      en: "Timing and crash-style rounds with instant resolution.",
      zh: "偏时机与崩溃曲线的即时结算短局。",
    },
    description: {
      en: `Fast Games focus on crash curves and rapid loops from our verified catalogue (including Crash and Chicken Road). Short rounds reward deliberate breaks — see Responsible Gaming.`,
      zh: `快速游戏聚焦已核实目录中的崩溃曲线与快速循环（含 Crash、Chicken Road）。短回合更需要刻意休息——请参阅理性游戏。`,
    },
    accent: "#2DD4BF",
  },
  {
    id: "fishing",
    slug: "fishing",
    inventoryMode: "catalogue",
    routeBase: "games",
    name: { en: "Fishing Games", zh: "捕鱼游戏" },
    shortDescription: {
      en: "Arcade fishing rooms with wave bosses and targeting loops.",
      zh: "街机捕鱼房间，含波次首领与瞄准循环。",
    },
    description: {
      en: `Fishing titles in this catalogue include Big Bass Splash and Big Bass Hold & Spinner, with related Big Bass Bonanza listed where classified for discovery. Arcade presentation can feel skillful while still including chance.`,
      zh: `本目录捕鱼作品包含 Big Bass Splash 与 Big Bass Hold & Spinner，相关 Big Bass Bonanza 按发现分类列出。街机呈现可能很有技巧感，同时仍含机会成分。`,
    },
    accent: "#FB7185",
  },
  {
    id: "sports",
    slug: "sports",
    inventoryMode: "hub",
    routeBase: "top",
    name: { en: "Sports", zh: "体育" },
    shortDescription: {
      en: "Sports entertainment access on the 1XROLL platform.",
      zh: "1XROLL 平台上的体育娱乐入口。",
    },
    description: {
      en: `Sports on 1XROLL is a platform entertainment lane. This site provides an overview and entry guidance — we do not publish live odds, fixtures, or invented match data.`,
      zh: `体育是 1XROLL 的平台娱乐通道。本站提供概览与入口指引——不发布实时赔率、赛程或虚构赛事数据。`,
    },
    accent: "#34D399",
  },
  {
    id: "chess-card",
    slug: "chess-card",
    inventoryMode: "hub",
    routeBase: "games",
    name: { en: "Chess & Card", zh: "棋牌" },
    shortDescription: {
      en: "Card and table-style entertainment on the platform.",
      zh: "平台上的棋牌与桌台风格娱乐。",
    },
    description: {
      en: `Chess & Card covers platform card and table formats. This hub explains the lane; specific lobby titles open on the 1XROLL platform after login.`,
      zh: `棋牌涵盖平台卡牌与桌台玩法。本页说明通道；具体大厅作品需登录 1XROLL 平台后查看。`,
    },
    accent: "#F472B6",
  },
  {
    id: "lottery",
    slug: "lottery",
    inventoryMode: "hub",
    routeBase: "top",
    name: { en: "Lottery", zh: "彩票" },
    shortDescription: {
      en: "Lottery-style entertainment available on the platform.",
      zh: "平台上的彩票风格娱乐。",
    },
    description: {
      en: `Lottery is part of the wider 1XROLL ecosystem. This page orients you without fabricating draw results or jackpot claims. Open the platform lobby for live lottery products.`,
      zh: `彩票属于更广的 1XROLL 生态。本页提供导览，不编造开奖结果或头奖承诺。实时彩票产品请在平台大厅查看。`,
    },
    accent: "#FB923C",
  },
];

export function getCategory(id: string) {
  return categories.find((c) => c.id === id || c.slug === id);
}

export function getCategoryById(id: string) {
  return categories.find((c) => c.id === id);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getCatalogueCategories() {
  return categories.filter((c) => c.inventoryMode === "catalogue");
}

export function categoryHref(localePrefix: string, category: Category): string {
  if (category.routeBase === "top") {
    return `${localePrefix}/${category.slug}`;
  }
  return `${localePrefix}/games/${category.slug}`;
}

export function categoryPath(categoryId: CategoryId): string {
  const cat = getCategoryById(categoryId);
  if (!cat) return `/games/${categoryId}`;
  if (cat.routeBase === "top") return `/${cat.slug}`;
  return `/games/${cat.slug}`;
}
