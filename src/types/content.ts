export type Locale = "en" | "zh";

export type CategoryId =
  | "slots"
  | "live-casino"
  | "fast-games"
  | "fishing";

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
};

export type Provider = {
  id: string;
  slug: string;
  name: string;
  shortDescription: LocalizedString;
  description: LocalizedString;
  specialties: LocalizedStringArray;
  /** Number of games in this site's dataset that reference this provider */
  gameCount: number;
  logoColor: string;
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
  /** Local path under /public when artwork exists */
  image?: string;
  /** Only include when verified from a reliable public source — prefer omit */
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
};

export type FaqItem = {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
};

export type NavItem = {
  href: string;
  labelKey: string;
};

export type CtaLinks = {
  login: string;
  register: string;
  exploreGames: string;
  readGuides: string;
  contact: string;
};
