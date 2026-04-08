"use client";
import { useState } from "react";
import { testimonials } from "@/lib/data";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 bg-[#0a3428] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pattern-bg opacity-20" />
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-[#d7b152]/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#d7b152]/8 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mb-3">
            Témoignages
          </p>
          <h2
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
          >
            Elles brillent avec nous
          </h2>
          <div className="w-16 h-0.5 bg-[#d7b152] mx-auto" />
        </div>

        {/* Desktop: all cards */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 ${
                i === 1 ? "lg:mt-6" : i === 3 ? "lg:mt-4" : ""
              }`}
            >
              <Quote size={20} className="text-[#d7b152]/60 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array(t.rating).fill(0).map((_, j) => (
                  <Star key={j} size={12} className="fill-[#d7b152] text-[#d7b152]" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.comment}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-[#d7b152] flex items-center justify-center text-[#0a3428] font-bold text-sm shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-[#d7b152] text-[10px] tracking-wide">{t.location}</p>
                </div>
              </div>
              <p className="text-white/30 text-[10px] mt-2 italic">{t.product}</p>
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <Quote size={24} className="text-[#d7b152]/60 mb-4" />
            <div className="flex gap-1 mb-4">
              {Array(testimonials[current].rating).fill(0).map((_, j) => (
                <Star key={j} size={14} className="fill-[#d7b152] text-[#d7b152]" />
              ))}
            </div>
            <p className="text-white/80 text-base leading-relaxed mb-6 italic">
              &ldquo;{testimonials[current].comment}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#d7b152] flex items-center justify-center text-[#0a3428] font-bold shrink-0">
                {testimonials[current].avatar}
              </div>
              <div>
                <p className="text-white font-semibold">{testimonials[current].name}</p>
                <p className="text-[#d7b152] text-xs">{testimonials[current].location}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#d7b152] hover:text-[#d7b152] transition-colors">
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current ? "w-6 h-2 bg-[#d7b152]" : "w-2 h-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#d7b152] hover:text-[#d7b152] transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Rating summary */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <p className="text-5xl font-bold text-white" style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}>4.9</p>
            <div className="flex justify-center gap-1 my-2">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} size={14} className="fill-[#d7b152] text-[#d7b152]" />
              ))}
            </div>
            <p className="text-white/50 text-xs tracking-wide">Note moyenne</p>
          </div>
          <div className="w-px bg-white/10 hidden sm:block" />
          <div>
            <p className="text-5xl font-bold text-white" style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}>500+</p>
            <p className="text-[#d7b152] text-xs tracking-widest uppercase mt-2">Clientes</p>
            <p className="text-white/50 text-xs tracking-wide">satisfaites</p>
          </div>
          <div className="w-px bg-white/10 hidden sm:block" />
          <div>
            <p className="text-5xl font-bold text-white" style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}>100%</p>
            <p className="text-[#d7b152] text-xs tracking-widest uppercase mt-2">Avis</p>
            <p className="text-white/50 text-xs tracking-wide">vérifiés</p>
          </div>
        </div>
      </div>
    </section>
  );
}
