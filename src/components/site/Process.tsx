import { MessageCircle, Search, FileText, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Nos contactas",
    text: "Nos escribes por whatsapp nos cuentas sobre tu negocio, que necesitas o que te gustaria mejorar",
  },
  {
    icon: Search,
    title: "Diagnóstico de negocio",
    text: "Analizamos tu presencia digital, necesidades y oportunidades de mejora",
  },
  {
    icon: FileText,
    title: "Propuesta comercial",
    text: "Te presentamos un plan claro con alcance, tiempos e inversión, hecho a la medida de tu negocio.",
  },
  {
    icon: Rocket,
    title: "Comenzamos a mejorar",
    text: "Una vez aprobada la propuesta, ponemos en marcha las soluciones para llevar tu negocio al siguiente nivel",
  },
];

export function Process() {
  return (
    <section id="proceso" className="border-t border-border/60 bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="section-title text-3xl text-primary sm:text-4xl">
          ¿Cómo <span className="text-accent">empezamos</span>?
        </h2>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          Un proceso simple y transparente, desde el primer mensaje hasta los primeros resultados.
        </p>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <s.icon className="absolute right-5 top-5 h-6 w-6 text-accent" />
              <span className="font-display text-5xl font-extrabold text-accent/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>

        <p className="mt-14 text-center font-display text-lg font-bold uppercase tracking-tight text-primary sm:text-xl">
          ¿Listo para mejorar tu presencia digital?{" "}
          <a
            href="#contacto"
            className="text-accent transition-opacity hover:opacity-80"
          >
            Hablemos sobre tu negocio
          </a>
        </p>
      </div>
    </section>
  );
}
