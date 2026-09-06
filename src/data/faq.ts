import type { FaqGroupId, FaqItem } from "@/types/content";

export const faqGroupOrder: FaqGroupId[] = [
  "general",
  "games",
  "slots",
  "live",
  "sports",
  "hash",
  "account",
  "deposit",
  "withdraw",
  "promotions",
  "rewards",
  "vip",
  "agent",
  "guides",
  "download",
  "mobile",
  "responsible",
];

export const faqGroupLabels: Record<FaqGroupId, { en: string; zh: string }> = {
  general: { en: "General", zh: "综合" },
  games: { en: "Games", zh: "游戏" },
  slots: { en: "Slots", zh: "老虎机" },
  live: { en: "Live Casino", zh: "真人赌场" },
  sports: { en: "Sports", zh: "体育" },
  hash: { en: "Hash Games", zh: "哈希游戏" },
  account: { en: "Account", zh: "账户" },
  deposit: { en: "Deposit", zh: "存款" },
  withdraw: { en: "Withdraw", zh: "取款" },
  promotions: { en: "Promotions", zh: "优惠" },
  rewards: { en: "Rewards", zh: "奖励" },
  vip: { en: "VIP", zh: "VIP" },
  agent: { en: "Agent", zh: "代理" },
  guides: { en: "Guides", zh: "攻略" },
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
      en: "This brand site documents a verified curated set: 32 slots, 6 live casino, 4 crypto, 2 fast, and 3 fishing titles, plus hub pages for hash, sports, chess & card and lottery lanes. Additional titles may be available through the wider 1XROLL platform after login — we do not invent platform-wide inventory counts here.",
      zh: "本品牌站策展的已核实集合为：老虎机 32、真人 6、加密 4、快速 2、捕鱼 3，并为哈希、体育、棋牌与彩票提供枢纽页。登录后更广的 1XROLL 平台可能还有其他作品——本站不编造全平台库存数量。",
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
    id: "providers-why",
    group: "games",
    question: {
      en: "Why browse providers on this brand site?",
      zh: "为什么要在本品牌站浏览厂商？",
    },
    answer: {
      en: "Provider pages help you compare studio specialties and related titles before opening the live lobby. Availability still depends on the platform catalogue after login.",
      zh: "厂商页帮助你在进入实时大厅前比较工作室特色与相关作品。实际供应仍以登录后平台目录为准。",
    },
  },
  {
    id: "explore-games",
    group: "games",
    question: {
      en: "How do I explore games from this site?",
      zh: "如何从本站探索游戏？",
    },
    answer: {
      en: "Use Games, category hubs and Guides for orientation, then Login or Register to open the platform lobby for live play.",
      zh: "通过游戏页、分类中心与攻略做导览，再点击登录或注册进入平台大厅进行实时游玩。",
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
      en: "No. Hash and lottery lanes are explained as educational hubs on this brand site. Individual lobby titles open on the 1XROLL platform after login, so we never invent games, artwork, draw boards, or inventory counts. Additional titles may be available on the platform depending on your account.",
      zh: "不会。哈希与彩票在本品牌站以教育向中心页说明。具体大厅作品需登录后在 1XROLL 平台打开，因此我们从不虚构游戏、图片、开奖看板或库存数量。视账户情况，平台上可能还有更多作品。",
    },
  },
  {
    id: "fishing-what",
    group: "games",
    question: {
      en: "What is fishing on 1XROLL?",
      zh: "1XROLL 的捕鱼是什么？",
    },
    answer: {
      en: "Fishing is an arcade-style lane where you aim and shoot targets for rewards. Browse the Fishing category on this site, then open titles in the platform lobby.",
      zh: "捕鱼是瞄准射击目标获取奖励的街机类通道。可在本站浏览捕鱼分类，再于平台大厅打开具体作品。",
    },
  },
  {
    id: "crypto-what",
    group: "games",
    question: {
      en: "What are crypto games here?",
      zh: "这里的加密游戏是什么？",
    },
    answer: {
      en: "Crypto games are short-session entertainment titles often associated with crypto-friendly wallets. Use the Crypto Games category for orientation; confirm live titles on the platform.",
      zh: "加密游戏多为与加密钱包友好的短局娱乐作品。可浏览加密游戏分类做导览，实时作品以平台为准。",
    },
  },
  {
    id: "fast-what",
    group: "games",
    question: {
      en: "What are fast games?",
      zh: "什么是快速游戏？",
    },
    answer: {
      en: "Fast games emphasise short rounds and quick outcomes. Explore the Fast Games category on this brand site, then launch from the platform lobby.",
      zh: "快速游戏强调短局与快速结果。可在本品牌站浏览快速游戏分类，再从平台大厅启动。",
    },
  },
  {
    id: "lottery-what",
    group: "games",
    question: {
      en: "How is lottery covered?",
      zh: "彩票如何覆盖？",
    },
    answer: {
      en: "Lottery is presented as an educational hub about draw-based entertainment: what to check before you participate, how anticipation windows feel, and how to reach the live lobby. Specific draws, tickets, and settlement tools open on the 1XROLL platform after login. This site does not invent results, winning numbers, or jackpot figures.",
      zh: "彩票以教育向中心页呈现开奖类娱乐：参与前应检查什么、期待窗口给人什么感觉，以及如何进入实时大厅。具体开奖、购票与结算工具需登录后在 1XROLL 平台完成。本站不编造结果、中奖号码或头奖数字。",
    },
  },
  {
    id: "chess-what",
    group: "games",
    question: {
      en: "What is Chess & Card?",
      zh: "什么是棋牌？",
    },
    answer: {
      en: "Chess & Card Games covers table and card-style entertainment on the 1XROLL platform. This brand hub teaches room pacing, UI literacy, and responsible session habits without inventing a local table inventory. Open live rooms on the platform after login; additional titles may be available there.",
      zh: "棋牌游戏涵盖 1XROLL 平台上的桌台与纸牌类娱乐。本品牌中心教授房间节奏、界面识读与理性会话习惯，不虚构本地桌台库存。登录后在平台打开实时房间；那里可能还有更多作品。",
    },
  },
  {
    id: "slots-what",
    group: "slots",
    question: {
      en: "What are slots on 1XROLL?",
      zh: "1XROLL 的老虎机是什么？",
    },
    answer: {
      en: "Slots are spinning-reel entertainment titles from multiple studios. Browse the Slots category and provider pages here, then play in the platform lobby.",
      zh: "老虎机是来自多家工作室的转轮娱乐作品。可在本站浏览老虎机分类与厂商页，再于平台大厅游玩。",
    },
  },
  {
    id: "slots-rtp",
    group: "slots",
    question: {
      en: "Do you publish RTP percentages for every slot?",
      zh: "会公布每款老虎机的 RTP 百分比吗？",
    },
    answer: {
      en: "Only where a value is verified in this site’s game dataset. We do not invent RTP figures for titles that lack confirmed data.",
      zh: "仅在本站游戏数据集已核实的数值时公布。对缺少确认数据的作品，我们不编造 RTP。",
    },
  },
  {
    id: "slots-volatility",
    group: "slots",
    question: {
      en: "What does slot volatility mean here?",
      zh: "这里的老虎机波动性是什么意思？",
    },
    answer: {
      en: "Volatility describes how uneven results may feel over a session — lower tends toward steadier outcomes, higher toward streakier ones. Labels appear only when verified in our dataset.",
      zh: "波动性描述一局体验中结果可能有多不均匀——较低通常更平稳，较高更容易出现连段起伏。仅在数据集已核实的作品上标注。",
    },
  },
  {
    id: "live-what",
    group: "live",
    question: {
      en: "What is live casino on 1XROLL?",
      zh: "1XROLL 的真人赌场是什么？",
    },
    answer: {
      en: "Live casino streams real-time tables such as baccarat, roulette and game shows hosted by dealers. Use Live Casino pages for orientation, then join tables on the platform.",
      zh: "真人赌场以实时桌台呈现，如百家乐、轮盘与由荷官主持的游戏秀。可浏览真人赌场页做导览，再在平台加入桌台。",
    },
  },
  {
    id: "live-tables",
    group: "live",
    question: {
      en: "How do I choose a live table?",
      zh: "如何选择真人桌台？",
    },
    answer: {
      en: "Review limits, seat availability and game type inside the platform lobby after login. This brand site does not list live table IDs or invent seating capacity.",
      zh: "登录后在平台大厅查看限额、座位与游戏类型。本品牌站不罗列实时桌台编号，也不编造座位容量。",
    },
  },
  {
    id: "sports-odds",
    group: "sports",
    question: {
      en: "Do you publish sports odds on this site?",
      zh: "本站会公布体育赔率吗？",
    },
    answer: {
      en: "No. Odds and fixtures change continuously and belong on the live platform. Use the 1XROLL Sports hub for educational orientation — including how players typically explore football, basketball, tennis, and esports categories — then check live markets after login. Sports-related categories may vary by platform availability.",
      zh: "不会。赔率与赛程持续变动，属于实时平台。请阅读 1XROLL 体育中心页做教育向导览——包括玩家通常如何探索足球、篮球、网球与电竞分类——再于登录后查看实时盘口。体育相关分类可能因平台可用性而异。",
    },
  },
  {
    id: "sports-access",
    group: "sports",
    question: {
      en: "How do I access sports betting?",
      zh: "如何进入体育投注？",
    },
    answer: {
      en: "Open the 1XROLL Sports page on this brand site for literacy and context, then Login or Register to reach the platform sports lobby when sports products are offered for your account. This site does not stream live odds or scores.",
      zh: "先在本品牌站打开 1XROLL 体育页了解识读与背景，再在账户提供体育产品时点击登录或注册进入平台体育大厅。本站不串流实时赔率或比分。",
    },
  },
  {
    id: "hash-what",
    group: "hash",
    question: {
      en: "What are hash games?",
      zh: "什么是哈希游戏？",
    },
    answer: {
      en: "Hash Games and Hash Roulette are platform entertainment lanes that use hash-style presentation language around short rounds or wheel-shaped loops. Read the hash hubs here for educational concepts; individual titles open on the 1XROLL platform after login. We do not invent cryptographic proofs or local inventory counts.",
      zh: "哈希游戏与哈希轮盘是围绕短回合或转轮形循环、使用哈希风格呈现语汇的平台娱乐通道。可阅读本站哈希中心页了解教育向概念；具体作品需登录后在 1XROLL 平台打开。我们不编造密码学证明或本地库存数量。",
    },
  },
  {
    id: "hash-fair",
    group: "hash",
    question: {
      en: "How does Fair Play relate to hash games?",
      zh: "公平游戏与哈希游戏有何关系？",
    },
    answer: {
      en: "Fair Play on this site explains how we talk about transparency for hash-inspired entertainment without inventing audit seals, on-chain guarantees, or outcome promises. Use it alongside the hash hubs when marketing vocabulary feels overloaded.",
      zh: "本站公平游戏页说明我们如何谈论哈希灵感娱乐的透明度，而不编造审计印章、链上保证或结果承诺。当营销语汇显得过载时，可与哈希中心页一并阅读。",
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
    id: "deposit-methods-page",
    group: "deposit",
    question: {
      en: "Where can I review payment method orientation?",
      zh: "在哪里查看支付方式导览？",
    },
    answer: {
      en: "See the Payment Methods page on this brand site for orientation, then confirm live options inside the platform wallet after login.",
      zh: "可先阅读本品牌站支付方式页做导览，登录后在平台钱包确认实时可用选项。",
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
    id: "promotions-terms",
    group: "promotions",
    question: {
      en: "Where do promotion terms apply?",
      zh: "优惠条款在哪里生效？",
    },
    answer: {
      en: "Brand-site summaries are orientation only. Binding eligibility, turnover and expiry rules are shown on the platform when you opt in.",
      zh: "品牌站摘要仅供导览。具有约束力的资格、流水与有效期规则在你于平台领取时展示。",
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
    id: "promo-eligibility",
    group: "promotions",
    question: {
      en: "Does every published offer apply to every account?",
      zh: "每条公开优惠都适用于每个账户吗？",
    },
    answer: {
      en: "No. Eligibility can depend on account status, region and offer windows. A card on this brand site is a map, not a personal entitlement. Confirm prompts after login.",
      zh: "不是。资格可能取决于账户状态、地区与活动窗口。品牌站卡片是地图，不是个人权利。登录后核对提示。",
    },
  },
  {
    id: "promo-turnover",
    group: "promotions",
    question: {
      en: "What does 25× turnover mean on the welcome summary?",
      zh: "首存摘要里的 25 倍流水是什么意思？",
    },
    answer: {
      en: "It is a published wagering multiple on that first-deposit summary only. Do not reuse 25× on VIP cashback or prize-pool events. Exact contributing games are listed only on the platform.",
      zh: "它只属于该首存摘要的公开流水倍数。不要把 25 倍套用到 VIP 返水或奖池活动。计入游戏只在平台列出。",
    },
  },
  {
    id: "promo-ceiling",
    group: "promotions",
    question: {
      en: "Is 8,888 USDT a typical bonus amount?",
      zh: "8,888 USDT 是典型优惠金额吗？",
    },
    answer: {
      en: "No. It is a published ceiling on the first-deposit summary. Typical outcomes depend on deposit size, eligibility and terms — this site does not forecast personal results.",
      zh: "不是。它是首存摘要的公开上限。典型结果取决于存款额、资格与条款——本站不预测个人结果。",
    },
  },
  {
    id: "promo-claim",
    group: "promotions",
    question: {
      en: "Can I claim a promotion on this website?",
      zh: "可以在本站领取优惠吗？",
    },
    answer: {
      en: "No. This brand site summarises published offers. Claiming, progress and cancel flows exist only on the 1XROLL platform after login.",
      zh: "不能。本品牌站只摘要已发布优惠。领取、进度与取消流程只存在于登录后的 1XROLL 平台。",
    },
  },
  {
    id: "promo-expiry",
    group: "promotions",
    question: {
      en: "Where do I check expiry and contribution rules?",
      zh: "在哪里查看过期与计入规则？",
    },
    answer: {
      en: "In the live offer terms on the platform. This site explains the concepts (windows, eligible activity, claim steps) without inventing extra dates or weighting tables.",
      zh: "在平台的实时活动条款中。本站解释窗口、计入活动与领取步骤等概念，不编造额外日期或权重表。",
    },
  },
  {
    id: "promo-prize-pool",
    group: "promotions",
    question: {
      en: "Are prize-pool amounts published here?",
      zh: "本站会公布奖池金额吗？",
    },
    answer: {
      en: "No. Prize-pool events are described as a type. Current pools, title lists and windows belong on the platform when an event is live.",
      zh: "不会。奖池活动只作为类型说明。当期奖池、作品名单与窗口在活动上线时属于平台。",
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
    id: "welcome-bonus",
    group: "rewards",
    question: {
      en: "What welcome bonus is summarised here?",
      zh: "这里摘要的迎新优惠是什么？",
    },
    answer: {
      en: "A 200% first deposit bonus up to 8,888 USDT, with 25× turnover and a minimum deposit of 10 USDT — confirm live terms on the platform.",
      zh: "200% 首存最高 8,888 USDT，25 倍流水，最低存款 10 USDT——实时条款以平台为准。",
    },
  },
  {
    id: "rewards-vs-promos",
    group: "rewards",
    question: {
      en: "How do Rewards differ from Promotions?",
      zh: "奖励和优惠有何不同？",
    },
    answer: {
      en: "Promotions are usually time-bound opt-in offers. Rewards is the map that places those offers beside activity, rebate and VIP lanes so you can compare purposes — not stack figures.",
      zh: "优惠通常是限时可加入的活动。奖励是把这些活动放在活动、返水与 VIP 车道旁边比较用途的地图——不是把数字叠在一起。",
    },
  },
  {
    id: "rewards-guarantee",
    group: "rewards",
    question: {
      en: "Does this page guarantee I will receive a reward?",
      zh: "本页保证我会获得奖励吗？",
    },
    answer: {
      en: "No. Nothing on this brand site is a personal entitlement. Eligibility, progress and claims exist only on the platform after login.",
      zh: "不保证。品牌站内容不是个人权利。资格、进度与领取只存在于登录后的平台。",
    },
  },
  {
    id: "rewards-find",
    group: "rewards",
    question: {
      en: "How do I find the right reward type?",
      zh: "如何找到适合自己的奖励类型？",
    },
    answer: {
      en: "Match the lane to your session plan: welcome-style offers for a first path, activity events as optional entertainment, rebate/VIP language for ongoing eligible play. Read conditions before you opt in.",
      zh: "让车道匹配你的会话计划：首存类适合第一次路径，活动当可选娱乐，返水/VIP 适合持续符合条件的游玩。加入前先读条件。",
    },
  },
  {
    id: "rewards-terms",
    group: "rewards",
    question: {
      en: "Where should I read reward terms?",
      zh: "应在哪里阅读奖励条款？",
    },
    answer: {
      en: "Use this hub for concepts, then read the full terms on the platform for the specific offer or VIP area you open. Summaries here never replace those terms.",
      zh: "用本枢纽理解概念，再在平台阅读你打开的具体活动或 VIP 区域全文条款。这里的摘要不能替代那些条款。",
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
    id: "vip-how",
    group: "vip",
    question: {
      en: "How do I join or check VIP status?",
      zh: "如何加入或查看 VIP 状态？",
    },
    answer: {
      en: "Read the VIP page on this brand site for orientation, then open the platform VIP area after login for live progress and benefits.",
      zh: "可先阅读本品牌站 VIP 页做导览，登录后在平台 VIP 区域查看实时进度与权益。",
    },
  },
  {
    id: "vip-vs-rewards",
    group: "vip",
    question: {
      en: "How does VIP relate to Rewards and Promotions?",
      zh: "VIP 与奖励、优惠是什么关系？",
    },
    answer: {
      en: "VIP is the ongoing relationship and cashback-concept lane. Rewards is the map. Promotions are timed opt-ins. Do not mix the 25× welcome multiple with the 1.1% cashback ceiling.",
      zh: "VIP 是持续关系与返水概念车道。奖励是地图。优惠是限时加入。不要把首存 25 倍与 1.1% 返水上限混用。",
    },
  },
  {
    id: "vip-mobile",
    group: "vip",
    question: {
      en: "Can I review VIP information on a phone?",
      zh: "可以在手机上查看 VIP 信息吗？",
    },
    answer: {
      en: "This VIP page is mobile-readable. Live tier tools, progress and support paths exist only in the platform client or mobile web after login.",
      zh: "本 VIP 页可在手机阅读。实时等级工具、进度与客服路径只存在于登录后的平台客户端或移动网页。",
    },
  },
  {
    id: "vip-account",
    group: "vip",
    question: {
      en: "Why is my VIP status not shown here?",
      zh: "为何这里看不到我的 VIP 状态？",
    },
    answer: {
      en: "This brand site does not display personal meters. Account-specific conditions belong on the platform after authentication.",
      zh: "本品牌站不显示个人进度条。账户专属条件属于认证后的平台。",
    },
  },
  {
    id: "vip-terms",
    group: "vip",
    question: {
      en: "What VIP terms should I read before participating?",
      zh: "参与前应阅读哪些 VIP 条款？",
    },
    answer: {
      en: "Eligibility, eligible bets, timing and how cashback is calculated — all on the platform VIP area. This site only repeats the published up-to-1.1% ceiling as orientation.",
      zh: "资格、符合条件的投注、时间以及返水如何计算——全部在平台 VIP 区域。本站只把公开的最高 1.1% 上限作为导览重复。",
    },
  },
  {
    id: "vip-what",
    group: "vip",
    question: {
      en: "What is 1XROLL VIP?",
      zh: "什么是 1XROLL VIP？",
    },
    answer: {
      en: "VIP is the ongoing-benefits lane in the 1XROLL ecosystem. This hub explains published language such as cashback orientation, how VIP sits beside Rewards and Promotions, and where to review live details after you open the platform.",
      zh: "VIP 是 1XROLL 生态中的持续礼遇通道。本枢纽说明已公开的表述（例如返水导览）、VIP 与奖励/优惠的关系，以及打开平台后应在何处核对实时细节。",
    },
  },
  {
    id: "vip-auto",
    group: "vip",
    question: {
      en: "Is VIP cashback automatically available to everyone?",
      zh: "VIP 返水是否自动适用于所有人？",
    },
    answer: {
      en: "No. “Up to 1.1%” is a published ceiling for eligible activity. Eligibility, weighting and timing are confirmed in the live VIP area — not assumed from this page.",
      zh: "不是。“最高 1.1%”是符合条件活动的公开上限。资格、权重与时间以实时 VIP 区域为准——不能从本页自行假定。",
    },
  },
  {
    id: "vip-change",
    group: "vip",
    question: {
      en: "Can VIP information change?",
      zh: "VIP 信息会变化吗？",
    },
    answer: {
      en: "Yes. Programme details can be updated on the platform. Treat this site as orientation and confirm current wording in the account VIP area before you rely on a benefit.",
      zh: "会。计划细节可在平台更新。请把本站当作导览，并在依赖某项礼遇前于账户 VIP 区域核对当前表述。",
    },
  },
  {
    id: "vip-vs-promos",
    group: "vip",
    question: {
      en: "How are VIP benefits different from promotions?",
      zh: "VIP 礼遇与优惠活动有何不同？",
    },
    answer: {
      en: "Promotions are typically timed opt-in offers with their own turnover and eligibility. VIP is an ongoing relationship lane. Read each set of terms separately — do not stack figures such as welcome 25× turnover with the 1.1% cashback ceiling.",
      zh: "优惠通常是限时、需加入的活动，有各自的流水与资格。VIP 是持续关系通道。请分开阅读两套条款——不要把欢迎优惠的 25 倍流水与 1.1% 返水上限叠在一起计算。",
    },
  },
  {
    id: "vip-support",
    group: "vip",
    question: {
      en: "Where can I find support about VIP?",
      zh: "在哪里可以获得 VIP 相关支持？",
    },
    answer: {
      en: "Use Contact on this site for orientation questions, and the platform support path after login for account-specific VIP status.",
      zh: "导览类问题可使用本站联系页；账户专属 VIP 状态请在登录后通过平台支持路径处理。",
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
    id: "agent-commission",
    group: "agent",
    question: {
      en: "Where are agent commission rates listed?",
      zh: "代理佣金比例在哪里列出？",
    },
    answer: {
      en: "They are not invented on this brand site. If a dashboard or rate table exists, it appears on the platform after an approved agent account — not as a public percentage here.",
      zh: "本品牌站不编造比例。若存在后台或费率表，只在获批的代理账户登录后出现在平台——不会作为公开百分比写在这里。",
    },
  },
  {
    id: "agent-who",
    group: "agent",
    question: {
      en: "Who is the Agent programme for?",
      zh: "代理计划面向谁？",
    },
    answer: {
      en: "Orientation for people exploring referral-style partnership. Responsibilities, promotion guidelines and live tools belong on the platform after application — this page is literacy, not a contract.",
      zh: "面向探索推荐式合作的人。责任、推广规范与实时工具属于申请后的平台——本页是识读，不是合同。",
    },
  },
  {
    id: "agent-start",
    group: "agent",
    question: {
      en: "How do I get started as an agent?",
      zh: "如何开始成为代理？",
    },
    answer: {
      en: "Read this hub, then use Open platform / Register paths. Do not promise unpublished rates to others; confirm live rules after login.",
      zh: "先读本枢纽，再使用打开平台 / 注册路径。不要向他人承诺未公布的比例；登录后确认实时规则。",
    },
  },
  {
    id: "agent-player",
    group: "agent",
    question: {
      en: "How is an Agent different from a player?",
      zh: "代理与玩家有何不同？",
    },
    answer: {
      en: "A player account is for exploring games, promotions, rewards and VIP. The Agent area is partnership orientation: programme information, inquiry/application paths and responsible promotion principles. Live commercial terms stay on official channels after review.",
      zh: "玩家账户用于探索游戏、优惠、奖励与 VIP。代理区域是合作导览：计划信息、咨询/申请路径，以及负责任推广原则。实时商业条款在审核后仍通过官方渠道确认。",
    },
  },
  {
    id: "agent-apply",
    group: "agent",
    question: {
      en: "How do I apply or make an inquiry?",
      zh: "如何申请或提出咨询？",
    },
    answer: {
      en: "Use Contact on this site for orientation questions, then Open platform when you are ready to discuss live partnership terms. This page describes a general journey — it does not guarantee approval.",
      zh: "导览问题请使用本站联系页；准备讨论实时合作条款时再打开平台。本页描述的是一般路径——不保证获批。",
    },
  },
  {
    id: "agent-review",
    group: "agent",
    question: {
      en: "What information should I review before applying?",
      zh: "申请前应阅读哪些信息？",
    },
    answer: {
      en: "This Agent hub, Promotions and Guides for accurate public wording, Responsible Gaming principles, and the latest programme details shown through official 1XROLL channels.",
      zh: "本代理枢纽、优惠与攻略中的公开表述、理性游戏原则，以及官方 1XROLL 渠道展示的最新计划细节。",
    },
  },
  {
    id: "agent-fixed",
    group: "agent",
    question: {
      en: "Are agent benefits fixed?",
      zh: "代理权益是固定的吗？",
    },
    answer: {
      en: "This brand site does not publish a fixed commission table. Any live rates, tools or eligibility appear only through official channels after review.",
      zh: "本品牌站不发布固定佣金表。任何实时费率、工具或资格仅在审核后通过官方渠道出现。",
    },
  },
  {
    id: "agent-change",
    group: "agent",
    question: {
      en: "Can agent program terms change?",
      zh: "代理计划条款会变化吗？",
    },
    answer: {
      en: "Yes. Conditions, eligibility and operating terms may change. Review the latest information before publishing or relying on programme details.",
      zh: "会。条件、资格与运营条款可能变化。在发布或依赖计划细节前，请核对最新信息。",
    },
  },
  {
    id: "agent-where",
    group: "agent",
    question: {
      en: "Where can I find current agent information?",
      zh: "在哪里可以找到当前的代理信息？",
    },
    answer: {
      en: "Start with this hub, then confirm live details on the platform after an official inquiry. Contact is the orientation path on this site.",
      zh: "先从本枢纽开始，官方咨询后再在平台核对实时细节。本站的导览路径是联系页。",
    },
  },
  {
    id: "agent-promote",
    group: "agent",
    question: {
      en: "What should agents consider when promoting 1XROLL?",
      zh: "推广 1XROLL 时，代理应注意什么？",
    },
    answer: {
      en: "Use accurate, current information; present terms clearly; avoid guaranteeing winnings or inventing bonuses; and respect responsible-gaming principles.",
      zh: "使用准确、最新的信息；清楚展示相关条款；不保证赢利、不编造优惠；并遵守理性游戏原则。",
    },
  },
  {
    id: "agent-wins",
    group: "agent",
    question: {
      en: "Can agents guarantee player winnings?",
      zh: "代理可以保证玩家赢利吗？",
    },
    answer: {
      en: "No. Outcomes are uncertain. Promotional language should never guarantee winnings, fabricated bonuses or misleading urgency.",
      zh: "不可以。结果具有不确定性。推广用语绝不应该保证赢利、编造优惠或制造误导性紧迫感。",
    },
  },
  {
    id: "agent-support",
    group: "agent",
    question: {
      en: "Where can I get partnership support?",
      zh: "在哪里可以获得合作支持？",
    },
    answer: {
      en: "Use Contact for orientation, and official platform channels after you have submitted an inquiry. Account-specific tools are not displayed on this brand site.",
      zh: "导览请使用联系页；提交咨询后通过官方平台渠道沟通。账户专属工具不会显示在本品牌站。",
    },
  },
  {
    id: "agent-terms-page",
    group: "agent",
    question: {
      en: "Where can I read the applicable terms?",
      zh: "在哪里阅读适用条款？",
    },
    answer: {
      en: "Read Terms on this site for website orientation, then confirm live agent-programme terms through official 1XROLL channels. Promotions and Rewards hubs explain player-facing offer language separately.",
      zh: "网站导览请阅读本站条款页，实时代理计划条款请通过官方 1XROLL 渠道确认。优惠与奖励枢纽则分别说明面向玩家的活动用语。",
    },
  },
  {
    id: "guides-hub",
    group: "guides",
    question: {
      en: "What is the 1XROLL Guides hub?",
      zh: "什么是 1XROLL 攻略中心？",
    },
    answer: {
      en: "It is the knowledge centre for getting started, game categories, promotions, rewards, VIP, wallet concepts, fair play and responsible participation — plus individual articles for deeper reading.",
      zh: "这是入门、游戏分类、优惠、奖励、VIP、钱包概念、公平游戏与理性参与的知识中心，并配有可深入阅读的单篇文章。",
    },
  },
  {
    id: "guides-start",
    group: "guides",
    question: {
      en: "Where should a new user start?",
      zh: "新用户应该从哪里开始？",
    },
    answer: {
      en: "Begin with the four-step journey on this page, then the beginner articles and the game library. Review promotions, rewards and responsible-gaming information before you participate.",
      zh: "先从本页的四步路径开始，再阅读入门文章并浏览游戏库。参与前请查看优惠、奖励与理性游戏信息。",
    },
  },
  {
    id: "guides-categories",
    group: "guides",
    question: {
      en: "Where can I learn about game categories?",
      zh: "在哪里了解游戏分类？",
    },
    answer: {
      en: "Use the Game Guides section on this hub, the category pages in the library, and the article “Explore game categories”.",
      zh: "使用本枢纽的游戏攻略分区、游戏库中的分类页，以及「探索游戏分类」文章。",
    },
  },
  {
    id: "guides-promo-terms",
    group: "guides",
    question: {
      en: "How can I understand promotion terms?",
      zh: "如何理解优惠条款？",
    },
    answer: {
      en: "Read the Promotions hub and the promotions-terms guide. Check eligibility, turnover, expiry and whether an offer applies to you before opting in.",
      zh: "阅读优惠枢纽与优惠条款攻略。加入前请核对资格、流水、有效期，以及活动是否适用于你。",
    },
  },
  {
    id: "guides-rewards",
    group: "guides",
    question: {
      en: "Where can I learn about rewards?",
      zh: "在哪里了解奖励？",
    },
    answer: {
      en: "Open the Rewards hub and the rewards & VIP guide. Rewards sit beside promotions as a map of benefit lanes — not as a substitute for live eligibility.",
      zh: "打开奖励枢纽以及奖励与 VIP 攻略。奖励与优惠并列，作为礼遇通道地图——不能替代实时资格确认。",
    },
  },
  {
    id: "guides-vip",
    group: "guides",
    question: {
      en: "Where can I find VIP information?",
      zh: "在哪里查看 VIP 信息？",
    },
    answer: {
      en: "Use the VIP hub on this site for orientation, including the published cashback ceiling of up to 1.1%. Live status remains on the platform after login.",
      zh: "使用本站 VIP 枢纽作为导览，其中包含已公开的返水上限最高 1.1%。实时状态仍需登录后在平台查看。",
    },
  },
  {
    id: "guides-wallet",
    group: "guides",
    question: {
      en: "Where can I find wallet information?",
      zh: "在哪里查看钱包信息？",
    },
    answer: {
      en: "Use the Wallet section on this hub, then Deposit, Withdraw, Rebates and Payment Methods pages. Methods and processing conditions are shown on the platform — this site does not invent providers or speeds.",
      zh: "使用本枢纽的钱包分区，再进入存款、取款、返水与支付方式页。方法与处理条件以平台展示为准——本站不编造支付商或到账速度。",
    },
  },
  {
    id: "guides-rg",
    group: "guides",
    question: {
      en: "Where can I learn about responsible gaming?",
      zh: "在哪里了解理性游戏？",
    },
    answer: {
      en: "Read the Responsible Gaming page and the dedicated responsible-gaming guide. Keep entertainment within personal limits and take a break if play stops feeling manageable.",
      zh: "阅读理性游戏页与对应攻略。把娱乐控制在个人限额内；若游戏不再可控，请暂停并寻求支持。",
    },
  },
  {
    id: "guides-mobile",
    group: "guides",
    question: {
      en: "Can I access the Guides section on mobile?",
      zh: "可以在手机上使用攻略中心吗？",
    },
    answer: {
      en: "Yes. This hub and its articles are designed to stack on phones. Live play still follows the platform’s mobile web or client experience.",
      zh: "可以。本枢纽与文章会在手机上自然堆叠。实时游玩仍跟随平台的移动网页或客户端体验。",
    },
  },
  {
    id: "guides-support",
    group: "guides",
    question: {
      en: "Where can I find additional support information?",
      zh: "在哪里找到更多支持信息？",
    },
    answer: {
      en: "Use FAQ, Contact and the platform support path after login. Guides explain concepts; they do not replace account-specific help.",
      zh: "使用常见问题、联系页，以及登录后的平台支持路径。攻略解释概念，不能替代账户专属帮助。",
    },
  },
  {
    id: "download-faq",
    group: "download",
    question: {
      en: "How do I access 1XROLL on mobile?",
      zh: "如何在手机上访问 1XROLL？",
    },
    answer: {
      en: "Open the Access page for QR and screenshot orientation, then use platform CTAs for current browser or install options when the platform offers them. Prefer 1XROLL platform paths only — this brand site does not host a store listing.",
      zh: "打开访问页查看二维码与截图导览，再通过平台 CTA 获取（在提供时）当前浏览器或安装选项。请只使用 1XROLL 平台路径——本品牌站不托管应用商店上架。",
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
      en: "Yes. Use the responsive brand site, mobile web access to the platform, and Download-page access orientation when offered.",
      zh: "支持。可使用自适应品牌站、平台手机网页，以及（在提供时）下载页的访问导览。",
    },
  },
  {
    id: "mobile-access",
    group: "mobile",
    question: {
      en: "What is the recommended mobile access path?",
      zh: "推荐的移动端访问路径是什么？",
    },
    answer: {
      en: "Start with this responsive brand site, then Login or Register for platform mobile web. Use the Download page for access orientation materials and official CTAs — not unofficial mirrors.",
      zh: "先使用本自适应品牌站，再通过登录或注册进入平台手机网页。下载页用于访问导览材料与官方 CTA——勿使用非官方镜像。",
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
    id: "rg-limits",
    group: "responsible",
    question: {
      en: "How should I set play limits?",
      zh: "应如何设定游玩限额？",
    },
    answer: {
      en: "Decide a budget and time boundary before you play, and use any limit tools the platform offers after login. Stop if entertainment stops feeling fun.",
      zh: "游玩前先设定预算与时间边界，并在登录后使用平台提供的限额工具。若娱乐不再愉快，请立即停止。",
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
  {
    id: "slots-mobile",
    group: "slots",
    question: {
      en: "Are slots readable on mobile?",
      zh: "老虎机在手机上可读吗？",
    },
    answer: {
      en: "Most catalogue slots are designed for portrait or responsive play. Prefer titles whose UI keeps stake and spin controls reachable with one thumb, and pause if text becomes hard to read.",
      zh: "多数目录老虎机面向竖屏或响应式游玩。优先选择注额与旋转控件单手可及的作品；若文字难读请暂停。",
    },
  },
  {
    id: "live-mobile",
    group: "live",
    question: {
      en: "Can I follow live casino on a phone?",
      zh: "手机上能跟真人娱乐场吗？",
    },
    answer: {
      en: "Yes — use a stable connection and keep the betting window visible. Mobile live play rewards slower stake decisions than rapid slot tapping.",
      zh: "可以——请使用稳定网络并保持投注窗可见。移动端真人游玩更适合比老虎机连点更慢的注额决策。",
    },
  },
  {
    id: "live-limits",
    group: "live",
    question: {
      en: "Does this site list live table limits?",
      zh: "本站会列出真人桌限吗？",
    },
    answer: {
      en: "No. Table limits, seats and schedules appear on the live platform after login. This site explains formats without inventing limits or odds.",
      zh: "不会。桌限、座位与场次在登录后的实时平台显示。本站只解释玩法格式，不编造限额或赔率。",
    },
  },
  {
    id: "hash-roulette-lobby",
    group: "hash",
    question: {
      en: "Where do I open Hash Roulette?",
      zh: "在哪里打开哈希轮盘？",
    },
    answer: {
      en: "Use the Hash Roulette hub for wheel literacy and editorial boundaries, then open the 1XROLL platform via Login, Register, or Play CTAs. Confirm current lobby placement, rules, and presentation after authentication — they can vary by account and region. Additional titles may be available on the platform.",
      zh: "先用哈希轮盘中心页了解转轮识读与编辑边界，再通过登录、注册或游玩 CTA 打开 1XROLL 平台。认证后确认当前大厅位置、规则与呈现——可能因账户与地区而异。平台上可能还有更多作品。",
    },
  },
  {
    id: "hash-limits",
    group: "hash",
    question: {
      en: "Are hash game stakes listed here?",
      zh: "这里会列出哈希游戏注额吗？",
    },
    answer: {
      en: "No. Stake ranges and round tools live on the platform client after login. Set personal time and spend limits before you open any hash-style round; technical framing does not replace Responsible Gaming habits.",
      zh: "不会。注额范围与回合工具在登录后的平台客户端。打开任何哈希风格回合前请先设定个人时间与花费限额；技术包装不能替代理性游戏习惯。",
    },
  },
  {
    id: "hash-games-lobby",
    group: "hash",
    question: {
      en: "How do Hash Games differ from Hash Roulette?",
      zh: "哈希游戏与哈希轮盘有何不同？",
    },
    answer: {
      en: "Both are educational hubs for hash-inspired entertainment on this brand site. Hash Roulette focuses on wheel-shaped framing and roulette literacy; Hash Games covers a wider short-round family and transparency concepts without inventing proofs. Exact lobby tiles open on the platform after login.",
      zh: "两者都是本品牌站面向哈希灵感娱乐的教育向中心。哈希轮盘聚焦转轮形包装与轮盘识读；哈希游戏覆盖更广的短回合家族与透明度概念，但不编造证明。确切大厅瓷砖需登录后在平台打开。",
    },
  },
  {
    id: "hash-pacing",
    group: "hash",
    question: {
      en: "What pacing should I expect from hash-style games?",
      zh: "哈希风格游戏的节奏如何？",
    },
    answer: {
      en: "Expect short decision loops that resolve quickly. That speed can feel intense and can stack many decisions into a short commute — use round budgets and time boxes, and avoid stacking rounds when tired or when “one more verify” becomes a loop.",
      zh: "预期是快速结算的短决策循环。这种速度可能很强烈，也能把许多决策塞进一次短通勤——请使用局数预算与时间盒；疲劳时，或当「再核验一次」变成循环时，避免继续叠回合。",
    },
  },
  {
    id: "crypto-aviator",
    group: "games",
    question: {
      en: "Is Aviator in the crypto games catalogue?",
      zh: "Aviator 在加密游戏目录里吗？",
    },
    answer: {
      en: "Yes — Aviator is one of the four verified crypto-oriented catalogue titles on this site, alongside other short-round Spribe-style entries where listed.",
      zh: "是——Aviator 是本站四款已核实加密向目录作品之一，并与其他已列的短回合 Spribe 风格条目并列。",
    },
  },
  {
    id: "crypto-pacing",
    group: "games",
    question: {
      en: "Why do crypto games feel faster?",
      zh: "为何加密游戏感觉更快？",
    },
    answer: {
      en: "Many use short rounds with a clear settle moment. Faster pacing is not a skill edge — it is a tempo choice that needs stricter personal limits.",
      zh: "许多作品用短回合与清晰结算点。更快节奏不是技巧优势——而是更需要严格个人限额的节奏选择。",
    },
  },
  {
    id: "crypto-mobile",
    group: "games",
    question: {
      en: "Do crypto games work on mobile browsers?",
      zh: "加密游戏能在手机浏览器运行吗？",
    },
    answer: {
      en: "Catalogue pages are mobile-readable; live play happens on the platform client or mobile web path after login. Prefer a stable connection for timing-sensitive rounds.",
      zh: "目录页可在移动端阅读；实际游玩在登录后的平台客户端或移动网页路径。对时机敏感的回合请优先稳定网络。",
    },
  },
  {
    id: "fast-crash",
    group: "games",
    question: {
      en: "What are Fast Games on 1XROLL?",
      zh: "1XROLL 的快速游戏是什么？",
    },
    answer: {
      en: "A small verified catalogue lane (two titles) for short, timing-focused rounds neighbouring crypto-style play. Open each title page for mechanics notes — we do not invent extra genres.",
      zh: "小型已核实目录车道（两款），面向邻近加密风格的短时机回合。请打开各作品页查看机制说明——我们不编造额外类型。",
    },
  },
  {
    id: "fast-pacing",
    group: "games",
    question: {
      en: "How should beginners approach Fast Games?",
      zh: "新手应如何接触快速游戏？",
    },
    answer: {
      en: "Start with one title, read the how-to notes, and set a short session clock. Fast rounds multiply decisions — fewer rounds with clearer intent beat rapid autopilot.",
      zh: "先从一款开始，阅读玩法说明，并设定短会话时钟。快速回合会倍增决策——更少但更有意识的回合胜过自动驾驶连点。",
    },
  },
  {
    id: "fast-limits",
    group: "games",
    question: {
      en: "Do Fast Games need stricter limits?",
      zh: "快速游戏需要更严格限额吗？",
    },
    answer: {
      en: "Often yes, because rounds resolve quickly. Decide stake and time walls before you start, and stop when the entertainment value drops.",
      zh: "通常需要，因为回合解决很快。开始前先定注额与时间墙，娱乐感下降时立即停止。",
    },
  },
  {
    id: "fishing-big-bass",
    group: "games",
    question: {
      en: "Which fishing titles are listed?",
      zh: "列出了哪些捕鱼作品？",
    },
    answer: {
      en: "This site’s fishing catalogue currently lists three verified titles, including Big Bass Bonanza where present in the dataset. Open the fishing category for the full shelf.",
      zh: "本站捕鱼目录目前列出三款已核实作品（数据集中含 Big Bass Bonanza 时会显示）。请打开捕鱼分类查看完整货架。",
    },
  },
  {
    id: "fishing-aim",
    group: "games",
    question: {
      en: "Are fishing games skill-based shooting games?",
      zh: "捕鱼是技巧射击游戏吗？",
    },
    answer: {
      en: "They often feel arcade-like with aiming or target selection, but outcomes remain chance-driven entertainment. Treat aiming as interface feedback, not a guarantee.",
      zh: "它们常有街机感与瞄准/选目标，但结果仍是机会驱动的娱乐。把瞄准当作界面反馈，而非保证。",
    },
  },
  {
    id: "fishing-limits",
    group: "games",
    question: {
      en: "How do I keep fishing sessions intentional?",
      zh: "如何让捕鱼对局保持有意识？",
    },
    answer: {
      en: "Pick one title, set a time box, and avoid chasing a “last big fish” moment. Return to guides or another category when focus fades.",
      zh: "选一款作品、设定时间盒，避免追逐「最后一条大鱼」。注意力下降时回到攻略或其他分类。",
    },
  },
  {
    id: "sports-what",
    group: "sports",
    question: {
      en: "What is the Sports page for?",
      zh: "体育页是做什么的？",
    },
    answer: {
      en: "The 1XROLL Sports page is educational orientation for sports-related entertainment: how players typically explore categories such as football, basketball, tennis, and esports, plus session design around match clocks. Sports-related categories may vary by platform availability — this site does not invent fixtures, odds, or live scores.",
      zh: "1XROLL 体育页为体育相关娱乐提供教育向导览：玩家通常如何探索足球、篮球、网球与电竞等分类，以及围绕比赛时钟的会话设计。体育相关分类可能因平台可用性而异——本站不编造赛程、赔率或实时比分。",
    },
  },
  {
    id: "sports-lobby",
    group: "sports",
    question: {
      en: "Where do I place sports bets?",
      zh: "在哪里进行体育投注？",
    },
    answer: {
      en: "On the 1XROLL platform after login, when sports markets are offered for your account. This brand page explains concepts and browsing habits only — confirm current categories and rules inside the live client.",
      zh: "在登录后的 1XROLL 平台（若你的账户提供体育盘口）。本品牌页仅解释概念与浏览习惯——请在实时客户端内确认当前分类与规则。",
    },
  },
  {
    id: "sports-limits",
    group: "sports",
    question: {
      en: "Why are there no odds on this site?",
      zh: "为何本站没有赔率？",
    },
    answer: {
      en: "Odds and fixtures change constantly and belong on the live platform. Publishing invented numbers here would mislead readers. Use Responsible Gaming for personal limits; use this Sports hub for literacy without a fake odds board.",
      zh: "赔率与赛程不断变化，属于实时平台。在此发布编造数字会误导读者。个人限额请用理性游戏；需要识读而非虚假赔率看板时，请用本体育中心页。",
    },
  },
  {
    id: "chess-lobby",
    group: "games",
    question: {
      en: "How do I access Chess & Card games?",
      zh: "如何进入棋牌游戏？",
    },
    answer: {
      en: "Use the Chess & Card Games hub for table literacy and pacing notes, then Login or Register to open rooms on the 1XROLL platform when offered for your account. We do not invent table names that are not verified on this brand site; additional titles may be available after login.",
      zh: "先用棋牌游戏中心页了解桌台识读与节奏说明，再在账户提供时登录或注册于 1XROLL 平台打开房间。我们不编造未在本品牌站核实的桌名；登录后可能还有更多作品。",
    },
  },
  {
    id: "chess-tables",
    group: "games",
    question: {
      en: "Does Chess & Card list every table game?",
      zh: "棋牌会列出所有桌面游戏吗？",
    },
    answer: {
      en: "No. This page explains the category, turn-based pacing, and links related verified experiences (such as Live Casino neighbours) without inventing a full table inventory. Confirm live rooms inside the platform after login.",
      zh: "不会。本页解释分类、回合制节奏，并链接相关已核实体验（如真人赌场邻近页），不编造完整桌台库存。登录后请在平台内确认实时房间。",
    },
  },
  {
    id: "chess-limits",
    group: "games",
    question: {
      en: "Any tips before trying Chess & Card?",
      zh: "尝试棋牌前有什么建议？",
    },
    answer: {
      en: "Learn the rules of the specific table you open on the platform, map seat and confirm controls first, set a budget and clock, and treat multiplayer pace as social entertainment — not a recovery plan. Leave between hands if social pressure starts writing larger stakes.",
      zh: "先了解你在平台打开的具体桌规，优先摸清座位与确认控件，设定预算与时钟，并把多人节奏当作社交娱乐——而不是回本计划。若社交压力开始写出更大注，请在手与手之间离开。",
    },
  },
  {
    id: "lottery-lobby",
    group: "games",
    question: {
      en: "Where can I buy lottery products?",
      zh: "在哪里购买彩票产品？",
    },
    answer: {
      en: "Through the 1XROLL platform after login when lottery products are available for your account. This brand site is an educational hub only — confirm product names, rules, and selection tools in the live client.",
      zh: "在账户可用时，登录后通过 1XROLL 平台。本品牌站仅为教育向中心——请在实时客户端确认产品名称、规则与选择工具。",
    },
  },
  {
    id: "lottery-draws",
    group: "games",
    question: {
      en: "Why are winning numbers not shown here?",
      zh: "为何这里不显示中奖号码？",
    },
    answer: {
      en: "Draw results and jackpot figures must come from live, integrated platform sources. This brand site teaches draw literacy and what to check before participating — it does not invent schedules, probabilities, winning numbers, or results boards.",
      zh: "开奖结果与头奖数字须来自实时、已集成的平台来源。本品牌站教授开奖识读与参与前应检查什么——不编造时间表、概率、中奖号码或开奖看板。",
    },
  },
  {
    id: "lottery-limits",
    group: "games",
    question: {
      en: "How should I approach lottery-style play?",
      zh: "应如何看待彩票类游玩？",
    },
    answer: {
      en: "Treat entries as entertainment spend within a pre-set budget decided before countdown pressure starts. Do not chase misses across draws, avoid stacking entries only to soothe waiting anxiety, and verify product terms on the platform before participating.",
      zh: "把投入当作在倒计时压力开始前就设定好的预算内娱乐支出。不要跨期追逐落空，避免只为安抚等待焦虑而加码，参与前在平台核实产品条款。",
    },
  },
];

export function getFaqByIds(ids: string[]): FaqItem[] {
  const map = new Map(faqItems.map((item) => [item.id, item]));
  return ids
    .map((id) => map.get(id))
    .filter((item): item is FaqItem => Boolean(item));
}

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
