import { useState } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo_organicads.svg";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Acceso administrador | OrganicAds Studio" },
      { name: "description", content: "Inicia sesión para administrar los casos de éxito de OrganicAds Studio." },
      { property: "og:title", content: "Acceso administrador | OrganicAds Studio" },
      { property: "og:description", content: "Panel privado de OrganicAds Studio." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      if (error) {
        toast.error(error.message);
        return;
      }
      void navigate({ to: "/admin" });
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/admin` },
      });
      setLoading(false);
      if (error) {
        toast.error(error.message);
        return;
      }
      toast.success("Cuenta creada. Solicita permisos de administrador.");
    }
  }


  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary/40 px-6">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-soft">
        <Link to="/" className="flex items-center justify-center">
          <img src={logo} alt="OrganicAds Studio" className="h-10 w-auto object-contain" />
        </Link>
        <h1 className="mt-6 font-display text-2xl font-bold text-primary">
          {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
        </h1>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo"
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
          />
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-primary px-6 py-3 font-display text-sm font-bold uppercase text-primary-foreground transition-colors hover:bg-accent disabled:opacity-60"
          >
            {loading ? "Procesando…" : mode === "login" ? "Entrar" : "Registrarme"}
          </button>
        </form>
        <button
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
          className="mt-4 w-full text-center text-xs text-muted-foreground hover:text-accent"
        >
          {mode === "login" ? "¿No tienes cuenta? Crear una" : "Ya tengo cuenta"}
        </button>
      </div>
    </div>
  );
}
