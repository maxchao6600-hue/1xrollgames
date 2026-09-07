import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { categories, categoryPath, getAllGuides, getFaqByIds } from "@/data";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { absoluteUrl, localize } from "@/lib/utils";
import { guidePath, localePath } from "@/lib/paths";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { ArticleCard } from "@/components/guides/ArticleCard";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  ChecklistPanel,
  HighlightPanel,
  HubAnchorNav,
  HubCtaBand,
  HubH2,
  InfoGrid,
  RelatedCards,
  StepGrid,
} from "@/components/content/HubModules";

const PATH = "/guides";
const FAQ_IDS = [
  "guides-hub",
  "guides-start",
  "guides-categories",
  "guides-promo-terms",
  "guides-rewards",
  "guides-vip",
  "guides-wallet",
  "guides-rg",
  "guides-mobile",
  "guides-support",
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  return buildMetadata({
    locale,
    path: PATH,
    title:
      locale === "zh"
        ? "1XROLL 攻略 | 游戏、奖励与平台导览"
        : "1XROLL Guides | Game, Rewards & Platform Guides",
    description:
      locale === "zh"
        ? "1XROLL 攻略中心：入门路径、游戏分类、优惠与奖励识读、VIP、钱包概念、公平游戏与理性参与。帮助你理解生态，而不是追逐不确定结果。"
        : "1XROLL Guides hub: getting started, game categories, promotions and rewards literacy, VIP, wallet concepts, fair play and responsible participation. Understand the ecosystem — not chase outcomes.",
  });
}

