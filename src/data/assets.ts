/**
 * Central asset maps — Game / Provider / Promotion / Guide / Brand.
 * UI must resolve images only through these maps (deterministic, never random).
 * Only list files that exist as real images on disk (validated by scripts/validate-assets.mjs).
 */

export const BRAND_ASSETS = {
  logo: "/brand/logo.png",
  og: "/og-default.svg",
} as const;

/** Explicit game slug → artwork path under /public */
export const GAME_ASSETS: Record<string, string> = {
  "fortune-tiger": "/games/fortune-tiger.webp",
  "mahjong-ways-2": "/games/mahjong-ways-2.webp",
  "lucky-neko": "/games/lucky-neko.webp",
  "wild-bandito": "/games/wild-bandito.webp",
  "treasures-of-aztec": "/games/treasures-of-aztec.webp",
  "gates-of-olympus": "/games/gates-of-olympus.webp",
  "sweet-bonanza": "/games/sweet-bonanza.webp",
  "starlight-princess": "/games/starlight-princess.webp",
  "big-bass-bonanza": "/games/big-bass-bonanza.webp",
  "big-bass-splash": "/games/big-bass-splash.webp",
  "big-bass-hold-and-spinner": "/games/big-bass-hold-and-spinner.webp",
  "the-dog-house": "/games/the-dog-house.webp",
  "sugar-rush": "/games/sugar-rush.webp",
  "caishen-wins": "/games/caishen-wins.webp",
  "crazy-time": "/games/crazy-time.webp",
  "lightning-roulette": "/games/lightning-roulette.webp",
  aviator: "/games/aviator.webp",
  mines: "/games/mines.webp",
  plinko: "/games/plinko.webp",
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

/** Homepage hero showcase — order is intentional */
export const HERO_GAME_SLUGS = [
  "fortune-tiger",
  "mahjong-ways-2",
  "lucky-neko",
] as const;

/** Featured rail — different set / order from hero; only mapped artwork */
export const FEATURED_RAIL_SLUGS = [
  "sweet-bonanza",
  "crazy-time",
  "aviator",
  "big-bass-splash",
  "fortune-ox",
  "starlight-princess",
  "lightning-roulette",
  "crash",
  "sugar-rush",
  "bac-bo",
  "wild-bandito",
  "chicken-road",
] as const;

/**
 * Category card artwork — deterministic map (never random / index-based).
 * Catalogue lanes use representative game art; hub lanes use thematic art or dedicated category panels.
 * objectPosition tuned for wide 16:7 / 16:9 card crops.
 */
export const CATEGORY_ASSETS: Record<
  string,
  { imageSlug?: string; image: string; objectPosition?: string }
> = {
  slots: {
    imageSlug: "gates-of-olympus",
    image: "/games/gates-of-olympus.webp",
    objectPosition: "center 20%",
  },
  "live-casino": {
    imageSlug: "crazy-time",
    image: "/games/crazy-time.webp",
    objectPosition: "22% 48%",
  },
  "hash-roulette": {
    imageSlug: "lightning-roulette",
    image: "/games/lightning-roulette.webp",
    objectPosition: "32% 68%",
  },
  "hash-games": {
    image: "/categories/hash-games.svg",
    objectPosition: "center center",
  },
  "crypto-games": {
    imageSlug: "aviator",
    image: "/games/aviator.webp",
    objectPosition: "center 22%",
  },
  "fast-games": {
    imageSlug: "crash",
    image: "/games/crash.webp",
    objectPosition: "center 35%",
  },
  fishing: {
    imageSlug: "big-bass-bonanza",
    image: "/games/big-bass-bonanza.webp",
    objectPosition: "center 30%",
  },
  sports: {
    image: "/categories/sports.svg",
    objectPosition: "center center",
  },
  "chess-card": {
    imageSlug: "bac-bo",
    image: "/games/bac-bo.webp",
    objectPosition: "center 45%",
  },
  lottery: {
    image: "/categories/lottery.svg",
    objectPosition: "center center",
  },
};

export const REWARD_ASSETS: Record<string, string> = {
  "activity-center": "/promotions/jackpot.webp",
  "rewards-center": "/promotions/welcome.webp",
  rebates: "/promotions/vip.webp",
  "vip-club": "/promotions/vip.webp",
  promotions: "/promotions/welcome.webp",
};

export const PROVIDER_ASSETS: Record<string, string> = {
  "pragmatic-play": "/providers/pragmatic-play.webp",
  "pg-soft": "/providers/pg-soft.webp",
  evolution: "/providers/evolution.webp",
  spribe: "/providers/spribe.webp",
  jili: "/providers/jili.svg",
  endorphina: "/providers/endorphina.webp",
  "relax-gaming": "/providers/relax-gaming.webp",
  playson: "/providers/playson.webp",
};

export const PROMOTION_ASSETS: Record<string, string> = {
  "welcome-bonus": "/promotions/welcome.webp",
  "vip-cashback": "/promotions/vip.webp",
  "prize-pool": "/promotions/jackpot.webp",
};

/** Guide cover = related game artwork (explicit), never random */
export const GUIDE_ASSETS: Record<string, string> = {
  "fortune-tiger-guide": "/games/fortune-tiger.webp",
  "mahjong-ways-2-guide": "/games/mahjong-ways-2.webp",
  "gates-of-olympus-guide": "/games/gates-of-olympus.webp",
  "understanding-rtp-volatility": "/games/treasures-of-aztec.webp",
  "live-casino-basics": "/games/crazy-time.webp",
  "mobile-gaming-guide": "/games/aviator.webp",
};

export const APP_ASSETS = {
  qr: "/app/qr.webp",
  screenshot: "/app/screenshot.webp",
} as const;

export function resolveGameImage(slug: string): string | undefined {
  return GAME_ASSETS[slug];
}

export function resolveProviderLogo(slug: string): string | undefined {
  return PROVIDER_ASSETS[slug];
}

export function resolvePromotionImage(slug: string): string | undefined {
  return PROMOTION_ASSETS[slug];
}

export function resolveGuideImage(slug: string): string | undefined {
  return GUIDE_ASSETS[slug];
}

export function gameImageAlt(
  gameName: string,
  providerName: string,
  categoryLabel: string,
): string {
  return `${gameName} ${categoryLabel} by ${providerName} on 1XROLL`;
}

export function providerLogoAlt(providerName: string): string {
  return `${providerName} game provider logo`;
}
