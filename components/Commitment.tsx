import { Truck, RotateCcw, Shield, CreditCard, HeartHandshake, Leaf } from "lucide-react";

const commitments = [
  {
    icon: Truck,
    title: "Livraison rapide",
    desc: "Expédition sous 24-48h. Livraison en 3-5 jours via Mondial Relay. Gratuite dès 70€.",
  },
  {
    icon: RotateCcw,
    title: "Retours gratuits",
    desc: "Vous avez 30 jours pour changer d'avis. Retours simples et remboursement garanti.",
  },
  {
    icon: Shield,
    title: "Qualité garantie",
    desc: "Chaque bijou est contrôlé avant expédition. Matériaux durables, plaqué or soigné.",
  },
  {
    icon: CreditCard,
    title: "Paiement sécurisé",
    desc: "Visa, Mastercard, PayPal, Klarna, Apple Pay. Transactions 100% sécurisées.",
  },
  {
    icon: HeartHandshake,
    title: "Service client dédié",
    desc: "Une équipe à votre écoute pour toutes vos questions. Réponse sous 24h.",
  },
  {
    icon: Leaf,
    title: "Engagement éco",
    desc: "Emballages recyclables et éco-responsables. Nous nous engageons pour la planète.",
  },
];

export default function Commitment() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mb-3">
            Nos Engagements
          </p>
          <h2
            className="text-4xl md:text-5xl text-[#0a3428] mb-4"
            style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
          >
            La beauté mérite le meilleur
          </h2>
          <div className="w-16 h-0.5 bg-[#d7b152] mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {commitments.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative p-8 rounded-2xl border border-gray-100 hover:border-[#d7b152]/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#faf8f5] group-hover:bg-[#0a3428] flex items-center justify-center mb-5 transition-all duration-300 shadow-sm">
                  <Icon
                    size={24}
                    className="text-[#0a3428] group-hover:text-[#d7b152] transition-colors duration-300"
                  />
                </div>

                {/* Content */}
                <h3
                  className="text-[#0a3428] text-xl mb-3 group-hover:text-[#d7b152] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#d7b152]/0 group-hover:border-[#d7b152]/60 transition-all duration-300 rounded-tr-sm" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
