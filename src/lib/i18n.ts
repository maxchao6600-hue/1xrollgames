import type { Locale } from "@/types/content";
import { siteConfig } from "@/config/site";

export const locales = siteConfig.locales;

type Dict = Record<string, unknown>;

const en = {
  nav: {
    home: "Home",
    games: "Games",
    casino: "Casino",
    live: "Live Casino",
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
    viewGame: "Explore",
    viewPromotions: "View Promotions",
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
    editorialTeam: "1XROLL Editorial Team",
    published: "Published",
    updated: "Updated",
    loading: "Loading…",
    claimNow: "Claim now",
  },
  home: {
    heroEyebrow: "1XROLL",
    heroTitle: "Discover your next favourite game",
    heroSubtitle:
      "Explore slots, live casino, fast games and fishing titles on 1XROLL — then open your account on the platform when you are ready to play.",
    featuredTitle: "Featured on 1XROLL",
    featuredSubtitle: "Standout titles from the lobby with studio and category context.",
    categoriesTitle: "Explore 1XROLL games",
    categoriesSubtitle: "Slots, live casino, fast games and fishing — each lane with its own artwork.",
    providersTitle: "Popular providers",
    providersSubtitle: "Studios you will meet across the 1XROLL catalogue.",
    promotionsTitle: "Latest promotions",
    promotionsSubtitle: "Official offers published for 1XROLL players.",
    guidesTitle: "Game guides",
    guidesSubtitle: "Read before you play — mechanics, pacing, and what to notice.",
    whyTitle: "Why 1XROLL",
    whySubtitle: "A brand site built around discovery, guides, and clear entry to play.",
    mobileTitle: "Play on the 1XROLL app",
    mobileSubtitle:
      "Download the official Android app for faster lobby access, notifications and secure sign-in — or continue in the mobile browser.",
    mobile: {
      fast: "Fast login on supported Android devices",
      android: "Optimised for smooth slots and live tables",
      notify: "Stay informed about offers and account alerts",
      secure: "Secure access aligned with the 1XROLL platform",
      cta: "Open platform / download",
    },
    why: {
      selection: "Broad game selection",
      selectionBody:
        "Slots, live casino, fast games and fishing titles organised for browsing.",
      categories: "Multiple categories",
      categoriesBody:
        "Clear category hubs so you can move from curiosity to a specific experience.",
      guides: "Original game guides",
      guidesBody:
        "Editorial explainers that connect titles, studios and practical tips.",
      providers: "Provider discovery",
      providersBody:
        "Studio pages that explain craft differences — not just a logo wall.",
      mobile: "Mobile-first browsing",
      mobileBody:
        "Layouts tuned for phones first, then expanded for larger screens.",
      entry: "Clear platform entry",
      entryBody:
        "Login and register CTAs lead to the 1XROLL platform when you are ready.",
    },
    faqTitle: "FAQ",
    faqSubtitle: "Straight answers about 1XROLL games, guides and getting started.",
    responsibleTitle: "Play responsibly",
    responsibleSubtitle:
      "18+ only. Set limits, take breaks, and only play where it is legal.",
    responsible: {
      age: "18+ only",
      limits: "Set personal limits",
      breaks: "Take regular breaks",
      legal: "Only play where legal",
      help: "Seek support when needed",
    },
    ctaTitle: "Ready when you are",
    ctaBody: "Browse the library — or open the 1XROLL platform to register.",
  },
  games: {
    hubTitle: "Games",
    hubSubtitle: "Search and filter the 1XROLL discovery catalogue.",
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
    hubSubtitle: "Studios featured across 1XROLL — with linked titles from this site.",
    gamesFrom: "Games from this studio",
    exploreGames: "Explore games",
  },
  guides: {
    hubTitle: "Game guides",
    hubSubtitle: "In-depth 1XROLL explainers for popular titles and core concepts.",
    readArticle: "Read guide",
  },
  promotions: {
    title: "Promotions",
    subtitle: "Official 1XROLL offers with clear terms. Always play responsibly.",
    emptyTitle: "No promotions listed",
    emptyBody: "Check back later for verified offers.",
  },
  about: { title: "About 1XROLL" },
  contact: {
    title: "Contact",
    subtitle: "Reach 1XROLL support for account help on the platform, or contact this brand site editorial team.",
    emailLabel: "Email",
  },
  faq: {
    title: "FAQ",
    subtitle: "Answers about 1XROLL games, providers, promotions and responsible play.",
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
      "This site is a 1XROLL brand website variation for game information, providers, promotions and guides. Open your account and play on the 1XROLL platform.",
    notice:
      "18+ only. Gambling can be addictive. Please play within your limits and follow local laws.",
    copyright: "All rights reserved.",
  },
  notFound: {
    title: "Page not found",
    body: "That URL is not on this 1XROLL site. Browse games or return home.",
  },
  error: {
    title: "Something went wrong",
    body: "Please refresh or return home.",
    retry: "Try again",
  },
  badge: { new: "NEW", hot: "HOT", featured: "FEATURED" },
} as const;

