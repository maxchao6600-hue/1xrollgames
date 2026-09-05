import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import {
  ecosystemMetricLabel,
  getHomeEcosystemCategories,
} from "@/data/home-ecosystem";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";
import { Container, Section, SectionHeader } from "@/components/ui/Container";

export function DiscoverByExperience({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const lanes = getHomeEcosystemCategories();

  return (
    <Section>
      <Container>
        <SectionHeader
          title={t(dict, "home.categoriesTitle")}
          description={t(dict, "home.categoriesSubtitle")}
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {lanes.map((cat) => (
            <Link
              key={cat.id}
              href={localePath(locale, cat.href)}
              className="group block overflow-hidden rounded-[1.15rem] border border-border bg-bg-surface transition duration-300 hover:border-accent/45"
            >
              <div className="relative isolate aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
                <Image
                  src={cat.image}
                  alt={`${localize(cat.name, locale)} on 1XROLL`}
                  fill
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                  className="object-cover transition duration-500 ease-out will-change-transform group-hover:scale-[1.04]"
                  style={{ objectPosition: cat.objectPosition }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-3.5 sm:p-4">
                  <h3 className="font-[family-name:var(--font-display)] text-base text-white sm:text-lg">
                    {localize(cat.name, locale)}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[0.72rem] leading-snug text-white/70 sm:text-xs">
                    {localize(cat.description, locale)}
                  </p>
                  <div className="mt-2.5 flex items-center justify-between gap-2 text-[0.7rem] sm:text-xs">
                    <span className="text-white/50">
                      {ecosystemMetricLabel(cat, locale)}
                    </span>
                    <span className="font-medium text-accent">
                      {t(dict, "common.explore")} →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
