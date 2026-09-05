import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import {
  ecosystemEyebrowLabel,
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
          eyebrow={locale === "zh" ? "娱乐通道" : "Entertainment lanes"}
          title={t(dict, "home.categoriesTitle")}
          description={t(dict, "home.categoriesSubtitle")}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {lanes.map((cat) => (
            <Link
              key={cat.id}
              href={localePath(locale, cat.href)}
              className="group relative block aspect-[16/9] overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface shadow-[0_12px_40px_rgba(0,0,0,0.28)] transition duration-300 hover:border-accent/45 md:aspect-[16/7]"
            >
              {/* Bounded image viewport — card owns dimensions; image never escapes */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={`${localize(cat.name, locale)} on 1XROLL`}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
                  style={{ objectPosition: cat.objectPosition }}
                />
              </div>

              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/15"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent"
              />

              <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
                <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-accent uppercase">
                  {ecosystemEyebrowLabel(cat.eyebrow, locale)}
                </p>

                <div className="flex items-end justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-[family-name:var(--font-display)] text-xl text-white md:text-2xl">
                      {localize(cat.name, locale)}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 max-w-md text-sm leading-relaxed text-white/75">
                      {localize(cat.description, locale)}
                    </p>
                    <p className="mt-3 text-xs font-medium text-white/55">
                      {ecosystemMetricLabel(cat, locale)}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-sm font-medium text-accent backdrop-blur-sm transition group-hover:border-accent/40 group-hover:bg-accent/10">
                    {t(dict, "common.explore")} →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
