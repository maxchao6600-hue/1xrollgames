import type { LocalizedString } from "@/types/content";

export type Promotion = {
  id: string;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  image?: string;
  ctaLabel: LocalizedString;
  status: "active" | "info";
};

/** Official 1XROLL offers as published on the brand network. */
export const promotions: Promotion[] = [
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
    image: "/promotions/welcome.webp",
    ctaLabel: { en: "Claim now", zh: "立即领取" },
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
    image: "/promotions/vip.webp",
    ctaLabel: { en: "Learn more", zh: "了解更多" },
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
      en: "Compete for progressive jackpots across selected slot titles when events are live.",
      zh: "活动期间可在指定老虎机作品中参与奖池竞赛。",
    },
    image: "/promotions/jackpot.webp",
    ctaLabel: { en: "View details", zh: "查看详情" },
    status: "active",
  },
];

export function getPromotionBySlug(slug: string) {
  return promotions.find((p) => p.slug === slug);
}
