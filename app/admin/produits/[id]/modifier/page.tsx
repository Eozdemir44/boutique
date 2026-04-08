import { getProductById } from "@/lib/products-server";
import AdminSidebar from "@/components/admin/AdminSidebar";
import ProductForm from "@/components/admin/ProductForm";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function ModifierProduit({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  if (!product) notFound();

  return (
    <div className="flex min-h-screen bg-gray-50" style={{ fontFamily: "var(--font-assistant), sans-serif" }}>
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-auto">
        <div className="mb-8">
          <Link
            href="/admin/produits"
            className="flex items-center gap-2 text-gray-400 hover:text-[#0a3428] text-sm font-medium transition-colors mb-4"
          >
            <ArrowLeft size={15} />
            Retour aux produits
          </Link>
          <div className="flex items-center gap-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-14 h-14 rounded-xl object-cover border border-gray-200 shadow-sm"
            />
            <div>
              <h1 className="text-2xl font-bold text-[#0a3428]" style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}>
                Modifier — {product.name}
              </h1>
              <p className="text-gray-500 text-sm">{product.collection} · {product.category}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <ProductForm mode="edit" initial={product} />
        </div>
      </main>
    </div>
  );
}
