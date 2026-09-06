import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("container-page", className)}>{children}</div>;
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("section-space", className)}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  heading?: "h1" | "h2";
}) {
  const HeadingTag = heading;
  return (
    <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-2 text-xs font-medium tracking-[0.18em] text-accent uppercase">
            {eyebrow}
          </p>
        ) : null}
        <HeadingTag className="font-[family-name:var(--font-display)] text-3xl text-text md:text-4xl">
          {title}
        </HeadingTag>
        {description ? (
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-text-muted md:text-[1.05rem]">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
