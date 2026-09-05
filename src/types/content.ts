export type Locale = "en" | "zh";

export type CategoryId =
  | "slots"
  | "live-casino"
  | "hash-roulette"
  | "hash-games"
  | "crypto-games"
  | "fast-games"
  | "fishing"
  | "sports"
  | "chess-card"
  | "lottery";

export type InventoryMode = "catalogue" | "hub";

export type GameStatus = "new" | "hot" | "featured";

export type LocalizedString = {
  en: string;
  zh: string;
};

export type LocalizedStringArray = {
  en: string[];
  zh: string[];
};

export type ContentBlock =
  | { type: "p"; text: LocalizedString }
  | { type: "h2"; text: LocalizedString }
  | { type: "h3"; text: LocalizedString }
  | { type: "ul"; items: LocalizedStringArray };

export type Category = {
  id: CategoryId;
  slug: CategoryId;
  name: LocalizedString;
  shortDescription: LocalizedString;
  description: LocalizedString;
  accent: string;
  /** catalogue = local game rows; hub = educational page + platform CTA only */
  inventoryMode: InventoryMode;
  /** Top-level route outside /games when set (sports, lottery) */
  routeBase?: "games" | "top";
};

export type Provider = {
  id: string;
  slug: string;
  name: string;
  shortDescription: LocalizedString;
  description: LocalizedString;
  specialties: LocalizedStringArray;
  gameCount: number;
  logoColor: string;
  logo?: string;
  foundedYear?: number;
  headquarters?: string;
};

export type Game = {
  id: string;
  slug: string;
  name: string;
  providerSlug: string;
  category: CategoryId;
  status?: GameStatus;
  shortDescription: LocalizedString;
  description: LocalizedString;
  howToPlay: LocalizedString;
  features: LocalizedStringArray;
  imageGradient: [string, string];
  image?: string;
  rtp?: number;
  volatility?: "low" | "medium" | "high" | "very-high";
};

export type GuideCategory = CategoryId | "education";

export type Guide = {
  id: string;
  slug: string;
  category: GuideCategory;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: ContentBlock[];
  relatedGameSlugs: string[];
  relatedProviderSlug?: string;
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  author: string;
  coverGradient: [string, string];
  coverImage?: string;
};

export type FaqGroupId =
  | "general"
  | "games"
  | "account"
  | "deposit"
  | "withdraw"
  | "promotions"
  | "rewards"
  | "vip"
  | "agent"
  | "download"
  | "mobile"
  | "responsible";

export type FaqItem = {
  id: string;
  group: FaqGroupId;
  question: LocalizedString;
  answer: LocalizedString;
};

export type RewardTopic = {
  id: string;
  slug: string;
  title: LocalizedString;
  summary: LocalizedString;
  body: LocalizedString;
  href: string;
  image?: string;
};

export type PaymentMethod = {
  id: string;
  name: LocalizedString;
  kind: "bank" | "ewallet" | "crypto" | "card";
  summary: LocalizedString;
};

export type JourneyStep = {
  id: string;
  step: number;
  title: LocalizedString;
  summary: LocalizedString;
  href: string;
};

export type EcosystemHub = {
  id: string;
  slug: string;
  title: LocalizedString;
  summary: LocalizedString;
  intro: LocalizedString;
  sections: ContentBlock[];
  relatedHrefs: { href: string; label: LocalizedString }[];
};

export type NavItem = {
  href: string;
  labelKey: string;
};

export type MegaNavItem = {
  href: string;
  labelKey: string;
  categoryId?: CategoryId;
  descriptionKey?: string;
};

export type CtaLinks = {
  login: string;
  register: string;
  exploreGames: string;
  readGuides: string;
  contact: string;
};
