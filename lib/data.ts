export interface Product {
  id: string;
  name: string;
  collection: string;
  category: "collier" | "bracelet" | "boucles" | "bague";
  price: number;
  oldPrice?: number;
  image: string;
  images?: string[];
  description: string;
  badge?: "Nouveau" | "Bestseller" | "Édition limitée" | "Promo";
  inStock: boolean;
  colors?: string[];
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  theme: string;
}

export const collections: Collection[] = [
  {
    id: "noctura",
    name: "Noctura",
    description: "Inspirée des nuits étoilées, cette collection capture la magie de l'obscurité lumineuse.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    theme: "Mystère & Élégance",
  },
  {
    id: "time-to-shine",
    name: "Time to Shine",
    description: "Des pièces audacieuses pour celles qui osent briller au quotidien.",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
    theme: "Audace & Lumière",
  },
  {
    id: "la-perla",
    name: "La Perla",
    description: "La quintessence de la féminité — perles précieuses et or délicat s'unissent.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    theme: "Douceur & Sophistication",
  },
];

export const products: Product[] = [
  // Noctura Collection
  {
    id: "luna",
    name: "Luna",
    collection: "Noctura",
    category: "collier",
    price: 49.90,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    description: "Un collier délicat orné d'un croissant de lune en plaqué or, symbole de féminité et de mystère.",
    badge: "Bestseller",
    inStock: true,
    colors: ["or", "argent"],
  },
  {
    id: "zumrut",
    name: "Zümrüt",
    collection: "Noctura",
    category: "boucles",
    price: 39.90,
    oldPrice: 55.00,
    image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=600&q=80",
    description: "Boucles d'oreilles pendantes ornées de pierres vertes émeraude, évoquant la profondeur des forêts nocturnes.",
    badge: "Promo",
    inStock: true,
    colors: ["émeraude"],
  },
  {
    id: "luz",
    name: "Luz",
    collection: "Noctura",
    category: "bracelet",
    price: 44.90,
    image: "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80",
    description: "Bracelet fin orné de petits cristaux scintillants, comme des étoiles posées sur votre poignet.",
    badge: "Nouveau",
    inStock: true,
    colors: ["or", "rosé"],
  },
  {
    id: "cosmo",
    name: "Cosmo",
    collection: "Noctura",
    category: "collier",
    price: 59.90,
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80",
    description: "Collier ras de cou avec un motif constellation, pour porter l'univers autour de votre cou.",
    inStock: true,
    colors: ["or"],
  },
  // Time to Shine Collection
  {
    id: "adara",
    name: "Adara",
    collection: "Time to Shine",
    category: "boucles",
    price: 34.90,
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=80",
    description: "Créoles oversize dorées avec détail serti de zirconiums, pour un effet glamour irrésistible.",
    badge: "Bestseller",
    inStock: true,
    colors: ["or"],
  },
  {
    id: "alina",
    name: "Alina",
    collection: "Time to Shine",
    category: "collier",
    price: 54.90,
    oldPrice: 65.00,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80",
    description: "Collier chaîne dorée avec pendentif goutte en cristal taillé, qui capte chaque rayon de lumière.",
    badge: "Édition limitée",
    inStock: true,
    colors: ["or", "cristal"],
  },
  {
    id: "azul",
    name: "Azul",
    collection: "Time to Shine",
    category: "bracelet",
    price: 42.90,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    description: "Bracelet jonc doré avec pierre de lapis-lazuli, alliance du bleu profond et de l'or chaud.",
    inStock: true,
    colors: ["lapis", "or"],
  },
  {
    id: "azura",
    name: "Azura",
    collection: "Time to Shine",
    category: "bague",
    price: 29.90,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    description: "Bague fine en plaqué or avec un solitaire en pierre bleue, simple et sophistiquée.",
    badge: "Nouveau",
    inStock: true,
    colors: ["or", "bleu"],
  },
  // La Perla Collection
  {
    id: "perla-stella",
    name: "Perla Stella",
    collection: "La Perla",
    category: "collier",
    price: 74.90,
    image: "https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=600&q=80",
    description: "Collier de perles d'eau douce avec fermoir étoile en or 18k, d'une élégance intemporelle.",
    badge: "Édition limitée",
    inStock: true,
    colors: ["blanc nacré", "or"],
  },
  {
    id: "perla-rosa",
    name: "Perla Rosa",
    collection: "La Perla",
    category: "boucles",
    price: 64.90,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80",
    description: "Boucles d'oreilles pendantes avec perles roses et chaînettes en or délicat.",
    inStock: true,
    colors: ["rose", "or"],
  },
  {
    id: "perla-mare",
    name: "Perla Mare",
    collection: "La Perla",
    category: "bracelet",
    price: 69.90,
    oldPrice: 85.00,
    image: "https://images.unsplash.com/photo-1561828995-aa79a2db86dd?w=600&q=80",
    description: "Bracelet multi-rangs avec perles de verre soufflé et chaîne dorée, inspiration marine.",
    badge: "Promo",
    inStock: true,
    colors: ["nacre", "or"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sophie M.",
    location: "Paris",
    rating: 5,
    comment: "J'ai reçu mon collier Luna en seulement 3 jours ! Il est absolument magnifique, encore plus beau qu'en photo. Je l'ai offert à ma mère pour son anniversaire et elle a adoré.",
    product: "Luna — Noctura",
    avatar: "S",
  },
  {
    id: 2,
    name: "Léa D.",
    location: "Lyon",
    rating: 5,
    comment: "Alis Shine Jewels, c'est ma boutique coup de cœur. La qualité est au rendez-vous et les bijoux sont vraiment uniques. Je recommande les yeux fermés !",
    product: "Adara — Time to Shine",
    avatar: "L",
  },
  {
    id: 3,
    name: "Camille R.",
    location: "Bordeaux",
    rating: 5,
    comment: "Un packaging tellement soigné et élégant, on a l'impression de recevoir un cadeau de luxe. Et le bracelet Azul est juste parfait pour l'été !",
    product: "Azul — Time to Shine",
    avatar: "C",
  },
  {
    id: 4,
    name: "Inès B.",
    location: "Marseille",
    rating: 5,
    comment: "La collection La Perla est sublime ! J'ai craqué pour les boucles Perla Rosa et je les porte tous les jours. Très bonne qualité pour le prix.",
    product: "Perla Rosa — La Perla",
    avatar: "I",
  },
];
