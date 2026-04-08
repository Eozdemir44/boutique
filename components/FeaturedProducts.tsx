import Link from "next/link";
import { products } from "@/lib/data";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.badge === "Bestseller" || p.badge === "Nouveau").slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mb-3">
              Sélection du moment
            </p>
            <h2
              className="text-4xl md:text-5xl text-[#0a3428]"
              style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
            >
              Nos coups de cœur
            </h2>
            <div className="w-16 h-0.5 bg-[#d7b152] mt-4" />
          </div>
          <Link
            href="/nos-bijoux"
            className="group flex items-center gap-2 text-[#0a3428] font-semibold text-sm tracking-wide hover:text-[#d7b152] transition-colors duration-200"
          >
            Voir toute la collection
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 relative overflow-hidden rounded-2xl bg-[#0a3428] p-8 md:p-12 text-white text-center">
          {/* Pattern */}
          <div className="absolute inset-0 pattern-bg opacity-30" />
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#d7b152]/20 blur-3xl rounded-full" />

          <div className="relative z-10">
            <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mb-3">
              Offre exclusive
            </p>
            <h3
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
            >
              10% sur votre première commande
            </h3>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              Utilisez le code <strong className="text-[#d7b152] font-bold">BIENVENUE10</strong> lors
              de votre checkout pour profiter de cette offre spéciale.
            </p>
            <Link
              href="/nos-bijoux"
              className="inline-flex items-center gap-2 bg-[#d7b152] text-[#0a3428] px-8 py-3.5 text-sm font-bold tracking-widest uppercase hover:bg-[#e8c97a] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#d7b152]/20"
            >
              En profiter maintenant
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
