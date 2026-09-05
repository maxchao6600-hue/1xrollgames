import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import { categories, categoryPath } from "@/data/categories";
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
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat, index) => {
            const asset = CATEGORY_ASSETS[cat.id];
            const rep = asset?.imageSlug ? getGameBySlug(asset.imageSlug) : undefined;
            const count = getGamesByCategory(cat.id).length;
            const large = index < 2;

            return (
              <Link
                key={cat.id}
                href={localePath(locale, categoryPath(cat.id))}
                className={`group relative overflow-hidden rounded-[1.25rem] border border-border bg-bg-surface transition hover:border-accent/40 ${
                  large
                    ? "min-h-[14rem] sm:col-span-2 lg:col-span-3 lg:min-h-[16rem]"
                    : "min-h-[12rem] lg:col-span-2"
                }`}
              >
                {asset?.image ? (
                  <Image
                    src={asset.image}
                    alt={
                      rep
                        ? `${localize(cat.name, locale)} — ${rep.name} on 1XROLL`
                        : localize(cat.name, locale)
                    }
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    sizes={large ? "(max-width:768px) 100vw, 60vw" : "(max-width:768px) 100vw, 40vw"}
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                  <p className="text-[0.65rem] tracking-[0.16em] text-accent uppercase">
                    {cat.inventoryMode === "hub"
                      ? locale === "zh"
                        ? "平台通道"
                        : "Platform lane"
                      : locale === "zh"
                        ? "目录"
                        : "Catalogue"}
                  </p>
                  <h3 className="mt-1.5 font-[family-name:var(--font-display)] text-xl text-white md:text-2xl">
                    {localize(cat.name, locale)}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-white/75">
                    {localize(cat.shortDescription, locale)}
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-3 text-sm">
                    <span className="text-white/60">
                      {cat.inventoryMode === "hub"
                        ? locale === "zh"
                          ? "导览中心"
                          : "Orientation hub"
                        : locale === "zh"
                          ? `${count} 款游戏`
                          : `${count} games`}
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
