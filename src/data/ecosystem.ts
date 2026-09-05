import type { EcosystemHub, JourneyStep } from "@/types/content";

export const journeySteps: JourneyStep[] = [
  {
    id: "register",
    step: 1,
    title: { en: "Register", zh: "注册" },
    summary: {
      en: "Create your 1XROLL platform account when you are ready to play.",
      zh: "准备好游玩时，创建 1XROLL 平台账户。",
    },
    href: "/register",
  },
  {
    id: "download",
    step: 2,
    title: { en: "Download / Access", zh: "下载 / 访问" },
    summary: {
      en: "Use mobile web, Android APK guidance, or desktop browser access.",
      zh: "使用手机网页、Android APK 指引或桌面浏览器访问。",
    },
    href: "/download",
  },
  {
    id: "deposit",
    step: 3,
    title: { en: "Deposit / Wallet", zh: "存款 / 钱包" },
    summary: {
      en: "Review supported funding rails, then complete deposits on the platform.",
      zh: "了解支持的入金方式，然后在平台完成存款。",
    },
    href: "/deposit",
  },
  {
    id: "games",
    step: 4,
    title: { en: "Explore Games", zh: "探索游戏" },
    summary: {
      en: "Browse slots, live, crypto, fast, fishing and more ecosystem lanes.",
      zh: "浏览老虎机、真人、加密、快速、捕鱼等生态通道。",
    },
    href: "/games",
  },
  {
    id: "rewards",
    step: 5,
    title: { en: "Rewards / VIP", zh: "奖励 / VIP" },
    summary: {
      en: "Understand published promotions, cashback summaries and VIP orientation.",
      zh: "了解已发布优惠、返水摘要与 VIP 导览。",
    },
    href: "/rewards",
  },
  {
    id: "support",
    step: 6,
    title: { en: "Support / Responsible Gaming", zh: "支持 / 理性游戏" },
    summary: {
      en: "Use FAQ, contact paths and responsible-play guidance.",
      zh: "使用常见问题、联系渠道与理性游戏指引。",
    },
    href: "/responsible-gaming",
  },
];

