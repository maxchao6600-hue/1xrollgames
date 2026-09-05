import type { FaqItem } from "@/types/content";

/** Original Aether FAQ — educational, no fake bonuses or withdrawal claims */
export const faqItems: FaqItem[] = [
  {
    id: "what-is-aether",
    question: {
      en: "What is Aether and how is it different from a casino lobby?",
      zh: "Aether 是什么，与娱乐场大厅有何不同？",
    },
    answer: {
      en: "Aether is a discovery and editorial hub. We organize games, providers, categories, and guides so you can learn how titles play and how studios differ before you spend attention. We are not a cashier, we do not process deposits, and we do not invent welcome bonuses or payout clocks. Think of us as a map and a reading room: category pages explain lanes like slots or live casino, provider pages describe craft signatures, and guides teach literacy—cascade reading, broadcast timers, mobile boundaries—without hype theater.",
      zh: "Aether 是发现与编辑内容站。我们整理游戏、厂商、品类与攻略，让你在投入注意力之前先了解作品如何玩、工作室如何不同。我们不是收银台，不处理存款，也不编造欢迎奖金或出款时钟。把我们当成地图与阅览室：分类页解释老虎机或真人等车道，厂商页描述工艺签名，攻略教授识读——连消阅读、转播计时、移动边界——不含炒作剧场。",
    },
  },
  {
    id: "game-types",
    question: {
      en: "What game types can I browse on Aether?",
      zh: "在 Aether 可以浏览哪些游戏类型？",
    },
    answer: {
      en: "Four primary lanes: slots (reel and cascade titles), live casino (dealer tables and game shows), fast games (short-round crash, mines, goal-style play), and fishing (arcade aiming rooms). Each category page includes a substantial description of pacing and what to expect structurally. Individual game pages add how-to-play notes and feature lists. We keep the taxonomy stable so links and guides remain useful over time; when we add titles, they still sit inside these four lanes rather than inventing marketing micro-genres every week.",
      zh: "四条主车道：老虎机（转轮与连消）、真人娱乐场（荷官桌与游戏秀）、快速游戏（短回合飞升、扫雷、射门类）、捕鱼（街机瞄准房间）。每个分类页都有关于节奏与结构预期的充实说明。单作页补充如何游玩与特色列表。我们保持分类稳定，以便链接与攻略长期可用；新增作品仍落入这四条车道，而不是每周发明营销微品类。",
    },
  },
  {
    id: "providers-role",
    question: {
      en: "Why do provider pages matter if I only care about games?",
      zh: "如果我只关心游戏，为什么还要看厂商页？",
    },
    answer: {
      en: "Studios repeat design languages. PG Soft leans portrait and touch craft; Pragmatic often speaks in cascades and multipliers; Evolution builds broadcast stages; Spribe compresses decisions into minimal loops. Learning a provider once transfers across its catalogue, so your second and third titles cost less cognitive load. Our provider pages cover specialties, founding context when publicly known, and how many games in Aether’s dataset currently reference that studio—useful for planning a themed evening without assuming the studio’s entire commercial catalogue size.",
      zh: "工作室会重复设计语言。PG Soft 偏竖屏与触控工艺；Pragmatic 常说连消与倍率；Evolution 搭建转播舞台；Spribe 把决策压成极简循环。学会一家厂商，就能迁移到其目录，第二、第三款认知负担更低。我们的厂商页覆盖专长、公开可知的创立背景，以及 Aether 数据集中目前引用该工作室的作品数——方便规划主题夜晚，且不把这当成对方全部商业目录规模。",
    },
  },
  {
    id: "mobile-play",
    question: {
      en: "Does Aether content assume I am playing on mobile?",
      zh: "Aether 的内容是否默认我在手机上游玩？",
    },
    answer: {
      en: "Much of modern discovery is mobile-first, so our editorial notes frequently mention portrait layouts, thumb reach, battery life during live streams, and mis-tap risks near cash-out controls. That does not exclude desktop; it acknowledges where most readers hold the screen. The mobile gaming guide gathers habits—Do Not Disturb during timers, Wi-Fi for video rooms, separate entertainment budgets—while game pages call out when a title is especially portrait-native or broadcast-heavy. Use whichever device keeps your posture and attention healthiest.",
      zh: "现代发现多半手机优先，因此编辑笔记常提到竖屏布局、拇指可达范围、真人流转中的电量，以及兑现键附近的误触风险。这并不排除桌面；它承认多数读者握着的是哪块屏。移动游玩攻略汇总习惯——计时期间勿扰、视频房用 Wi-Fi、娱乐预算分离——而作品页会标出特别原生竖屏或偏转播的作品。用能让姿势与注意力最健康的那台设备即可。",
    },
  },
  {
    id: "how-guides-work",
    question: {
      en: "How should I use Aether guides alongside game pages?",
      zh: "我应如何把 Aether 攻略与游戏页一起使用？",
    },
    answer: {
      en: "Game pages are concise maps: short description, longer structural overview, how-to-play, and feature bullets. Guides are slower classrooms: sectioned articles with reading-time estimates, related titles, and practice plans such as twenty-minute literacy drills. Start with a game page to decide if the fantasy and pacing interest you; open the linked guide when you want drills, comparisons across studios, or responsible framing. Guides never replace official in-client rules panels—always verify symbol roles there before long sessions.",
      zh: "游戏页是简明地图：短描述、较长结构概览、如何游玩与特色要点。攻略是更慢的教室：分节文章、预估阅读时间、相关作品，以及二十分钟识读训练等练习计划。先用游戏页判断幻想与节奏是否吸引你；当你想要练习、跨工作室比较或负责任框架时，打开链接的攻略。攻略从不取代客户端内官方规则面板——长会话前务必在那里核实符号角色。",
    },
  },
  {
    id: "library-updates",
    question: {
      en: "How does Aether update its game and provider library?",
      zh: "Aether 如何更新游戏与厂商书库？",
    },
    answer: {
      en: "Editorial updates land when we add titles, refresh descriptions, or correct structural notes. Each guide shows published and updated timestamps; game and provider copy is revised when craft details need clarity—not when a rumor cycle demands new buzzwords. We keep provider gameCount aligned with the number of titles in our dataset that reference that slug, so the number is a catalogue consistency check, not a claim about a studio’s global release volume. Check the games index filters after major updates to see newly tagged status badges such as new, hot, or featured.",
      zh: "当我们新增作品、刷新描述或修正结构笔记时，会进行编辑更新。每篇攻略显示发布与更新日期；游戏与厂商文案在工艺细节需要更清晰时修订——而不是在谣言周期要求新buzzword时。我们让厂商的 gameCount 与数据集中引用该 slug 的作品数对齐，因此该数字是目录一致性检查，而非对工作室全球发行量的宣称。重大更新后可在游戏索引筛选中查看 newly 标记的 new、hot 或 featured 状态。",
    },
  },
  {
    id: "identify-providers",
    question: {
      en: "How can I tell which provider made a game?",
      zh: "如何判断一款游戏由哪家厂商制作？",
    },
    answer: {
      en: "On Aether, every game page lists a providerSlug that links to the studio profile. In clients outside our site, look for studio logos on loading screens, watermarks in rules panels, and about/info drawers. Visual tells help too: portrait festive animals often hint PG Soft craft; cascade multiplier stamps often hint Pragmatic dialect; multi-camera hosts hint Evolution; minimal crash curves hint Spribe. Still, tells can mislead—always confirm via the credited studio name rather than theme alone. Our providers index is the fastest internal cross-check.",
      zh: "在 Aether，每个游戏页都列出链向工作室资料的 providerSlug。在站外客户端，留意加载屏工作室标志、规则面板水印与关于/信息抽屉。视觉线索也有帮助：竖屏节庆动物常提示 PG Soft 工艺；连消倍率印记常提示 Pragmatic 方言；多机位主持提示 Evolution；极简飞升曲线提示 Spribe。不过线索可能误导——务必以署名工作室名为准，而非仅凭主题。我们的厂商索引是最快的站内交叉核对。",
    },
  },
  {
    id: "rtp-policy",
    question: {
      en: "Why don’t Aether pages show RTP percentages?",
      zh: "为什么 Aether 页面不显示返还率百分比？",
    },
    answer: {
      en: "Because unverified percentages become decoration that readers mistake for guarantees. RTP, in principle, is a long-run statistical concept tied to specific builds and rule sheets—not a promise about your next hour. If we cannot responsibly cite a trustworthy public source for a given build, we omit the field rather than invent one. Read our education guide on RTP and volatility for a fuller framing, and treat unaudited stickers on other sites with skepticism until provenance is clear.",
      zh: "因为未经核实的百分比会变成装饰，被读者误当成保证。原则上，返还率是绑定具体版本与规则表的长期统计概念——不是对你下一小时的承诺。若无法为给定版本负责任地引用可信公开来源，我们宁可省略字段也不编造。请阅读我们关于返还率与波动的科普攻略以获得更完整框架，并对其他站点上来源不清的贴纸保持怀疑，直到出处明确。",
    },
  },
  {
    id: "volatility-feel",
    question: {
      en: "What does “volatility” mean in Aether’s writing?",
      zh: "Aether 文中的「波动」是什么意思？",
    },
    answer: {
      en: "We use volatility carefully, usually as a vernacular feeling word—spiky versus smooth sessions—while preferring structural descriptions: persistent feature maps, crash curves, cascade multiplier stamps, hold-and-win extensions. We avoid pasting high/medium/low labels without methodology. If you see volatility discussed in a guide, read it as an invitation to match pacing to your attention budget, not as a certified lab grade. Pair that mindset with time boxes so spiky entertainment stays entertainment.",
      zh: "我们谨慎使用波动，通常作为口语化的感觉词——尖刺 vs 平滑会话——同时更偏好结构描述：持续特色地图、飞升曲线、连消倍率印记、锁定派彩延长。我们避免在没有方法的情况下粘贴高/中/低标签。若攻略谈到波动，请把它当成把节奏匹配到注意力预算的邀请，而非认证实验室等级。把这心态与时间盒配对，让尖刺娱乐仍是娱乐。",
    },
  },
  {
    id: "live-casino-start",
    question: {
      en: "I am new to live casino—where should I start on Aether?",
      zh: "我是真人娱乐场新手——在 Aether 应从哪里开始？",
    },
    answer: {
      en: "Begin with the live casino category page, then the live-casino-basics guide. Watch the betting window concept before you care about bonus names. Lightning Roulette is a gentle bridge if you already know wheel basics; Crazy Time demands more overlay literacy; Monopoly Live asks for longer attention arcs. Read Evolution’s provider page to understand broadcast craft, then open a single title article and observe two rounds elsewhere with zero stake if you can. Learn the timer, then learn the spectacle—not the other way around.",
      zh: "从真人娱乐场分类页开始，然后读 live-casino-basics 攻略。在关心奖励名称之前先弄清投注窗概念。若已懂轮盘基础，Lightning Roulette 是温和桥接；Crazy Time 需要更多叠加层识读；Monopoly Live 要求更长注意力弧。阅读 Evolution 厂商页理解转播工艺，再打开单作文，并尽可能在别处零注观察两局。先学计时，再学奇观——顺序不要反。",
    },
  },
  {
    id: "responsible-gaming",
    question: {
      en: "How does Aether talk about responsible gaming?",
      zh: "Aether 如何谈论负责任游戏？",
    },
    answer: {
      en: "We treat responsible play as part of literacy, not a footer slogan. Guides include time boxes, attention fatigue notes, and reminders that festive art is design rather than advice. We do not sugarcoat with fake “safe bonus” narratives. Use preset clocks, separate entertainment budgets, and stop while you can still explain what the last feature did. Visit our responsible gaming page for principles, and leave any session that shifts from curiosity into compulsion. Discovery should make you wiser, not narrower.",
      zh: "我们把负责任游玩当作识读的一部分，而非页脚口号。攻略包含时间盒、注意力疲劳笔记，以及节庆美术是设计而非建议的提醒。我们不用虚假「安全奖金」叙事打糖衣。使用预设时钟、分离娱乐预算，并在仍能解释上一次特色时停止。到负责任游戏页查看原则；一旦会话从好奇滑向强迫，就离开。发现应让你更智慧，而非更狭窄。",
    },
  },
  {
    id: "languages",
    question: {
      en: "Is Aether available in English and Chinese?",
      zh: "Aether 是否提供英文与中文？",
    },
    answer: {
      en: "Yes. The site ships with English and Chinese locales. Navigation, UI chrome, and editorial fields carry both languages. Chinese copy is written to read naturally rather than as a literal mirror of English sentence order. Use the locale switcher in the header to move between languages while staying on the same logical page. If a string ever feels off, contact contact@aether.games—editorial quality in both languages is part of the product, not an afterthought.",
      zh: "是的。站点提供英文与中文语言环境。导航、界面框架与编辑字段均含双语。中文文案按自然阅读书写，而非英文语序的字面镜像。使用页头语言切换在同一逻辑页面间移动。若某句读起来不顺，请联系 contact@aether.games——双语编辑质量是产品的一部分，而非事后补丁。",
    },
  },
];
