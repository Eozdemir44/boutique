"use client";
import { useState } from "react";
import { Send, CheckCircle, Sparkles } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSent(true);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-[#faf8f5] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#d7b152]/8 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#0a3428]/5 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-[#0a3428] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#0a3428]/20">
          <Sparkles size={24} className="text-[#d7b152]" />
        </div>

        <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mb-3">
          Newsletter
        </p>
        <h2
          className="text-4xl md:text-5xl text-[#0a3428] mb-4"
          style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
        >
          Restez dans la lumière
        </h2>
        <div className="w-16 h-0.5 bg-[#d7b152] mx-auto mb-6" />
        <p className="text-gray-500 mb-10 leading-relaxed">
          Inscrivez-vous pour recevoir nos nouveautés en avant-première, des offres exclusives
          et des conseils pour sublimer votre style. Promis, que du beau contenu.
        </p>

        {sent ? (
          <div className="flex flex-col items-center gap-3 text-[#0a3428]">
            <CheckCircle size={48} className="text-[#0a3428]" />
            <p className="text-xl font-semibold" style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}>
              Merci de nous rejoindre !
            </p>
            <p className="text-gray-500 text-sm">
              Vous recevrez très bientôt nos prochaines nouveautés ✨
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              required
              className="flex-1 px-5 py-3.5 border-2 border-gray-200 focus:border-[#0a3428] outline-none text-sm rounded-none transition-colors duration-200 bg-white"
            />
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 bg-[#0a3428] text-white px-7 py-3.5 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[#0f5440] hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Send size={14} />
              )}
              {loading ? "Envoi..." : "S'inscrire"}
            </button>
          </form>
        )}

        <p className="text-gray-400 text-xs mt-4">
          Pas de spam. Désabonnement en 1 clic. Vos données sont protégées.
        </p>
      </div>
    </section>
  );
}
