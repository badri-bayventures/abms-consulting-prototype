/**
 * /g7-iso37001-readiness — campaign landing page.
 * Inherits the homepage system (palette, type, header/footer) but adds
 * operational urgency through a live countdown and a six-month pathway.
 * ABMS red is reserved for the rule, the countdown highlight, and the
 * primary CTAs; everything else stays institutional.
 */
import { useEffect } from "react";
import { ArrowRight, ArrowUpRight, MessageCircle, Download } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionOpener } from "@/components/site/SectionOpener";
import { Countdown } from "@/components/site/Countdown";
import { ASSETS, CONTACT } from "@/lib/assets";

const PATHWAY = [
  { m: "M1", title: "Diagnostic", body: "Gap analysis against ISO 37001:2016 clauses, scoped to your CIDB G7 portfolio and existing management systems." },
  { m: "M2", title: "Risk Assessment", body: "Corruption Risk Assessment covering tender, sub-contracting, gift-and-hospitality, third-party, and political-exposure vectors." },
  { m: "M3", title: "Controls Design", body: "Policy stack, due-diligence procedures, board attestation, and operating controls — drafted to fit your operating model." },
  { m: "M4", title: "Implementation", body: "Roll-out across project teams, sub-contractors, and procurement; targeted training for control owners." },
  { m: "M5", title: "Internal Audit", body: "Internal audit programme executed under Lead Auditor supervision; corrective actions tracked to closure." },
  { m: "M6", title: "Stage 1 + 2 Certification", body: "Certification body audit support, stage 1 documentation review, stage 2 readiness, and post-certification surveillance plan." },
];

const FAQ = [
  {
    q: "Is the 1 January 2027 deadline really enforced, or is it a soft target?",
    a:
      "CIDB Pekeliling 1/2026 sets 1 January 2027 as the enforcement window for ISO 37001 evidence as a precondition for SPKK G7 renewals. Treating it as a soft target carries a renewal risk that most G7 contractors cannot absorb commercially.",
  },
  {
    q: "We already hold ISO 9001 / ISO 45001. Does that absorb part of the scope?",
    a:
      "Yes. ABMS maps your existing management system documentation against the ISO 37001 Annex SL structure during M1 so duplicated controls are reused and not rewritten. Typical implementation effort drops 15–25% where ISO 9001 is mature.",
  },
  {
    q: "Our operations span multiple sites and joint ventures. How does scope work?",
    a:
      "Scope is defined at M1 and reflected in the certification scope statement. Multi-site sampling, JV coverage, and sub-contractor inclusion are addressed during M2 risk assessment and confirmed before the stage 1 audit.",
  },
  {
    q: "Who delivers the work?",
    a:
      "Engagements are led by Ashok Sarangapani — PECB Lead Auditor and Certified Trainer. Senior associates support documentation, training delivery, and internal audit execution.",
  },
  {
    q: "What does ‘From RM 18,000’ actually cover?",
    a:
      "RM 18,000 is the published fee reference for a single-site G7 contractor scope — diagnostic through stage 2 readiness. Multi-site, JV, or extended sub-contractor scopes are quoted separately after M1.",
  },
  {
    q: "Can the certification body audit happen inside the same six months?",
    a:
      "Stage 1 audit is typically scheduled in late M5 or early M6 with the certification body. Stage 2 follows two to four weeks later. ABMS coordinates the schedule.",
  },
];

