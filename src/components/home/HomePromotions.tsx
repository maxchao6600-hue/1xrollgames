import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import { promotions } from "@/data/promotions";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";
import { ctaConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeader } from "@/components/ui/Container";

export function HomePromotions({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section>
      <Container>
        <SectionHeader
          title={t(dict, "home.promotionsTitle")}
          description={t(dict, "home.promotionsSubtitle")}
          action={
            <Button href={localePath(locale, "/promotions")} variant="secondary">
              {t(dict, "nav.promotions")}
            </Button>
          }
        />
        <div className="grid gap-4 md:grid-cols-3">
          {promotions.map((promo) => (
            <article
              key={promo.id}
              className="overflow-hidden rounded-2xl border border-border bg-bg-surface"
            >
              {promo.image ? (
                <div className="relative aspect-[16/9]">
                  <Image
                    src={promo.image}
                    alt={localize(promo.title, locale)}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
              ) : null}
              <div className="space-y-3 p-5">
                <h3 className="text-lg font-medium text-text">
                  {localize(promo.title, locale)}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {localize(promo.description, locale)}
                </p>
                <Link
                  href={ctaConfig.register.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-sm font-medium text-accent hover:underline"
                >
                  {localize(promo.ctaLabel, locale)} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
