import type { Locale } from "@/types/content";
import { siteConfig } from "@/config/site";

export const locales = siteConfig.locales;

type Dict = Record<string, unknown>;

const en = {
  nav: {
    home: "Home",
    games: "Games",
    casino: "Casino",
    live: "Live",
    promotions: "Promotions",
    guides: "Guides",
    providers: "Providers",
    about: "About",
    contact: "Contact",
    faq: "FAQ",
    responsible: "Responsible Gaming",
    terms: "Terms",
    privacy: "Privacy",
    login: "Login",
    register: "Register",
    menu: "Menu",
    close: "Close",
    language: "Language",
  },
  common: {
    exploreGames: "Explore Games",
    browseGuides: "Browse Guides",
    readGuides: "Read Game Guides",
    viewGame: "View Game",
    explore: "Explore",
    learnMore: "Learn more",
    clearFilters: "Clear filters",
    search: "Search",
    all: "All",
    games: "games",
    minRead: "min read",
    provider: "Provider",
    category: "Category",
    relatedGames: "Related games",
    relatedGuides: "Related guides",
    backHome: "Back home",
    searchGames: "Search games",
    editorialTeam: "Editorial Team",
    published: "Published",
    updated: "Updated",
    loading: "Loading…",
  },
  home: {
    heroTitle: "Your guide to the games that keep players coming back",
    heroSubtitle:
      "Discover slots, live tables, fast games, studio profiles, and practical guides — organized for clarity on every screen.",
    discoverTitle: "Explore your way",
    discoverSubtitle:
      "Pick an experience style, then dig into titles, studios, and guides that match how you like to play.",
    featuredTitle: "Popular right now",
    featuredSubtitle:
      "A rotating look at titles players browse most — with studio and category context in every card.",
    guidesTitle: "Know the game before you play",
    guidesSubtitle:
      "Editorial explainers that focus on mechanics, pacing, and what to notice — not hype.",
    providersTitle: "Explore by provider",
    providersSubtitle:
      "Learn how each studio shapes its catalog, then jump straight into their games.",
    whyTitle: "Built around better discovery",
    whySubtitle:
      "Aether is designed to help you understand games and studios before you decide what to try next.",
    why: {
      curated: "Curated game library",
      curatedBody:
        "Titles are organized by experience type and studio so browsing stays intentional.",
      mobile: "Mobile-first experience",
      mobileBody:
        "Layouts, filters, and reading flows are built for phones first, then refined for larger screens.",
      info: "Clear game information",
      infoBody:
        "Every page prioritizes readable context over flashy claims or invented statistics.",
      categories: "Multiple game categories",
      categoriesBody:
        "Slots, live tables, fast games, and arcade-style fishing titles live in one navigable system.",
      guides: "Dedicated game guides",
      guidesBody:
        "Long-form explainers connect rules, features, and related titles without keyword stuffing.",
      support: "Support & responsible gaming",
      supportBody:
        "Limits, breaks, and legality reminders stay visible — not buried only in the footer.",
    },
    latestTitle: "Latest from the game guide",
    latestSubtitle:
      "Fresh editorial notes across mechanics, studios, and player education.",
    responsibleTitle: "Play responsibly",
    responsibleSubtitle:
      "Entertainment stays healthier with limits, breaks, and clear boundaries.",
    responsible: {
      age: "18+ only",
      limits: "Set personal limits",
      breaks: "Take regular breaks",
      legal: "Only play where legal",
      help: "Seek help when needed",
    },
    faqTitle: "Questions worth answering",
    faqSubtitle:
      "Practical explanations for browsing games, studios, and guides on Aether.",
    ctaTitle: "Explore the library",
    ctaBody: "Find your next game.",
    ctaSecondary: "Or start with a guide if you want context first.",
  },
  games: {
    hubTitle: "Games",
    hubSubtitle:
      "Search and filter the catalog by category or studio. Results update instantly on this page.",
    searchPlaceholder: "Search by game name",
    filterCategory: "Category",
    filterProvider: "Provider",
    empty: "No games found",
    emptyHint: "Try another name or clear your filters.",
    howToPlay: "How to play",
    features: "Features",
    overview: "Overview",
  },
  providers: {
    hubTitle: "Providers",
    hubSubtitle:
      "Studio profiles with distinctive backgrounds, specialties, and linked titles from the Aether library.",
    gamesFrom: "Games from this studio",
    exploreGames: "Explore games",
  },
  guides: {
    hubTitle: "Game guides",
    hubSubtitle:
      "In-depth explainers for popular titles and core gaming concepts — written for understanding, not pressure.",
    readArticle: "Read guide",
  },
  promotions: {
    title: "Promotions",
    subtitle:
      "When verified offers exist, they appear here with clear terms. We do not invent bonuses or guaranteed outcomes.",
    emptyTitle: "No active promotions listed",
    emptyBody:
      "Aether currently focuses on game discovery and education. If promotional terms are published later, they will include eligibility details and responsible-gaming notes — never fabricated reward figures.",
  },
  about: { title: "About Aether" },
  contact: {
    title: "Contact",
    subtitle: "Reach the editorial team for content questions or partnership notes.",
    emailLabel: "Email",
  },
  faq: {
    title: "FAQ",
    subtitle: "Straightforward answers about browsing games, providers, and guides.",
  },
  responsible: { title: "Responsible gaming" },
  terms: { title: "Terms of use" },
  privacy: { title: "Privacy policy" },
  footer: {
    explore: "Explore",
    company: "Company",
    help: "Help",
    legal: "Legal",
    languages: "Languages",
    brandBlurb:
      "Aether is a bilingual discovery hub for digital games — slots, live tables, fast formats, studios, and guides — designed with clarity and responsible play in mind.",
    notice:
      "18+ only. Gaming involves risk. Play for entertainment, set limits, and follow local laws.",
    copyright: "All rights reserved.",
  },
  notFound: {
    title: "Page not found",
    body: "That URL is not in the Aether library. Try searching games or return to the homepage.",
  },
  error: {
    title: "Something went wrong",
    body: "Please refresh or return home. Game images and filters should not break the whole site.",
    retry: "Try again",
  },
  badge: { new: "NEW", hot: "HOT", featured: "FEATURED" },
  cat: {
    slots: "Slots",
    "live-casino": "Live tables",
    "fast-games": "Fast games",
    fishing: "Arcade & fishing",
  },
} as const;

