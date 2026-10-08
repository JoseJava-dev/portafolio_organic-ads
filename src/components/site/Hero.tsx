import logo from "@/assets/logo_organicads.svg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-40 -top-32 h-[38rem] w-[38rem] rounded-full opacity-15 blur-3xl"
        style={{ backgroundImage: "var(--gradient-brand)" }}
        aria-hidden
      />
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-20 pt-24 text-center">
        <img
          src={logo}
          alt="OrganicAds Studio"
          className="h-72 sm:h-96 w-auto object-contain -my-8"
        />

        <div className="mt-6 flex w-full max-w-xl items-center gap-4">
          <span className="h-px flex-1 bg-primary/40" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground sm:text-sm">
            Estrategia · <span className="text-accent">Creatividad</span> ·{" "}
            <span className="text-accent">Presencia digital</span>
          </p>
          <span className="h-px flex-1 bg-accent/50" />
        </div>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Ayudamos a emprendedores y marcas a construir una presencia digital profesional coherente
          y orientada a resultados.
        </p>

        <p className="mt-14 font-display text-lg font-bold uppercase tracking-tight text-primary sm:text-xl">
          Impulsamos tu marca <span className="text-accent">·</span>{" "}
          <span className="text-accent">Mejoramos tu negocio</span>
        </p>
      </div>
    </section>
  );
}
