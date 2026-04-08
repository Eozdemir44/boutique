"use client";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=85"
          alt="Bijoux de luxe"
          className="w-full h-full object-cover object-center scale-105"
          style={{ filter: "brightness(0.45)" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a3428]/60 via-black/30 to-black/70" />
        {/* Pattern */}
        <div className="absolute inset-0 pattern-bg opacity-20" />
      </div>

      {/* Floating decorative circles */}
      <div className="absolute top-1/4 left-10 w-48 h-48 rounded-full bg-[#d7b152]/10 blur-3xl float-anim" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-[#d7b152]/8 blur-3xl float-anim" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 bg-[#d7b152]/20 border border-[#d7b152]/40 rounded-full px-5 py-2 text-[#d7b152] text-sm font-semibold tracking-widest mb-8 backdrop-blur-sm">
          <Sparkles size={14} />
          Nouvelle Collection Disponible
          <Sparkles size={14} />
        </div>

        {/* Main headline */}
        <h1
          className="font-[var(--font-arapey)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6 fade-up"
          style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
        >
          Bienvenue dans{" "}
          <span className="gold-shimmer">
            l&apos;univers
          </span>
          <br />
          d&apos;Alis Shine Jewels
        </h1>

        {/* Divider */}
        <div className="w-20 h-0.5 bg-[#d7b152] mx-auto mb-6 opacity-80" />

        {/* Sub */}
        <p className="text-lg sm:text-xl text-white/80 mb-10 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
          Chaque bijou est une invitation à rayonner ✨<br />
          Découvrez nos collections exclusives, créées avec passion.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/nos-bijoux"
            className="group flex items-center gap-3 bg-[#d7b152] text-[#0a3428] px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#e8c97a] hover:scale-105 active:scale-95 shadow-lg shadow-[#d7b152]/30"
          >
            Découvrir nos bijoux
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/histoire"
            className="flex items-center gap-2 border-2 border-white/60 text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:border-[#d7b152] hover:text-[#d7b152] hover:scale-105"
          >
            Notre Histoire
          </Link>
        </div>

        {/* Trust badges */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-white/60 text-xs tracking-widest uppercase">
          <span className="flex items-center gap-2">
            <span className="text-[#d7b152]">✓</span> Livraison gratuite dès 70€
          </span>
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <span className="flex items-center gap-2">
            <span className="text-[#d7b152]">✓</span> Retours 30 jours
          </span>
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <span className="flex items-center gap-2">
            <span className="text-[#d7b152]">✓</span> Paiement sécurisé
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs tracking-widest">
        <span>SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
