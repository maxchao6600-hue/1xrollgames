import type { CategoryId, Locale, LocalizedString } from "@/types/content";
import { categories, categoryPath } from "@/data/categories";
import { CATEGORY_ASSETS } from "@/data/assets";
import { getGamesByCategory } from "@/data/queries";

export type EcosystemEyebrow = "catalogue" | "platform";

export type HomeEcosystemCategory = {
  id: CategoryId;
  slug: string;
  href: string;
  eyebrow: EcosystemEyebrow;
  name: LocalizedString;
  description: LocalizedString;
  image: string;
  objectPosition: string;
  inventoryMode: "catalogue" | "hub";
};

/** Homepage ecosystem lane copy — short, user-facing, no “orientation hub” jargon */
const ECOSYSTEM_COPY: Record<
  CategoryId,
  { description: LocalizedString }
> = {
  slots: {
    description: {
      en: "Reel games and feature rounds from leading studios.",
      zh: "主流工作室的转轴游戏与特色回合。",
    },
  },
  "live-casino": {
    description: {
      en: "Hosted tables and live game shows.",
      zh: "主持人桌台与真人游戏秀。",
    },
  },
  "hash-roulette": {
    description: {
      en: "Hash roulette on the 1XROLL platform.",
      zh: "1XROLL 平台上的哈希轮盘。",
    },
  },
  "hash-games": {
    description: {
      en: "Short hash entertainment formats.",
      zh: "哈希短格式娱乐玩法。",
    },
  },
  "crypto-games": {
    description: {
      en: "Fast crypto-style rounds and decision loops.",
      zh: "加密风格短回合与决策玩法。",
    },
  },
  "fast-games": {
    description: {
      en: "Crash and timing games for quick sessions.",
      zh: "适合短局的崩溃与时机玩法。",
    },
  },
  fishing: {
    description: {
      en: "Arcade fishing rooms with skill pacing.",
      zh: "偏技巧节奏的街机捕鱼。",
    },
  },
  sports: {
    description: {
      en: "Sports entertainment on the platform.",
      zh: "平台体育娱乐入口。",
    },
  },
  "chess-card": {
    description: {
      en: "Card and table-style entertainment.",
      zh: "棋牌与桌台风格娱乐。",
    },
  },
  lottery: {
    description: {
      en: "Lottery-style entertainment on 1XROLL.",
      zh: "1XROLL 彩票风格娱乐。",
    },
  },
};

/**
 * Single source of truth for homepage Game Ecosystem cards.
 * Images + object-position come from CATEGORY_ASSETS (deterministic, never random).
 */
export function getHomeEcosystemCategories(): HomeEcosystemCategory[] {
  return categories.map((cat) => {
    const asset = CATEGORY_ASSETS[cat.id];
    return {
      id: cat.id,
      slug: cat.slug,
      href: categoryPath(cat.id),
      eyebrow: cat.inventoryMode === "hub" ? "platform" : "catalogue",
      name: cat.name,
      description: ECOSYSTEM_COPY[cat.id].description,
      image: asset.image,
      objectPosition: asset.objectPosition ?? "center center",
      inventoryMode: cat.inventoryMode,
    };
  });
}

export function ecosystemMetricLabel(
  cat: HomeEcosystemCategory,
  locale: Locale,
): string {
  if (cat.inventoryMode === "hub") {
    return locale === "zh" ? "平台入口" : "Platform access";
  }
  const count = getGamesByCategory(cat.id).length;
  if (count <= 0) {
    return locale === "zh" ? "浏览合集" : "Explore collection";
  }
  return locale === "zh" ? `${count} 款游戏` : `${count} games`;
}

export function ecosystemEyebrowLabel(
  eyebrow: EcosystemEyebrow,
  locale: Locale,
): string {
  if (eyebrow === "platform") {
    return locale === "zh" ? "平台" : "Platform";
  }
  return locale === "zh" ? "目录" : "Catalogue";
}
