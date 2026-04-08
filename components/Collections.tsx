import Link from "next/link";
import { collections } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Collections() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mb-3">
            Nos Collections
          </p>
          <h2
            className="text-4xl md:text-5xl text-[#0a3428] mb-4"
            style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
          >
            Trois univers, une seule passion
          </h2>
          <div className="w-16 h-0.5 bg-[#d7b152] mx-auto mb-6" />
          <p className="text-gray-500 max-w-lg mx-auto leading-relaxed text-sm">
            Chaque collection raconte une histoire différente, mais toutes partagent
            la même obsession pour la beauté et la qualité.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((col, i) => (
            <Link
              key={col.id}
              href={`/nos-bijoux?collection=${col.id}`}
              className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                i === 1 ? "md:mt-8" : ""
              }`}
              style={{ aspectRatio: "3/4" }}
            >
              {/* Image */}
              <img
                src={col.image}
                alt={col.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a3428]/90 via-[#0a3428]/30 to-transparent" />

              {/* Theme badge */}
              <div className="absolute top-4 left-4 bg-[#d7b152]/90 text-[#0a3428] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur-sm">
                {col.theme}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3
                  className="text-3xl mb-2 group-hover:text-[#d7b152] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
                >
                  {col.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">
                  {col.description}
                </p>
                <div className="flex items-center gap-2 text-[#d7b152] text-sm font-semibold tracking-wide">
                  <span>Explorer</span>
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
