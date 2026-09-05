import type { Locale } from "@/types/content";

export const ctaConfig = {
  login: {
    href: "#login",
    external: false,
  },
  register: {
    href: "#register",
    external: false,
  },
  exploreGames: {
    path: "/games" as const,
  },
  browseGuides: {
    path: "/guides" as const,
  },
  responsibleGaming: {
    path: "/responsible-gaming" as const,
  },
};

export type CtaLocale = Locale;
