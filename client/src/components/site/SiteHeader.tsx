/**
 * Institutional Editorial header.
 * Layout: thin upper meta bar (locale, contact) + a primary nav row
 * with the existing ABMS logo on the left and a dense functional menu
 * leading to a single primary CTA. ABMS red used only as the active
 * indicator and on the CTA.
 */
import { Link, useLocation } from "wouter";
import { Globe, Phone } from "lucide-react";
import { ASSETS } from "@/lib/assets";
import { toast } from "sonner";

const NAV = [
  { label: "Practice", href: "/#practice" },
  { label: "Practitioner", href: "/#practitioner" },
  { label: "Standards", href: "/#standards" },
  { label: "Training", href: "/#training" },
  { label: "Insights", href: "/#insights" },
  { label: "G7 Readiness", href: "/g7-iso37001-readiness" },
];

export function SiteHeader({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [location] = useLocation();
  const isDark = variant === "dark";

  const placeholderClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    if (label === "G7 Readiness") return;
    if (label === "Practitioner" || label === "Practice" || label === "Standards" || label === "Training" || label === "Insights") {
      // anchors on the homepage; let them through
      return;
    }
    e.preventDefault();
    toast(`${label} — coming soon`);
  };

  return (
    <header
      className={
        isDark
          ? "relative z-30 border-b border-white/10 bg-transparent text-white"
          : "relative z-30 border-b border-border bg-background text-foreground"
      }
    >
      {/* Upper meta strip */}
      <div
        className={
          isDark
            ? "border-b border-white/10 text-[11px] tracking-[0.18em] uppercase text-white/70"
            : "border-b border-border text-[11px] tracking-[0.18em] uppercase text-muted-foreground"
        }
      >
        <div className="container flex h-9 items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="data-numeral normal-case tracking-normal text-[12px]">
              Kuala Lumpur · Johor Bahru
            </span>
            <span className="hidden md:inline">PECB Canada Authorized Partner</span>
            <span className="hidden lg:inline">UN Global Compact Member</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:+60182164420" className="hidden sm:flex items-center gap-2 normal-case tracking-normal text-[12px]">
              <Phone className="h-3 w-3" />
              <span className="data-numeral">+60 18-216 4420</span>
            </a>
            <button
              type="button"
              onClick={() => toast("Language toggle — coming soon")}
              className="flex items-center gap-2 normal-case tracking-normal text-[12px]"
            >
              <Globe className="h-3 w-3" />
              <span className="font-medium">EN</span>
              <span className="opacity-50">/ 中文 / BM</span>
            </button>
          </div>
        </div>
      </div>

      {/* Primary nav row */}
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src={ASSETS.logoOrig}
            alt="ABMS Consulting"
            className={isDark ? "h-12 w-auto brightness-110" : "h-12 w-auto"}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => {
            const active =
              (item.href === "/g7-iso37001-readiness" && location === "/g7-iso37001-readiness") ||
              (item.href.startsWith("/#") && location === "/");
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => placeholderClick(e, item.label)}
                className={
                  "group relative text-[13px] font-medium tracking-wide " +
                  (isDark ? "text-white/85 hover:text-white" : "text-foreground/85 hover:text-foreground")
                }
              >
                <span>{item.label}</span>
                <span
                  className={
                    "absolute -bottom-1 left-0 h-[2px] bg-[var(--abms-red)] transition-all duration-200 " +
                    (active ? "w-full" : "w-0 group-hover:w-full")
                  }
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/g7-iso37001-readiness"
            className={
              "group hidden md:inline-flex items-center gap-2 px-4 py-2.5 text-[12.5px] font-medium tracking-wide transition-all duration-200 active:scale-[0.97] " +
              "bg-[var(--abms-red)] text-white hover:bg-[var(--abms-red-deep)]"
            }
          >
            <span className="data-numeral text-[10px] tracking-[0.2em] uppercase opacity-80">§</span>
            <span>Engage ABMS</span>
          </a>
        </div>
      </div>
    </header>
  );
}
