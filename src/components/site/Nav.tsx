import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo_organicads.svg";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#casos", label: "Casos de éxito" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="OrganicAds Studio" className="h-20 sm:h-24 w-auto object-contain -my-4" />
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-accent">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contacto"
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
        >
          Hablemos
        </a>
      </nav>
    </header>
  );
}
