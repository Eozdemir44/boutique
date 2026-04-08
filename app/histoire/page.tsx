import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Heart, Star, Gem } from "lucide-react";

export default function Histoire() {
  return (
    <>
      <PromoBar />
      <Navbar />
      <main className="bg-white">
        {/* Hero */}
        <div className="relative h-80 md:h-[28rem] bg-[#0a3428] flex items-center justify-center overflow-hidden mt-16">
          <div className="absolute inset-0 pattern-bg opacity-25" />
          <img
            src="https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=1400&q=80"
            alt="Notre histoire"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a3428]/60 to-[#0a3428]/90" />
          <div className="relative z-10 text-center text-white px-4 max-w-3xl">
            <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mb-3">Notre Histoire</p>
            <h1
              className="text-4xl md:text-6xl mb-4"
              style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
            >
              Une passion devenue réalité
            </h1>
            <div className="w-12 h-0.5 bg-[#d7b152] mx-auto mt-4" />
          </div>
        </div>

        {/* Intro */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mb-4">
            Bienvenue
          </p>
          <h2
            className="text-3xl md:text-4xl text-[#0a3428] mb-6"
            style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
          >
            Bienvenue dans l&apos;univers d&apos;Alis Shine Jewels ✨
          </h2>
          <div className="w-16 h-0.5 bg-[#d7b152] mx-auto mb-8" />
          <p className="text-gray-600 leading-relaxed text-lg">
            Alis Shine Jewels est née d&apos;une passion profonde pour la beauté, l&apos;élégance
            et l&apos;envie de rendre accessible ce qui brille. Cette marque est l&apos;histoire
            d&apos;une étudiante-entrepreneuse qui a osé transformer ses rêves en réalité, après
            des mois de recherche, de création et d&apos;amour.
          </p>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-[#faf8f5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2
                className="text-3xl md:text-4xl text-[#0a3428]"
                style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
              >
                Notre parcours
              </h2>
              <div className="w-16 h-0.5 bg-[#d7b152] mx-auto mt-4" />
            </div>

            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "La naissance d'une passion",
                  desc: "Tout a commencé avec une fascination pour les bijoux — leur capacité à transformer une tenue, à capturer une lumière, à raconter une histoire. Cette passion a planté la graine de ce qui allait devenir Alis Shine Jewels.",
                  icon: Heart,
                  side: "left",
                },
                {
                  step: "02",
                  title: "Des mois de recherche",
                  desc: "Pendant des mois, nous avons étudié les matériaux, les techniques, les tendances. Nous avons cherché des fournisseurs de qualité, testé des dizaines de pièces, jusqu'à trouver celles qui nous émerveilleraient vraiment.",
                  icon: Star,
                  side: "right",
                },
                {
                  step: "03",
                  title: "La première collection",
                  desc: "Avec la collection Noctura, tout a pris vie. Des bijoux inspirés des nuits étoilées, porteurs de mystère et d'élégance. La réception de la communauté a été un encouragement immense.",
                  icon: Gem,
                  side: "left",
                },
                {
                  step: "04",
                  title: "Ensemble, nous brillons",
                  desc: "Aujourd'hui, Alis Shine Jewels grandit grâce à vous. Chaque commande, chaque avis, chaque photo partagée nous pousse à aller plus loin, à créer encore plus beau. Merci de faire partie de cette aventure.",
                  icon: Heart,
                  side: "right",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      item.side === "right" ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div className="flex-1">
                      <div
                        className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow ${
                          item.side === "right" ? "md:text-right" : ""
                        }`}
                      >
                        <span className="text-[#d7b152]/40 text-5xl font-bold block mb-2" style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}>
                          {item.step}
                        </span>
                        <h3
                          className="text-[#0a3428] text-xl mb-3"
                          style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {/* Center icon */}
                    <div className="w-14 h-14 rounded-full bg-[#0a3428] flex items-center justify-center shadow-lg shrink-0">
                      <Icon size={20} className="text-[#d7b152]" />
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mb-3">Nos Valeurs</p>
            <h2
              className="text-3xl md:text-4xl text-[#0a3428] mb-4"
              style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
            >
              Ce qui nous guide
            </h2>
            <div className="w-16 h-0.5 bg-[#d7b152] mx-auto mb-14" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "L'Authenticité",
                  desc: "Nous ne promettons que ce que nous tenons. Chaque bijou est exactement comme décrit — en qualité, en taille, en beauté.",
                  emoji: "💎",
                },
                {
                  title: "L'Excellence",
                  desc: "Chaque pièce est contrôlée avec soin avant d'être expédiée. Parce que vous méritez ce qu'il y a de mieux.",
                  emoji: "✨",
                },
                {
                  title: "La Connexion",
                  desc: "Au-delà des bijoux, nous construisons une communauté de femmes qui s'épanouissent et se soutiennent mutuellement.",
                  emoji: "🤝",
                },
              ].map((v) => (
                <div key={v.title} className="p-8 rounded-2xl bg-[#faf8f5] hover:bg-[#0a3428] group transition-all duration-500">
                  <span className="text-4xl block mb-4">{v.emoji}</span>
                  <h3
                    className="text-[#0a3428] group-hover:text-[#d7b152] text-xl mb-3 transition-colors"
                    style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0a3428] text-center px-4">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2
              className="text-3xl md:text-4xl text-white mb-4"
              style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
            >
              Prête à rejoindre l&apos;aventure ?
            </h2>
            <p className="text-white/70 mb-8">
              Découvrez nos collections et trouvez le bijou qui vous ressemble.
            </p>
            <Link
              href="/nos-bijoux"
              className="inline-flex items-center gap-2 bg-[#d7b152] text-[#0a3428] px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#e8c97a] transition-all duration-300 hover:scale-105"
            >
              Découvrir nos bijoux <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
