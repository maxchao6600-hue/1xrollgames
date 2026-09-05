import type { ContentBlock, Locale } from "@/types/content";
import { localize } from "@/lib/utils";

export function ContentBlocks({
  blocks,
  locale,
}: {
  blocks: ContentBlock[];
  locale: Locale;
}) {
  return (
    <div className="prose-brand max-w-3xl">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={index}>{localize(block.text, locale)}</h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={index}>{localize(block.text, locale)}</h3>
          );
        }
        if (block.type === "ul") {
          const items = locale === "zh" ? block.items.zh : block.items.en;
          return (
            <ul key={index}>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        return <p key={index}>{localize(block.text, locale)}</p>;
      })}
    </div>
  );
}
