import Link from "next/link";
import { ArrowRight, Gem } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="py-24 bg-[#faf8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images mosaic */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "3/4" }}>
                  <img
                    src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80"
                    alt="Bijoux artisanaux"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "1/1" }}>
                  <img
                    src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80"
                    alt="Détail bijou"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "1/1" }}>
                  <img
                    src="https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80"
                    alt="Collection bracelet"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "3/4" }}>
                  <img
                    src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80"
                    alt="Collier élégant"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#d7b152] text-[#0a3428] rounded-2xl p-5 shadow-xl shadow-[#d7b152]/30">
              <div className="text-center">
                <Gem size={20} className="mx-auto mb-1" />
                <p className="text-2xl font-bold">3+</p>
                <p className="text-[10px] font-bold tracking-widest uppercase">Collections</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mb-4">
              Notre Histoire
            </p>
            <h2
              className="text-4xl md:text-5xl text-[#0a3428] leading-tight mb-6"
              style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
            >
              Ensemble, faisons briller la beauté
            </h2>
            <div className="w-16 h-0.5 bg-[#d7b152] mb-8" />

            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Alis Shine Jewels est née d&apos;une passion profonde pour la beauté et l&apos;élégance.
                Fondée par une étudiante-entrepreneuse, cette marque est le fruit de mois de
                recherche, d&apos;essais et d&apos;une vision claire : rendre accessible le bijou raffiné.
              </p>
              <p>
                Chaque pièce est soigneusement sélectionnée pour sa qualité, son design et son
                pouvoir d&apos;émerveillement. Nous croyons que les bijoux ne sont pas de simples
                accessoires — ce sont des extensions de votre personnalité, des marqueurs de
                vos moments précieux.
              </p>
              <p className="text-[#0a3428] font-medium italic">
                &ldquo;Chaque bijou est une invitation à rayonner — parce que vous le méritez.&rdquo;
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#d7b152]/20">
              {[
                { num: "500+", label: "Clientes satisfaites" },
                { num: "30+", label: "Créations uniques" },
                { num: "4.9★", label: "Note moyenne" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-2xl text-[#0a3428] font-bold"
                    style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
                  >
                    {stat.num}
                  </p>
                  <p className="text-gray-500 text-xs mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/histoire"
              className="group inline-flex items-center gap-2 mt-10 bg-[#0a3428] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#0f5440] hover:scale-105"
            >
              Découvrir notre histoire
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
