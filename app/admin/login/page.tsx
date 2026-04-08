"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Eye, EyeOff, Sparkles } from "lucide-react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Mot de passe incorrect. Réessayez.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0a3428] flex items-center justify-center px-4" style={{ fontFamily: "var(--font-assistant), sans-serif" }}>
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-bg opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#d7b152]/5 blur-3xl" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-full bg-[#d7b152]/20 border border-[#d7b152]/40 flex items-center justify-center mx-auto mb-5">
            <Sparkles size={28} className="text-[#d7b152]" />
          </div>
          <h1 className="text-white text-3xl" style={{ fontFamily: "var(--font-arapey), Georgia, serif" }}>
            Alis Shine Jewels
          </h1>
          <p className="text-[#d7b152] text-xs tracking-[4px] uppercase font-bold mt-1">
            Administration
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#0a3428] flex items-center justify-center">
              <Lock size={16} className="text-[#d7b152]" />
            </div>
            <div>
              <h2 className="text-[#0a3428] font-bold text-lg">Connexion</h2>
              <p className="text-gray-400 text-xs">Accès réservé à l&apos;administrateur</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••••"
                  className="w-full border-2 border-gray-200 focus:border-[#0a3428] px-4 py-3 pr-12 text-sm outline-none transition-colors rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0a3428] transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg flex items-center gap-2">
                <span>⚠️</span> {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0a3428] text-white py-3.5 text-sm font-bold tracking-widest uppercase rounded-lg hover:bg-[#0f5440] transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Lock size={14} />
              )}
              {loading ? "Connexion..." : "Se connecter"}
            </button>
          </form>

          <p className="text-center text-gray-400 text-xs mt-6">
            Mot de passe défini dans le fichier <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">.env.local</code>
          </p>
        </div>

        <p className="text-center text-white/30 text-xs mt-6">
          © {new Date().getFullYear()} Alis Shine Jewels — Administration
        </p>
      </div>
    </div>
  );
}
