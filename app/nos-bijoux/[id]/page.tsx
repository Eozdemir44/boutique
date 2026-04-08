import { products } from "@/lib/data";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { ArrowLeft, Star, Shield, Truck, RotateCcw, ShoppingBag, Heart } from "lucide-react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

const badgeColor: Record<string, string> = {
  Nouveau: "bg-[#0a3428] text-white",
  Bestseller: "bg-[#d7b152] text-[#0a3428]",
  "Édition limitée": "bg-[#242833] text-white",
  Promo: "bg-red-600 text-white",
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) notFound();

  const related = products
    .filter((p) => p.collection === product.collection && p.id !== product.id)
    .slice(0, 4);

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null;

  return (
    <>
      <PromoBar />
      <Navbar />
      <main className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-4">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-[#0a3428] transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/nos-bijoux" className="hover:text-[#0a3428] transition-colors">Nos Bijoux</Link>
            <span>/</span>
            <span className="text-[#0a3428]">{product.name}</span>
          </div>
        </div>

        {/* Product */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <div className="relative">
              <div className="sticky top-24">
                <div
                  className="relative rounded-2xl overflow-hidden bg-[#faf8f5] shadow-lg"
                  style={{ aspectRatio: "1/1" }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.badge && (
                    <span
                      className={`absolute top-4 left-4 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full ${badgeColor[product.badge]}`}
                    >
                      {product.badge}
                    </span>
                  )}
                  {discount && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      -{discount}%
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="py-4">
              <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mb-2">
                {product.collection}
              </p>
              <h1
                className="text-4xl md:text-5xl text-[#0a3428] leading-tight mb-4"
                style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
              >
                {product.name}
              </h1>

              {/* Stars */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} size={14} className="fill-[#d7b152] text-[#d7b152]" />
                  ))}
                </div>
                <span className="text-gray-400 text-xs">(4.9) · 12 avis</span>
              </div>

              {/* Price */}
              <div className="flex items-end gap-3 mb-8 pb-8 border-b border-gray-100">
                <span
                  className="text-3xl font-bold text-[#0a3428]"
                  style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
                >
                  {product.price.toFixed(2)}€
                </span>
                {product.oldPrice && (
                  <span className="text-gray-400 text-lg line-through mb-0.5">
                    {product.oldPrice.toFixed(2)}€
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

              {/* Colors */}
              {product.colors && (
                <div className="mb-8">
                  <p className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-3">
                    Couleurs disponibles
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((c) => (
                      <span
                        key={c}
                        className="px-4 py-1.5 border-2 border-[#0a3428] text-[#0a3428] text-xs font-semibold rounded-full cursor-pointer hover:bg-[#0a3428] hover:text-white transition-all duration-200"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="flex gap-3 mb-8">
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#0a3428] text-white py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#0f5440] transition-all duration-300 hover:scale-[1.02] shadow-lg">
                  <ShoppingBag size={16} />
                  Ajouter au panier
                </button>
                <button className="w-14 h-14 border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-400 hover:border-red-400 transition-all duration-200">
                  <Heart size={18} />
                </button>
              </div>

              {/* Promo code */}
              <div className="bg-[#faf8f5] rounded-xl p-4 border border-[#d7b152]/20 mb-8">
                <p className="text-sm text-[#0a3428]">
                  🎁 Première commande ? Utilisez le code{" "}
                  <strong className="text-[#d7b152] font-bold">BIENVENUE10</strong>{" "}
                  pour -10%
                </p>
              </div>

              {/* Guarantees */}
              <div className="space-y-3">
                {[
                  { icon: Truck, text: "Livraison offerte dès 70€ · 3-5 jours" },
                  { icon: RotateCcw, text: "Retours gratuits sous 30 jours" },
                  { icon: Shield, text: "Paiement 100% sécurisé" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-gray-500">
                    <Icon size={15} className="text-[#0a3428] shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related products */}
        {related.length > 0 && (
          <section className="py-20 bg-[#faf8f5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mb-2">
                    Collection {product.collection}
                  </p>
                  <h2
                    className="text-3xl text-[#0a3428]"
                    style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
                  >
                    Vous aimerez aussi
                  </h2>
                </div>
                <Link
                  href={`/nos-bijoux?collection=${product.collection.toLowerCase().replace(/ /g, "-")}`}
                  className="flex items-center gap-1 text-sm text-[#0a3428] hover:text-[#d7b152] font-semibold transition-colors"
                >
                  <ArrowLeft size={14} className="rotate-180" />
                  Voir tout
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
