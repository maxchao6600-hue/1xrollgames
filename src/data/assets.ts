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
};

/** Homepage hero showcase — order is intentional */
export const HERO_GAME_SLUGS = [
  "fortune-tiger",
  "mahjong-ways-2",
  "lucky-neko",
  "gates-of-olympus",
] as const;

/** Featured rail — different set / order from hero; only mapped artwork */
export const FEATURED_RAIL_SLUGS = [
  "sweet-bonanza",
  "crazy-time",
  "aviator",
  "big-bass-splash",
  "starlight-princess",
  "lightning-roulette",
  "mines",
  "sugar-rush",
  "wild-bandito",
  "treasures-of-aztec",
  "big-bass-bonanza",
  "the-dog-house",
] as const;

/** Category card artwork = representative game from that category */
export const CATEGORY_ASSETS: Record<
  "slots" | "live-casino" | "fast-games" | "fishing",
  { imageSlug: string; image: string }
> = {
  slots: {
    imageSlug: "gates-of-olympus",
    image: "/games/gates-of-olympus.webp",
  },
  "live-casino": {
    imageSlug: "crazy-time",
    image: "/games/crazy-time.webp",
  },
  "fast-games": {
    imageSlug: "aviator",
    image: "/games/aviator.webp",
  },
  fishing: {
    imageSlug: "big-bass-splash",
    image: "/games/big-bass-splash.webp",
  },
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
