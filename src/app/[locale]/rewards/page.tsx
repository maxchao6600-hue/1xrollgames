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
  const faq = getFaqByGroup("rewards").slice(0, 4);

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
