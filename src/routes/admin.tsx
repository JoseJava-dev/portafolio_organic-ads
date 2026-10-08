import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Pencil, Trash2, Plus, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import {
  fetchCases,
  uploadCaseMedia,
  getYouTubeThumbnail,
  parseMediaString,
  type ResolvedCase,
  type MediaItem,
} from "@/lib/cases";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Panel de casos de éxito | OrganicAds Studio" },
      { name: "description", content: "Administra los casos de éxito de OrganicAds Studio." },
      { property: "og:title", content: "Panel de casos de éxito | OrganicAds Studio" },
      { property: "og:description", content: "Panel privado de OrganicAds Studio." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

type FormState = {
  id?: string;
  title: string;
  client: string;
  description: string;
  media_type: string;
  media_url: string;
  mediaList: MediaItem[];
  tags: string;
  sort_order: number;
  published: boolean;
};

const empty: FormState = {
  title: "",
  client: "",
  description: "",
  media_type: "image",
  media_url: "",
  mediaList: [],
  tags: "",
  sort_order: 0,
  published: true,
};

function AdminPage() {
  const navigate = useNavigate();
  const { user, isAdmin, loading } = useAuth();
  const qc = useQueryClient();
  const [form, setForm] = useState<FormState>(empty);
  const [uploading, setUploading] = useState(false);
  const [newUrl, setNewUrl] = useState("");

  useEffect(() => {
    if (!loading && !user) void navigate({ to: "/auth" });
  }, [loading, user, navigate]);

  const { data: cases } = useQuery({
    queryKey: ["cases", "admin"],
    queryFn: () => fetchCases(true),
    enabled: isAdmin,
  });

  const save = useMutation({
    mutationFn: async (state: FormState) => {
      let finalMediaUrl = "";
      if (state.mediaList.length > 0) {
        finalMediaUrl = JSON.stringify(state.mediaList);
      } else {
        finalMediaUrl = state.media_url.trim();
      }

      const hasVideo = state.mediaList.some((m) => m.type === "video");
      const primaryType = hasVideo ? "video" : state.media_type;

      const payload = {
        title: state.title.trim(),
        client: state.client.trim() || null,
        description: state.description.trim() || null,
        media_type: primaryType,
        media_url: finalMediaUrl || null,
        tags: state.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        sort_order: Number(state.sort_order) || 0,
        published: state.published,
      };
      if (state.id) {
        const { error } = await supabase.from("case_studies").update(payload).eq("id", state.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("case_studies").insert(payload);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      toast.success("Caso guardado");
      setForm(empty);
      setNewUrl("");
      void qc.invalidateQueries({ queryKey: ["cases"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("case_studies").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Caso eliminado");
      void qc.invalidateQueries({ queryKey: ["cases"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  async function onFiles(fileList: FileList) {
    setUploading(true);
    try {
      const newItems: MediaItem[] = [];
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const path = await uploadCaseMedia(file);
        newItems.push({
          url: path,
          type: file.type.startsWith("video") ? "video" : "image",
        });
      }
      setForm((f) => ({
        ...f,
        mediaList: [...f.mediaList, ...newItems],
        media_url: newItems[0]?.url ?? f.media_url,
      }));
      toast.success(`${newItems.length} archivo(s) subido(s)`);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Error al subir");
    } finally {
      setUploading(false);
    }
  }

  function addUrlItem() {
    const trimmed = newUrl.trim();
    if (!trimmed) return;
    const isVideo =
      trimmed.includes("youtube.com") ||
      trimmed.includes("youtu.be") ||
      /\.(mp4|webm|ogg)$/i.test(trimmed);
    const item: MediaItem = {
      url: trimmed,
      type: isVideo ? "video" : "image",
    };
    setForm((f) => ({
      ...f,
      mediaList: [...f.mediaList, item],
      media_url: f.media_url || trimmed,
    }));
    setNewUrl("");
  }

  function removeMediaItem(index: number) {
    setForm((f) => {
      const updated = f.mediaList.filter((_, i) => i !== index);
      return {
        ...f,
        mediaList: updated,
        media_url: updated[0]?.url ?? "",
      };
    });
  }

  function edit(c: ResolvedCase) {
    const list = parseMediaString(c.media_url, c.media_type);
    setForm({
      id: c.id,
      title: c.title,
      client: c.client ?? "",
      description: c.description ?? "",
      media_type: c.media_type,
      media_url: c.media_url ?? "",
      mediaList: list,
      tags: c.tags.join(", "),
      sort_order: c.sort_order,
      published: c.published,
    });
    setNewUrl("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (loading) return <p className="p-10 text-sm text-muted-foreground">Cargando…</p>;

  if (user && !isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <h1 className="font-display text-2xl font-bold text-primary">Sin permisos</h1>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Tu cuenta ({user.email}) no tiene rol de administrador.
          </p>
          <button
            onClick={() => supabase.auth.signOut()}
            className="mt-6 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent";

  return (
    <div className="min-h-screen bg-secondary/30 pb-20">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-sm font-extrabold uppercase text-primary">
            Organic<span className="text-accent">Ads</span> · Panel
          </Link>
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              void navigate({ to: "/" });
            }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent"
          >
            <LogOut className="h-4 w-4" /> Salir
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-10 px-6 py-10">
        <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h1 className="font-display text-xl font-bold text-primary">
            {form.id ? "Editar caso" : "Nuevo caso de éxito"}
          </h1>
          <form
            className="mt-6 grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (!form.title.trim()) {
                toast.error("El título es obligatorio");
                return;
              }
              save.mutate(form);
            }}
          >
            <input
              className={inputCls}
              placeholder="Título"
              maxLength={120}
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <input
              className={inputCls}
              placeholder="Cliente"
              maxLength={120}
              value={form.client}
              onChange={(e) => setForm({ ...form, client: e.target.value })}
            />
            <textarea
              className={`${inputCls} sm:col-span-2`}
              rows={3}
              maxLength={600}
              placeholder="Descripción del caso"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
            <select
              className={inputCls}
              value={form.media_type}
              onChange={(e) => setForm({ ...form, media_type: e.target.value })}
            >
              <option value="image">Imagen</option>
              <option value="video">Video</option>
            </select>
            <input
              className={inputCls}
              placeholder="Etiquetas separadas por coma"
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
            />
            <div className="sm:col-span-2 space-y-3">
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Archivos Multimedia (Puedes subir múltiples imágenes y videos, o agregar enlaces de YouTube)
              </label>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-xl border border-dashed border-border bg-secondary/30 p-4">
                <label className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-accent transition-colors shadow-sm">
                  <span>{uploading ? "Subiendo archivo(s)..." : "📁 Subir archivos (imágenes/videos)"}</span>
                  <input
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    disabled={uploading}
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        void onFiles(e.target.files);
                      }
                    }}
                    className="hidden"
                  />
                </label>
                <div className="text-xs text-muted-foreground flex-1">
                  {uploading ? (
                    <span className="text-accent animate-pulse font-medium">Subiendo archivos a tu servidor...</span>
                  ) : (
                    "Puedes seleccionar varios archivos a la vez desde tu equipo. Se admiten fotos (.jpg, .png) y videos (.mp4)."
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <input
                  className={`${inputCls} flex-1`}
                  placeholder="O agrega una URL / enlace de YouTube (Shorts o Video)"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addUrlItem();
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={addUrlItem}
                  className="rounded-xl bg-secondary px-5 py-3 text-xs font-bold uppercase text-primary hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Agregar enlace
                </button>
              </div>

              {form.mediaList.length > 0 && (
                <div className="mt-3 space-y-2">
                  <p className="text-xs font-semibold text-primary">Elementos agregados a este proyecto ({form.mediaList.length}):</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {form.mediaList.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between gap-2 rounded-lg border border-border bg-card p-2 text-xs"
                      >
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            item.type === "video" ? "bg-accent/20 text-accent" : "bg-primary/10 text-primary"
                          }`}>
                            {item.type === "video" ? "Video" : "Imagen"}
                          </span>
                          <span className="truncate text-muted-foreground">{item.url}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeMediaItem(idx)}
                          className="text-destructive hover:opacity-80 p-1 font-bold"
                          title="Eliminar este elemento"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                Orden
                <input
                  type="number"
                  className="w-20 rounded-lg border border-input bg-background px-2 py-1 text-sm"
                  value={form.sort_order}
                  onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })}
                />
              </label>
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  checked={form.published}
                  onChange={(e) => setForm({ ...form, published: e.target.checked })}
                />
                Publicado
              </label>
            </div>
            <div className="flex gap-3 sm:col-span-2">
              <button
                type="submit"
                disabled={save.isPending || uploading}
                className="flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-display text-sm font-bold uppercase text-accent-foreground disabled:opacity-60"
              >
                <Plus className="h-4 w-4" />
                {uploading ? "Subiendo…" : form.id ? "Guardar cambios" : "Agregar caso"}
              </button>
              {form.id && (
                <button
                  type="button"
                  onClick={() => setForm(empty)}
                  className="rounded-xl border border-border px-6 py-3 text-sm font-semibold text-muted-foreground"
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-lg font-bold text-primary">Casos existentes</h2>
          {cases?.length === 0 && (
            <p className="text-sm text-muted-foreground">Todavía no hay casos.</p>
          )}
          {cases?.map((c) => (
            <article
              key={c.id}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4"
            >
              <div className="h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-secondary relative">
                {c.displayUrl && c.media_type === "image" && (
                  <img
                    src={c.displayUrl}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                )}
                {c.displayUrl && c.media_type === "video" && (
                  c.displayUrl.includes("youtube.com") || c.displayUrl.includes("youtu.be") ? (
                    <img
                      src={getYouTubeThumbnail(c.displayUrl) ?? ""}
                      alt={c.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <video src={c.displayUrl} className="h-full w-full object-cover" />
                  )
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-primary">{c.title}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {c.client ?? "Sin cliente"} · {c.published ? "Publicado" : "Borrador"}
                </p>
              </div>
              <button
                onClick={() => edit(c)}
                className="rounded-lg border border-border p-2 text-primary hover:border-accent hover:text-accent"
                aria-label="Editar"
              >
                <Pencil className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  if (confirm(`¿Eliminar "${c.title}"?`)) remove.mutate(c.id);
                }}
                className="rounded-lg border border-border p-2 text-destructive hover:border-destructive"
                aria-label="Eliminar"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