export default function G7Readiness() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* HERO ============================================================ */}
      <section className="relative isolate overflow-hidden bg-[#0E0E10] text-white">
        <img
          src={ASSETS.portKlang}
          alt="Port Klang at blue hour"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0E0E10] via-[#0E0E10]/85 to-[#0E0E10]/55" />

        <div className="relative z-10">
          <SiteHeader variant="dark" />
        </div>

        <div className="relative z-10 container pt-20 pb-24 lg:pt-24 lg:pb-28">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[var(--abms-red)]" />
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/75">
                  § Campaign · CIDB G7 · Pekeliling 1/2026
                </span>
              </div>
              <h1 className="mt-6 font-display text-[52px] leading-[1.0] tracking-[-0.02em] sm:text-[64px] lg:text-[80px] max-w-3xl">
                Get ISO 37001 certified before your G7 renewal deadline.
              </h1>
              <p className="mt-7 max-w-2xl text-[15.5px] leading-[1.65] text-white/80">
                CIDB Pekeliling 1/2026 sets ISO 37001 evidence as a precondition for SPKK Grade G7 renewal. Implementation typically requires six to nine months. The practical starting window is now.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#book"
                  className="inline-flex items-center gap-3 bg-[var(--abms-red)] px-6 py-3.5 text-[13.5px] font-medium tracking-wide text-white transition-all duration-200 hover:bg-[var(--abms-red-deep)] active:scale-[0.97]"
                >
                  <span>Book a G7 Readiness Call</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 text-[13.5px] font-medium tracking-wide text-white transition-colors hover:border-white"
                >
                  <Download className="h-4 w-4" />
                  <span>G7 Readiness Checklist</span>
                </a>
                <a
                  href={CONTACT.whatsappLink}
                  className="inline-flex items-center gap-2 text-[13.5px] font-medium tracking-wide text-white border-b border-white/40 pb-1 hover:border-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp · {CONTACT.whatsapp}</span>
                </a>
              </div>
            </div>

            {/* Countdown column */}
            <div className="col-span-12 lg:col-span-5 lg:pl-8">
              <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/60">
                Until 1 January 2027 enforcement
              </div>
              <Countdown invert />
              <div className="mt-4 flex items-center justify-between text-[12px] tracking-[0.04em] text-white/65">
                <span className="data-numeral">Counting from today to 1 Jan 2027 · UTC+8</span>
                <span className="font-mono uppercase tracking-[0.18em]">Source · CIDB</span>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
                <Stat value="6" suffix=" mo" label="Typical implementation window" />
                <Stat value="RM 18k" label="Published single-site fee reference" />
                <Stat value="01" label="Practitioner-led, not handed off" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEADLINE MATH =================================================== */}
      <section className="bg-bone paper-grain">
        <div className="container py-24 lg:py-28">
          <div className="grid grid-cols-12 gap-10 reveal">
            <div className="col-span-12 lg:col-span-5">
              <SectionOpener
                reference="§ Deadline · The arithmetic"
                title={
                  <>
                    Why mid-2026 is
                    <br /> the practical start.
                  </>
                }
                kicker="ISO 37001 implementation is not a documentation exercise. The arithmetic of stage 1 and stage 2 audits, plus internal audit and management review, is what determines the start date."
              />
            </div>

            <div className="col-span-12 lg:col-span-7">
              <ul className="border-t border-mist">
                {[
                  {
                    code: "T-0",
                    title: "1 January 2027 — enforcement",
                    body: "ISO 37001 evidence required at SPKK G7 renewal under CIDB Pekeliling 1/2026.",
                  },
                  {
                    code: "T-1",
                    title: "Late Q4 2026 — stage 2 certification audit",
                    body: "Certification body completes stage 2 site audit; non-conformance closure follows.",
                  },
                  {
                    code: "T-2",
                    title: "Q3 2026 — internal audit + management review",
                    body: "Internal audit programme executed; corrective actions tracked; management review formally minuted.",
                  },
                  {
                    code: "T-3",
                    title: "Q2 2026 — controls live across operations",
                    body: "Policy stack, due-diligence procedures, and gift-and-hospitality controls operating end to end.",
                  },
                  {
                    code: "T-4",
                    title: "Mid-2026 — diagnostic + risk assessment",
                    body: "ABMS engagement begins. Six-month pathway commences — see § Pathway.",
                  },
                ].map((row) => (
                  <li key={row.code} className="grid grid-cols-12 gap-6 border-b border-mist py-6">
                    <div className="col-span-2 lg:col-span-1 data-numeral text-[14px] text-[var(--abms-red)]">{row.code}</div>
                    <div className="col-span-10 lg:col-span-5 font-display text-[20px] leading-[1.25] tracking-[-0.01em]">{row.title}</div>
                    <div className="col-span-12 lg:col-span-6 text-[14px] leading-[1.6] text-charcoal">{row.body}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PATHWAY M1-M6 =================================================== */}
      <section className="bg-background border-t border-mist">
        <div className="container py-24 lg:py-32">
          <div className="reveal">
            <SectionOpener
              reference="§ Pathway · Six-month implementation"
              title={
                <>
                  The ABMS six-month
                  <br /> implementation pathway.
                </>
              }
              kicker="Each month has a defined deliverable and an accountable practitioner. Slippage in any month is escalated to the practitioner, not the project manager."
            />
          </div>

          <div className="mt-14 grid grid-cols-12 gap-px bg-mist reveal">
            {PATHWAY.map((step) => (
              <div key={step.m} className="col-span-12 sm:col-span-6 lg:col-span-2 bg-background p-7 min-h-[260px]">
                <div className="data-numeral text-[12.5px] tracking-[0.18em] uppercase text-[var(--abms-red)]">{step.m}</div>
                <h4 className="mt-3 font-display text-[22px] leading-[1.2] tracking-[-0.01em]">{step.title}</h4>
                <p className="mt-3 text-[13.5px] leading-[1.55] text-charcoal">{step.body}</p>
                <div className="mt-6 h-[2px] w-8 bg-[var(--abms-red)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE ANCHOR ==================================================== */}
      <section className="bg-bone paper-grain border-t border-mist">
        <div className="container py-24 lg:py-28">
          <div className="grid grid-cols-12 gap-10 reveal">
            <div className="col-span-12 lg:col-span-6">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[var(--abms-red)]" />
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-charcoal">
                  § Fee reference · Single-site G7 contractor
                </span>
              </div>
              <h3 className="mt-6 font-display text-[44px] leading-[1.05] tracking-[-0.02em] sm:text-[56px]">
                From <span className="data-numeral">RM 18,000</span>
              </h3>
              <p className="mt-5 max-w-md text-[15px] leading-[1.65] text-charcoal">
                Published as a fee reference, not a marketing badge. The figure covers a single-site G7 contractor scope from M1 diagnostic through stage 2 readiness. Multi-site, JV, and extended sub-contractor scopes are quoted separately after M1.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-6 lg:pl-10 lg:border-l lg:border-mist">
              <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-charcoal">Scope inclusion</div>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-foreground">
                {[
                  "ISO 37001:2016 gap diagnostic",
                  "Corruption Risk Assessment (CRA)",
                  "Policy + procedure stack drafting",
                  "Three-lines operating model design",
                  "Internal audit (under Lead Auditor)",
                  "Stage 1 + Stage 2 readiness support",
                  "Board attestation pack",
                  "PDPA-aligned whistleblower intake",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 border-l border-foreground/15 pl-4">
                    <span className="data-numeral text-[11px] mt-1 text-[var(--abms-red)]">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#book"
                  className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3.5 text-[13.5px] font-medium tracking-wide transition-all duration-200 hover:bg-foreground/90 active:scale-[0.97]"
                >
                  <span>Request a scoped quote</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-[13.5px] font-medium tracking-wide hover:border-foreground"
                >
                  <Download className="h-4 w-4" />
                  <span>Download G7 Readiness Checklist</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTITIONER (short) ============================================ */}
      <section className="relative bg-background border-t border-mist">
        <div className="container py-20 lg:py-24">
          <div className="grid grid-cols-12 gap-10 reveal">
            <div className="col-span-12 lg:col-span-4">
              <div className="relative max-w-[360px]">
                <img
                  src={ASSETS.practitionerPortrait}
                  alt="Ashok Sarangapani"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="mt-3 font-mono text-[11px] tracking-[0.22em] uppercase text-charcoal">
                  Plate 02 · Practitioner · KL
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 lg:pl-6">
              <SectionOpener
                reference="§ Practitioner · Short form"
                title={
                  <>
                    Engagements are led by the practitioner, <span className="italic font-light">not handed off after onboarding.</span>
                  </>
                }
              />
              <p className="mt-6 max-w-2xl body-prose">
                Ashok Sarangapani led APAC Compliance & Risks at Puma Energy for fourteen years before founding ABMS. He is a PECB Certified Trainer and Lead Auditor; the same person who delivers your training also signs off on your internal audit. That single line of accountability is the practice's core proposition for G7 contractors operating under SPKK renewal pressure.
              </p>
              <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5 max-w-3xl">
                <Credential label="PECB Canada" value="Lead Auditor · Certified Trainer" />
                <Credential label="Operator history" value="Puma Energy · 14 yrs APAC" />
                <Credential label="Memberships" value="UN Global Compact" />
                <Credential label="Featured client" value="Bank Rakyat" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP ======================================================= */}
      <section id="book" className="relative isolate bg-[#0E0E10] text-white overflow-hidden border-y border-white/10">
        <div className="container relative z-10 py-20 lg:py-24">
          <div className="grid grid-cols-12 gap-10 items-center reveal">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[var(--abms-red)]" />
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/70">
                  § Engage · G7 readiness intake
                </span>
              </div>
              <h3 className="mt-5 font-display text-[36px] leading-[1.1] tracking-[-0.02em] sm:text-[44px] max-w-2xl">
                A 30-minute readiness call with the practitioner.
              </h3>
              <p className="mt-4 max-w-xl text-[14.5px] leading-[1.6] text-white/75">
                Bring your latest SPKK certificate expiry date and a list of active and pipeline G7 projects. We will map the deadline math against your specific portfolio.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-3 lg:items-end">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // placeholder — Calendly link to be wired in later
                }}
                className="inline-flex items-center gap-3 bg-[var(--abms-red)] px-6 py-3.5 text-[13.5px] font-medium tracking-wide text-white transition-all duration-200 hover:bg-[var(--abms-red-deep)] active:scale-[0.97]"
              >
                <span>Book via Calendly</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.whatsappLink}
                className="inline-flex items-center gap-2 border-b border-white/40 pb-1 text-[13px] font-medium tracking-wide text-white hover:border-white"
              >
                <MessageCircle className="h-4 w-4" />
                <span>or WhatsApp · {CONTACT.whatsapp}</span>
              </a>
              <a
                href="#download"
                className="inline-flex items-center gap-2 text-[13px] tracking-wide text-white/70 hover:text-white"
              >
                <Download className="h-4 w-4" />
                <span>or download the readiness checklist</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ============================================================== */}
      <section className="bg-background border-t border-mist">
        <div className="container py-24 lg:py-32">
          <div className="grid grid-cols-12 gap-10 reveal">
            <div className="col-span-12 lg:col-span-4">
              <SectionOpener
                reference="§ FAQ · G7 specific"
                title={
                  <>
                    Questions G7 contractors
                    <br /> actually ask.
                  </>
                }
                kicker="Drawn from real intake calls. If your question is not addressed below, raise it on the readiness call."
              />
            </div>
            <div className="col-span-12 lg:col-span-8">
              <ul className="border-t border-foreground/15">
                {FAQ.map((item, idx) => (
                  <li key={item.q} className="border-b border-mist py-7">
                    <div className="grid grid-cols-12 gap-6">
                      <div className="col-span-2 lg:col-span-1 data-numeral text-[12px] text-charcoal/70">{String(idx + 1).padStart(2, "0")}</div>
                      <div className="col-span-10 lg:col-span-11">
                        <h4 className="font-display text-[22px] leading-[1.25] tracking-[-0.01em]">{item.q}</h4>
                        <p className="mt-3 text-[14.5px] leading-[1.6] text-charcoal max-w-2xl">{item.a}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stat({ value, suffix, label }: { value: string; suffix?: string; label: string }) {
  return (
    <div>
      <div className="data-numeral font-display text-[28px] leading-none tracking-tight text-white">
        {value}
        {suffix && <span className="text-[14px] text-white/65 ml-1">{suffix}</span>}
      </div>
      <div className="mt-2 text-[11px] leading-snug uppercase tracking-[0.14em] text-white/65">{label}</div>
    </div>
  );
}

function Credential({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-charcoal/85">{label}</div>
      <div className="mt-1.5 text-[14px] leading-snug text-foreground">{value}</div>
    </div>
  );
}
