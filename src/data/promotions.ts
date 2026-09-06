import type { LocalizedString } from "@/types/content";
import { resolvePromotionImage } from "@/data/assets";

export type Promotion = {
  id: string;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  image?: string;
  ctaLabel: LocalizedString;
  href: string;
  status: "active" | "info";
};

/** Verified welcome figures mirrored from published brand summaries. */
export const PUBLISHED_WELCOME = {
  match: "200%",
  ceiling: "8,888 USDT",
  turnover: "25×",
  minDeposit: "10 USDT",
} as const;

/** Verified VIP cashback ceiling mirrored from published brand summaries. */
export const PUBLISHED_VIP_CASHBACK = "1.1%" as const;

/** Published 1XROLL offers as mirrored on this brand site. */
const promotionsRaw: Omit<Promotion, "image">[] = [
  {
    id: "welcome-200",
    slug: "welcome-bonus",
    title: {
      en: "200% first deposit bonus",
      zh: "200% 首存优惠",
    },
    description: {
      en: "Up to 8,888 USDT on your first top-up. 25× turnover. Min. deposit 10 USDT. Terms apply.",
      zh: "首次充值最高 8,888 USDT。25 倍流水。最低存款 10 USDT。以活动条款为准。",
    },
    ctaLabel: { en: "Claim now", zh: "立即领取" },
    href: "/register",
    status: "active",
  },
  {
    id: "vip-cashback",
    slug: "vip-cashback",
    title: {
      en: "VIP cashback up to 1.1%",
      zh: "VIP 返水最高 1.1%",
    },
    description: {
      en: "Earn VIP cashback on eligible bets. Higher tiers unlock increased rates and perks.",
      zh: "符合条件的投注可获 VIP 返水。更高等级解锁更高比例与礼遇。",
    },
    ctaLabel: { en: "View VIP", zh: "查看 VIP" },
    href: "/vip",
    status: "active",
  },
  {
    id: "prize-pool",
    slug: "prize-pool",
    title: {
      en: "Prize pool events",
      zh: "奖池活动",
    },
    description: {
      en: "Prize-pool style events run on selected slot titles when they are live. Confirm current event rules on the platform.",
      zh: "活动期间可在指定老虎机作品中参与奖池类竞赛。请在平台确认当期规则。",
    },
    ctaLabel: { en: "View details", zh: "查看详情" },
    href: "/promotions",
    status: "active",
  },
];

export const promotions: Promotion[] = promotionsRaw.map((p) => ({
  ...p,
  image: resolvePromotionImage(p.slug),
}));

export function getPromotionBySlug(slug: string) {
  return promotions.find((p) => p.slug === slug);
}
