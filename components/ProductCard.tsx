"use client";
import Link from "next/link";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { Product } from "@/lib/data";
import { useState } from "react";

const badgeColor: Record<string, string> = {
  Nouveau: "bg-[#0a3428] text-white",
  Bestseller: "bg-[#d7b152] text-[#0a3428]",
  "Édition limitée": "bg-[#242833] text-white",
  Promo: "bg-red-600 text-white",
};

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      {/* Image container */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient on hover */}
        <div className="absolute inset-0 bg-[#0a3428]/0 group-hover:bg-[#0a3428]/20 transition-all duration-300" />

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${badgeColor[product.badge]}`}
          >
            {product.badge}
          </span>
        )}

        {/* Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <button
            onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
            className={`w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 ${
              liked ? "text-red-500" : "text-gray-400 hover:text-red-400"
            }`}
            aria-label="Ajouter aux favoris"
          >
            <Heart size={15} fill={liked ? "currentColor" : "none"} />
          </button>
          <Link
            href={`/nos-bijoux/${product.id}`}
            className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-[#0a3428] transition-all duration-200 hover:scale-110"
            aria-label="Voir le produit"
          >
            <Eye size={15} />
          </Link>
        </div>

        {/* Quick add button */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            className={`w-full py-3 text-xs font-bold tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2 ${
              added
                ? "bg-[#0a3428] text-[#d7b152]"
                : "bg-[#d7b152] text-[#0a3428] hover:bg-[#e8c97a]"
            }`}
          >
            <ShoppingBag size={13} />
            {added ? "Ajouté ✓" : "Ajouter au panier"}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[#d7b152] text-[10px] tracking-widest uppercase font-bold mb-1">
          {product.collection}
        </p>
        <Link href={`/nos-bijoux/${product.id}`}>
          <h3
            className="text-[#0a3428] text-lg leading-tight hover:text-[#d7b152] transition-colors duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
          >
            {product.name}
          </h3>
        </Link>

        {/* Colors */}
        {product.colors && (
          <div className="flex items-center gap-1.5 mt-2 mb-3">
            {product.colors.map((c) => (
              <span key={c} className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                {c}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[#0a3428] font-bold text-lg">
            {product.price.toFixed(2)}€
          </span>
          {product.oldPrice && (
            <span className="text-gray-400 text-sm line-through">
              {product.oldPrice.toFixed(2)}€
            </span>
          )}
          {product.oldPrice && (
            <span className="text-red-500 text-xs font-bold ml-auto">
              -{Math.round((1 - product.price / product.oldPrice) * 100)}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