export default async function GuidesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const zh = locale === "zh";
  const guides = getAllGuides();
  const faq = getFaqByIds([...FAQ_IDS]);
  const lp = (path: string) => localePath(locale, path);

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: lp("/") },
            { label: t(dict, "guides.hubTitle") },
          ]}
        />
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: t(dict, "nav.home"), url: absoluteUrl(lp("/")) },
              { name: t(dict, "guides.hubTitle"), url: absoluteUrl(lp(PATH)) },
            ]),
            faqJsonLd(
              faq.map((item) => ({
                question: localize(item.question, locale),
                answer: localize(item.answer, locale),
              })),
            ),
          ]}
        />

        <div className="rounded-[1.35rem] border border-border bg-bg-surface p-7 md:grid md:grid-cols-2 md:gap-8 md:p-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              {zh ? "知识中心" : "Knowledge hub"}
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-text md:text-5xl">
              {t(dict, "guides.hubTitle")}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              {zh
                ? "攻略中心帮助你理解如何开始、如何浏览游戏分类、平台功能如何配合优惠与奖励、VIP 与钱包概念如何识读，以及公平游戏与理性参与为什么重要。这里是编辑向导览，不是预测工具。"
                : "The Guides hub helps you understand getting started, game categories, how platform features sit beside promotions and rewards, VIP and wallet concepts, plus fair play and responsible participation. This is editorial orientation — not a prediction tool."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={lp("/games")}>
                {zh ? "浏览游戏" : "Explore Games"}
              </Button>
              <Button href="#start" variant="secondary">
                {zh ? "从这里开始" : "Start Here"}
              </Button>
            </div>
          </div>
          <div className="mt-8 grid gap-3 md:mt-0">
            {(zh
              ? [
                  { href: "#start", title: "入门攻略", body: "四步路径、界面识读与新手清单。" },
                  { href: "#games", title: "游戏攻略", body: "已上线分类怎么读、如何选择作品。" },
                  { href: "#offers", title: "奖励与优惠", body: "限时活动与奖励中心如何分开阅读。" },
                ]
              : [
                  { href: "#start", title: "Start Guides", body: "Four-step path, interface literacy and a beginner checklist." },
                  { href: "#games", title: "Game Guides", body: "How to read published categories and choose a title." },
                  { href: "#offers", title: "Rewards & Offers", body: "Read timed promotions and the rewards map separately." },
                ]
            ).map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="rounded-[1.2rem] border border-border bg-bg-elevated p-5 transition hover:border-accent/40"
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg text-text">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{card.body}</p>
              </Link>
            ))}
          </div>
        </div>

        <HubAnchorNav
          ariaLabel={zh ? "本页目录" : "On this page"}
          items={
            zh
              ? [
                  { href: "#nav", label: "导航" },
                  { href: "#start", label: "入门" },
                  { href: "#games", label: "游戏" },
                  { href: "#offers", label: "优惠奖励" },
                  { href: "#wallet", label: "钱包" },
                  { href: "#faq", label: "常见问题" },
                ]
              : [
                  { href: "#nav", label: "Navigate" },
                  { href: "#start", label: "Start" },
                  { href: "#games", label: "Games" },
                  { href: "#offers", label: "Offers" },
                  { href: "#wallet", label: "Wallet" },
                  { href: "#faq", label: "FAQ" },
                ]
          }
        />

        <article className="mt-8 rounded-[1.35rem] border border-border bg-bg-surface p-7 md:grid md:grid-cols-2 md:gap-8 md:p-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              {zh ? "精选攻略" : "Featured guide"}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-text md:text-3xl">
              {zh ? "如何开始使用 1XROLL" : "How to get started with 1XROLL"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted md:text-base">
              {zh
                ? "先理解平台结构，再浏览游戏库，核对优惠与奖励信息，并阅读重要条款与理性参与说明。"
                : "Understand the platform, explore games, review rewards and promotions, and find the terms and responsible-use information that matter before you participate."}
            </p>
            <Button href={guidePath(locale, "beginners-guide-1xroll-games")} className="mt-6">
              {zh ? "阅读攻略" : "Read Guide"}
            </Button>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-0">
            {(zh
              ? [
                  "认识主导航与分类",
                  "浏览游戏库",
                  "阅读优惠与奖励",
                  "核对称谓与理性游戏",
                ]
              : [
                  "Learn navigation and categories",
                  "Explore the game library",
                  "Review promotions and rewards",
                  "Check terms and responsible play",
                ]
            ).map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-bg-elevated px-4 py-4 text-sm text-text"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>

        <div id="nav" className="scroll-mt-28">
          <InfoGrid
            title={zh ? "快速导览" : "Quick guide navigation"}
            columns={4}
            items={
              zh
                ? [
                    { title: "入门", body: "导航、分类与账户区域怎么找。", href: "#getting-started" },
                    { title: "游戏", body: "已上线分类的识读入口。", href: "#games" },
                    { title: "优惠与奖励", body: "限时活动与奖励中心如何分开读。", href: "#offers" },
                    { title: "钱包与交易", body: "存款、取款与返水概念。", href: "#wallet" },
                    { title: "VIP", body: "持续礼遇通道与公开返水上限。", href: lp("/vip") },
                    { title: "平台功能", body: "活动、奖励、下载与合作入口。", href: "#platform" },
                    { title: "公平游戏", body: "规则、信息与合理预期。", href: lp("/fair-play") },
                    { title: "理性游戏", body: "限额、休息与支持路径。", href: lp("/responsible-gaming") },
                  ]
                : [
                    { title: "Getting Started", body: "Find navigation, categories and account areas.", href: "#getting-started" },
                    { title: "Games", body: "Literacy for categories that actually exist here.", href: "#games" },
                    { title: "Promotions & Rewards", body: "Read timed offers and the rewards map separately.", href: "#offers" },
                    { title: "Wallet & Transactions", body: "Deposit, withdraw and rebate concepts.", href: "#wallet" },
                    { title: "VIP", body: "Ongoing benefits lane and the published cashback ceiling.", href: lp("/vip") },
                    { title: "Platform Features", body: "Activity, rewards, download and partnership entries.", href: "#platform" },
                    { title: "Fair Play", body: "Rules, information and realistic expectations.", href: lp("/fair-play") },
                    { title: "Responsible Gaming", body: "Limits, breaks and support paths.", href: lp("/responsible-gaming") },
                  ]
            }
          />
        </div>

        <div id="start" className="scroll-mt-28">
          <StepGrid
            title={zh ? "第一次来 1XROLL？" : "New to 1XROLL?"}
            subtitle={
              zh
                ? "用四步建立地图：先认识平台，再浏览游戏库，然后理解优惠与奖励，最后读懂重要用语与理性参与原则。"
                : "Build a map in four steps: discover the platform, explore the library, understand promotions and rewards, then learn the terms and responsible-use principles that matter."
            }
            steps={
              zh
                ? [
                    { title: "认识平台", body: "首页把游戏库、优惠、奖励、VIP、攻略与代理放在同一条生态线上。" },
                    { title: "浏览游戏库", body: "按分类进入老虎机、真人、快速游戏等已核实通道。" },
                    { title: "理解优惠与奖励", body: "优惠是限时加入；奖励中心是礼遇地图。分开阅读条款。" },
                    { title: "用语与理性原则", body: "先读条款与理性游戏，再决定如何参与。" },
                  ]
                : [
                    { title: "Discover the platform", body: "The homepage places the library, promotions, rewards, VIP, guides and agent on one ecosystem line." },
                    { title: "Explore the game library", body: "Enter verified lanes such as slots, live casino and fast games." },
                    { title: "Understand promotions and rewards", body: "Promotions are timed opt-ins; Rewards is the benefits map. Read terms separately." },
                    { title: "Terms and responsible use", body: "Learn the language and responsible-gaming principles before you participate." },
                  ]
            }
          />
          <p className="mt-4 text-sm text-text-muted">
            <Link href={lp("/guides/beginners-guide-1xroll-games")} className="text-accent hover:underline">
              {zh ? "阅读新手攻略" : "Read the beginner guide"}
            </Link>
            {" · "}
            <Link href={lp("/beginner-guide")} className="text-accent hover:underline">
              {zh ? "新手指南枢纽" : "Beginner guide hub"}
            </Link>
          </p>
        </div>

        <div id="getting-started" className="scroll-mt-28">
          <ChecklistPanel
            title={zh ? "入门：先认识界面" : "Getting started: learn the interface"}
            subtitle={
              zh
                ? "主导航连接游戏、优惠、奖励、VIP、攻略与支持相关页面。分类页帮助你按体验类型浏览；账户与钱包相关说明在存款、取款与联系页。这份清单是可选方向，不是必须完成的任务。"
                : "Main navigation connects games, promotions, rewards, VIP, guides and support-related pages. Category pages help you browse by experience type; wallet orientation lives on deposit, withdraw and contact pages. This checklist is optional direction — not a required task list."
            }
            items={
              zh
                ? [
                    "浏览游戏库",
                    "查看当前优惠",
                    "探索奖励中心",
                    "阅读相关条款",
                    "查看理性游戏信息",
                    "找到支持 / 联系入口",
                  ]
                : [
                    "Explore the game library",
                    "Review current promotions",
                    "Explore rewards",
                    "Understand relevant terms",
                    "Review responsible gaming information",
                    "Find support / contact information",
                  ]
            }
          />
        </div>

        <div id="games" className="scroll-mt-28">
          <HubH2>{zh ? "游戏攻略" : "Game guides"}</HubH2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
            {zh
              ? "以下分类均存在于当前站点架构。卡片说明该通道是什么、你可以期待怎样的浏览体验，以及进入前应先核对哪些信息。"
              : "These categories exist in the current site architecture. Each card explains the lane, what browsing feels like, and what to review before you explore."}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={lp(categoryPath(cat.id))}
                className="rounded-[1.2rem] border border-border bg-bg-elevated p-5 transition hover:border-accent/40"
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg text-text">
                  {localize(cat.name, locale)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {localize(cat.shortDescription, locale)}
                </p>
                <p className="mt-3 text-xs text-text-faint">
                  {zh
                    ? "进入前：查看分类说明与作品信息，不要假设结果。"
                    : "Before exploring: read the category notes and title information. Do not assume outcomes."}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <InfoGrid
          title={zh ? "如何选择游戏" : "How to choose a game"}
          columns={4}
          items={
            zh
              ? [
                  { title: "分类", body: "先选通道：转轴、真人桌台、快速游戏、体育或其他已上线分类。" },
                  { title: "风格", body: "节奏、主题与互动方式因作品而异。用目录页比较，而不是传闻。" },
                  { title: "可见信息", body: "规则、赔付表或帮助页（若提供）应在参与前阅读。" },
                  { title: "个人偏好", body: "时间、预算与舒适度优先。老虎机教育概念包括 RTP、波动率、赔付线与特色玩法——除非作品页给出已核实数据，否则只作通用理解。" },
                ]
              : [
                  { title: "Category", body: "Start with a lane: reels, live tables, fast games, sports or another published category." },
                  { title: "Game style", body: "Pace, theme and interaction differ by title. Compare in the library — not via rumour." },
                  { title: "Information available", body: "Rules, paytables or help screens — when provided — should be read before you play." },
                  { title: "Personal preference", body: "Time, budget and comfort come first. For slots, RTP, volatility, paylines and bonus features are educational concepts — use generic understanding unless a title page has verified data." },
                ]
          }
        />

        <div id="offers" className="scroll-mt-28">
          <HubH2>{zh ? "优惠与奖励导览" : "Promotions & rewards guides"}</HubH2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className="rounded-[1.35rem] border border-border bg-bg-surface p-6 md:p-8">
              <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-accent uppercase">
                {zh ? "优惠" : "Promotions"}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-text">
                {zh ? "在优惠枢纽阅读限时活动" : "Read timed offers on Promotions"}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {zh
                  ? "优惠呈现在优惠页与平台活动区。加入前核对资格、流水要求、有效期，以及该活动是否适用于你——并非每项优惠都面向所有用户。"
                  : "Promotions appear on the Promotions hub and in the platform activity area. Before opting in, check eligibility, turnover, expiry and whether the offer applies to you — not every offer applies to every user."}
              </p>
              <Button href={lp("/promotions")} variant="secondary" className="mt-5">
                {t(dict, "nav.promotions")}
              </Button>
            </article>
            <article className="rounded-[1.35rem] border border-border bg-bg-surface p-6 md:p-8">
              <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-accent uppercase">
                {zh ? "奖励" : "Rewards"}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-text">
                {zh ? "奖励中心是礼遇地图" : "Rewards is the benefits map"}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {zh
                  ? "奖励生态把活动中心、返水、VIP 与优惠放在同一张地图上。它不同于单次限时优惠：先看资格与条款，再决定如何使用奖励中心。"
                  : "The rewards ecosystem places activity, rebates, VIP and promotions on one map. It is different from a single timed offer: review eligibility and terms, then use the Reward Center accordingly."}
              </p>
              <Button href={lp("/rewards")} variant="secondary" className="mt-5">
                {t(dict, "nav.rewards")}
              </Button>
            </article>
          </div>
        </div>

        <div id="wallet" className="scroll-mt-28">
          <InfoGrid
            title={zh ? "钱包与交易导览" : "Wallet & transaction guides"}
            subtitle={
              zh
                ? "钱包相关页面帮助你理解存款、取款、返水与交易记录的概念。可用方法与处理条件可能不同，请在继续前查看平台当前展示的信息。"
                : "Wallet pages help you understand deposit, withdrawal, rebate and transaction concepts. Available methods and processing conditions may vary. Review the current information shown on the platform before proceeding."
            }
            columns={4}
            items={[
              {
                title: t(dict, "nav.deposit"),
                body: zh ? "存款概念与进入平台前应核对的信息。" : "Deposit concepts and what to review before you proceed.",
                href: lp("/deposit"),
              },
              {
                title: t(dict, "nav.withdraw"),
                body: zh ? "取款概念与适用条款。" : "Withdrawal concepts and applicable terms.",
                href: lp("/withdraw"),
              },
              {
                title: t(dict, "nav.rebates"),
                body: zh ? "返水作为回馈概念通道，与 VIP / 优惠分开阅读。" : "Rebates as a cashback-concept lane — read separately from VIP and promotions.",
                href: lp("/rebates"),
              },
              {
                title: t(dict, "nav.payments"),
                body: zh ? "支付方式说明。不编造到账速度。" : "Payment-method orientation. Speeds are not invented here.",
                href: lp("/payment-methods"),
              },
            ]}
          />
        </div>

        <div id="platform" className="scroll-mt-28">
          <InfoGrid
            title={zh ? "平台功能" : "Platform features"}
            columns={4}
            items={[
              { title: zh ? "活动相关" : "Activity", body: zh ? "优惠与奖励入口帮助你找到当期活动语言。" : "Promotions and rewards entries help you find current activity language.", href: lp("/promotions") },
              { title: zh ? "奖励中心" : "Rewards Center", body: zh ? "礼遇通道地图。" : "Map of benefit lanes.", href: lp("/rewards") },
              { title: t(dict, "nav.vip"), body: zh ? "持续关系与返水导览。" : "Ongoing relationship and cashback orientation.", href: lp("/vip") },
              { title: zh ? "游戏库" : "Game Library", body: zh ? "分类与作品发现。" : "Category and title discovery.", href: lp("/games") },
              { title: t(dict, "nav.guides"), body: zh ? "你正在阅读的知识中心。" : "The knowledge centre you are reading now.", href: lp("/guides") },
              { title: t(dict, "nav.download"), body: zh ? "移动访问导览。" : "Mobile access orientation.", href: lp("/download") },
              { title: t(dict, "nav.agent"), body: zh ? "合作与代理信息。" : "Partnership and agent information.", href: lp("/agent") },
              { title: t(dict, "nav.fairPlay"), body: zh ? "透明度与规则识读。" : "Transparency and rules literacy.", href: lp("/fair-play") },
            ]}
          />
        </div>

        <HighlightPanel
          kicker={zh ? "公平游戏" : "Fair play"}
          title={zh ? "先理解信息，再参与" : "Understand information before you play"}
          body={
            zh
              ? "查看游戏信息与规则，阅读适用条款，避免对结果作未经证实的假设，并以负责任的方式使用平台。"
              : "Check game information and rules, read applicable terms, avoid assumptions about outcomes, and use the platform responsibly."
          }
          points={
            zh
              ? ["规则优先于传闻", "条款分开阅读", "结果无法预知"]
              : ["Rules over rumour", "Read terms separately", "Outcomes are uncertain"]
          }
        />
        <p className="-mt-6 text-sm text-text-muted">
          <Link href={lp("/fair-play")} className="text-accent hover:underline">
            {t(dict, "nav.fairPlay")} →
          </Link>
        </p>

        <div className="mt-10 rounded-[1.35rem] border border-accent/20 bg-bg-surface p-6 md:grid md:grid-cols-2 md:gap-8 md:p-8">
          <div>
            <HubH2>{zh ? "理性游戏" : "Responsible gaming"}</HubH2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted md:text-base">
              {zh
                ? "娱乐应保持在个人限额内。参与前理解条款；不要追逐损失；适时休息。如果游戏不再可控，请离开并寻求支持。"
                : "Entertainment should stay within personal limits. Understand terms before participating; avoid chasing losses; take breaks. If play stops feeling manageable, step away and seek support."}
            </p>
            <Button href={lp("/responsible-gaming")} variant="secondary" className="mt-5">
              {t(dict, "nav.responsible")}
            </Button>
          </div>
          <ul className="mt-6 grid gap-3 md:mt-0">
            {(zh
              ? ["保持个人限额", "不要追逐损失", "需要时暂停并寻求支持"]
              : ["Stay within personal limits", "Do not chase losses", "Pause and seek support when needed"]
            ).map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-bg-elevated px-4 py-4 text-sm text-text"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <HubH2>{zh ? "攻略目录" : "Guide directory"}</HubH2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "beginners-guide-1xroll-games",
              "explore-game-categories",
              "mobile-gaming-guide",
              "fortune-tiger-guide",
              "mahjong-ways-2-guide",
              "gates-of-olympus-guide",
              "understanding-rtp-volatility",
              "understanding-game-providers",
              "live-casino-basics",
              "understanding-promotions-terms",
              "understanding-rewards-vip",
              "responsible-gaming-guide",
            ]
              .map((slug) => guides.find((g) => g.slug === slug))
              .filter((g): g is NonNullable<typeof g> => Boolean(g))
              .map((guide) => (
                <ArticleCard key={guide.id} guide={guide} locale={locale} />
              ))}
          </div>
          <InfoGrid
            title={zh ? "相关枢纽" : "Related hubs"}
            columns={4}
            items={[
              { title: t(dict, "nav.vip"), body: zh ? "VIP 礼遇导览。" : "VIP benefits orientation.", href: lp("/vip") },
              { title: t(dict, "nav.promotions"), body: zh ? "优惠条款识读。" : "Promotion terms literacy.", href: lp("/promotions") },
              { title: t(dict, "nav.rewards"), body: zh ? "奖励中心地图。" : "Rewards map.", href: lp("/rewards") },
              { title: t(dict, "nav.faq"), body: zh ? "更多问答。" : "More questions.", href: lp("/faq") },
              { title: t(dict, "nav.fairPlay"), body: zh ? "公平游戏。" : "Fair play.", href: lp("/fair-play") },
              { title: t(dict, "nav.responsible"), body: zh ? "理性参与。" : "Responsible participation.", href: lp("/responsible-gaming") },
              { title: t(dict, "nav.deposit"), body: zh ? "存款概念。" : "Deposit concepts.", href: lp("/deposit") },
              { title: t(dict, "nav.contact"), body: zh ? "联系与支持入口。" : "Contact and support entry.", href: lp("/contact") },
            ]}
          />
        </div>

        <div id="faq" className="mt-14 scroll-mt-28">
          <HubH2>{zh ? "攻略常见问题" : "Guides FAQ"}</HubH2>
          <div className="mt-5">
            <Accordion
              items={faq.map((item) => ({
                id: item.id,
                title: localize(item.question, locale),
                content: localize(item.answer, locale),
              }))}
            />
          </div>
        </div>

        <RelatedCards
          title={zh ? "相关内容" : "Related content"}
          items={[
            { href: lp("/games"), title: t(dict, "nav.games"), body: zh ? "进入游戏库。" : "Enter the library." },
            { href: lp("/promotions"), title: t(dict, "nav.promotions"), body: zh ? "限时活动摘要。" : "Timed offer summaries." },
            { href: lp("/rewards"), title: t(dict, "nav.rewards"), body: zh ? "礼遇地图。" : "Benefits map." },
            { href: lp("/vip"), title: t(dict, "nav.vip"), body: zh ? "VIP 枢纽。" : "VIP hub." },
            { href: lp("/providers"), title: t(dict, "nav.providers"), body: zh ? "已核实工作室。" : "Verified studios." },
            { href: lp("/faq"), title: t(dict, "nav.faq"), body: zh ? "全站问答。" : "Site-wide answers." },
            { href: lp("/responsible-gaming"), title: t(dict, "nav.responsible"), body: zh ? "限额与支持。" : "Limits and support." },
          ]}
        />

        <HubCtaBand
          locale={locale}
          title={zh ? "探索 1XROLL 生态" : "Explore the 1XROLL Ecosystem"}
          body={
            zh
              ? "把识读带回游戏库、优惠与奖励。攻略解释概念；实时办理仍在平台完成。"
              : "Take literacy back to the library, promotions and rewards. Guides explain concepts; live actions remain on the platform."
          }
          actions={[
            { href: lp("/games"), label: zh ? "浏览游戏" : "Explore Games", variant: "primary" },
            { href: lp("/promotions"), label: zh ? "查看优惠" : "View Promotions", variant: "secondary" },
            { href: lp("/rewards"), label: zh ? "探索奖励" : "Explore Rewards", variant: "outline" },
          ]}
        />
      </Container>
    </Section>
  );
}
