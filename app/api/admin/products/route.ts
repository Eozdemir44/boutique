import { NextRequest, NextResponse } from "next/server";
import { getProducts, createProduct } from "@/lib/products-server";
import { Product } from "@/lib/data";

function isAuthenticated(req: NextRequest) {
  const session = req.cookies.get("admin_session")?.value;
  return session === (process.env.SESSION_SECRET || "alis-shine-secret");
}

export async function GET(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
  return NextResponse.json(getProducts());
}

export async function POST(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
  const body = await req.json() as Product;
  const product = createProduct(body);
  return NextResponse.json(product, { status: 201 });
}
