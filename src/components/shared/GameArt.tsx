import { cn } from "@/lib/utils";

export function GameArt({
  name,
  gradient,
  className,
}: {
  name: string;
  gradient: [string, string];
  className?: string;
}) {
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "relative aspect-[3/4] overflow-hidden rounded-[1.1rem]",
        className,
      )}
      style={{
        background: `linear-gradient(145deg, ${gradient[0]}, ${gradient[1]})`,
      }}
      role="img"
      aria-label={`${name} artwork`}
    >
      <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{
        backgroundImage:
          "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 40%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.35), transparent 45%)",
      }} />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="mb-2 grid h-10 w-10 place-items-center rounded-xl bg-black/25 text-sm font-semibold tracking-wide text-white backdrop-blur">
          {initials}
        </div>
        <p className="line-clamp-2 text-sm font-medium text-white drop-shadow">
          {name}
        </p>
      </div>
    </div>
  );
}

export function CoverArt({
  title,
  gradient,
  className,
}: {
  title: string;
  gradient: [string, string];
  className?: string;
}) {
  return (
    <div
      className={cn("relative aspect-[16/10] overflow-hidden rounded-2xl", className)}
      style={{
        background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
      }}
      role="img"
      aria-label={title}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_45%)]" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="max-w-md text-lg font-medium text-white md:text-xl">
          {title}
        </p>
      </div>
    </div>
  );
}
