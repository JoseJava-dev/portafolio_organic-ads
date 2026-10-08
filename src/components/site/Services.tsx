import { Megaphone, PenTool, Globe } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Marketing Digital",
    tagline: "Atrae, conecta y llega a tus clientes.",
    desc: "Estrategia, Redes Sociales, Contenido, Publicidad",
    accent: false,
  },
  {
    icon: PenTool,
    title: "Diseño & Contenido",
    tagline: "Haz que tu marca se vea profesional.",
    desc: "Diseño gráfico, Posts, Reels, Identidad visual, Material publicitario",
    accent: true,
  },
  {
    icon: Globe,
    title: "Presencia Digital",
    tagline: "Haz que tu negocio esté donde tus clientes te buscan.",
    desc: "Páginas web, Catálogos digitales, Optimización de perfiles",
    accent: false,
  },
];

export function Services() {
  return (
    <section id="servicios" className="border-y border-border/60 bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="section-title text-3xl text-primary sm:text-4xl">
          ¿Qué <span className="text-accent">hacemos?</span>
        </h2>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Soluciones digitales para{" "}
          <span className="text-primary">hacer crecer tu negocio</span>
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, tagline, desc, accent }) => (
            <article
              key={title}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div>
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                    accent ? "bg-accent" : "bg-primary"
                  }`}
                >
                  <Icon
                    className={accent ? "h-7 w-7 text-accent-foreground" : "h-7 w-7 text-primary-foreground"}
                  />
                </div>
                <div className={`mt-6 border-l-2 pl-4 ${accent ? "border-accent" : "border-primary"}`}>
                  <h3
                    className={`font-display text-lg font-bold uppercase ${accent ? "text-accent" : "text-primary"}`}
                  >
                    {title}
                  </h3>
                  <p className={`mt-1 text-sm font-semibold ${accent ? "text-accent" : "text-primary"}`}>
                    {tagline}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
