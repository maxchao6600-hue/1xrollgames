import type { Game } from "@/types/content";

/**
 * Editorial game catalogue for 1XROLL.
 * No invented RTP or volatility values — those fields are omitted.
 * providerSlug game counts must match providers.ts.
 */
export const games: Game[] = [
  {
    id: "fortune-tiger",
    slug: "fortune-tiger",
    image: "/games/fortune-tiger.webp",
    name: "Fortune Tiger",
    providerSlug: "pg-soft",
    category: "slots",
    status: "hot",
    shortDescription: {
      en: "A festive vertical slot where the tiger motif frames wild expansions and brisk free-game bursts.",
      zh: "节庆竖屏老虎机，老虎意象串联百搭扩展与短促有力的免费游戏。"
    },
    description: {
      en: "Fortune Tiger is built for portrait play: bold animal art, high-contrast UI, and feature moments that announce themselves with clear animation rather than dense text panels. On 1XROLL we describe how wilds can reshape a spin’s reading and how free-game stretches change the board’s tempo without promising outcomes. The title rewards players who watch symbol hierarchy—what carries the theme versus what merely fills—and who take a moment to learn autoplay and speed controls before stacking sessions. Because PG Soft designs for thumbs, buttons sit within comfortable reach; still, mis-taps happen when features flash. Our page stays educational: structure, pacing, and what to expect visually. Pair it with the Fortune Tiger guide for a slower walkthrough of board states and responsible session tips. Festive golds can soften risk perception, so keep entertainment budgets separate and end while you can still explain the last feature. Nothing here invents RTP, lucky hours, or player counters—only craft notes for clearer discovery.",
      zh: "Fortune Tiger 为竖屏游玩打造：动物美术醒目、界面对比强，特色时刻用清晰动画宣告，而非密密麻麻的文字面板。1XROLL 说明百搭如何改变一局的读法，以及免费游戏如何改写盘面节奏，但不承诺结果。作品奖励会观察符号层级——哪些承载主题、哪些只是填充——并在连开会话前先熟悉自动与加速控件的玩家。PG Soft 为拇指设计，按钮多在舒适范围；特色闪动时仍可能误触。本页保持教育向：结构、节奏与视觉预期。可搭配招财虎攻略，更慢地走过盘面状态与负责任游玩提示。节庆金色会软化风险感知，请分离娱乐预算，并在仍能解释上一次特色时结束。此处不编造返还率、幸运时段或玩家计数——只有更清晰的发现工艺笔记。"
    },
    howToPlay: {
      en: "Set a stake you are comfortable with, spin the reels, and watch for wilds or feature cues. When a free-game sequence begins, let animations finish before changing settings. Use the paytable and rules panel to confirm symbol roles—never rely on rumor charts.",
      zh: "设定可承受的注额后旋转，留意百搭与特色提示。进入免费游戏时，等动画结束再改设置。用赔付表与规则面板确认符号角色，切勿依赖传闻图表。"
    },
    features: {
      en: ["Portrait layout", "Tiger-themed wild moments", "Free-game bursts", "Touch-first controls"],
      zh: ["竖屏布局", "老虎主题百搭时刻", "短促免费游戏", "触控优先操控"]
    },
    imageGradient: ["#f59e0b", "#b45309"]
  },
  {
    id: "mahjong-ways-2",
    slug: "mahjong-ways-2",
    image: "/games/mahjong-ways-2.webp",
    name: "Mahjong Ways 2",
    providerSlug: "pg-soft",
    category: "slots",
    status: "featured",
    shortDescription: {
      en: "Tile-inspired cascading play where matching sets and wild help keep the board in motion.",
      zh: "麻将意象的消除玩法，成牌与百搭推动盘面持续运动。"
    },
    description: {
      en: "Mahjong Ways 2 translates familiar tile aesthetics into a cascade-friendly slot grid. Instead of treating symbols as anonymous icons, the game leans on mahjong readability so pattern recognition feels natural. 1XROLL’s coverage explains how cascades chain, how wilds assist incomplete lines of sight, and how free games alter the density of helpful tiles. We skip invented volatility scores. The pleasure of the title is visual literacy: learning which tiles matter when the board is noisy. Mobile players should enable stable brightness—tile edges matter—and avoid rushing past the rules overlay on first load. Cross-link our dedicated guide for board-reading drills and session pacing advice that stays free of fake math claims. Compared with Sweet Bonanza’s candy bombs, this dialect uses tile grammar; both teach cascade attention without requiring identical fantasies.",
      zh: "Mahjong Ways 2 把熟悉的牌面美学转成适合连消的老虎机网格。符号不是匿名图标，而是借麻将可读性让辨识更自然。1XROLL 说明连消如何接续、百搭如何补足视线，以及免费游戏如何改变有用牌的密度。我们跳过虚构波动分数。乐趣在于视觉识读：盘面嘈杂时分清哪些牌重要。手机玩家宜保持稳定亮度——牌边很重要——并避免首次加载时急着关掉规则层。可交叉阅读专属攻略，做读盘练习与会话节奏建议，且不涉及虚假数学宣称。相较 Sweet Bonanza 的糖果炸弹，这种方言用的是牌面语法；两者都教授连消注意力，却不必共享同一套幻想。"
    },
    howToPlay: {
      en: "Spin to start cascades. After each collapse, new tiles drop in; features may add wilds or extra sequences. Open the info panel to see how wins are evaluated on the grid before using turbo modes.",
      zh: "旋转启动连消；每次塌落后新牌落入，特色可能加入百搭或额外序列。开启加速前，先在信息面板看清网格如何结算。"
    },
    features: {
      en: ["Cascade chains", "Mahjong tile art", "Wild assistance", "Free-game density shifts"],
      zh: ["连消链条", "麻将牌面美术", "百搭辅助", "免费游戏密度变化"]
    },
    imageGradient: ["#22c55e", "#166534"]
  },
  {
    id: "lucky-neko",
    slug: "lucky-neko",
    image: "/games/lucky-neko.webp",
    name: "Lucky Neko",
    providerSlug: "pg-soft",
    category: "slots",
    status: "new",
    shortDescription: {
      en: "Cat-themed vertical slot with charming animation and approachable feature pacing.",
      zh: "猫咪主题竖屏老虎机，动画亲切，特色节奏好上手。"
    },
    description: {
      en: "Lucky Neko keeps the tone light: beckoning-cat imagery, soft color accents, and features that arrive with playful motion rather than aggressive screen shake. 1XROLL describes symbol roles, how free spins are framed in the UI, and why the title suits shorter evening sessions. No RTP invention, no lucky-hour myths—only structure and feel. If you like PG Soft’s portrait craft but want a gentler mood than adventure-heavy titles, Neko is a natural stop. Read the paytable once; the rest is watching how wilds and scatters are telegraphed. Use it as a calm contrast night against Wild Bandito’s sharper outlaw energy within the same studio family.",
      zh: "Lucky Neko 气质轻松：招财猫意象、柔和强调色，特色以俏皮动效登场而非激烈震屏。1XROLL 说明符号角色、免费旋转在界面中的呈现，以及为何适合较短的晚间会话。不编造返还率，也没有幸运时段神话——只有结构与手感。若喜欢 PG Soft 竖屏工艺、又想要比冒险向作品更柔的情绪，Neko 是自然一站。赔付表读一次即可，其余是观察百搭与散布如何被提示。可在同一工作室家族内，把它当作对照 Wild Bandito 更锐亡命徒能量的冷静之夜。"
    },
    howToPlay: {
      en: "Choose a stake, spin, and follow on-screen prompts when a feature begins. Pause autoplay if animations obscure buttons.",
      zh: "选好注额后旋转，特色开始时跟随屏上提示。若动画挡住按钮，暂停自动旋转。"
    },
    features: {
      en: ["Neko theme", "Portrait UI", "Playful feature cues", "Approachable rules"],
      zh: ["招财猫主题", "竖屏界面", "俏皮特色提示", "好上手规则"]
    },
    imageGradient: ["#fb7185", "#9f1239"]
  },
  {
    id: "wild-bandito",
    slug: "wild-bandito",
    image: "/games/wild-bandito.webp",
    name: "Wild Bandito",
    providerSlug: "pg-soft",
    category: "slots",
    shortDescription: {
      en: "Desert outlaw energy with wild-centric moments and a punchy free-spin chapter.",
      zh: "荒漠亡命徒气质，百搭戏份重，免费旋转篇章有冲击力。"
    },
    description: {
      en: "Wild Bandito trades soft festivity for dust, masks, and sharper contrast. Mechanically it still sits in PG Soft’s touch-friendly family, but the fantasy framing is more adventurous. 1XROLL notes how wilds drive highlight moments and how the free-spin chapter changes anticipation. We keep claims grounded: what you see on the reels, not invented progressive meters. Useful for players comparing theme intensity inside one studio’s catalogue. Keep brightness honest outdoors—high contrast art can still wash out—and review wild transformation notes before turbo play so animations do not outrun comprehension.",
      zh: "Wild Bandito 用沙尘、面具与更锐对比取代柔和节庆感。机制仍属 PG Soft 触控友好家族，幻想包装更偏冒险。1XROLL 记录百搭如何驱动高光，以及免费旋转篇章如何改变期待。主张保持落地：你在转轮上看到的，而非虚构累计表。适合在同一工作室目录内比较主题强度的玩家。户外请保持真实亮度——高对比美术仍可能过曝——并在加速前复习百搭变形说明，以免动画快过理解。"
    },
    howToPlay: {
      en: "Spin, track wild behavior, and enter free spins when offered. Review the rules panel for wild transformation notes.",
      zh: "旋转并观察百搭行为，出现免费旋转时进入。到规则面板查看百搭变形说明。"
    },
    features: {
      en: ["Outlaw theme", "Wild-focused highlights", "Free-spin chapter", "High-contrast art"],
      zh: ["亡命徒主题", "百搭高光", "免费旋转篇章", "高对比美术"]
    },
    imageGradient: ["#d97706", "#44403c"]
  },
  {
    id: "treasures-of-aztec",
    slug: "treasures-of-aztec",
    image: "/games/treasures-of-aztec.webp",
    name: "Treasures of Aztec",
    providerSlug: "pg-soft",
    category: "slots",
    shortDescription: {
      en: "Temple-adventure framing with cascading discoveries and layered free-game presentation.",
      zh: "神庙冒险包装，连消发现感强，免费游戏呈现有层次。"
    },
    description: {
      en: "Treasures of Aztec wraps cascade-friendly play in stone, gold, and exploration motifs. 1XROLL’s description centers on how cascades reveal new opportunities and how free games are staged as a distinct chapter. We do not invent temple jackpots or hidden RTP. The page helps you decide if you want adventure cosmetics on top of PG Soft’s familiar mobile ergonomics. Read symbol tiers before a long commute session; temple palettes can hide low-contrast garnish on older screens. Pair with Temple Tumble from Relax if you want a spatial-puzzle cousin outside this studio.",
      zh: "Treasures of Aztec 用石材、金色与探索意象包裹适合连消的玩法。1XROLL 聚焦连消如何带来新机会，以及免费游戏如何被呈现为独立篇章。不编造神庙奖池或隐藏返还率。本页帮你判断是否要在 PG Soft 熟悉的手机人机上叠加冒险外观。长通勤会话前先读符号层级；神庙配色可能在旧屏上藏住低对比点缀。若想要工作室之外的空间解谜近亲，可搭配 Relax 的 Temple Tumble。"
    },
    howToPlay: {
      en: "Spin to trigger cascades; watch for feature entry cues; use info screens to learn symbol tiers before long sessions.",
      zh: "旋转触发连消；留意特色入口提示；长会话前用信息屏了解符号层级。"
    },
    features: {
      en: ["Adventure theme", "Cascade discoveries", "Layered free games", "Portrait craft"],
      zh: ["冒险主题", "连消发现", "分层免费游戏", "竖屏工艺"]
    },
    imageGradient: ["#ca8a04", "#365314"]
  },
  {
    id: "gates-of-olympus",
    slug: "gates-of-olympus",
    image: "/games/gates-of-olympus.webp",
    name: "Gates of Olympus",
    providerSlug: "pragmatic-play",
    category: "slots",
    status: "featured",
    shortDescription: {
      en: "Mythic tumbling grid where multipliers can stamp the board during energetic cascade sequences.",
      zh: "神话下落网格，连消过程中倍率印记可落在盘面上。"
    },
    description: {
      en: "Gates of Olympus is a showcase for Pragmatic’s cascade-and-multiplier vocabulary. Symbols tumble, wins clear, and multipliers may arrive as dramatic stamps rather than quiet math footnotes. 1XROLL explains the loop in plain language: what a cascade is, how multipliers display, and how free spins change the frequency of spectacle—without inventing RTP or guaranteed god drops. The title teaches players to watch the whole grid, not a single payline. Pair with our Olympus guide for a structured tour of symbol roles and calm session habits when animations intensify. Once the grammar feels familiar, Starlight Princess becomes an easier costume change rather than a new language.",
      zh: "Gates of Olympus 展示 Pragmatic 的连消与倍率语汇。符号下落、中奖清除，倍率常以戏剧化印记出现，而非安静的数学脚注。1XROLL 用白话解释循环：什么是连消、倍率如何显示、免费旋转如何改变奇观频率——不编造返还率或保证神降。作品教会玩家看整盘，而非单条赔付线。可搭配奥林匹斯攻略，系统浏览符号角色，并在动画变激烈时保持冷静会话习惯。语法熟悉后，Starlight Princess 更像换装，而不是新语言。"
    },
    howToPlay: {
      en: "Spin to start tumbles. Note any multiplier stamps, then allow the sequence to resolve. Enter free spins when scatters invite you; read the rules for multiplier behavior before turbo play.",
      zh: "旋转开始下落。留意倍率印记，让序列结算完。散布邀请时进入免费旋转；开启加速前先读规则中的倍率行为。"
    },
    features: {
      en: ["Tumbling grid", "On-grid multipliers", "Mythic presentation", "Free-spin spectacle"],
      zh: ["下落网格", "盘面倍率", "神话呈现", "免费旋转奇观"]
    },
    imageGradient: ["#6366f1", "#1e1b4b"]
  },
  {
    id: "sweet-bonanza",
    slug: "sweet-bonanza",
    image: "/games/sweet-bonanza.webp",
    name: "Sweet Bonanza",
    providerSlug: "pragmatic-play",
    category: "slots",
    status: "hot",
    shortDescription: {
      en: "Candy cascade classic with playful bombs and free-spin rounds that lean into multiplier chaos.",
      zh: "糖果连消经典，俏皮炸弹与偏向倍率热闹的免费旋转。"
    },
    description: {
      en: "Sweet Bonanza wraps serious cascade feel in pure confection art. Fruit-candy symbols, bomb-style clears, and free spins that can feel busy are the hallmarks. 1XROLL stays honest: we describe what bombs do on screen and how free games change pacing, never fabricating return percentages. The game is a literacy tool for tumble slots—once you understand Bonanza’s board clears, other cascade titles feel less alien. Use moderate spin speeds until you can track bomb placements without squinting. Compare with Mahjong Ways 2 when you want tile grammar instead of candy grammar in the same week of study.",
      zh: "Sweet Bonanza 用纯糖果美术包裹认真的连消手感。水果糖符号、炸弹式清除，以及可能显得热闹的免费旋转是标志。1XROLL 保持诚实：说明炸弹在屏上做什么、免费游戏如何改节奏，绝不捏造返还百分比。它是下落老虎机的识读工具——一旦理解 Bonanza 的盘面清除，其他连消作品就不那么陌生。在能不眯眼跟上炸弹位置前，用中等旋转速度。同一周学习若想换牌面语法而非糖果语法，可比较 Mahjong Ways 2。"
    },
    howToPlay: {
      en: "Spin, watch cascades remove winning clusters, and note bomb effects when they appear. Free spins may add multiplier behavior—confirm in the paytable.",
      zh: "旋转，观察连消移除中奖簇，出现炸弹时留意效果。免费旋转可能加入倍率行为——以赔付表为准。"
    },
    features: {
      en: ["Candy cascades", "Bomb clears", "Free-spin multipliers", "Bright mobile art"],
      zh: ["糖果连消", "炸弹清除", "免费旋转倍率", "明亮手机美术"]
    },
    imageGradient: ["#ec4899", "#7c3aed"]
  },
  {
    id: "starlight-princess",
    slug: "starlight-princess",
    image: "/games/starlight-princess.webp",
    name: "Starlight Princess",
    providerSlug: "pragmatic-play",
    category: "slots",
    shortDescription: {
      en: "Anime-styled companion to cascade-multiplier play with luminous free-spin presentation.",
      zh: "动漫风格的连消倍率伙伴作，免费旋转呈现明亮。"
    },
    description: {
      en: "Starlight Princess re-skins the cascade-multiplier fantasy with anime character direction and glowing accents. If you already understand Olympus-style tumbles, this title feels like a familiar language in a new costume. 1XROLL highlights UI differences and free-spin framing rather than inventing separate math myths. Good for players who prefer character-led art over marble gods. Keep the same calm-eye habits: finish sequences before changing stake, and treat free spins as a dense paragraph rather than a sacred obligation to continue all night.",
      zh: "Starlight Princess 用动漫角色方向与发光强调色重绘连消倍率幻想。若已理解奥林匹斯式下落，这部像熟悉语言换了新戏服。1XROLL 强调界面差异与免费旋转包装，而非编造另一套数学神话。适合偏好角色美术而非大理石神像的玩家。保持同样的冷静注视习惯：序列结束再改注额，并把免费旋转当作密段落，而非必须通宵继续的神圣义务。"
    },
    howToPlay: {
      en: "Play like other tumble-multiplier slots: spin, resolve cascades, watch for multiplier marks, enter free spins when prompted.",
      zh: "如其他下落倍率老虎机：旋转、结算连消、留意倍率标记，提示出现时进入免费旋转。"
    },
    features: {
      en: ["Anime theme", "Cascade play", "Multiplier marks", "Luminous free spins"],
      zh: ["动漫主题", "连消玩法", "倍率标记", "明亮免费旋转"]
    },
    imageGradient: ["#a855f7", "#db2777"]
  },
  {
    id: "big-bass-bonanza",
    slug: "big-bass-bonanza",
    image: "/games/big-bass-bonanza.webp",
    name: "Big Bass Bonanza",
    providerSlug: "pragmatic-play",
    category: "slots",
    shortDescription: {
      en: "Fishing-themed slot series entry with character collection energy during free games.",
      zh: "钓鱼主题系列作，免费游戏中带有角色收集张力。"
    },
    description: {
      en: "Big Bass Bonanza mixes reel play with a fishing fantasy—collectible moments and free-game drama around the angler character. 1XROLL explains the fantasy framing and feature flow without inventing catch tables or RTP. Useful if you like theme continuity across a series and want to know what the free spins are actually doing on screen. Do not confuse this reel fantasy with Jili fishing rooms: one is spin-led collection theater; the other is aiming-led seascape play. Keep that distinction when planning a mixed evening.",
      zh: "Big Bass Bonanza 把转轮玩法与钓鱼幻想混合——收集时刻，以及围绕钓手角色的免费游戏戏剧。1XROLL 解释幻想包装与特色流程，不编造渔获表或返还率。若喜欢系列主题连续性，并想弄清免费旋转在屏上实际做什么，很有用。不要把这种转轮幻想与 Jili 捕鱼房混淆：一个是旋转主导的收集剧场；另一个是瞄准主导的海景玩法。规划混合夜晚时保持区分。"
    },
    howToPlay: {
      en: "Spin base games, watch for free-spin triggers, and follow collection cues during features. Check rules for how character symbols interact.",
      zh: "旋转基础游戏，留意免费旋转触发，特色中跟随收集提示。查看规则了解角色符号如何互动。"
    },
    features: {
      en: ["Fishing theme", "Character collection feel", "Free-game focus", "Series continuity"],
      zh: ["钓鱼主题", "角色收集感", "侧重免费游戏", "系列连续性"]
    },
    imageGradient: ["#0284c7", "#14532d"]
  },
  {
    id: "the-dog-house",
    slug: "the-dog-house",
    image: "/games/the-dog-house.webp",
    name: "The Dog House",
    providerSlug: "pragmatic-play",
    category: "slots",
    shortDescription: {
      en: "Kennel comedy slot with sticky-wild personality during free spins.",
      zh: "狗舍喜剧老虎机，免费旋转中粘性百搭个性鲜明。"
    },
    description: {
      en: "The Dog House keeps rules approachable: colorful pups, wilds that can stick in free spins, and a tone that stays light. 1XROLL covers how sticky wilds change board reading and why the title is a gentle on-ramp to Pragmatic feature language. No invented volatility badges. After sticky wilds make sense here, denser cascade titles feel less intimidating because you already practice watching what persists between spins.",
      zh: "The Dog House 规则好懂：彩色小狗、免费旋转中可粘住的百搭，气质轻松。1XROLL 说明粘性百搭如何改变读盘，以及为何它是进入 Pragmatic 特色语汇的温和坡道。没有虚构波动徽章。在这里搞懂粘性百搭后，更密的连消作品会显得不那么吓人，因为你已练习观察旋转之间保留的内容。"
    },
    howToPlay: {
      en: "Spin, trigger free spins when available, and note which wilds remain between free-spin rounds.",
      zh: "旋转，可用时触发免费旋转，并留意哪些百搭在免费旋转间保留。"
    },
    features: {
      en: ["Dog comedy theme", "Sticky wild free spins", "Simple rule sheet", "Colorful symbols"],
      zh: ["狗狗喜剧主题", "粘性百搭免费旋转", "简单规则", "色彩符号"]
    },
    imageGradient: ["#f97316", "#7c2d12"]
  },
  {
    id: "crazy-time",
    slug: "crazy-time",
    image: "/games/crazy-time.webp",
    name: "Crazy Time",
    providerSlug: "evolution",
    category: "live-casino",
    status: "hot",
    shortDescription: {
      en: "Live game-show wheel with bonus stages, hosts, and layered top-side betting options.",
      zh: "真人游戏秀转轮，含奖励关卡、主持与多层顶部投注选项。"
    },
    description: {
      en: "Crazy Time is Evolution’s flagship chaos-with-structure show: a main wheel, named bonus games, and a UI that can feel busy until you learn the strip layout. 1XROLL teaches betting-window timing, what each bonus name generally implies about presentation, and how to avoid chasing every top slot. We do not invent player counts or payout schedules. Watch a few rounds without betting to learn camera language, then engage with a plan for session length. Side bets are optional color, not obligatory quests—pick at most one secondary interest per round while learning.",
      zh: "Crazy Time 是 Evolution 旗舰的「有结构的热闹」秀：主转轮、具名奖励游戏，以及学会顶栏布局前可能显得拥挤的界面。1XROLL 教授投注窗时机、各奖励名大致意味着怎样的呈现，以及如何避免追每一个顶部格子。不编造玩家数或出款时间表。先不下注看几局学镜头语言，再带着会话时长计划参与。边注是可选色彩，不是必做任务——学习阶段每局最多选一个次要兴趣。"
    },
    howToPlay: {
      en: "Place chips before the timer ends, choose main and optional top bets intentionally, then watch the wheel and any bonus stage resolve fully before the next round.",
      zh: "在计时结束前放筹码，有意识地选择主注与可选顶部注，然后完整观看转轮与任一奖励关结算，再进入下一局。"
    },
    features: {
      en: ["Live hosts", "Bonus mini-games", "Top-slot side bets", "Multi-camera stage"],
      zh: ["真人主持", "奖励小游戏", "顶部边注", "多机位舞台"]
    },
    imageGradient: ["#eab308", "#dc2626"]
  },
  {
    id: "lightning-roulette",
    slug: "lightning-roulette",
    image: "/games/lightning-roulette.webp",
    name: "Lightning Roulette",
    providerSlug: "evolution",
    category: "live-casino",
    status: "featured",
    shortDescription: {
      en: "Live roulette with randomly electrified numbers that reshape a round’s spotlight.",
      zh: "真人轮盘，随机「闪电」号码改写单局聚光灯。"
    },
    description: {
      en: "Lightning Roulette keeps classic wheel geometry but adds lightning-struck numbers that receive special treatment in the broadcast narrative. 1XROLL explains table layout, when lightning is revealed relative to betting close, and how the UI highlights struck pockets—without inventing hit rates. Ideal if you know roulette basics and want to understand the modifier layer calmly. Decide chip plans at the start of the window; last-second lunges cause mis-taps onto unintended side bets.",
      zh: "Lightning Roulette 保留经典轮盘几何，但加入在转播叙事中获特殊对待的闪电号码。1XROLL 说明桌面布局、闪电相对投注截止的揭示时机，以及界面如何高亮被击中袋——不编造命中率。若已懂轮盘基础、想冷静理解修饰层，很合适。在窗口开始时决定筹码计划；最后一秒扑击会导致误触不想要的边注。"
    },
    howToPlay: {
      en: "Bet inside the window, note lightning numbers when shown, and wait for the ball to settle before reading results.",
      zh: "在窗口内下注，显示时留意闪电号，待球落下再读结果。"
    },
    features: {
      en: ["Live roulette wheel", "Lightning number modifiers", "Clear bet timer", "Studio presentation"],
      zh: ["真人轮盘", "闪电号码修饰", "清晰投注计时", "工作室呈现"]
    },
    imageGradient: ["#3b82f6", "#1e3a8a"]
  },
  {
    id: "monopoly-live",
    slug: "monopoly-live",
    image: "/games/monopoly-live.webp",
    name: "Monopoly Live",
    providerSlug: "evolution",
    category: "live-casino",
    shortDescription: {
      en: "Board-game theatrical live show with 3D board walks and host-led bonus routes.",
      zh: "桌游舞台化真人秀，含 3D 棋盘行走与主持引导的奖励路线。"
    },
    description: {
      en: "Monopoly Live fuses a wheel round with digital board fantasy. Hosts, 3D tokens, and property-themed bonus paths create a longer emotional arc than a single roulette spin. 1XROLL maps the flow: base result, when a board segment begins, and how UI panels describe possible routes—still without fake odds. Give yourself time; this is not a three-second crash loop. Charge your phone before long walks if you watch on mobile, and do not schedule a twelve-minute arc into a five-minute break.",
      zh: "Monopoly Live 把转轮回合与数字棋盘幻想结合。主持、3D 棋子与地产主题奖励路径，情绪弧比单次轮盘旋转更长。1XROLL 梳理流程：基础结果、棋盘段何时开始、界面如何描述可能路线——依然没有假赔率。给自己留时间；这不是三秒飞升循环。若用手机观看，长行走前先充电，也不要把十二分钟弧线排进五分钟休息。"
    },
    howToPlay: {
      en: "Bet before close, resolve the wheel moment, then follow board instructions if a bonus route opens. Skip rushing chip changes mid-animation.",
      zh: "截止前下注，完成转轮时刻，若开启奖励路线则跟随棋盘指示。动画中途勿急着改筹码。"
    },
    features: {
      en: ["Board fantasy presentation", "3D walk segments", "Host guidance", "Extended bonus arcs"],
      zh: ["棋盘幻想呈现", "3D 行走段落", "主持引导", "延长奖励弧线"]
    },
    imageGradient: ["#ef4444", "#1d4ed8"]
  },
  {
    id: "aviator",
    slug: "aviator",
    image: "/games/aviator.webp",
    name: "Aviator",
    providerSlug: "spribe",
    category: "fast-games",
    status: "hot",
    shortDescription: {
      en: "Crash-style flight where you exit before the plane flies away—simple, tense, mobile-native.",
      zh: "飞升玩法：在飞机飞走前离开——简单、紧绷、原生适合手机。"
    },
    description: {
      en: "Aviator compresses risk into a climbing multiplier curve. Your decision is when to cash out—not how to arrange paylines. 1XROLL emphasizes timer discipline, UI placement of the exit control, and why auto-cashout settings deserve a sober review. We invent no edge percentages. Excellent literacy title for the entire fast-games category. Because rounds are cheap in time, set a round count before opening the client; fifty rounds can vanish inside a podcast episode without feeling like a session.",
      zh: "Aviator 把风险压进一条爬升倍率曲线。决策是何时兑现，而非如何排列赔付线。1XROLL 强调计时纪律、离开键的界面位置，以及为何自动兑现设置需要冷静检查。我们不编造优势百分比。作为整个快速游戏分类的识读范本很合适。由于回合耗时短，打开客户端前先设局数；五十局能消失在一集播客里却还不觉得像一次会话。"
    },
    howToPlay: {
      en: "Place a bet, watch the multiplier rise, cash out before the round crashes. Optional auto-cashout should be set deliberately.",
      zh: "下注后看倍率上升，在回合坠毁前兑现。可选自动兑现须有意识地设定。"
    },
    features: {
      en: ["Crash multiplier", "Manual or auto cash-out", "Minimal UI", "Short rounds"],
      zh: ["飞升倍率", "手动或自动兑现", "极简界面", "短回合"]
    },
    imageGradient: ["#f97316", "#0f172a"]
  },
  {
    id: "goal",
    slug: "goal",
    image: "/games/goal.webp",
    name: "Goal",
    providerSlug: "spribe",
    category: "fast-games",
    shortDescription: {
      en: "Quick football-flavored challenge rounds with immediate win/lose clarity.",
      zh: "足球风味的快速挑战回合，胜负即时清晰。"
    },
    description: {
      en: "Goal packages a sports fantasy into Spribe’s short-round philosophy. You pick a path of risk, take the shot metaphor, and see a clean result. 1XROLL describes decision points and pacing versus Aviator’s continuous curve—still without fake sportsbook odds. Nice palate cleanser between longer slot or live sessions. Review difficulty steps in the rules so you are choosing challenge level intentionally rather than tapping defaults mid-fatigue.",
      zh: "Goal 把体育幻想装进 Spribe 的短回合哲学。你选择风险路径，完成射门隐喻，看到干净结果。1XROLL 说明决策点，以及相对 Aviator 连续曲线的节奏差异——依然没有假体育赔率。适合在较长老虎机或真人会话之间换换口味。在规则中复习难度阶梯，以便有意识选择挑战等级，而不是在疲劳中点默认。"
    },
    howToPlay: {
      en: "Select your challenge parameters, confirm the stake, and resolve the shot sequence. Review rules for how difficulty steps work.",
      zh: "选择挑战参数，确认注额，完成射门序列。查看规则了解难度阶梯如何运作。"
    },
    features: {
      en: ["Sports theme", "Discrete challenge steps", "Fast resolution", "Light client"],
      zh: ["体育主题", "离散挑战阶梯", "快速结算", "轻客户端"]
    },
    imageGradient: ["#22c55e", "#14532d"]
  },
  {
    id: "mines",
    slug: "mines",
    image: "/games/mines.webp",
    name: "Mines",
    providerSlug: "spribe",
    category: "fast-games",
    status: "new",
    shortDescription: {
      en: "Tile-reveal puzzle where each safe pick raises tension until you cash out or hit a mine.",
      zh: "翻格谜题：每次安全翻开都升高张力，直到兑现或踩雷。"
    },
    description: {
      en: "Mines is a grid of hidden threats. You choose how many mines to face, flip tiles, and decide when the multiplier on safe reveals is enough. 1XROLL stresses intentional mine counts and cash-out discipline—no invented probability tables. Great for players who like discrete decisions more than spinning reels. Configure mine count when calm; raising it after a near-miss is a common fatigue trap our mobile guide warns about.",
      zh: "Mines 是一张藏着威胁的网格。你选择面对多少雷、翻格，并决定安全翻开带来的倍率何时够了。1XROLL 强调有意识的埋雷数与兑现纪律——没有虚构概率表。适合喜欢离散决策多于转轮的玩家。在冷静时配置埋雷数；几乎错过后再提高是常见疲劳陷阱，我们的移动攻略对此有提醒。"
    },
    howToPlay: {
      en: "Set mine count and stake, reveal tiles one by one, cash out anytime before hitting a mine.",
      zh: "设定埋雷数与注额，逐格翻开，踩雷前可随时兑现。"
    },
    features: {
      en: ["Adjustable mine count", "Tile reveals", "Cash-out control", "Puzzle tension"],
      zh: ["可调埋雷数", "翻格", "兑现控制", "谜题张力"]
    },
    imageGradient: ["#64748b", "#0f172a"]
  },
  {
    id: "fortune-gems",
    slug: "fortune-gems",
    image: "/games/fortune-gems.webp",
    name: "Fortune Gems",
    providerSlug: "jili",
    category: "slots",
    shortDescription: {
      en: "Gem-forward slot with bright arcade feedback and straightforward feature meters.",
      zh: "宝石向老虎机，街机反馈明亮，特色进度直观。"
    },
    description: {
      en: "Fortune Gems leans into jewel colors and punchy hit sounds. Features are announced with meters and bursts rather than multi-page lore. 1XROLL describes the loop and UI hotspots for small screens, omitting invented RTP. A solid Jili on-ramp if you want clarity over complexity. Clean the screen before play—smudges hide gem boundaries more than players expect on bright palettes.",
      zh: "Fortune Gems 倚重宝石色与利落击中音。特色用进度条与爆发宣告，而非多页设定。1XROLL 说明循环与小屏热点区域，省略虚构返还率。若要清晰多于复杂，是稳妥的 Jili 入门。游玩前擦屏——在明亮配色上，污渍比玩家预期更容易藏住宝石边界。"
    },
    howToPlay: {
      en: "Spin, watch gem symbols and meters, enter features when filled or triggered per the rules panel.",
      zh: "旋转，观察宝石符号与进度，按规则面板在填满或触发时进入特色。"
    },
    features: {
      en: ["Gem theme", "Arcade audio", "Visible meters", "Simple loop"],
      zh: ["宝石主题", "街机音效", "可见进度", "简单循环"]
    },
    imageGradient: ["#06b6d4", "#4c1d95"]
  },
  {
    id: "super-ace",
    slug: "super-ace",
    image: "/games/super-ace.webp",
    name: "Super Ace",
    providerSlug: "jili",
    category: "slots",
    status: "featured",
    shortDescription: {
      en: "Card-styled reel fantasy with combo-friendly presentation and energetic free games.",
      zh: "卡牌风转轮幻想，连击感呈现，免费游戏有能量。"
    },
    description: {
      en: "Super Ace dresses slot play in playing-card swagger. Combos and free-game bursts keep the screen lively. 1XROLL maps symbol tiers and feature entry without fake poker odds. Helpful if you like card aesthetics but still want a pure slot loop. After Super Ace, Endorphina’s Lucky Streak 3 offers another card-adjacent mood with a more illustration-led European identity—useful for theme shopping without math myths.",
      zh: "Super Ace 用扑克气场包装老虎机。连击与免费游戏爆发让屏幕保持活跃。1XROLL 梳理符号层级与特色入口，没有假扑克赔率。若喜欢卡牌美学又要纯转轮循环，很有帮助。在 Super Ace 之后，Endorphina 的 Lucky Streak 3 提供另一种近卡牌情绪，但更偏欧洲插画识别——适合在没有数学神话的情况下按主题选游。"
    },
    howToPlay: {
      en: "Spin the card-themed reels, watch for combo cues, and follow free-spin instructions when they appear.",
      zh: "旋转卡牌主题转轮，留意连击提示，出现免费旋转时按说明进行。"
    },
    features: {
      en: ["Card motif", "Combo presentation", "Energetic free games", "Clear UI"],
      zh: ["卡牌意象", "连击呈现", "有能量的免费游戏", "清晰界面"]
    },
    imageGradient: ["#dc2626", "#1c1917"]
  },
  {
    id: "boxing-king",
    slug: "boxing-king",
    image: "/games/boxing-king.webp",
    name: "Boxing King",
    providerSlug: "jili",
    category: "slots",
    shortDescription: {
      en: "Sports-combat themed slot with punchy animations and meter-led feature drama.",
      zh: "运动格斗主题老虎机，动画有冲击力，进度条带动特色戏剧。"
    },
    description: {
      en: "Boxing King sells impact: gloves, ropes, and hit feedback you can hear. Meters and feature rounds create a bout-like rhythm. 1XROLL sticks to structure and responsible pacing notes—no invented championship prizes. Lower volume on long sessions if the mix fatigues you; arcade punch should not become pressure to continue after your time box ends.",
      zh: "Boxing King 贩售冲击感：手套、绳圈与听得见的击中反馈。进度与特色回合形成比赛般节奏。1XROLL 只谈结构与负责任节奏——没有虚构冠军奖金。长会话若混音让你疲劳可降低音量；街机冲击不应变成时间盒结束后仍继续的压力。"
    },
    howToPlay: {
      en: "Spin, build or watch meters per the paytable, and enter feature rounds when prompted.",
      zh: "旋转，按赔付表积累或观察进度，提示时进入特色回合。"
    },
    features: {
      en: ["Boxing theme", "Impact animations", "Meter drama", "Feature bouts"],
      zh: ["拳击主题", "冲击动画", "进度戏剧", "特色回合"]
    },
    imageGradient: ["#f43f5e", "#111827"]
  },
  {
    id: "mega-fishing",
    slug: "mega-fishing",
    image: "/games/mega-fishing.webp",
    name: "Mega Fishing",
    providerSlug: "jili",
    category: "fishing",
    status: "hot",
    shortDescription: {
      en: "Shared-room fishing shooter with tiered weapons and boss fish spectacles.",
      zh: "共享房间捕鱼射击，武器分档，Boss 鱼场面夸张。"
    },
    description: {
      en: "Mega Fishing is an active aiming room: choose firepower, track schools, and decide when to spend special shots on bosses. 1XROLL explains room etiquette basics, weapon tiers, and why chasing every boss can empty a budget fast—without inventing drop rates. Ideal if you want skillful aiming over reel spins. Stretch fingers between rooms; aiming fatigue is real. Leave when your session plan ends—not when a boss appears.",
      zh: "Mega Fishing 是主动瞄准房间：选择火力、追踪鱼群，决定何时对 Boss 使用特殊弹。1XROLL 说明房间基本礼仪、武器档位，以及为何追每条 Boss 会让预算见底——不编造掉落率。若想要比转轮更偏技巧瞄准，很理想。房间之间活动手指；瞄准疲劳是真实的。按会话计划离开——而不是看见 Boss 才走。"
    },
    howToPlay: {
      en: "Enter a room, select a weapon tier, aim at targets, and use specials intentionally. Leave when your session plan ends—not when a boss appears.",
      zh: "进入房间，选择武器档，瞄准目标，有意识地使用特殊弹。按会话计划离开——而不是看见 Boss 才走。"
    },
    features: {
      en: ["Multiplayer room feel", "Weapon tiers", "Boss targets", "Arcade aiming"],
      zh: ["多人房间感", "武器分档", "Boss 目标", "街机瞄准"]
    },
    imageGradient: ["#0ea5e9", "#075985"]
  },
  {
    id: "happy-fishing",
    slug: "happy-fishing",
    image: "/games/happy-fishing.webp",
    name: "Happy Fishing",
    providerSlug: "jili",
    category: "fishing",
    shortDescription: {
      en: "Lighter-toned fishing room with approachable weapon choices and colorful seascapes.",
      zh: "气质更轻松的捕鱼房，武器选择好上手，海景色彩明快。"
    },
    description: {
      en: "Happy Fishing softens the arcade fishing formula with brighter seas and a friendlier onboarding curve. 1XROLL covers aiming basics and special-shot timing for newcomers migrating from slots. No fabricated jackpot fish tables. Prefer Wi-Fi for video-heavy rooms when possible, and keep one entertainment wallet separate from daily-pay apps as our mobile guide recommends.",
      zh: "Happy Fishing 用更亮的海色与更友好的上手曲线软化街机捕鱼公式。1XROLL 为从老虎机转来的新人覆盖瞄准基础与特殊弹时机。没有虚构头奖鱼表。视频向房间尽可能用 Wi-Fi，并按移动攻略建议把娱乐钱包与日常支付应用分离。"
    },
    howToPlay: {
      en: "Pick a comfortable weapon level, practice on smaller fish, then attempt larger targets with a budget cap in mind.",
      zh: "选择舒适的武器等级，先在小鱼上练习，再带着预算上限尝试更大目标。"
    },
    features: {
      en: ["Colorful seascape", "Approachable weapons", "Special shots", "Room play"],
      zh: ["明快海景", "好上手武器", "特殊弹", "房间玩法"]
    },
    imageGradient: ["#38bdf8", "#0369a1"]
  },
  {
    id: "lucky-streak-3",
    slug: "lucky-streak-3",
    image: "/games/lucky-streak-3.webp",
    name: "Lucky Streak 3",
    providerSlug: "endorphina",
    category: "slots",
    shortDescription: {
      en: "Polished luck iconography with a compact feature set and strong illustration craft.",
      zh: "精致好运符号，特色集紧凑，插画工艺扎实。"
    },
    description: {
      en: "Lucky Streak 3 shows Endorphina’s preference for readable rules wrapped in stylish luck motifs—cards, charms, and clean typography. 1XROLL focuses on how quickly a new player can finish the rules skim and what the free-spin chapter changes. No fake streak guarantees. If you shop by mood first, this is the polished pole of the studio’s board opposite Riot’s grit.",
      zh: "Lucky Streak 3 体现 Endorphina 偏好：用时髦好运意象——卡牌、护符、干净字体——包裹可读规则。1XROLL 关注新人多久能读完规则，以及免费旋转篇章改变了什么。没有假连胜保证。若你先按情绪选游，这是工作室情绪板上与 Riot 粗粝相对的精致一极。"
    },
    howToPlay: {
      en: "Spin, learn wild and scatter roles from the paytable, and enjoy free spins when they trigger.",
      zh: "旋转，从赔付表学习百搭与散布角色，触发时享受免费旋转。"
    },
    features: {
      en: ["Luck motifs", "Compact rules", "Illustration-led UI", "Free spins"],
      zh: ["好运意象", "紧凑规则", "插画主导界面", "免费旋转"]
    },
    imageGradient: ["#eab308", "#7c3aed"]
  },
  {
    id: "riot",
    slug: "riot",
    image: "/games/riot.webp",
    name: "Riot",
    providerSlug: "endorphina",
    category: "slots",
    shortDescription: {
      en: "Stage-energy slot with raw visual attitude and an uncluttered mechanical core.",
      zh: "舞台能量老虎机，视觉态度粗粝，机制核心不臃肿。"
    },
    description: {
      en: "Riot trades polite luck charms for amplifiers and grit. The mechanical core stays approachable; the soundtrack and art do the heavy lifting. 1XROLL describes tone and feature brevity for players shopping by mood. Still no invented award lists. Lower volume if the mix is intense for long sessions—audio identity is a feature, not a command to overplay.",
      zh: "Riot 用音箱与粗粝感替换礼貌的好运护符。机制核心仍然好懂；配乐与美术承担重活。1XROLL 为按情绪选游的玩家描述基调与特色简洁度。依然没有虚构奖项清单。长会话若混音太猛可降低音量——音频识别是特色，不是多开的命令。"
    },
    howToPlay: {
      en: "Set stake, spin, trigger features as listed in rules. Lower volume if the mix is intense for long sessions.",
      zh: "设定注额后旋转，按规则触发特色。长会话若混音太猛可降低音量。"
    },
    features: {
      en: ["Rock stage mood", "Short feature list", "Bold art", "Strong audio identity"],
      zh: ["摇滚舞台情绪", "短特色列表", "大胆美术", "强烈音频识别"]
    },
    imageGradient: ["#f43f5e", "#18181b"]
  },
  {
    id: "money-train-2",
    slug: "money-train-2",
    image: "/games/money-train-2.webp",
    name: "Money Train 2",
    providerSlug: "relax-gaming",
    category: "slots",
    status: "featured",
    shortDescription: {
      en: "Western heist grid adventure with character actions and persistent free-spin map tension.",
      zh: "西部劫案网格冒险，角色行动与持续的免费旋转地图张力。"
    },
    description: {
      en: "Money Train 2 is less spin-and-smile and more learn-the-map. Characters can perform actions that reshape feature rounds, and persistence across free spins creates story-like tension. 1XROLL walks through what tends to persist versus reset, without inventing payout ladders. Read the guide-friendly paytable twice before turbo mode. Against Jili’s instant arcade hits, this title asks for map literacy and patience between character actions.",
      zh: "Money Train 2 少些「转了就笑」，多些「学会地图」。角色可执行改写特色回合的行动，免费旋转间的持续性制造故事般张力。1XROLL 梳理何为通常保留、何为重置，不编造派彩阶梯。开加速前把友好的赔付表读两遍。相对 Jili 的即时街机击中，这部要求地图识读与角色行动之间的耐心。"
    },
    howToPlay: {
      en: "Play base spins to reach the feature map, then resolve character actions carefully. Track what stays on the grid between free spins.",
      zh: "用基础旋转进入特色地图，然后仔细结算角色行动。追踪免费旋转之间盘面上保留的内容。"
    },
    features: {
      en: ["Heist characters", "Feature map", "Persistent elements", "High-craft animation"],
      zh: ["劫案角色", "特色地图", "持续性元素", "高完成度动画"]
    },
    imageGradient: ["#b45309", "#1c1917"]
  },
  {
    id: "temple-tumble",
    slug: "temple-tumble",
    image: "/games/temple-tumble.webp",
    name: "Temple Tumble",
    providerSlug: "relax-gaming",
    category: "slots",
    shortDescription: {
      en: "Spatial tumbling puzzle-slot where clearing blocks opens paths through ancient stone.",
      zh: "空间下落解谜式老虎机，清除方块以在古石中开路。"
    },
    description: {
      en: "Temple Tumble asks you to think spatially: tumbles clear stone, paths open, and free games can emphasize that puzzle logic. 1XROLL explains board reading for players coming from line-pay slots. No invented archaeology jackpots—just structure and feel. Pair with Treasures of Aztec if you want adventure cosmetics with a different studio’s cascade dialect in the same week.",
      zh: "Temple Tumble 要求空间思考：下落清除石块、道路打开，免费游戏可强化这种解谜逻辑。1XROLL 为从线赔老虎机转来的玩家解释读盘。没有虚构考古奖池——只有结构与手感。若同一周想要冒险外观但换一家工作室的连消方言，可搭配 Treasures of Aztec。"
    },
    howToPlay: {
      en: "Spin to tumble blocks, watch how clears create space, and enter free games when available to see altered board rules.",
      zh: "旋转使方块下落，观察清除如何创造空间，可用时进入免费游戏查看改变后的盘面规则。"
    },
    features: {
      en: ["Spatial clears", "Tumble physics", "Temple theme", "Puzzle-like boards"],
      zh: ["空间清除", "下落物理", "神庙主题", "解谜感盘面"]
    },
    imageGradient: ["#a3e635", "#3f6212"]
  },
  {
    id: "buffalo-power",
    slug: "buffalo-power",
    image: "/games/buffalo-power.webp",
    name: "Buffalo Power",
    providerSlug: "playson",
    category: "slots",
    shortDescription: {
      en: "Herd-powered video slot with bold animal symbols and teachable feature modes.",
      zh: "兽群力量视频老虎机，动物符号醒目，特色模式好教。"
    },
    description: {
      en: "Buffalo Power keeps Playson’s clarity promise: strong animal icons, modes you can explain in a paragraph, and scaling that works from desktop to phone. 1XROLL details mode transitions and symbol priority without RTP fiction. A dependable pick when you want theme punch without opaque systems. Adjust stake only between resolved rounds so mode changes do not collide with mid-spin edits.",
      zh: "Buffalo Power 兑现 Playson 的清晰承诺：强烈动物图标、一段话能说明的模式，以及桌面到手机都成立的缩放。1XROLL 详述模式切换与符号优先级，没有返还率虚构。想要主题冲击力又不想要不透明系统时，是可靠之选。仅在回合结算之间调整注额，以免模式切换与旋转中途编辑冲突。"
    },
    howToPlay: {
      en: "Spin, watch for mode triggers described in the rules, and adjust stake only between resolved rounds.",
      zh: "旋转，留意规则所述的模式触发，仅在回合结算之间调整注额。"
    },
    features: {
      en: ["Buffalo theme", "Clear feature modes", "Cross-device scaling", "Bold symbols"],
      zh: ["野牛主题", "清晰特色模式", "跨设备缩放", "醒目符号"]
    },
    imageGradient: ["#92400e", "#365314"]
  },
  {
    id: "energy-coins",
    slug: "energy-coins",
    image: "/games/energy-coins.webp",
    name: "Energy Coins: Holding and Winning",
    providerSlug: "playson",
    category: "slots",
    status: "new",
    shortDescription: {
      en: "Hold-and-win energy fantasy with meters that make mode changes easy to spot.",
      zh: "锁定派彩能量幻想，进度条让模式切换易于察觉。"
    },
    description: {
      en: "Energy Coins centers on collecting and holding moments that flip the game into a distinct feature state. 1XROLL explains how meters telegraph those flips and why autoplay needs caution when features extend. We do not invent coin jackpot schedules. Strong Playson example of teachable hold-and-win pacing. Stay present during hold sequences; they can outlast a casual glance and reward attention more than turbo impatience.",
      zh: "Energy Coins 围绕收集与锁定时刻，把游戏翻进独特特色状态。1XROLL 说明进度如何预告翻转，以及特色延长时为何要谨慎自动旋转。不编造硬币奖池时间表。作为 Playson 好教的锁定派彩节奏范例很强。锁定序列期间保持专注；它们可能比随便瞥一眼更长，奖励注意力多于加速急躁。"
    },
    howToPlay: {
      en: "Spin to fill or trigger energy/hold states per the paytable. Stay present during hold sequences; they can outlast a casual glance.",
      zh: "按赔付表旋转以填充或触发能量/锁定状态。锁定序列期间保持专注；它们可能比随便瞥一眼更长。"
    },
    features: {
      en: ["Hold-and-win modes", "Energy meters", "Coin theme", "Teachable rules"],
      zh: ["锁定派彩模式", "能量进度", "硬币主题", "好教规则"]
    },
    imageGradient: ["#facc15", "#1d4ed8"]
  }
];

export function getGameBySlug(slug: string) {
  return games.find((g) => g.slug === slug);
}

export function getGamesByCategory(category: string) {
  return games.filter((g) => g.category === category);
}

export function getGamesByProvider(providerSlug: string) {
  return games.filter((g) => g.providerSlug === providerSlug);
}

export function searchGames(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return games;
  return games.filter(
    (g) =>
      g.name.toLowerCase().includes(q) ||
      g.slug.includes(q) ||
      g.providerSlug.includes(q),
  );
}
