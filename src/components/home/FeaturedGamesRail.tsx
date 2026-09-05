import type { Locale } from "@/types/content";
import { getFeaturedGames } from "@/data";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { GameRail } from "@/components/games/GameRail";

export function FeaturedGamesRail({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const featured = getFeaturedGames(12);

  return (
    <Section className="bg-[rgba(14,18,24,0.55)]">
      <Container>
        <SectionHeader
          title={t(dict, "home.featuredTitle")}
          description={t(dict, "home.featuredSubtitle")}
          action={
            <Button href={localePath(locale, "/games")} variant="secondary">
              {t(dict, "common.exploreGames")}
            </Button>
          }
        />
        <GameRail games={featured} locale={locale} />
      </Container>
    </Section>
  );
}
