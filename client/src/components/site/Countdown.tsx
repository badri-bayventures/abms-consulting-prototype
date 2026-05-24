/**
 * Live countdown to the CIDB Pekeliling 1/2026 enforcement date,
 * 1 January 2027 (Asia/Kuala_Lumpur time, UTC+8).
 */
import { useEffect, useState } from "react";
import { ENFORCEMENT_DATE } from "@/lib/assets";

function diff(now: Date) {
  const ms = ENFORCEMENT_DATE.getTime() - now.getTime();
  const total = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return { days, hours, minutes, seconds };
}

export function Countdown({ invert = true }: { invert?: boolean }) {
  const [t, setT] = useState(() => diff(new Date()));
  useEffect(() => {
    const id = window.setInterval(() => setT(diff(new Date())), 1000);
    return () => window.clearInterval(id);
  }, []);

  const label = (text: string) => (
    <div
      className={
        "mt-2 font-mono text-[10.5px] tracking-[0.22em] uppercase " +
        (invert ? "text-white/60" : "text-charcoal")
      }
    >
      {text}
    </div>
  );

  const value = (n: number) => (
    <div
      className={
        "data-numeral font-display tabular-nums leading-none " +
        (invert ? "text-white" : "text-foreground") +
        " text-[58px] sm:text-[72px] lg:text-[86px]"
      }
    >
      {String(n).padStart(2, "0")}
    </div>
  );

  return (
    <div
      className={
        "grid grid-cols-4 gap-6 sm:gap-8 lg:gap-10 border-y " +
        (invert ? "border-white/15" : "border-foreground/15") +
        " py-8"
      }
    >
      <div>
        {value(t.days)}
        {label("Days")}
      </div>
      <div>
        {value(t.hours)}
        {label("Hours")}
      </div>
      <div>
        {value(t.minutes)}
        {label("Minutes")}
      </div>
      <div>
        {value(t.seconds)}
        {label("Seconds")}
      </div>
    </div>
  );
}
