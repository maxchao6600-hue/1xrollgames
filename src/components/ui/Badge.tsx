import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "accent",
}: {
  children: React.ReactNode;
  tone?: "accent" | "violet" | "neutral" | "hot";
}) {
  const tones = {
    accent: "bg-accent-soft text-accent border-accent/25",
    violet: "bg-[rgba(124,106,239,0.14)] text-[#c4b5fd] border-[rgba(124,106,239,0.3)]",
    neutral: "bg-white/5 text-text-muted border-border",
    hot: "bg-[rgba(251,113,133,0.14)] text-[#fb7185] border-[rgba(251,113,133,0.3)]",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-wide",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}
