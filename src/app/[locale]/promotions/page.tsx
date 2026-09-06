import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getFaqByGroup, promotions } from "@/data";
import { ctaConfig } from "@/config/site";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { localePath } from "@/lib/paths";
import { absoluteUrl, localize } from "@/lib/utils";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  ChecklistPanel,
  CompareGrid,
  FeatureSplit,
  HighlightPanel,
  HubAnchorNav,
  HubCtaBand,
  HubH2,
  InfoGrid,
  JourneyStrip,
  RelatedCards,
  StepGrid,
} from "@/components/content/HubModules";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/promotions",
    title: t(dict, "promotions.title"),
    description: t(dict, "promotions.subtitle"),
  });
}

export default async function PromotionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const faq = getFaqByGroup("promotions").slice(0, 10);
  const welcome = promotions.find((p) => p.id === "welcome-200") ?? promotions[0]!;

  const zh = locale === "zh";

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: t(dict, "promotions.title") },
          ]}
        />
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: t(dict, "nav.home"), url: absoluteUrl(localePath(locale, "/")) },
              {
                name: t(dict, "promotions.title"),
                url: absoluteUrl(localePath(locale, "/promotions")),
              },
            ]),
            faqJsonLd(
              faq.map((item) => ({
                question: localize(item.question, locale),
                answer: localize(item.answer, locale),
              })),
            ),
          ]}
        />

        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          {zh ? "活动中心" : "Promotion Hub"}
        </p>
        <h1 className="mt-2 max-w-4xl font-[family-name:var(--font-display)] text-4xl text-text md:text-5xl">
          {t(dict, "promotions.title")}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-muted md:text-lg">
          {zh
            ? "本页是已发布优惠的发现中心：浏览摘要、理解条款概念，再在登录后的平台确认资格与领取。卡片上的数字只来自已核实配置——不是独立领取系统。"
            : "This hub is for discovering published offers: scan summaries, understand terms as concepts, then confirm eligibility and claims on the platform after login. Figures on cards come from verified config — this is not a separate claim system."}
        </p>

        <HubAnchorNav
          items={
            zh
              ? [
                  { href: "#current", label: "当前活动" },
                  { href: "#featured", label: "精选" },
                  { href: "#how", label: "如何运作" },
                  { href: "#terms", label: "条款" },
                  { href: "#faq", label: "常见问题" },
                ]
              : [
                  { href: "#current", label: "Overview" },
                  { href: "#featured", label: "Featured" },
                  { href: "#how", label: "How it works" },
                  { href: "#terms", label: "Terms" },
                  { href: "#faq", label: "FAQ" },
                ]
          }
        />

        <div className="mt-12 scroll-mt-28" id="current">
          <HubH2>{zh ? "当前活动" : "Current promotions"}</HubH2>
          <p className="mt-3 max-w-3xl text-sm text-text-muted">
            {zh
              ? "以下摘要镜像公开材料。资格因账户与地区而异；参与前请阅读平台实时条款。"
              : "Summaries below mirror published materials. Eligibility varies by account and region — read live platform terms before you join."}
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {promotions.map((promo) => (
              <article
                key={promo.id}
                className="flex flex-col overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface"
              >
                {promo.image ? (
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={promo.image}
                      alt={localize(promo.title, locale)}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col space-y-3 p-5">
                  <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-accent uppercase">
                    {zh ? "已发布摘要" : "Published summary"}
                  </p>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-text">
                    {localize(promo.title, locale)}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {localize(promo.description, locale)}
                  </p>
                  <p className="text-xs text-text-faint">
                    {zh
                      ? "资格因账户而异。领取与进度在平台完成。"
                      : "Eligibility varies. Claiming and progress complete on the platform."}
                  </p>
                  <Link
                    href={localePath(locale, promo.href)}
                    className="mt-auto pt-2 text-sm font-medium text-accent hover:underline"
                  >
                    {localize(promo.ctaLabel, locale)} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <InfoGrid
          title={zh ? "优惠类型一览" : "Promotion overview"}
          subtitle={
            zh
              ? "本站目前策展三类已核实公开摘要。其他大厅活动可能登录后才出现——我们不为未列出的活动编造规则。"
              : "This site currently curates three verified public summaries. Other lobby activities may appear after login — we do not invent rules for unlisted offers."
          }
          columns={3}
          items={[
            {
              title: zh ? "首存类" : "First deposit",
              body: zh
                ? "面向首次充值路径的匹配式摘要。已核实：200%、最高 8,888 USDT、25 倍流水、最低 10 USDT。"
                : "Matching-style summary for a first top-up path. Verified: 200%, up to 8,888 USDT, 25× turnover, min. 10 USDT.",
            },
            {
              title: zh ? "VIP / 返水" : "VIP / cashback",
              body: zh
                ? "符合条件投注的回馈上限摘要为最高 1.1%。等级细节只存在于平台。"
                : "Cashback on eligible bets summarised as up to 1.1%. Tier detail lives only on the platform.",
            },
            {
              title: zh ? "奖池 / 活动" : "Events / prize pool",
              body: zh
                ? "指定作品上的奖池式活动。当期规则、作品名单与窗口以平台为准——本站不编造奖池金额。"
                : "Prize-pool style events on selected titles. Current rules, title lists and windows belong on the platform — we do not invent pool amounts.",
            },
          ]}
        />

        <div id="featured" className="scroll-mt-28">
        <FeatureSplit
          kicker={zh ? "精选优惠" : "Featured offer"}
          title={localize(welcome.title, locale)}
          image={welcome.image}
          imageAlt={localize(welcome.title, locale)}
          body={
            zh
              ? "这是本站镜像的首存路径摘要。它解释公开数字如何组合，而不是保证你会领到上限。资格、游戏贡献与领取步骤只在平台显示时才算有效。"
              : "This is the first-deposit path summarised on this site. It explains how published figures combine — it does not guarantee you will receive the ceiling. Eligibility, game contribution and claim steps are valid only as shown on the platform."
          }
          points={
            zh
              ? [
                  "200% 首存匹配风格（公开摘要）",
                  "最高 8,888 USDT — 上限，不是典型结果",
                  "25 倍流水 — 概念见下方条款卡",
                  "最低存款 10 USDT",
                ]
              : [
                  "200% first-deposit matching style (published summary)",
                  "Up to 8,888 USDT — a ceiling, not a typical outcome",
                  "25× turnover — concept explained in the terms cards",
                  "Minimum deposit 10 USDT",
                ]
          }
          cta={
            <>
              <Button href={ctaConfig.register.href} external>
                {zh ? "前往平台确认" : "Confirm on platform"}
              </Button>
              <Button href={localePath(locale, "/rewards")} variant="secondary">
                {t(dict, "nav.rewards")}
              </Button>
            </>
          }
        />
        </div>

        <div id="how" className="scroll-mt-28">
        <StepGrid
          title={zh ? "优惠如何运作" : "How promotions work"}
          subtitle={
            zh
              ? "四步保持冷静：先读摘要，再核资格，再行动，最后只在平台看进度。"
              : "Four calm steps: read the summary, check eligibility, complete the required action, then track progress only on the platform."
          }
          steps={
            zh
              ? [
                  {
                    title: "阅读摘要",
                    body: "用本页卡片理解优惠类型与已核实数字。把摘要当地图，不当领取按钮。",
                  },
                  {
                    title: "核对其资格",
                    body: "账户状态、地区、是否首存、活动窗口都可能影响资格。本站不编造额外门槛。",
                  },
                  {
                    title: "完成要求动作",
                    body: "存款、加入或指定投注只在平台规则要求时发生。不要为“做完活动”而超出预算。",
                  },
                  {
                    title: "在平台查看进度",
                    body: "流水、贡献游戏与领取状态只存在于登录后的工具。品牌站不会显示个人进度条。",
                  },
                ]
              : [
                  {
                    title: "Review the offer",
                    body: "Use cards on this page to understand offer type and verified figures. Treat summaries as a map, not a claim button.",
                  },
                  {
                    title: "Check eligibility",
                    body: "Account status, region, first-deposit status and offer windows can all matter. This site does not invent extra thresholds.",
                  },
                  {
                    title: "Complete the required action",
                    body: "Deposits, opt-ins or specified play happen only as the platform rules require. Do not overspend to “finish” an offer.",
                  },
                  {
                    title: "Track progress on the platform",
                    body: "Turnover, contributing games and claim status live in logged-in tools. This brand site does not show personal progress bars.",
                  },
                ]
          }
        />
        </div>

        <div id="terms" className="scroll-mt-28">
        <InfoGrid
          title={zh ? "理解优惠条款" : "Understanding promotion terms"}
          subtitle={
            zh
              ? "以下卡片解释概念。除已核实的首存数字与 1.1% 返水上限外，不编造具体条件。"
              : "These cards explain concepts. Aside from verified first-deposit figures and the 1.1% cashback ceiling, we do not invent exact conditions."
          }
          columns={3}
          items={
            zh
              ? [
                  {
                    title: "资格",
                    body: "可能包括新账户、地区或活动窗口。以平台当前规则为准。",
                  },
                  {
                    title: "最低存款",
                    body: "公开首存摘要为 10 USDT。其他活动门槛只在平台列出时才有效。",
                  },
                  {
                    title: "流水 / 投注要求",
                    body: "通常指提取相关资金前需完成的有效投注倍数。首存摘要为 25 倍；其他活动请勿混用该数字。",
                  },
                  {
                    title: "计入游戏",
                    body: "哪些分类贡献流水因活动而异。本站不编造权重表。",
                  },
                  {
                    title: "时间窗口",
                    body: "优惠可能有加入期限或完成期限。过期规则只在平台条款中确认。",
                  },
                  {
                    title: "领取规则",
                    body: "领取、取消与冲突优惠处理属于平台流程。品牌站不能代领。",
                  },
                ]
              : [
                  {
                    title: "Eligibility",
                    body: "May include new-account status, region or offer windows. Trust the platform’s current rules.",
                  },
                  {
                    title: "Minimum deposit",
                    body: "The published first-deposit summary uses 10 USDT. Other offer floors are valid only when listed on the platform.",
                  },
                  {
                    title: "Turnover / wagering",
                    body: "Usually a multiple of eligible bets before related funds can be withdrawn. The welcome summary uses 25× — do not reuse that figure on other offers.",
                  },
                  {
                    title: "Eligible games",
                    body: "Which categories contribute toward wagering varies by offer. We do not invent weighting tables.",
                  },
                  {
                    title: "Time window",
                    body: "Offers may have join or completion deadlines. Expiry rules are confirmed only in platform terms.",
                  },
                  {
                    title: "Claim rules",
                    body: "Claiming, cancelling and conflicting-offer handling belong to platform flows. This brand site cannot claim for you.",
                  },
                ]
          }
        />

        <HighlightPanel
          kicker={zh ? "为何这些条件重要" : "Why these conditions matter"}
          title={zh ? "优惠条款识读" : "Promotion terms explained"}
          body={
            zh
              ? "资格、流水、计入、时限、过期与领取步骤决定摘要数字会不会变成压力。它们不是找漏洞的清单，而是保护预算墙的阅读顺序。"
              : "Eligibility, wagering, contribution, timing, expiry and claim steps decide whether a headline figure becomes pressure. This is a reading order to protect a budget wall — not a loophole hunt."
          }
          points={
            zh
              ? [
                  "资格：卡片不等于人人可领",
                  "流水：25 倍只属于首存摘要",
                  "计入：哪些游戏贡献只在平台列出",
                  "时限与过期：窗口只在实时条款中",
                  "领取：品牌站不能代领",
                ]
              : [
                  "Eligibility: a card is not a personal entitlement",
                  "Wagering: 25× belongs only to the welcome summary",
                  "Contribution: eligible activity is listed only on the platform",
                  "Timing and expiry: windows live in live terms",
                  "Claiming: this brand site cannot claim for you",
                ]
          }
        />

        <InfoGrid
          title={zh ? "常见优惠误解" : "Common promotion mistakes"}
          columns={3}
          items={
            zh
              ? [
                  { title: "以为人人可领", body: "同一张卡可能因账户与地区而不可见。先看平台提示。" },
                  { title: "忽略窗口", body: "摘要不会倒数。过期规则只在实时条款。" },
                  { title: "误解流水", body: "把 25 倍套到返水或奖池，会读错通道。" },
                  { title: "不核对计入游戏", body: "不是所有分类都以同样方式贡献。" },
                  { title: "只信摘要", body: "冲突时以平台全文为准。" },
                  { title: "为做完而加注", body: "倍数是规则，不是必须完成的任务。" },
                ]
              : [
                  { title: "Assuming every offer applies", body: "The same card can be hidden by account or region. Read platform prompts first." },
                  { title: "Ignoring windows", body: "A summary does not count down. Expiry lives in live terms." },
                  { title: "Misreading wagering", body: "Reusing 25× on cashback or prize pools mixes lanes." },
                  { title: "Skipping eligible activity", body: "Not every category contributes the same way." },
                  { title: "Trusting only the summary", body: "When texts conflict, the platform terms win." },
                  { title: "Raising stakes to finish", body: "A multiple is a rule, not a quest." },
                ]
          }
        />

        <InfoGrid
          title={zh ? "如何选择适合自己的优惠" : "How to choose the right promotion"}
          columns={2}
          items={
            zh
              ? [
                  {
                    title: "新用户路径",
                    body: "若你尚未完成首次充值，先读首存摘要，再决定该数字是否符合你已设定的预算墙。",
                  },
                  {
                    title: "返水式礼遇",
                    body: "若你更在意持续回馈而非限时倍数，转到 VIP 页阅读最高 1.1% 的公开上限说明。",
                  },
                  {
                    title: "活动式奖池",
                    body: "奖池类活动依赖当期大厅规则。把它当可选娱乐，而不是必须追上的进度条。",
                  },
                  {
                    title: "个人资格",
                    body: "同一张卡片不等于人人可领。登录后核对账户提示，再决定是否加入。",
                  },
                ]
              : [
                  {
                    title: "New-user offers",
                    body: "If you have not completed a first top-up, read the welcome summary and decide whether those figures fit a budget wall you already set.",
                  },
                  {
                    title: "Cashback-style benefits",
                    body: "If you prefer ongoing return language over a timed multiple, open the VIP page for the published up-to-1.1% ceiling.",
                  },
                  {
                    title: "Event-style promotions",
                    body: "Prize-pool activities depend on the current lobby. Treat them as optional entertainment, not a progress bar you must chase.",
                  },
                  {
                    title: "Personal eligibility",
                    body: "The same card is not a promise for every account. Confirm prompts after login before you opt in.",
                  },
                ]
          }
        />
        </div>

        <CompareGrid
          title={zh ? "优惠、奖励、返水与 VIP" : "Promotion vs Rewards"}
          subtitle={
            zh
              ? "四条车道互补。不要把不同页的数字叠成一条保证路径。"
              : "Four complementary lanes. Do not stack figures from different pages into one guaranteed path."
          }
          columns={
            zh
              ? [
                  {
                    title: "优惠",
                    body: "通常限时、可加入、带资格与流水规则。首存摘要是本站最具体的已核实例子。",
                  },
                  {
                    title: "奖励",
                    body: "更宽的生态地图：如何把活动、回馈与 VIP 放在一起阅读。",
                  },
                  {
                    title: "返水",
                    body: "符合条件投注的回馈式返还概念，常与 VIP 相连；上限摘要为 1.1%。",
                  },
                  {
                    title: "VIP",
                    body: "持续关系通道。不在本站编造 VIP 1–4 阶梯或周月固定金额。",
                  },
                ]
              : [
                  {
                    title: "Promotion",
                    body: "Usually time-bound, opt-in, with eligibility and wagering rules. The welcome summary is this site’s most specific verified example.",
                  },
                  {
                    title: "Rewards",
                    body: "A wider map of how activities, returns and VIP sit together as a reading path.",
                  },
                  {
                    title: "Rebates",
                    body: "Cashback-style return on eligible play, often linked to VIP; published ceiling up to 1.1%.",
                  },
                  {
                    title: "VIP",
                    body: "An ongoing relationship lane. This site does not invent VIP 1–4 ladders or weekly/monthly amounts.",
                  },
                ]
          }
        />

        <ChecklistPanel
          title={zh ? "领取前核对" : "Before you claim"}
          subtitle={
            zh
              ? "把这份清单当作冷静仪式，而不是催促加入的话术。"
              : "Treat this list as a calm ritual — not a push to opt in."
          }
          items={
            zh
              ? [
                  "核对其资格提示",
                  "阅读完整平台条款",
                  "确认活动仍在时间窗口内",
                  "理解流水要求（概念 + 该活动数字）",
                  "查看哪些游戏计入贡献",
                  "确认领取 / 取消流程",
                ]
              : [
                  "Check eligibility prompts",
                  "Read full platform terms",
                  "Confirm the offer is still inside its time window",
                  "Understand wagering (concept + that offer’s figure)",
                  "Check which games contribute",
                  "Confirm claim / cancel flow",
                ]
          }
        />

        <JourneyStrip
          title={zh ? "优惠旅程" : "Promotion journey"}
          subtitle={
            zh
              ? "发现 → 阅读 → 参与 → 跟踪 → 结束。任何一步都可以离开。"
              : "Discover → Review → Participate → Track → Complete. You can leave at any step."
          }
          steps={
            zh
              ? [
                  { title: "发现", body: "从本页卡片与类型一览开始。" },
                  { title: "阅读", body: "把摘要当地图，打开平台条款。" },
                  { title: "参与", body: "只完成规则要求的动作，不超出预算。" },
                  { title: "跟踪", body: "进度只在登录后的工具。" },
                  { title: "结束", body: "窗口结束或限额到达就停止。" },
                ]
              : [
                  { title: "Discover", body: "Start with the cards and type overview on this hub." },
                  { title: "Review", body: "Treat summaries as a map, then open platform terms." },
                  { title: "Participate", body: "Complete only required actions — do not raise your budget wall." },
                  { title: "Track", body: "Progress lives only in logged-in tools." },
                  { title: "Complete", body: "Stop when the window ends or your limit is reached." },
                ]
          }
        />

        <InfoGrid
          title={zh ? "理性参与" : "Responsible participation"}
          columns={2}
          items={
            zh
              ? [
                  {
                    title: "优惠不能加高预算墙",
                    body: "不要为了做完流水而提高超出计划的注额。倍数是规则，不是必须完成的任务。",
                  },
                  {
                    title: "需要停时就停",
                    body: "若追逐损失或压力上升，离开活动并阅读理性游戏。限额优先于任何摘要数字。",
                    href: localePath(locale, "/responsible-gaming"),
                  },
                ]
              : [
                  {
                    title: "Offers do not raise your budget wall",
                    body: "Do not increase stakes beyond your plan just to finish wagering. A multiple is a rule, not a quest.",
                  },
                  {
                    title: "Stop when entertainment stops",
                    body: "If chasing losses or pressure rises, leave the offer and read Responsible Gaming. Limits outrank any summary figure.",
                    href: localePath(locale, "/responsible-gaming"),
                  },
                ]
          }
        />

        <div id="faq" className="mt-14 scroll-mt-28">
          <HubH2>{zh ? "优惠常见问题" : "Promotion FAQ"}</HubH2>
          <div className="mt-5">
            <Accordion
              items={faq.map((item) => ({
                id: item.id,
                title: localize(item.question, locale),
                content: localize(item.answer, locale),
              }))}
            />
          </div>
          <p className="mt-4 text-sm text-text-muted">
            <Link href={localePath(locale, "/faq")} className="text-accent hover:underline">
              {zh ? "查看全部常见问题" : "View all FAQ"} →
            </Link>
          </p>
        </div>

        <RelatedCards
          title={zh ? "相关内容" : "Related content"}
          items={[
            {
              href: localePath(locale, "/rewards"),
              title: zh ? "奖励中心" : "Rewards",
              body: zh ? "把优惠放回更宽的礼遇地图。" : "Place offers back on the wider benefits map.",
            },
            {
              href: localePath(locale, "/vip"),
              title: "VIP",
              body: zh ? "阅读返水上限与关系通道说明。" : "Read cashback ceiling and relationship-lane notes.",
            },
            {
              href: localePath(locale, "/games"),
              title: zh ? "游戏库" : "Games",
              body: zh ? "把优惠放回发现路径。" : "Put offers back on the discovery path.",
            },
            {
              href: localePath(locale, "/guides/understanding-promotions-terms"),
              title: zh ? "优惠条款攻略" : "Promotions guide",
              body: zh ? "更慢的条款识读练习。" : "A slower walkthrough of reading terms.",
            },
            {
              href: localePath(locale, "/responsible-gaming"),
              title: zh ? "理性游戏" : "Responsible Gaming",
              body: zh ? "限额、休息与何时停止。" : "Limits, breaks, and when to stop.",
            },
          ]}
        />

        <HubCtaBand
          locale={locale}
          title={zh ? "准备好再打开平台" : "Open the platform when you are ready"}
          body={
            zh
              ? "用本页完成识读。领取、进度与冲突规则只在 1XROLL 平台生效。"
              : "Finish literacy here. Claiming, progress and conflict rules take effect only on the 1XROLL platform."
          }
          secondaryHref={localePath(locale, "/rewards")}
          secondaryLabel={zh ? "继续了解奖励" : "Continue to Rewards"}
        />
      </Container>
    </Section>
  );
}
