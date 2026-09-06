import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getFaqByIds } from "@/data";
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
  ComparisonTable,
  HighlightPanel,
  HubAnchorNav,
  HubCtaBand,
  HubH2,
  InfoGrid,
  JourneyStrip,
  RelatedCards,
  StepGrid,
} from "@/components/content/HubModules";

const PATH = "/agent";
const FAQ_IDS = [
  "agent-faq",
  "agent-who",
  "agent-player",
  "agent-apply",
  "agent-review",
  "agent-fixed",
  "agent-change",
  "agent-where",
  "agent-promote",
  "agent-wins",
  "agent-support",
  "agent-terms-page",
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
        ? "1XROLL 代理 | 合作与代理信息"
        : "1XROLL Agent | Partnership & Agent Information",
    description:
      locale === "zh"
        ? "了解 1XROLL 代理与合作信息：玩家与代理的区别、一般咨询路径、负责任推广原则。本站不公布编造的佣金比例或收入承诺。"
        : "Explore 1XROLL agent and partnership information: how an agent differs from a player, the general inquiry path, and responsible promotion principles. This site does not publish invented commission rates or income promises.",
  });
}

export default async function AgentPage({
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
  const h1 = zh ? "1XROLL 代理与合作" : "1XROLL Agent & Partnership";

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: lp("/") },
            { label: t(dict, "nav.agent") },
          ]}
        />
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: t(dict, "nav.home"), url: absoluteUrl(lp("/")) },
              { name: t(dict, "nav.agent"), url: absoluteUrl(lp(PATH)) },
            ]),
            faqJsonLd(
              faq.map((item) => ({
                question: localize(item.question, locale),
                answer: localize(item.answer, locale),
              })),
            ),
          ]}
        />

        <div className="rounded-[1.35rem] border border-border bg-bg-surface p-7 md:grid md:grid-cols-[1.3fr_0.7fr] md:gap-10 md:p-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              {zh ? "合作枢纽" : "Partnership hub"}
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-text md:text-4xl">
              {h1}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              {zh
                ? "代理区域为希望了解 1XROLL 生态内合作机会的人提供信息。这里解释概念、责任与咨询路径——不保证获批，也不公布编造的佣金或收入数字。"
                : "The Agent area provides information for people interested in exploring partnership opportunities within the 1XROLL ecosystem. This hub explains concepts, responsibilities and inquiry paths — it does not guarantee approval or publish invented commission or income figures."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#program">{zh ? "了解代理信息" : "Explore Agent Information"}</Button>
              <Button href={lp("/contact")} variant="secondary">
                {zh ? "联系 / 咨询" : "Contact / Apply"}
              </Button>
            </div>
          </div>
          <div className="mt-8 rounded-[1.2rem] border border-accent/25 bg-bg-elevated p-5 md:mt-0">
            <p className="text-sm font-medium text-text">
              {zh ? "本页提供" : "This page covers"}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-text-muted">
              {(zh
                ? ["合作概念", "玩家与代理比较", "一般咨询路径", "负责任推广"]
                : ["Partnership concepts", "Player vs agent", "General inquiry path", "Responsible promotion"]
              ).map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <HubAnchorNav
          ariaLabel={zh ? "本页目录" : "On this page"}
          items={
            zh
              ? [
                  { href: "#program", label: "计划" },
                  { href: "#compare", label: "比较" },
                  { href: "#journey", label: "路径" },
                  { href: "#principles", label: "原则" },
                  { href: "#faq", label: "常见问题" },
                ]
              : [
                  { href: "#program", label: "Program" },
                  { href: "#compare", label: "Compare" },
                  { href: "#journey", label: "Journey" },
                  { href: "#principles", label: "Principles" },
                  { href: "#faq", label: "FAQ" },
                ]
          }
        />

        <div id="program" className="scroll-mt-28">
          <HighlightPanel
            kicker={zh ? "定义" : "Definition"}
            title={zh ? "什么是代理计划？" : "What is the Agent program?"}
            body={
              zh
                ? "代理关系通常指以合作为导向、向符合条件的用户介绍 1XROLL 娱乐生态。它不同于普通玩家账户：合作信息有单独条款，实时细则应通过官方渠道核对。本品牌站解释责任与路径，不发布佣金表。"
                : "An agent relationship generally means partnership-oriented participation: introducing eligible people to the 1XROLL entertainment ecosystem. It differs from a normal player account: partnership information has separate terms, and live details should be confirmed through official channels. This brand site explains responsibilities and paths — it does not publish a commission table."
            }
            points={
              zh
                ? ["概念导览，不是合同", "条款独立于玩家优惠", "实时条件在官方渠道"]
                : ["Orientation, not a contract", "Terms sit apart from player offers", "Live conditions stay on official channels"]
            }
          />
        </div>

        <div id="compare" className="scroll-mt-28">
          <ComparisonTable
            title={zh ? "玩家与代理" : "Player vs Agent"}
            columns={zh ? ["玩家", "代理"] : ["Player", "Agent"]}
            rows={
              zh
                ? [
                    {
                      label: "主要关注",
                      cells: ["游戏与平台探索", "合作与计划信息"],
                    },
                    {
                      label: "常用入口",
                      cells: ["游戏、优惠、奖励、VIP", "本枢纽、联系、官方渠道"],
                    },
                    {
                      label: "应阅读的内容",
                      cells: ["活动资格与理性游戏", "合作条款与负责任推广"],
                    },
                    {
                      label: "本站不编造",
                      cells: ["个人账户余额或等级条", "佣金比例、工具后台或收入承诺"],
                    },
                  ]
                : [
                    {
                      label: "Primary focus",
                      cells: ["Gaming and platform exploration", "Partnership and programme information"],
                    },
                    {
                      label: "Typical entries",
                      cells: ["Games, Promotions, Rewards, VIP", "This hub, Contact, official channels"],
                    },
                    {
                      label: "What to read",
                      cells: ["Offer eligibility and responsible gaming", "Programme terms and responsible promotion"],
                    },
                    {
                      label: "Not invented here",
                      cells: ["Personal balances or tier meters", "Commission rates, dashboards or income promises"],
                    },
                  ]
            }
          />
        </div>

        <div id="journey" className="scroll-mt-28">
          <JourneyStrip
            title={zh ? "代理路径（一般说明）" : "Agent journey (general)"}
            subtitle={
              zh
                ? "以下是一般咨询路径，不是保证会执行的运营流程，也不保证获批。"
                : "This is a general inquiry path — not a guaranteed operational process, and not a promise of approval."
            }
            steps={
              zh
                ? [
                    { title: "了解计划", body: "先读本枢纽与相关攻略。" },
                    { title: "核对可用信息", body: "以官方渠道当前展示为准。" },
                    { title: "理解要求", body: "资格与责任可能因渠道而异。" },
                    { title: "提交咨询 / 申请", body: "可通过联系页或打开平台。" },
                    { title: "等待审核", body: "时间与结果由官方流程决定。" },
                    { title: "跟随入驻说明", body: "若进入下一步，只遵循官方回复。" },
                  ]
                : [
                    { title: "Explore the program", body: "Start with this hub and related guides." },
                    { title: "Review available information", body: "Trust what official channels currently show." },
                    { title: "Understand requirements", body: "Eligibility and duties can differ by channel." },
                    { title: "Submit an application / inquiry", body: "Use Contact or Open platform." },
                    { title: "Wait for review", body: "Timing and outcome follow the official process." },
                    { title: "Follow onboarding if offered", body: "If you proceed, follow the official reply only." },
                  ]
            }
          />
        </div>

        <InfoGrid
          title={zh ? "代理区域通常面向谁" : "Who the Agent area is for"}
          columns={3}
          items={
            zh
              ? [
                  { title: "数字营销从业者", body: "希望用准确信息介绍生态的人。" },
                  { title: "内容创作者", body: "偏好导览内容、拒绝夸大承诺的创作者。" },
                  { title: "社区运营者", body: "需要把用户导向官方入口与理性游戏说明。" },
                  { title: "在线业务经营者", body: "探索合作前会先阅读条款的人。" },
                  { title: "推荐合作伙伴", body: "关注路径与责任，而不是编造分成。" },
                  { title: "现有生态参与者", body: "已熟悉游戏库与优惠语言、希望了解合作通道的人。" },
                ]
              : [
                  { title: "Digital marketers", body: "People who want to introduce the ecosystem with accurate information." },
                  { title: "Content creators", body: "Creators who prefer orientation over hype promises." },
                  { title: "Community operators", body: "Operators who will send people to official entries and responsible-gaming notes." },
                  { title: "Online business owners", body: "People who read terms before exploring partnership." },
                  { title: "Referral partners", body: "Partners focused on paths and duties — not invented splits." },
                  { title: "Existing ecosystem participants", body: "People who already know the library and offer language and want the partnership lane." },
                ]
          }
        />

        <InfoGrid
          title={zh ? "代理资源" : "Agent resources"}
          columns={4}
          items={[
            {
              title: zh ? "代理导览" : "Agent Guide",
              body: zh ? "你正在阅读的合作枢纽。" : "The partnership hub you are reading.",
              href: lp("/agent"),
            },
            {
              title: zh ? "计划信息" : "Program Information",
              body: zh ? "本页各分区与常见问题。" : "The sections and FAQ on this page.",
              href: "#program",
            },
            {
              title: zh ? "推广原则" : "Marketing Guidance",
              body: zh ? "准确、透明、负责任、及时。" : "Accurate, transparent, responsible, current.",
              href: "#principles",
            },
            {
              title: zh ? "优惠资源" : "Promotion Resources",
              body: zh ? "已发布优惠语言，避免凭记忆改写数字。" : "Published offer language — do not paraphrase numbers from memory.",
              href: lp("/promotions"),
            },
            {
              title: zh ? "条款" : "Terms & Conditions",
              body: zh ? "网站导览条款；合作细则以官方渠道为准。" : "Website orientation terms; live programme terms stay on official channels.",
              href: lp("/terms"),
            },
            {
              title: t(dict, "nav.faq"),
              body: zh ? "代理与全站问答。" : "Agent and site-wide answers.",
              href: lp("/faq"),
            },
            {
              title: t(dict, "nav.contact"),
              body: zh ? "本站咨询入口。" : "Orientation inquiry on this site.",
              href: lp("/contact"),
            },
            {
              title: zh ? "打开平台" : "Open platform",
              body: zh ? "准备讨论实时条款时使用。" : "Use when you are ready to discuss live terms.",
              href: ctaConfig.play.href,
            },
          ]}
        />

        <StepGrid
          title={zh ? "如何对待该计划" : "How to approach the program"}
          steps={
            zh
              ? [
                  { title: "理解生态", body: "先认识游戏、优惠、奖励与 VIP 公开语言。" },
                  { title: "理解代理模式", body: "合作通道独立于玩家账户体验。" },
                  { title: "阅读当前条款", body: "以官方展示为准，不依赖过时摘要。" },
                  { title: "准备准确信息", body: "咨询时使用真实、可核对的说明。" },
                  { title: "提交咨询 / 申请", body: "通过联系页或平台入口。" },
                  { title: "跟随官方回复", body: "入驻说明只来自官方渠道。" },
                ]
              : [
                  { title: "Understand the ecosystem", body: "Learn published language for games, offers, rewards and VIP first." },
                  { title: "Understand the agent model", body: "The partnership lane is separate from a player-account experience." },
                  { title: "Review current terms", body: "Trust official display — not outdated summaries." },
                  { title: "Prepare accurate information", body: "Use truthful, checkable details in any inquiry." },
                  { title: "Submit an inquiry / application", body: "Use Contact or the platform entry." },
                  { title: "Follow the official response", body: "Onboarding instructions come from official channels only." },
                ]
          }
        />

        <div id="principles" className="scroll-mt-28">
          <div className="rounded-[1.35rem] border border-accent/25 bg-gradient-to-br from-bg-surface to-bg-elevated p-6 md:p-8">
            <HubH2>{zh ? "负责任推广" : "Responsible promotion"}</HubH2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
              {zh
                ? "合作方应使用准确的推广信息，避免误导性主张，不保证赢利，不编造优惠，不制造虚假紧迫感，清楚展示相关条款，并尊重理性游戏原则。"
                : "Partners should use accurate promotional information, avoid misleading claims, avoid guaranteeing winnings, avoid fabricated bonuses, avoid misleading urgency, present terms clearly, and respect responsible-gaming principles."}
            </p>
          </div>
          <InfoGrid
            title={zh ? "营销内容原则" : "Marketing content principles"}
            columns={4}
            items={
              zh
                ? [
                    { title: "准确", body: "只发布有当前计划数据支持的信息。" },
                    { title: "透明", body: "清楚说明相关条款。" },
                    { title: "负责任", body: "避免有害或误导性推广。" },
                    { title: "及时", body: "发布前核对最新可用计划信息。" },
                  ]
                : [
                    { title: "Accurate", body: "Only publish information supported by current programme data." },
                    { title: "Transparent", body: "Clearly communicate relevant terms." },
                    { title: "Responsible", body: "Avoid harmful or misleading promotion." },
                    { title: "Current", body: "Check the latest available programme information before publishing." },
                  ]
            }
          />
        </div>

        <HighlightPanel
          kicker={zh ? "条款" : "Terms"}
          title={zh ? "代理条款可能更新" : "Agent terms can change"}
          body={
            zh
              ? "代理计划的条件、资格、权益与运营条款可能变化。在依赖任何计划细节前，请通过适用的 1XROLL 渠道核对最新信息。"
              : "Agent program conditions, eligibility, benefits and operating terms may change. Always review the latest information provided through the applicable 1XROLL channel before relying on programme details."
          }
        />

        <div id="faq" className="mt-14 scroll-mt-28">
          <HubH2>{zh ? "代理常见问题" : "Agent FAQ"}</HubH2>
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
          title={zh ? "相关生态" : "Related ecosystem"}
          items={[
            { href: lp("/guides"), title: t(dict, "nav.guides"), body: zh ? "知识中心。" : "Knowledge hub." },
            { href: lp("/promotions"), title: t(dict, "nav.promotions"), body: zh ? "已发布优惠语言。" : "Published offer language." },
            { href: lp("/rewards"), title: t(dict, "nav.rewards"), body: zh ? "礼遇地图。" : "Benefits map." },
            { href: lp("/vip"), title: t(dict, "nav.vip"), body: zh ? "VIP 导览。" : "VIP orientation." },
            { href: lp("/games"), title: t(dict, "nav.games"), body: zh ? "游戏库。" : "Game library." },
            { href: lp("/faq"), title: t(dict, "nav.faq"), body: zh ? "问答。" : "Answers." },
            { href: lp("/contact"), title: t(dict, "nav.contact"), body: zh ? "咨询入口。" : "Inquiry entry." },
          ]}
        />

        <HubCtaBand
          locale={locale}
          title={zh ? "探索 1XROLL 合作" : "Explore 1XROLL Partnership"}
          body={
            zh
              ? "先核对本枢纽信息，再通过联系页或平台通道提交咨询。请使用克制、准确的表述。"
              : "Review this hub, then inquire via Contact or the platform channel. Keep the language accurate and restrained."
          }
          actions={[
            { href: "#program", label: zh ? "查看代理信息" : "Review Agent Information", variant: "primary" },
            { href: lp("/contact"), label: zh ? "联系我们" : "Contact Us", variant: "secondary" },
          ]}
        />
      </Container>
    </Section>
  );
}
