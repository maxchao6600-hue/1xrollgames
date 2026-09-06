import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ContentBlock, Game, Locale } from "@/types/content";
import { cn, localize } from "@/lib/utils";
import { localePath } from "@/lib/paths";
import { Button } from "@/components/ui/Button";
import { GameCard } from "@/components/games/GameCard";
import { ctaConfig } from "@/config/site";
import { getDictionary, t } from "@/lib/i18n";
import type { GameCardModel } from "@/data/queries";

export type InfoItem = {
  title: string;
  body: string;
  href?: string;
  kicker?: string;
};

export function FeaturedGamesRail({
  locale,
  title,
  games,
}: {
  locale: Locale;
  title: string;
  games: Array<Game | GameCardModel>;
}) {
  if (!games.length) return null;
  return (
    <HubBand>
      <HubH2>{title}</HubH2>
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {games.slice(0, 6).map((game) => (
          <div key={game.id} className="min-w-0 [&_article]:!w-full">
            <GameCard game={game} locale={locale} />
          </div>
        ))}
      </div>
    </HubBand>
  );
}

export function HubBand({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mt-12 md:mt-16", className)}>{children}</div>;
}

export function HubH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-display)] text-2xl text-text md:text-3xl">
      {children}
    </h2>
  );
}

export function InfoGrid({
  title,
  subtitle,
  items,
  columns = 3,
}: {
  title?: string;
  subtitle?: string;
  items: InfoItem[];
  columns?: 2 | 3 | 4;
}) {
  const col =
    columns === 4
      ? "lg:grid-cols-4"
      : columns === 2
        ? "lg:grid-cols-2"
        : "lg:grid-cols-3";
  return (
    <HubBand>
      {title ? <HubH2>{title}</HubH2> : null}
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
          {subtitle}
        </p>
      ) : null}
      <div className={cn("mt-6 grid gap-4 sm:grid-cols-2", col)}>
        {items.map((item) => {
          const inner = (
            <>
              {item.kicker ? (
                <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-accent uppercase">
                  {item.kicker}
                </p>
              ) : null}
              <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg text-text">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.body}</p>
              {item.href ? (
                <span className="mt-3 inline-block text-sm font-medium text-accent">→</span>
              ) : null}
            </>
          );
          const className =
            "rounded-[1.2rem] border border-border bg-bg-surface p-5 transition hover:border-accent/35";
          if (!item.href) {
            return (
              <article key={item.title} className={className}>
                {inner}
              </article>
            );
          }
          const external = /^https?:\/\//.test(item.href);
          if (external) {
            return (
              <a
                key={item.title}
                href={item.href}
                className={className}
                target="_blank"
                rel="noopener noreferrer"
              >
                {inner}
              </a>
            );
          }
          return (
            <Link key={item.title} href={item.href} className={className}>
              {inner}
            </Link>
          );
        })}
      </div>
    </HubBand>
  );
}

export function StepGrid({
  title,
  subtitle,
  steps,
}: {
  title: string;
  subtitle?: string;
  steps: { title: string; body: string }[];
}) {
  return (
    <HubBand>
      <HubH2>{title}</HubH2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
          {subtitle}
        </p>
      ) : null}
      <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="relative rounded-[1.2rem] border border-border bg-bg-elevated p-5"
          >
            <span className="font-[family-name:var(--font-display)] text-2xl text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-base font-medium text-text">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </HubBand>
  );
}

