import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getFaqByIds, PUBLISHED_VIP_CASHBACK } from "@/data";
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
  ComparisonTable,
  EcosystemFlow,
  HighlightPanel,
  HubAnchorNav,
  HubCtaBand,
  HubH2,
  InfoGrid,
  JourneyStrip,
  RelatedCards,
} from "@/components/content/HubModules";
import { HubArt } from "@/components/content/HubVisuals";
import { HUB_ASSETS } from "@/data/assets";

const PATH = "/vip";
const FAQ_IDS = [
  "vip-what",
  "vip-vs-rewards",
  "vip-cashback",
  "vip-auto",
  "vip-vs-promos",
  "vip-terms",
  "vip-change",
  "vip-support",
  "vip-how",
  "vip-mobile",
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
        ? "1XROLL VIP | 礼遇、返水与奖励导览"
        : "1XROLL VIP | VIP Benefits, Cashback & Rewards Guide",
    description:
      locale === "zh"
        ? `了解 1XROLL VIP 如何融入奖励生态。公开摘要：VIP 返水最高 ${PUBLISHED_VIP_CASHBACK}。资格与细则以平台当前展示为准。`
        : `Learn how 1XROLL VIP fits the rewards ecosystem. Published summary: VIP cashback up to ${PUBLISHED_VIP_CASHBACK}. Eligibility and details follow what the platform currently shows.`,
  });
}

