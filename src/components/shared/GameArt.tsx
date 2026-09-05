import Image from "next/image";
import { cn } from "@/lib/utils";

export function GameArt({
  name,
  gradient,
  image,
  alt,
  className,
  priority = false,
}: {
  name: string;
  gradient: [string, string];
  image?: string;
  alt?: string;
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
      style={
        image
          ? undefined
          : {
              background: `linear-gradient(145deg, ${gradient[0]}, ${gradient[1]})`,
            }
      }
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
        <>
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.3), transparent 40%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="line-clamp-2 text-sm font-medium text-white drop-shadow">
              {name}
            </p>
          </div>
        </>
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
