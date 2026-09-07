"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

function isUsableSrc(src?: string | null) {
  return Boolean(src && src.trim() && src.startsWith("/"));
}

export function OptionalCardMedia({
  src,
  alt,
  className,
  sizes = "(max-width:768px) 100vw, 420px",
  priority = false,
}: {
  src?: string | null;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  if (!isUsableSrc(src) || failed) return null;

  return (
    <div className={cn("relative aspect-[16/9] overflow-hidden", className)}>
      <Image
        src={src!}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
        priority={priority}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