export default async function VipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const faq = getFaqByIds([...FAQ_IDS]);
  const zh = locale === "zh";
  const lp = (path: string) => localePath(locale, path);
  const h1 = zh ? "1XROLL VIP" : "1XROLL VIP";

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: lp("/") },
            { label: t(dict, "nav.vip") },
          ]}
        />
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: t(dict, "nav.home"), url: absoluteUrl(lp("/")) },
              { name: t(dict, "nav.vip"), url: absoluteUrl(lp(PATH)) },
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
            <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">VIP</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-text md:text-4xl">
              {h1}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              {zh
                ? "VIP 是 1XROLL 礼遇生态的一部分：帮助你理解持续关系通道、公开返水语言，以及它与奖励、优惠如何并列。实时状态仍在登录后的平台查看。"
                : "VIP is part of the wider 1XROLL benefits ecosystem: an orientation to the ongoing relationship lane, published cashback language, and how it sits beside Rewards and Promotions. Live status remains on the platform after login."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={lp("/rewards")}>{t(dict, "nav.rewards")}</Button>
              <Button href={lp("/promotions")} variant="secondary">
                {t(dict, "nav.promotions")}
              </Button>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <HubArt
              src={HUB_ASSETS.vipHero}
              alt={zh ? "1XROLL VIP 高端体验" : "1XROLL VIP premium experience"}
              aspectClass="aspect-[16/10] md:aspect-[4/3] md:h-full"
              objectPosition="bottom"
              overlay
              priority
            />
          </div>
        </div>

        <HubAnchorNav
          ariaLabel={zh ? "本页目录" : "On this page"}
          items={
            zh
              ? [
                  { href: "#glance", label: "总览" },
                  { href: "#cashback", label: "返水" },
                  { href: "#compare", label: "比较" },
                  { href: "#ecosystem", label: "生态" },
                  { href: "#faq", label: "常见问题" },
                ]
              : [
                  { href: "#glance", label: "Overview" },
                  { href: "#cashback", label: "Cashback" },
                  { href: "#compare", label: "Compare" },
                  { href: "#ecosystem", label: "Ecosystem" },
                  { href: "#faq", label: "FAQ" },
                ]
          }
        />

        <div id="glance" className="scroll-mt-28 mt-12 md:mt-16">
          <HubH2>{zh ? "VIP 一览" : "VIP at a glance"}</HubH2>
          <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <HubArt
              src={HUB_ASSETS.vipExperience}
              alt={zh ? "1XROLL VIP 礼遇体验" : "1XROLL VIP rewards experience"}
              aspectClass="aspect-[4/3] h-full min-h-[14rem]"
              overlay
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {(zh
                ? [
                    { title: "VIP 礼遇", body: "持续关系通道的导览，帮助你阅读公开语言。" },
                    { title: "返水", body: `符合条件活动的回馈概念。公开上限最高 ${PUBLISHED_VIP_CASHBACK}。` },
                    { title: "奖励", body: "把 VIP 放进奖励中心地图，与活动、优惠并列。" },
                    { title: "专属体验", body: "请在当前 VIP 计划中探索已提供的礼遇与功能——本站不编造具体等级礼包。" },
                  ]
                : [
                    { title: "VIP Benefits", body: "Orientation for the ongoing relationship lane and published language." },
                    { title: "Cashback", body: `Return language on eligible activity. Published ceiling up to ${PUBLISHED_VIP_CASHBACK}.` },
                    { title: "Rewards", body: "Places VIP on the Rewards map beside activity and offers." },
                    { title: "Exclusive Experience", body: "Explore the benefits and features made available through the current VIP program." },
                  ]
              ).map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.2rem] border border-border bg-bg-surface p-5"
                >
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-text">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <HighlightPanel
          kicker={zh ? "含义" : "Meaning"}
          title={zh ? "VIP 在生态中的位置" : "What VIP means"}
          body={
            zh
              ? "VIP 属于更广的奖励生态。应与当前条款一起阅读；礼遇可能受资格限制。请在平台核对当前展示的信息，再决定如何参与。"
              : "VIP belongs to the broader rewards ecosystem. Review it together with current terms; benefits may be subject to eligibility. Verify the information shown on the platform before you participate."
          }
          points={
            zh
              ? ["不是投资产品", "上限是导览事实", "办理在登录后"]
              : ["Not an investment product", "The ceiling is orientation", "Actions follow login"]
          }
        />

        <JourneyStrip
          title={zh ? "VIP 路径" : "VIP journey"}
          subtitle={
            zh
              ? "这是识读路径，不是自动升级承诺。"
              : "This is a literacy path — not an automatic upgrade promise."
          }
          steps={
            zh
              ? [
                  { title: "发现 VIP", body: "从本枢纽与奖励地图认识通道。" },
                  { title: "阅读可用礼遇", body: "先理解公开语言，例如返水上限。" },
                  { title: "理解资格与条款", body: "在平台核对谁适用、何时适用。" },
                  { title: "参与符合条件的活动", body: "按平台提示进行，不因此提高限额。" },
                  { title: "查看可用奖励", body: "有则进入，无则离开。" },
                ]
              : [
                  { title: "Discover VIP", body: "Meet the lane on this hub and the Rewards map." },
                  { title: "Review available benefits", body: "Start with published language such as the cashback ceiling." },
                  { title: "Understand eligibility and terms", body: "Confirm who and when on the platform." },
                  { title: "Participate in eligible activities", body: "Follow platform prompts — do not raise limits for a rate." },
                  { title: "Review available rewards", body: "Enter when they apply; leave when they do not." },
                ]
          }
        />

        <div id="cashback" className="scroll-mt-28 mt-12 md:mt-16">
          <div className="overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface md:grid md:grid-cols-2 md:items-stretch">
            <div className="order-1 p-6 md:order-2 md:p-8">
              <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-accent uppercase">
                {zh ? "VIP 返水" : "VIP cashback"}
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-text md:text-3xl">
                {zh
                  ? `最高 ${PUBLISHED_VIP_CASHBACK}`
                  : `Up to ${PUBLISHED_VIP_CASHBACK}`}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted md:text-base">
                {zh
                  ? `返水通常指符合条件活动的回馈语言。「最高 ${PUBLISHED_VIP_CASHBACK}」是已核实的公开上限，不是人人自动获得的固定比例。资格、权重与时间以平台当前条款为准。返水不同于限时优惠，也不同于奖励中心里其他通道——请分开阅读。`
                  : `Cashback generally means return language on eligible activity. “Up to ${PUBLISHED_VIP_CASHBACK}” is a published ceiling, not a guaranteed fixed rate for every user. Eligibility and terms should be reviewed on the platform. Cashback is different from timed promotions and from other reward lanes — read each separately.`}
              </p>
              <div className="mt-6">
                <Button href={lp("/rebates")} variant="secondary">
                  {zh ? "了解更多" : "Learn more"}
                </Button>
              </div>
            </div>
            <div className="order-2 md:order-1">
              <HubArt
                src={HUB_ASSETS.vipExperience}
                alt=""
                aspectClass="aspect-[16/10] h-full min-h-[12rem] rounded-none border-0 md:aspect-auto"
                overlay
              />
            </div>
          </div>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {(zh
              ? [
                  "在平台核对当前信息",
                  "不要与首存流水叠算",
                  "比例不是加注理由",
                ]
              : [
                  "Confirm current details on the platform",
                  "Do not stack with welcome wagering",
                  "A rate is not a reason to raise stakes",
                ]
            ).map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-bg-elevated p-4 text-sm text-text"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div id="compare" className="scroll-mt-28">
          <ComparisonTable
            title={zh ? "VIP 与其他礼遇" : "VIP vs other benefits"}
            columns={
              zh ? ["优惠", "奖励", "返水", "VIP"] : ["Promotions", "Rewards", "Rebates", "VIP"]
            }
            rows={
              zh
                ? [
                    {
                      label: "目的",
                      cells: ["限时加入的活动语言", "礼遇通道地图", "回馈概念说明", "持续关系与返水导览"],
                    },
                    {
                      label: "发现位置",
                      cells: ["优惠枢纽 / 平台活动", "奖励中心", "返水页与奖励地图", "本 VIP 枢纽与平台 VIP 区"],
                    },
                    {
                      label: "应核对的信息",
                      cells: ["资格、流水、有效期", "通道是否适用", "计算与到账条件", "资格、上限与时间"],
                    },
                    {
                      label: "生态位置",
                      cells: ["可与其他通道并存，但不叠数字", "把各通道放在一起理解", "常与 VIP 语言相邻", "属于奖励生态的持续一层"],
                    },
                  ]
                : [
                    {
                      label: "Purpose",
                      cells: [
                        "Timed opt-in offer language",
                        "Map of benefit lanes",
                        "Cashback-concept explanation",
                        "Ongoing relationship and cashback orientation",
                      ],
                    },
                    {
                      label: "Where users discover it",
                      cells: [
                        "Promotions hub / platform activity",
                        "Rewards Center",
                        "Rebates page and the rewards map",
                        "This VIP hub and the platform VIP area",
                      ],
                    },
                    {
                      label: "Typical information to review",
                      cells: [
                        "Eligibility, turnover, expiry",
                        "Whether a lane applies to you",
                        "Calculation and credit conditions",
                        "Eligibility, ceiling and timing",
                      ],
                    },
                    {
                      label: "How it fits into the ecosystem",
                      cells: [
                        "Can sit beside other lanes — do not stack figures",
                        "Helps you read the lanes together",
                        "Often adjacent to VIP language",
                        "The ongoing layer inside rewards",
                      ],
                    },
                  ]
            }
          />
        </div>

        <InfoGrid
          title={zh ? "如何阅读 VIP 信息" : "How to read VIP information"}
          columns={4}
          items={
            zh
              ? [
                  { title: "资格", body: "谁适用、需要满足哪些提示，只在平台确认。" },
                  { title: "礼遇说明", body: "公开摘要帮助识读；账户细节不在本站显示。" },
                  { title: "条件", body: "符合条件的活动、权重与排除项应逐条阅读。" },
                  { title: "时间 / 可用性", body: "礼遇可能有窗口。过期或变更以平台为准。" },
                ]
              : [
                  { title: "Eligibility", body: "Who it applies to, and which prompts apply, is confirmed on the platform." },
                  { title: "Benefit description", body: "Published summaries help you read the language; account details are not shown here." },
                  { title: "Conditions", body: "Eligible activity, weighting and exclusions should be read line by line." },
                  { title: "Timing / availability", body: "Benefits can have windows. Expiry or changes follow the platform." },
                ]
          }
        />

        <div id="ecosystem" className="scroll-mt-28">
          <EcosystemFlow
            title={zh ? "VIP 与奖励生态" : "VIP + rewards ecosystem"}
            subtitle={
              zh
                ? "这些通道彼此相邻，但一个不会自动授予另一个。请按链接分别阅读。"
                : "These lanes sit beside each other; one does not automatically grant another. Follow each link separately."
            }
            items={[
              {
                href: lp("/vip"),
                title: "VIP",
                body: zh ? "持续礼遇导览。" : "Ongoing benefits orientation.",
              },
              {
                href: lp("/rewards"),
                title: zh ? "奖励" : "Rewards",
                body: zh ? "生态地图。" : "Ecosystem map.",
              },
              {
                href: lp("/promotions"),
                title: zh ? "优惠" : "Promotions",
                body: zh ? "限时加入。" : "Timed opt-ins.",
              },
              {
                href: lp("/rebates"),
                title: zh ? "返水" : "Rebates",
                body: zh ? "回馈概念。" : "Cashback concepts.",
              },
              {
                href: lp("/promotions"),
                title: zh ? "活动入口" : "Activity Center",
                body: zh ? "当期活动语言入口。" : "Entry to current activity language.",
              },
            ]}
          />
        </div>

        <ChecklistPanel
          title={zh ? "参与前清单" : "VIP checklist"}
          subtitle={zh ? "在依赖任何礼遇前，建议核对这些方向。" : "Review these points before relying on a benefit."}
          items={
            zh
              ? [
                  "查看当前 VIP 信息",
                  "核对资格",
                  "阅读适用条款",
                  "理解返水条件",
                  "核对其它优惠 / 奖励条款",
                  "阅读理性参与指引",
                ]
              : [
                  "Check current VIP information",
                  "Review eligibility",
                  "Read applicable terms",
                  "Understand cashback conditions",
                  "Check relevant promotion / reward terms",
                  "Review responsible participation guidance",
                ]
          }
        />

        <InfoGrid
          title={zh ? "VIP 移动体验" : "VIP mobile experience"}
          columns={2}
          items={
            zh
              ? [
                  {
                    title: "本页可在手机阅读",
                    body: "枢纽在支持的设备上自然堆叠。实时 VIP 工具跟随平台移动网页或客户端。",
                  },
                  {
                    title: "下载导览",
                    body: "移动访问说明见下载页。本站不声称特定应用商店上架，除非已核实。",
                    href: lp("/download"),
                  },
                ]
              : [
                  {
                    title: "This page is readable on phones",
                    body: "The hub stacks on supported devices. Live VIP tools follow the platform’s mobile web or client.",
                  },
                  {
                    title: "Download orientation",
                    body: "Mobile access notes live on Download. This site does not claim specific app-store listings unless verified.",
                    href: lp("/download"),
                  },
                ]
          }
        />

        <div id="faq" className="mt-14 scroll-mt-28">
          <HubH2>{zh ? "VIP 常见问题" : "VIP FAQ"}</HubH2>
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
            <Link href={lp("/faq")} className="text-accent hover:underline">
              {zh ? "查看全部常见问题" : "View all FAQ"} →
            </Link>
          </p>
        </div>

        <RelatedCards
          title={zh ? "相关内容" : "Related content"}
          items={[
            { href: lp("/rewards"), title: t(dict, "nav.rewards"), body: zh ? "礼遇地图。" : "Benefits map." },
            { href: lp("/promotions"), title: t(dict, "nav.promotions"), body: zh ? "限时摘要。" : "Timed summaries." },
            { href: lp("/guides"), title: t(dict, "nav.guides"), body: zh ? "知识中心。" : "Knowledge hub." },
            { href: lp("/games"), title: t(dict, "nav.games"), body: zh ? "游戏库。" : "Game library." },
            { href: lp("/faq"), title: t(dict, "nav.faq"), body: zh ? "全站问答。" : "Site-wide answers." },
            { href: lp("/responsible-gaming"), title: t(dict, "nav.responsible"), body: zh ? "限额与支持。" : "Limits and support." },
          ]}
        />

        <HubCtaBand
          locale={locale}
          title={zh ? "探索 1XROLL 礼遇生态" : "Explore the 1XROLL Benefits Ecosystem"}
          body={
            zh
              ? "VIP 是持续一层。把公开语言带回奖励、优惠与攻略，再在平台核对实时状态。"
              : "VIP is the ongoing layer. Take published language back to Rewards, Promotions and Guides, then confirm live status on the platform."
          }
          actions={[
            { href: lp("/rewards"), label: zh ? "探索奖励" : "Explore Rewards", variant: "primary" },
            { href: lp("/promotions"), label: zh ? "查看优惠" : "View Promotions", variant: "secondary" },
            { href: lp("/guides"), label: zh ? "阅读攻略" : "Read Guides", variant: "outline" },
          ]}
        />
      </Container>
    </Section>
  );
}
