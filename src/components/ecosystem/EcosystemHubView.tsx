import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { EcosystemHub, FaqItem, Locale } from "@/types/content";
import type { CategoryPageContent } from "@/data/category-pages";
import { CATEGORY_ASSETS } from "@/data/assets";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { absoluteUrl, localize } from "@/lib/utils";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { GroupedSectionGrid, HubCtaBand } from "@/components/content/HubModules";
import { HubCategoryExtras } from "@/components/content/CategoryHubExtras";

export function ecosystemMetadata(
  locale: Locale,
  hub: EcosystemHub,
  path: string,
): Metadata {
  return buildMetadata({
    locale,
    path,
    title: localize(hub.title, locale),
    description: localize(hub.summary, locale),
  });
}

export function EcosystemHubView({
  locale,
  hub,
  path,
  showPlatformCtas = true,
  categoryId,
  faqItems = [],
  deepContent,
}: {
  locale: Locale;
  hub: EcosystemHub;
  path: string;
  showPlatformCtas?: boolean;
  /** Optional category art for visual header */
  categoryId?: string;
  faqItems?: FaqItem[];
  /** Prefer deep category-page sections when present */
  deepContent?: CategoryPageContent;
}) {
  const dict = getDictionary(locale);
  const asset = categoryId ? CATEGORY_ASSETS[categoryId] : undefined;
  const isPanel = asset?.fit === "panel";
  const title = deepContent
    ? localize(deepContent.pageTitle, locale)
    : localize(hub.title, locale);
  const intro = deepContent
    ? localize(deepContent.intro, locale)
    : localize(hub.intro, locale);
  const sections = deepContent?.sections?.length
    ? deepContent.sections
    : hub.sections;
  const related =
    deepContent?.relatedHrefs?.length
      ? deepContent.relatedHrefs
      : hub.relatedHrefs;
  const crumbs =
    path.startsWith("/games/")
      ? [
          { label: t(dict, "nav.home"), href: localePath(locale, "/") },
          { label: t(dict, "nav.games"), href: localePath(locale, "/games") },
          { label: title },
        ]
      : [
          { label: t(dict, "nav.home"), href: localePath(locale, "/") },
          { label: title },
        ];

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs items={crumbs} />
        <JsonLd
          data={[
            breadcrumbJsonLd(
              crumbs.map((c, i) => ({
                name: c.label,
                url: absoluteUrl(
                  "href" in c && c.href
                    ? c.href
                    : localePath(locale, path),
                ),
                ...(i === crumbs.length - 1 ? {} : {}),
              })),
            ),
            ...(faqItems.length
              ? [
                  faqJsonLd(
                    faqItems.map((item) => ({
                      question: localize(item.question, locale),
                      answer: localize(item.answer, locale),
                    })),
                  ),
                ]
              : []),
          ]}
        />

        {asset?.image ? (
          <div className="relative mb-8 aspect-[16/8] overflow-hidden rounded-[1.35rem] border border-border md:aspect-[21/7]">
            {isPanel ? (
              <>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(45,212,191,0.16),transparent_45%),radial-gradient(circle_at_20%_80%,rgba(255,196,90,0.12),transparent_40%),linear-gradient(160deg,#0a1210_0%,#0c1520_55%,#101820_100%)]"
                />
                <div className="absolute inset-y-[12%] left-[6%] right-[40%] overflow-hidden rounded-2xl border border-white/10 bg-black/20 md:right-[48%]">
                  <Image
                    src={asset.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 520px"
                    priority
                  />
                </div>
              </>
            ) : (
              <Image
                src={asset.image}
                alt={`${title} on 1XROLL`}
                fill
                className="object-cover"
                style={{ objectPosition: asset.objectPosition ?? "center center" }}
                sizes="(max-width:768px) 100vw, 1120px"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
              <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-accent uppercase">
                {locale === "zh" ? "平台通道" : "Platform lane"}
              </p>
              <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl text-white md:text-4xl">
                {title}
              </h1>
              <p className="mt-2 max-w-4xl text-sm text-white/75 md:text-base">
                {deepContent
                  ? localize(deepContent.intro, locale)
                  : localize(hub.summary, locale)}
              </p>
            </div>
          </div>
        ) : (
          <>
            <h1 className="font-[family-name:var(--font-display)] text-4xl text-text md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-4xl text-lg text-text-muted">{intro}</p>
          </>
        )}

        {asset?.image ? (
          <p className="max-w-4xl text-base leading-relaxed text-text-muted">{intro}</p>
        ) : null}

        <GroupedSectionGrid blocks={sections} locale={locale} />

        <HubCategoryExtras locale={locale} categoryId={categoryId} />

        {showPlatformCtas ? (
          <HubCtaBand
            locale={locale}
            title={
              locale === "zh" ? "实时操作在平台完成" : "Live actions happen on the platform"
            }
            body={
              locale === "zh"
                ? "本页提供通道识读与导航。登录后的工具、库存与条款以平台为准。"
                : "This page is lane literacy and navigation. Tools, inventory and terms after login belong to the platform."
            }
          />
        ) : null}

        {related.length ? (
          <div className="mt-14">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-text">
              {locale === "zh" ? "相关入口" : "Related destinations"}
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={localePath(locale, item.href)}
                  className="rounded-2xl border border-border bg-bg-surface px-4 py-4 text-sm text-text transition hover:border-accent/40"
                >
                  {localize(item.label, locale)} →
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        {faqItems.length ? (
          <div className="mt-14">
            <h2 className="mb-5 font-[family-name:var(--font-display)] text-2xl text-text">
              {t(dict, "nav.faq")}
            </h2>
            <Accordion
              items={faqItems.map((item) => ({
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
