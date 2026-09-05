import type { Game, Locale } from "@/types/content";
import { GameCard } from "@/components/games/GameCard";

export function GameRail({
  games,
  locale,
}: {
  games: Game[];
  locale: Locale;
}) {
  return (
    <div className="rail-scroll pb-2">
      {games.map((game) => (
        <GameCard key={game.id} game={game} locale={locale} />
      ))}
    </div>
  );
}
