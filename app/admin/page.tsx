import { getProducts } from "@/lib/products-server";
import AdminSidebar from "@/components/admin/AdminSidebar";
import Link from "next/link";
import { Gem, PlusCircle, TrendingUp, Package, Tag, ArrowRight } from "lucide-react";

export default function AdminDashboard() {
  const products = getProducts();
  const total = products.length;
  const inStock = products.filter((p) => p.inStock).length;
  const promos = products.filter((p) => p.badge === "Promo" || p.oldPrice).length;
  const newItems = products.filter((p) => p.badge === "Nouveau").length;

  const recentProducts = products.slice(-4).reverse();

  const categories = {
    collier: products.filter((p) => p.category === "collier").length,
    bracelet: products.filter((p) => p.category === "bracelet").length,
    boucles: products.filter((p) => p.category === "boucles").length,
    bague: products.filter((p) => p.category === "bague").length,
  };

  return (
    <div className="flex min-h-screen bg-gray-50" style={{ fontFamily: "var(--font-assistant), sans-serif" }}>
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#0a3428]" style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}>
            Tableau de bord ✨
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Bienvenue dans votre espace d&apos;administration Alis Shine Jewels
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {[
            { label: "Total bijoux", value: total, icon: Gem, color: "bg-[#0a3428]", textColor: "text-white" },
            { label: "En stock", value: inStock, icon: Package, color: "bg-[#d7b152]", textColor: "text-[#0a3428]" },
            { label: "En promotion", value: promos, icon: Tag, color: "bg-orange-500", textColor: "text-white" },
            { label: "Nouveautés", value: newItems, icon: TrendingUp, color: "bg-emerald-600", textColor: "text-white" },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center shrink-0`}>
                  <Icon size={20} className={stat.textColor} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#0a3428]">{stat.value}</p>
                  <p className="text-gray-500 text-xs font-medium">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent products */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-[#0a3428] text-lg" style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}>
                Derniers bijoux ajoutés
              </h2>
              <Link
                href="/admin/produits"
                className="flex items-center gap-1 text-[#d7b152] text-xs font-bold hover:text-[#0a3428] transition-colors"
              >
                Voir tout <ArrowRight size={12} />
              </Link>
            </div>

            <div className="space-y-3">
              {recentProducts.map((p) => (
                <div key={p.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-12 h-12 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[#0a3428] text-sm truncate">{p.name}</p>
                    <p className="text-gray-400 text-xs">{p.collection} · {p.category}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-[#0a3428] text-sm">{p.price.toFixed(2)}€</p>
                    {p.badge && (
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                        p.badge === "Bestseller" ? "bg-[#d7b152]/20 text-[#0a3428]" :
                        p.badge === "Nouveau" ? "bg-emerald-100 text-emerald-700" :
                        p.badge === "Promo" ? "bg-red-100 text-red-600" :
                        "bg-gray-100 text-gray-600"
                      }`}>
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/admin/produits/${p.id}/modifier`}
                    className="text-gray-300 hover:text-[#0a3428] transition-colors ml-2"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>

            <Link
              href="/admin/produits/nouveau"
              className="mt-4 w-full flex items-center justify-center gap-2 border-2 border-dashed border-[#d7b152]/40 text-[#d7b152] py-3 rounded-xl text-sm font-semibold hover:border-[#d7b152] hover:bg-[#d7b152]/5 transition-all duration-200"
            >
              <PlusCircle size={16} />
              Ajouter un nouveau bijou
            </Link>
          </div>

          {/* Categories breakdown */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-bold text-[#0a3428] text-lg mb-5" style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}>
              Par catégorie
            </h2>
            <div className="space-y-4">
              {[
                { label: "Colliers", value: categories.collier, emoji: "📿" },
                { label: "Bracelets", value: categories.bracelet, emoji: "⌚" },
                { label: "Boucles d'oreilles", value: categories.boucles, emoji: "✨" },
                { label: "Bagues", value: categories.bague, emoji: "💍" },
              ].map((cat) => (
                <div key={cat.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-gray-600 flex items-center gap-2">
                      {cat.emoji} {cat.label}
                    </span>
                    <span className="text-sm font-bold text-[#0a3428]">{cat.value}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div
                      className="bg-[#d7b152] h-1.5 rounded-full transition-all duration-500"
                      style={{ width: total > 0 ? `${(cat.value / total) * 100}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-gray-100">
              <p className="text-xs text-gray-400 mb-1">Prix moyen de vente</p>
              <p className="text-2xl font-bold text-[#0a3428]">
                {total > 0
                  ? (products.reduce((sum, p) => sum + p.price, 0) / total).toFixed(2)
                  : "0.00"}€
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