const zh = {
  nav: {
    home: "首页",
    games: "游戏",
    casino: "赌场",
    live: "真人赌场",
    promotions: "优惠活动",
    guides: "游戏攻略",
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
    viewGame: "查看",
    viewPromotions: "查看优惠",
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
    editorialTeam: "1XROLL 编辑团队",
    published: "发布",
    updated: "更新",
    loading: "加载中…",
    claimNow: "立即领取",
  },
  home: {
    heroEyebrow: "1XROLL",
    heroTitle: "发现你的下一款心头好",
    heroSubtitle:
      "在 1XROLL 浏览老虎机、真人娱乐场、快速游戏与捕鱼类作品——准备好时再前往平台注册并开始游戏。",
    featuredTitle: "1XROLL 精选",
    featuredSubtitle: "大厅亮点作品，卡片上直接展示工作室与分类。",
    categoriesTitle: "探索 1XROLL 游戏",
    categoriesSubtitle: "老虎机、真人娱乐场、快速游戏与捕鱼——每个分类使用对应真实画面。",
    providersTitle: "热门厂商",
    providersSubtitle: "你会在 1XROLL 目录中遇到的工作室。",
    promotionsTitle: "最新优惠",
    promotionsSubtitle: "面向 1XROLL 玩家发布的官方活动。",
    guidesTitle: "游戏攻略",
    guidesSubtitle: "先读再玩——机制、节奏与观察重点。",
    whyTitle: "为什么选择 1XROLL",
    whySubtitle: "围绕发现、攻略与清晰入门路径打造的品牌网站。",
    mobileTitle: "在 1XROLL App 畅玩",
    mobileSubtitle:
      "下载官方 Android 应用，更快进入大厅、接收通知并安全登录——也可继续使用手机浏览器。",
    mobile: {
      fast: "在支持的 Android 设备上快速登录",
      android: "针对老虎机与真人桌台流畅体验优化",
      notify: "及时了解优惠与账户提醒",
      secure: "与 1XROLL 平台对齐的安全访问",
      cta: "打开平台 / 下载",
    },
    why: {
      selection: "丰富游戏选择",
      selectionBody: "老虎机、真人、快速游戏与捕鱼内容结构化整理，便于浏览。",
      categories: "多元分类",
      categoriesBody: "清晰的分类中心，让你从好奇快速落到具体体验。",
      guides: "原创游戏攻略",
      guidesBody: "编辑向解读连接作品、工作室与实用提示。",
      providers: "厂商发现",
      providersBody: "工作室页面说明工艺差异——不只是 logo 墙。",
      mobile: "移动优先浏览",
      mobileBody: "布局先为手机设计，再扩展到更大屏幕。",
      entry: "清晰平台入口",
      entryBody: "登录与注册 CTA 在你准备好时导向 1XROLL 平台。",
    },
    faqTitle: "常见问题",
    faqSubtitle: "关于 1XROLL 游戏、攻略与入门的直接解答。",
    responsibleTitle: "理性游戏",
    responsibleSubtitle: "仅限 18 岁以上。设定限额、适时休息，并仅在合法地区参与。",
    responsible: {
      age: "仅限 18 岁以上",
      limits: "设定个人限额",
      breaks: "定期休息",
      legal: "仅在合法地区参与",
      help: "需要时寻求支持",
    },
    ctaTitle: "准备好了就开始",
    ctaBody: "先浏览游戏库——或打开 1XROLL 平台完成注册。",
  },
  games: {
    hubTitle: "游戏",
    hubSubtitle: "搜索并筛选 1XROLL 发现目录。",
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
    hubSubtitle: "1XROLL 相关工作室，并链接本站收录作品。",
    gamesFrom: "来自该工作室的游戏",
    exploreGames: "浏览游戏",
  },
  guides: {
    hubTitle: "游戏攻略",
    hubSubtitle: "热门作品与核心概念的 1XROLL 深度解读。",
    readArticle: "阅读攻略",
  },
  promotions: {
    title: "优惠活动",
    subtitle: "条款清晰的 1XROLL 官方优惠。请理性游戏。",
    emptyTitle: "暂无上线活动",
    emptyBody: "请稍后再查看已核实的优惠。",
  },
  about: { title: "关于 1XROLL" },
  contact: {
    title: "联系我们",
    subtitle: "账户问题请通过平台客服处理；本品牌站编辑团队可接收内容相关问询。",
    emailLabel: "邮箱",
  },
  faq: {
    title: "常见问题",
    subtitle: "关于 1XROLL 游戏、厂商、优惠与理性游戏的解答。",
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
      "本站是 1XROLL 品牌网站版本，提供游戏信息、厂商、优惠与攻略。请前往 1XROLL 平台注册并开始游戏。",
    notice:
      "仅限 18 岁以上。博彩可能令人沉迷。请在限额内游玩，并遵守当地法律。",
    copyright: "保留所有权利。",
  },
  notFound: {
    title: "页面不存在",
    body: "该地址不在本 1XROLL 站点。可以浏览游戏或返回首页。",
  },
  error: {
    title: "出了点问题",
    body: "请刷新或返回首页。",
    retry: "重试",
  },
  badge: { new: "新品", hot: "热门", featured: "精选" },
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
