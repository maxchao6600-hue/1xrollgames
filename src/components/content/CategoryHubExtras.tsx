import type { CategoryId, Locale } from "@/types/content";
import type { GameCardModel } from "@/data/queries";
import { getAllProviders } from "@/data";
import { localePath } from "@/lib/paths";
import {
  ChecklistPanel,
  CompareGrid,
  FeaturedGamesRail,
  InfoGrid,
  RelatedCards,
  StepGrid,
} from "@/components/content/HubModules";

function zh(locale: Locale) {
  return locale === "zh";
}

function providerChips(locale: Locale, games: GameCardModel[]) {
  const slugs = [...new Set(games.map((g) => g.providerSlug))];
  const providers = getAllProviders().filter((p) => slugs.includes(p.slug));
  if (!providers.length) return null;
  return (
    <InfoGrid
      title={zh(locale) ? "本分类已核实厂商" : "Verified providers in this category"}
      subtitle={
        zh(locale)
          ? "仅列出本站目录中实际出现的工作室，不编造额外厂商。"
          : "Only studios that actually appear in this site’s catalogue — no invented studios."
      }
      columns={providers.length >= 4 ? 4 : 3}
      items={providers.map((p) => ({
        title: p.name,
        body: zh(locale)
          ? `打开厂商档案，查看本站已核实作品与工艺说明。`
          : `Open the studio profile for this site’s verified titles and craft notes.`,
        href: localePath(locale, `/providers/${p.slug}`),
      }))}
    />
  );
}

function beginnerMobileFair(
  locale: Locale,
  beginner: { title: string; body: string }[],
  mobileBody: string,
  fairBody: string,
) {
  return (
    <>
      <StepGrid
        title={zh(locale) ? "新手路径" : "Beginner path"}
        steps={beginner}
      />
      <InfoGrid
        title={zh(locale) ? "移动体验与公平识读" : "Mobile experience and fair-play literacy"}
        columns={2}
        items={[
          {
            title: zh(locale) ? "移动体验" : "Mobile experience",
            body: mobileBody,
            href: localePath(locale, "/download"),
          },
          {
            title: zh(locale) ? "公平游戏" : "Fair play",
            body: fairBody,
            href: localePath(locale, "/fair-play"),
          },
        ]}
      />
    </>
  );
}

