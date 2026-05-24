/**
 * ABMS Consulting — Homepage (institutional, evergreen).
 * Style guard: institutional editorial. ABMS red is the only chromatic
 * statement. Layout is asymmetric and rule-driven. Photography is
 * full-bleed Malaysian institutional infrastructure.
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionOpener } from "@/components/site/SectionOpener";
import { ASSETS, CONTACT } from "@/lib/assets";

const PRACTICE = [
  {
    code: "01",
    standard: "ISO 37001:2016",
    title: "Anti-Bribery Management Systems",
    body:
      "Implementation, internal audit, and certification readiness for organisations operating in jurisdictions with elevated bribery exposure.",
  },
  {
    code: "02",
    standard: "MACC Act 2009 · §17A",
    title: "Adequate Procedures Advisory",
    body:
      "Section 17A defences scoped to commercial reality — board attestation packs, supply-chain due diligence, and gift-and-hospitality controls.",
  },
  {
    code: "03",
    standard: "ISO 37301",
    title: "Compliance Management Systems",
    body:
      "End-to-end CMS architecture for regulated organisations — risk universe, three-lines model, and operating-effectiveness review.",
  },
  {
    code: "04",
    standard: "Methodology",
    title: "Corruption Risk Assessment",
    body:
      "Country, counterparty, and process-level CRAs that withstand regulator and certification-body scrutiny.",
  },
  {
    code: "05",
    standard: "Whistleblowing",
    title: "Whistleblowing Management System",
    body:
      "Policy, intake, triage, and case management — designed to satisfy ISO 37002 expectations and Malaysian PDPA constraints.",
  },
  {
    code: "06",
    standard: "Programme",
    title: "GREC — Governance, Risk, Ethics, Compliance",
    body:
      "Integrated GREC programmes for boards consolidating advisory, training, and assurance under a single accountable practitioner.",
  },
  {
    code: "07",
    standard: "ISO 37101",
    title: "Sustainable Communities",
    body:
      "Sustainability management systems for municipal and GLC contexts — aligned with national ESG disclosure expectations.",
  },
  {
    code: "08",
    standard: "PECB · Accredited",
    title: "Training & Certification",
    body:
      "Lead Implementer, Lead Auditor, and Foundation training delivered by a PECB-certified trainer who is also an active practitioner.",
  },
];

const TRAINING = [
  {
    date: "10–14 Jun 2026",
    code: "ISO 37001",
    title: "ABMS Lead Implementer",
    venue: "Kuala Lumpur · 5 days · classroom",
    seats: "9 seats",
  },
  {
    date: "01–05 Jul 2026",
    code: "ISO 37001",
    title: "ABMS Lead Auditor",
    venue: "Kuala Lumpur · 5 days · classroom",
    seats: "12 seats",
  },
  {
    date: "22–24 Jul 2026",
    code: "ISO 37301",
    title: "CMS Foundation",
    venue: "Johor Bahru · 3 days · classroom",
    seats: "16 seats",
  },
  {
    date: "12–16 Aug 2026",
    code: "ISO 37002",
    title: "Whistleblowing Management — Lead Implementer",
    venue: "Online · 5 days · live cohort",
    seats: "Open",
  },
  {
    date: "23–27 Sep 2026",
    code: "ISO 37001",
    title: "ABMS Lead Implementer",
    venue: "Penang · 5 days · classroom",
    seats: "Waitlist",
  },
];

const INSIGHTS = [
  {
    issue: "Q2 · 2026",
    kicker: "Section 17A",
    title: "Adequate procedures three years on — what the courts have actually said",
    minutes: "9 min read",
  },
  {
    issue: "Q2 · 2026",
    kicker: "ISO 37001",
    title: "Reading the 2026 revision drafts: what changes for Malaysian implementers",
    minutes: "12 min read",
  },
  {
    issue: "Q1 · 2026",
    kicker: "CIDB · Pekeliling 1/2026",
    title: "G7 contractors and the January 2027 enforcement window",
    minutes: "7 min read",
  },
  {
    issue: "Q1 · 2026",
    kicker: "Whistleblowing",
    title: "PDPA-compliant intake design under the 2024 amendments",
    minutes: "11 min read",
  },
];

export default function Home() {
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
      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#0E0E10] text-white">
        {/* Background plate */}
        <img
          src={ASSETS.heroPutrajaya}
          alt="Perdana Putra, Putrajaya at blue hour"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0E0E10] via-[#0E0E10]/80 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E0E10]/70 via-transparent to-[#0E0E10]/40" />

        <div className="relative z-10">
          <SiteHeader variant="dark" />
        </div>

        <div className="relative z-10 container pt-24 pb-28 lg:pt-28 lg:pb-32">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[var(--abms-red)]" />
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/75">
                  § Firm · Est. 2019 · Kuala Lumpur
                </span>
              </div>

              <h1 className="mt-7 font-display text-[58px] leading-[0.98] tracking-[-0.02em] text-white sm:text-[72px] lg:text-[88px]">
                A Malaysian
                <br />
                <span className="text-white">practitioner-led</span>
                <br />
                <span className="italic font-light text-white/95">compliance advisory.</span>
              </h1>

              <p className="mt-8 max-w-xl text-[16px] leading-[1.65] text-white/80">
                ABMS Consulting advises boards, GLC suppliers, and large privates on anti-bribery, ISO 37001, Section 17A, and the broader compliance estate. The practice is led from Kuala Lumpur by an operator with twenty-five years inside regulated organisations — not a generalist.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#engage"
                  className="group inline-flex items-center gap-3 bg-[var(--abms-red)] px-6 py-3.5 text-[13.5px] font-medium tracking-wide text-white transition-all duration-200 hover:bg-[var(--abms-red-deep)] active:scale-[0.97]"
                >
                  <span>Engage the practice</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <Link
                  href="/g7-iso37001-readiness"
                  className="inline-flex items-center gap-2 border-b border-white/40 pb-1 text-[13.5px] font-medium tracking-wide text-white hover:border-white"
                >
                  <span>G7 ISO 37001 readiness</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right credentials column */}
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <div className="lg:mt-2 border-t border-white/15 pt-6">
                <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/55">
                  Reference · 2026
                </div>
                <dl className="mt-5 space-y-5 text-white">
                  <div>
                    <dt className="text-[11.5px] uppercase tracking-[0.18em] text-white/55">Founded</dt>
                    <dd className="mt-1 data-numeral text-[20px] tracking-tight">2019 · Kuala Lumpur</dd>
                  </div>
                  <div>
                    <dt className="text-[11.5px] uppercase tracking-[0.18em] text-white/55">Practitioner experience</dt>
                    <dd className="mt-1 data-numeral text-[20px] tracking-tight">
                      25 yrs · APAC · MEA
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11.5px] uppercase tracking-[0.18em] text-white/55">Active mandates</dt>
                    <dd className="mt-1 data-numeral text-[20px] tracking-tight">ISO 37001 · 37301 · 37101 · 37002</dd>
                  </div>
                  <div>
                    <dt className="text-[11.5px] uppercase tracking-[0.18em] text-white/55">Featured client</dt>
                    <dd className="mt-1 text-[16px] tracking-tight">Bank Rakyat</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Bottom hero meta */}
          <div className="mt-20 grid grid-cols-12 gap-8 border-t border-white/10 pt-6 text-white/65">
            <div className="col-span-12 md:col-span-4 flex items-center gap-3 text-[12px] tracking-[0.18em] uppercase">
              <span className="data-numeral text-white">01</span>
              <span>Simplified</span>
              <span className="opacity-40">·</span>
              <span className="data-numeral text-white">02</span>
              <span>Secured</span>
              <span className="opacity-40">·</span>
              <span className="data-numeral text-white">03</span>
              <span>Sustainable</span>
            </div>
            <div className="col-span-12 md:col-span-4 text-[12px] tracking-[0.18em] uppercase md:text-center">
              Educate · Engage · Enlighten
            </div>
            <div className="col-span-12 md:col-span-4 text-[12px] tracking-[0.18em] uppercase md:text-right">
              Member · UN Global Compact &nbsp;·&nbsp; Authorized · PECB Canada
            </div>
          </div>
        </div>
      </section>

      {/* PRACTITIONER ===================================================== */}
      <section id="practitioner" className="relative bg-bone paper-grain">
        <div className="container py-24 lg:py-32">
          <div className="grid grid-cols-12 gap-10 reveal">
            <div className="col-span-12 lg:col-span-5">
              <div className="relative">
                <img
                  src={ASSETS.practitionerPortrait}
                  alt="Ashok Sarangapani, founding practitioner"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute -bottom-3 -right-3 hidden md:flex h-24 w-24 items-center justify-center bg-[var(--abms-red)] text-white">
                  <div className="text-center leading-tight">
                    <div className="data-numeral text-[28px] font-medium">25</div>
                    <div className="text-[10px] tracking-[0.2em] uppercase">Years</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 font-mono text-[11px] tracking-[0.22em] uppercase text-charcoal">
                Plate 01 · The Practitioner · KL, 2026
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:pl-10">
              <SectionOpener
                reference="§ Practitioner · Founder"
                title={
                  <>
                    Ashok Sarangapani.
                    <br />
                    <span className="italic font-light text-charcoal/85">An operator before an advisor.</span>
                  </>
                }
              />
              <div className="mt-8 max-w-xl space-y-5 body-prose">
                <p>
                  Before founding ABMS, Ashok led APAC Compliance & Risks at Puma Energy for fourteen years — a downstream energy operator across some of the world's most bribery-exposed jurisdictions. The advisory practice is built on that operator vantage, not on consulting templates.
                </p>
                <p>
                  He is one of the few practitioners in Southeast Asia to hold both PECB Lead Auditor and PECB Certified Trainer credentials simultaneously, alongside CCEP-I, CFCS, GRCA, and LIFA. Mandates have spanned the Middle East, Africa, and the Asia-Pacific.
                </p>
              </div>

              {/* Credential ledger */}
              <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 border-t border-mist pt-6 max-w-xl">
                <Credential label="PECB Canada" value="Lead Auditor · Certified Trainer" />
                <Credential label="ACFE / ACAMS lineage" value="CFCS" />
                <Credential label="Society of Corporate Compliance" value="CCEP-I" />
                <Credential label="GRC Audit" value="GRCA" />
                <Credential label="Internal Forensic" value="LIFA" />
                <Credential label="Operator history" value="Puma Energy · 14 yrs APAC" />
              </div>

              <blockquote className="mt-10 max-w-xl border-l-2 border-[var(--abms-red)] pl-5 font-display text-[22px] leading-[1.3] text-foreground">
                <Quote className="mb-2 h-5 w-5 text-[var(--abms-red)]" />
                <span className="italic">
                  Compliance is the discipline of doing the unglamorous thing on the days when nobody is checking. The advisory exists to make that discipline survivable inside a real operating company.
                </span>
                <div className="mt-3 not-italic text-[12px] tracking-[0.18em] uppercase font-sans text-charcoal">
                  — Ashok Sarangapani · Founding Practitioner
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE INDEX =================================================== */}
      <section id="practice" className="relative bg-background">
        <div className="container py-24 lg:py-32">
          <div className="grid grid-cols-12 gap-10 reveal">
            <div className="col-span-12 lg:col-span-4">
              <SectionOpener
                reference="§ Practice · Index"
                title={
                  <>
                    The full estate, not <br /> a single product.
                  </>
                }
                kicker="ABMS is multi-service by design. Each engagement is led by the practitioner — not handed off to junior associates after onboarding."
              />
              <a
                href="#engage"
                className="mt-8 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-[13px] font-medium hover:border-foreground"
              >
                <span>Discuss a mandate</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <ul className="border-t border-mist">
                {PRACTICE.map((item) => (
                  <li
                    key={item.code}
                    className="group grid grid-cols-12 items-baseline gap-6 border-b border-mist py-6 transition-colors duration-200 hover:bg-bone"
                  >
                    <div className="col-span-2 lg:col-span-1 data-numeral text-[14px] text-charcoal/70">
                      {item.code}
                    </div>
                    <div className="col-span-10 lg:col-span-3 font-mono text-[11px] tracking-[0.18em] uppercase text-charcoal">
                      {item.standard}
                    </div>
                    <div className="col-span-12 lg:col-span-5 font-display text-[22px] leading-[1.2] tracking-[-0.01em]">
                      {item.title}
                    </div>
                    <div className="col-span-12 lg:col-span-3 text-[14px] leading-[1.55] text-charcoal">
                      {item.body}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CINEMATIC PLATE BAND ============================================= */}
      <section className="relative isolate bg-[#0E0E10] text-white overflow-hidden">
        <img
          src={ASSETS.refineryDusk}
          alt="Downstream petroleum operations at dusk"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0E0E10] via-[#0E0E10]/85 to-transparent" />
        <div className="container relative z-10 py-28 lg:py-36">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-7 reveal">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[var(--abms-red)]" />
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/75">
                  § Provenance · Operator-led
                </span>
              </div>
              <h3 className="mt-6 font-display text-[40px] leading-[1.1] tracking-[-0.01em] sm:text-[52px] max-w-3xl">
                The advisory carries the discipline of the operating company,
                <span className="italic font-light"> not the veneer of the consulting one.</span>
              </h3>
              <div className="mt-8 grid grid-cols-3 gap-6 max-w-xl border-t border-white/15 pt-6">
                <Stat value="14" suffix=" yrs" label="APAC compliance leadership at Puma Energy" />
                <Stat value="11" suffix=" jurisdictions" label="Field-led engagements across MEA & APAC" />
                <Stat value="07" suffix=" yrs" label="ABMS Consulting · founded 2019" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STANDARDS / ACCREDITATION ======================================== */}
      <section id="standards" className="bg-bone paper-grain">
        <div className="container py-24 lg:py-32">
          <div className="grid grid-cols-12 gap-10 reveal">
            <div className="col-span-12 lg:col-span-5">
              <SectionOpener
                reference="§ Standards · Memberships"
                title={
                  <>
                    Earned credentials,
                    <br /> presented as record.
                  </>
                }
                kicker="ABMS holds its accreditations the way an institution holds a charter — visibly, and as a constraint on practice."
              />
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="grid grid-cols-2 gap-6">
                <CredentialCard
                  reference="PECB · Canada"
                  title="Authorized Partner"
                  caption="ISO/IEC 17024-accredited training and certification delivered under PECB partner agreement."
                  artwork={
                    <img src={ASSETS.pecbLogo} alt="PECB" className="h-14 w-auto bg-white p-2" />
                  }
                />
                <CredentialCard
                  reference="UN · Global Compact"
                  title="Member"
                  caption="Aligned with the ten principles on human rights, labour, environment, and anti-corruption."
                  artwork={
                    <div className="px-3 py-2 border border-foreground/40 font-mono text-[11px] tracking-[0.22em] uppercase">
                      UNGC · 2024
                    </div>
                  }
                />
                <CredentialCard
                  reference="Practitioner"
                  title="PECB Lead Auditor + Certified Trainer"
                  caption="A combination held by very few practitioners in Southeast Asia."
                  artwork={
                    <div className="data-numeral text-[42px] font-medium leading-none text-[var(--abms-red)]">02</div>
                  }
                />
                <CredentialCard
                  reference="Featured client"
                  title="Bank Rakyat"
                  caption="Engagement delivered under non-disclosure; reference available on qualified request."
                  artwork={
                    <div className="px-3 py-2 border border-foreground/40 font-display text-[16px] tracking-tight">
                      Bank Rakyat
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING CALENDAR ================================================ */}
      <section id="training" className="bg-background">
        <div className="container py-24 lg:py-32">
          <div className="grid grid-cols-12 gap-10 reveal">
            <div className="col-span-12 lg:col-span-4">
              <SectionOpener
                reference="§ Training · Calendar"
                title={
                  <>
                    A schedule, <br /> not a sales list.
                  </>
                }
                kicker="ABMS publishes its training cadence as a calendar of record. Every cohort is led by a PECB-certified trainer who is also an active mandate practitioner."
              />
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-[13px] font-medium hover:border-foreground"
              >
                <span>View full 2026 calendar</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-y border-foreground/15 text-left">
                    <th className="py-3 pr-6 text-[11px] tracking-[0.18em] uppercase font-mono text-charcoal">Window</th>
                    <th className="py-3 pr-6 text-[11px] tracking-[0.18em] uppercase font-mono text-charcoal">Standard</th>
                    <th className="py-3 pr-6 text-[11px] tracking-[0.18em] uppercase font-mono text-charcoal">Programme</th>
                    <th className="py-3 pr-6 text-[11px] tracking-[0.18em] uppercase font-mono text-charcoal">Venue</th>
                    <th className="py-3 pr-6 text-[11px] tracking-[0.18em] uppercase font-mono text-charcoal text-right">Seats</th>
                  </tr>
                </thead>
                <tbody>
                  {TRAINING.map((row) => (
                    <tr key={row.title + row.date} className="border-b border-mist align-top">
                      <td className="py-5 pr-6 data-numeral text-[14px] text-foreground whitespace-nowrap">{row.date}</td>
                      <td className="py-5 pr-6 text-[12px] tracking-[0.16em] uppercase text-[var(--abms-red)] whitespace-nowrap font-mono">{row.code}</td>
                      <td className="py-5 pr-6 font-display text-[18px] leading-[1.25] tracking-[-0.01em]">{row.title}</td>
                      <td className="py-5 pr-6 text-[13.5px] text-charcoal">{row.venue}</td>
                      <td className="py-5 pr-2 text-right text-[13px] text-foreground">
                        <span className="inline-flex items-center px-2 py-0.5 border border-foreground/20 data-numeral">
                          {row.seats}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS / COMPLIANCE QUARTERLY =================================== */}
      <section id="insights" className="bg-bone paper-grain border-t border-mist">
        <div className="container py-24 lg:py-32">
          <div className="grid grid-cols-12 gap-10 reveal">
            <div className="col-span-12 lg:col-span-4">
              <SectionOpener
                reference="§ Insights · Compliance Quarterly"
                title={
                  <>
                    Publication cadence
                    <br /> as credibility.
                  </>
                }
                kicker="The firm publishes a quarterly compliance review and shorter notes on standards, regulator behaviour, and Malaysian enforcement context."
              />
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-[13px] font-medium hover:border-foreground"
              >
                <span>Subscribe to Compliance Quarterly</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-mist">
                {INSIGHTS.map((item) => (
                  <li key={item.title} className="bg-bone p-7 transition-colors duration-200 hover:bg-background">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-charcoal">{item.kicker}</span>
                      <span className="data-numeral text-[11px] text-charcoal/70">{item.issue}</span>
                    </div>
                    <h4 className="mt-5 font-display text-[22px] leading-[1.25] tracking-[-0.01em]">{item.title}</h4>
                    <div className="mt-6 flex items-center justify-between text-[12.5px] text-charcoal">
                      <span>{item.minutes}</span>
                      <span className="inline-flex items-center gap-1">
                        Read <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGE CTA ======================================================== */}
      <section id="engage" className="relative isolate bg-[#0E0E10] text-white overflow-hidden">
        <img
          src={ASSETS.klSkyline}
          alt="Kuala Lumpur skyline at dusk"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0E0E10]/95 via-[#0E0E10]/80 to-[#0E0E10]/40" />
        <div className="container relative z-10 py-28 lg:py-32">
          <div className="grid grid-cols-12 gap-10 reveal">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[var(--abms-red)]" />
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/75">
                  § Engage · Practitioner intake
                </span>
              </div>
              <h3 className="mt-6 font-display text-[44px] leading-[1.05] tracking-[-0.02em] sm:text-[56px] max-w-3xl">
                Speak with the practitioner directly.
              </h3>
              <p className="mt-6 max-w-xl text-[15.5px] leading-[1.65] text-white/80">
                Initial consultations are conducted by Ashok. Mandates begin only after fit and scope are mutually confirmed.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={CONTACT.whatsappLink}
                  className="inline-flex items-center gap-3 bg-[var(--abms-red)] px-6 py-3.5 text-[13.5px] font-medium tracking-wide text-white transition-all duration-200 hover:bg-[var(--abms-red-deep)] active:scale-[0.97]"
                >
                  <span>WhatsApp the practice</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 border-b border-white/40 pb-1 text-[13.5px] font-medium tracking-wide text-white hover:border-white"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:pl-10 lg:border-l lg:border-white/15">
              <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/55">Offices</div>
              <div className="mt-6 space-y-6 text-white">
                <div>
                  <div className="text-[11.5px] uppercase tracking-[0.18em] text-white/55">Corporate · Johor Bahru</div>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/85">{CONTACT.addressJB}</p>
                </div>
                <div>
                  <div className="text-[11.5px] uppercase tracking-[0.18em] text-white/55">Registered · Kuala Lumpur</div>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/85">{CONTACT.addressKL}</p>
                </div>
                <div className="data-numeral text-[14px] text-white/85">
                  {CONTACT.phone} &nbsp;·&nbsp; {CONTACT.whatsapp}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Credential({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-charcoal/85">{label}</div>
      <div className="mt-1.5 text-[14.5px] leading-snug text-foreground">{value}</div>
    </div>
  );
}

function Stat({ value, suffix, label }: { value: string; suffix?: string; label: string }) {
  return (
    <div>
      <div className="data-numeral font-display text-[44px] leading-none tracking-tight text-white">
        {value}
        {suffix && <span className="text-[18px] text-white/65 ml-1 align-baseline">{suffix}</span>}
      </div>
      <div className="mt-2 text-[12px] leading-snug uppercase tracking-[0.14em] text-white/65">{label}</div>
    </div>
  );
}

function CredentialCard({
  reference,
  title,
  caption,
  artwork,
}: {
  reference: string;
  title: string;
  caption: string;
  artwork: React.ReactNode;
}) {
  return (
    <div className="relative bg-background border border-mist p-7">
      <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-charcoal">{reference}</div>
      <div className="mt-4 font-display text-[22px] leading-[1.2] tracking-[-0.01em]">{title}</div>
      <p className="mt-3 text-[13.5px] leading-[1.55] text-charcoal">{caption}</p>
      <div className="mt-6 flex items-center">{artwork}</div>
      <span className="absolute top-0 left-0 h-[2px] w-10 bg-[var(--abms-red)]" />
    </div>
  );
}
