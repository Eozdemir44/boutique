import { NextResponse } from "next/server";
import { getProducts } from "@/lib/products-server";

export async function GET() {
  return NextResponse.json(getProducts());
}
