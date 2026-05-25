/**
 * Institutional Editorial footer.
 * Reads as a colophon page from an annual report. ABMS red appears
 * only on the firm name, the rule above the colophon, and the
 * whistleblower channel marker.
 */
import { Link } from "wouter";
import { ASSETS, CONTACT } from "@/lib/assets";

const COLUMNS = [
  {
    heading: "Practice",
    items: [
      "Anti-Bribery & ISO 37001:2016",
      "Section 17A Adequate Procedures",
      "ISO 37301 Compliance Management",
      "ISO 37101 Sustainable Communities",
      "Corruption Risk Assessment",
      "Whistleblowing Management System",
      "GREC Advisory",
    ],
  },
  {
    heading: "Training",
    items: [
      "PECB Lead Implementer",
      "PECB Lead Auditor",
      "PECB Foundation",
      "ISO 37001 ABMS — Kuala Lumpur",
      "ISO 37301 CMS — Johor Bahru",
      "Training Calendar",
    ],
  },
  {
    heading: "Firm",
    items: [
      "About ABMS",
      "Practitioner — Ashok Sarangapani",
      "Memberships & Accreditations",
      "Insights · Compliance Quarterly",
      "Careers",
      "Contact",
    ],
  },
  {
    heading: "Adjacent services",
    items: [
      "IT & Digital Transformation",
      "Talent Acquisition",
      "e-Invoicing Readiness (LHDN)",
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0E0E10] text-white">
      <div className="h-[2px] w-full bg-[var(--abms-red)]" />

      <div className="container pt-20 pb-10">
        <div className="grid grid-cols-12 gap-10">
          {/* Wordmark + statement */}
          <div className="col-span-12 lg:col-span-4">
            <img src={ASSETS.logoOrig} alt="ABMS Consulting" className="h-14 w-auto brightness-110" />
            <p className="mt-6 max-w-sm font-display text-[22px] leading-[1.25] text-white/90">
              A Malaysian practitioner-led anti-bribery, ISO standards, and corporate compliance advisory.
            </p>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-white/65">
              Headquartered in Kuala Lumpur. Engagements across Malaysia, the Middle East, Africa, and the Asia-Pacific.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 text-[12px] text-white/60">
              <div>
                <div className="eyebrow eyebrow--inverted">Corporate · JB</div>
                <p className="mt-2 leading-relaxed">{CONTACT.addressJB}</p>
              </div>
              <div>
                <div className="eyebrow eyebrow--inverted">Registered · KL</div>
                <p className="mt-2 leading-relaxed">{CONTACT.addressKL}</p>
              </div>
            </div>
          </div>

          {/* Index columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading} className="col-span-6 md:col-span-3 lg:col-span-2">
              <div className="eyebrow eyebrow--inverted">{col.heading}</div>
              <ul className="mt-4 space-y-2.5 text-[13px] text-white/80">
                {col.items.map((label) => (
                  <li key={label}>
                    <Link href="/" className="hover:text-white transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Accreditation strip */}
        <div className="mt-16 border-t border-white/10 pt-8 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="eyebrow eyebrow--inverted">Memberships & Accreditation</div>
            <div className="mt-4 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="data-numeral text-[11px] tracking-[0.18em] uppercase text-white/55">Authorized Partner</span>
                <img src={ASSETS.pecbLogo} alt="PECB Canada" className="mt-2 h-10 w-auto bg-white p-1.5" />
              </div>
              <div className="flex flex-col">
                <span className="data-numeral text-[11px] tracking-[0.18em] uppercase text-white/55">Member</span>
                <span className="mt-2 inline-flex h-10 items-center px-3 border border-white/20 text-[12px] tracking-[0.12em] uppercase">
                  UN Global Compact
                </span>
              </div>
              <div className="flex flex-col">
                <span className="data-numeral text-[11px] tracking-[0.18em] uppercase text-white/55">Working languages</span>
                <span className="mt-2 inline-flex h-10 items-center px-3 border border-white/20 text-[12px] tracking-[0.12em] uppercase">
                  EN · BM · TA
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="eyebrow eyebrow--inverted">Whistleblower Channel</div>
            <p className="mt-3 text-[13px] leading-relaxed text-white/75">
              ABMS Consulting maintains an independent whistleblowing channel for clients, staff, and counterparties.
            </p>
            <a href="#" className="mt-3 inline-flex items-center gap-2 border-b border-[var(--abms-red)] pb-1 text-[13px] font-medium text-white">
              <span>Submit a confidential report</span>
              <span className="data-numeral text-[11px] opacity-70">↗</span>
            </a>
          </div>

          <div className="col-span-12 md:col-span-12 lg:col-span-4">
            <div className="eyebrow eyebrow--inverted">Engage</div>
            <a href={CONTACT.whatsappLink} className="mt-3 block text-[13px] leading-relaxed text-white/85 hover:text-white">
              WhatsApp Business · <span className="data-numeral">{CONTACT.whatsapp}</span>
            </a>
            <a href={`mailto:${CONTACT.email}`} className="mt-1.5 block text-[13px] leading-relaxed text-white/85 hover:text-white">
              {CONTACT.email}
            </a>
            <a href="tel:+60736211050" className="mt-1.5 block text-[13px] leading-relaxed text-white/85 hover:text-white">
              <span className="data-numeral">{CONTACT.phone}</span>
            </a>
          </div>
        </div>

        {/* Colophon */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-[11.5px] text-white/55 tracking-[0.04em]">
          <div className="data-numeral">
            © {year} ABMS Consulting Sdn Bhd · Co. Reg. (Malaysia)
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1.5">
            <a href="#" className="hover:text-white">Legal & Disclosures</a>
            <a href="#" className="hover:text-white">PDPA Notice</a>
            <a href="#" className="hover:text-white">Terms of Engagement</a>
            <a href="#" className="hover:text-white">Site Index</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
