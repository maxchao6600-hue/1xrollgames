import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-[#041016] hover:brightness-110 shadow-[0_0_0_1px_rgba(34,224,208,0.35)]",
  secondary:
    "bg-bg-surface-2 text-text hover:bg-[#243041] border border-border",
  ghost: "bg-transparent text-text hover:bg-white/5",
  outline:
    "bg-transparent text-accent border border-accent/40 hover:bg-accent-soft",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

type Base = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

type ButtonAsButton = Base &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: undefined;
  };

type ButtonAsLink = Base & {
  href: string;
  external?: boolean;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-200",
    "disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    props.className,
  );

  if (props.href) {
    if ("external" in props && props.external) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {props.children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
      aria-label={buttonProps["aria-label"]}
      id={buttonProps.id}
    >
      {buttonProps.children}
    </button>
  );
}
