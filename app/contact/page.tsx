"use client";
import { useState } from "react";
import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MessageCircle, CheckCircle, Send, ChevronDown } from "lucide-react";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const faqs = [
  {
    q: "Comment suivre ma commande ?",
    a: "Dès l'expédition de votre commande, vous recevrez un email avec votre numéro de suivi Mondial Relay. Vous pouvez suivre votre colis en temps réel sur le site de Mondial Relay.",
  },
  {
    q: "Quels sont les délais de livraison ?",
    a: "Nous expédions sous 24-48h ouvrés. La livraison via Mondial Relay prend généralement 3 à 5 jours ouvrés en France métropolitaine.",
  },
  {
    q: "Comment faire un retour ?",
    a: "Vous disposez de 30 jours à compter de la réception pour retourner un article. Contactez-nous par email avec votre numéro de commande et nous vous guiderons dans la procédure.",
  },
  {
    q: "Les bijoux sont-ils hypoallergéniques ?",
    a: "La plupart de nos bijoux sont en acier inoxydable, ce qui les rend résistants aux allergies. Les informations détaillées sur les matériaux sont disponibles sur chaque fiche produit.",
  },
  {
    q: "Puis-je modifier ou annuler ma commande ?",
    a: "Les commandes peuvent être modifiées ou annulées dans les 2 heures suivant la confirmation. Passé ce délai, contactez-nous au plus vite — nous ferons notre possible pour vous aider.",
  },
  {
    q: "Le code promo BIENVENUE10 est-il utilisable plusieurs fois ?",
    a: "Le code BIENVENUE10 est valable une seule fois par client, pour votre première commande. Il ne peut pas être cumulé avec d'autres promotions.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[#0a3428] font-semibold text-sm pr-4 group-hover:text-[#d7b152] transition-colors">
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`text-[#d7b152] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-5" : "max-h-0"}`}
      >
        <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  };

  return (
    <>
      <PromoBar />
      <Navbar />
      <main className="bg-white">
        {/* Hero */}
        <div className="relative h-64 md:h-80 bg-[#0a3428] flex items-center justify-center overflow-hidden mt-16">
          <div className="absolute inset-0 pattern-bg opacity-25" />
          <div className="relative z-10 text-center text-white px-4">
            <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mb-3">
              Nous sommes là pour vous
            </p>
            <h1
              className="text-4xl md:text-6xl"
              style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
            >
              Contact
            </h1>
            <div className="w-12 h-0.5 bg-[#d7b152] mx-auto mt-4" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Form */}
            <div>
              <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mb-3">
                Formulaire
              </p>
              <h2
                className="text-3xl text-[#0a3428] mb-4"
                style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
              >
                Envoyez-nous un message
              </h2>
              <div className="w-12 h-0.5 bg-[#d7b152] mb-8" />

              {sent ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                  <CheckCircle size={52} className="text-[#0a3428]" />
                  <h3
                    className="text-2xl text-[#0a3428]"
                    style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
                  >
                    Message envoyé !
                  </h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Merci pour votre message. Nous vous répondrons dans les 24 heures.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 tracking-wide uppercase mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        placeholder="Votre nom"
                        className="w-full border-2 border-gray-200 focus:border-[#0a3428] px-4 py-3 text-sm outline-none transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 tracking-wide uppercase mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        placeholder="votre@email.com"
                        className="w-full border-2 border-gray-200 focus:border-[#0a3428] px-4 py-3 text-sm outline-none transition-colors duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 tracking-wide uppercase mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Sujet de votre message"
                      className="w-full border-2 border-gray-200 focus:border-[#0a3428] px-4 py-3 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 tracking-wide uppercase mb-2">
                      Message *
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      placeholder="Votre message..."
                      className="w-full border-2 border-gray-200 focus:border-[#0a3428] px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 bg-[#0a3428] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase hover:bg-[#0f5440] transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send size={14} />
                    )}
                    {loading ? "Envoi en cours..." : "Envoyer le message"}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div>
              <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mb-3">
                Coordonnées
              </p>
              <h2
                className="text-3xl text-[#0a3428] mb-4"
                style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
              >
                Restons en contact
              </h2>
              <div className="w-12 h-0.5 bg-[#d7b152] mb-8" />

              <div className="space-y-5 mb-10">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "contact@alisshinejewels.com",
                    sub: "Réponse sous 24h",
                  },
                  {
                    icon: InstagramIcon,
                    label: "Instagram",
                    value: "@alisshinejewels",
                    sub: "DM ouvert",
                  },
                  {
                    icon: MessageCircle,
                    label: "TikTok",
                    value: "@alisshinejewels",
                    sub: "Suivez nos coulisses",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4 p-5 rounded-xl bg-[#faf8f5] hover:bg-[#0a3428] group transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-white group-hover:bg-[#d7b152]/20 flex items-center justify-center shrink-0 transition-colors">
                        <Icon size={18} className="text-[#0a3428] group-hover:text-[#d7b152] transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 group-hover:text-[#d7b152]/70 tracking-wide uppercase transition-colors">
                          {item.label}
                        </p>
                        <p className="text-[#0a3428] group-hover:text-white font-semibold text-sm transition-colors">
                          {item.value}
                        </p>
                        <p className="text-gray-400 group-hover:text-white/50 text-xs transition-colors">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Horaires */}
              <div className="bg-[#0a3428] rounded-2xl p-6 text-white">
                <h4
                  className="text-[#d7b152] text-sm mb-4"
                  style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
                >
                  Disponibilité du service client
                </h4>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex justify-between">
                    <span>Lundi — Vendredi</span>
                    <span className="text-white">9h — 19h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="text-white">10h — 16h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-white/40">Fermé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" className="mt-20">
            <div className="text-center mb-12">
              <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mb-3">FAQ</p>
              <h2
                className="text-3xl md:text-4xl text-[#0a3428]"
                style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}
              >
                Questions fréquentes
              </h2>
              <div className="w-16 h-0.5 bg-[#d7b152] mx-auto mt-4" />
            </div>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
