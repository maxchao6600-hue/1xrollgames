import Image from "next/image";
import { BRAND_ASSETS } from "@/data/assets";
import { cn } from "@/lib/utils";

export function GameArt({
  name,
  gradient,
  image,
  alt,
  providerName,
  categoryLabel,
  className,
  priority = false,
}: {
  name: string;
  gradient: [string, string];
  image?: string;
  alt?: string;
  providerName?: string;
  categoryLabel?: string;
  className?: string;
  priority?: boolean;
}) {
  const resolvedAlt = alt ?? `${name} on 1XROLL`;

  return (
    <div
      className={cn(
        "relative aspect-[3/4] overflow-hidden rounded-[0.9rem] bg-bg-surface",
        className,
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={resolvedAlt}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 180px"
          className="object-cover"
          priority={priority}
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col justify-between p-3.5 sm:p-4"
          style={{
            background: `linear-gradient(165deg, ${gradient[0]}40 0%, #070d14 38%, ${gradient[1]}28 100%)`,
          }}
          role="img"
          aria-label={resolvedAlt}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 26% 16%, rgba(255,255,255,0.14), transparent 40%), radial-gradient(circle at 82% 78%, rgba(45,212,191,0.14), transparent 46%), linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.35))",
            }}
          />
          <div className="relative flex items-start justify-between gap-2">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/15 bg-black/30 p-1 shadow-sm">
              <Image
                src={BRAND_ASSETS.logo}
                alt=""
                fill
                className="object-contain"
                sizes="36px"
              />
            </div>
            {categoryLabel ? (
              <span className="rounded-md border border-white/10 bg-black/40 px-2 py-0.5 text-[0.65rem] font-medium text-white/75">
                {categoryLabel}
              </span>
            ) : null}
          </div>
          <div className="relative space-y-1.5">
            <p className="line-clamp-2 text-[0.95rem] font-semibold leading-snug text-white">
              {name}
            </p>
            {providerName ? (
              <p className="text-xs text-white/60">{providerName}</p>
            ) : null}
            <p className="text-[0.65rem] font-medium tracking-[0.14em] text-accent/80 uppercase">
              1XROLL
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export function CoverArt({
  title,
  gradient,
  image,
  className,
}: {
  title: string;
  gradient: [string, string];
  image?: string;
  className?: string;
}) {
  return (
    <div
      className={cn("relative aspect-[16/10] overflow-hidden rounded-2xl", className)}
      style={
        image
          ? undefined
          : { background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }
      }
    >
      {image ? (
        <Image
          src={image}
          alt={`${title} — 1XROLL guide cover`}
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 640px"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_45%)]" />
      )}
      {!image ? (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
          <p className="max-w-md text-lg font-medium text-white md:text-xl">{title}</p>
        </div>
      ) : null}
    </div>
  );
}
