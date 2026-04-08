import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — Alis Shine Jewels",
  description: "Panneau d'administration",
  robots: "noindex, nofollow",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
