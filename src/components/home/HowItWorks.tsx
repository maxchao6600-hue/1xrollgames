import Link from "next/link";
import type { Locale } from "@/types/content";
import { journeySteps } from "@/data/ecosystem";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";
import { Container, Section, SectionHeader } from "@/components/ui/Container";

export function HowItWorks({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section className="border-y border-border/60 bg-bg-elevated/40">
      <Container>
        <SectionHeader
          title={t(dict, "home.journeyTitle")}
          description={t(dict, "home.journeySubtitle")}
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {journeySteps.map((step) => (
            <li key={step.id}>
              <Link
                href={localePath(locale, step.href)}
                className="block h-full rounded-2xl border border-border bg-bg-surface p-5 transition hover:border-accent/40"
              >
                <p className="text-xs tracking-[0.18em] text-accent uppercase">
                  {locale === "zh" ? `步骤 ${step.step}` : `Step ${step.step}`}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl text-text">
                  {localize(step.title, locale)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {localize(step.summary, locale)}
                </p>
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
