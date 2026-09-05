import type { Locale } from "@/types/content";
import { providers } from "@/data/providers";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { ProviderCard } from "@/components/providers/ProviderCard";

export function ProviderDiscovery({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section className="bg-[rgba(14,18,24,0.45)]">
      <Container>
        <SectionHeader
          eyebrow={locale === "zh" ? "工作室" : "Studios"}
          title={t(dict, "home.providersTitle")}
          description={t(dict, "home.providersSubtitle")}
          action={
            <Button href={localePath(locale, "/providers")} variant="secondary">
              {t(dict, "nav.providers")}
            </Button>
          }
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {providers.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} locale={locale} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
