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

  const sections =
    locale === "zh"
      ? [
          {
            title: "奖励生态如何组织",
            body: "活动中心式优惠、奖励导览、返水式回馈摘要与 VIP 俱乐部信息彼此相连。本页是地图：帮你找到正确通道，而不编造未发布比例或保证发放时间。",
          },
          {
            title: "在哪里领取",
            body: "领取与资格确认始终在登录后的 1XROLL 平台完成。品牌站卡片与摘要仅供发现；进度、贡献与到账以平台工具为准。",
          },
          {
            title: "如何阅读摘要",
            body: "把本站数字当作已发布公开摘要的导览。若与平台实时展示冲突，以平台为准。不要把不同活动的倍数或上限混用。",
          },
          {
            title: "理性参与",
            body: "奖励不能替代个人限额。不要为了完成活动而超出预算。需要重置时请阅读理性游戏。",
          },
        ]
      : [
          {
            title: "How the rewards ecosystem is organised",
            body: "Activity-centre promotions, rewards orientation, rebate-style cashback summaries and VIP Club information connect to each other. This page is a map: it helps you find the right lane without inventing unpublished rates or guaranteed payout clocks.",
          },
          {
            title: "Where rewards are claimed",
            body: "Claiming and eligibility always complete on the 1XROLL platform after login. Brand-site cards and summaries are for discovery; progress, contribution and settlement live in platform tools.",
          },
          {
            title: "How to read summaries",
            body: "Treat figures on this site as orientation from published public summaries. If they conflict with live platform display, trust the platform. Do not mix multiples or ceilings across different offers.",
          },
          {
            title: "Responsible participation",
            body: "Rewards do not replace personal limits. Do not overspend to finish an activity. Return to Responsible Gaming whenever you need a reset.",
          },
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
          {locale === "zh" ? "奖励生态" : "Rewards ecosystem"}
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                <h2 className="font-[family-name:var(--font-display)] text-xl text-text">
                  {localize(topic.title, locale)}
                </h2>
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

        <p className="mt-8 text-sm text-text-muted">
          <Link href={localePath(locale, "/rebates")} className="text-accent hover:underline">
            {t(dict, "nav.rebates")}
          </Link>
          {" · "}
          <Link href={localePath(locale, "/agent")} className="text-accent hover:underline">
            {t(dict, "nav.agent")}
          </Link>
          {" · "}
          <Link
            href={localePath(locale, "/responsible-gaming")}
            className="text-accent hover:underline"
          >
            {t(dict, "nav.responsible")}
          </Link>
        </p>

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
