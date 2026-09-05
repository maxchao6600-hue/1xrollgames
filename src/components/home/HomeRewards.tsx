import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import { rewardTopics } from "@/data/rewards";
import { getDictionary, t } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { localize } from "@/lib/utils";
import { Container, Section, SectionHeader } from "@/components/ui/Container";

export function HomeRewards({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section>
      <Container>
        <SectionHeader
          title={t(dict, "home.rewardsTitle")}
          description={t(dict, "home.rewardsSubtitle")}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rewardTopics.map((topic) => (
            <Link
              key={topic.id}
              href={localePath(locale, topic.href)}
              className="group overflow-hidden rounded-2xl border border-border bg-bg-surface transition hover:border-accent/40"
            >
              {topic.image ? (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={topic.image}
                    alt={localize(topic.title, locale)}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
              ) : null}
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-text">
                  {localize(topic.title, locale)}
                </h3>
                <p className="mt-2 text-sm text-text-muted">
                  {localize(topic.summary, locale)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