export function CompareGrid({
  title,
  subtitle,
  columns,
}: {
  title: string;
  subtitle?: string;
  columns: InfoItem[];
}) {
  return (
    <HubBand>
      <HubH2>{title}</HubH2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
          {subtitle}
        </p>
      ) : null}
      <div
        className={cn(
          "mt-6 grid gap-4",
          columns.length >= 4 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {columns.map((col) => (
          <article
            key={col.title}
            className="rounded-[1.2rem] border border-border bg-gradient-to-b from-bg-surface to-bg-elevated p-5"
          >
            <h3 className="font-[family-name:var(--font-display)] text-lg text-accent">
              {col.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">{col.body}</p>
          </article>
        ))}
      </div>
    </HubBand>
  );
}

export function ComparisonTable({
  title,
  subtitle,
  columns,
  rows,
}: {
  title: string;
  subtitle?: string;
  columns: string[];
  rows: { label: string; cells: string[] }[];
}) {
  return (
    <HubBand>
      <HubH2>{title}</HubH2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
          {subtitle}
        </p>
      ) : null}
      <div className="mt-6 hidden overflow-x-auto rounded-[1.2rem] border border-border md:block">
        <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
          <thead className="bg-bg-surface">
            <tr>
              <th className="px-4 py-3 font-medium text-text-muted"> </th>
              {columns.map((col) => (
                <th key={col} className="px-4 py-3 font-[family-name:var(--font-display)] text-base text-accent">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-t border-border">
                <th className="bg-bg-elevated px-4 py-3 align-top font-medium text-text">{row.label}</th>
                {row.cells.map((cell, i) => (
                  <td key={`${row.label}-${i}`} className="px-4 py-3 align-top text-text-muted">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 grid gap-4 md:hidden">
        {columns.map((col, colIndex) => (
          <article key={col} className="rounded-[1.2rem] border border-border bg-bg-surface p-5">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-accent">{col}</h3>
            <dl className="mt-4 space-y-3">
              {rows.map((row) => (
                <div key={`${col}-${row.label}`}>
                  <dt className="text-xs font-medium tracking-wide text-text uppercase">{row.label}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-text-muted">{row.cells[colIndex]}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </HubBand>
  );
}

export function ChecklistPanel({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: string[];
}) {
  return (
    <HubBand>
      <div className="grid gap-8 rounded-[1.35rem] border border-border bg-bg-surface p-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:p-8">
        <div>
          <HubH2>{title}</HubH2>
          {subtitle ? (
            <p className="mt-3 text-sm leading-relaxed text-text-muted">{subtitle}</p>
          ) : null}
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm text-text"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </HubBand>
  );
}

export function FeatureSplit({
  title,
  kicker,
  image,
  imageAlt,
  body,
  points,
  cta,
}: {
  title: string;
  kicker?: string;
  image?: string;
  imageAlt?: string;
  body: string;
  points?: string[];
  cta?: ReactNode;
}) {
  return (
    <HubBand>
      <div className="overflow-hidden rounded-[1.35rem] border border-border bg-bg-surface md:grid md:grid-cols-[1.05fr_0.95fr]">
        {image ? (
          <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[20rem]">
            <Image
              src={image}
              alt={imageAlt ?? title}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>
        ) : (
          <div className="min-h-[12rem] bg-[radial-gradient(circle_at_30%_20%,rgba(255,196,90,0.18),transparent_50%),linear-gradient(160deg,#0a1210,#101820)]" />
        )}
        <div className="flex flex-col justify-center p-6 md:p-8">
          {kicker ? (
            <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-accent uppercase">
              {kicker}
            </p>
          ) : null}
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-text md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-muted md:text-base">{body}</p>
          {points?.length ? (
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              {points.map((p) => (
                <li key={p}>· {p}</li>
              ))}
            </ul>
          ) : null}
          {cta ? <div className="mt-6 flex flex-wrap gap-3">{cta}</div> : null}
        </div>
      </div>
    </HubBand>
  );
}

export function RelatedCards({
  title,
  items,
}: {
  title: string;
  items: { href: string; title: string; body: string }[];
}) {
  return (
    <HubBand>
      <HubH2>{title}</HubH2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-[1.2rem] border border-border bg-bg-surface p-5 transition hover:border-accent/40"
          >
            <h3 className="font-medium text-text">{item.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{item.body}</p>
            <span className="mt-3 inline-block text-sm text-accent">→</span>
          </Link>
        ))}
      </div>
    </HubBand>
  );
}

export function HubCtaBand({
  locale,
  title,
  body,
  secondaryHref,
  secondaryLabel,
  actions,
}: {
  locale: Locale;
  title: string;
  body: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  actions?: {
    href: string;
    label: string;
    variant?: "primary" | "secondary" | "outline";
    external?: boolean;
  }[];
}) {
  const dict = getDictionary(locale);
  const buttons = actions?.length
    ? actions
    : [
        { href: ctaConfig.play.href, label: t(dict, "common.openPlatform"), variant: "primary" as const, external: true },
        {
          href: secondaryHref ?? localePath(locale, "/games"),
          label: secondaryLabel ?? t(dict, "common.exploreGames"),
          variant: "secondary" as const,
        },
      ];
  return (
    <HubBand>
      <div className="rounded-[1.35rem] border border-accent/25 bg-gradient-to-br from-[rgba(255,196,90,0.1)] to-[rgba(45,212,191,0.06)] p-7 md:flex md:items-center md:justify-between md:gap-8 md:p-9">
        <div className="max-w-2xl">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-text">{title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-muted md:text-base">{body}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-3 md:mt-0">
          {buttons.map((btn) => (
            <Button
              key={`${btn.href}-${btn.label}`}
              href={btn.href}
              external={btn.external}
              variant={btn.variant ?? "secondary"}
            >
              {btn.label}
            </Button>
          ))}
        </div>
      </div>
    </HubBand>
  );
}

export function HubAnchorNav({
  items,
  ariaLabel,
}: {
  items: { href: string; label: string }[];
  ariaLabel?: string;
}) {
  if (!items.length) return null;
  return (
    <nav
      aria-label={ariaLabel ?? "On this page"}
      className="sticky top-[var(--header-h)] z-20 mt-8 -mx-1 overflow-x-auto border-y border-border bg-bg/90 py-2.5 backdrop-blur-md"
    >
      <ul className="flex min-w-max gap-2 px-1">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="inline-flex rounded-full border border-border bg-bg-surface px-3 py-1.5 text-xs text-text-muted transition hover:border-accent/40 hover:text-text"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function JourneyStrip({
  title,
  subtitle,
  steps,
}: {
  title: string;
  subtitle?: string;
  steps: { title: string; body: string }[];
}) {
  return (
    <HubBand>
      <HubH2>{title}</HubH2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
          {subtitle}
        </p>
      ) : null}
      <ol
        className={cn(
          "mt-6 grid gap-3",
          steps.length >= 6
            ? "sm:grid-cols-2 xl:grid-cols-6"
            : steps.length === 4
              ? "sm:grid-cols-2 lg:grid-cols-4"
              : "sm:grid-cols-2 md:grid-cols-5",
        )}
      >
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="relative rounded-[1.15rem] border border-border bg-bg-elevated p-4"
          >
            <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-accent uppercase">
              {String(i + 1).padStart(2, "0")}
              {i < steps.length - 1 ? " →" : ""}
            </p>
            <h3 className="mt-2 text-sm font-medium text-text">{step.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </HubBand>
  );
}

export function EcosystemFlow({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: { title: string; body: string; href: string }[];
}) {
  return (
    <HubBand>
      <HubH2>{title}</HubH2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
          {subtitle}
        </p>
      ) : null}
      <ol className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {items.map((item, i) => (
          <li key={`${item.title}-${item.href}`}>
            <Link
              href={item.href}
              className="flex h-full flex-col rounded-[1.2rem] border border-border bg-bg-surface p-5 transition hover:border-accent/40"
            >
              <span className="text-[0.65rem] font-semibold tracking-[0.16em] text-accent uppercase">
                {String(i + 1).padStart(2, "0")}
                {i < items.length - 1 ? " ↓" : ""}
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg text-text">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{item.body}</p>
            </Link>
          </li>
        ))}
      </ol>
    </HubBand>
  );
}

export function HighlightPanel({
  kicker,
  title,
  body,
  points,
}: {
  kicker?: string;
  title: string;
  body: string;
  points?: string[];
}) {
  return (
    <HubBand>
      <div
        className={cn(
          "grid gap-6 rounded-[1.35rem] border border-accent/25 bg-gradient-to-br from-bg-surface to-bg-elevated p-6 md:p-8",
          points?.length ? "md:grid-cols-2" : "",
        )}
      >
        <div>
          {kicker ? (
            <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-accent uppercase">
              {kicker}
            </p>
          ) : null}
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-text">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-muted md:text-base">{body}</p>
        </div>
        {points?.length ? (
          <ul className="grid gap-3 content-center">
            {points.map((p) => (
              <li
                key={p}
                className="rounded-xl border border-border bg-bg p-4 text-sm text-text"
              >
                {p}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </HubBand>
  );
}

export function ProviderMatrix({
  title,
  subtitle,
  rows,
  locale,
}: {
  title: string;
  subtitle?: string;
  locale: Locale;
  rows: {
    name: string;
    href: string;
    count: number;
    categories: string[];
    titles: string[];
  }[];
}) {
  const zh = locale === "zh";
  return (
    <HubBand>
      <HubH2>{title}</HubH2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
          {subtitle}
        </p>
      ) : null}
      <div className="mt-6 overflow-x-auto rounded-[1.25rem] border border-border">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-bg-elevated text-text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">{zh ? "厂商" : "Provider"}</th>
              <th className="px-4 py-3 font-medium">{zh ? "已核实" : "Verified"}</th>
              <th className="px-4 py-3 font-medium">{zh ? "分类" : "Categories"}</th>
              <th className="px-4 py-3 font-medium">{zh ? "示例作品" : "Example titles"}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.href} className="border-t border-border">
                <td className="px-4 py-3">
                  <Link href={row.href} className="font-medium text-accent hover:underline">
                    {row.name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-text-muted">{row.count}</td>
                <td className="px-4 py-3 text-text-muted">{row.categories.join(" · ")}</td>
                <td className="px-4 py-3 text-text-muted">{row.titles.join(" · ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </HubBand>
  );
}

type SectionGroup = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export function groupContentBlocks(
  blocks: ContentBlock[],
  locale: Locale,
): SectionGroup[] {
  const groups: SectionGroup[] = [];
  let current: SectionGroup | null = null;
  for (const block of blocks) {
    if (block.type === "h2") {
      current = { heading: localize(block.text, locale), paragraphs: [] };
      groups.push(current);
      continue;
    }
    if (!current) {
      current = { heading: "", paragraphs: [] };
      groups.push(current);
    }
    if (block.type === "h3") {
      current.paragraphs.push(localize(block.text, locale));
    } else if (block.type === "p") {
      current.paragraphs.push(localize(block.text, locale));
    } else if (block.type === "ul") {
      current.list = locale === "zh" ? block.items.zh : block.items.en;
    }
  }
  return groups.filter((g) => g.heading || g.paragraphs.length);
}

export function GroupedSectionGrid({
  blocks,
  locale,
  title,
}: {
  blocks: ContentBlock[];
  locale: Locale;
  title?: string;
}) {
  const groups = groupContentBlocks(blocks, locale);
  if (!groups.length) return null;
  return (
    <HubBand>
      {title ? <HubH2>{title}</HubH2> : null}
      <div className={cn("grid gap-4 md:grid-cols-2", groups.length >= 5 && "xl:grid-cols-3", title ? "mt-6" : "")}>
        {groups.map((group) => (
          <article
            key={group.heading || group.paragraphs[0]}
            className="rounded-[1.2rem] border border-border bg-bg-surface p-5 md:p-6"
          >
            {group.heading ? (
              <h2 className="font-[family-name:var(--font-display)] text-xl text-text">
                {group.heading}
              </h2>
            ) : null}
            {group.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="mt-3 text-sm leading-relaxed text-text-muted">
                {p}
              </p>
            ))}
            {group.list?.length ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text-muted">
                {group.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </HubBand>
  );
}
