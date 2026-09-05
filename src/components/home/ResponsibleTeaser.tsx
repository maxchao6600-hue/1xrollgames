import type { Locale } from "@/types/content";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";

const POINTS = ["age", "limits", "breaks", "legal", "help"] as const;

export function ResponsibleTeaser({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section>
      <Container>
        <div className="rounded-[1.25rem] border border-border bg-gradient-to-br from-[rgba(255,196,90,0.1)] to-[rgba(45,212,191,0.06)] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-text">
                {t(dict, "home.responsibleTitle")}
              </h2>
              <p className="mt-3 max-w-xl text-text-muted">
                {t(dict, "home.responsibleSubtitle")}
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {POINTS.map((key) => (
                  <li
                    key={key}
                    className="rounded-xl border border-border bg-bg-elevated/70 px-3 py-2 text-sm text-text-muted"
                  >
                    {t(dict, `home.responsible.${key}`)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:justify-self-end">
              <Button href={localePath(locale, "/responsible-gaming")} size="lg">
                {t(dict, "nav.responsible")}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
