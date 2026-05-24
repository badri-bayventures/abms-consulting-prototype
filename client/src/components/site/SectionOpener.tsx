/**
 * Section opener used across both pages.
 * Pairs a small-caps mono eyebrow with a thin red rule and an editorial display headline.
 */
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionOpener({
  reference,
  title,
  kicker,
  align = "left",
  invert = false,
  className,
}: {
  reference: string;
  title: ReactNode;
  kicker?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "text-center" : "text-left",
        invert ? "text-white" : "text-foreground",
        className
      )}
    >
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        <span className={cn("h-[2px] w-10 bg-[var(--abms-red)]")} />
        <span
          className={cn(
            "font-mono text-[11px] tracking-[0.22em] uppercase",
            invert ? "text-white/70" : "text-charcoal"
          )}
        >
          {reference}
        </span>
      </div>
      <h2
        className={cn(
          "mt-5 font-display text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[48px] lg:text-[56px]",
          align === "center" ? "max-w-3xl mx-auto" : "max-w-2xl"
        )}
      >
        {title}
      </h2>
      {kicker ? (
        <p
          className={cn(
            "mt-5 max-w-xl text-[15.5px] leading-[1.65]",
            invert ? "text-white/75" : "text-charcoal",
            align === "center" && "mx-auto"
          )}
        >
          {kicker}
        </p>
      ) : null}
    </div>
  );
}
