import AdminSidebar from "@/components/admin/AdminSidebar";
import ProductForm from "@/components/admin/ProductForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NouveauProduit() {
  return (
    <div className="flex min-h-screen bg-gray-50" style={{ fontFamily: "var(--font-assistant), sans-serif" }}>
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/produits"
            className="flex items-center gap-2 text-gray-400 hover:text-[#0a3428] text-sm font-medium transition-colors mb-4"
          >
            <ArrowLeft size={15} />
            Retour aux produits
          </Link>
          <h1 className="text-2xl font-bold text-[#0a3428]" style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}>
            Ajouter un bijou ✨
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Remplissez le formulaire pour ajouter un nouveau bijou à votre boutique.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <ProductForm mode="create" />
        </div>
      </main>
    </div>
  );
}
