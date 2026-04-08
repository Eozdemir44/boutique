"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Gem,
  PlusCircle,
  LogOut,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const navItems = [
  { href: "/admin", label: "Tableau de bord", icon: LayoutDashboard, exact: true },
  { href: "/admin/produits", label: "Mes produits", icon: Gem },
  { href: "/admin/produits/nouveau", label: "Ajouter un bijou", icon: PlusCircle },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <aside className="w-64 min-h-screen bg-[#0a3428] flex flex-col shrink-0" style={{ fontFamily: "var(--font-assistant), sans-serif" }}>
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#d7b152]/20 flex items-center justify-center">
            <Sparkles size={16} className="text-[#d7b152]" />
          </div>
          <div>
            <p className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}>
              Alis Shine
            </p>
            <p className="text-[#d7b152] text-[9px] tracking-[3px] uppercase font-bold">
              Admin
            </p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = item.exact ? pathname === item.href : pathname.startsWith(item.href) && !(item.exact && pathname !== item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                active
                  ? "bg-[#d7b152] text-[#0a3428]"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon size={17} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-4 border-t border-white/10 space-y-1">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
        >
          <ExternalLink size={17} />
          Voir le site
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-white/60 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200"
        >
          <LogOut size={17} />
          Se déconnecter
        </button>
      </div>
    </aside>
  );
}
