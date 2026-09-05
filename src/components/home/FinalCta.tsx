import type { Locale } from "@/types/content";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { ctaConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";

export function FinalCta({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section>
      <Container>
        <div className="grid items-center gap-6 rounded-[1.25rem] border border-border bg-bg-surface px-8 py-10 md:grid-cols-[1fr_auto] md:px-12">
          <div>
            <p className="text-xs tracking-[0.18em] text-accent uppercase">
              1XROLL
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-text md:text-4xl">
              {t(dict, "home.ctaBody")}
            </h2>
            <p className="mt-3 text-text-muted">{t(dict, "home.ctaTitle")}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={localePath(locale, "/games")} size="lg">
              {t(dict, "common.exploreGames")}
            </Button>
            <Button
              href={ctaConfig.register.href}
              external={ctaConfig.register.external}
              variant="outline"
              size="lg"
            >
              {t(dict, "nav.register")}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
