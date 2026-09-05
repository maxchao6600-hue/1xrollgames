import fs from "fs";

const newGames = [
  {
    id: "fruit-party",
    slug: "fruit-party",
    name: "Fruit Party",
    providerSlug: "pragmatic-play",
    category: "slots",
    shortEn: "Cluster fruit cascades with colourful multiplier moments.",
    shortZh: "水果集群连消，彩色倍率时刻鲜明。",
    descEn:
      "Fruit Party leans on cluster cascades and bright fruit motifs. On 1XROLL we describe board reading and feature pacing without inventing RTP.",
    descZh:
      "Fruit Party 倚重集群连消与明亮水果意象。1XROLL 说明读盘与特色节奏，不编造返还率。",
    howEn: "Spin the fruit grid, watch clusters clear, and follow free-game prompts when they appear.",
    howZh: "旋转水果网格，观察集群清除，出现免费游戏时按提示进行。",
    featEn: ["Cluster pays", "Fruit theme", "Cascade clears", "Bright UI"],
    featZh: ["集群赔付", "水果主题", "连消清除", "明亮界面"],
    gradient: ["#f97316", "#16a34a"],
  },
  {
    id: "aztec-gems",
    slug: "aztec-gems",
    name: "Aztec Gems",
    providerSlug: "pragmatic-play",
    category: "slots",
    shortEn: "Compact gem slot with sharp symbol hierarchy and brisk rounds.",
    shortZh: "紧凑宝石老虎机，符号层级清晰，回合轻快。",
    descEn:
      "Aztec Gems keeps Pragmatic’s gem language compact and readable. 1XROLL focuses on symbol roles and session pacing—no fabricated jackpot schedules.",
    descZh:
      "Aztec Gems 让 Pragmatic 的宝石语汇保持紧凑可读。1XROLL 聚焦符号角色与会话节奏——不编造奖池时间表。",
    howEn: "Spin, watch gem combinations, and check the paytable for wild behaviour.",
    howZh: "旋转，观察宝石组合，并在赔付表确认百搭行为。",
    featEn: ["Gem symbols", "Compact rules", "Fast rounds", "Clear paytable"],
    featZh: ["宝石符号", "紧凑规则", "快速回合", "清晰赔付表"],
    gradient: ["#22c55e", "#854d0e"],
  },
  {
    id: "candy-village",
    slug: "candy-village",
    name: "Candy Village",
    providerSlug: "pg-soft",
    category: "slots",
    shortEn: "Portrait candy adventure with playful cluster pacing.",
    shortZh: "竖屏糖果冒险，集群节奏轻松活泼。",
    descEn:
      "Candy Village continues PG Soft’s portrait-first craft with a candy village motif. 1XROLL describes touch pacing and board clarity without invented volatility labels.",
    descZh:
      "Candy Village 延续 PG Soft 竖屏优先工艺与糖果村意象。1XROLL 说明触控节奏与盘面清晰度，不编造波动标签。",
    howEn: "Spin in portrait, follow cluster clears, and learn feature cues from the rules panel.",
    howZh: "竖屏旋转，跟随集群清除，并从规则面板学习特色提示。",
    featEn: ["Portrait layout", "Candy motif", "Cluster pacing", "Touch-first UI"],
    featZh: ["竖屏布局", "糖果意象", "集群节奏", "触控优先界面"],
    gradient: ["#ec4899", "#8b5cf6"],
  },
  {
    id: "great-rhino",
    slug: "great-rhino",
    name: "Great Rhino",
    providerSlug: "pragmatic-play",
    category: "slots",
    shortEn: "Safari-driven reel adventure with bold animal symbols.",
    shortZh: "safari 向转轮冒险，动物符号醒目。",
    descEn:
      "Great Rhino uses bold animal art and straightforward feature language. 1XROLL maps motif hierarchy and free-game pacing without fake wildlife jackpots.",
    descZh:
      "Great Rhino 使用醒目动物美术与直白特色语汇。1XROLL 梳理意象层级与免费游戏节奏，没有虚构野生头奖。",
    howEn: "Spin, watch for free-game cues, and adjust stake only between resolved rounds.",
    howZh: "旋转，留意免费游戏提示，仅在回合结算之间调整注额。",
    featEn: ["Safari theme", "Animal symbols", "Free games", "Bold art"],
    featZh: ["safari 主题", "动物符号", "免费游戏", "醒目美术"],
    gradient: ["#a3e635", "#3f6212"],
  },
  {
    id: "buffalo-king-megaways",
    slug: "buffalo-king-megaways",
    name: "Buffalo King Megaways",
    providerSlug: "pragmatic-play",
    category: "slots",
    shortEn: "Megaways buffalo spectacle with dense reel variations.",
    shortZh: "Megaways 野牛场面，转轮变化密集。",
    descEn:
      "Buffalo King Megaways layers Megaways density onto buffalo motifs. 1XROLL explains what changes across spins and why mobile readability still matters—without inventing way-count luck claims.",
    descZh:
      "Buffalo King Megaways 把 Megaways 密度叠在野牛意象上。1XROLL 说明每转变化与手机可读性为何仍重要——不编造 ways 好运说辞。",
    howEn: "Spin through changing ways, watch free-game entries, and keep sessions timed.",
    howZh: "在变化的 ways 中旋转，留意免费游戏入口，并为会话计时。",
    featEn: ["Megaways", "Buffalo theme", "Dense reels", "Feature chapters"],
    featZh: ["Megaways", "野牛主题", "密集转轮", "特色篇章"],
    gradient: ["#92400e", "#365314"],
  },
  {
    id: "wolf-gold",
    slug: "wolf-gold",
    name: "Wolf Gold",
    providerSlug: "pragmatic-play",
    category: "slots",
    shortEn: "Desert wolf adventure with money-respin style feature moments.",
    shortZh: "沙漠野狼冒险，含金钱重转式特色时刻。",
    descEn:
      "Wolf Gold is a long-running Pragmatic desert adventure. 1XROLL describes feature flavour and symbol roles without inventing progressive schedules.",
    descZh:
      "Wolf Gold 是 Pragmatic 长期沙漠冒险作品。1XROLL 说明特色气质与符号角色，不编造奖池进度表。",
    howEn: "Spin, learn money-symbol behaviour from the paytable, and enter features when prompted.",
    howZh: "旋转，从赔付表学习金钱符号行为，提示时进入特色。",
    featEn: ["Desert theme", "Money symbols", "Feature respins", "Classic PP craft"],
    featZh: ["沙漠主题", "金钱符号", "特色重转", "经典 PP 工艺"],
    gradient: ["#f59e0b", "#78350f"],
  },
  {
    id: "power-of-thor",
    slug: "power-of-thor",
    name: "Power of Thor Megaways",
    providerSlug: "pragmatic-play",
    category: "slots",
    shortEn: "Norse Megaways energy with hammer-led feature spectacle.",
    shortZh: "北欧 Megaways 能量，锤子主导特色场面。",
    descEn:
      "Power of Thor Megaways mixes myth spectacle with Megaways density. 1XROLL stays on craft notes—pacing, UI clarity, motif hierarchy—without RTP fiction.",
    descZh:
      "Power of Thor Megaways 把神话场面与 Megaways 密度结合。1XROLL 只谈工艺——节奏、界面清晰、意象层级——不编造返还率。",
    howEn: "Spin changing ways, watch Thor feature cues, and pause between long feature stretches.",
    howZh: "旋转变化的 ways，留意雷神特色提示，并在长特色段落之间暂停。",
    featEn: ["Norse theme", "Megaways", "Hammer features", "Spectacle pacing"],
    featZh: ["北欧主题", "Megaways", "锤子特色", "奇观节奏"],
    gradient: ["#38bdf8", "#1e3a8a"],
  },
  {
    id: "hand-of-midas",
    slug: "hand-of-midas",
    name: "Hand of Midas",
    providerSlug: "pragmatic-play",
    category: "slots",
    shortEn: "Golden-touch free spins with multiplier collection energy.",
    shortZh: "点金免费旋转，倍率收集感强。",
    descEn:
      "Hand of Midas centres on free-spin multiplier collection. 1XROLL explains the chapter structure and what to watch on mobile—without inventing gold-touch guarantees.",
    descZh:
      "Hand of Midas 以免费旋转倍率收集为核心。1XROLL 说明篇章结构与手机上的观察重点——不编造点金保证。",
    howEn: "Spin into free games when scatters align, then follow multiplier collection rules in the panel.",
    howZh: "散布对齐时进入免费游戏，再按面板跟随倍率收集规则。",
    featEn: ["Midas theme", "Free-spin multipliers", "Collection energy", "Mobile clarity"],
    featZh: ["迈达斯主题", "免费旋转倍率", "收集能量", "手机清晰"],
    gradient: ["#fbbf24", "#b45309"],
  },
  {
    id: "fortune-ox",
    slug: "fortune-ox",
    name: "Fortune Ox",
    providerSlug: "pg-soft",
    category: "slots",
    status: "hot",
    shortEn: "Festive ox portrait slot with brisk feature bursts.",
    shortZh: "节庆金牛竖屏老虎机，特色爆发短促有力。",
    descEn:
      "Fortune Ox continues PG Soft’s festive animal series in portrait. 1XROLL describes pacing and control layout without lucky-hour myths.",
    descZh:
      "Fortune Ox 延续 PG Soft 节庆动物系列的竖屏路线。1XROLL 说明节奏与操控布局，没有幸运时段神话。",
    howEn: "Set a stake, spin, and watch for wild or free-game cues before changing settings mid-feature.",
    howZh: "设定注额后旋转，留意百搭或免费游戏提示，特色中途勿改设置。",
    featEn: ["Portrait festive art", "Ox motif", "Feature bursts", "Touch-first UI"],
    featZh: ["竖屏节庆美术", "金牛意象", "特色爆发", "触控优先界面"],
    gradient: ["#f59e0b", "#b91c1c"],
  },
  {
    id: "fortune-rabbit",
    slug: "fortune-rabbit",
    name: "Fortune Rabbit",
    providerSlug: "pg-soft",
    category: "slots",
    shortEn: "Rabbit-themed festive portrait play with clear feature telegraphing.",
    shortZh: "兔子主题节庆竖屏玩法，特色提示清晰。",
    descEn:
      "Fortune Rabbit keeps the festive PG Soft vocabulary with rabbit motifs. 1XROLL focuses on readable cues and responsible session tips.",
    descZh:
      "Fortune Rabbit 用兔子意象延续 PG Soft 节庆语汇。1XROLL 聚焦可读提示与负责任会话建议。",
    howEn: "Spin in portrait, learn symbol roles from the paytable, and end features before changing stake.",
    howZh: "竖屏旋转，从赔付表学习符号角色，特色结束后再改注。",
    featEn: ["Rabbit motif", "Festive portrait", "Clear cues", "Mobile ergonomics"],
    featZh: ["兔子意象", "节庆竖屏", "清晰提示", "手机人机"],
    gradient: ["#f472b6", "#9f1239"],
  },
  {
    id: "fortune-dragon",
    slug: "fortune-dragon",
    name: "Fortune Dragon",
    providerSlug: "pg-soft",
    category: "slots",
    shortEn: "Dragon-led festive reel energy with bold colour contrast.",
    shortZh: "金龙主导的节庆转轮能量，色彩对比鲜明。",
    descEn:
      "Fortune Dragon brings dragon spectacle into PG Soft’s festive lane. 1XROLL describes motif hierarchy and pacing without invented dragon luck claims.",
    descZh:
      "Fortune Dragon 把金龙场面带进 PG Soft 节庆赛道。1XROLL 说明意象层级与节奏，不编造金龙好运说辞。",
    howEn: "Spin, watch dragon feature cues, and keep autoplay intentional.",
    howZh: "旋转，留意金龙特色提示，并有意识地使用自动旋转。",
    featEn: ["Dragon motif", "Festive contrast", "Feature cues", "Portrait craft"],
    featZh: ["金龙意象", "节庆对比", "特色提示", "竖屏工艺"],
    gradient: ["#ef4444", "#fbbf24"],
  },
  {
    id: "fortune-mouse",
    slug: "fortune-mouse",
    name: "Fortune Mouse",
    providerSlug: "pg-soft",
    category: "slots",
    shortEn: "Compact mouse-themed festive slot tuned for quick portrait sessions.",
    shortZh: "紧凑老鼠主题节庆老虎机，适合短竖屏会话。",
    descEn:
      "Fortune Mouse is a compact festive entry in the PG Soft animal series. 1XROLL covers control layout and short-session habits.",
    descZh:
      "Fortune Mouse 是 PG Soft 动物系列中更紧凑的节庆入门。1XROLL 涵盖操控布局与短会话习惯。",
    howEn: "Spin, learn paytable roles quickly, and keep sessions short when features feel rapid.",
    howZh: "旋转，快速学习赔付表角色；特色节奏快时保持短会话。",
    featEn: ["Mouse motif", "Compact festive play", "Portrait UI", "Quick rounds"],
    featZh: ["老鼠意象", "紧凑节庆玩法", "竖屏界面", "短回合"],
    gradient: ["#fb7185", "#be123c"],
  },
  {
    id: "crash",
    slug: "crash",
    name: "Crash",
    providerSlug: "spribe",
    category: "fast-games",
    shortEn: "Multiplier climb with a single cash-out decision each round.",
    shortZh: "倍率爬升，每回合只做一次兑现决策。",
    descEn:
      "Crash compresses risk into a rising multiplier curve. 1XROLL emphasizes exit timing and session caps—no invented edge percentages.",
    descZh:
      "Crash 把风险压进上升倍率曲线。1XROLL 强调离开时机与会话上限——不编造优势百分比。",
    howEn: "Place a bet, watch the multiplier, cash out before the crash, or use deliberate auto-cashout.",
    howZh: "下注后看倍率，在坠毁前兑现，或有意识地使用自动兑现。",
    featEn: ["Crash curve", "Cash-out control", "Short rounds", "Minimal UI"],
    featZh: ["坠毁曲线", "兑现控制", "短回合", "极简界面"],
    gradient: ["#f97316", "#111827"],
  },
  {
    id: "chicken-road",
    slug: "chicken-road",
    name: "Chicken Road",
    providerSlug: "spribe",
    category: "fast-games",
    shortEn: "Step-risk chicken challenge with discrete decision points.",
    shortZh: "分步风险小鸡挑战，决策点离散清晰。",
    descEn:
      "Chicken Road turns risk into stepped decisions. 1XROLL explains round anatomy and why discrete choices still need budget discipline.",
    descZh:
      "Chicken Road 把风险变成分步决策。1XROLL 说明回合结构，以及离散选择仍需预算纪律的原因。",
    howEn: "Choose risk steps, confirm stakes, and resolve each challenge before raising difficulty.",
    howZh: "选择风险阶梯，确认注额，并在提高难度前完成每一挑战。",
    featEn: ["Step risk", "Chicken theme", "Discrete rounds", "Light client"],
    featZh: ["分步风险", "小鸡主题", "离散回合", "轻客户端"],
    gradient: ["#facc15", "#854d0e"],
  },
  {
    id: "speed-baccarat-b",
    slug: "speed-baccarat-b",
    name: "Speed Baccarat B",
    providerSlug: "evolution",
    category: "live-casino",
    shortEn: "Fast-paced live baccarat with compressed betting windows.",
    shortZh: "快节奏真人百家乐，投注窗更紧凑。",
    descEn:
      "Speed Baccarat B compresses Evolution’s baccarat loop into shorter windows. 1XROLL covers UI reading and calm habits—no invented shoe statistics.",
    descZh:
      "Speed Baccarat B 把 Evolution 百家乐循环压进更短窗口。1XROLL 涵盖界面识读与冷静习惯——不编造牌靴统计。",
    howEn: "Watch the timer, place banker/player/tie bets within the window, and wait for the reveal.",
    howZh: "看计时，在窗口内下庄/闲/和，并等待开牌。",
    featEn: ["Live baccarat", "Speed windows", "Overlay bets", "Studio broadcast"],
    featZh: ["真人百家乐", "极速窗口", "叠加层投注", "工作室转播"],
    gradient: ["#22c55e", "#14532d"],
  },
  {
    id: "super-sic-bo",
    slug: "super-sic-bo",
    name: "Super Sic Bo",
    providerSlug: "evolution",
    category: "live-casino",
    shortEn: "Live sic bo with multiplier overlays and rapid dice rounds.",
    shortZh: "真人骰宝，含倍率叠加与快速骰局。",
    descEn:
      "Super Sic Bo blends classic dice markets with Evolution multiplier overlays. 1XROLL explains market types and pacing without fake dice bias claims.",
    descZh:
      "Super Sic Bo 把经典骰宝盘口与 Evolution 倍率叠加结合。1XROLL 说明盘口类型与节奏，不编造骰子偏差说辞。",
    howEn: "Select dice markets before the window closes, then watch the live shake and settlement.",
    howZh: "在窗口关闭前选择骰宝盘口，然后观看现场摇骰与结算。",
    featEn: ["Live sic bo", "Multiplier overlays", "Fast rounds", "Multi-camera"],
    featZh: ["真人骰宝", "倍率叠加", "快速回合", "多机位"],
    gradient: ["#a855f7", "#4c1d95"],
  },
  {
    id: "bac-bo",
    slug: "bac-bo",
    name: "Bac Bo",
    providerSlug: "evolution",
    category: "live-casino",
    shortEn: "Baccarat-inspired dice show with clear side markets.",
    shortZh: "灵感来自百家乐的骰子秀，边注清晰。",
    descEn:
      "Bac Bo mixes baccarat-style sides with dice presentation. 1XROLL describes decision points and studio tempo—no invented pattern systems.",
    descZh:
      "Bac Bo 把类百家乐边注与骰子呈现混合。1XROLL 说明决策点与工作室节奏——不编造路单系统。",
    howEn: "Choose sides within the betting window and follow the live reveal sequence.",
    howZh: "在投注窗内选择边注，并跟随现场开奖序列。",
    featEn: ["Dice baccarat hybrid", "Side markets", "Live hosts", "Clear UI strip"],
    featZh: ["骰子百家乐混合", "边注盘口", "真人主持", "清晰界面条"],
    gradient: ["#06b6d4", "#0e7490"],
  },
];

