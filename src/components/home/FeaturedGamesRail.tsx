import type { Locale } from "@/types/content";
import { getFeaturedGames } from "@/data";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { GameCard } from "@/components/games/GameCard";

export function FeaturedGamesRail({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const featured = getFeaturedGames(12);

  return (
    <Section className="bg-[rgba(14,18,24,0.55)]">
      <Container>
        <SectionHeader
          eyebrow={locale === "zh" ? "游戏发现" : "Discovery"}
          title={t(dict, "home.featuredTitle")}
          description={t(dict, "home.featuredSubtitle")}
          action={
            <Button href={localePath(locale, "/games")} variant="secondary">
              {t(dict, "common.exploreGames")}
            </Button>
          }
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {featured.map((game) => (
            <div key={game.id} className="min-w-0 [&_article]:!w-full">
              <GameCard game={game} locale={locale} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
