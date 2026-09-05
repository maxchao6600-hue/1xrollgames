import type { Guide, Locale } from "@/types/content";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { ArticleCard } from "@/components/guides/ArticleCard";

export function LatestGuides({
  locale,
  guides,
}: {
  locale: Locale;
  guides: Guide[];
}) {
  const dict = getDictionary(locale);

  return (
    <Section className="bg-[rgba(14,18,24,0.45)]">
      <Container>
        <SectionHeader
          eyebrow={locale === "zh" ? "入门" : "Onboarding"}
          title={t(dict, "home.guidesTitle")}
          description={t(dict, "home.guidesSubtitle")}
          action={
            <Button href={localePath(locale, "/guides")} variant="outline">
              {t(dict, "common.browseGuides")}
            </Button>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.slice(0, 6).map((guide) => (
            <ArticleCard key={guide.id} guide={guide} locale={locale} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
