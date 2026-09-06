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
      en: "Hash Roulette",
      zh: "哈希轮盘",
    },
    intro: {
      en: "Hash Roulette is a platform lobby lane on 1XROLL: roulette-shaped entertainment presented with hash-style transparency language. This brand page teaches wheel literacy, access paths, and responsible pacing — without inventing a local title inventory, cryptographic proofs, or fabricated wheel results. Additional titles may be available on the platform after login.",
      zh: "哈希轮盘是 1XROLL 上的平台大厅通道：以哈希式透明语汇呈现的轮盘形娱乐。本品牌页教授转轮识读、入口路径与理性节奏——不虚构本地作品库存、密码学证明或编造转轮结果。登录后平台上可能还有更多作品。",
    },
    sections: [
      {
        type: "h2",
        text: {
          en: "What Hash Roulette means on 1XROLL",
          zh: "哈希轮盘在 1XROLL 上意味什么",
        },
      },
      {
        type: "p",
        text: {
          en: "On this brand site, Hash Roulette is an orientation hub rather than a scraped lobby mirror. The lane sits in the same family as other hash-inspired entertainment: short decision loops, number-and-color grids familiar from roulette literacy, and product language that gestures toward verifiability. Exact tiles, table names, and presentation details live inside the 1XROLL platform after you authenticate. Keeping this page educational means it will not go stale the moment a lobby rearranges itself.",
          zh: "在本品牌站，哈希轮盘是导览中心，而不是抓取来的大厅镜像。该通道与其他哈希灵感娱乐同属一族：短决策循环、来自轮盘识读的数字与颜色格，以及指向可核验性的产品语汇。确切瓷砖、桌名与呈现细节在你认证后的 1XROLL 平台内。保持本页教育向，意味着大厅一改版它也不会立刻过期。",
        },
      },
      {
        type: "p",
        text: {
          en: "Think of the hub as a map: it explains vocabulary, compares neighboring lanes, and points to Fair Play and Responsible Gaming. It is not a results board, not a seed ledger, and not a substitute for reading the platform client’s own rules panel once you are inside a live round.",
          zh: "把本中心当作地图：解释语汇、比较相邻通道，并指向公平游戏与理性游戏。它不是开奖看板，不是种子账本，也不能替代你进入实时回合后阅读平台客户端自己的规则面板。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Roulette literacy that still applies",
          zh: "仍然适用的轮盘识读",
        },
      },
      {
        type: "p",
        text: {
          en: "Classic roulette literacy transfers even when delivery is digital and hash-framed. Outside bets usually group large sets of outcomes — for example color or parity — while inside selections focus on tighter number clusters. The shared rhythm is place, confirm, wait for resolution, then decide whether to stay. Learning where stake steps, confirm controls, and history rails live matters more than memorizing folklore about “due” numbers.",
          zh: "即便交付是数字化且带哈希包装，经典轮盘识读仍然可迁移。外注通常覆盖较大结果集合——例如颜色或奇偶——内注则聚焦更紧的号码簇。共用节奏是下注、确认、等待结算，再决定是否留下。弄清注额档位、确认控件与历史栏的位置，比背诵「该来了」的号码传说更重要。",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Name the primary bet area before you raise stake size",
            "Watch one full resolution cycle without betting when the UI feels dense",
            "Treat near-miss highlights as entertainment texture, not a schedule",
            "Exit between rounds — not while a timer is forcing a rushed confirm",
          ],
          zh: [
            "加大注额前先能说出主注区在哪里",
            "界面显得密集时，先不下注看完整一局结算",
            "把差一点的高亮当作娱乐质地，而不是时间表",
            "在局与局之间离场——不要在计时器逼着匆忙确认时离开",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "How hash-style framing is usually described",
          zh: "哈希式包装通常如何被描述",
        },
      },
      {
        type: "p",
        text: {
          en: "Hash-oriented products often talk about round artifacts, seeds, or post-round checks in plain marketing language. Understanding the idea — that some products invite players to inspect a round’s presentation after it settles — can reduce confusion. Treating buzzwords as cryptographic proof, on-chain settlement, or a guarantee of fairness is a different claim entirely, and this site refuses to invent those proofs.",
          zh: "偏哈希的产品常用通俗营销语谈回合产物、种子或事后核对。理解概念——有些产品邀请玩家在结算后检视回合呈现——可以减少困惑。把口号当成密码学证明、链上结算或公平保证，则是完全不同的宣称，本站拒绝编造那些证明。",
        },
      },
      {
        type: "p",
        text: {
          en: "If a client shows a hash string or a verify panel, read the platform’s own help text for that product. Fair Play on this brand site explains how we talk about transparency without overclaiming audit seals we cannot substantiate. Curiosity about verification is healthy; using “it looks technical” as a reason to ignore personal limits is not.",
          zh: "若客户端显示哈希字符串或核验面板，请阅读该产品在平台上的自有帮助说明。本品牌站的公平游戏解释我们如何谈论透明度，而不过度宣称无法证实的审计印章。对核验的好奇是健康的；用「看起来很技术」当作忽略个人限额的理由则不然。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Wheel loops versus dealer-hosted roulette",
          zh: "转轮循环相对荷官主持的轮盘",
        },
      },
      {
        type: "p",
        text: {
          en: "Hash Roulette emphasizes the wheel metaphor delivered through the platform client. Live Casino catalogue titles such as Lightning Roulette emphasize studio cameras, hosts, and broadcast pacing with betting windows you can watch in physical space. Both can feel “roulette-shaped”; the social and temporal texture differs. If you want dealer presence and show production documented on this site, open the Live Casino lane. If you want hash-framed wheel literacy and lobby access guidance, stay here, then move to the platform for live tiles.",
          zh: "哈希轮盘强调通过平台客户端交付的转轮隐喻。真人赌场目录中的 Lightning Roulette 等作品强调工作室镜头、主持人与可观看物理空间的投注窗转播节奏。二者都可能感觉「像轮盘」；社交与时间质地不同。若想要本站已记录的荷官在场与秀场制作，请打开真人赌场通道。若想要哈希包装的转轮识读与大厅入口指引，留在本页，再前往平台查看实时瓷砖。",
        },
      },
      {
        type: "h2",
        text: {
          en: "What to confirm after you log in",
          zh: "登录后应确认什么",
        },
      },
      {
        type: "p",
        text: {
          en: "Brand CTAs such as Register, Login, or Open platform are doorways into the live lobby. Once inside, confirm the product name you actually opened, the rules panel language, stake controls, and any verify or history UI the client exposes. Additional titles may be available on the platform after login; this hub deliberately does not freeze a lobby screenshot into SEO copy.",
          zh: "注册、登录或打开平台等品牌 CTA 是进入实时大厅的门廊。进入后，确认你实际打开的产品名称、规则面板措辞、注额控件，以及客户端展示的任何核验或历史界面。登录后平台上可能还有更多作品；本中心故意不把大厅截图冻成 SEO 文案。",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Read this hub for vocabulary and related links first",
            "Authenticate, then locate Hash Roulette presentation in the live lobby",
            "Open rules before enabling any auto or rapid-repeat controls",
            "Return here only for orientation — not for invented results or proofs",
          ],
          zh: [
            "先阅读本中心获取语汇与相关链接",
            "认证后，在实时大厅定位哈希轮盘呈现",
            "启用任何自动或快速重复控件前先打开规则",
            "回到本页只为导览——不为编造结果或证明",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "Designing sessions for quick wheel rounds",
          zh: "为快速转轮回合设计会话",
        },
      },
      {
        type: "p",
        text: {
          en: "Short resolution loops invite rapid re-entry. Decide stake steps and a hard stop — round count or clock — before the first spin metaphor begins. Color grids and near-miss animation can stretch attention longer than the clock on the wall suggests. If you notice yourself raising stakes only to “catch” a feeling, that is entertainment design succeeding at retaining you, not a signal that the wheel owes you a correction.",
          zh: "短结算循环容易促使快速再进入。在第一个转轮隐喻开始前，先定注额档位与硬停止点——局数或时钟。颜色格与差一点动画可以把注意力拉得比墙上时钟暗示的更长。若发现自己加注只是为了「追上」某种感觉，那是娱乐设计成功留住了你，不是转轮欠你一次纠正的信号。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Sitting beside Hash Games and crypto shelves",
          zh: "与哈希游戏及加密架并列",
        },
      },
      {
        type: "p",
        text: {
          en: "Hash Games covers a broader set of short hash-inspired formats; Hash Roulette narrows the metaphor to the wheel. Crypto Games and Fast Games on this brand site publish verified catalogue title pages for short rounds you can study locally. Use those catalogue shelves when you want concrete how-to pages; use hash hubs when you need platform-lobby orientation without inventing inventory counts.",
          zh: "哈希游戏覆盖更广的短哈希灵感格式；哈希轮盘把隐喻收窄到转轮。本品牌站的加密游戏与快速游戏为可在本地研究的短回合发布已核实目录作品页。想要具体玩法页时用那些目录架；需要无编造库存数量的平台大厅导览时，使用哈希中心。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Editorial boundaries for this hub",
          zh: "本中心的编辑边界",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "No invented lobby title lists, hot-number boards, or fake win calendars",
            "No fabricated hash proofs, seed walkthroughs, or on-chain guarantees",
            "No odds tables pretending to be live platform data",
            "No claims that technical framing removes the need for personal limits",
          ],
          zh: [
            "不编造大厅作品清单、热门号码板或虚假获胜日历",
            "不编造哈希证明、种子演示或链上保证",
            "不做假装实时平台数据的赔率表",
            "不宣称技术包装可以取消个人限额的需要",
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
          en: "Transparency language never replaces a budget. If hash framing makes risk feel more “technical” and therefore safer, pause and reread Responsible Gaming before you continue. Pair every quick-wheel session with the same honesty you would bring to slots or live tables: planned exits, breaks, and a willingness to leave when the entertainment value drops.",
          zh: "透明度表述不能替代预算。若哈希包装让风险感觉更「技术」因而更安全，请先暂停并重读理性游戏再继续。每次快速转轮会话都带上你对待老虎机或真人桌同样的诚实：计划好的离场、休息，以及娱乐感下降时愿意离开。",
        },
      },
      {
        type: "h2",
        text: { en: "Useful next steps", zh: "有用的下一步" },
      },
      {
        type: "p",
        text: {
          en: "Compare Live Casino for hosted wheels, Hash Games for neighboring hash formats, and Fair Play for editorial honesty rules. FAQ entries under hash-oriented ids expand the same boundaries in short-answer form. When you want concrete short-round catalogue pages, pivot to Crypto Games or Fast Games.",
          zh: "比较真人赌场以了解主持轮盘、哈希游戏以了解相邻哈希格式，以及公平游戏以了解编辑诚实规则。哈希相关 FAQ 以短答形式延续同样边界。想要具体的短回合目录页时，切到加密游戏或快速游戏。",
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
      en: "Hash Games",
      zh: "哈希游戏",
    },
    intro: {
      en: "Hash Games are short, blockchain-inspired entertainment formats available in the 1XROLL platform lobby. This hub teaches category literacy, pacing discipline, and how we talk about transparency — without inventing detail pages, seed ledgers, cryptographic implementation claims, or a fake local catalogue. Additional titles may be available on the platform after login.",
      zh: "哈希游戏是 1XROLL 平台大厅中偏区块链灵感的短格式娱乐。本中心教授分类识读、节奏纪律，以及我们如何谈论透明度——不虚构详情页、种子账本、密码学实现宣称或假本地目录。登录后平台上可能还有更多作品。",
    },
    sections: [
      {
        type: "h2",
        text: {
          en: "Understanding the Hash Games lane",
          zh: "理解哈希游戏通道",
        },
      },
      {
        type: "p",
        text: {
          en: "Hash Games collect compact decision loops whose product language often sits near crypto-friendly and fast entertainment in spirit: quick stakes, quick resolves, and UI that may invite a post-round look at how a result is presented. On this brand site the lane is a hub, not a frozen shelf of cards. Exact lobby tiles change on the platform; publishing a scraped inventory here would mislead readers the moment the lobby updates.",
          zh: "哈希游戏汇集紧凑决策循环，其产品语汇在精神上常靠近加密友好与快速娱乐：快下注、快结算，以及可能邀请在事后查看结果如何呈现的界面。在本品牌站，该通道是中心页，不是冻住的卡片架。确切大厅瓷砖以平台为准；在此发布抓取库存会在大厅一更新就误导读者。",
        },
      },
      {
        type: "p",
        text: {
          en: "Use this page to learn what “hash-inspired” usually means in entertainment copy, how the lane differs from verified catalogue shelves, and how to reach live products responsibly. Then confirm current presentation inside the authenticated client.",
          zh: "用本页了解娱乐文案里「哈希灵感」通常指什么、本通道如何区别于已核实目录架，以及如何负责任地进入实时产品。然后在已认证客户端内确认当前呈现。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Short-round formats in plain language",
          zh: "用白话说短回合格式",
        },
      },
      {
        type: "p",
        text: {
          en: "Most hash-style entertainment compresses a session into many small chapters: choose a stake, commit, watch a brief resolution, then choose again. That structure is easy to learn and easy to overuse. Literacy starts with naming the primary actions — stake, confirm, optional verify or history, exit — before you stack dozens of rounds into a commute.",
          zh: "多数哈希风格娱乐把会话压成许多小篇章：选注、确认、看短暂结算，再选一次。该结构易学也易过度使用。识读从能说出主操作开始——注额、确认、可选核验或历史、离场——再把几十局塞进一次通勤之前。",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Identify the settle moment so you know when a round is actually over",
            "Locate cash-out, confirm, and cancel controls before the first stake",
            "Prefer one format while learning instead of tab-hopping mid-tilt",
            "Treat auto-repeat tools as optional accelerators, not defaults",
          ],
          zh: [
            "辨认结算时刻，好知道一局何时真正结束",
            "第一注前定位兑现、确认与取消控件",
            "学习阶段优先一种格式，避免情绪不稳时乱切标签",
            "把自动重复工具当作可选加速器，而不是默认项",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "Seeds, hashes, and post-round checks — educationally",
          zh: "种子、哈希与事后核对——教育向说明",
        },
      },
      {
        type: "p",
        text: {
          en: "Marketing for hash-inspired products sometimes mentions seeds, hash strings, or a verify step after a round settles. Conceptually, that language points at the idea that a round’s presentation can be inspected. It is useful literacy to know those words exist. It is not useful — and not something this site will invent — to claim a specific cryptographic protocol, blockchain settlement path, or audit badge for every lobby tile.",
          zh: "哈希灵感产品的营销有时会提到种子、哈希字符串或结算后的核验步骤。概念上，这类语汇指向「可以检视回合呈现」的想法。知道这些词存在是有用的识读。宣称每个大厅瓷砖都有特定密码学协议、链上结算路径或审计徽章则无益——也不是本站会编造的内容。",
        },
      },
      {
        type: "p",
        text: {
          en: "When a platform client offers a verify panel, follow that product’s own instructions. Fair Play documents how 1XROLL’s brand site frames transparency talk without letting slogans outrun evidence. If verification curiosity turns into “one more check” compulsion, that is a pacing problem, not a fairness puzzle to solve with larger stakes.",
          zh: "当平台客户端提供核验面板时，遵循该产品自己的说明。公平游戏记录 1XROLL 品牌站如何框定透明度表述，避免口号跑赢证据。若对核验的好奇变成「再核一次」的强迫，那是节奏问题，不是用更大注额去解的公平谜题。",
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
          en: "We publish orientation, ecosystem links, and access CTAs. We do not fabricate game cards, RTP fields, win-rate charts, or “provably fair” screenshots. When you need tangible short-round catalogue pages with verified local rows, open Crypto Games (Aviator, Mines, Plinko, Goal) or Fast Games (Crash, Chicken Road). Those shelves exist in our dataset; Hash Games remains a platform-lobby hub by design.",
          zh: "我们发布导览、生态链接与入口 CTA。不编造游戏卡片、RTP 字段、胜率图或「可证明公平」截图。当你需要带已核实本地条目的可触摸短回合目录页时，打开加密游戏（Aviator、Mines、Plinko、Goal）或快速游戏（Crash、Chicken Road）。那些架存在于我们的数据集；哈希游戏按设计保持为平台大厅中心。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Comparing neighboring short-round lanes",
          zh: "比较相邻的短回合通道",
        },
      },
      {
        type: "p",
        text: {
          en: "Hash Roulette narrows the metaphor to wheel-shaped grids and color selections. Crypto Games documents four Spribe-style catalogue titles with how-to notes on this site. Fast Games documents Crash and Chicken Road with their own detail pages. Live Casino offers dealer-hosted spectacle with different temporal buffers. Jumping between these lanes is healthy when you are comparing tempo; it becomes unhealthy when you are chasing a loss across every short format in one sitting.",
          zh: "哈希轮盘把隐喻收窄到转轮形网格与颜色选择。加密游戏在本站记录四款 Spribe 风格目录作品及玩法说明。快速游戏记录 Crash 与 Chicken Road 及其详情页。真人赌场提供带不同时间缓冲的荷官奇观。比较节奏时在这些通道间跳转是健康的；在一次会话里跨所有短格式追损失则不健康。",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Hash Roulette — wheel metaphor and hash-framed orientation",
            "Crypto Games — verified local catalogue for Spribe-style shorts",
            "Fast Games — crash and timing loops with local detail pages",
            "Live Casino — hosted tables when you want broadcast pacing instead",
          ],
          zh: [
            "哈希轮盘——转轮隐喻与哈希包装导览",
            "加密游戏——已核实的 Spribe 风格短局本地目录",
            "快速游戏——带本地详情页的崩溃与时机循环",
            "真人赌场——想要转播节奏时的主持桌台",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "Reading the lobby UI before you stake",
          zh: "下注前先读大厅界面",
        },
      },
      {
        type: "p",
        text: {
          en: "Rapid lobbies reward players who can name every primary control aloud. Spend the first minute mapping stake steps, confirm buttons, history rails, and any verify entry points. If labels are ambiguous under motion or glare, sit out until readability returns. Mis-taps near rapid buttons are a common friction point — slowing down is cheaper than repairing an accidental confirm with a bigger follow-up stake.",
          zh: "快速大厅奖励能大声说出每个主控件的玩家。先花一分钟摸清注额档位、确认按钮、历史栏与任何核验入口。若标签在移动或强光下含糊，先坐到可读性恢复。快速按钮旁的误触是常见摩擦——放慢比用更大跟注去「修补」一次意外确认更便宜。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Pacing risks unique to short hash formats",
          zh: "短哈希格式特有的节奏风险",
        },
      },
      {
        type: "p",
        text: {
          en: "Because rounds are cheap in time, fifty decisions can vanish inside a single train ride. Set a round budget before you open the lobby, and treat “just one more verify” as a stop cue rather than a research project. Technical framing can make entertainment feel safer than it is; pair curiosity with the same limits you would bring to slots or live tables.",
          zh: "由于回合耗时短，五十次决策能消失在一趟列车里。打开大厅前先设局数预算，并把「再核验一次」当作停止信号而非研究项目。技术包装会让娱乐感觉比实际更安全；把好奇与你对待老虎机或真人桌同样的限额配对。",
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
          en: "Small screens demand clear cash-out and confirm affordances. Prefer stable networks when rounds resolve quickly; lag near a settle moment is a reason to pause, not to mash larger stakes. If the client feels cramped, switch orientation, enlarge text if the platform allows it, or defer play until you can read every primary action without squinting.",
          zh: "小屏更需要清晰的兑现与确认示能。回合快速结算时优先稳定网络；结算时刻附近的延迟是暂停的理由，不是猛加注的理由。若客户端显得局促，切换方向、在平台允许时放大文字，或延后游玩，直到能不眯眼读清每一个主操作。",
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
          en: "Browse this hub, open Fair Play if transparency wording raised questions, then Register or Login to reach live hash products. Confirm rules and current lobby presentation after authentication. Brand pages remain informational after you leave for the platform — they do not stream live lobby state.",
          zh: "浏览本中心；若透明度措辞引发疑问则打开公平游戏；再注册或登录进入实时哈希产品。认证后确认规则与当前大厅呈现。离开进入平台后，品牌页仍保持信息向——它们不串流实时大厅状态。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Fair Play and Responsible Gaming",
          zh: "公平游戏与理性游戏",
        },
      },
      {
        type: "p",
        text: {
          en: "Fair Play states editorial boundaries for integrity and transparency language. Responsible Gaming is the reset page when curiosity about verification or speed turns into compulsion. Neither page invents proofs; both exist so entertainment copy cannot quietly erase personal limits.",
          zh: "公平游戏陈述诚信与透明度语汇的编辑边界。当对核验或速度的好奇变成强迫时，理性游戏是重置页。两页都不编造证明；它们的存在是为了避免娱乐文案悄悄抹掉个人限额。",
        },
      },
      {
        type: "h2",
        text: { en: "FAQ and further reading", zh: "FAQ 与延伸阅读" },
      },
      {
        type: "p",
        text: {
          en: "Hash FAQ ids cover what the lane means on 1XROLL, how Hash Games differs from Hash Roulette, and how lobby access works. Guides and the games hub help you pivot into catalogue lanes whenever you want concrete title pages with verified local rows.",
          zh: "哈希 FAQ 标识涵盖本通道在 1XROLL 上的含义、哈希游戏如何区别于哈希轮盘，以及大厅入口如何运作。攻略与游戏中心帮你在想要带已核实本地条目的具体作品页时切到目录通道。",
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
      en: "1XROLL Sports",
      zh: "1XROLL 体育",
    },
    intro: {
      en: "1XROLL Sports is a platform entertainment lane. This page explains how players typically explore sports-related categories, how match clocks shape sessions, and how to reach the live lobby — without publishing fixtures, odds, scores, or invented match results. Sports-related categories may vary by platform availability. Additional titles and markets may be available on the platform after login.",
      zh: "1XROLL 体育是平台娱乐通道。本页说明玩家通常如何探索体育相关分类、比赛时钟如何塑造会话，以及如何进入实时大厅——不发布赛程、赔率、比分或虚构比赛结果。体育相关分类可能因平台可用性而异。登录后平台上可能还有更多作品与盘口。",
    },
    sections: [
      {
        type: "h2",
        text: {
          en: "What 1XROLL Sports covers on this brand site",
          zh: "1XROLL 体育在本品牌站涵盖什么",
        },
      },
      {
        type: "p",
        text: {
          en: "This hub is a map, not a sportsbook feed. We orient you to the lane’s place in the wider 1XROLL ecosystem, teach literacy about how players typically browse sports categories, and connect Responsible Gaming and Fair Play. Live markets, settlement tools, and current sport lists open inside the platform after authentication. Publishing invented lines or tonight’s fixtures here would mislead readers the moment those numbers moved.",
          zh: "本中心是地图，不是体育博彩数据源。我们说明该通道在更广 1XROLL 生态中的位置，教授玩家通常如何浏览体育分类的识读，并连接理性游戏与公平游戏。实时盘口、结算工具与当前运动列表在认证后的平台内开放。在此发布编造盘口或今晚赛程，会在那些数字一变动就误导读者。",
        },
      },
      {
        type: "p",
        text: {
          en: "Sports-related categories may vary by platform availability. Treat every sport-specific section below as educational exploration guidance — how people typically navigate those themes — not as a verified claim that a given league or market is live for your account right now.",
          zh: "体育相关分类可能因平台可用性而异。下面每个运动专项小节都当作教育向探索指引——人们通常如何浏览那些主题——而不是宣称某联赛或盘口此刻对你的账户一定可用。",
        },
      },
      {
        type: "h2",
        text: {
          en: "How players typically explore Football categories",
          zh: "玩家通常如何探索足球分类",
        },
      },
      {
        type: "p",
        text: {
          en: "Football lobbies often organize around competitions, match lists, and market groups that feel continuous across a long evening. Players typically start by scanning today’s or upcoming fixtures, then narrowing into a single match page to read market labels before committing. Because a match can outlast a planned session, experienced browsers decide time and spend caps before kickoff energy starts — not during a late equalizer swing.",
          zh: "足球大厅常围绕赛事、赛程列表与盘口组组织，整晚感觉连续。玩家通常先扫视今日或即将到来的对阵，再收窄到单场比赛页阅读盘口标签后才下注。由于一场比赛可能长过计划会话，有经验的浏览者会在开赛能量开始前设定时间与花费上限——而不是在晚些时候的扳平摆动中。",
        },
      },
      {
        type: "p",
        text: {
          en: "Literacy habits that travel well: learn where pre-match versus in-play sections live, notice how market names differ from highlight-reel storytelling, and use natural pauses such as half-time as planned breaks. Sports-related categories may vary by platform availability, so confirm the football presentation you actually see after login rather than assuming a fixed menu from this page.",
          zh: "可迁移的识读习惯：弄清赛前与滚球分区在哪里，注意盘口名称如何有别于集锦叙事，并把中场等自然间歇当作计划休息。体育相关分类可能因平台可用性而异，因此登录后确认你实际看到的足球呈现，而不是假定本页有一份固定菜单。",
        },
      },
      {
        type: "h2",
        text: {
          en: "How players typically explore Basketball categories",
          zh: "玩家通常如何探索篮球分类",
        },
      },
      {
        type: "p",
        text: {
          en: "Basketball browsing often emphasizes pace: quarters, totals-style thinking, and scoreboard momentum that updates frequently. Players typically compare a small set of games rather than chasing every tip-off on a busy slate. The educational goal on this hub is to notice how continuous scoring can compress decision time — and to plan stake steps before the first possession of attention, not after a run of made baskets changes your mood.",
          zh: "篮球浏览常强调节奏：节次、总分式思路，以及频繁更新的计分板动能。玩家通常比较一小撮比赛，而不是追逐繁忙赛程上的每一次跳球。本中心的教育目标是让你注意到连续得分如何压缩决策时间——并在注意力第一次被占有前规划注额档位，而不是在一波进球改变情绪之后。",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Pick one game to follow deeply before opening a second",
            "Use quarter breaks as intentional check-ins with your budget",
            "Separate fandom emotion from stake size when a rivalry night runs long",
            "Confirm basketball category availability inside the platform after login",
          ],
          zh: [
            "在打开第二场前，先深入跟一场",
            "把节间休息当作与预算的有意识核对",
            "对抗之夜拉长时，把粉丝情绪与注额分开",
            "登录后在平台内确认篮球分类可用性",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "How players typically explore Tennis categories",
          zh: "玩家通常如何探索网球分类",
        },
      },
      {
        type: "p",
        text: {
          en: "Tennis schedules can sprawl across courts and time zones, with matches that stretch or end abruptly. Players typically filter by tournament or by a short watchlist, then study set structure before engaging. Educational browsing emphasizes patience: a rain delay, a long tie-break, or a retirement can rewrite the evening you thought you planned. Build session clocks that survive interruptions rather than assuming a tidy three-set story every time.",
          zh: "网球赛程可能跨场地与时区铺开，比赛可拉长也可突然结束。玩家通常按赛事或短关注列表筛选，再在参与前研究盘分结构。教育向浏览强调耐心：雨延、长抢七或退赛都可能改写你以为计划好的夜晚。建立能承受中断的会话时钟，而不是假定每次都是整齐的三盘故事。",
        },
      },
      {
        type: "p",
        text: {
          en: "Because sports-related categories may vary by platform availability, treat tennis exploration here as a literacy pattern — how to navigate long-form individual sport entertainment — not as a promise of specific tours or courts in your lobby today.",
          zh: "由于体育相关分类可能因平台可用性而异，把此处的网球探索当作识读模式——如何浏览长篇个人运动娱乐——而不是承诺你今天大厅里有特定巡回赛或场地。",
        },
      },
      {
        type: "h2",
        text: {
          en: "How players typically explore Esports categories",
          zh: "玩家通常如何探索电竞分类",
        },
      },
      {
        type: "p",
        text: {
          en: "Esports lobbies often mix familiar competitive titles with formats that update on different clocks than traditional ball sports. Players typically begin by recognizing the game they already understand as a spectator, then learning how that lobby groups series, maps, or match stages. Educational guidance here focuses on attention hygiene: stream overlays and chat energy can make sessions feel shorter than they are.",
          zh: "电竞大厅常把熟悉的竞技作品与有别于传统球类时钟的格式混在一起。玩家通常先从自己作为观众已理解的游戏开始，再学习该大厅如何组织系列赛、地图或比赛阶段。此处教育指引聚焦注意力卫生：直播叠层与聊天能量会让会话感觉比实际更短。",
        },
      },
      {
        type: "p",
        text: {
          en: "Explore esports categories the way you would any other sport lane on this hub: confirm what your platform account actually offers after login, read market or participation labels carefully, and keep fandom separable from stake size. Sports-related categories may vary by platform availability — including which esports titles appear.",
          zh: "像探索本中心其他运动通道一样探索电竞分类：登录后确认平台账户实际提供什么，仔细阅读盘口或参与标签，并让粉丝情绪与注额可分。体育相关分类可能因平台可用性而异——包括出现哪些电竞作品。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Reading a sports lobby without folklore",
          zh: "不带民间传说地阅读体育大厅",
        },
      },
      {
        type: "p",
        text: {
          en: "General education about what market labels represent is fine; inventing tonight’s lines is not. When you are on the platform, read the client’s own text for each selection. Distrust locked tip sheets, screenshot “certainties,” and systems that claim to schedule outcomes. Literacy is knowing where rules and settlement notes live — not collecting superstition.",
          zh: "一般性地教育盘口标签代表什么可以；编造今晚的盘口不行。在平台上时，阅读客户端对每个选项的自有说明。不信任锁定提示单、截图「确定性」，以及声称能排定结果的系统。识读是知道规则与结算说明在哪里——不是收集迷信。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Session design around match clocks",
          zh: "围绕比赛时钟的会话设计",
        },
      },
      {
        type: "p",
        text: {
          en: "A fixture can rewrite your evening. Set time and spend limits before broadcast energy starts. Use natural pauses — half-time, between sets, between maps — as planned check-ins. If you chase every in-play swing, you are letting production pacing write your budget. Prefer fewer, clearer commitments over stacking unsettled tickets while tired.",
          zh: "一场对阵可以改写你的夜晚。在转播能量开始前设定时间与花费限额。把自然间歇——中场、盘间、地图间——当作计划核对。若追逐每一个滚球摆动，你是在让制作节奏书写预算。疲劳时，宁可更少更清晰的承诺，也不要堆叠未结算注单。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Sports mood versus live casino and Goal",
          zh: "体育心情相对真人与 Goal",
        },
      },
      {
        type: "p",
        text: {
          en: "Live casino offers dealer-hosted spectacle with fixed round windows. Goal, in Crypto Games, borrows sports fantasy inside a short Spribe loop without being a sportsbook. Keeping those distinctions clear prevents “sports mood” from importing the wrong expectations — continuous match clocks are not the same product as a thirty-second shot metaphor or a hosted roulette window.",
          zh: "真人赌场提供有固定投注窗的荷官奇观。加密游戏中的 Goal 在短 Spribe 循环里借用体育幻想，却不是体育博彩。分清这些，免得「体育心情」带入错误预期——连续比赛时钟不同于三十秒射门隐喻，也不同于主持轮盘投注窗。",
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
          en: "Phones are excellent for following scores and poor excuses for distracted staking. If you cannot give a market the attention its rules deserve, watch only — or step away. Network drops near settlement moments are a reason to pause, not to spam confirms. Prefer readable labels and honest connectivity over rushing a ticket under glare or motion.",
          zh: "手机很适合跟比分，却是分心下注的糟糕借口。若你无法给盘口应得的注意力，就只看——或离开。结算时刻附近的网络中断是暂停的理由，不是狂点确认的理由。在强光或移动中，优先可读标签与诚实连通，而不是匆忙提交注单。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Responsible participation and Fair Play",
          zh: "理性参与与公平游戏",
        },
      },
      {
        type: "p",
        text: {
          en: "Sports entertainment can feel like fandom with a wallet attached. Keep fandom and staking separable. Responsible Gaming covers limits and breaks; return there whenever rivalry emotion starts writing larger tickets than you planned. Fair Play states how this site talks about integrity without overclaim — including why fixtures and odds stay off these pages.",
          zh: "体育娱乐可能像带着钱包的粉丝心情。让粉丝情绪与下注保持可分。理性游戏涵盖限额与休息；每当对抗情绪开始写出比计划更大的注单，请回到那里。公平游戏说明本站如何在不过度宣称的情况下谈论诚信——包括为何赛程与赔率留在这些页面之外。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Platform access and FAQ",
          zh: "平台入口与 FAQ",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Use Register, Login, or Open platform to reach live sports products when offered",
            "Confirm sports rules, categories, and presentation inside the platform",
            "Treat this brand page as a literacy map, not as a results or odds board",
            "Use sports FAQ ids for short answers about what we withhold and why",
          ],
          zh: [
            "在提供时，使用注册、登录或打开平台进入实时体育产品",
            "在平台内确认体育规则、分类与呈现",
            "把本品牌页当作识读地图，而不是赛果或赔率看板",
            "用体育 FAQ 标识获取关于我们保留什么及原因的短答",
          ],
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
      en: "Chess & Card Games",
      zh: "棋牌游戏",
    },
    intro: {
      en: "Chess & Card Games covers platform card and table-style entertainment on 1XROLL. This hub explains how table rooms usually feel, how to read turn-based UI, and how to pace longer sessions — without inventing a local game inventory. Specific lobby titles open on the platform after login; additional titles may be available there.",
      zh: "棋牌游戏涵盖 1XROLL 上的平台卡牌与桌台风格娱乐。本中心说明桌台房间通常给人什么感觉、如何阅读回合制界面，以及如何为较长会话把握节奏——不虚构本地游戏库存。具体大厅作品需登录后在平台打开；那里可能还有更多作品。",
    },
    sections: [
      {
        type: "h2",
        text: {
          en: "Table and card entertainment on 1XROLL",
          zh: "1XROLL 上的桌台与卡牌娱乐",
        },
      },
      {
        type: "p",
        text: {
          en: "Chess & Card is a platform lobby lane for card rooms, table etiquette interfaces, and multiplayer-feeling layouts that differ from single-player reel spins. Exact products live in the authenticated lobby. On this brand site you get vocabulary, pacing advice, and bridges into verified live catalogue titles when you want dealer-hosted alternatives with documented pages.",
          zh: "棋牌是面向卡牌房间、桌台礼仪界面，以及有别于单人转轮的多人感布局的平台大厅通道。确切产品在已认证大厅。本品牌站提供语汇、节奏建议，以及在你想要有文档页的荷官主持替代时，通往已核实真人目录作品的桥梁。",
        },
      },
      {
        type: "p",
        text: {
          en: "We deliberately withhold a fabricated list of table names. Publishing inventory we cannot verify would create false SEO shelves. Additional titles may be available on the platform after login — confirm what your account actually sees rather than assuming a fixed menu from this page.",
          zh: "我们故意不发布编造的桌名清单。发布无法核实的库存会制造虚假 SEO 货架。登录后平台上可能还有更多作品——确认账户实际看到的内容，而不是假定本页有一份固定菜单。",
        },
      },
      {
        type: "h2",
        text: {
          en: "How card rooms usually feel",
          zh: "卡牌房间通常给人什么感觉",
        },
      },
      {
        type: "p",
        text: {
          en: "Compared with a cascade slot feature, card and table formats often insert waiting: turn order, ready timers, and other players resolving actions. That social texture can feel companionable or pressuring depending on your habits. Literacy begins with noticing the wait as part of the product design — not as dead time you must fill by raising stakes.",
          zh: "与消除老虎机特色相比，棋牌与桌台格式常插入等待：轮次、准备计时，以及其他玩家结算动作。这种社交质地可能感觉有伴，也可能有压力，取决于习惯。识读从注意到等待是产品设计的一部分开始——而不是必须用加注填满的空白时间。",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Watch a full hand or round without staking when the room feels busy",
            "Learn where seat, ready, and confirm controls live before increasing stakes",
            "Treat chat and emotes as optional social layer, not as luck signals",
            "Leave between hands when companionable pressure starts writing larger bets",
          ],
          zh: [
            "房间显得忙碌时，先不下注看完整一手或一局",
            "加大注额前先弄清座位、准备与确认控件在哪里",
            "把聊天与表情当作可选社交层，而不是运气信号",
            "当有伴的压力开始写出更大注时，在手与手之间离开",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "Learning table flow without chasing systems",
          zh: "学习桌台流程，不追逐系统",
        },
      },
      {
        type: "p",
        text: {
          en: "Knowing basic hand rankings, turn order, or table flow makes UI less intimidating. That knowledge does not create a reliable edge against a house model or against shuffled chance. Study enough to follow the screen and to understand when a round ends. Stop short of superstition systems, “guaranteed” counting folklore, or tip sheets that claim to solve outcomes.",
          zh: "了解基本牌力高下、轮次或桌台流程会让界面少些恐吓感。那些知识不会对庄家模型或洗牌机会形成可靠优势。学到能跟上屏幕、理解一局何时结束即可。止步于迷信系统、「保证」的计数传说，或声称能破解结果的提示单。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Turn-based pacing and social pressure",
          zh: "回合制节奏与社交压力",
        },
      },
      {
        type: "p",
        text: {
          en: "Ready timers and turn highlights exist so rooms stay readable. Following them is courtesy and clarity — not a ritual that improves results. If a room’s social cues push you toward stakes you did not plan, etiquette never requires overspending. Schedule a clock that ignores “one more hand” pressure, especially when the table feels friendly.",
          zh: "准备计时与回合高亮是为了让房间可读。遵守它们是礼貌与清晰——不是改善结果的仪式。若房间的社交线索把你推向未计划的注额，礼仪从不要求超支。设定一个能忽略「再来一局」压力的时钟，尤其在牌桌感觉很友好时。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Seat indicators, timers, and readable UI",
          zh: "座位指示、计时器与可读界面",
        },
      },
      {
        type: "p",
        text: {
          en: "Before the first committed stake, map the strip: your seat marker, countdown, chip or stake selector, and confirm control. Card faces and chip stacks need contrast; if text shrinks below comfort on a phone, switch device or defer play. Readable rooms beat decorative clutter when you are learning a new table grammar.",
          zh: "在第一次认真下注前，摸清顶栏：座位标记、倒计时、筹码或注额选择，以及确认控件。牌面与筹码堆需要对比度；若手机上文字缩小到不舒适，换设备或延后游玩。学习新桌台语法时，可读房间胜过装饰性杂讯。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Bridges to Live Casino catalogue titles",
          zh: "通往真人赌场目录作品的桥梁",
        },
      },
      {
        type: "p",
        text: {
          en: "When you want documented title pages with dealers on camera, open Live Casino entries such as Speed Baccarat B, Bac Bo, or Super Sic Bo. Those verified catalogue games are a parallel literacy path with production you can study on this site — not a substitute inventory for the chess-card lobby. Use them when you want broadcast pacing; return to the platform lobby for card-room products this hub orients.",
          zh: "当你想要有镜头中荷官的已记录作品页时，打开真人赌场条目，如 Speed Baccarat B、Bac Bo 或 Super Sic Bo。那些已核实目录游戏是可在本站研究制作的平行识读路径——不是棋牌大厅的替代库存。想要转播节奏时用它们；需要本中心所导览的卡牌房间产品时，回到平台大厅。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Solo spin shelves versus shared tables",
          zh: "单人旋转架相对共享桌台",
        },
      },
      {
        type: "p",
        text: {
          en: "Slots and many crypto shorts let you compress decisions into a personal button. Chess & Card inserts other people — or at least the feeling of a shared room — into the tempo. That difference matters for session design: social rooms hide duration more easily. If you open a table after a long slot session, shrink the budget further; residual spin adrenaline is not a strategy for multiplayer pacing.",
          zh: "老虎机与许多加密短局把决策压进个人按钮。棋牌把其他人——或至少共享房间的感觉——插入节奏。这对会话设计很重要：社交房间更容易隐藏时长。若在长老虎机会话后开桌，把预算再缩小；残留的旋转肾上腺素不是多人节奏的策略。",
        },
      },
      {
        type: "h2",
        text: {
          en: "What to confirm after login",
          zh: "登录后应确认什么",
        },
      },
      {
        type: "p",
        text: {
          en: "Use Register or Login, then open chess and card products inside the 1XROLL platform when they are offered for your account. Confirm room rules, stake tools, and presentation in the client. This brand page remains a literacy map; it does not stream live seat lists or invent table IDs.",
          zh: "使用注册或登录，再在账户提供时于 1XROLL 平台内打开棋牌产品。在客户端确认房间规则、注额工具与呈现。本品牌页保持为识读地图；它不串流实时座位列表，也不编造桌台编号。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Mobile ergonomics for card faces",
          zh: "牌面的移动人机",
        },
      },
      {
        type: "p",
        text: {
          en: "Portrait and landscape crops both appear in table clients. Prioritize contrast on ranks and suits, reachable confirms, and honest network conditions. Lag near the end of a turn timer is a reason to sit out a hand, not to mash a larger stake. The Live Casino Basics and Mobile Gaming guides offer observation checklists that transfer to many table UIs.",
          zh: "桌台客户端会出现竖屏与横屏裁切。优先保证点数与花色对比、确认按钮可达，以及诚实的网络状况。回合计时尾声的延迟是坐下一手的理由，不是猛加注的理由。《真人娱乐场基础》与《移动游戏攻略》提供的观察清单可迁移到许多桌台界面。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Longer sessions and Responsible Gaming",
          zh: "较长会话与理性游戏",
        },
      },
      {
        type: "p",
        text: {
          en: "Companionable rooms hide duration. Schedule breaks the way you would for a live broadcast session. Responsible Gaming remains the place for limit tools when “friendly table” energy outruns your plan. Fair Play adds honesty boundaries so category copy never invents inventories or guarantees.",
          zh: "有伴的房间会隐藏时长。像对待真人转播会话一样安排休息。当「友好牌桌」能量超过计划时，理性游戏仍是限额工具所在。公平游戏补充诚实边界，避免分类文案编造库存或保证。",
        },
      },
      {
        type: "h2",
        text: { en: "FAQ and next links", zh: "FAQ 与下一步链接" },
      },
      {
        type: "p",
        text: {
          en: "Chess FAQ ids describe what the hub covers, why inventory stays on the platform, and how to approach table pacing. Continue to the games hub for catalogue lanes with verified title pages, or to Live Casino when you want dealer-hosted literacy documented on this site.",
          zh: "棋牌 FAQ 标识描述本中心涵盖什么、为何库存留在平台，以及如何对待桌台节奏。继续前往游戏中心浏览带已核实作品页的目录通道，或在想要本站已记录的荷官主持识读时前往真人赌场。",
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
      en: "Lottery",
      zh: "彩票",
    },
    intro: {
      en: "Lottery-style products live on the 1XROLL platform lobby. This hub teaches draw-based literacy, what to check before you participate, and how anticipation windows affect pacing — never fabricating draw results, winning numbers, jackpot ledgers, or live odds tables. Additional titles may be available on the platform after login.",
      zh: "彩票风格产品位于 1XROLL 平台大厅。本中心教授开奖取向识读、参与前应检查什么，以及期待窗口如何影响节奏——绝不编造开奖结果、中奖号码、头奖账本或实时赔率表。登录后平台上可能还有更多作品。",
    },
    sections: [
      {
        type: "h2",
        text: {
          en: "Lottery as a draw-oriented lobby lane",
          zh: "作为开奖取向大厅通道的彩票",
        },
      },
      {
        type: "p",
        text: {
          en: "Lottery entertainment sits beside other ecosystem lanes as a draw-oriented way to participate: select entries, wait through an anticipation window, then see a published resolution inside the platform client. This brand page is a map to that experience, not a results ticker. Schedules, tickets, and settlement tools open after login when lottery products are offered for your account.",
          zh: "彩票娱乐与其他生态通道并列，是一种开奖取向的参与方式：选择投入、经历期待窗口，再在平台客户端内看到公布的结算。本品牌页是通往该体验的地图，不是开奖滚动条。日程、彩票与结算工具在登录后、账户提供彩票产品时开放。",
        },
      },
      {
        type: "p",
        text: {
          en: "Keeping results off this site is intentional. Draw boards belong to live, integrated sources. Inventing numbers, jackpots, or schedules for SEO would mislead readers and violate the same honesty rule that governs sports fixtures and hash lobby inventories on this brand.",
          zh: "不在本站发布结果是故意的。开奖看板属于实时、已集成来源。为 SEO 编造号码、头奖或日程会误导读者，并违反本品牌对体育赛程与哈希大厅库存同样的诚实规则。",
        },
      },
      {
        type: "h2",
        text: {
          en: "How draw-based products typically work",
          zh: "开奖类产品通常如何运作",
        },
      },
      {
        type: "p",
        text: {
          en: "In educational terms, draw-based entertainment usually combines a selection step, a commitment or purchase-like confirm, a waiting period, and a resolution you can read in the client. Variants differ in how selections are made and how long the wait feels, but the literacy job is shared: understand what you are confirming before the countdown becomes emotional pressure.",
          zh: "从教育角度看，开奖类娱乐通常包含选择步骤、承诺或购买类确认、等待期，以及可在客户端阅读的结算。变体在如何选择与等待多久上不同，但识读任务一致：在倒计时变成情绪压力之前，理解你在确认什么。",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Identify selection controls and review states before confirming",
            "Find where rules, draw timing notes, and history live in the client",
            "Decide a spend cap while calm — not while a countdown pulses",
            "Treat the wait as designed anticipation, not as a cue to stack entries",
          ],
          zh: [
            "确认前辨认选择控件与复核状态",
            "在客户端找到规则、开奖时间说明与历史所在",
            "在平静时决定花费上限——而不是在倒计时跳动时",
            "把等待当作设计好的期待，而不是加码投入的信号",
          ],
        },
      },
      {
        type: "h2",
        text: {
          en: "What to check before you participate",
          zh: "参与前应检查什么",
        },
      },
      {
        type: "p",
        text: {
          en: "After login, confirm the product name you opened, eligibility for your account, rule text, selection limits, and how the client displays resolution. If any confirm dialog feels ambiguous under glare, motion, or lag, wait. Mis-taps near draw deadlines are a reason to skip an entry, not to rush a larger one. Additional titles may be available on the platform; verify what you see rather than importing assumptions from this hub.",
          zh: "登录后，确认你打开的产品名称、账户是否可用、规则说明、选择上限，以及客户端如何显示结算。若任何确认对话框在强光、移动或延迟下显得含糊，请等待。开奖截止前的误触是跳过的理由，不是匆忙加大投入的理由。平台上可能还有更多作品；核验你所见，而不是从本中心带入假定。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Anticipation windows and countdown pressure",
          zh: "期待窗口与倒计时压力",
        },
      },
      {
        type: "p",
        text: {
          en: "Waiting for a draw can stretch attention longer than a slot feature. Countdown UI is entertainment design: it focuses emotion on a single moment. Decide spend caps before that moment approaches. If you add entries only to soothe waiting anxiety, that is a cue to step away — the anxiety is the product texture, not a problem that more tickets will solve.",
          zh: "等待开奖可以把注意力拉得比老虎机特色更长。倒计时界面是娱乐设计：它把情绪聚焦到单一时刻。在那一刻临近前设定花费上限。若只为安抚等待焦虑而加买，那是离开的信号——焦虑是产品质地，不是更多彩票能解决的问题。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Number selection literacy without folklore",
          zh: "无民间传说的选号识读",
        },
      },
      {
        type: "p",
        text: {
          en: "Understanding that draws are chance events with published rules on the platform is enough literacy for most players. Hot-cold number folklore, dream books, pattern sheets, and “guaranteed” tip packs are entertainment noise. They do not schedule outcomes. Prefer reading the client’s selection and confirm states over collecting superstition systems.",
          zh: "理解开奖是带有平台上公布规则的机会事件，对大多数玩家已足够识读。冷热号码传说、解梦书、规律表与「保证」提示包是娱乐噪音。它们不会排定结果。优先阅读客户端的选择与确认状态，而不是收集迷信系统。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Why results and jackpot theater stay off this site",
          zh: "为何结果与头奖剧场留在本站之外",
        },
      },
      {
        type: "p",
        text: {
          en: "Industry jackpot storytelling can distort scale. This hub withholds results boards, winning-number lists, and jackpot ledgers on purpose. Fair Play explains the same honesty boundary that applies to sports odds and hash inventories: platform-live data stays on the platform. Orientation and responsible-play links belong here; fabricated draw mathematics does not.",
          zh: "行业头奖叙事会扭曲尺度。本中心故意不发布开奖看板、中奖号码列表与头奖账本。公平游戏解释适用于体育赔率与哈希库存的同一诚实边界：平台实时数据留在平台。导览与理性游戏链接属于此处；编造开奖数学不属于。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Lottery beside sports and hash hubs",
          zh: "彩票与体育、哈希中心并列",
        },
      },
      {
        type: "p",
        text: {
          en: "Sports refuses fixtures and odds. Hash Games and Hash Roulette refuse local inventories and invented proofs. Lottery refuses draw results and jackpot theater. Together these hubs teach a consistent brand rule. Catalogue lanes such as slots keep verified title pages because those rows exist in our dataset — a different publishing standard from lobby-only entertainment.",
          zh: "体育拒绝赛程与赔率。哈希游戏与哈希轮盘拒绝本地库存与编造证明。彩票拒绝开奖结果与头奖剧场。这些中心共同教授一致的品牌规则。老虎机等目录通道保留已核实作品页，因为那些条目存在于我们的数据集——与仅大厅娱乐不同的发布标准。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Mobile confirms and selection clarity",
          zh: "移动确认与选择清晰度",
        },
      },
      {
        type: "p",
        text: {
          en: "On phones, prioritize clear selection states and confirm dialogs before purchase-like actions. If a UI feels ambiguous, wait for a stable posture and network. Prefer skipping a deadline over confirming something you cannot restate aloud. Readable confirms matter more than decorative countdown animation when you are on a small screen.",
          zh: "在手机上，购买类操作前优先保证选择状态与确认对话框清晰。若界面显得含糊，等待稳定姿势与网络。宁可跳过截止，也不确认你无法大声复述的内容。在小屏上，可读确认比装饰性倒计时动画更重要。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Budgeting across draw moments",
          zh: "跨开奖时刻做预算",
        },
      },
      {
        type: "p",
        text: {
          en: "Treat entries as entertainment spend within a pre-set budget. Do not chase a miss across the next countdown. If a near-miss feeling after resolution pushes you to reopen selection immediately, take a break first. Session design for draw products is about protecting the quiet minutes before the pulse, not about predicting the pulse.",
          zh: "把投入当作预设预算内的娱乐支出。不要把一次落空追到下一次倒计时。若结算后的差一点感觉推着你立刻重开选择，请先休息。开奖产品的会话设计关乎保护脉冲前的安静分钟，而不是预测脉冲。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Responsible Gaming and Fair Play",
          zh: "理性游戏与公平游戏",
        },
      },
      {
        type: "p",
        text: {
          en: "Pair any lobby visit with Responsible Gaming so anticipation does not rewrite your limits. Fair Play restates integrity language without fabricating proofs. Together they keep lottery copy educational: what to check, how waits feel, and where live tools actually live — never a fake results board.",
          zh: "任何大厅访问都搭配理性游戏，免得期待改写限额。公平游戏在不编造证明的情况下重述诚信语汇。二者共同保持彩票文案的教育向：检查什么、等待感觉如何、实时工具实际在哪里——绝不是虚假开奖看板。",
        },
      },
      {
        type: "h2",
        text: {
          en: "Platform access and FAQ pointers",
          zh: "平台入口与 FAQ 指引",
        },
      },
      {
        type: "p",
        text: {
          en: "Use Register or Login, then open lottery products inside the 1XROLL platform when available. Brand CTAs are doorways, not ticket printers. Lottery FAQ ids such as lottery-what and lottery-draws restate in short form why results stay off this site; use this page when you want fuller literacy and related links.",
          zh: "使用注册或登录，再在可用时于 1XROLL 平台内打开彩票产品。品牌 CTA 是门廊，不是出票机。如 lottery-what 与 lottery-draws 等彩票 FAQ 以短形式重申为何结果留在本站之外；需要更完整识读与相关链接时用本页。",
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
