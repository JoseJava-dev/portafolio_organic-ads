import { Link } from "@tanstack/react-router";
import icon from "@/assets/icon_organic.svg";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-secondary/70 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <img src={icon} alt="OrganicAds Studio" className="h-10 w-10 object-contain" />
          <p className="font-display text-sm font-bold uppercase text-primary">
            Tu marca <span className="text-accent">más visible</span> y más profesional.
          </p>
        </div>
        <Link
          to="/auth"
          className="text-xs font-semibold text-muted-foreground transition-colors hover:text-accent"
        >
          Acceso administrador
        </Link>
      </div>
    </footer>
  );
}
