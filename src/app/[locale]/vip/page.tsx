import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getEcosystemHub, getFaqByGroup } from "@/data";
import { REWARD_ASSETS } from "@/data/assets";
import { ctaConfig } from "@/config/site";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";

const PATH = "/vip";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const hub = getEcosystemHub("vip");
  if (!hub) return {};
  return buildMetadata({
    locale: raw,
    path: PATH,
    title: localize(hub.title, raw),
    description: localize(hub.summary, raw),
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
  const hub = getEcosystemHub("vip");
  if (!hub) notFound();
  const faq = getFaqByGroup("vip").slice(0, 4);

  const blocks =
    locale === "zh"
      ? [
          {
            title: "VIP 概览",
            body: "VIP 俱乐部面向活跃玩家，说明返水导向奖励与升级式礼遇概念。实时等级仅存在于平台。",
          },
          {
            title: "已发布返水摘要",
            body: "本品牌站公开摘要的上限为符合条件投注最高 1.1% VIP 返水。更高等级可解锁更高比例与礼遇——细节以平台为准。",
          },
          {
            title: "礼遇如何理解",
            body: "把品牌站摘要当作导览。资格、贡献游戏与发放节奏请在平台 VIP / 钱包工具中确认。",
          },
          {
            title: "我们不编造什么",
            body: "本站不编造 VIP 1 / VIP 2 / VIP 3 阶梯表、保证的每周奖励金额，或自动升级时间表。",
          },
        ]
      : [
          {
            title: "VIP overview",
            body: "VIP Club covers cashback-oriented rewards and upgrade-style benefits for engaged players. Live tier status exists only on the platform.",
          },
          {
            title: "Published cashback summary",
            body: "Up to 1.1% VIP cashback on eligible bets is the publicly summarised ceiling on this brand site. Higher tiers unlock increased rates and perks — details on the platform.",
          },
          {
            title: "How VIP works here",
            body: "Treat brand-site summaries as orientation. Confirm eligibility, game contribution and payout schedules inside platform VIP / wallet tools.",
          },
          {
            title: "What we do not invent",
            body: "We do not invent VIP 1 / VIP 2 / VIP 3 tables, guaranteed weekly bonus amounts, or automatic upgrade timelines on this site.",
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

        <div className="overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface md:grid md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[18rem]">
            <Image
              src={REWARD_ASSETS["vip-club"]}
              alt={localize(hub.title, locale)}
              fill
              className="object-cover object-center"
              sizes="(max-width:768px) 100vw, 50vw"
              priority
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent md:bg-gradient-to-r md:from-transparent md:to-bg-surface"
            />
          </div>
          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              VIP
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-text md:text-4xl">
              {localize(hub.title, locale)}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              {localize(hub.intro, locale)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={ctaConfig.play.href} external>
                {t(dict, "common.openPlatform")}
              </Button>
              <Button href={localePath(locale, "/rebates")} variant="secondary">
                {t(dict, "nav.rebates")}
              </Button>
              <Button href={localePath(locale, "/rewards")} variant="outline">
                {t(dict, "nav.rewards")}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {blocks.map((block) => (
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

        <p className="mt-8 text-sm text-text-muted">
          <Link href={localePath(locale, "/promotions")} className="text-accent hover:underline">
            {t(dict, "nav.promotions")}
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
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
