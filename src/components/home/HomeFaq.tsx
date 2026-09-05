import type { Locale } from "@/types/content";
import { faqItems } from "@/data/faq";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/seo";

export function HomeFaq({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const items = faqItems.slice(0, 6).map((item) => ({
    id: item.id,
    title: localize(item.question, locale),
    content: localize(item.answer, locale),
  }));

  return (
    <Section className="bg-[rgba(14,18,24,0.45)]">
      <Container>
        <SectionHeader
          title={t(dict, "home.faqTitle")}
          description={t(dict, "home.faqSubtitle")}
          action={
            <Button href={localePath(locale, "/faq")} variant="secondary">
              {t(dict, "nav.faq")}
            </Button>
          }
        />
        <Accordion items={items} />
        <JsonLd
          data={faqJsonLd(
            items.map((i) => ({ question: i.title, answer: i.content })),
          )}
        />
      </Container>
    </Section>
  );
}
