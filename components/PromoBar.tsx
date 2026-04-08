"use client";
import { useState } from "react";
import { X } from "lucide-react";

const promos = [
  "✨ 10% sur votre première commande avec le code BIENVENUE10",
  "🚚 Livraison gratuite dès 70€ d'achat",
  "↩️ Retours gratuits sous 30 jours",
  "⚡ Expédition sous 24-48h — Livraison 3-5 jours",
];

export default function PromoBar() {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);

  if (!visible) return null;

  return (
    <div className="bg-[#0a3428] text-white text-xs tracking-wider py-2.5 px-4 relative overflow-hidden">
      {/* animated shimmer line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmerSlide_3s_linear_infinite]" />

      <div className="flex items-center justify-center gap-4">
        {/* arrows */}
        <button
          onClick={() => setIndex((i) => (i - 1 + promos.length) % promos.length)}
          className="opacity-60 hover:opacity-100 transition-opacity text-[#d7b152] font-bold"
        >
          ‹
        </button>

        <span className="font-[var(--font-assistant)] text-center select-none">
          {promos[index]}
        </span>

        <button
          onClick={() => setIndex((i) => (i + 1) % promos.length)}
          className="opacity-60 hover:opacity-100 transition-opacity text-[#d7b152] font-bold"
        >
          ›
        </button>
      </div>

      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity"
        aria-label="Fermer"
      >
        <X size={14} />
      </button>
    </div>
  );
}
