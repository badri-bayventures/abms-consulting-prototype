/**
 * ABMS Consulting — Homepage (institutional, evergreen).
 *
 * Round 1 revisions applied:
 *  1. Hero plate swapped to a neutral KL business-district view.
 *  2. Hero headline now leads with practitioner-led identity, not nationality.
 *  3. Founder magazine section collapsed into a single credibility band with
 *     a placeholder "Read the full practitioner profile" link to /about
 *     (link toasts "coming soon" until /about is built).
 *  4. Fabricated Ashok pull-quote removed entirely; no replacement.
 *  5. Bank Rakyat removed from the Standards/Memberships grid and from the
 *     hero right-column ledger.
 *  6. Compliance Quarterly grid replaced by a single "Vol. 1 launching
 *     Q1 2027" interstitial card; section opener preserved.
 *
 * Design system (palette, typography, composition, animation discipline)
 * is unchanged.
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { toast } from "sonner";
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
        <img
          src={ASSETS.heroKlDistrict}
          alt="Kuala Lumpur business district at dusk"
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
                  § Firm · Est. 2019 · Based in Kuala Lumpur
                </span>
              </div>

              <h1 className="mt-7 font-display text-[58px] leading-[0.98] tracking-[-0.02em] text-white sm:text-[72px] lg:text-[88px]">
                A practitioner-led
                <br />
                <span className="text-white">anti-bribery and</span>
                <br />
                <span className="italic font-light text-white/95">compliance advisory.</span>
              </h1>

              <p className="mt-8 max-w-xl text-[16px] leading-[1.65] text-white/80">
                ABMS Consulting advises boards, GLC suppliers, and large privates on anti-bribery, ISO 37001, Section 17A, and the broader compliance estate. The practice is led by an operator with twenty-five years inside regulated organisations — not a generalist. Engagements are run from Kuala Lumpur and Johor Bahru.
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
                    <dd className="mt-1 data-numeral text-[20px] tracking-tight">25 yrs · APAC · MEA</dd>
                  </div>
                  <div>
                    <dt className="text-[11.5px] uppercase tracking-[0.18em] text-white/55">Active mandates</dt>
                    <dd className="mt-1 data-numeral text-[20px] tracking-tight">ISO 37001 · 37301 · 37101 · 37002</dd>
                  </div>
                  <div>
                    <dt className="text-[11.5px] uppercase tracking-[0.18em] text-white/55">Working languages</dt>
                    <dd className="mt-1 text-[16px] tracking-tight">English · Bahasa Malaysia · Tamil</dd>
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

      {/* PRACTITIONER CREDIBILITY BAND ==================================== */}
      <section id="practitioner" className="relative bg-bone border-y border-mist">
        <div className="container py-8 lg:py-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between reveal">
            <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-5">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[var(--abms-red)]" />
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-charcoal whitespace-nowrap">
                  § Practitioner
                </span>
              </div>
              <p className="text-[14.5px] leading-[1.55] text-foreground max-w-3xl">
                Led by <span className="font-medium">Ashok Sarangapani</span> · 25 years compliance leadership across APAC and MEA · PECB Lead Auditor + Certified Trainer · UNGC Member.
              </p>
            </div>
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                toast("Practitioner profile — coming soon");
              }}
              className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-[13px] font-medium hover:border-foreground self-start lg:self-auto whitespace-nowrap"
            >
              <span>Read the full practitioner profile</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      UNGC · Member
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
                onClick={(e) => {
                  e.preventDefault();
                  toast("Full calendar — coming soon");
                }}
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

      {/* INSIGHTS — INTERSTITIAL ========================================== */}
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
                kicker="ABMS will publish a quarterly compliance review and shorter notes on standards, regulator behaviour, and Malaysian enforcement context. Vol. 1 launches Q1 2027."
              />
            </div>

            <div className="col-span-12 lg:col-span-8">
              <div className="relative border border-mist bg-background p-10 lg:p-14">
                <span className="absolute top-0 left-0 h-[2px] w-10 bg-[var(--abms-red)]" />
                <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-charcoal">
                  Vol. 1 · Launching Q1 2027
                </div>
                <h3 className="mt-5 font-display text-[36px] leading-[1.1] tracking-[-0.02em] sm:text-[44px] max-w-2xl">
                  <em className="font-light">Compliance Quarterly</em> — a printed and digital review from the practice.
                </h3>
                <p className="mt-5 max-w-xl text-[15px] leading-[1.65] text-charcoal">
                  The first issue covers Section 17A jurisprudence to date, the ISO 37001 revision drafts, and the CIDB Pekeliling 1/2026 enforcement window. Be notified when Vol. 1 is published.
                </p>

                <form
                  className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const data = new FormData(form);
                    const email = String(data.get("email") || "").trim();
                    if (!email) {
                      toast("Enter an email to be notified");
                      return;
                    }
                    toast("Recorded — we will notify you when Vol. 1 publishes.");
                    form.reset();
                  }}
                >
                  <label htmlFor="cq-email" className="sr-only">
                    Work email
                  </label>
                  <div className="flex items-center gap-3 border border-foreground/20 bg-background px-4 py-3 flex-1 max-w-md focus-within:border-foreground">
                    <Mail className="h-4 w-4 text-charcoal" />
                    <input
                      id="cq-email"
                      name="email"
                      type="email"
                      inputMode="email"
                      placeholder="Work email"
                      className="flex-1 bg-transparent text-[14px] outline-none placeholder:text-charcoal/60"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3 text-[13px] font-medium tracking-wide transition-colors hover:bg-foreground/90 active:scale-[0.97]"
                  >
                    <span>Notify me when Vol. 1 launches</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>

                <div className="mt-6 font-mono text-[10.5px] tracking-[0.22em] uppercase text-charcoal/80">
                  Placeholder · Subscriber list opens Q4 2026
                </div>
              </div>
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
