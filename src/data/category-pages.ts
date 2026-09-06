import type {
  CategoryId,
  ContentBlock,
  LocalizedString,
} from "@/types/content";

export type CategoryPageContent = {
  id: CategoryId;
  pageTitle: LocalizedString;
  intro: LocalizedString;
  sections: ContentBlock[];
  relatedCategoryIds: CategoryId[];
  relatedHrefs: { href: string; label: LocalizedString }[];
  faqIds: string[];
};

export const categoryPages: CategoryPageContent[] = [
  {
    id: "slots",
    pageTitle: {
      en: "Slots on 1XROLL",
      zh: "1XROLL 老虎机",
    },
    intro: {
      en: "Slots are the widest discovery surface in our verified catalogue: thirty-two titles spanning festive portrait games, cascade grids, hold-and-win meters, and classic line-pay loops. This page teaches how to browse, compare studios, and read mechanics notes — without inventing RTP percentages or jackpot schedules.",
      zh: "老虎机是本站已核实目录中最广阔的发现面：三十二款作品覆盖节庆竖屏、消除网格、锁定持有计量表与经典线赔循环。本页教你如何浏览、比较工作室并阅读机制说明——不编造返还率或头奖时间表。",
    },
    sections: [
      {
        type: "h2",
        text: { en: "What are slot games?", zh: "什么是老虎机游戏？" },
      },
      {
        type: "p",
        text: {
          en: "A slot round is a short, self-contained spin: you choose a stake, the reels or grid resolve, and the client shows whether base symbols, wilds, or a feature chapter took over. Themes range from candy cascades to cultural festivals to adventure temples, but the underlying job is the same — deliver a readable loop you can leave after one spin or continue with intention.",
          zh: "一局老虎机是短而自洽的旋转：你选定注额，转轮或网格结算，客户端显示基础符号、百搭或特色篇章是否接管。主题从糖果消除到文化节庆再到冒险神庙，底层任务却一致——提供可读循环，让你转一局就停，或有意识地继续。",
        },
      },
      {
        type: "p",
        text: {
          en: "Modern video slots often add free-spin modes, tumbling boards, collectible meters, or hold sequences. Those layers change pacing, not the fact that outcomes are chance-driven. Treat feature language as stage direction: learn what the animation is telling you, then decide whether that tempo fits your session plan.",
          zh: "现代视频老虎机常加入免费旋转、下落盘面、收集计量表或锁定序列。这些层次改变节奏，不改变结果由机会驱动的事实。把特色语汇当作舞台指示：学会动画在说什么，再判断该节奏是否符合你的会话计划。",
        },
      },
      {
        type: "h2",
        text: { en: "Exploring slots on 1XROLL", zh: "在 1XROLL 探索老虎机" },
      },
      {
        type: "p",
        text: {
          en: "On this brand site, slots live as a catalogue lane with detail pages for each listed title. You can filter by studio, open a game for mechanics notes and how-to-play copy, then jump to a provider profile or an education guide. Actual spins happen after you open the 1XROLL platform — the site stays informational so discovery stays honest.",
          zh: "在本品牌站，老虎机作为目录通道存在，每款已列作品都有详情页。你可以按工作室筛选、打开作品阅读机制说明与玩法文案，再跳到厂商档案或教育向攻略。实际旋转在打开 1XROLL 平台后进行——站点保持信息向，让发现保持诚实。",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Browse the slots shelf for theme and pacing cues",
            "Open title pages for features lists and session-oriented notes",
            "Use provider pages when studio craft matters more than a single theme",
            "Return to guides when you want slower walkthroughs of board reading",
          ],
          zh: [
            "浏览老虎机架，留意主题与节奏线索",
            "打开作品页查看特色列表与会话向说明",
            "当工作室工艺比单一主题更重要时，使用厂商页",
            "需要更慢的读盘讲解时，回到攻略",
          ],
        },
      },
      {
        type: "h2",
        text: { en: "Featured discovery paths", zh: "精选发现路径" },
      },
      {
        type: "p",
        text: {
          en: "If you like festive portrait energy, start with Fortune Tiger or Fortune Ox and notice how PG Soft stages symbols for one-handed play. Prefer cascade-and-multiplier drama? Gates of Olympus, Sweet Bonanza, and Starlight Princess teach that vocabulary quickly. Hold-and-win clarity shows up in titles such as Energy Coins: Holding and Winning or Buffalo Power. None of these paths invent rarity schedules — they are literacy routes through the thirty-two-title shelf.",
          zh: "若喜欢节庆竖屏能量，可从 Fortune Tiger 或 Fortune Ox 开始，观察 PG Soft 如何为单手游玩编排符号。偏好消除与倍率戏剧？Gates of Olympus、Sweet Bonanza 与 Starlight Princess 能很快教会那套语汇。锁定持有的清晰感可见于 Energy Coins: Holding and Winning 或 Buffalo Power 等作品。这些路径都不编造稀有度时间表——它们是穿过三十二款架的识读路线。",
        },
      },
      {
        type: "h2",
        text: { en: "Gameplay basics that transfer", zh: "可迁移的玩法基础" },
      },
      {
        type: "p",
        text: {
          en: "Before chasing every bonus cue, learn the shared controls: stake steps, spin versus autoplay, and where the rules panel lives. Autoplay can shorten the pause between decisions; use it only when you already understand what a feature looks like when it starts. If a free-game chapter extends, your clock still matters — pause autoplay before fatigue sets in.",
          zh: "在追逐每一个奖励提示之前，先学会共用控件：注额档位、手动旋转与自动旋转，以及规则面板在哪里。自动旋转会缩短决策间隙；只有在你已能辨认特色开始长什么样时再用。若免费游戏篇章延长，你的时钟仍然重要——疲劳前暂停自动旋转。",
        },
      },
      {
        type: "p",
        text: {
          en: "Board-reading habits transfer across studios. Cascade titles ask you to watch cleared cells and multiplier marks; line-pay titles ask you to track wilds and scatter counts; hold modes ask you to notice locked positions and remaining spins. Once you can name those jobs out loud, jumping between Mahjong Ways 2, Money Train 2, and Temple Tumble feels less like starting from zero.",
          zh: "读盘习惯可跨工作室迁移。消除类要你盯清已清空格与倍率标记；线赔类要你追踪百搭与散射计数；锁定模式要你注意锁定位置与剩余旋转。一旦能把这些任务说出口，在 Mahjong Ways 2、Money Train 2 与 Temple Tumble 之间跳转就不像从零开始。",
        },
      },
      {
        type: "h2",
        text: {
          en: "RTP education without invented numbers",
          zh: "不编造数字的 RTP 教育",
        },
      },
      {
        type: "p",
        text: {
          en: "Return to player (RTP) is a long-run design concept for a math model across enormous samples — not a forecast for your next twenty spins. Short sessions swing. Treating a cold streak as proof that “RTP is broken,” or a hot streak as proof of an edge, misunderstands statistics in opposite directions.",
          zh: "玩家返还率（RTP）是超大样本量下数学模型的长期设计概念——不是你接下来二十转的预报。短会话会摆动。把冷手当成「RTP 坏了」的证据，或把热手当成优势证据，是相反方向的统计误解。",
        },
      },
      {
        type: "p",
        text: {
          en: "On 1XROLL we only attach a numeric RTP when a value is verified in our dataset. Missing numbers are intentional caution, not a puzzle. Prefer primary rules text over screenshot lore, and ignore anyone selling timing systems or “RTP hacks.” For a deeper walkthrough, open the Understanding RTP and Volatility guide.",
          zh: "在 1XROLL，仅当数据集有核实值时才挂上数值 RTP。缺失数字是故意的谨慎，不是谜题。优先看一手规则说明而非截图传说，并忽略贩卖时机系统或「RTP 黑客」的人。若要更深入，请打开《理解 RTP 与波动性》攻略。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Volatility as pacing preference",
          zh: "把波动性当作节奏偏好",
        },
      },
      {
        type: "p",
        text: {
          en: "Volatility (variance) describes how bumpy a ride can feel along the way: quieter base play with rarer feature peaks, or busier small outcomes with different emotional texture. It is a preference about session shape, not a treasure map. We do not invent per-title volatility badges here; we talk about feel — feature density, cascade length, hold-mode tension — so you can choose tempo deliberately.",
          zh: "波动性（方差）描述过程中颠簸感可能有多强：更安静的基础盘配更少见的特色高峰，或更频繁的小结果配不同情绪质地。它是关于会话形状的偏好，不是藏宝图。我们不在此编造每款作品的波动徽章；我们谈手感——特色密度、消除长度、锁定模式张力——好让你有意识地选择节奏。",
        },
      },
      {
        type: "h2",
        text: { en: "Beginner-friendly starting habits", zh: "新手友好的起步习惯" },
      },
      {
        type: "ul",
        items: {
          en: [
            "Pick one literacy family first (cascade, portrait cluster, or hold-and-win)",
            "Read the how-to-play block before enabling autoplay",
            "Watch a few rounds at a comfortable stake size so you can see feature cues",
            "Cap session length before the first spin, not after a near-miss feeling",
            "Switch titles when UI fatigue rises — loyalty is not a reason to squint",
          ],
          zh: [
            "先选一个识读家族（消除、竖屏集群或锁定持有）",
            "启用自动旋转前先读玩法说明",
            "用舒适注额看几局，好辨认特色提示",
            "在第一转之前设会话上限，而不是在差一点之后",
            "界面疲劳时换作品——忠诚不是眯眼硬撑的理由",
          ],
        },
      },
      {
        type: "h2",
        text: { en: "Mobile sessions and thumb ergonomics", zh: "移动会话与拇指人机" },
      },
      {
        type: "p",
        text: {
          en: "Many catalogue slots are authored for phones: bold symbols, reachable spin controls, and portrait layouts that keep stake and spin within a thumb’s arc. Still, network lag and small text can spoil a session. If a title fights your screen, switch games or defer play. Pair discovery with the Mobile Gaming guide when you want a checklist for readability and honest exit habits.",
          zh: "许多目录老虎机为手机而生：符号对比强、旋转控件可达，竖屏布局把注额与旋转放在拇指弧内。即便如此，网络延迟与过小文字仍会毁掉一局。若某作与屏幕较劲，换游戏或延后游玩。需要可读性与诚实离场清单时，搭配《移动游戏攻略》。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Studios you will meet on the slots shelf",
          zh: "老虎机架上会遇到的工作室",
        },
      },
      {
        type: "p",
        text: {
          en: "Eight verified studios appear across the 1XROLL catalogue: Pragmatic Play, PG Soft, Evolution, Spribe, Jili, Endorphina, Relax Gaming, and Playson. On the slots lane you will mostly meet Pragmatic’s cascade and series language, PG Soft’s portrait craft, Jili’s arcade-forward clarity, Endorphina’s illustration mood, Relax Gaming’s structural puzzle feel, and Playson’s hold-and-meter readability. Evolution and Spribe matter more on live and short-round shelves, yet they remain part of the same provider index so you can compare craft across the whole site.",
          zh: "1XROLL 目录中有八家已核实工作室：Pragmatic Play、PG Soft、Evolution、Spribe、Jili、Endorphina、Relax Gaming 与 Playson。在老虎机通道，你主要会遇到 Pragmatic 的消除与系列语汇、PG Soft 的竖屏工艺、Jili 偏街机的清晰、Endorphina 的插画情绪、Relax Gaming 的结构解谜感，以及 Playson 锁定与计量表的可读性。Evolution 与 Spribe 更多出现在真人与短回合架上，但同属厂商索引，便于你在全站比较工艺。",
        },
      },
      {
        type: "p",
        text: {
          en: "We name studios to orient taste — not to invent per-studio release counts beyond the titles we document. Use the providers index when you care more about craft signatures than a single theme.",
          zh: "我们点名工作室是为了定位口味——不是在已收录作品之外编造各厂发行量。当你更在意工艺签名而非单一主题时，请用厂商索引。",
        },
      },
      {
        type: "h2",
        text: { en: "FAQ themes for slots readers", zh: "老虎机读者常见问题主题" },
      },
      {
        type: "p",
        text: {
          en: "Expect FAQ entries such as what slots are on this site, how we talk about RTP without fabricating figures, and how catalogue updates work. Those answers sit in the FAQ hub so category pages stay focused on discovery and literacy.",
          zh: "可预期如本站老虎机是什么、我们如何在不编造数字的情况下谈 RTP、以及目录如何更新等常见问题。答案放在 FAQ 中心，好让分类页专注发现与识读。",
        },
      },
      {
        type: "h2",
        text: { en: "Where to go next", zh: "接下来去哪里" },
      },
      {
        type: "p",
        text: {
          en: "From here, open individual slot pages, compare studio profiles, or switch to live, crypto, or fishing lanes when you want a different tempo. Keep Responsible Gaming nearby whenever sessions stretch.",
          zh: "从这里打开单款老虎机页、比较工作室档案，或在想换节奏时切到真人、加密或捕鱼通道。会话拉长时，请把理性游戏放在手边。",
        },
      },
    ],
    relatedCategoryIds: ["live-casino", "fishing", "crypto-games", "fast-games"],
    relatedHrefs: [
      { href: "/games", label: { en: "Games hub", zh: "游戏中心" } },
      {
        href: "/guides/understanding-rtp-volatility",
        label: {
          en: "RTP & volatility guide",
          zh: "RTP 与波动性攻略",
        },
      },
      {
        href: "/guides/fortune-tiger-guide",
        label: { en: "Fortune Tiger guide", zh: "招财虎攻略" },
      },
      {
        href: "/guides/mobile-gaming-guide",
        label: { en: "Mobile gaming guide", zh: "移动游戏攻略" },
      },
      { href: "/providers", label: { en: "Providers", zh: "厂商" } },
      { href: "/fair-play", label: { en: "Fair Play", zh: "公平游戏" } },
      {
        href: "/responsible-gaming",
        label: { en: "Responsible Gaming", zh: "理性游戏" },
      },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
    ],
    faqIds: ["slots-what", "slots-rtp", "slots-volatility", "slots-mobile"],
  },
  {
    id: "live-casino",
    pageTitle: {
      en: "Live Casino on 1XROLL",
      zh: "1XROLL 真人赌场",
    },
    intro: {
      en: "Live casino blends classic table structures with studio production: real dealers, timed betting windows, and camera direction that can feel like a broadcast. Our verified catalogue lists six titles — Crazy Time, Lightning Roulette, Bac Bo, Speed Baccarat B, Super Sic Bo, and Monopoly Live — described as catalogue entries, not as invented odds boards.",
      zh: "真人赌场把经典桌台结构与工作室制作结合：真人荷官、限时投注窗，以及像转播一样的镜头调度。已核实目录列出六款作品——Crazy Time、Lightning Roulette、Bac Bo、Speed Baccarat B、Super Sic Bo 与 Monopoly Live——作为目录条目说明，而非虚构赔率看板。",
    },
    sections: [
      {
        type: "h2",
        text: {
          en: "The dealer-led experience",
          zh: "荷官主导的体验",
        },
      },
      {
        type: "p",
        text: {
          en: "Presence is the signature of live tables. A host greets the room, clears bets on a clock, and resolves outcomes in physical space you can watch. That presence is engaging; it can also make limits harder to notice. Treat the dealer as a pace-setter, not as a luck signal, and decide your session length before the first betting window opens.",
          zh: "在场感是真人桌的签名。主持人向房间问好、按时钟清注，并在你可观看的物理空间里结算。这种在场感很吸引人，也可能让限额更难察觉。把荷官当作节奏设定者而非运气信号，并在第一个投注窗打开前决定会话时长。",
        },
      },
      {
        type: "h2",
        text: { en: "Table and show basics", zh: "桌台与秀场基础" },
      },
      {
        type: "p",
        text: {
          en: "Classic card and dice loops — baccarat-style roads, roulette wheels, sic bo grids — sit beside game-show formats with bonus wheels and named side chapters. The shared grammar is the betting window: place, confirm, wait for resolution, then choose whether to stay. Side bets add color; they are optional, not obligatory quests.",
          zh: "经典牌骰循环——百家乐式路单、轮盘、骰宝网格——与带奖励转轮和具名边章的游戏秀并列。共用语法是投注窗：下注、确认、等待结算，再决定是否留下。边注增添色彩；它们是可选项，不是必做任务。",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Learn where the timer lives before you increase stake size",
            "Watch one full round without betting when a UI feels busy",
            "Pick at most one secondary interest per round while learning",
            "Exit between rounds — not mid-window under time pressure",
          ],
          zh: [
            "加大注额前先弄清计时器在哪里",
            "界面显得拥挤时，先不下注看完整一局",
            "学习阶段每局最多选一个次要兴趣",
            "在局与局之间离场——不要在时限压力下的投注窗中途离开",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "Verified catalogue titles",
          zh: "已核实目录作品",
        },
      },
      {
        type: "p",
        text: {
          en: "Crazy Time centers a main wheel and named bonus games with dense top-bar UI. Lightning Roulette layers electrified multipliers onto a roulette frame. Bac Bo and Speed Baccarat B keep card cadence front and center — one with a distinct brand framing, the other emphasizing faster round turnover. Super Sic Bo brings dice-grid energy; Monopoly Live stages board-game theatrics inside a live show shell. We describe presentation and pacing only — never fabricated player counts or payout calendars.",
          zh: "Crazy Time 以主转轮与具名奖励游戏为中心，顶栏界面信息密集。Lightning Roulette 在轮盘框架上叠加通电倍率。Bac Bo 与 Speed Baccarat B 把牌局节奏放在核心——一个有鲜明品牌包装，另一个强调更快周转。Super Sic Bo 带来骰宝网格能量；Monopoly Live 在真人秀外壳里呈现桌游剧场。我们只描述呈现与节奏——从不编造玩家数或出款日历。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Reading the studio stage",
          zh: "阅读工作室舞台",
        },
      },
      {
        type: "p",
        text: {
          en: "Evolution-style production uses cameras, lighting, and host scripting to make outcomes legible on small screens. Learn the strip layout: main bet area, side options, and history rails. When the show feels chaotic, that is usually UI density — not a hint to chase every top slot. Slow down until you can name what each control does.",
          zh: "Evolution 式制作用镜头、灯光与主持人脚本，让结果在小屏上可读。学会顶栏布局：主注区、边注选项与历史栏。当秀场显得混乱时，通常是界面密度——不是追每一个顶部格子的暗示。放慢速度，直到你能说出每个控件做什么。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Live casino versus slots pacing",
          zh: "真人相对老虎机的节奏",
        },
      },
      {
        type: "p",
        text: {
          en: "Slots let you compress decisions into a single spin button. Live tables insert social and temporal structure: you wait with the room. That wait can feel calmer or more pressuring depending on your habits. If continuous broadcast energy keeps you longer than planned, switch to a catalogue slot or take a break entirely.",
          zh: "老虎机把决策压进一个旋转按钮。真人桌插入社交与时间结构：你与房间一起等待。这等待可能更平静，也可能更有压力，取决于习惯。若连续转播能量让你待得比计划更久，切回目录老虎机或彻底休息。",
        },
      },
      {
        type: "h2",
        text: { en: "Mobile viewing habits", zh: "移动端观看习惯" },
      },
      {
        type: "p",
        text: {
          en: "Landscape frames and portrait crops both appear in live clients. Prioritize readable chips, reachable confirm buttons, and honest network conditions. Lag near the end of a betting window is a reason to sit out a round, not to mash larger stakes. The Live Casino Basics guide walks through observation practice without inventing odds shortcuts.",
          zh: "真人客户端会出现横屏画面与竖屏裁切。优先保证筹码可读、确认按钮可达，以及诚实的网络状况。投注窗尾声的延迟是坐下一局的理由，不是猛加注的理由。《真人娱乐场基础》攻略讲解观察练习，不编造赔率捷径。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Responsible limits for hosted tables",
          zh: "主持桌台的理性限额",
        },
      },
      {
        type: "p",
        text: {
          en: "Hosts and music make sessions feel shorter than they are. Set a round count or a clock before you join. If a bonus wheel chapter extends the emotional arc, that is entertainment design — not a debt you owe the table. Responsible Gaming remains the reset page whenever presence outruns intention.",
          zh: "主持与音乐会让会话感觉比实际更短。加入前先设局数或时钟。若奖励转轮篇章拉长情绪弧线，那是娱乐设计——不是你欠桌台的债。每当在场感超过意图，理性游戏仍是重置页。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Fair Play context for live rooms",
          zh: "真人房间的公平游戏上下文",
        },
      },
      {
        type: "p",
        text: {
          en: "Fair Play on this site explains how we talk about transparency and integrity concepts without overclaiming. Live outcomes resolve in studio space you can watch; that visibility is not a substitute for personal limits or for reading platform rules after login.",
          zh: "本站公平游戏页说明我们如何谈论透明度与诚信概念而不过度宣称。真人结果在你可观看的工作室空间结算；这种可见性不能替代个人限额，也不能替代登录后阅读平台规则。",
        },
      },
      {
        type: "h2",
        text: { en: "Related discovery", zh: "相关发现" },
      },
      {
        type: "p",
        text: {
          en: "When you want quieter loops, browse slots or crypto short rounds. Chess & Card and Sports hubs orient platform lanes without local inventories. Keep FAQ nearby for live-specific questions such as what live casino means on 1XROLL.",
          zh: "想要更安静的循环时，浏览老虎机或加密短回合。棋牌与体育中心导览平台通道，不含本地库存。把 FAQ 放在手边，解答如 1XROLL 上真人赌场意味什么等具体问题。",
        },
      },
    ],
    relatedCategoryIds: ["slots", "chess-card", "sports", "hash-roulette"],
    relatedHrefs: [
      { href: "/games", label: { en: "Games hub", zh: "游戏中心" } },
      {
        href: "/guides/live-casino-basics",
        label: { en: "Live Casino Basics", zh: "真人娱乐场基础" },
      },
      {
        href: "/guides/mobile-gaming-guide",
        label: { en: "Mobile gaming guide", zh: "移动游戏攻略" },
      },
      {
        href: "/providers/evolution",
        label: { en: "Evolution studio", zh: "Evolution 工作室" },
      },
      { href: "/fair-play", label: { en: "Fair Play", zh: "公平游戏" } },
      {
        href: "/responsible-gaming",
        label: { en: "Responsible Gaming", zh: "理性游戏" },
      },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
    ],
    faqIds: ["live-what", "live-tables", "live-mobile", "live-limits"],
  },
  {
    id: "hash-roulette",
    pageTitle: {
      en: "Hash Roulette orientation",
      zh: "哈希轮盘导览",
    },
    intro: {
      en: "Hash Roulette is a platform lobby lane on 1XROLL: roulette-shaped entertainment framed with hash-style transparency language. This brand page orients you and connects Fair Play — it does not invent a local title inventory, on-chain guarantees, or fabricated wheel results.",
      zh: "哈希轮盘是 1XROLL 上的平台大厅通道：以哈希式透明语汇包装的轮盘形娱乐。本品牌页为你导览并连接公平游戏——不虚构本地作品库存、链上保证或编造转轮结果。",
    },
    sections: [
      {
        type: "h2",
        text: {
          en: "What this hub is for",
          zh: "本中心用于什么",
        },
      },
      {
        type: "p",
        text: {
          en: "Use this page to understand how Hash Roulette sits beside live roulette shows and other hash formats. Orientation means vocabulary, access paths, and responsible pacing — not a scraped list of lobby tiles that would go stale the moment the platform updates.",
          zh: "用本页理解哈希轮盘如何与真人轮盘秀及其他哈希格式并列。导览意味着语汇、入口路径与理性节奏——不是一份平台一更新就过期的大厅瓷砖抓取清单。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Hash language versus marketing theater",
          zh: "哈希语汇相对营销剧场",
        },
      },
      {
        type: "p",
        text: {
          en: "Hash-oriented products often emphasize verifiable round artifacts or seed concepts. On this site we explain those ideas carefully and refuse to invent cryptographic proofs or “provably fair” badges we cannot substantiate. Read Fair Play for how 1XROLL frames transparency talk.",
          zh: "偏哈希的产品常强调可核验的回合产物或种子概念。本站谨慎解释这些想法，拒绝编造无法证实的密码学证明或「可证明公平」徽章。请阅读公平游戏，了解 1XROLL 如何框定透明度表述。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Roulette shape, different delivery",
          zh: "轮盘外形，不同交付",
        },
      },
      {
        type: "p",
        text: {
          en: "Expect number grids, color selections, and short resolution loops familiar from roulette literacy — delivered through the platform client rather than as Evolution catalogue pages on this brand site. If you want dealer-hosted wheels with broadcast production, open Live Casino catalogue titles such as Lightning Roulette instead.",
          zh: "可预期与轮盘识读相似的数字格、颜色选择与短结算循环——通过平台客户端交付，而非本品牌站上的 Evolution 目录页。若想要带转播制作的荷官轮盘，请打开真人赌场目录中的 Lightning Roulette 等作品。",
        },
      },
      {
        type: "h2",
        text: {
          en: "How platform access works",
          zh: "平台入口如何运作",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Read this hub for category orientation and related links",
            "Use Register, Login, or Open platform to reach the live lobby",
            "Confirm current presentation and rules inside the platform after login",
          ],
          zh: [
            "阅读本中心获取分类导览与相关链接",
            "使用注册、登录或打开平台进入实时大厅",
            "登录后在平台内确认当前呈现与规则",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "Sitting beside Hash Games",
          zh: "与哈希游戏并列",
        },
      },
      {
        type: "p",
        text: {
          en: "Hash Roulette focuses the wheel metaphor; Hash Games covers a broader set of short hash-inspired formats. Both are hub pages here. Jump between them when you are comparing transparency-oriented lanes, then open the platform for whatever the lobby currently offers.",
          zh: "哈希轮盘聚焦转轮隐喻；哈希游戏覆盖更广的短哈希灵感格式。二者在本站都是中心页。比较偏透明通道时在其间跳转，再打开平台查看大厅当前提供什么。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Session design for quick wheels",
          zh: "快速转轮的会话设计",
        },
      },
      {
        type: "p",
        text: {
          en: "Short resolution loops invite rapid re-entry. Decide stake steps and a hard stop before the first round. Near-miss feelings on a number grid are entertainment texture, not a schedule you must chase.",
          zh: "短结算循环容易促使快速再进入。第一局前先定注额档位与硬停止点。数字格上的差一点是娱乐质地，不是你必须追逐的时间表。",
        },
      },
      {
        type: "h2",
        text: {
          en: "What we never publish here",
          zh: "我们从不在此发布什么",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "No invented lobby title lists or fake “hot numbers”",
            "No fabricated hash proofs or seed walkthroughs for specific rounds",
            "No odds tables pretending to be live platform data",
          ],
          zh: [
            "不编造大厅作品清单或虚假「热门号码」",
            "不为特定回合编造哈希证明或种子演示",
            "不做假装实时平台数据的赔率表",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "Responsible Gaming reminder",
          zh: "理性游戏提醒",
        },
      },
      {
        type: "p",
        text: {
          en: "Transparency language never replaces personal limits. If hash framing makes risk feel more “technical” and therefore safer, pause and reread Responsible Gaming before you continue.",
          zh: "透明度表述不能替代个人限额。若哈希包装让风险感觉更「技术」因而更安全，请先暂停并重读理性游戏再继续。",
        },
      },
      {
        type: "h2",
        text: { en: "Useful next steps", zh: "有用的下一步" },
      },
      {
        type: "p",
        text: {
          en: "Compare Live Casino for hosted wheels, Hash Games for neighboring formats, and Fair Play for editorial boundaries. FAQ entries under hash-oriented ids will expand the same honesty rules.",
          zh: "比较真人赌场以了解主持轮盘、哈希游戏以了解相邻格式，以及公平游戏以了解编辑边界。哈希相关 FAQ 条目会延续同样的诚实规则。",
        },
      },
    ],
    relatedCategoryIds: ["hash-games", "live-casino", "crypto-games", "lottery"],
    relatedHrefs: [
      {
        href: "/games/hash-games",
        label: { en: "Hash Games", zh: "哈希游戏" },
      },
      {
        href: "/games/live-casino",
        label: { en: "Live Casino", zh: "真人赌场" },
      },
      { href: "/fair-play", label: { en: "Fair Play", zh: "公平游戏" } },
      {
        href: "/responsible-gaming",
        label: { en: "Responsible Gaming", zh: "理性游戏" },
      },
      { href: "/games", label: { en: "Games hub", zh: "游戏中心" } },
      { href: "/guides", label: { en: "Guides", zh: "攻略" } },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
    ],
    faqIds: ["hash-what", "hash-roulette-lobby", "hash-fair", "hash-limits"],
  },
  {
    id: "hash-games",
    pageTitle: {
      en: "Hash Games orientation",
      zh: "哈希游戏导览",
    },
    intro: {
      en: "Hash Games are short, blockchain-inspired entertainment formats available in the 1XROLL platform lobby. This hub teaches category literacy and links Fair Play — without inventing detail pages, seed ledgers, or a fake local catalogue.",
      zh: "哈希游戏是 1XROLL 平台大厅中偏区块链灵感的短格式娱乐。本中心教授分类识读并链接公平游戏——不虚构详情页、种子账本或假本地目录。",
    },
    sections: [
      {
        type: "h2",
        text: {
          en: "Category overview",
          zh: "分类概览",
        },
      },
      {
        type: "p",
        text: {
          en: "Expect compact decision loops and UI that often sits near crypto and fast lanes in spirit: quick stakes, quick resolves, and language that gestures at verifiability. Exact lobby tiles change on the platform; this site stays educational so we never freeze a stale inventory into SEO pages.",
          zh: "可预期紧凑决策循环，以及精神上常靠近加密与快速通道的界面：快下注、快结算，并用语指向可核验性。确切大厅瓷砖以平台为准；本站保持教育向，绝不为 SEO 把过期库存冻成页面。",
        },
      },
      {
        type: "h2",
        text: {
          en: "How this brand site treats hash titles",
          zh: "本品牌站如何对待哈希作品",
        },
      },
      {
        type: "p",
        text: {
          en: "We publish orientation, related ecosystem links, and access CTAs. We do not fabricate game cards, RTP fields, or “provable” screenshots. When you need a tangible catalogue of short rounds, use Crypto Games (Aviator, Mines, Plinko, Goal) or Fast Games (Crash, Chicken Road) — those are verified local rows.",
          zh: "我们发布导览、相关生态链接与入口 CTA。不编造游戏卡片、RTP 字段或「可证明」截图。当你需要可触摸的短回合目录时，请用加密游戏（Aviator、Mines、Plinko、Goal）或快速游戏（Crash、Chicken Road）——那些是已核实的本地条目。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Transparency concepts without overclaim",
          zh: "不过度宣称的透明度概念",
        },
      },
      {
        type: "p",
        text: {
          en: "Hash talk can include seeds, hashes, or post-round checks depending on the product. Understanding the idea is useful; treating buzzwords as a guarantee is not. Fair Play documents editorial boundaries so marketing vocabulary does not outrun evidence.",
          zh: "哈希表述依产品可能包含种子、哈希或事后核对。理解概念有用；把口号当保证则不然。公平游戏记录编辑边界，避免营销语汇跑赢证据。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Pacing risks of short formats",
          zh: "短格式的节奏风险",
        },
      },
      {
        type: "p",
        text: {
          en: "Because rounds are cheap in time, fifty decisions can vanish inside a commute. Set a round budget before you open the lobby. If you notice “just one more verify” becoming a loop, that is a cue to stop — not a cue to increase stake.",
          zh: "由于回合耗时短，五十次决策能消失在一次通勤里。打开大厅前先设局数预算。若发现「再核验一次」变成循环，那是停止的信号——不是加注的信号。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Neighboring lanes to compare",
          zh: "可比较的相邻通道",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Hash Roulette — wheel-shaped hash orientation",
            "Crypto Games — verified Spribe-style catalogue titles",
            "Fast Games — crash and timing loops with local detail pages",
            "Live Casino — dealer-hosted spectacle with different tempo",
          ],
          zh: [
            "哈希轮盘——转轮形哈希导览",
            "加密游戏——已核实的 Spribe 风格目录作品",
            "快速游戏——带本地详情页的崩溃与时机循环",
            "真人赌场——不同节奏的荷官奇观",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "Platform access checklist",
          zh: "平台入口清单",
        },
      },
      {
        type: "p",
        text: {
          en: "Browse this hub, open Fair Play if transparency wording raised questions, then Register or Login to reach live hash products. Brand pages remain informational after you leave for the platform.",
          zh: "浏览本中心；若透明度措辞引发疑问则打开公平游戏；再注册或登录进入实时哈希产品。离开进入平台后，品牌页仍保持信息向。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Mobile habits for hash lobbies",
          zh: "哈希大厅的移动习惯",
        },
      },
      {
        type: "p",
        text: {
          en: "Small screens reward clear cash-out and confirm controls. Mis-taps near rapid buttons are a common friction point. If the client feels cramped, switch device orientation or pause until you can read every primary action.",
          zh: "小屏更需要清晰的兑现与确认控件。快速按钮旁的误触是常见摩擦。若客户端显得局促，切换方向或暂停，直到能读清每一个主操作。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Responsible play connection",
          zh: "与理性游玩的关系",
        },
      },
      {
        type: "p",
        text: {
          en: "Technical framing does not make entertainment risk-free. Pair every hash session with the same limits you would bring to slots or live tables. Responsible Gaming is the reset page when curiosity about verification turns into compulsion.",
          zh: "技术包装不会让娱乐变得无风险。每次哈希会话都带上你对待老虎机或真人桌同样的限额。当对核验的好奇变成强迫，理性游戏是重置页。",
        },
      },
      {
        type: "h2",
        text: { en: "FAQ and further reading", zh: "FAQ 与延伸阅读" },
      },
      {
        type: "p",
        text: {
          en: "Hash FAQ ids cover what the lane means on 1XROLL and how lobby access works. Guides and the games hub help you pivot into catalogue lanes whenever you want concrete title pages.",
          zh: "哈希 FAQ 标识涵盖本通道在 1XROLL 上的含义以及大厅入口如何运作。攻略与游戏中心帮你在想要具体作品页时切到目录通道。",
        },
      },
    ],
    relatedCategoryIds: [
      "hash-roulette",
      "crypto-games",
      "fast-games",
      "live-casino",
    ],
    relatedHrefs: [
      {
        href: "/games/hash-roulette",
        label: { en: "Hash Roulette", zh: "哈希轮盘" },
      },
      {
        href: "/games/crypto-games",
        label: { en: "Crypto Games", zh: "加密游戏" },
      },
      {
        href: "/games/fast-games",
        label: { en: "Fast Games", zh: "快速游戏" },
      },
      { href: "/fair-play", label: { en: "Fair Play", zh: "公平游戏" } },
      {
        href: "/responsible-gaming",
        label: { en: "Responsible Gaming", zh: "理性游戏" },
      },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
      { href: "/games", label: { en: "Games hub", zh: "游戏中心" } },
    ],
    faqIds: ["hash-what", "hash-games-lobby", "hash-fair", "hash-pacing"],
  },
  {
    id: "crypto-games",
    pageTitle: {
      en: "Crypto Games on 1XROLL",
      zh: "1XROLL 加密游戏",
    },
    intro: {
      en: "Crypto Games on this site highlight four verified catalogue titles — Aviator, Mines, Plinko, and Goal — short rounds with clear decision loops and mobile-friendly interfaces. Play completes on the 1XROLL platform; here we teach literacy without inventing house-edge percentages.",
      zh: "本站加密游戏聚焦四款已核实目录作品——Aviator、Mines、Plinko 与 Goal——决策清晰、适合移动端的短回合。游玩在 1XROLL 平台完成；此处教授识读，不编造庄家优势百分比。",
    },
    sections: [
      {
        type: "h2",
        text: {
          en: "What “crypto games” means here",
          zh: "此处「加密游戏」指什么",
        },
      },
      {
        type: "p",
        text: {
          en: "On 1XROLL’s brand catalogue, the label points to Spribe-style instant formats: climb-and-cash curves, tile reveals, drop boards, and shot metaphors. It is not a promise of blockchain settlement on every click, and it is not a wallet tutorial. It is a shelf of short emotional arcs with transparent controls.",
          zh: "在 1XROLL 品牌目录中，该标签指向 Spribe 风格的即时格式：爬升兑现曲线、翻格、落球盘与射门隐喻。它不是每次点击都链上结算的承诺，也不是钱包教程。它是控件透明、情绪弧短的一架作品。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Aviator: timing the climb",
          zh: "Aviator：把握爬升时机",
        },
      },
      {
        type: "p",
        text: {
          en: "Aviator compresses risk into a rising multiplier curve. Your core decision is when to exit before the round ends — not how to arrange paylines. Review where the cash-out control sits, and treat auto-cashout settings as a plan you choose sober, not a default you inherit mid-fatigue.",
          zh: "Aviator 把风险压进一条上升倍率曲线。核心决策是在回合结束前何时离开——而非如何排列赔付线。弄清兑现控件位置，并把自动兑现设置当作清醒时选定的计划，而不是疲劳中继承的默认。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Mines: discrete reveals",
          zh: "Mines：离散翻开",
        },
      },
      {
        type: "p",
        text: {
          en: "Mines turns each tap into a safe-or-stop reveal. The tension is discrete: you choose how far to push a board rather than watching a continuous curve. That structure rewards pre-committed step counts. If you renegotiate after every safe tile, you are redesigning the session under adrenaline.",
          zh: "Mines 把每次点按变成安全或停止的翻开。张力是离散的：你选择把盘面推进多远，而不是盯着连续曲线。该结构奖励预先承诺的步数。若每翻开安全格就重新谈判，你是在肾上腺素下重设会话。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Plinko: rows, risk, release",
          zh: "Plinko：行数、风险、释放",
        },
      },
      {
        type: "p",
        text: {
          en: "Plinko asks you to choose risk and row settings, release the ball, and read the pocket result. Controls are the literacy focus — not invented hit-rate charts. It pairs well with Mines and Aviator when you want discrete rounds without reel grammar.",
          zh: "Plinko 要你选择风险与行数设置、释放球体、读取落袋结果。识读重点是控件——不是编造的命中率图。当你想要离散回合而非转轮语法时，它与 Mines、Aviator 很搭。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Goal: a sports metaphor in a short loop",
          zh: "Goal：短循环里的体育隐喻",
        },
      },
      {
        type: "p",
        text: {
          en: "Goal packages a shot fantasy into Spribe’s short-round philosophy. You pick a risk path, take the shot metaphor, and see a clean result. Compare its decision points with Aviator’s continuous curve when you want a palate cleanser between longer slot or live sessions — still without fake sportsbook odds.",
          zh: "Goal 把射门幻想装进 Spribe 的短回合哲学。你选择风险路径，完成射门隐喻，看到干净结果。想在较长老虎机或真人会话之间换口味时，把它的决策点与 Aviator 的连续曲线比较——依然没有假体育赔率。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Shared session hygiene",
          zh: "共用会话卫生",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Set a round count before opening the client",
            "Review auto settings while calm, not after a near miss",
            "Treat mis-taps near cash-out as a reason to slow down",
            "Switch titles when the emotional arc feels automatic",
          ],
          zh: [
            "打开客户端前先设局数",
            "在平静时检查自动设置，而不是差一点之后",
            "兑现键旁的误触是放慢的理由",
            "当情绪弧线变得自动化时换作品",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "Crypto shelf versus Fast Games",
          zh: "加密架相对快速游戏",
        },
      },
      {
        type: "p",
        text: {
          en: "Fast Games currently documents Crash and Chicken Road — neighboring timing energy with its own detail pages. Crypto Games keeps the four Spribe catalogue entries above. Use both shelves when comparing short-round craft; use Hash hubs when you need platform-lobby orientation without local cards.",
          zh: "快速游戏当前收录 Crash 与 Chicken Road——相邻的时机能量，自有详情页。加密游戏保留上述四款 Spribe 目录条目。比较短回合工艺时两架都用；需要无本地卡片的平台大厅导览时，使用哈希中心。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Mobile-first controls",
          zh: "移动优先控件",
        },
      },
      {
        type: "p",
        text: {
          en: "These titles strip ornamentation so the loop is obvious on a phone. That clarity is the craft signature — and the reason overplay is easy. Pair discovery with the Mobile Gaming guide for exit habits that survive one-handed commuting.",
          zh: "这些作品去掉装饰，让循环在手机上显而易见。清晰是工艺签名——也是容易过度游玩的原因。搭配《移动游戏攻略》，建立单手通勤仍能守住的离场习惯。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Studio context: Spribe",
          zh: "工作室上下文：Spribe",
        },
      },
      {
        type: "p",
        text: {
          en: "Spribe’s footprint on 1XROLL is this short-round shelf. Provider pages explain craft differences versus Evolution’s stage spectacle or Pragmatic’s reel density. We never invent edge numbers beyond what you can verify in your own client after login.",
          zh: "Spribe 在 1XROLL 上的足迹就是这架短回合。厂商页解释其相对 Evolution 舞台奇观或 Pragmatic 转轮密度的工艺差异。除你登录后在自己客户端可核验的内容外，我们不编造优势数字。",
        },
      },
      {
        type: "h2",
        text: { en: "Where FAQ helps", zh: "FAQ 如何帮忙" },
      },
      {
        type: "p",
        text: {
          en: "Crypto FAQ ids answer what the category covers on this site and how short rounds relate to responsible pacing. Keep them bookmarked beside Fair Play when wording about “crypto” feels overloaded.",
          zh: "加密 FAQ 标识解答本站该分类涵盖什么，以及短回合如何关联理性节奏。当「加密」措辞显得过载时，把它们与公平游戏一起收藏。",
        },
      },
    ],
    relatedCategoryIds: ["fast-games", "hash-games", "slots", "sports"],
    relatedHrefs: [
      { href: "/games", label: { en: "Games hub", zh: "游戏中心" } },
      {
        href: "/games/fast-games",
        label: { en: "Fast Games", zh: "快速游戏" },
      },
      {
        href: "/providers/spribe",
        label: { en: "Spribe studio", zh: "Spribe 工作室" },
      },
      {
        href: "/guides/mobile-gaming-guide",
        label: { en: "Mobile gaming guide", zh: "移动游戏攻略" },
      },
      { href: "/fair-play", label: { en: "Fair Play", zh: "公平游戏" } },
      {
        href: "/responsible-gaming",
        label: { en: "Responsible Gaming", zh: "理性游戏" },
      },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
    ],
    faqIds: ["crypto-what", "crypto-aviator", "crypto-pacing", "crypto-mobile"],
  },
  {
    id: "fast-games",
    pageTitle: {
      en: "Fast Games on 1XROLL",
      zh: "1XROLL 快速游戏",
    },
    intro: {
      en: "Fast Games focus on timing and crash-style resolution. Our verified catalogue currently lists two titles — Crash and Chicken Road — built for deliberate, short sessions. This page explains the lane’s tempo and pitfalls without inventing multipliers or win schedules.",
      zh: "快速游戏聚焦时机与崩溃式结算。已核实目录当前列出两款作品——Crash 与 Chicken Road——适合刻意的短会话。本页说明通道节奏与陷阱，不编造倍率或获胜时间表。",
    },
    sections: [
      {
        type: "h2",
        text: {
          en: "Why a separate fast shelf exists",
          zh: "为何单独设快速架",
        },
      },
      {
        type: "p",
        text: {
          en: "Not every short round belongs in the same mental bucket. Fast Games emphasize crash curves and rapid loops where the emotional peak arrives in seconds. Keeping them distinct from the four Crypto Games titles helps you compare craft without forcing every instant format into one label.",
          zh: "并非每个短回合都属于同一心理桶。快速游戏强调崩溃曲线与快速循环，情绪高峰在数秒内到来。把它们与四款加密游戏区分，有助于比较工艺，而不把所有即时格式塞进一个标签。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Crash: the curve and the exit",
          zh: "Crash：曲线与离场",
        },
      },
      {
        type: "p",
        text: {
          en: "Crash-style play asks you to watch a rising value and leave before the round crashes. Literacy is about timer discipline and knowing where exit controls live — not about predicting the exact end with folklore systems. If auto-exit tools exist in the client, configure them before the first round, not after a miss.",
          zh: "崩溃式玩法要你看着上升数值，在回合崩溃前离开。识读关乎计时纪律与离场控件位置——不是用民间系统预测精确终点。若客户端有自动离场工具，在第一局前配置，而不是失手之后。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Chicken Road: timing with a different skin",
          zh: "Chicken Road：不同外衣下的时机",
        },
      },
      {
        type: "p",
        text: {
          en: "Chicken Road packages timing tension in its own presentation language while staying in the same short-round family. Use it as a contrast title: same need for pre-set limits, different visual cues. Detail pages on this site describe feel and controls without fabricating stage-by-stage odds.",
          zh: "Chicken Road 用自有呈现语言包装时机张力，同时仍属同一短回合家族。把它当作对比作品：同样需要预设限额，视觉提示不同。本站详情页描述手感与控件，不编造逐阶段赔率。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Round budgets beat streak stories",
          zh: "局数预算胜过连胜故事",
        },
      },
      {
        type: "p",
        text: {
          en: "Fast loops make it easy to narrate “I was due.” You were not due. Chance does not owe you a correction. Decide how many rounds equal a session while you are calm, then treat that number as a hard stop even when the last exit felt early.",
          zh: "快速循环很容易讲出「我该来了」。你并没有「该来」。机会不欠你一次纠正。在平静时决定多少局算一次会话，然后把该数字当硬停止，即使上次离场感觉过早。",
        },
      },
      {
        type: "h2",
        text: {
          en: "UI traps unique to speed",
          zh: "速度特有的界面陷阱",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Mis-taps near cash-out or confirm during animation peaks",
            "Auto settings left on from a previous mood",
            "Sound and haptics that compress perceived duration",
            "Switching titles mid-tilt without resetting the round budget",
          ],
          zh: [
            "动画高峰时在兑现或确认旁误触",
            "上一情绪留下的自动设置未关",
            "声音与触感压缩主观时长",
            "情绪不稳时换作品却未重置局数预算",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "Fast Games beside slots and live",
          zh: "快速游戏与老虎机、真人并列",
        },
      },
      {
        type: "p",
        text: {
          en: "Slots stretch attention across feature chapters; live tables insert waiting rooms. Fast Games remove both buffers. That makes them excellent palate cleansers and poor all-evening defaults. If you open Crash after a long live show, shrink the budget further — residual adrenaline is not a strategy.",
          zh: "老虎机把注意力拉进特色篇章；真人桌插入等候。快速游戏去掉这两种缓冲。因此它们是出色的换口味工具，却是糟糕的整晚默认。若在长真人秀后打开 Crash，把预算再缩小——残留肾上腺素不是策略。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Mobile and commuting play",
          zh: "移动与通勤游玩",
        },
      },
      {
        type: "p",
        text: {
          en: "Short rounds fit fragmented time, which is why discipline matters more, not less. Prefer stable networks; defer play when lag could steal an exit tap. The Mobile Gaming guide covers readability and honest exits that apply cleanly here.",
          zh: "短回合适合碎片时间，因此纪律更重要而非更不重要。优先稳定网络；延迟可能导致错过离场点按时延后游玩。《移动游戏攻略》中的可读性与诚实离场在此完全适用。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Responsible Gaming is part of the lane",
          zh: "理性游戏是本通道的一部分",
        },
      },
      {
        type: "p",
        text: {
          en: "We mention Responsible Gaming on fast pages because the product design invites speed. Limits, breaks, and self-exclusion tools live in that guidance — not in wishful thinking that “one more curve” will restore balance.",
          zh: "我们在快速页提及理性游戏，因为产品设计本身邀请速度。限额、休息与自我排除工具在那份指引里——不在「再看一条曲线就能恢复平衡」的一厢情愿里。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Related reading and FAQ",
          zh: "相关阅读与 FAQ",
        },
      },
      {
        type: "p",
        text: {
          en: "Fast FAQ ids cover what the shelf includes and how it differs from crypto catalogue titles. Cross-link to Hash Games only for platform-lobby orientation — that hub has no local inventory on this brand site.",
          zh: "快速 FAQ 标识涵盖本架包含什么，以及它如何区别于加密目录作品。仅在需要平台大厅导览时交叉链接哈希游戏——该中心在本品牌站无本地库存。",
        },
      },
    ],
    relatedCategoryIds: ["crypto-games", "hash-games", "slots", "live-casino"],
    relatedHrefs: [
      { href: "/games", label: { en: "Games hub", zh: "游戏中心" } },
      {
        href: "/games/crypto-games",
        label: { en: "Crypto Games", zh: "加密游戏" },
      },
      {
        href: "/guides/mobile-gaming-guide",
        label: { en: "Mobile gaming guide", zh: "移动游戏攻略" },
      },
      {
        href: "/guides/understanding-rtp-volatility",
        label: {
          en: "RTP & volatility guide",
          zh: "RTP 与波动性攻略",
        },
      },
      {
        href: "/responsible-gaming",
        label: { en: "Responsible Gaming", zh: "理性游戏" },
      },
      { href: "/fair-play", label: { en: "Fair Play", zh: "公平游戏" } },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
    ],
    faqIds: ["fast-what", "fast-crash", "fast-pacing", "fast-limits"],
  },
  {
    id: "fishing",
    pageTitle: {
      en: "Fishing Games on 1XROLL",
      zh: "1XROLL 捕鱼游戏",
    },
    intro: {
      en: "Fishing titles on this catalogue lean into arcade seascapes, wave bosses, and targeting loops. Three verified entries sit here: Big Bass Splash, Big Bass Hold & Spinner, and Big Bass Bonanza — related by motif, different in how spin-led versus aim-led energy shows up.",
      zh: "本目录捕鱼作品偏向街机海景、波次首领与瞄准循环。三款已核实条目在此：Big Bass Splash、Big Bass Hold & Spinner 与 Big Bass Bonanza——意象相关，旋转主导与瞄准主导的能量呈现不同。",
    },
    sections: [
      {
        type: "h2",
        text: {
          en: "Arcade fishing, not a sport forecast",
          zh: "街机捕鱼，不是钓讯预报",
        },
      },
      {
        type: "p",
        text: {
          en: "Fishing rooms can feel skillful because you aim, choose targets, and react to wave patterns. Chance still sits underneath. Treat aiming literacy as entertainment craft — reading which creatures demand attention — not as a promise that precision deletes variance.",
          zh: "捕鱼房可能很有技巧感，因为你要瞄准、选目标、对波次模式做出反应。机会仍在底层。把瞄准识读当作娱乐工艺——读懂哪些生物需要关注——而不是精确就能消除方差的承诺。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Big Bass titles in the catalogue",
          zh: "目录中的 Big Bass 作品",
        },
      },
      {
        type: "p",
        text: {
          en: "Big Bass Splash extends bass-motif energy into a splashier fishing presentation with targeting focus and feature bursts. Big Bass Hold & Spinner blends collection or hold moments with the same motif, changing pacing when lock sequences take over. Big Bass Bonanza sits as a related discovery title with reel-fantasy framing — useful when you want the motif in spin-led form rather than free-aim rooms. We describe presentation only; no catch tables or jackpot fish schedules.",
          zh: "Big Bass Splash 把鲈鱼意象延伸到更泼溅的捕鱼呈现，强调瞄准与特色爆发。Big Bass Hold & Spinner 把收集或锁定时刻与同意象结合，锁定序列接管时节奏会变。Big Bass Bonanza 作为相关发现作品，带转轮幻想包装——当你想要旋转主导而非自由瞄准房间的同意象时很有用。我们只描述呈现；没有渔获表或头奖鱼时间表。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Aiming loops and attention budget",
          zh: "瞄准循环与注意力预算",
        },
      },
      {
        type: "p",
        text: {
          en: "Boss waves and special targets pull focus. Decide before a room opens whether you will chase every highlight or keep a quieter targeting plan. Chasing every flash is how sessions overrun — the room is designed to keep offering new cues.",
          zh: "首领波与特殊目标会抢走注意力。开房前先决定是追每一个高光，还是保持更安静的瞄准计划。追每一个闪光是会话超时的常见原因——房间本就设计成不断提供新提示。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Hold sequences versus free aim",
          zh: "锁定序列相对自由瞄准",
        },
      },
      {
        type: "p",
        text: {
          en: "When a hold-and-spinner chapter starts, pacing shifts from continuous aiming to staged collection. That shift can feel like a “must finish” quest. It is still a feature chapter inside a chance game. Budget caps matter more when features extend, not less.",
          zh: "当锁定旋转篇章开始，节奏从连续瞄准转为分阶段收集。这种转换可能像「必须完成」的任务。它仍是机会游戏里的特色篇章。特色延长时，预算上限更重要，而非更不重要。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Do not confuse reel fantasy with room play",
          zh: "不要混淆转轮幻想与房间玩法",
        },
      },
      {
        type: "p",
        text: {
          en: "Big Bass Bonanza teaches fishing cosmetics through spins and collectible free-game drama. Splash and Hold & Spinner lean harder into room or hybrid presentation. Keeping that distinction clear prevents you from importing the wrong expectations when you move between shelves.",
          zh: "Big Bass Bonanza 通过旋转与可收集的免费游戏戏剧教授钓鱼化妆品。Splash 与 Hold & Spinner 更偏向房间或混合呈现。分清这一点，可避免在架间移动时带入错误预期。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Mobile rooms and thumb reach",
          zh: "移动房间与拇指可达",
        },
      },
      {
        type: "p",
        text: {
          en: "Arcade HUDs can crowd small screens with weapon or stake selectors beside the seascape. If controls fight your grip, lower visual clutter by pausing, or switch titles. Readable targeting beats decorative spray when you are on a phone.",
          zh: "街机 HUD 可能在海景旁挤满武器或注额选择。若控件与握持较劲，暂停以降低视觉杂讯，或换作品。在手机上，可读瞄准胜过装饰性扫射。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Session clocks for wave entertainment",
          zh: "波次娱乐的会话时钟",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Set a time cap before the first wave",
            "Take breaks between rooms, not only after bosses",
            "Avoid raising stake solely because a new highlight appeared",
            "Leave when you can no longer name your targeting plan aloud",
          ],
          zh: [
            "第一波前设定时间上限",
            "在房间之间休息，不只在首领之后",
            "不要只因新高光出现就加注",
            "当你无法大声说出瞄准计划时离场",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "Related studios and slots adjacency",
          zh: "相关工作室与老虎机相邻",
        },
      },
      {
        type: "p",
        text: {
          en: "Pragmatic Play’s bass-series language appears across fishing and slots discovery. Use provider pages to compare craft, and the slots shelf when you want cascade or line-pay alternatives after a loud room session.",
          zh: "Pragmatic Play 的鲈鱼系列语汇出现在捕鱼与老虎机发现中。用厂商页比较工艺；在热闹房间会话后想要消除或线赔替代时，使用老虎机架。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Responsible play in arcade spaces",
          zh: "街机空间中的理性游玩",
        },
      },
      {
        type: "p",
        text: {
          en: "Skill cues can soften risk perception. Return to Responsible Gaming whenever a room’s soundtrack and boss fanfare make limits feel optional. Entertainment design is allowed to be loud; your budget does not have to match the volume.",
          zh: "技巧暗示会软化风险感知。每当房间配乐与首领出场号角让限额显得可有可无，请回到理性游戏。娱乐设计可以很大声；你的预算不必匹配音量。",
        },
      },
      {
        type: "h2",
        text: { en: "FAQ themes", zh: "FAQ 主题" },
      },
      {
        type: "p",
        text: {
          en: "Fishing FAQ ids explain what the category includes on 1XROLL and how Big Bass titles relate without inventing catch mathematics. Pair them with Fair Play when you want editorial honesty rules in one place.",
          zh: "捕鱼 FAQ 标识说明本分类在 1XROLL 上包含什么，以及 Big Bass 作品如何关联——不编造渔获数学。想把编辑诚实规则放在一处时，搭配公平游戏。",
        },
      },
    ],
    relatedCategoryIds: ["slots", "fast-games", "crypto-games", "live-casino"],
    relatedHrefs: [
      { href: "/games", label: { en: "Games hub", zh: "游戏中心" } },
      { href: "/games/slots", label: { en: "Slots", zh: "老虎机" } },
      {
        href: "/providers/pragmatic-play",
        label: { en: "Pragmatic Play", zh: "Pragmatic Play" },
      },
      {
        href: "/guides/mobile-gaming-guide",
        label: { en: "Mobile gaming guide", zh: "移动游戏攻略" },
      },
      {
        href: "/responsible-gaming",
        label: { en: "Responsible Gaming", zh: "理性游戏" },
      },
      { href: "/fair-play", label: { en: "Fair Play", zh: "公平游戏" } },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
    ],
    faqIds: ["fishing-what", "fishing-big-bass", "fishing-aim", "fishing-limits"],
  },
  {
    id: "sports",
    pageTitle: {
      en: "Sports entertainment orientation",
      zh: "体育娱乐导览",
    },
    intro: {
      en: "Sports on 1XROLL is a platform entertainment lane. This page orients you to how the category fits the wider site and how to reach the live lobby — without publishing fixtures, odds, scores, or invented match results.",
      zh: "体育是 1XROLL 的平台娱乐通道。本页说明该分类如何融入更广站点，以及如何进入实时大厅——不发布赛程、赔率、比分或虚构比赛结果。",
    },
    sections: [
      {
        type: "h2",
        text: {
          en: "What this page will and will not do",
          zh: "本页会做什么、不会做什么",
        },
      },
      {
        type: "p",
        text: {
          en: "We explain the lane, connect responsible-play and fair-play context, and point to platform access. We will not pretend this brand site hosts a live odds feed. If you need markets and settlement tools, those open only inside the 1XROLL platform after login.",
          zh: "我们说明通道、连接理性游戏与公平游戏上下文，并指向平台入口。我们不会假装本品牌站托管实时赔率源。若需要盘口与结算工具，那些仅在登录后的 1XROLL 平台内开放。",
        },
      },
      {
        type: "h2",
        text: {
          en: "How sports sits in the ecosystem",
          zh: "体育如何坐落在生态中",
        },
      },
      {
        type: "p",
        text: {
          en: "Sports entertainment runs beside slots, live casino, crypto, and fast games as another way to spend session time. The tempos differ: match clocks and market lists feel continuous, while a slot spin resolves in seconds. Knowing that difference helps you pick a lane that matches the attention you actually have.",
          zh: "体育娱乐与老虎机、真人、加密与快速游戏并列，是另一种花费会话时间的方式。节奏不同：比赛时钟与盘口列表感觉连续，而老虎机一转在数秒内结算。知道差异有助于选择匹配你实际注意力的通道。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Platform lobby orientation",
          zh: "平台大厅导览",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Use Register, Login, or Open platform to reach live sports products",
            "Confirm sports rules, markets and presentation inside the platform",
            "Treat this brand page as a map, not as a results board",
          ],
          zh: [
            "使用注册、登录或打开平台进入实时体育产品",
            "在平台内确认体育规则、盘口与呈现",
            "把本品牌页当作地图，而不是赛果看板",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "Reading markets without importing folklore",
          zh: "阅读盘口，不带入民间传说",
        },
      },
      {
        type: "p",
        text: {
          en: "Education about what odds represent in general is fine; inventing tonight’s lines is not. When you are on the platform, read the client’s own market text. Distrust anyone selling “locked tips” or screenshot sheets that claim certainty.",
          zh: "一般性地教育赔率代表什么可以；编造今晚的盘口不行。在平台上时，阅读客户端自己的盘口说明。不信任任何贩卖「锁定提示」或声称确定的截图表的人。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Session design for continuous events",
          zh: "连续赛事的会话设计",
        },
      },
      {
        type: "p",
        text: {
          en: "A match can outlast your planned evening. Set time and spend limits before kickoff energy starts. Halftime is a natural pause — use it. If you chase every in-play swing, you are letting broadcast pacing write your budget.",
          zh: "一场比赛可能长过你计划的夜晚。在开赛能量开始前设定时间与花费限额。中场是自然暂停——请使用。若追逐每一个滚球摆动，你是在让转播节奏书写预算。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Sports beside live casino and Goal",
          zh: "体育与真人、Goal 并列",
        },
      },
      {
        type: "p",
        text: {
          en: "Live casino offers dealer-hosted spectacle with fixed round windows. Goal, in Crypto Games, borrows sports fantasy inside a short Spribe loop without being a sportsbook. Use those distinctions so “sports mood” does not blur into the wrong product expectations.",
          zh: "真人赌场提供有固定投注窗的荷官奇观。加密游戏中的 Goal 在短 Spribe 循环里借用体育幻想，却不是体育博彩。分清这些，免得「体育心情」模糊成错误的产品预期。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Mobile watching versus mobile staking",
          zh: "移动观看相对移动下注",
        },
      },
      {
        type: "p",
        text: {
          en: "Phones are excellent for following scores and poor excuses for distracted staking. If you cannot give a market the attention its rules deserve, watch only — or step away. Network drops near settlement moments are a reason to pause, not to spam confirms.",
          zh: "手机很适合跟比分，却是分心下注的糟糕借口。若你无法给盘口应得的注意力，就只看——或离开。结算时刻附近的网络中断是暂停的理由，不是狂点确认的理由。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Responsible participation",
          zh: "理性参与",
        },
      },
      {
        type: "p",
        text: {
          en: "Sports entertainment can feel like fandom with a wallet attached. Keep fandom and staking separable. Responsible Gaming covers limits and breaks; return there whenever rivalry emotion starts writing larger tickets than you planned.",
          zh: "体育娱乐可能像带着钱包的粉丝心情。让粉丝情绪与下注保持可分。理性游戏涵盖限额与休息；每当对抗情绪开始写出比计划更大的注单，请回到那里。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Fair Play and FAQ",
          zh: "公平游戏与 FAQ",
        },
      },
      {
        type: "p",
        text: {
          en: "Fair Play states how this site talks about integrity without overclaim. Sports FAQ ids — such as sports-odds — will clarify that we do not publish live lines here. Use the games hub when you want catalogue lanes with local title pages instead.",
          zh: "公平游戏说明本站如何在不过度宣称的情况下谈论诚信。体育 FAQ 标识——如 sports-odds——会澄清我们不在此发布实时盘口。想要有本地作品页的目录通道时，请用游戏中心。",
        },
      },
    ],
    relatedCategoryIds: ["live-casino", "crypto-games", "lottery", "slots"],
    relatedHrefs: [
      { href: "/games", label: { en: "Games hub", zh: "游戏中心" } },
      {
        href: "/games/live-casino",
        label: { en: "Live Casino", zh: "真人赌场" },
      },
      {
        href: "/games/crypto-games",
        label: { en: "Crypto Games", zh: "加密游戏" },
      },
      { href: "/fair-play", label: { en: "Fair Play", zh: "公平游戏" } },
      {
        href: "/responsible-gaming",
        label: { en: "Responsible Gaming", zh: "理性游戏" },
      },
      { href: "/guides", label: { en: "Guides", zh: "攻略" } },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
    ],
    faqIds: ["sports-odds", "sports-what", "sports-lobby", "sports-limits"],
  },
  {
    id: "chess-card",
    pageTitle: {
      en: "Chess & Card orientation",
      zh: "棋牌导览",
    },
    intro: {
      en: "Chess & Card covers platform card and table-style entertainment. This hub explains the lane and links adjacent live-table discovery — specific lobby titles open on the 1XROLL platform after login. We do not invent a local inventory here.",
      zh: "棋牌涵盖平台卡牌与桌台风格娱乐。本中心说明通道并链接相邻真人桌发现——具体大厅作品需登录 1XROLL 平台后查看。我们不在此虚构本地库存。",
    },
    sections: [
      {
        type: "h2",
        text: {
          en: "What the lane covers",
          zh: "本通道涵盖什么",
        },
      },
      {
        type: "p",
        text: {
          en: "Think card rooms, table etiquette interfaces, and multiplayer-feeling layouts that differ from single-player reel spins. Exact products live in the platform lobby. On this brand site you get vocabulary, pacing advice, and bridges into verified live catalogue titles when you want dealer-hosted alternatives.",
          zh: "可想象卡牌房间、桌台礼仪界面，以及有别于单人转轮的多人感布局。确切产品在平台大厅。本品牌站提供语汇、节奏建议，以及在你想要荷官主持替代时通往已核实真人目录作品的桥梁。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Card literacy without spoiling chance",
          zh: "不掩盖机会成分的牌类识读",
        },
      },
      {
        type: "p",
        text: {
          en: "Knowing hand rankings or basic table flow makes UI less intimidating. It does not create a reliable edge against the house model. Study enough to follow the screen; stop short of superstition systems that claim to “solve” shuffled outcomes.",
          zh: "了解牌力高下或基本桌台流程会让界面少些恐吓感。它不会对庄家模型形成可靠优势。学到能跟上屏幕即可；止步于声称能「破解」洗牌结果的迷信系统。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Tempo of table sessions",
          zh: "桌台会话的节奏",
        },
      },
      {
        type: "p",
        text: {
          en: "Card and table formats often run longer than a cascade slot feature. Social cues — turn order, chat, waiting for others — stretch time. Set a clock that ignores “one more hand” pressure, especially in rooms that feel companionable.",
          zh: "棋牌与桌台格式往往比消除老虎机特色更长。社交线索——轮次、聊天、等待他人——会拉长时间。设定一个能忽略「再来一局」压力的时钟，尤其在感觉很有伴的房间里。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Adjacent live catalogue bridges",
          zh: "相邻真人目录桥梁",
        },
      },
      {
        type: "p",
        text: {
          en: "When you want documented title pages with dealers on camera, open Live Casino entries such as Speed Baccarat B, Bac Bo, or Super Sic Bo. Those six catalogue games are not a substitute for the chess-card lobby — they are a parallel literacy path with production you can study on this site.",
          zh: "当你想要有镜头中荷官的已记录作品页时，打开真人赌场条目，如 Speed Baccarat B、Bac Bo 或 Super Sic Bo。这六款目录游戏不是棋牌大厅的替代——它们是可在本站研究制作的平行识读路径。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Platform access steps",
          zh: "平台入口步骤",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Read this hub for orientation and responsible-pacing notes",
            "Open Register or Login to reach live chess/card products",
            "Confirm table rules and room presentation inside the platform",
          ],
          zh: [
            "阅读本中心获取导览与理性节奏说明",
            "打开注册或登录进入实时棋牌产品",
            "在平台内确认桌台规则与房间呈现",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "Etiquette as UX, not as luck",
          zh: "礼仪是体验，不是运气",
        },
      },
      {
        type: "p",
        text: {
          en: "Ready timers, seat indicators, and turn highlights exist so rooms stay readable. Following them is courtesy and clarity. It is not a ritual that improves outcomes. If a room’s social pressure pushes bigger stakes, leave — etiquette never requires overspending.",
          zh: "准备计时、座位指示与回合高亮是为了让房间可读。遵守它们是礼貌与清晰。它不是改善结果的仪式。若房间的社交压力推着你加大注，请离开——礼仪从不要求超支。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Mobile table ergonomics",
          zh: "移动桌台人机",
        },
      },
      {
        type: "p",
        text: {
          en: "Card faces and chip stacks need contrast on phones. If text shrinks below comfort, switch to a larger display or defer play. The Live Casino Basics and Mobile Gaming guides offer observation checklists that transfer to many table UIs.",
          zh: "牌面与筹码堆在手机上需要对比度。若文字缩小到不舒适，换更大屏幕或延后游玩。《真人娱乐场基础》与《移动游戏攻略》提供的观察清单可迁移到许多桌台界面。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Responsible Gaming for longer tables",
          zh: "较长桌台的理性游戏",
        },
      },
      {
        type: "p",
        text: {
          en: "Companionable rooms hide duration. Schedule breaks the way you would for a live broadcast session. Responsible Gaming remains the place for limit tools when “friendly table” energy outruns your plan.",
          zh: "有伴的房间会隐藏时长。像对待真人转播会话一样安排休息。当「友好牌桌」能量超过计划时，理性游戏仍是限额工具所在。",
        },
      },
      {
        type: "h2",
        text: { en: "FAQ and next links", zh: "FAQ 与下一步链接" },
      },
      {
        type: "p",
        text: {
          en: "Chess FAQ ids describe what the hub covers and why inventory stays on the platform. Continue to the games hub for catalogue lanes, or to Fair Play for honesty boundaries that apply across every entertainment category.",
          zh: "棋牌 FAQ 标识描述本中心涵盖什么，以及为何库存留在平台。继续前往游戏中心浏览目录通道，或前往公平游戏了解适用于每个娱乐分类的诚实边界。",
        },
      },
    ],
    relatedCategoryIds: ["live-casino", "lottery", "slots", "sports"],
    relatedHrefs: [
      {
        href: "/games/live-casino",
        label: { en: "Live Casino", zh: "真人赌场" },
      },
      { href: "/games", label: { en: "Games hub", zh: "游戏中心" } },
      {
        href: "/guides/live-casino-basics",
        label: { en: "Live Casino Basics", zh: "真人娱乐场基础" },
      },
      {
        href: "/guides/mobile-gaming-guide",
        label: { en: "Mobile gaming guide", zh: "移动游戏攻略" },
      },
      {
        href: "/responsible-gaming",
        label: { en: "Responsible Gaming", zh: "理性游戏" },
      },
      { href: "/fair-play", label: { en: "Fair Play", zh: "公平游戏" } },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
    ],
    faqIds: ["chess-what", "chess-lobby", "chess-tables", "chess-limits"],
  },
  {
    id: "lottery",
    pageTitle: {
      en: "Lottery entertainment orientation",
      zh: "彩票娱乐导览",
    },
    intro: {
      en: "Lottery-style products live on the 1XROLL platform lobby. This hub orients the category — never fabricating draw results, winning numbers, jackpot ledgers, or live odds tables.",
      zh: "彩票风格产品位于 1XROLL 平台大厅。本中心为分类导览——绝不编造开奖结果、中奖号码、头奖账本或实时赔率表。",
    },
    sections: [
      {
        type: "h2",
        text: {
          en: "Lottery as a lobby lane",
          zh: "作为大厅通道的彩票",
        },
      },
      {
        type: "p",
        text: {
          en: "Lottery entertainment sits beside other ecosystem lanes as a draw-oriented way to participate. This brand page is a map to the platform, not a results ticker. Schedules, tickets, and settlement tools open after login inside the live lobby.",
          zh: "彩票娱乐与其他生态通道并列，是一种偏开奖取向的参与方式。本品牌页是通往平台的地图，不是开奖滚动条。日程、彩票与结算工具在登录后的实时大厅开放。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Publish versus withhold",
          zh: "发布与保留",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Publish: category orientation, platform CTAs, responsible-play links",
            "Withhold: draw results, number boards, jackpot claims, invented odds",
            "Defer live product detail to the platform client after authentication",
          ],
          zh: [
            "发布：分类导览、平台 CTA、理性游戏链接",
            "保留：开奖结果、号码板、头奖宣称、编造赔率",
            "将实时产品细节延后到认证后的平台客户端",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "Draw literacy without prediction theater",
          zh: "无预测剧场的开奖识读",
        },
      },
      {
        type: "p",
        text: {
          en: "Understanding that draws are chance events with published rules (on the platform) is enough literacy for most players. Hot-cold number folklore, dream books, and “guaranteed” tip sheets are entertainment noise. They do not schedule outcomes.",
          zh: "理解开奖是带有（平台上）公布规则的机会事件，对大多数玩家已足够识读。冷热号码传说、解梦书与「保证」提示单是娱乐噪音。它们不会排定结果。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Pacing around draw moments",
          zh: "围绕开奖时刻的节奏",
        },
      },
      {
        type: "p",
        text: {
          en: "Anticipation windows can stretch attention longer than a slot feature. Decide spend caps before a draw approaches, not while a countdown pulses. If you buy additional entries only to soothe waiting anxiety, that is a cue to step away.",
          zh: "期待窗口可以把注意力拉得比老虎机特色更长。在开奖临近前设定花费上限，而不是在倒计时跳动时。若只为安抚等待焦虑而加买，那是离开的信号。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Lottery beside hash and sports hubs",
          zh: "彩票与哈希、体育中心并列",
        },
      },
      {
        type: "p",
        text: {
          en: "Hash Games and Hash Roulette also refuse local inventories; Sports refuses fixtures and odds. Together these hubs teach a consistent brand rule: platform-live data stays on the platform. Catalogue lanes such as slots keep verified title pages because those rows exist in our dataset.",
          zh: "哈希游戏与哈希轮盘同样拒绝本地库存；体育拒绝赛程与赔率。这些中心共同教授一致的品牌规则：平台实时数据留在平台。老虎机等目录通道保留已核实作品页，因为那些条目存在于我们的数据集。",
        },
      },
      {
        type: "h2",
        text: {
          en: "How to reach the live lobby",
          zh: "如何进入实时大厅",
        },
      },
      {
        type: "p",
        text: {
          en: "Use Register or Login, then open lottery products inside the 1XROLL platform. Brand CTAs are doorways; they are not ticket printers. Confirm current game names, rules, and presentation only after you are authenticated.",
          zh: "使用注册或登录，再在 1XROLL 平台内打开彩票产品。品牌 CTA 是门廊；不是出票机。仅在认证后确认当前游戏名称、规则与呈现。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Mobile tickets and readable confirms",
          zh: "移动彩票与可读确认",
        },
      },
      {
        type: "p",
        text: {
          en: "On phones, prioritize clear selection states and confirm dialogs before purchase-like actions. If a UI feels ambiguous under glare or motion, wait. Mis-taps near draw deadlines are a reason to skip, not to rush larger entries.",
          zh: "在手机上，购买类操作前优先保证选择状态与确认对话框清晰。若界面在强光或移动中显得模糊，请等待。开奖截止前的误触是跳过的理由，不是匆忙加大投入的理由。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Responsible Gaming for draw products",
          zh: "开奖产品的理性游戏",
        },
      },
      {
        type: "p",
        text: {
          en: "Jackpot storytelling in the wider industry can distort scale. This site withholds jackpot theater on purpose. Pair any lobby visit with Responsible Gaming so anticipation does not rewrite your limits.",
          zh: "更广行业中的头奖叙事会扭曲尺度。本站故意不演头奖剧场。任何大厅访问都搭配理性游戏，免得期待改写你的限额。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Fair Play boundaries",
          zh: "公平游戏边界",
        },
      },
      {
        type: "p",
        text: {
          en: "Fair Play explains how we discuss integrity and transparency without fabricating proofs. Lottery copy on this hub follows the same rule: orientation yes, invented draw mathematics no.",
          zh: "公平游戏说明我们如何在不编造证明的情况下讨论诚信与透明。本中心的彩票文案遵循同一规则：导览可以，编造开奖数学不行。",
        },
      },
      {
        type: "h2",
        text: { en: "FAQ pointers", zh: "FAQ 指引" },
      },
      {
        type: "p",
        text: {
          en: "Lottery FAQ ids such as lottery-what will restate that results boards are not published here. Use FAQ when you need a short answer; use this page when you want fuller orientation and related links.",
          zh: "如 lottery-what 等彩票 FAQ 标识会重申此处不发布开奖看板。需要短答时用 FAQ；需要更完整导览与相关链接时用本页。",
        },
      },
    ],
    relatedCategoryIds: ["hash-games", "sports", "hash-roulette", "chess-card"],
    relatedHrefs: [
      { href: "/games", label: { en: "Games hub", zh: "游戏中心" } },
      {
        href: "/games/hash-games",
        label: { en: "Hash Games", zh: "哈希游戏" },
      },
      { href: "/sports", label: { en: "Sports", zh: "体育" } },
      { href: "/fair-play", label: { en: "Fair Play", zh: "公平游戏" } },
      {
        href: "/responsible-gaming",
        label: { en: "Responsible Gaming", zh: "理性游戏" },
      },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
      { href: "/guides", label: { en: "Guides", zh: "攻略" } },
    ],
    faqIds: ["lottery-what", "lottery-lobby", "lottery-draws", "lottery-limits"],
  },
];

export function getCategoryPageContent(
  id: CategoryId,
): CategoryPageContent | undefined {
  return categoryPages.find((page) => page.id === id);
}
