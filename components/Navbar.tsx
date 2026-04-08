"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Search, Heart, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/" },
  {
    label: "Nos Bijoux",
    href: "/nos-bijoux",
    sub: [
      { label: "Tous les bijoux", href: "/nos-bijoux" },
      { label: "Colliers", href: "/nos-bijoux?cat=collier" },
      { label: "Bracelets", href: "/nos-bijoux?cat=bracelet" },
      { label: "Boucles d'oreilles", href: "/nos-bijoux?cat=boucles" },
      { label: "Bagues", href: "/nos-bijoux?cat=bague" },
    ],
  },
  {
    label: "Collections",
    href: "/nos-bijoux",
    sub: [
      { label: "Noctura", href: "/nos-bijoux?collection=noctura" },
      { label: "Time to Shine", href: "/nos-bijoux?collection=time-to-shine" },
      { label: "La Perla", href: "/nos-bijoux?collection=la-perla" },
    ],
  },
  { label: "Notre Histoire", href: "/histoire" },
  { label: "Engagement", href: "/engagement" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [cartCount] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-white/90 backdrop-blur-sm py-6"
      }`}
    >
      {/* Logo + Nav + Actions */}
      <nav className="max-block-none mx-auto px-7 sm:px-0 flex items-center justify-between gap-4">
        {/* Hamburger (mobile) */}
        <button
          className="lg:hidden text-[#0a3124] p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center group shrink-0">
          <span
            className="font-[var(--font-arapey)], text-[#0a3428] text-2xl md:text-5xl tracking-wide leading-none group-hover:text-[#d7b152] transition-colors duration-300"
            style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
          >
            Alis Shine
          </span>
          <span className="text-[12px] tracking-[6px] text-[#d7b152] uppercase font-semibold">
            Jewels
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.sub && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-5 px-6 py-2 text-sm text-[#121212] group-hover:text-[#d7b152] transition-colors, duration-300, font-bold md:text-2xl tracking-wide transition-colors duration-200 relative after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#d7b152] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.label}
                {link.sub && <ChevronDown size={20} className="group-hover:rotate-180 transition-transform duration-200" />}
              </Link>

              {/* Dropdown */}
              {link.sub && (
                <div
                  className={`absolute top-full left-0 mt-1 bg-white shadow-xl border border-gray-100 rounded-lg py-2 w-52 transition-all duration-200 ${
                    activeDropdown === link.label
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {link.sub.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#0a3428] hover:bg-[#faf8f5] transition-colors duration-150 font-medium"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="p-2 text-[#0a3428] hover:text-[#d7b152] transition-colors" aria-label="Rechercher">
            <Search size={18} />
          </button>
          <button className="p-2 text-[#0a3428] hover:text-[#d7b152] transition-colors hidden sm:block" aria-label="Favoris">
            <Heart size={18} />
          </button>
          <button className="relative p-2 text-[#0a3428] hover:text-[#d7b152] transition-colors" aria-label="Panier">
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#d7b152] text-[#0a3428] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-[#0a3428] font-semibold text-sm tracking-wide border-b border-gray-50 hover:text-[#d7b152] transition-colors"
              >
                {link.label}
              </Link>
              {link.sub && (
                <div className="pl-4 space-y-1 mt-1 mb-2">
                  {link.sub.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-gray-500 text-sm hover:text-[#0a3428] transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
