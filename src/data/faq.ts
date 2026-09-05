import type { FaqGroupId, FaqItem } from "@/types/content";

export const faqGroupOrder: FaqGroupId[] = [
  "general",
  "games",
  "account",
  "deposit",
  "withdraw",
  "promotions",
  "rewards",
  "vip",
  "agent",
  "download",
  "mobile",
  "responsible",
];

export const faqGroupLabels: Record<FaqGroupId, { en: string; zh: string }> = {
  general: { en: "General", zh: "综合" },
  games: { en: "Games", zh: "游戏" },
  account: { en: "Account", zh: "账户" },
  deposit: { en: "Deposit", zh: "存款" },
  withdraw: { en: "Withdraw", zh: "取款" },
  promotions: { en: "Promotions", zh: "优惠" },
  rewards: { en: "Rewards", zh: "奖励" },
  vip: { en: "VIP", zh: "VIP" },
  agent: { en: "Agent", zh: "代理" },
  download: { en: "Download", zh: "下载" },
  mobile: { en: "Mobile", zh: "移动端" },
  responsible: { en: "Responsible Gaming", zh: "理性游戏" },
};

export const faqItems: FaqItem[] = [
  {
    id: "what-is-1xroll",
    group: "general",
    question: { en: "What is 1XROLL?", zh: "什么是 1XROLL？" },
    answer: {
      en: "1XROLL is a digital entertainment brand covering games, rewards, guides and platform access for eligible players. This website is Website B — a complete ecosystem brand site. Login and Register open the 1XROLL platform for play.",
      zh: "1XROLL 是覆盖游戏、奖励、攻略与平台入口的数字娱乐品牌。本站是 Website B——完整生态品牌站。登录与注册会打开 1XROLL 平台进行游玩。",
    },
  },
  {
    id: "brand-vs-platform",
    group: "general",
    question: {
      en: "How does this brand site relate to the platform?",
      zh: "本品牌站与平台是什么关系？",
    },
    answer: {
      en: "This site publishes discovery, education and ecosystem orientation. Account, wallet and live lobby tools run on the 1XROLL platform after you follow Login or Register.",
      zh: "本站发布发现、教育与生态导览。账户、钱包与实时大厅工具在你点击登录或注册后于 1XROLL 平台运行。",
    },
  },
  {
    id: "how-many-games",
    group: "games",
    question: {
      en: "How many games are available on 1XROLL?",
      zh: "1XROLL 有多少款游戏？",
    },
    answer: {
      en: "The platform catalogue includes 1,187+ titles. This brand site documents a curated set across slots, live casino, crypto games, fast games and fishing, plus hub pages for hash, sports, chess & card and lottery lanes.",
      zh: "平台目录包含 1,187+ 款作品。本品牌站策展覆盖老虎机、真人、加密游戏、快速游戏与捕鱼，并为哈希、体育、棋牌与彩票通道提供中心页。",
    },
  },
  {
    id: "game-categories",
    group: "games",
    question: {
      en: "Which game categories does the ecosystem cover?",
      zh: "生态覆盖哪些游戏分类？",
    },
    answer: {
      en: "Slots, Live Casino, Hash Roulette, Hash Games, Crypto Games, Fast Games, Fishing, Sports, Chess & Card, and Lottery. Catalogue detail pages exist only for titles verified in this site’s dataset.",
      zh: "老虎机、真人赌场、哈希轮盘、哈希游戏、加密游戏、快速游戏、捕鱼、体育、棋牌与彩票。仅本站数据集已核实的作品提供详情页。",
    },
  },
  {
    id: "providers",
    group: "games",
    question: {
      en: "Which game providers appear on 1XROLL?",
      zh: "1XROLL 有哪些游戏厂商？",
    },
    answer: {
      en: "Studios such as Pragmatic Play, PG Soft, Evolution, Spribe, Jili, Endorphina, Relax Gaming and Playson appear in this site’s provider pages. Confirm live lobby availability on the platform.",
      zh: "本站厂商页包含 Pragmatic Play、PG Soft、Evolution、Spribe、Jili、Endorphina、Relax Gaming、Playson 等。登录平台后请以大厅实时供应为准。",
    },
  },
  {
    id: "hash-games-faq",
    group: "games",
    question: {
      en: "Do you list every hash or lottery title here?",
      zh: "这里会列出所有哈希或彩票作品吗？",
    },
    answer: {
      en: "No. Hash and lottery lanes are explained as hubs. Individual lobby titles open on the platform so we never invent games or artwork.",
      zh: "不会。哈希与彩票以中心页说明。具体大厅作品在平台打开，避免虚构游戏或图片。",
    },
  },
  {
    id: "account",
    group: "account",
    question: {
      en: "How do I create an account?",
      zh: "如何创建账户？",
    },
    answer: {
      en: "Use Register to open the official platform registration flow. This brand site does not host a password form.",
      zh: "使用注册打开官方平台注册流程。本品牌站不托管密码表单。",
    },
  },
  {
    id: "login-help",
    group: "account",
    question: {
      en: "Where do I log in?",
      zh: "在哪里登录？",
    },
    answer: {
      en: "Use Login to reach the platform sign-in page. Reset credentials only through official platform recovery tools.",
      zh: "使用登录进入平台登录页。仅通过官方平台找回工具重置凭证。",
    },
  },
  {
    id: "languages",
    group: "account",
    question: {
      en: "Which languages does this site support?",
      zh: "本站支持哪些语言？",
    },
    answer: {
      en: "English and Chinese via /en/ and /zh/ with matching hreflang pairs.",
      zh: "通过 /en/ 与 /zh/ 提供英文与中文，并配对 hreflang。",
    },
  },
  {
    id: "payments",
    group: "deposit",
    question: {
      en: "What payment methods are commonly used?",
      zh: "常用哪些支付方式？",
    },
    answer: {
      en: "Malaysian banks, e-wallets such as Touch 'n Go, GrabPay and Boost, DuitNow, and cryptocurrency including USDT. Confirm methods inside the platform wallet. This brand site does not process deposits.",
      zh: "马来西亚银行、Touch 'n Go、GrabPay、Boost 等电子钱包、DuitNow，以及包括 USDT 在内的加密货币。请在平台钱包内确认。本品牌站不处理存款。",
    },
  },
  {
    id: "deposit-where",
    group: "deposit",
    question: {
      en: "Where do deposits happen?",
      zh: "存款在哪里完成？",
    },
    answer: {
      en: "On the 1XROLL platform wallet after login. Read Deposit and Currency Purchase pages for orientation first.",
      zh: "登录后在 1XROLL 平台钱包完成。可先阅读存款与购币教程页做导览。",
    },
  },
  {
    id: "withdraw-speed",
    group: "withdraw",
    question: {
      en: "How fast are withdrawals?",
      zh: "取款有多快？",
    },
    answer: {
      en: "Processing depends on method, verification and account status. This brand site does not guarantee instant or fixed-minute payouts.",
      zh: "处理速度取决于方式、验证与账户状态。本品牌站不保证即时或固定分钟到账。",
    },
  },
  {
    id: "withdraw-help",
    group: "withdraw",
    question: {
      en: "Who helps with withdrawal issues?",
      zh: "取款问题找谁？",
    },
    answer: {
      en: "Use platform live chat for account cases. The Contact page on this site provides orientation channels.",
      zh: "账户个案请使用平台在线客服。本站联系页提供导览渠道。",
    },
  },
  {
    id: "promotions",
    group: "promotions",
    question: {
      en: "What promotions does 1XROLL offer?",
      zh: "1XROLL 有哪些优惠？",
    },
    answer: {
      en: "Published summaries include a 200% first deposit bonus (up to 8,888 USDT, 25× turnover, min. 10 USDT), VIP cashback up to 1.1% on eligible play, and prize-pool style events. Always read live platform terms.",
      zh: "已发布摘要包括 200% 首存（最高 8,888 USDT，25 倍流水，最低 10 USDT）、符合条件投注 VIP 返水最高 1.1%，以及奖池类活动。请务必阅读平台实时条款。",
    },
  },
  {
    id: "activity-center",
    group: "promotions",
    question: {
      en: "What is the Activity Center?",
      zh: "什么是活动中心？",
    },
    answer: {
      en: "An orientation label for time-bound campaigns and featured offers. Browse Promotions on this site, then claim on the platform.",
      zh: "用于限时活动与精选优惠的导览说法。可在本站浏览优惠，再在平台领取。",
    },
  },
  {
    id: "rewards-center",
    group: "rewards",
    question: {
      en: "What is Rewards Center?",
      zh: "什么是奖励中心？",
    },
    answer: {
      en: "A hub connecting welcome offers, VIP cashback summaries and activity-style rewards without inventing unpublished rates.",
      zh: "连接迎新优惠、VIP 返水摘要与活动类奖励的中心，不编造未发布比例。",
    },
  },
  {
    id: "rebates-faq",
    group: "rewards",
    question: {
      en: "How are rebates described?",
      zh: "返水如何描述？",
    },
    answer: {
      en: "As VIP cashback on eligible play, with a published ceiling summarised here as up to 1.1%. Confirm live details on the platform.",
      zh: "以符合条件投注的 VIP 返水描述，本站摘要上限为最高 1.1%。实时细节以平台为准。",
    },
  },
  {
    id: "vip-tiers",
    group: "vip",
    question: {
      en: "Do you publish VIP 1 / VIP 2 tables?",
      zh: "会公布 VIP 1 / VIP 2 表格吗？",
    },
    answer: {
      en: "No. This site does not invent tier ladders. Open the platform VIP area for live status.",
      zh: "不会。本站不编造等级阶梯。请在平台 VIP 区域查看实时状态。",
    },
  },
  {
    id: "vip-cashback",
    group: "vip",
    question: {
      en: "What VIP cashback is summarised here?",
      zh: "这里摘要的 VIP 返水是什么？",
    },
    answer: {
      en: "Up to 1.1% on eligible bets, with higher tiers unlocking increased rates — as published on brand materials mirrored in our promotions data.",
      zh: "符合条件投注最高 1.1%，更高等级解锁更高比例——与我们优惠数据中镜像的品牌公开材料一致。",
    },
  },
  {
    id: "agent-faq",
    group: "agent",
    question: {
      en: "What is the Agent programme?",
      zh: "什么是代理计划？",
    },
    answer: {
      en: "An orientation for referral-style participation and partnership growth. Commission percentages are not invented on this brand site.",
      zh: "面向推荐式参与与合作增长的导览。本品牌站不编造佣金比例。",
    },
  },
  {
    id: "agent-code",
    group: "agent",
    question: {
      en: "What is AgentCode on CTAs?",
      zh: "CTA 上的 AgentCode 是什么？",
    },
    answer: {
      en: "An optional tracking parameter appended to platform URLs when configured in environment settings.",
      zh: "在环境配置启用时附加到平台 URL 的可选追踪参数。",
    },
  },
  {
    id: "download-faq",
    group: "download",
    question: {
      en: "How do I download the app?",
      zh: "如何下载应用？",
    },
    answer: {
      en: "Open the Download page for QR and screenshot orientation, then use official platform CTAs for the latest Android package. Prefer official 1XROLL paths only.",
      zh: "打开下载页查看二维码与截图导览，再通过官方平台 CTA 获取最新 Android 包。请只使用官方 1XROLL 路径。",
    },
  },
  {
    id: "ios-access",
    group: "download",
    question: {
      en: "Can I use 1XROLL on iOS?",
      zh: "可以在 iOS 上使用 1XROLL 吗？",
    },
    answer: {
      en: "Yes via mobile browser and platform instructions after login. Follow official guidance rather than third-party IPA sites.",
      zh: "可以，通过手机浏览器并在登录后遵循平台说明。请遵循官方指引，勿使用第三方 IPA 站点。",
    },
  },
  {
    id: "mobile",
    group: "mobile",
    question: {
      en: "Does 1XROLL support mobile devices?",
      zh: "1XROLL 支持移动设备吗？",
    },
    answer: {
      en: "Yes. Use the responsive site, mobile web access to the platform, and Android download guidance where offered.",
      zh: "支持。可使用自适应网站、平台手机网页，以及提供的 Android 下载指引。",
    },
  },
  {
    id: "guides",
    group: "mobile",
    question: {
      en: "Where can I find game guides?",
      zh: "在哪里查看游戏攻略？",
    },
    answer: {
      en: "Open Guides for editorial explainers, plus Beginner Guide and Currency Purchase for onboarding.",
      zh: "打开攻略查看编辑向解读，新手指南与购币教程提供入门帮助。",
    },
  },
  {
    id: "responsible",
    group: "responsible",
    question: {
      en: "What responsible gaming guidance do you provide?",
      zh: "提供哪些理性游戏指引？",
    },
    answer: {
      en: "18+ only, set limits, take breaks, understand risk, and seek support when needed. See Responsible Gaming and Fair Play.",
      zh: "仅限 18 岁以上、设定限额、适时休息、理解风险，并在需要时寻求支持。请参阅理性游戏与公平游戏。",
    },
  },
  {
    id: "fair-play-faq",
    group: "responsible",
    question: {
      en: "What is Fair Play on this site?",
      zh: "本站的公平游戏是什么？",
    },
    answer: {
      en: "An orientation page for transparency language around hash-inspired entertainment — without inventing audit seals or guaranteed outcomes.",
      zh: "面向哈希灵感娱乐透明度表述的导览页——不编造审计印章或保证结果。",
    },
  },
  {
    id: "support",
    group: "general",
    question: {
      en: "How can I contact support?",
      zh: "如何联系客服？",
    },
    answer: {
      en: "Use platform live chat for account issues. This site lists support@1xroll.my on Contact for brand-site orientation.",
      zh: "账户问题请使用平台在线客服。本站联系页提供 support@1xroll.my 作为品牌站导览邮箱。",
    },
  },
];

export function getFaqByGroup(group: FaqGroupId) {
  return faqItems.filter((f) => f.group === group);
}

export function getGroupedFaq() {
  return faqGroupOrder.map((group) => ({
    group,
    label: faqGroupLabels[group],
    items: getFaqByGroup(group),
  }));
}
