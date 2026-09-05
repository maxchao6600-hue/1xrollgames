import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import { categories } from "@/data/categories";
import { CATEGORY_ASSETS } from "@/data/assets";
import { getGamesByCategory, getGameBySlug } from "@/data";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";
import { Container, Section, SectionHeader } from "@/components/ui/Container";

export function DiscoverByExperience({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section>
      <Container>
        <SectionHeader
          title={t(dict, "home.categoriesTitle")}
          description={t(dict, "home.categoriesSubtitle")}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {categories.map((cat, index) => {
            const asset = CATEGORY_ASSETS[cat.id];
            const rep = getGameBySlug(asset.imageSlug);
            const count = getGamesByCategory(cat.id).length;
            const large = index === 0;

            return (
              <Link
                key={cat.id}
                href={localePath(locale, `/games/${cat.slug}`)}
                className={`group relative overflow-hidden rounded-[1.25rem] border border-border bg-bg-surface transition hover:border-accent/40 ${
                  large ? "sm:col-span-2 min-h-[16rem] md:min-h-[18rem]" : "min-h-[14rem]"
                }`}
              >
                <Image
                  src={asset.image}
                  alt={
                    rep
                      ? `${localize(cat.name, locale)} — ${rep.name} on 1XROLL`
                      : localize(cat.name, locale)
                  }
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  sizes={large ? "(max-width:768px) 100vw, 1100px" : "(max-width:768px) 100vw, 50vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <p className="text-xs tracking-[0.16em] text-accent uppercase">
                    {locale === "zh" ? "分类" : "Category"}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-white md:text-3xl">
                    {localize(cat.name, locale)}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80">
                    {localize(cat.shortDescription, locale)}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-3 text-sm">
                    <span className="text-white/65">
                      {locale === "zh" ? `${count} 款游戏` : `${count} games`}
                    </span>
                    <span className="font-medium text-accent">
                      {t(dict, "common.explore")} →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