export const ecosystemHubs: EcosystemHub[] = [
  {
    id: "rewards",
    slug: "rewards",
    title: { en: "Rewards Center", zh: "奖励中心" },
    summary: {
      en: "Orientation for activity rewards, VIP cashback summaries and welcome offers.",
      zh: "活动奖励、VIP 返水摘要与迎新优惠的导览。",
    },
    intro: {
      en: "1XROLL groups player benefits across Activity Center style promotions, Rewards Center orientation, rebate-style cashback summaries and VIP Club information. This page connects those lanes without inventing unpublished rates.",
      zh: "1XROLL 将玩家礼遇组织在活动中心式优惠、奖励中心导览、返水式回馈摘要与 VIP 俱乐部信息之中。本页连接这些通道，不编造未发布比例。",
    },
    sections: [
      {
        type: "h2",
        text: { en: "What you will find", zh: "你可以找到什么" },
      },
      {
        type: "ul",
        items: {
          en: [
            "Links to published promotions with verified welcome and VIP summaries",
            "Rebate orientation that only repeats publicly stated cashback ceilings",
            "Paths into VIP and Agent pages for ecosystem participation",
          ],
          zh: [
            "指向已发布优惠的链接，含已核实迎新与 VIP 摘要",
            "仅复述公开返水上限的返水导览",
            "进入 VIP 与代理页的生态参与路径",
          ],
        },
      },
      {
        type: "h2",
        text: { en: "Where rewards are claimed", zh: "奖励在哪里领取" },
      },
      {
        type: "p",
        text: {
          en: "Claiming and eligibility always complete on the 1XROLL platform after login. This brand site is informational.",
          zh: "领取与资格确认始终在登录后的 1XROLL 平台完成。本品牌站仅提供信息。",
        },
      },
    ],
    relatedHrefs: [
      { href: "/promotions", label: { en: "Promotions", zh: "优惠活动" } },
      { href: "/rebates", label: { en: "Rebates", zh: "返水" } },
      { href: "/vip", label: { en: "VIP Club", zh: "VIP 俱乐部" } },
      { href: "/agent", label: { en: "Agent", zh: "代理" } },
    ],
  },
  {
    id: "rebates",
    slug: "rebates",
    title: { en: "Rebates", zh: "返水" },
    summary: {
      en: "Cashback-style rebate orientation for 1XROLL.",
      zh: "1XROLL 的返水式回馈导览。",
    },
    intro: {
      en: "Rebates on 1XROLL are described as VIP cashback on eligible play. The published ceiling summarised on this brand site is up to 1.1%, with higher tiers unlocking increased rates. We do not invent daily rebate tables.",
      zh: "1XROLL 的返水以符合条件投注的 VIP 回馈来描述。本品牌站摘要的已发布上限为最高 1.1%，更高等级可解锁更高比例。我们不编造每日返水表。",
    },
    sections: [
      {
        type: "h2",
        text: { en: "How to read rebate information", zh: "如何阅读返水信息" },
      },
      {
        type: "p",
        text: {
          en: "Treat brand-site summaries as orientation. Confirm live rates, game contribution and payout schedules inside the platform VIP or wallet tools.",
          zh: "把品牌站摘要当作导览。实时比例、游戏贡献与发放节奏请在平台 VIP 或钱包工具中确认。",
        },
      },
    ],
    relatedHrefs: [
      { href: "/vip", label: { en: "VIP Club", zh: "VIP 俱乐部" } },
      { href: "/promotions", label: { en: "Promotions", zh: "优惠活动" } },
      { href: "/rewards", label: { en: "Rewards", zh: "奖励" } },
    ],
  },
  {
    id: "vip",
    slug: "vip",
    title: { en: "VIP Club", zh: "VIP 俱乐部" },
    summary: {
      en: "VIP benefits orientation without invented tier tables.",
      zh: "VIP 礼遇导览，不编造等级表。",
    },
    intro: {
      en: "VIP Club covers cashback-oriented rewards and upgrade-style benefits for engaged players. This page explains the idea and links to published VIP cashback summaries. Live tier status exists only on the platform.",
      zh: "VIP 俱乐部涵盖面向活跃玩家的返水导向奖励与升级式礼遇。本页说明概念并链接已发布 VIP 返水摘要。实时等级仅存在于平台。",
    },
    sections: [
      {
        type: "h2",
        text: { en: "Published VIP cashback summary", zh: "已发布 VIP 返水摘要" },
      },
      {
        type: "p",
        text: {
          en: "Up to 1.1% VIP cashback on eligible bets is the publicly summarised ceiling on this brand site. Higher tiers unlock increased rates and perks — details on the platform.",
          zh: "本品牌站公开摘要的上限为符合条件投注最高 1.1% VIP 返水。更高等级解锁更高比例与礼遇——细节以平台为准。",
        },
      },
      {
        type: "h2",
        text: { en: "What we do not invent", zh: "我们不编造什么" },
      },
      {
        type: "ul",
        items: {
          en: [
            "Named VIP 1 / VIP 2 / VIP 3 ladders without platform evidence on this site",
            "Guaranteed weekly bonus amounts",
            "Automatic upgrade timelines",
          ],
          zh: [
            "本站无平台证据时不编造 VIP 1 / VIP 2 / VIP 3 阶梯",
            "不承诺保证的每周奖励金额",
            "不承诺自动升级时间表",
          ],
        },
      },
    ],
    relatedHrefs: [
      { href: "/rebates", label: { en: "Rebates", zh: "返水" } },
      { href: "/promotions", label: { en: "Promotions", zh: "优惠活动" } },
      { href: "/rewards", label: { en: "Rewards", zh: "奖励" } },
    ],
  },
  {
    id: "agent",
    slug: "agent",
    title: { en: "1XROLL Agent", zh: "1XROLL 代理" },
    summary: {
      en: "Agent and referral ecosystem orientation.",
      zh: "代理与推荐生态导览。",
    },
    intro: {
      en: "The 1XROLL Agent lane covers partnership-style participation, referral orientation and onboarding support concepts. Commission percentages are not invented on this brand site — discuss live terms through official platform channels.",
      zh: "1XROLL 代理通道涵盖合作式参与、推荐导览与入门支持概念。本品牌站不编造佣金比例——实时条款请通过官方平台渠道沟通。",
    },
    sections: [
      {
        type: "h2",
        text: { en: "What agents explore", zh: "代理关注什么" },
      },
      {
        type: "ul",
        items: {
          en: [
            "Referral-oriented growth inside the entertainment ecosystem",
            "Onboarding resources for new players (guides, download, beginner pages)",
            "Support paths via FAQ and contact",
          ],
          zh: [
            "娱乐生态内的推荐导向增长",
            "新玩家入门资源（攻略、下载、新手页）",
            "通过常见问题与联系页的支持路径",
          ],
        },
      },
      {
        type: "p",
        text: {
          en: "Platform CTAs on this site can include an AgentCode parameter for tracking when configured in environment settings.",
          zh: "本站平台 CTA 可在环境配置启用时附带 AgentCode 参数以便追踪。",
        },
      },
    ],
    relatedHrefs: [
      { href: "/register", label: { en: "Register", zh: "注册" } },
      { href: "/beginner-guide", label: { en: "Beginner Guide", zh: "新手指南" } },
      { href: "/contact", label: { en: "Contact", zh: "联系" } },
    ],
  },
  {
    id: "beginner-guide",
    slug: "beginner-guide",
    title: { en: "Beginner's Guide", zh: "新手指南" },
    summary: {
      en: "Getting started with accounts, wallets, games and responsible play.",
      zh: "从账户、钱包、游戏到理性参与的入门。",
    },
    intro: {
      en: "This educational hub walks through registration orientation, wallet basics, how to open games on the platform, and responsible participation — without promising outcomes.",
      zh: "本教育中心涵盖注册导览、钱包基础、如何在平台打开游戏，以及理性参与——不承诺结果。",
    },
    sections: [
      {
        type: "h2",
        text: { en: "Getting started", zh: "开始之前" },
      },
      {
        type: "ul",
        items: {
          en: [
            "Read About and Terms so you understand brand vs platform roles",
            "Use Register / Login CTAs to open the 1XROLL platform",
            "Review Deposit and Payment Methods before funding",
            "Browse Games hubs, then return to Responsible Gaming habits",
          ],
          zh: [
            "阅读关于与条款，理解品牌站与平台角色",
            "使用注册 / 登录 CTA 打开 1XROLL 平台",
            "入金前查看存款与支付方式",
            "浏览游戏通道，并回到理性游戏习惯",
          ],
        },
      },
      {
        type: "h2",
        text: { en: "Using a wallet", zh: "使用钱包" },
      },
      {
        type: "p",
        text: {
          en: "Funding and withdrawals happen on the platform wallet. See Currency Purchase for crypto onboarding orientation and Deposit / Withdraw for process overviews.",
          zh: "入金与取款在平台钱包完成。加密入门见购币教程；流程概览见存款 / 取款页。",
        },
      },
      {
        type: "h2",
        text: { en: "Start a game", zh: "开始游戏" },
      },
      {
        type: "p",
        text: {
          en: "Use category hubs and game pages for discovery, then open play on the platform. Guides add mechanics context before you stake.",
          zh: "用分类中心与游戏页做发现，再在平台打开游玩。攻略在你投入前补充机制上下文。",
        },
      },
    ],
    relatedHrefs: [
      { href: "/currency-purchase", label: { en: "Currency Purchase", zh: "购币教程" } },
      { href: "/deposit", label: { en: "Deposit", zh: "存款" } },
      { href: "/games", label: { en: "Games", zh: "游戏" } },
      { href: "/responsible-gaming", label: { en: "Responsible Gaming", zh: "理性游戏" } },
    ],
  },
  {
    id: "currency-purchase",
    slug: "currency-purchase",
    title: { en: "Currency Purchase Tutorial", zh: "购币教程" },
    summary: {
      en: "Orientation for preparing crypto funding before platform deposits.",
      zh: "在平台入金前准备加密资金的导览。",
    },
    intro: {
      en: "Many 1XROLL players fund with cryptocurrency such as USDT. This tutorial orients wallet preparation concepts. We do not invent exchange partnerships or guaranteed rates — follow your chosen exchange’s own guides, then deposit on the platform.",
      zh: "许多 1XROLL 玩家使用 USDT 等加密货币入金。本教程说明钱包准备概念。我们不编造交易所合作或保证汇率——请遵循你所选交易所自身指引，再在平台存款。",
    },
    sections: [
      {
        type: "h2",
        text: { en: "Typical preparation flow", zh: "典型准备流程" },
      },
      {
        type: "ul",
        items: {
          en: [
            "Create or access a wallet / exchange account you already trust",
            "Acquire USDT or another supported asset shown in the platform wallet",
            "Confirm network (chain) matches the platform deposit address",
            "Complete the deposit inside 1XROLL after login",
          ],
          zh: [
            "创建或使用你已信任的钱包 / 交易所账户",
            "获取平台钱包所示支持的 USDT 或其他资产",
            "确认网络（链）与平台存款地址一致",
            "登录后在 1XROLL 完成存款",
          ],
        },
      },
      {
        type: "p",
        text: {
          en: "Exchanges such as Binance, OKX or Gate.io are commonly used by crypto users worldwide; this site does not certify them as exclusive 1XROLL partners. Always verify addresses carefully.",
          zh: "币安、OKX、Gate.io 等交易所被全球加密用户常用；本站不将其认证为 1XROLL 独家合作方。请务必仔细核对地址。",
        },
      },
    ],
    relatedHrefs: [
      { href: "/deposit", label: { en: "Deposit", zh: "存款" } },
      { href: "/payment-methods", label: { en: "Payment Methods", zh: "支付方式" } },
      { href: "/beginner-guide", label: { en: "Beginner Guide", zh: "新手指南" } },
    ],
  },
  {
    id: "deposit",
    slug: "deposit",
    title: { en: "Deposit", zh: "存款" },
    summary: {
      en: "Deposit overview and security reminders for platform funding.",
      zh: "平台入金概览与安全提醒。",
    },
    intro: {
      en: "Deposits are processed on the 1XROLL platform wallet — not on this brand site. Use this page to understand supported method families and safe habits before you fund.",
      zh: "存款在 1XROLL 平台钱包处理——不在本品牌站。请先用本页了解支持的方式类别与安全习惯，再入金。",
    },
    sections: [
      {
        type: "h2",
        text: { en: "Method families", zh: "方式类别" },
      },
      {
        type: "p",
        text: {
          en: "Published orientation includes Malaysian banks, e-wallets (Touch 'n Go, GrabPay, Boost), DuitNow, and cryptocurrency including USDT. Exact availability varies by account.",
          zh: "已发布导览包括马来西亚银行、电子钱包（Touch 'n Go、GrabPay、Boost）、DuitNow，以及包括 USDT 在内的加密货币。确切可用性因账户而异。",
        },
      },
      {
        type: "h2",
        text: { en: "Security reminders", zh: "安全提醒" },
      },
      {
        type: "ul",
        items: {
          en: [
            "Only deposit after logging into the official platform",
            "Match crypto network to the shown address",
            "Keep 18+ and personal limit habits in mind",
          ],
          zh: [
            "仅在登录官方平台后存款",
            "加密网络需与显示地址匹配",
            "牢记仅限 18 岁以上与个人限额习惯",
          ],
        },
      },
    ],
    relatedHrefs: [
      { href: "/payment-methods", label: { en: "Payment Methods", zh: "支付方式" } },
      { href: "/withdraw", label: { en: "Withdraw", zh: "取款" } },
      { href: "/currency-purchase", label: { en: "Currency Purchase", zh: "购币教程" } },
    ],
  },
  {
    id: "withdraw",
    slug: "withdraw",
    title: { en: "Withdraw", zh: "取款" },
    summary: {
      en: "Withdrawal overview without invented processing-time promises.",
      zh: "取款概览，不编造处理时效承诺。",
    },
    intro: {
      en: "Withdrawals are handled on the 1XROLL platform. Processing speed depends on method, verification and account status — this site does not guarantee instant or fixed-minute payouts.",
      zh: "取款由 1XROLL 平台处理。速度取决于方式、验证与账户状态——本站不保证即时或固定分钟到账。",
    },
    sections: [
      {
        type: "h2",
        text: { en: "Before you withdraw", zh: "取款前" },
      },
      {
        type: "ul",
        items: {
          en: [
            "Confirm identity / security checks if the platform requests them",
            "Use destination details that match your verified profile",
            "Review any wagering requirements tied to promotions you claimed",
          ],
          zh: [
            "若平台要求，完成身份 / 安全核验",
            "使用与已验证资料一致的收款信息",
            "检查你已领取优惠相关的流水要求",
          ],
        },
      },
      {
        type: "h2",
        text: { en: "Support", zh: "支持" },
      },
      {
        type: "p",
        text: {
          en: "If a withdrawal needs help, use platform live chat and the Contact page on this brand site for orientation.",
          zh: "若取款需要协助，请使用平台在线客服，并参考本品牌站联系页。",
        },
      },
    ],
    relatedHrefs: [
      { href: "/deposit", label: { en: "Deposit", zh: "存款" } },
      { href: "/payment-methods", label: { en: "Payment Methods", zh: "支付方式" } },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
    ],
  },
  {
    id: "payment-methods",
    slug: "payment-methods",
    title: { en: "Payment Methods", zh: "支付方式" },
    summary: {
      en: "Supported funding families summarised for 1XROLL players.",
      zh: "为 1XROLL 玩家摘要的入金方式类别。",
    },
    intro: {
      en: "Payment Methods lists rails referenced in published brand orientation: Malaysian banks, DuitNow, Touch 'n Go, GrabPay, Boost, and crypto including USDT. Confirm live availability in the platform wallet.",
      zh: "支付方式列出已发布品牌导览中的通道：马来西亚银行、DuitNow、Touch 'n Go、GrabPay、Boost，以及包括 USDT 在内的加密货币。实时可用性请在平台钱包确认。",
    },
    sections: [
      {
        type: "h2",
        text: { en: "Important", zh: "重要说明" },
      },
      {
        type: "p",
        text: {
          en: "This brand site does not process payments. Never send funds to unofficial addresses.",
          zh: "本品牌站不处理支付。切勿向非官方地址转账。",
        },
      },
    ],
    relatedHrefs: [
      { href: "/deposit", label: { en: "Deposit", zh: "存款" } },
      { href: "/withdraw", label: { en: "Withdraw", zh: "取款" } },
      { href: "/currency-purchase", label: { en: "Currency Purchase", zh: "购币教程" } },
    ],
  },
  {
    id: "download",
    slug: "download",
    title: { en: "Download", zh: "下载" },
    summary: {
      en: "Android, mobile web and desktop access guidance.",
      zh: "Android、手机网页与桌面访问指引。",
    },
    intro: {
      en: "Access 1XROLL through mobile web, desktop browser, or Android download guidance using the QR and screenshot assets on this page. iOS users typically continue via mobile browser or platform instructions after login. Download packages should only come from official 1XROLL paths.",
      zh: "可通过手机网页、桌面浏览器，或本页二维码与截图资源提供的 Android 下载指引访问 1XROLL。iOS 用户通常在登录后通过手机浏览器或平台说明继续。安装包仅应从官方 1XROLL 路径获取。",
    },
    sections: [
      {
        type: "h2",
        text: { en: "Supported access paths", zh: "支持的访问路径" },
      },
      {
        type: "ul",
        items: {
          en: [
            "Mobile web and desktop browser access to the 1XROLL platform",
            "Android download guidance via official QR / platform CTA when offered",
            "iOS: continue with mobile browser or platform instructions — no invented App Store claim on this page",
          ],
          zh: [
            "通过手机网页与桌面浏览器访问 1XROLL 平台",
            "在提供时，通过官方二维码 / 平台 CTA 获取 Android 下载指引",
            "iOS：以手机浏览器或平台说明继续——本页不编造 App Store 上架宣称",
          ],
        },
      },
      {
        type: "h2",
        text: { en: "What the assets on this page are for", zh: "本页资源用途" },
      },
      {
        type: "ul",
        items: {
          en: [
            "QR and screenshot assets help you recognise official orientation materials",
            "CTAs route you to the platform for the latest install package when available",
            "Never install APKs from unofficial mirrors or messaging links",
          ],
          zh: [
            "二维码与截图帮助你识别官方导览材料",
            "CTA 在可用时将你带到平台获取最新安装包",
            "切勿从非官方镜像或聊天链接安装 APK",
          ],
        },
      },
    ],
    relatedHrefs: [
      { href: "/beginner-guide", label: { en: "Beginner Guide", zh: "新手指南" } },
      { href: "/register", label: { en: "Register", zh: "注册" } },
      { href: "/login", label: { en: "Login", zh: "登录" } },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
    ],
  },
  {
    id: "fair-play",
    slug: "fair-play",
    title: { en: "Fair Play", zh: "公平游戏" },
    summary: {
      en: "Transparency-oriented orientation for hash and platform fairness concepts.",
      zh: "面向哈希与平台公平概念的透明度导览。",
    },
    intro: {
      en: "Fair Play explains how 1XROLL talks about transparency and hash-inspired entertainment without fabricating cryptographic audits or unverifiable on-chain guarantees.",
      zh: "公平游戏说明 1XROLL 如何谈论透明度与哈希灵感娱乐，同时不编造密码学审计或无法核实的链上保证。",
    },
    sections: [
      {
        type: "h2",
        text: { en: "What fair play means here", zh: "此处公平游戏意味着什么" },
      },
      {
        type: "ul",
        items: {
          en: [
            "Clear category and rules orientation before you play",
            "No invented RTP, house-edge or audit seals on this brand site",
            "Hash lanes described as platform products — verify details in the live lobby",
          ],
          zh: [
            "游玩前提供清晰的分类与规则导览",
            "本品牌站不编造返还率、庄家优势或审计印章",
            "哈希通道描述为平台产品——细节请在实时大厅核实",
          ],
        },
      },
      {
        type: "h2",
        text: { en: "Responsible participation", zh: "理性参与" },
      },
      {
        type: "p",
        text: {
          en: "Transparency language never replaces personal limits. Continue to Responsible Gaming for 18+ guidance.",
          zh: "透明度表述不能替代个人限额。请继续阅读理性游戏中的 18+ 指引。",
        },
      },
    ],
    relatedHrefs: [
      { href: "/games/hash-games", label: { en: "Hash Games", zh: "哈希游戏" } },
      { href: "/games/hash-roulette", label: { en: "Hash Roulette", zh: "哈希轮盘" } },
      { href: "/responsible-gaming", label: { en: "Responsible Gaming", zh: "理性游戏" } },
    ],
  },
  {
    id: "login",
    slug: "login",
    title: { en: "Login", zh: "登录" },
    summary: {
      en: "Access the 1XROLL platform securely — no fake login form on this site.",
      zh: "安全访问 1XROLL 平台——本站不提供伪造登录表单。",
    },
    intro: {
      en: "Account login happens on the 1XROLL platform. Use the official Login CTA below. This brand site does not collect passwords.",
      zh: "账户登录在 1XROLL 平台完成。请使用下方官方登录 CTA。本品牌站不收集密码。",
    },
    sections: [
      {
        type: "h2",
        text: { en: "Need help signing in?", zh: "登录需要帮助？" },
      },
      {
        type: "ul",
        items: {
          en: [
            "Confirm you are opening the official platform URL",
            "Reset credentials only through platform recovery tools",
            "Contact support via platform chat or the Contact page",
          ],
          zh: [
            "确认打开的是官方平台网址",
            "仅通过平台找回工具重置凭证",
            "通过平台客服或联系页寻求支持",
          ],
        },
      },
    ],
    relatedHrefs: [
      { href: "/register", label: { en: "Register", zh: "注册" } },
      { href: "/contact", label: { en: "Contact", zh: "联系" } },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
    ],
  },
  {
    id: "register",
    slug: "register",
    title: { en: "Register", zh: "注册" },
    summary: {
      en: "Create a 1XROLL platform account via official registration.",
      zh: "通过官方注册创建 1XROLL 平台账户。",
    },
    intro: {
      en: "Registration is completed on the 1XROLL platform. Expect username/password setup, optional referral fields, age confirmation and acceptance of platform terms. This site does not host a registration form.",
      zh: "注册在 1XROLL 平台完成。通常包括用户名/密码、可选推荐字段、年龄确认与接受平台条款。本站不托管注册表单。",
    },
    sections: [
      {
        type: "h2",
        text: { en: "Before you register", zh: "注册前" },
      },
      {
        type: "ul",
        items: {
          en: [
            "You must be 18+",
            "Read Terms and Responsible Gaming",
            "Prepare a secure password you do not reuse elsewhere",
          ],
          zh: [
            "必须年满 18 岁",
            "阅读条款与理性游戏",
            "准备不在其他网站重复使用的安全密码",
          ],
        },
      },
    ],
    relatedHrefs: [
      { href: "/login", label: { en: "Login", zh: "登录" } },
      { href: "/beginner-guide", label: { en: "Beginner Guide", zh: "新手指南" } },
      { href: "/promotions", label: { en: "Promotions", zh: "优惠活动" } },
    ],
  },
  {
    id: "hash-roulette",
    slug: "hash-roulette",
    title: { en: "Hash Roulette", zh: "哈希轮盘" },
    summary: {
      en: "Hash roulette orientation — platform lobby titles, not an invented catalogue.",
      zh: "哈希轮盘导览——平台大厅作品，而非虚构目录。",
    },
    intro: {
      en: "Hash Roulette is a transparency-oriented roulette lane on the 1XROLL platform. This brand site explains the category and connects Fair Play, related games and platform access. Individual lobby titles open after login — we do not invent a local game list or artwork.",
      zh: "哈希轮盘是 1XROLL 平台上偏透明取向的轮盘通道。本品牌站说明类别，并连接公平游戏、相关游戏与平台入口。具体大厅作品需登录后查看——我们不虚构本地游戏列表或美术。",
    },
    sections: [
      {
        type: "h2",
        text: { en: "What Hash Roulette means on 1XROLL", zh: "哈希轮盘在 1XROLL 意味着什么" },
      },
      {
        type: "p",
        text: {
          en: "The lane sits beside live casino roulette and hash-style short formats. Brand pages describe the idea of hash-inspired transparency language without fabricating cryptographic audits or unverifiable on-chain guarantees.",
          zh: "该通道与真人轮盘、哈希短格式并列。品牌页说明哈希灵感透明度表述，但不编造密码学审计或无法核实的链上保证。",
        },
      },
      {
        type: "h2",
        text: { en: "How platform access works", zh: "平台入口如何运作" },
      },
      {
        type: "ul",
        items: {
          en: [
            "Browse this hub for orientation and related ecosystem links",
            "Use Open platform / Register / Login to reach the live lobby",
            "Confirm current titles, rules and presentation inside the platform",
          ],
          zh: [
            "在本中心获取导览与相关生态链接",
            "使用打开平台 / 注册 / 登录进入实时大厅",
            "在平台内确认当前作品、规则与呈现",
          ],
        },
      },
      {
        type: "h2",
        text: { en: "Fair Play connection", zh: "与公平游戏的关系" },
      },
      {
        type: "p",
        text: {
          en: "Read Fair Play for how 1XROLL talks about transparency concepts. Hash language never replaces personal limits — continue to Responsible Gaming.",
          zh: "请阅读公平游戏，了解 1XROLL 如何谈论透明度概念。哈希表述不能替代个人限额——请继续阅读理性游戏。",
        },
      },
    ],
    relatedHrefs: [
      { href: "/games/hash-games", label: { en: "Hash Games", zh: "哈希游戏" } },
      { href: "/games/live-casino", label: { en: "Live Casino", zh: "真人赌场" } },
      { href: "/fair-play", label: { en: "Fair Play", zh: "公平游戏" } },
      { href: "/responsible-gaming", label: { en: "Responsible Gaming", zh: "理性游戏" } },
      { href: "/guides", label: { en: "Guides", zh: "攻略" } },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
      { href: "/register", label: { en: "Register", zh: "注册" } },
    ],
  },
  {
    id: "hash-games",
    slug: "hash-games",
    title: { en: "Hash Games", zh: "哈希游戏" },
    summary: {
      en: "Hash entertainment formats on the platform — orientation without invented titles.",
      zh: "平台上的哈希娱乐玩法——导览而不虚构作品。",
    },
    intro: {
      en: "Hash Games cover blockchain-inspired short formats on the 1XROLL platform. This hub describes the lane, links Fair Play and related categories, and routes you to platform access. Catalogue detail pages are not invented here.",
      zh: "哈希游戏涵盖 1XROLL 平台上偏区块链灵感的短格式玩法。本页说明通道、链接公平游戏与相关分类，并导向平台入口。此处不虚构作品详情页。",
    },
    sections: [
      {
        type: "h2",
        text: { en: "Overview", zh: "概览" },
      },
      {
        type: "p",
        text: {
          en: "Expect short decision loops and lobby presentation that sits near crypto/fast lanes. Exact titles change on the platform — this site stays educational.",
          zh: "可预期短决策循环，以及靠近加密/快速通道的大厅呈现。确切作品以平台为准——本站保持教育向。",
        },
      },
      {
        type: "h2",
        text: { en: "How it works on this brand site", zh: "在本品牌站如何运作" },
      },
      {
        type: "ul",
        items: {
          en: [
            "Read category orientation and Fair Play notes",
            "Jump to related catalogue lanes (crypto, fast, live) when useful",
            "Open the platform for the live hash lobby",
          ],
          zh: [
            "阅读分类导览与公平游戏说明",
            "需要时跳转到相关目录通道（加密、快速、真人）",
            "打开平台进入实时哈希大厅",
          ],
        },
      },
      {
        type: "h2",
        text: { en: "Responsible play", zh: "理性游玩" },
      },
      {
        type: "p",
        text: {
          en: "Short formats can encourage rapid re-entry. Set a session clock before you open the lobby.",
          zh: "短格式容易促使快速再进入。打开大厅前先设定会话时钟。",
        },
      },
    ],
    relatedHrefs: [
      { href: "/games/hash-roulette", label: { en: "Hash Roulette", zh: "哈希轮盘" } },
      { href: "/games/crypto-games", label: { en: "Crypto Games", zh: "加密游戏" } },
      { href: "/games/fast-games", label: { en: "Fast Games", zh: "快速游戏" } },
      { href: "/fair-play", label: { en: "Fair Play", zh: "公平游戏" } },
      { href: "/responsible-gaming", label: { en: "Responsible Gaming", zh: "理性游戏" } },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
      { href: "/register", label: { en: "Register", zh: "注册" } },
    ],
  },
  {
    id: "chess-card",
    slug: "chess-card",
    title: { en: "Chess & Card", zh: "棋牌" },
    summary: {
      en: "Card and table-style entertainment — platform lobby orientation.",
      zh: "棋牌与桌台风格娱乐——平台大厅导览。",
    },
    intro: {
      en: "Chess & Card covers platform card and table formats. This hub explains the lane and links related live/table experiences. Specific lobby titles open on the 1XROLL platform after login — we do not invent a local inventory.",
      zh: "棋牌涵盖平台卡牌与桌台玩法。本页说明通道并链接相关真人/桌台体验。具体大厅作品需登录 1XROLL 平台后查看——我们不虚构本地库存。",
    },
    sections: [
      {
        type: "h2",
        text: { en: "What this lane covers", zh: "本通道涵盖什么" },
      },
      {
        type: "ul",
        items: {
          en: [
            "Card and table-style entertainment available in the platform lobby",
            "Adjacent discovery via Live Casino catalogue titles on this brand site",
            "Responsible pacing tips for longer table sessions",
          ],
          zh: [
            "平台大厅中的棋牌与桌台风格娱乐",
            "可通过本站真人赌场目录作品做相邻发现",
            "面向较长桌台会话的理性节奏提示",
          ],
        },
      },
      {
        type: "h2",
        text: { en: "Platform access", zh: "平台入口" },
      },
      {
        type: "p",
        text: {
          en: "Use Open platform, Register or Login to reach live chess/card products. Brand pages remain informational.",
          zh: "使用打开平台、注册或登录进入实时棋牌产品。品牌页保持信息向。",
        },
      },
    ],
    relatedHrefs: [
      { href: "/games/live-casino", label: { en: "Live Casino", zh: "真人赌场" } },
      { href: "/games", label: { en: "Games hub", zh: "游戏中心" } },
      { href: "/guides/live-casino-basics", label: { en: "Live Casino Basics", zh: "真人娱乐场基础" } },
      { href: "/responsible-gaming", label: { en: "Responsible Gaming", zh: "理性游戏" } },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
      { href: "/register", label: { en: "Register", zh: "注册" } },
    ],
  },
  {
    id: "sports",
    slug: "sports",
    title: { en: "Sports", zh: "体育" },
    summary: {
      en: "Sports entertainment overview — no live odds on this brand site.",
      zh: "体育娱乐概览——本品牌站不提供实时赔率。",
    },
    intro: {
      en: "Sports is part of the 1XROLL platform ecosystem. This page orients you to the lane and links to platform access. We do not publish fixtures, odds, scores or invented match results.",
      zh: "体育属于 1XROLL 平台生态。本页提供通道导览并链接平台入口。我们不发布赛程、赔率、比分或虚构比赛结果。",
    },
    sections: [
      {
        type: "h2",
        text: { en: "Sports overview", zh: "体育概览" },
      },
      {
        type: "p",
        text: {
          en: "On 1XROLL, sports entertainment is delivered inside the live platform lobby after login. This brand site explains the lane, connects related ecosystem pages, and keeps discovery honest — without pretending we have a local fixtures feed.",
          zh: "在 1XROLL，体育娱乐在登录后的实时平台大厅中提供。本品牌站说明通道、连接相关生态页面，并保持发现诚实——不会假装我们有本地赛程源。",
        },
      },
      {
        type: "h2",
        text: { en: "What you can explore here", zh: "你可以在这里探索什么" },
      },
      {
        type: "ul",
        items: {
          en: [
            "How sports fits beside slots, live casino, crypto and fast games",
            "Platform access via Register / Login / Open platform",
            "Responsible Gaming and Fair Play context before you participate",
            "Related guides and FAQ answers that stay free of fake odds",
          ],
          zh: [
            "体育如何与老虎机、真人、加密与快速游戏并列",
            "通过注册 / 登录 / 打开平台进入",
            "参与前的理性游戏与公平游戏上下文",
            "不含虚假赔率的相关攻略与常见问题",
          ],
        },
      },
      {
        type: "h2",
        text: { en: "How platform access works", zh: "平台入口如何运作" },
      },
      {
        type: "p",
        text: {
          en: "Open the 1XROLL platform after login to browse live sports products. Brand pages stay informational; markets and settlement tools live on the platform only.",
          zh: "登录后打开 1XROLL 平台浏览实时体育产品。品牌页保持信息向；盘口与结算工具仅存在于平台。",
        },
      },
      {
        type: "h2",
        text: { en: "Responsible participation", zh: "理性参与" },
      },
      {
        type: "p",
        text: {
          en: "Sports entertainment can feel continuous. Set time and spend limits before you open the lobby, and return to Responsible Gaming whenever you need a reset.",
          zh: "体育娱乐容易感觉“一直在进行”。打开大厅前先设定时间与花费限额，需要重置时请回到理性游戏页。",
        },
      },
    ],
    relatedHrefs: [
      { href: "/games", label: { en: "Games hub", zh: "游戏中心" } },
      { href: "/games/live-casino", label: { en: "Live Casino", zh: "真人赌场" } },
      { href: "/games/crypto-games", label: { en: "Crypto Games", zh: "加密游戏" } },
      { href: "/fair-play", label: { en: "Fair Play", zh: "公平游戏" } },
      { href: "/responsible-gaming", label: { en: "Responsible Gaming", zh: "理性游戏" } },
      { href: "/guides", label: { en: "Guides", zh: "攻略" } },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
      { href: "/register", label: { en: "Register", zh: "注册" } },
    ],
  },
  {
    id: "lottery",
    slug: "lottery",
    title: { en: "Lottery", zh: "彩票" },
    summary: {
      en: "Lottery entertainment overview without fabricated draw data.",
      zh: "彩票娱乐概览，不含虚构开奖数据。",
    },
    intro: {
      en: "Lottery products live on the 1XROLL platform lobby. This hub explains the category for orientation — never inventing draw results, numbers, jackpots or live odds.",
      zh: "彩票产品位于 1XROLL 平台大厅。本中心为导览说明类别——绝不编造开奖结果、号码、头奖或实时赔率。",
    },
    sections: [
      {
        type: "h2",
        text: { en: "Lottery lane overview", zh: "彩票通道概览" },
      },
      {
        type: "p",
        text: {
          en: "Lottery-style entertainment sits alongside other 1XROLL ecosystem lanes. Use this page to understand the category and reach the platform — not as a results board.",
          zh: "彩票风格娱乐与其他 1XROLL 生态通道并列。用本页理解类别并进入平台——而不是把它当作开奖看板。",
        },
      },
      {
        type: "h2",
        text: { en: "What we publish vs what we do not", zh: "我们发布什么、不发布什么" },
      },
      {
        type: "ul",
        items: {
          en: [
            "Publish: category orientation, platform CTAs, responsible-play links",
            "Do not publish: draw results, winning numbers, jackpot ledgers or odds tables",
            "Live lottery products and schedules open only inside the platform lobby",
          ],
          zh: [
            "发布：类别导览、平台 CTA、理性游戏链接",
            "不发布：开奖结果、中奖号码、头奖账本或赔率表",
            "实时彩票产品与日程仅在平台大厅开放",
          ],
        },
      },
      {
        type: "h2",
        text: { en: "Platform access", zh: "平台入口" },
      },
      {
        type: "p",
        text: {
          en: "Use Register or Login to reach the live lottery lobby. Pair with Responsible Gaming and Fair Play before you participate.",
          zh: "使用注册或登录进入实时彩票大厅。参与前请结合理性游戏与公平游戏。",
        },
      },
    ],
    relatedHrefs: [
      { href: "/games", label: { en: "Games hub", zh: "游戏中心" } },
      { href: "/games/hash-games", label: { en: "Hash Games", zh: "哈希游戏" } },
      { href: "/fair-play", label: { en: "Fair Play", zh: "公平游戏" } },
      { href: "/responsible-gaming", label: { en: "Responsible Gaming", zh: "理性游戏" } },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
      { href: "/register", label: { en: "Register", zh: "注册" } },
    ],
  },
];

export function getEcosystemHub(slug: string) {
  return ecosystemHubs.find((h) => h.slug === slug || h.id === slug);
}
