import fs from "fs";
import path from "path";
import { Product } from "./data";

const DATA_FILE = path.join(process.cwd(), "data", "products.json");

export function getProducts(): Product[] {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw) as Product[];
  } catch {
    return [];
  }
}

export function saveProducts(products: Product[]): void {
  fs.writeFileSync(DATA_FILE, JSON.stringify(products, null, 2), "utf-8");
}

export function getProductById(id: string): Product | undefined {
  return getProducts().find((p) => p.id === id);
}

export function createProduct(product: Product): Product {
  const list = getProducts();
  // Générer un id unique si non fourni
  if (!product.id) {
    product.id = product.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    // Éviter les doublons d'id
    let base = product.id;
    let count = 1;
    while (list.some((p) => p.id === product.id)) {
      product.id = `${base}-${count++}`;
    }
  }
  list.push(product);
  saveProducts(list);
  return product;
}

export function updateProduct(id: string, data: Partial<Product>): Product | null {
  const list = getProducts();
  const idx = list.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  list[idx] = { ...list[idx], ...data, id };
  saveProducts(list);
  return list[idx];
}

export function deleteProduct(id: string): boolean {
  const list = getProducts();
  const filtered = list.filter((p) => p.id !== id);
  if (filtered.length === list.length) return false;
  saveProducts(filtered);
  return true;
}
