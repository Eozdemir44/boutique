"use client";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Product, collections } from "@/lib/data";
import { ChevronDown, X } from "lucide-react";
import { Suspense } from "react";

const categories = [
  { value: "", label: "Toutes" },
  { value: "collier", label: "Colliers" },
  { value: "bracelet", label: "Bracelets" },
  { value: "boucles", label: "Boucles d'oreilles" },
  { value: "bague", label: "Bagues" },
];

const sorts = [
  { value: "default", label: "Par défaut" },
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" },
  { value: "promo", label: "Promotions" },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("cat") || "";
  const initialCol = searchParams.get("collection") || "";

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [activeCollection, setActiveCollection] = useState(initialCol);
  const [sort, setSort] = useState("default");

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => { setAllProducts(data); setLoadingProducts(false); });
  }, []);

  const filtered = useMemo(() => {
    let list = [...allProducts];
    if (activeCategory) list = list.filter((p) => p.category === activeCategory);
    if (activeCollection)
      list = list.filter((p) =>
        p.collection.toLowerCase().replace(/ /g, "-") === activeCollection
      );
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "promo") list = list.filter((p) => p.badge === "Promo");
    return list;
  }, [allProducts, activeCategory, activeCollection, sort]);

  const clearFilters = () => {
    setActiveCategory("");
    setActiveCollection("");
    setSort("default");
  };

  const hasFilters = activeCategory || activeCollection || sort !== "default";

  return (
    <>
      <PromoBar />
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero banner */}
        <div className="relative h-64 md:h-80 bg-[#0a3428] flex items-center justify-center overflow-hidden mt-16">
          <div className="absolute inset-0 pattern-bg opacity-30" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1200&q=80)" }}
          />
          <div className="relative z-10 text-center text-white px-4">
            <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mb-3">
              Notre boutique
            </p>
            <h1
              className="text-4xl md:text-6xl"
              style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
            >
              Nos Bijoux
            </h1>
            <div className="w-12 h-0.5 bg-[#d7b152] mx-auto mt-4" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          {/* Filter bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded-full transition-all duration-200 ${
                    activeCategory === cat.value
                      ? "bg-[#0a3428] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-[#0a3428]/10 hover:text-[#0a3428]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-xs text-red-400 hover:text-red-600 font-medium"
                >
                  <X size={12} /> Effacer
                </button>
              )}
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 text-[#0a3428] text-xs font-semibold pl-4 pr-8 py-2 rounded-full focus:outline-none focus:border-[#0a3428] cursor-pointer"
                >
                  {sorts.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Collection filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-wide self-center">Collections :</span>
            {[{ id: "", name: "Toutes" }, ...collections].map((col) => (
              <button
                key={col.id}
                onClick={() => setActiveCollection(col.id)}
                className={`px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full border transition-all duration-200 ${
                  activeCollection === col.id
                    ? "border-[#d7b152] bg-[#d7b152]/10 text-[#0a3428]"
                    : "border-gray-200 text-gray-500 hover:border-[#d7b152]/50"
                }`}
              >
                {col.name}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-400 mb-8">
            <span className="text-[#0a3428] font-semibold">{filtered.length}</span> bijou{filtered.length > 1 ? "x" : ""} trouvé{filtered.length > 1 ? "s" : ""}
          </p>

          {/* Products grid */}
          {loadingProducts ? (
            <div className="flex items-center justify-center py-24">
              <div className="w-8 h-8 border-2 border-[#d7b152] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-6xl mb-4">💎</p>
              <h3
                className="text-2xl text-[#0a3428] mb-2"
                style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
              >
                Aucun bijou trouvé
              </h3>
              <p className="text-gray-500 text-sm mb-6">Essayez d&apos;autres filtres</p>
              <button
                onClick={clearFilters}
                className="bg-[#0a3428] text-white px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-[#0f5440] transition-colors"
              >
                Voir tout
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function NosBijoux() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#d7b152] border-t-transparent rounded-full animate-spin" /></div>}>
      <ProductsContent />
    </Suspense>
  );
}
