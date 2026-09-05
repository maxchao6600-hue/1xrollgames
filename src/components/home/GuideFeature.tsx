import type { Guide, Locale } from "@/types/content";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { ArticleCard } from "@/components/guides/ArticleCard";

export function GuideFeature({
  locale,
  guides,
}: {
  locale: Locale;
  guides: Guide[];
}) {
  const dict = getDictionary(locale);
  const [featured, ...rest] = guides;

  if (!featured) return null;

  return (
    <Section>
      <Container>
        <SectionHeader
          title={t(dict, "home.guidesTitle")}
          description={t(dict, "home.guidesSubtitle")}
          action={
            <Button href={localePath(locale, "/guides")} variant="outline">
              {t(dict, "common.browseGuides")}
            </Button>
          }
        />
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <ArticleCard guide={featured} locale={locale} featured />
          <div className="grid gap-4">
            {rest.slice(0, 3).map((guide) => (
              <ArticleCard key={guide.id} guide={guide} locale={locale} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
