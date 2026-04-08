"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { Product } from "@/lib/data";
import {
  PlusCircle,
  Pencil,
  Trash2,
  Search,
  Package,
  AlertTriangle,
} from "lucide-react";

const badgeColor: Record<string, string> = {
  Nouveau: "bg-emerald-100 text-emerald-700",
  Bestseller: "bg-[#d7b152]/20 text-[#0a3428]",
  "Édition limitée": "bg-gray-100 text-gray-700",
  Promo: "bg-red-100 text-red-600",
};

export default function AdminProduits() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    fetch("/api/admin/products")
      .then((r) => r.json())
      .then((data) => { setProducts(data); setLoading(false); });
  }, []);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.collection.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id: string) => {
    setDeleteLoading(true);
    await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
    setProducts((prev) => prev.filter((p) => p.id !== id));
    setDeleteId(null);
    setDeleteLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50" style={{ fontFamily: "var(--font-assistant), sans-serif" }}>
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#0a3428]" style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}>
              Mes bijoux
            </h1>
            <p className="text-gray-500 text-sm">{products.length} bijou{products.length > 1 ? "x" : ""} au total</p>
          </div>
          <Link
            href="/admin/produits/nouveau"
            className="flex items-center gap-2 bg-[#0a3428] text-white px-5 py-2.5 text-sm font-bold tracking-wide rounded-xl hover:bg-[#0f5440] transition-all duration-200 hover:scale-105 shadow-md"
          >
            <PlusCircle size={16} />
            Ajouter un bijou
          </Link>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher par nom, collection, catégorie..."
            className="w-full max-w-md pl-10 pr-4 py-2.5 border-2 border-gray-200 focus:border-[#0a3428] rounded-xl text-sm outline-none transition-colors"
          />
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-[#d7b152] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-200">
            <Package size={36} className="mx-auto text-gray-300 mb-3" />
            <p className="text-gray-400 font-medium">Aucun bijou trouvé</p>
            <Link href="/admin/produits/nouveau" className="text-[#d7b152] text-sm font-semibold mt-2 inline-block hover:underline">
              Ajouter votre premier bijou →
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-widest">Bijou</th>
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-widest hidden md:table-cell">Collection</th>
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-widest hidden sm:table-cell">Catégorie</th>
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-widest">Prix</th>
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-widest hidden lg:table-cell">Badge</th>
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-widest">Stock</th>
                    <th className="px-5 py-3.5" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50/80 transition-colors group">
                      {/* Bijou */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-10 h-10 rounded-xl object-cover shrink-0"
                          />
                          <span className="font-semibold text-[#0a3428] text-sm">{p.name}</span>
                        </div>
                      </td>
                      {/* Collection */}
                      <td className="px-5 py-4 hidden md:table-cell">
                        <span className="text-sm text-gray-500">{p.collection}</span>
                      </td>
                      {/* Catégorie */}
                      <td className="px-5 py-4 hidden sm:table-cell">
                        <span className="bg-gray-100 text-gray-600 text-[11px] font-semibold px-2.5 py-1 rounded-full capitalize">
                          {p.category}
                        </span>
                      </td>
                      {/* Prix */}
                      <td className="px-5 py-4">
                        <div>
                          <span className="font-bold text-[#0a3428] text-sm">{p.price.toFixed(2)}€</span>
                          {p.oldPrice && (
                            <span className="text-gray-400 text-xs line-through ml-1">{p.oldPrice.toFixed(2)}€</span>
                          )}
                        </div>
                      </td>
                      {/* Badge */}
                      <td className="px-5 py-4 hidden lg:table-cell">
                        {p.badge ? (
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${badgeColor[p.badge] || "bg-gray-100 text-gray-600"}`}>
                            {p.badge}
                          </span>
                        ) : (
                          <span className="text-gray-300 text-xs">—</span>
                        )}
                      </td>
                      {/* Stock */}
                      <td className="px-5 py-4">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${p.inStock ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"}`}>
                          {p.inStock ? "En stock" : "Épuisé"}
                        </span>
                      </td>
                      {/* Actions */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Link
                            href={`/admin/produits/${p.id}/modifier`}
                            className="w-8 h-8 rounded-lg bg-[#0a3428]/10 flex items-center justify-center text-[#0a3428] hover:bg-[#0a3428] hover:text-white transition-all duration-200"
                            title="Modifier"
                          >
                            <Pencil size={13} />
                          </Link>
                          <button
                            onClick={() => setDeleteId(p.id)}
                            className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-400 hover:bg-red-500 hover:text-white transition-all duration-200"
                            title="Supprimer"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* Delete modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-5">
              <AlertTriangle size={24} className="text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-[#0a3428] text-center mb-2" style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}>
              Supprimer ce bijou ?
            </h3>
            <p className="text-gray-500 text-sm text-center mb-6">
              Cette action est irréversible. Le bijou sera définitivement supprimé.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 border-2 border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                disabled={deleteLoading}
                className="flex-1 bg-red-500 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-red-600 transition-colors disabled:opacity-60"
              >
                {deleteLoading ? "Suppression..." : "Supprimer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