function block(g) {
  const status = g.status ? `\n    status: "${g.status}",` : "";
  const featEn = g.featEn.map((x) => `"${x}"`).join(", ");
  const featZh = g.featZh.map((x) => `"${x}"`).join(", ");
  return `  {
    id: "${g.id}",
    slug: "${g.slug}",
    name: "${g.name}",
    providerSlug: "${g.providerSlug}",
    category: "${g.category}",${status}
    shortDescription: {
      en: "${g.shortEn}",
      zh: "${g.shortZh}",
    },
    description: {
      en: "${g.descEn}",
      zh: "${g.descZh}",
    },
    howToPlay: {
      en: "${g.howEn}",
      zh: "${g.howZh}",
    },
    features: {
      en: [${featEn}],
      zh: [${featZh}],
    },
    imageGradient: ["${g.gradient[0]}", "${g.gradient[1]}"],
  }`;
}

let games = fs.readFileSync("src/data/games.ts", "utf8");
const existing = new Set(
  [...games.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]),
);
const toAdd = newGames.filter((g) => !existing.has(g.slug));
if (!toAdd.length) {
  console.log("no new games");
  process.exit(0);
}
const insert = toAdd.map(block).join(",\n");
if (!games.trimEnd().endsWith("];")) {
  throw new Error("unexpected games.ts ending");
}
games = games.replace(/\n\];\s*$/, `,\n${insert}\n];\n`);
fs.writeFileSync("src/data/games.ts", games);
console.log("added", toAdd.map((g) => g.slug).join(", "));
