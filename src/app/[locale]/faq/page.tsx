import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/content";
import { getGroupedFaq } from "@/data";
import { getDictionary, isLocale, t } from "@/lib/i18n";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { absoluteUrl, localize } from "@/lib/utils";
import { localePath } from "@/lib/paths";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";

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
    path: "/faq",
    title: t(dict, "faq.title"),
    description: t(dict, "faq.subtitle"),
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const groups = getGroupedFaq().filter((g) => g.items.length > 0);
  const flatForLd = groups.flatMap((g) =>
    g.items.map((item) => ({
      question: localize(item.question, locale),
      answer: localize(item.answer, locale),
    })),
  );

  return (
    <Section className="pt-8">
      <Container>
        <Breadcrumbs
          items={[
            { label: t(dict, "nav.home"), href: localePath(locale, "/") },
            { label: t(dict, "faq.title") },
          ]}
        />
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: t(dict, "nav.home"), url: absoluteUrl(localePath(locale, "/")) },
              { name: t(dict, "faq.title"), url: absoluteUrl(localePath(locale, "/faq")) },
            ]),
            faqJsonLd(flatForLd),
          ]}
        />
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-text">
          {t(dict, "faq.title")}
        </h1>
        <p className="mt-3 max-w-2xl text-text-muted">
          {t(dict, "faq.subtitle")}
        </p>
        <div className="mt-10 space-y-10">
          {groups.map((group) => (
            <div key={group.group}>
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-text">
                {localize(group.label, locale)}
              </h2>
              <div className="mt-4">
                <Accordion
                  items={group.items.map((item) => ({
                    id: item.id,
                    title: localize(item.question, locale),
                    content: localize(item.answer, locale),
                  }))}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
