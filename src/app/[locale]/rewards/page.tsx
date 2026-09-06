import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getEcosystemHub, getFaqByGroup, rewardTopics } from "@/data";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { ctaConfig } from "@/config/site";

const PATH = "/rewards";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const hub = getEcosystemHub("rewards");
  if (!hub) return {};
  return buildMetadata({
    locale: raw,
    path: PATH,
    title: localize(hub.title, raw),
    description: localize(hub.summary, raw),
  });
}

export default async function RewardsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const hub = getEcosystemHub("rewards");
  if (!hub) notFound();
  const faq = getFaqByGroup("rewards");

  const copy =
    locale === "zh"
      ? {
          eyebrow: "奖励中心",
          topicsTitle: "奖励主题导览",
          relatedTitle: "相关页面",
        }
      : {
          eyebrow: "Rewards Hub",
          topicsTitle: "Reward topic map",
          relatedTitle: "Related pages",
        };

  const sections =
    locale === "zh"
      ? [
          {
            title: "什么是奖励生态",
            body: "奖励生态是把活动中心优惠、奖励导览、返水式回馈与 VIP 礼遇连成一张地图的入口。本页说明各通道如何分工，帮你找到正确阅读路径——不编造未发布比例、保证到账时间或个人进度。",
          },
          {
            title: "奖励如何运作",
            body: "品牌站负责发现与识读：卡片、摘要与主题链接帮你理解有哪些车道。资格确认、领取、贡献进度与结算始终在登录后的 1XROLL 平台完成。把本站当作地图，把平台当作办理处。",
          },
          {
            title: "优惠与奖励的区别",
            body: "优惠（Promotion）通常是可选择加入、带时限与流水规则的活动摘要——例如已核实的 200% 首存（最高 8,888 USDT，25 倍流水，最低存款 10 USDT）。奖励（Reward）更偏持续关系与活动导览：如何分组迎新、活动回馈与 VIP 相关礼遇。同一数字不要跨页混用；每条车道单独阅读。",
          },
          {
            title: "返水是什么",
            body: "返水（Rebate）在本站以符合条件投注的回馈式现金返还来描述，常与 VIP 通道相连。公开摘要上限为最高 1.1%；更高比例与礼遇随平台等级解锁。返水不是独立“每日固定表”，也不是投资收益——细节以平台钱包 / VIP 工具为准。",
          },
          {
            title: "VIP 礼遇如何纳入",
            body: "VIP 是面向活跃玩家的关系通道：返水导向奖励与升级式礼遇概念。本站只做导览，不展示个人等级条，也不编造 VIP 阶梯数字表。要看实时状态，请打开平台 VIP 区域；要对照优惠数字，请回到优惠中心。",
          },
          {
            title: "资格与参与",
            body: "常见条件可能包括账户状态、活动窗口、地区规则，以及该通道要求的存款或投注贡献。本站不编造额外门槛数字。打开平台后阅读当前规则，再决定是否参与；不确定时先不领取。",
          },
          {
            title: "如何阅读条款",
            body: "把本站数字当作已发布公开摘要的导览。若与平台实时展示冲突，以平台为准。核对贡献游戏、时限、领取步骤与冲突规则——不要把首存倍数套到返水页，也不要把 VIP 上限当成某次限时活动的保证。",
          },
          {
            title: "如何导航本生态",
            body: "下方主题卡片链向活动中心 / 优惠、奖励中心自身、返水、VIP 与相关优惠摘要。顶栏与页脚的「奖励」分组也可到达。准备办理时使用「打开平台」；需要冷静时阅读理性游戏。",
          },
          {
            title: "理性参与",
            body: "奖励不能替代个人限额。不要为了完成活动或“维持等级感”而超出预算。设定时间与金钱边界；压力上升时离开活动，并阅读理性游戏。",
          },
        ]
      : [
          {
            title: "What is the rewards ecosystem",
            body: "The rewards ecosystem is the map that connects Activity Centre offers, rewards orientation, rebate-style cashback and VIP benefits. This hub explains how each lane is meant to be read — without inventing unpublished rates, guaranteed payout clocks or personal progress meters.",
          },
          {
            title: "How rewards work",
            body: "This brand site handles discovery and literacy: cards, summaries and topic links help you see which lanes exist. Eligibility, claiming, contribution progress and settlement always complete on the 1XROLL platform after login. Treat this site as the map and the platform as the place where actions finish.",
          },
          {
            title: "Promotions vs rewards",
            body: "A Promotion is usually an opt-in, time-bound offer with its own wagering rules — for example the verified 200% first deposit summary (up to 8,888 USDT, 25× turnover, min. deposit 10 USDT). A Reward is broader orientation around ongoing relationship and activity lanes: how welcome paths, event-style returns and VIP-related benefits are grouped. Do not mix figures across pages; read each lane on its own.",
          },
          {
            title: "What rebates mean here",
            body: "A Rebate on this site means cashback-style returns on eligible play, often linked to the VIP lane. The published ceiling summarised here is up to 1.1%; higher rates and perks unlock with platform tier status. Rebates are not a fixed daily table and not an investment yield — confirm details in platform wallet / VIP tools.",
          },
          {
            title: "How VIP benefits fit in",
            body: "VIP is the relationship lane for engaged players: cashback-oriented rewards and upgrade-style benefit concepts. This site orients only — it does not show personal tier meters or invent VIP ladder tables. For live status, open the platform VIP area; for offer figures, return to the Promotion Hub.",
          },
          {
            title: "Eligibility",
            body: "Common conditions may include account status, offer windows, region rules, and deposit or wagering contribution required by that lane. This site does not invent extra threshold numbers. Read live rules on the platform before you opt in; if unsure, do not claim yet.",
          },
          {
            title: "Reading terms",
            body: "Treat figures on this site as orientation from published public summaries. If they conflict with live platform display, trust the platform. Check contributing games, timing, claim steps and conflict rules — do not apply a welcome multiple to the rebates page, and do not treat the VIP ceiling as a guarantee for a separate timed offer.",
          },
          {
            title: "How to navigate",
            body: "Topic cards below link to Activity Centre / promotions, this Rewards Hub, rebates, VIP and related offer summaries. Header and footer Rewards groupings reach the same lanes. Use Open platform when you are ready to act; use Responsible Gaming when you need a calm reset.",
          },
          {
            title: "Responsible participation",
            body: "Rewards do not replace personal limits. Do not overspend to finish an activity or to chase a sense of tier progress. Keep time and money walls; leave offers when pressure rises, and return to Responsible Gaming.",
          },
        ];

  const related = [
    { href: "/promotions", label: t(dict, "nav.promotions") },
    { href: "/rebates", label: t(dict, "nav.rebates") },
    { href: "/vip", label: t(dict, "nav.vip") },
    { href: "/agent", label: t(dict, "nav.agent") },
    { href: "/responsible-gaming", label: t(dict, "nav.responsible") },
    { href: "/faq", label: t(dict, "nav.faq") },
  ];

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: localize(hub.title, locale) },
          ]}
        />
        <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
          {copy.eyebrow}
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl text-text md:text-5xl">
          {localize(hub.title, locale)}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-text-muted">
          {localize(hub.intro, locale)}
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {sections.map((block) => (
            <article
              key={block.title}
              className="rounded-[1.25rem] border border-border bg-bg-surface p-6"
            >
              <h2 className="font-[family-name:var(--font-display)] text-xl text-text">
                {block.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {block.body}
              </p>
            </article>
          ))}
        </div>

        <h2 className="mt-14 font-[family-name:var(--font-display)] text-2xl text-text">
          {copy.topicsTitle}
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rewardTopics.map((topic) => (
            <Link
              key={topic.id}
              href={localePath(locale, topic.href)}
              className="group overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface transition hover:border-accent/40"
            >
              {topic.image ? (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={topic.image}
                    alt={localize(topic.title, locale)}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
              ) : null}
              <div className="space-y-2 p-5">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-text">
                  {localize(topic.title, locale)}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {localize(topic.summary, locale)}
                </p>
                <p className="text-sm leading-relaxed text-text-muted/90">
                  {localize(topic.body, locale)}
                </p>
                <span className="inline-flex text-sm font-medium text-accent">
                  {t(dict, "common.explore")} →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={localePath(locale, "/promotions")}>
            {t(dict, "nav.promotions")}
          </Button>
          <Button href={localePath(locale, "/vip")} variant="secondary">
            {t(dict, "nav.vip")}
          </Button>
          <Button href={ctaConfig.play.href} external variant="outline">
            {t(dict, "common.openPlatform")}
          </Button>
        </div>

        <div className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-text">
            {copy.relatedTitle}
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                className="rounded-2xl border border-border bg-bg-surface px-4 py-4 text-sm text-text transition hover:border-accent/40"
              >
                {item.label} →
              </Link>
            ))}
          </div>
        </div>

        {faq.length ? (
          <div className="mt-14">
            <h2 className="mb-5 font-[family-name:var(--font-display)] text-2xl text-text">
              {t(dict, "nav.faq")}
            </h2>
            <Accordion
              items={faq.map((item) => ({
                id: item.id,
                title: localize(item.question, locale),
                content: localize(item.answer, locale),
              }))}
            />
            <p className="mt-4 text-sm text-text-muted">
              <Link href={localePath(locale, "/faq")} className="text-accent hover:underline">
                {locale === "zh" ? "查看全部常见问题" : "View all FAQ"} →
              </Link>
            </p>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
