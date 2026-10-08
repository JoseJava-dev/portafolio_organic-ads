import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre").max(100),
  email: z.string().trim().email("Correo inválido").max(255),
  phone: z.string().trim().max(30).optional(),
  message: z.string().trim().min(10, "Cuéntanos un poco más").max(1000),
});

const WHATSAPP = "+56964497519";

export function Contact() {
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone") || undefined,
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Revisa los datos");
      return;
    }
    setSending(true);
    const { error } = await supabase.from("contact_messages").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone ?? null,
      message: parsed.data.message,
    });
    setSending(false);
    if (error) {
      toast.error("No pudimos enviar tu mensaje. Intenta nuevamente.");
      return;
    }

    const text = [
      "¡Hola OrganicAds Studio! Quiero información sobre sus servicios.",
      "",
      `Nombre: ${parsed.data.name}`,
      `Correo: ${parsed.data.email}`,
      `Teléfono: ${parsed.data.phone ?? "-"}`,
      `Mensaje: ${parsed.data.message}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );

    toast.success("Abriendo WhatsApp con tu mensaje…");
    form.reset();
  }

  return (
    <section id="contacto" className="border-t border-border/60 bg-secondary/40 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            ¿Tienes una idea para tu negocio?
          </p>
          <h2 className="section-title mt-2 text-3xl text-primary sm:text-4xl">
            Conversemos <span className="text-accent"></span>
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Hablamos sobre como podemos ayudarte a mejorar tu presencia digital
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary">
                <MessageCircle className="h-5 w-5 text-primary-foreground" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <a
                  href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-primary hover:text-accent"
                >
                  +56 9 6449 7519
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent">
                <Instagram className="h-5 w-5 text-accent-foreground" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Instagram</p>
                <a
                  href="https://instagram.com/organicadsstudio"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-primary hover:text-accent"
                >
                  @organicadsstudio
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary">
                <Mail className="h-5 w-5 text-primary-foreground" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Correo</p>
                <a
                  href="mailto:organicads.studio@gmail.com"
                  className="font-semibold text-primary hover:text-accent"
                >
                  organicads.studio@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-8 shadow-soft"
        >
          <h3 className="font-display text-xl font-bold text-primary">como podemos ayudarte?</h3>
          <div className="mt-6 space-y-4">
            <input
              name="name"
              placeholder="Tu nombre"
              maxLength={100}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
            />
            <input
              name="email"
              type="email"
              placeholder="Tu correo"
              maxLength={255}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
            />
            <input
              name="phone"
              placeholder="Teléfono"
              maxLength={30}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
            />
            <textarea
              name="message"
              rows={5}
              maxLength={1000}
              placeholder="¿Qué necesitas para tu marca?"
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-xl bg-accent px-6 py-3 font-display text-sm font-bold uppercase text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {sending ? "Enviando…" : "Enviar por WhatsApp"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
