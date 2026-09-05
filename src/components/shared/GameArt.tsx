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
  unavailableLabel,
  className,
  priority = false,
}: {
  name: string;
  gradient: [string, string];
  image?: string;
  alt?: string;
  providerName?: string;
  categoryLabel?: string;
  unavailableLabel?: string;
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
            background: `linear-gradient(160deg, ${gradient[0]}33 0%, #0a1018 42%, ${gradient[1]}22 100%)`,
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 28% 18%, rgba(255,255,255,0.16), transparent 42%), radial-gradient(circle at 80% 78%, rgba(45,212,191,0.12), transparent 45%)",
            }}
          />
          <div className="relative flex items-start justify-between gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-white/15 bg-black/25 p-1">
              <Image
                src={BRAND_ASSETS.logo}
                alt=""
                fill
                className="object-contain"
                sizes="32px"
              />
            </div>
            {categoryLabel ? (
              <span className="rounded-md border border-white/10 bg-black/35 px-2 py-0.5 text-[0.65rem] text-white/70">
                {categoryLabel}
              </span>
            ) : null}
          </div>
          <div className="relative space-y-1">
            <p className="line-clamp-2 text-sm font-semibold leading-snug text-white">
              {name}
            </p>
            {providerName ? (
              <p className="text-[0.7rem] text-white/55">{providerName}</p>
            ) : null}
            <p className="text-[0.65rem] tracking-wide text-white/35 uppercase">
              {unavailableLabel ?? "Preview unavailable"}
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