export function CatalogueCategoryExtras({
  locale,
  categoryId,
  games,
}: {
  locale: Locale;
  categoryId: CategoryId;
  games: GameCardModel[];
}) {
  const featured = games.filter((g) => g.image).slice(0, 6);
  const z = zh(locale);

  if (categoryId === "slots") {
    return (
      <>
        <FeaturedGamesRail
          locale={locale}
          title={z ? "精选老虎机" : "Featured slots"}
          games={featured}
        />
        <InfoGrid
          title={z ? "游戏风格" : "Game styles"}
          columns={3}
          items={
            z
              ? [
                  { title: "竖屏节庆", body: "PG Soft 一类作品强调单手竖构图与文化节庆氛围。" },
                  { title: "消除 / 连消", body: "符号下落与倍率轨迹改变等待感，而不是只看赔付线闪烁。" },
                  { title: "系列角色", body: "同一角色家族帮助你把控件习惯迁移到下一款。" },
                ]
              : [
                  { title: "Portrait festive", body: "PG Soft-style titles emphasise one-handed portrait composition and festive atmosphere." },
                  { title: "Cascade / tumble", body: "Falling symbols and multiplier trails change waiting feel — not just a payline flash." },
                  { title: "Series characters", body: "A familiar cast helps you transfer control habits to the next title." },
                ]
          }
        />
        <InfoGrid
          title={z ? "玩法机制识读" : "Gameplay mechanics"}
          columns={3}
          items={
            z
              ? [
                  { title: "免费旋转篇章", body: "把免费游戏当成另一段节奏，而不是“必赢关卡”。" },
                  { title: "百搭与收集", body: "先认出哪些符号是引擎，哪些只是装饰。" },
                  { title: "会话长度", body: "机制复杂不等于要延长对局。先读作品页再开短时体验。" },
                ]
              : [
                  { title: "Free-spin chapters", body: "Treat free games as a different tempo — not a guaranteed-win stage." },
                  { title: "Wilds and collection", body: "Learn which symbols are engines versus garnish." },
                  { title: "Session length", body: "Complex mechanics are not a reason to extend play. Read the title page, then try a short session." },
                ]
          }
        />
        <CompareGrid
          title={z ? "RTP 与波动率教育" : "RTP and volatility education"}
          subtitle={
            z
              ? "这些是识读概念。本站不公布、不编造具体返还率或个人波动标签。"
              : "These are literacy concepts. This site does not publish or invent specific RTP figures or personal volatility labels."
          }
          columns={
            z
              ? [
                  { title: "RTP", body: "长期理论取向的教育标签。单局结果不会“趋向显示的百分比”。" },
                  { title: "波动率", body: "描述奖励分布的疏密手感。高波动不是更高胜率。" },
                  { title: "如何使用", body: "用概念比较节奏预期，再用作品页与平台条款确认。不要用传闻数字选游。" },
                ]
              : [
                  { title: "RTP", body: "An educational long-run orientation label. A single session does not “trend toward” a displayed percentage." },
                  { title: "Volatility", body: "Describes how clustered or sparse feature moments can feel. Higher volatility is not a higher win rate." },
                  { title: "How to use them", body: "Compare pacing expectations, then confirm on title pages and platform terms. Do not pick games from rumour numbers." },
                ]
          }
        />
        {providerChips(locale, games)}
        {beginnerMobileFair(
          locale,
          z
            ? [
                { title: "读一篇攻略", body: "先建立 RTP/波动与会话边界，再点进货架。" },
                { title: "选一款精选", body: "从有画作的精选轨道开始，而不是一次打开十个主题。" },
                { title: "短时体验", body: "把第一次会话当成识读，而不是追回本。" },
                { title: "需要时停止", body: "打开理性游戏，而不是再开一款“换运气”。" },
              ]
            : [
                { title: "Read one guide", body: "Build RTP/volatility and session-boundary literacy before the shelf." },
                { title: "Pick one featured title", body: "Start from the illustrated rail instead of opening ten themes at once." },
                { title: "Short session", body: "Treat the first visit as literacy, not recovery." },
                { title: "Stop when needed", body: "Open Responsible Gaming instead of “switching luck” to another title." },
              ],
          z
            ? "目录与作品页面向手机阅读。竖屏作品优先确认控件落在拇指区。"
            : "Catalogue and title pages are built for phone reading. On portrait titles, confirm controls sit in the thumb zone.",
          z
            ? "公平游戏页说明透明度语言。老虎机页不编造可验证的链上或返还保证。"
            : "Fair Play explains how we talk about transparency. Slot pages do not invent verifiable on-chain or RTP guarantees.",
        )}
      </>
    );
  }

  if (categoryId === "live-casino") {
    return (
      <>
        <FeaturedGamesRail
          locale={locale}
          title={z ? "精选真人作品" : "Featured live titles"}
          games={featured}
        />
        <InfoGrid
          title={z ? "桌台体验" : "Table experience"}
          columns={3}
          items={
            z
              ? [
                  { title: "转播识读", body: "看计时条、叠加层与镜头切换，再决定是否下注。" },
                  { title: "窗口关闭", body: "投注窗结束即止。不要在动画中途改筹码。" },
                  { title: "主持与决策", body: "互动是舞台语法，不是必跟的下注建议。" },
                ]
              : [
                  { title: "Broadcast literacy", body: "Read the timer, overlay and camera cuts before you stake." },
                  { title: "Window close", body: "When the betting window ends, stop. Do not change chips mid-animation." },
                  { title: "Hosts and decisions", body: "Banter is stage grammar — not a staking instruction." },
                ]
          }
        />
        <InfoGrid
          title={z ? "轮盘、百家乐与游戏秀" : "Roulette, baccarat and game-show formats"}
          subtitle={
            z
              ? "本站已核实真人目录包含 Lightning Roulette、Speed Baccarat B，以及 Crazy Time、Monopoly Live 等游戏秀形态。"
              : "This site’s verified live catalogue includes Lightning Roulette, Speed Baccarat B, and game-show formats such as Crazy Time and Monopoly Live."
          }
          columns={3}
          items={
            z
              ? [
                  { title: "轮盘", body: "几何熟悉，修饰层（如闪电号）改变聚光灯，不改变“必中”神话。" },
                  { title: "百家乐", body: "极速窗口压缩决策时间。先学会庄/闲/和，再考虑边注。" },
                  { title: "游戏秀", body: "转轮 + 奖励关把单局拉长。给足时间，勿把长弧塞进短休息。" },
                ]
              : [
                  { title: "Roulette", body: "Familiar geometry; modifier layers (such as lightning numbers) change spotlight, not “must-hit” myths." },
                  { title: "Baccarat", body: "Speed windows compress decisions. Learn banker/player/tie before side markets." },
                  { title: "Game shows", body: "Wheel plus bonus stages stretch a round. Give the arc time — do not squeeze it into a short break." },
                ]
          }
        />
        {providerChips(locale, games)}
        {beginnerMobileFair(
          locale,
          z
            ? [
                { title: "先看不下注", body: "用一两局学习镜头与顶栏。" },
                { title: "选一种结构", body: "桌台或秀，不要同时开多路直播。" },
                { title: "稳定网络", body: "时机敏感回合依赖连接，而不是“补注运气”。" },
                { title: "设定时长", body: "秀类弧线更长，预先决定何时离开。" },
              ]
            : [
                { title: "Watch first", body: "Use a round or two to learn cameras and the top strip." },
                { title: "Pick one structure", body: "Table or show — do not open multiple live streams at once." },
                { title: "Stable connection", body: "Timing-sensitive rounds depend on the network, not “catch-up luck”." },
                { title: "Set a duration", body: "Show arcs run longer. Decide when to leave before you start." },
              ],
          z
            ? "手机可阅读作品页。进入直播时保持电量与网络，避免后台切走导致误触。"
            : "Title pages read well on a phone. For live streams, keep battery and network stable — avoid backgrounding that causes mis-taps.",
          z
            ? "真人页不编造牌靴统计或假玩家计数。透明度表述见公平游戏。"
            : "Live pages do not invent shoe statistics or fake player counters. Transparency language lives on Fair Play.",
        )}
      </>
    );
  }

  if (categoryId === "fast-games") {
    return (
      <>
        <FeaturedGamesRail
          locale={locale}
          title={z ? "可浏览的快速游戏" : "Available fast games"}
          games={featured.length ? featured : games.slice(0, 6)}
        />
        <InfoGrid
          title={z ? "短会话游戏概念" : "Fast-session gaming concept"}
          columns={3}
          items={
            z
              ? [
                  { title: "回合短", body: "决策循环紧。适合明确的短时窗口，而不是无限滑动。" },
                  { title: "节奏清晰", body: "先认界面，再谈连续开局。" },
                  { title: "发现方式", body: "用本页已核实作品进入，而不是追逐未收录的“热门极速”名单。" },
                ]
              : [
                  { title: "Short rounds", body: "Tight decision loops. Fit a defined time window — not infinite scrolling." },
                  { title: "Clear pacing", body: "Learn the interface before chaining rounds." },
                  { title: "Discovery", body: "Enter through verified titles on this page — not an unverified “hot turbo” list." },
                ]
          }
        />
        {providerChips(locale, games)}
        {beginnerMobileFair(
          locale,
          z
            ? [
                { title: "只开一款", body: "短回合很容易叠开会话。" },
                { title: "预先计时", body: "用时钟而不是“再来一局”结束。" },
                { title: "读作品页", body: "确认机制说明后再到平台。" },
                { title: "离开路径", body: "不舒服就打开理性游戏。" },
              ]
            : [
                { title: "Open one title", body: "Short rounds stack sessions easily." },
                { title: "Time the visit", body: "End on a clock, not “one more round”." },
                { title: "Read the title page", body: "Confirm mechanics notes before the platform." },
                { title: "Exit path", body: "If it feels off, open Responsible Gaming." },
              ],
          z
            ? "轻客户端在手机上更跟手。仍需注意误触与连点。"
            : "Light clients feel natural on a phone. Still watch for mis-taps and rapid re-buy.",
          z
            ? "快速游戏不因回合短就更“公平”或更“可预测”。"
            : "A short round is not automatically fairer or more predictable.",
        )}
      </>
    );
  }

  if (categoryId === "fishing") {
    return (
      <>
        <FeaturedGamesRail
          locale={locale}
          title={z ? "精选捕鱼作品" : "Featured fishing titles"}
          games={featured.length ? featured : games.slice(0, 6)}
        />
        <InfoGrid
          title={z ? "玩法特征与会话" : "Gameplay features and session feel"}
          columns={3}
          items={
            z
              ? [
                  { title: "瞄准与节奏", body: "捕鱼类强调屏幕上的瞄准与波次，而不是单一转轴。" },
                  { title: "会话体验", body: "场景可能更长。预先决定离开点，避免“清完这波再走”。" },
                  { title: "已核实目录", body: "本站捕鱼货架以已收录作品为准，不编造奖池。" },
                ]
              : [
                  { title: "Aim and pacing", body: "Fishing titles emphasise on-screen aim and waves rather than a single reel." },
                  { title: "Session feel", body: "Scenes can run longer. Decide an exit before “one more wave”." },
                  { title: "Verified shelf", body: "This site’s fishing rail is the curated catalogue — no invented jackpots." },
                ]
          }
        />
        {providerChips(locale, games)}
        {beginnerMobileFair(
          locale,
          z
            ? [
                { title: "先看画面", body: "确认触控瞄准是否适合你的设备。" },
                { title: "短波次练习", body: "把第一段当成手感，而不是目标分数。" },
                { title: "单作品", body: "不要同时开多条捕鱼厅。" },
                { title: "限额", body: "场景热闹不等于提高注额。" },
              ]
            : [
                { title: "Watch the canvas", body: "Confirm touch aiming suits your device." },
                { title: "Practice a short wave", body: "Treat the first stretch as feel, not a score target." },
                { title: "One title", body: "Do not open multiple fishing rooms at once." },
                { title: "Limits", body: "A busy scene is not a reason to raise stakes." },
              ],
          z
            ? "竖/横屏手感不同。以作品页与平台实际布局为准。"
            : "Portrait and landscape feel different. Trust the title page and the live platform layout.",
          z
            ? "不把捕获动画解读成可验证的返还证明。"
            : "Do not read capture animations as a verifiable return proof.",
        )}
      </>
    );
  }

  if (categoryId === "crypto-games") {
    return (
      <>
        <FeaturedGamesRail
          locale={locale}
          title={z ? "已核实加密短回合" : "Verified crypto short rounds"}
          games={featured.length ? featured : games.slice(0, 6)}
        />
        <InfoGrid
          title={z ? "分类说明与平台导航" : "Category explanation and platform navigation"}
          columns={3}
          items={
            z
              ? [
                  { title: "概念", body: "本站加密游戏通道展示已核实的短回合作品（如 Aviator、Mines、Plinko、Goal），不是链上收益产品。" },
                  { title: "发现", body: "从本页作品进入详情，再使用打开平台。大厅库存仍以登录后为准。" },
                  { title: "理性", body: "短循环容易连点。预先设时，并阅读理性游戏。" },
                ]
              : [
                  { title: "Concept", body: "This crypto lane shows verified short-round titles (such as Aviator, Mines, Plinko, Goal) — not an on-chain yield product." },
                  { title: "Discovery", body: "Open a title page here, then Open platform. Lobby inventory still belongs to login." },
                  { title: "Responsibility", body: "Short loops invite rapid taps. Time the session and read Responsible Gaming." },
                ]
          }
        />
        {providerChips(locale, games)}
        {beginnerMobileFair(
          locale,
          z
            ? [
                { title: "认界面", body: "先搞清退出/兑现控件在哪。" },
                { title: "一次一款", body: "不要并行多条时机游戏。" },
                { title: "不预测曲线", body: "历史轨迹不是下一秒保证。" },
                { title: "离开", body: "连点失控时立刻停止。" },
              ]
            : [
                { title: "Learn the UI", body: "Find cash-out / exit controls before you stake." },
                { title: "One title", body: "Do not run multiple timing games in parallel." },
                { title: "No curve prophecy", body: "A history path is not a next-second guarantee." },
                { title: "Leave", body: "Stop immediately if tap-chains take over." },
              ],
          z
            ? "短回合在手机上很跟手，也更容易误触。建议单手握持并关闭多余通知。"
            : "Short rounds feel native on a phone — and mis-tap easily. Use a stable grip and mute extra notifications.",
          z
            ? "不把“哈希/加密”字样扩展成可审计的密码学保证。详见公平游戏。"
            : "Do not stretch “hash/crypto” wording into an auditable cryptography guarantee. See Fair Play.",
        )}
      </>
    );
  }

  return (
    <>
      <FeaturedGamesRail
        locale={locale}
        title={z ? "本分类作品" : "Titles in this category"}
        games={featured.length ? featured : games.slice(0, 6)}
      />
      {providerChips(locale, games)}
    </>
  );
}

