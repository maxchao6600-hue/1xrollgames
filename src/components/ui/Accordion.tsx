"use client";

import { cn } from "@/lib/utils";
import { useId, useState } from "react";

export type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const baseId = useId();

  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-bg-surface">
      {items.map((item) => {
        const open = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;
        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-text transition hover:bg-white/[0.03]"
                onClick={() => setOpenId(open ? null : item.id)}
              >
                <span>{item.title}</span>
                <span
                  aria-hidden
                  className={cn(
                    "grid h-7 w-7 place-items-center rounded-full border border-border text-accent transition duration-200",
                    open && "rotate-45 bg-accent-soft",
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="px-5 pb-5 text-[0.98rem] leading-relaxed text-text-muted"
            >
              {open ? <p>{item.content}</p> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
