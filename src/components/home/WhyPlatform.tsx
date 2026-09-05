import type { Locale } from "@/types/content";
import { getDictionary, t } from "@/lib/i18n";
import { Container, Section, SectionHeader } from "@/components/ui/Container";

const WHY_KEYS = [
  "curated",
  "mobile",
  "info",
  "categories",
  "guides",
  "support",
] as const;

export function WhyPlatform({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section>
      <Container>
        <SectionHeader
          title={t(dict, "home.whyTitle")}
          description={t(dict, "home.whySubtitle")}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_KEYS.map((key) => (
            <div
              key={key}
              className="rounded-2xl border border-border bg-bg-surface/80 p-5"
            >
              <h3 className="text-base font-medium text-text">
                {t(dict, `home.why.${key}`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {t(dict, `home.why.${key}Body`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