const zh = {
  nav: {
    home: "首页",
    games: "游戏",
    casino: "娱乐场",
    live: "真人",
    promotions: "活动",
    guides: "攻略",
    providers: "厂商",
    about: "关于",
    contact: "联系",
    faq: "常见问题",
    responsible: "理性游戏",
    terms: "使用条款",
    privacy: "隐私政策",
    login: "登录",
    register: "注册",
    menu: "菜单",
    close: "关闭",
    language: "语言",
  },
  common: {
    exploreGames: "浏览游戏",
    browseGuides: "浏览攻略",
    readGuides: "阅读游戏攻略",
    viewGame: "查看游戏",
    explore: "了解更多",
    learnMore: "了解更多",
    clearFilters: "清除筛选",
    search: "搜索",
    all: "全部",
    games: "款游戏",
    minRead: "分钟阅读",
    provider: "厂商",
    category: "分类",
    relatedGames: "相关游戏",
    relatedGuides: "相关攻略",
    backHome: "返回首页",
    searchGames: "搜索游戏",
    editorialTeam: "编辑团队",
    published: "发布",
    updated: "更新",
    loading: "加载中…",
  },
  home: {
    heroTitle: "带你认识那些让玩家持续回头的游戏",
    heroSubtitle:
      "在这里发现老虎机、真人桌台、快速游戏、厂商档案与实用攻略——信息结构清晰，适配每一种屏幕。",
    discoverTitle: "按体验探索",
    discoverSubtitle:
      "先选择你偏好的体验类型，再深入对应的游戏、工作室与攻略内容。",
    featuredTitle: "当前热门",
    featuredSubtitle: "精选常被浏览的作品，卡片上直接展示工作室与分类信息。",
    guidesTitle: "先了解，再决定怎么玩",
    guidesSubtitle: "聚焦机制、节奏与观察重点的编辑向解读，而不是夸张宣传。",
    providersTitle: "按厂商探索",
    providersSubtitle: "了解每家工作室的风格与产品线，再直接进入相关游戏。",
    whyTitle: "为更好的发现而设计",
    whySubtitle: "Aether 帮助你在尝试下一款游戏之前，先理解玩法与厂商差异。",
    why: {
      curated: "精选游戏库",
      curatedBody: "按体验类型与工作室整理，让浏览更有目的性。",
      mobile: "移动优先体验",
      mobileBody: "布局、筛选与阅读流程先为手机设计，再扩展到更大屏幕。",
      info: "清晰的游戏信息",
      infoBody: "每个页面优先提供可读上下文，拒绝夸张宣称或虚构数据。",
      categories: "多元游戏分类",
      categoriesBody: "老虎机、真人桌台、快速游戏与街机捕鱼类内容统一可导航。",
      guides: "专属游戏攻略",
      guidesBody: "长文解读连接规则、特色与相关作品，不堆砌关键词。",
      support: "支持与理性游戏",
      supportBody: "限额、休息与合法性提醒保持可见，而不是只藏在页脚。",
    },
    latestTitle: "攻略最新更新",
    latestSubtitle: "覆盖机制解析、工作室介绍与玩家教育的最新编辑内容。",
    responsibleTitle: "理性游戏",
    responsibleSubtitle: "设定边界、适时休息，娱乐才能更健康。",
    responsible: {
      age: "仅限 18 岁以上",
      limits: "设定个人限额",
      breaks: "定期休息",
      legal: "仅在合法地区参与",
      help: "需要时寻求帮助",
    },
    faqTitle: "值得认真回答的问题",
    faqSubtitle: "关于在 Aether 浏览游戏、厂商与攻略的实用说明。",
    ctaTitle: "探索游戏库",
    ctaBody: "找到你的下一款游戏。",
    ctaSecondary: "若想先建立理解，也可以从攻略开始。",
  },
  games: {
    hubTitle: "游戏",
    hubSubtitle: "按分类或厂商搜索筛选目录，结果在本页即时更新。",
    searchPlaceholder: "按游戏名称搜索",
    filterCategory: "分类",
    filterProvider: "厂商",
    empty: "未找到游戏",
    emptyHint: "试试其他名称，或清除筛选条件。",
    howToPlay: "怎么玩",
    features: "特色",
    overview: "概览",
  },
  providers: {
    hubTitle: "厂商",
    hubSubtitle:
      "每家工作室都有独立背景、专长说明，并链接 Aether 库中的相关作品。",
    gamesFrom: "来自该工作室的游戏",
    exploreGames: "浏览游戏",
  },
  guides: {
    hubTitle: "游戏攻略",
    hubSubtitle: "热门作品与核心概念的深度解读——为理解而写，不为施压。",
    readArticle: "阅读攻略",
  },
  promotions: {
    title: "活动",
    subtitle:
      "若存在已核实的活动，会在此展示清晰条款。我们不会虚构奖金或保证结果。",
    emptyTitle: "暂无上线活动",
    emptyBody:
      "Aether 目前专注于游戏发现与内容教育。若未来发布活动条款，将包含参与条件与理性游戏提示——绝不会编造奖励数字。",
  },
  about: { title: "关于 Aether" },
  contact: {
    title: "联系我们",
    subtitle: "内容咨询或合作沟通，请联系编辑团队。",
    emailLabel: "邮箱",
  },
  faq: {
    title: "常见问题",
    subtitle: "关于浏览游戏、厂商与攻略的直接解答。",
  },
  responsible: { title: "理性游戏" },
  terms: { title: "使用条款" },
  privacy: { title: "隐私政策" },
  footer: {
    explore: "探索",
    company: "公司",
    help: "帮助",
    legal: "法律",
    languages: "语言",
    brandBlurb:
      "Aether 是双语电子游戏发现平台，覆盖老虎机、真人桌台、快速玩法、工作室与攻略，强调信息清晰与理性游戏。",
    notice:
      "仅限 18 岁以上。游戏存在风险。请以娱乐为目的，设定限额，并遵守当地法律。",
    copyright: "保留所有权利。",
  },
  notFound: {
    title: "页面不存在",
    body: "该地址不在 Aether 内容库中。可以搜索游戏，或返回首页。",
  },
  error: {
    title: "出了点问题",
    body: "请刷新或返回首页。单个图片或筛选失败不应导致整站不可用。",
    retry: "重试",
  },
  badge: { new: "新品", hot: "热门", featured: "精选" },
  cat: {
    slots: "老虎机",
    "live-casino": "真人桌台",
    "fast-games": "快速游戏",
    fishing: "街机与捕鱼",
  },
} as const;

export type Dictionary = typeof en | typeof zh;

const dictionaries: Record<Locale, Dictionary> = { en, zh };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

export function t(dict: Dict, key: string): string {
  const parts = key.split(".");
  let current: unknown = dict;
  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return key;
    }
  }
  return typeof current === "string" ? current : key;
}
