"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/data";
import { Save, X, ImageIcon, Plus } from "lucide-react";

const CATEGORIES = ["collier", "bracelet", "boucles", "bague"];
const COLLECTIONS = ["Noctura", "Time to Shine", "La Perla"];
const BADGES = ["", "Nouveau", "Bestseller", "Édition limitée", "Promo"];

interface Props {
  initial?: Partial<Product>;
  mode: "create" | "edit";
}

export default function ProductForm({ initial, mode }: Props) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState<Partial<Product>>({
    name: "",
    collection: "Noctura",
    category: "collier",
    price: 0,
    oldPrice: undefined,
    image: "",
    description: "",
    badge: undefined,
    inStock: true,
    colors: [],
    ...initial,
  });

  const [colorInput, setColorInput] = useState("");

  const set = (key: keyof Product, val: unknown) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const addColor = () => {
    if (!colorInput.trim()) return;
    set("colors", [...(form.colors || []), colorInput.trim()]);
    setColorInput("");
  };

  const removeColor = (c: string) =>
    set("colors", (form.colors || []).filter((x) => x !== c));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const body = {
      ...form,
      price: Number(form.price),
      oldPrice: form.oldPrice ? Number(form.oldPrice) : undefined,
      badge: form.badge || undefined,
    };

    const url = mode === "edit" ? `/api/admin/products/${initial?.id}` : "/api/admin/products";
    const method = mode === "edit" ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      router.push("/admin/produits");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error || "Une erreur est survenue");
    }
    setSaving(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
          ⚠️ {error}
        </div>
      )}

      {/* Nom */}
      <div>
        <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">
          Nom du bijou *
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => set("name", e.target.value)}
          required
          placeholder="Ex: Luna, Adara, Perla Stella..."
          className="w-full border-2 border-gray-200 focus:border-[#0a3428] px-4 py-3 text-sm outline-none transition-colors rounded-xl"
        />
      </div>

      {/* Collection + Catégorie */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">
            Collection *
          </label>
          <select
            value={form.collection}
            onChange={(e) => set("collection", e.target.value)}
            required
            className="w-full border-2 border-gray-200 focus:border-[#0a3428] px-4 py-3 text-sm outline-none transition-colors rounded-xl bg-white appearance-none cursor-pointer"
          >
            {COLLECTIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
            <option value="Autre">Autre / Nouvelle collection</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">
            Catégorie *
          </label>
          <select
            value={form.category}
            onChange={(e) => set("category", e.target.value as Product["category"])}
            required
            className="w-full border-2 border-gray-200 focus:border-[#0a3428] px-4 py-3 text-sm outline-none transition-colors rounded-xl bg-white appearance-none cursor-pointer"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Prix */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">
            Prix (€) *
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.01"
              min="0"
              value={form.price || ""}
              onChange={(e) => set("price", e.target.value)}
              required
              placeholder="49.90"
              className="w-full border-2 border-gray-200 focus:border-[#0a3428] pl-8 pr-4 py-3 text-sm outline-none transition-colors rounded-xl"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">€</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">
            Ancien prix (promo, optionnel)
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.01"
              min="0"
              value={form.oldPrice || ""}
              onChange={(e) => set("oldPrice", e.target.value || undefined)}
              placeholder="65.00"
              className="w-full border-2 border-gray-200 focus:border-[#0a3428] pl-8 pr-4 py-3 text-sm outline-none transition-colors rounded-xl"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">€</span>
          </div>
        </div>
      </div>

      {/* Image URL */}
      <div>
        <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">
          URL de l&apos;image *
        </label>
        <div className="flex gap-3 items-start">
          <div className="flex-1">
            <input
              type="url"
              value={form.image}
              onChange={(e) => set("image", e.target.value)}
              required
              placeholder="https://images.unsplash.com/..."
              className="w-full border-2 border-gray-200 focus:border-[#0a3428] px-4 py-3 text-sm outline-none transition-colors rounded-xl"
            />
            <p className="text-gray-400 text-xs mt-1.5">
              Collez l&apos;URL d&apos;une photo (Unsplash, Google Photos, Dropbox, etc.)
            </p>
          </div>
          {form.image ? (
            <img
              src={form.image}
              alt="Aperçu"
              className="w-16 h-16 rounded-xl object-cover border-2 border-gray-200 shrink-0"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          ) : (
            <div className="w-16 h-16 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center shrink-0">
              <ImageIcon size={20} className="text-gray-300" />
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">
          Description *
        </label>
        <textarea
          value={form.description}
          onChange={(e) => set("description", e.target.value)}
          required
          rows={3}
          placeholder="Décrivez votre bijou : matière, style, occasions..."
          className="w-full border-2 border-gray-200 focus:border-[#0a3428] px-4 py-3 text-sm outline-none transition-colors rounded-xl resize-none"
        />
      </div>

      {/* Badge + Stock */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">
            Badge (optionnel)
          </label>
          <select
            value={form.badge || ""}
            onChange={(e) => set("badge", e.target.value || undefined)}
            className="w-full border-2 border-gray-200 focus:border-[#0a3428] px-4 py-3 text-sm outline-none transition-colors rounded-xl bg-white appearance-none cursor-pointer"
          >
            {BADGES.map((b) => (
              <option key={b} value={b}>{b || "Aucun badge"}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">
            Disponibilité *
          </label>
          <div className="flex gap-3 mt-1">
            {[true, false].map((val) => (
              <button
                key={String(val)}
                type="button"
                onClick={() => set("inStock", val)}
                className={`flex-1 py-3 text-sm font-semibold rounded-xl border-2 transition-all duration-200 ${
                  form.inStock === val
                    ? val
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                      : "border-red-400 bg-red-50 text-red-600"
                    : "border-gray-200 text-gray-400 hover:border-gray-300"
                }`}
              >
                {val ? "✓ En stock" : "✗ Épuisé"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Couleurs */}
      <div>
        <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">
          Couleurs disponibles
        </label>
        <div className="flex gap-2 mb-2 flex-wrap">
          {(form.colors || []).map((c) => (
            <span
              key={c}
              className="flex items-center gap-1.5 bg-[#0a3428] text-white text-xs font-semibold px-3 py-1 rounded-full"
            >
              {c}
              <button type="button" onClick={() => removeColor(c)} className="hover:text-[#d7b152] transition-colors">
                <X size={10} />
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={colorInput}
            onChange={(e) => setColorInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addColor(); } }}
            placeholder="or, argent, rose..."
            className="flex-1 border-2 border-gray-200 focus:border-[#0a3428] px-4 py-2.5 text-sm outline-none transition-colors rounded-xl"
          />
          <button
            type="button"
            onClick={addColor}
            className="flex items-center gap-1.5 bg-gray-100 text-gray-600 px-4 py-2.5 text-sm font-semibold rounded-xl hover:bg-[#0a3428] hover:text-white transition-all duration-200"
          >
            <Plus size={14} /> Ajouter
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4 border-t border-gray-100">
        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 bg-[#0a3428] text-white px-7 py-3 text-sm font-bold tracking-wide rounded-xl hover:bg-[#0f5440] transition-all duration-200 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
        >
          {saving ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <Save size={15} />
          )}
          {saving ? "Enregistrement..." : mode === "edit" ? "Enregistrer les modifications" : "Créer le bijou"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-3 text-sm font-semibold text-gray-500 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
        >
          Annuler
        </button>
      </div>
    </form>
  );
}