export function HubCategoryExtras({
  locale,
  categoryId,
}: {
  locale: Locale;
  categoryId?: string;
}) {
  if (!categoryId) return null;
  const z = zh(locale);

  if (categoryId === "hash-roulette") {
    return (
      <>
        <InfoGrid
          title={z ? "玩法概念与生态位置" : "Gameplay concept and ecosystem role"}
          columns={3}
          items={
            z
              ? [
                  { title: "概念", body: "哈希轮盘是偏透明取向的轮盘通道说明页，不是可下载的本站库存表。" },
                  { title: "如何融入 1XROLL", body: "它与真人轮盘、哈希游戏并列：同一品牌入口，不同大厅语法。" },
                  { title: "用户应理解", body: "公开摘要不是链上证明。具体作品在登录后的平台大厅。" },
                ]
              : [
                  { title: "Concept", body: "Hash Roulette is a transparency-oriented roulette lane page — not a downloadable local inventory." },
                  { title: "Fit on 1XROLL", body: "It sits beside live roulette and hash games: same brand door, different lobby grammar." },
                  { title: "What to understand", body: "A published summary is not an on-chain proof. Live titles sit in the platform lobby after login." },
                ]
          }
        />
        <StepGrid
          title={z ? "如何探索" : "How to explore"}
          steps={
            z
              ? [
                  { title: "读本页", body: "先建立类别预期。" },
                  { title: "对照公平游戏", body: "看我们如何谈论透明度，而不编造保证。" },
                  { title: "打开平台", body: "在大厅查看当前作品。" },
                  { title: "设定限额", body: "透明语言不是提高注额的理由。" },
                ]
              : [
                  { title: "Read this hub", body: "Set category expectations first." },
                  { title: "Check Fair Play", body: "See how we talk about transparency without inventing guarantees." },
                  { title: "Open the platform", body: "Review current titles in the lobby." },
                  { title: "Keep limits", body: "Transparency language is not a reason to raise stakes." },
                ]
          }
        />
        <RelatedCards
          title={z ? "相关分类" : "Related categories"}
          items={[
            {
              href: localePath(locale, "/games/hash-games"),
              title: z ? "哈希游戏" : "Hash Games",
              body: z ? "更广的哈希短格式通道。" : "Broader hash short-format lane.",
            },
            {
              href: localePath(locale, "/games/live-casino"),
              title: z ? "真人赌场" : "Live Casino",
              body: z ? "工作室转播轮盘与秀。" : "Studio-broadcast roulette and shows.",
            },
            {
              href: localePath(locale, "/fair-play"),
              title: z ? "公平游戏" : "Fair Play",
              body: z ? "透明度措辞边界。" : "Bounds of transparency wording.",
            },
            {
              href: localePath(locale, "/guides"),
              title: z ? "攻略" : "Guides",
              body: z ? "识读长文。" : "Longer literacy articles.",
            },
          ]}
        />
      </>
    );
  }

  if (categoryId === "hash-games") {
    return (
      <>
        <InfoGrid
          title={z ? "什么是哈希游戏" : "What hash games are"}
          columns={3}
          items={
            z
              ? [
                  { title: "游戏概念", body: "平台上偏区块链灵感的短格式娱乐，不是投资合约说明书。" },
                  { title: "生态角色", body: "与加密短回合、哈希轮盘相邻：帮助你选择大厅语法，而不是编造作品页。" },
                  { title: "玩家信息", body: "当前作品、规则与展示以登录后大厅为准。" },
                ]
              : [
                  { title: "Game concept", body: "Blockchain-inspired short entertainment on the platform — not an investment-contract prospectus." },
                  { title: "Ecosystem role", body: "Sits beside crypto short rounds and hash roulette: choose lobby grammar, do not invent title pages here." },
                  { title: "Player information", body: "Current titles, rules and presentation belong to the logged-in lobby." },
                ]
          }
        />
        <StepGrid
          title={z ? "发现与公平识读" : "Discovery and fair-play literacy"}
          steps={
            z
              ? [
                  { title: "从通道进入", body: "本页说明类别，不伪造库存。" },
                  { title: "对照公平游戏", body: "拒绝把营销词当成可审计证明。" },
                  { title: "移动端阅读", body: "先在手机读懂本页，再打开平台。" },
                  { title: "新手", body: "先学一类短格式，不要同时开多条哈希厅。" },
                ]
              : [
                  { title: "Enter via the lane", body: "This page explains the category; it does not fake inventory." },
                  { title: "Check Fair Play", body: "Refuse to treat marketing words as an audit proof." },
                  { title: "Mobile reading", body: "Understand this hub on a phone, then open the platform." },
                  { title: "Beginners", body: "Learn one short format. Do not open multiple hash rooms at once." },
                ]
          }
        />
      </>
    );
  }

  if (categoryId === "sports") {
    return (
      <>
        <InfoGrid
          title={z ? "体育生态与已核实项目类型" : "Sports ecosystem and verified sport types"}
          subtitle={
            z
              ? "以下为导航与识读分类，不是赛程、赔率或结果。本站不编造球队、联赛或盘口。"
              : "These are navigation and literacy groups — not fixtures, odds or results. This site does not invent teams, leagues or markets."
          }
          columns={4}
          items={
            z
              ? [
                  { title: "足球", body: "常见的赛事浏览入口之一。具体联赛以平台为准。" },
                  { title: "篮球", body: "另一种节奏与节次结构。不要把页面说明当成今日名单。" },
                  { title: "网球", body: "盘次结构不同。先认导航再谈注项。" },
                  { title: "电竞", body: "若平台提供该通道，在大厅确认当前项目——此处不编造赛事。" },
                ]
              : [
                  { title: "Football", body: "A common event-discovery door. Live leagues belong to the platform." },
                  { title: "Basketball", body: "A different period structure. This page is not today’s board." },
                  { title: "Tennis", body: "Set structure differs. Learn navigation before markets." },
                  { title: "Esports", body: "If the platform offers the lane, confirm current titles in the lobby — none are invented here." },
                ]
          }
        />
        <InfoGrid
          title={z ? "体育信息教育" : "Sports information education"}
          columns={3}
          items={
            z
              ? [
                  { title: "什么是导向", body: "品牌站解释如何走通道，不提供即时比分源。" },
                  { title: "如何导航", body: "从分类进入平台体育区，再筛选项目。过期盘口不要在本站寻找。" },
                  { title: "理性参与", body: "赛事情绪容易加注。预设限额，输了不要追盘。" },
                ]
              : [
                  { title: "What this site is", body: "The brand site explains how to enter the lane — it is not a live-score feed." },
                  { title: "How to navigate", body: "Open the platform sports area from this category, then filter. Do not hunt expired markets here." },
                  { title: "Responsible participation", body: "Match emotion invites extra stakes. Set limits; do not chase a board." },
                ]
          }
        />
        <StepGrid
          title={z ? "移动端使用" : "Mobile use"}
          steps={
            z
              ? [
                  { title: "先读枢纽", body: "在手机上理解通道。" },
                  { title: "再进平台", body: "实时盘口只在登录后。" },
                  { title: "稳定网络", body: "临场变更依赖连接。" },
                  { title: "离开", body: "把手机放下也是策略。" },
                ]
              : [
                  { title: "Read the hub", body: "Understand the lane on a phone first." },
                  { title: "Then the platform", body: "Live markets exist only after login." },
                  { title: "Stable network", body: "In-play changes depend on the connection." },
                  { title: "Leave", body: "Putting the phone down is also a strategy." },
                ]
          }
        />
      </>
    );
  }

  if (categoryId === "chess-card") {
    return (
      <>
        <InfoGrid
          title={z ? "棋牌桌体验与游戏概念" : "Card/table experience and game concepts"}
          columns={3}
          items={
            z
              ? [
                  { title: "桌台手感", body: "棋牌通道强调座位、轮次与牌面阅读，而不是转轴动画。" },
                  { title: "如何探索", body: "本页是类别说明。具体玩法与房间在平台大厅，不在本站伪造房间列表。" },
                  { title: "新手", body: "先学一种结构（轮次/出牌），再考虑多桌。" },
                ]
              : [
                  { title: "Table feel", body: "This lane emphasises seats, turns and board reading — not reel animation." },
                  { title: "How to explore", body: "This page is category literacy. Live rooms sit in the platform lobby — we do not invent a room list." },
                  { title: "Beginners", body: "Learn one structure (turns / discards) before multi-tabling." },
                ]
          }
        />
        {beginnerMobileFair(
          locale,
          z
            ? [
                { title: "读规则语言", body: "先理解轮次，再谈注额。" },
                { title: "单桌", body: "学习阶段避免多桌并行。" },
                { title: "时间盒", body: "牌局社交感容易超时。" },
                { title: "公平识读", body: "不把路单神话当成系统。" },
              ]
            : [
                { title: "Read turn language", body: "Understand the round before the stake." },
                { title: "One table", body: "Avoid multi-tabling while learning." },
                { title: "Time-box", body: "Social table feel overruns easily." },
                { title: "Fair literacy", body: "Do not treat pattern myths as a system." },
              ],
          z
            ? "手机适合阅读本页。实际出牌界面以平台为准。"
            : "This hub reads well on a phone. Live discard UI belongs to the platform.",
          z
            ? "棋牌页不编造胜率或必赢牌路。"
            : "Chess & card pages do not invent win rates or guaranteed patterns.",
        )}
        <RelatedCards
          title={z ? "相关分类" : "Related categories"}
          items={[
            {
              href: localePath(locale, "/games/live-casino"),
              title: z ? "真人赌场" : "Live Casino",
              body: z ? "荷官桌台与秀。" : "Dealer tables and shows.",
            },
            {
              href: localePath(locale, "/games"),
              title: z ? "游戏库" : "Games",
              body: z ? "返回全部分类。" : "Back to all categories.",
            },
            {
              href: localePath(locale, "/fair-play"),
              title: z ? "公平游戏" : "Fair Play",
              body: z ? "表述边界。" : "Wording bounds.",
            },
            {
              href: localePath(locale, "/responsible-gaming"),
              title: z ? "理性游戏" : "Responsible Gaming",
              body: z ? "限额与离开。" : "Limits and leaving.",
            },
          ]}
        />
      </>
    );
  }

  if (categoryId === "lottery") {
    return (
      <>
        <InfoGrid
          title={z ? "彩票概念与开奖型娱乐" : "Lottery concept and draw-based entertainment"}
          columns={3}
          items={
            z
              ? [
                  { title: "概念", body: "开奖型玩法以等待与公布为节奏。本站不提供假开奖结果或奖池数字。" },
                  { title: "如何探索", body: "把本页当通道说明，在平台查看当前活动与规则。" },
                  { title: "应核对的信息", body: "时间窗口、参与方式与公布位置——全部以平台条款为准。" },
                ]
              : [
                  { title: "Concept", body: "Draw-based play is paced by waiting and reveal. This site does not publish fake results or jackpot figures." },
                  { title: "How to explore", body: "Treat this page as lane literacy; review current activities and rules on the platform." },
                  { title: "What to check", body: "Time windows, participation method and where results appear — all from platform terms." },
                ]
          }
        />
        <ChecklistPanel
          title={z ? "参与前核对" : "Check before you take part"}
          items={
            z
              ? ["开奖公布位置", "参与资格", "时间窗口", "规则全文", "理性限额", "不要把营销图当结果"]
              : ["Where results are published", "Eligibility", "Time window", "Full rules", "Personal limits", "Do not treat marketing art as a result"]
          }
        />
        {beginnerMobileFair(
          locale,
          z
            ? [
                { title: "读通道", body: "先理解等待型节奏。" },
                { title: "打开平台", body: "只在登录后查看当前活动。" },
                { title: "不追上一期", body: "过期号码不是下期策略。" },
                { title: "离开", body: "公布后不要立刻加码下一期。" },
              ]
            : [
                { title: "Read the lane", body: "Understand wait-and-reveal pacing first." },
                { title: "Open the platform", body: "Current activities exist only after login." },
                { title: "Do not chase the last draw", body: "Expired numbers are not a next-draw strategy." },
                { title: "Leave", body: "Do not immediately raise the next ticket after a reveal." },
              ],
          z
            ? "手机可阅读枢纽。推送与倒计时以平台为准，本站不模拟开奖钟。"
            : "The hub reads on a phone. Pushes and countdowns belong to the platform — this site does not simulate a draw clock.",
          z
            ? "公平游戏说明我们如何避免把随机开奖说成可破解系统。"
            : "Fair Play covers how we avoid describing draws as a crackable system.",
        )}
      </>
    );
  }

  return null;
}
