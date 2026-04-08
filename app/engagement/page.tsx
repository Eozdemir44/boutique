import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck, RotateCcw, Shield, CreditCard, HeartHandshake, Leaf, Package, Clock } from "lucide-react";

const engagements = [
  {
    icon: Truck,
    title: "Livraison rapide et soignée",
    desc: "Votre commande est expédiée sous 24 à 48 heures. La livraison s'effectue via Mondial Relay en 3 à 5 jours ouvrés. La livraison est offerte dès 70€ d'achat.",
    detail: "Mondial Relay · 3-5 jours · Gratuit dès 70€",
  },
  {
    icon: RotateCcw,
    title: "30 jours pour changer d'avis",
    desc: "Nous voulons que vous soyez pleinement satisfaite. Si ce n'est pas le cas, vous disposez de 30 jours pour retourner votre commande, sans question posée.",
    detail: "Retours gratuits · Remboursement sous 5 jours",
  },
  {
    icon: Shield,
    title: "Qualité contrôlée",
    desc: "Chaque bijou est inspecté individuellement avant l'expédition. Nous utilisons des matériaux durables : acier inoxydable, plaqué or 18k, pierres sélectionnées.",
    detail: "Plaqué or 18k · Acier inox · Pierres naturelles",
  },
  {
    icon: CreditCard,
    title: "Paiement 100% sécurisé",
    desc: "Vos transactions sont protégées par un chiffrement SSL. Nous acceptons Visa, Mastercard, American Express, PayPal, Klarna et Apple Pay.",
    detail: "SSL · Visa · MC · PayPal · Klarna · Apple Pay",
  },
  {
    icon: HeartHandshake,
    title: "Service client humain",
    desc: "Une vraie personne vous répond — pas un robot. Contactez-nous par email ou via les réseaux sociaux. Délai de réponse : moins de 24 heures.",
    detail: "Réponse < 24h · Email & réseaux sociaux",
  },
  {
    icon: Leaf,
    title: "Emballage éco-responsable",
    desc: "Nos emballages sont fabriqués à partir de matériaux recyclés et recyclables. Nous minimisons notre impact environnemental à chaque expédition.",
    detail: "100% recyclable · Zéro plastique superflu",
  },
  {
    icon: Package,
    title: "Packaging premium",
    desc: "Chaque commande est présentée dans un écrin soigné, idéal pour les cadeaux. L'expérience d'unboxing est pensée pour vous émerveiller.",
    detail: "Écrin élégant · Prêt à offrir",
  },
  {
    icon: Clock,
    title: "Suivi en temps réel",
    desc: "Vous recevez un email de confirmation avec numéro de suivi dès l'expédition. Suivez votre colis à chaque étape de son voyage.",
    detail: "Email de suivi · Tracking en temps réel",
  },
];

export default function Engagement() {
  return (
    <>
      <PromoBar />
      <Navbar />
      <main className="bg-white">
        {/* Hero */}
        <div className="relative h-72 md:h-96 bg-[#0a3428] flex items-center justify-center overflow-hidden mt-16">
          <div className="absolute inset-0 pattern-bg opacity-25" />
          <img
            src="https://images.unsplash.com/photo-1561828995-aa79a2db86dd?w=1400&q=80"
            alt="Nos engagements"
            className="absolute inset-0 w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a3428]/40 to-[#0a3428]/90" />
          <div className="relative z-10 text-center text-white px-4">
            <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mb-3">
              Ce qui nous engage
            </p>
            <h1
              className="text-4xl md:text-6xl"
              style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
            >
              Nos Engagements
            </h1>
            <div className="w-12 h-0.5 bg-[#d7b152] mx-auto mt-4" />
            <p className="text-white/70 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Parce que vous méritez le meilleur, nous nous engageons à chaque étape de votre
              expérience Alis Shine Jewels.
            </p>
          </div>
        </div>

        {/* Engagements grid */}
        <section className="py-24 bg-[#faf8f5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engagements.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 hover:border-[#d7b152]/20 flex gap-6"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#faf8f5] group-hover:bg-[#0a3428] flex items-center justify-center transition-all duration-300 shrink-0 shadow-sm">
                      <Icon size={22} className="text-[#0a3428] group-hover:text-[#d7b152] transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-[#0a3428] text-lg mb-2 group-hover:text-[#d7b152] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.desc}</p>
                      <span className="inline-block bg-[#faf8f5] text-[#0a3428] text-[10px] font-bold tracking-wide px-3 py-1 rounded-full border border-[#d7b152]/20">
                        {item.detail}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Promise section */}
        <section className="py-20 bg-[#0a3428] text-center px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mb-4">Notre promesse</p>
            <h2
              className="text-3xl md:text-5xl text-white mb-6"
              style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
            >
              &ldquo;Ensemble, faisons briller la beauté&rdquo;
            </h2>
            <div className="w-16 h-0.5 bg-[#d7b152] mx-auto mb-8" />
            <p className="text-white/70 leading-relaxed max-w-xl mx-auto">
              Chaque engagement que nous prenons envers vous est un engagement que nous nous faisons
              à nous-mêmes. Votre satisfaction est notre plus belle récompense.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
