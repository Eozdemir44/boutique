import Link from "next/link";

const footerLinks = {
  "Boutique": [
    { label: "Tous les bijoux", href: "/nos-bijoux" },
    { label: "Colliers", href: "/nos-bijoux?cat=collier" },
    { label: "Bracelets", href: "/nos-bijoux?cat=bracelet" },
    { label: "Boucles d'oreilles", href: "/nos-bijoux?cat=boucles" },
    { label: "Bagues", href: "/nos-bijoux?cat=bague" },
  ],
  "Collections": [
    { label: "Noctura", href: "/nos-bijoux?collection=noctura" },
    { label: "Time to Shine", href: "/nos-bijoux?collection=time-to-shine" },
    { label: "La Perla", href: "/nos-bijoux?collection=la-perla" },
    { label: "Nouveautés", href: "/nos-bijoux?badge=nouveau" },
  ],
  "Informations": [
    { label: "Notre Histoire", href: "/histoire" },
    { label: "Nos Engagements", href: "/engagement" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/contact#faq" },
  ],
  "Politique": [
    { label: "Mentions légales", href: "/legal" },
    { label: "Politique de confidentialité", href: "/privacy" },
    { label: "Conditions de vente", href: "/cgv" },
    { label: "Politique de retour", href: "/retours" },
  ],
};

const paymentIcons = ["Visa", "MC", "AmEx", "PayPal", "Klarna", "Apple Pay"];

export default function Footer() {
  return (
    <footer className="bg-[#0a3428] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <span
                className="text-3xl text-white"
                style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
              >
                Alis Shine
              </span>
              <br />
              <span className="text-[10px] tracking-[4px] text-[#d7b152] uppercase font-bold">
                Jewels
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Chaque bijou est une invitation à rayonner. Des créations uniques, pour des femmes
              qui savent ce qu'elles valent.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                {
                  icon: () => (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                  label: "Instagram",
                  href: "#",
                },
                {
                  icon: () => (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z" />
                    </svg>
                  ),
                  label: "TikTok",
                  href: "#",
                },
                {
                  icon: () => (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.829.941z" />
                    </svg>
                  ),
                  label: "Pinterest",
                  href: "#",
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#d7b152] hover:border-[#d7b152] transition-all duration-300 hover:scale-110"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[#d7b152] text-[10px] tracking-[3px] uppercase font-bold mb-5">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 text-sm hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Alis Shine Jewels. Tous droits réservés.
          </p>

          {/* Payment methods */}
          <div className="flex flex-wrap items-center gap-2">
            {paymentIcons.map((p) => (
              <span
                key={p}
                className="bg-white/10 text-white/60 text-[10px] font-semibold px-2.5 py-1 rounded tracking-wide border border-white/10"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
