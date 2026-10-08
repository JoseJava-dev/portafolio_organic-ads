import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { X, ExternalLink, Tag } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { fetchCases, type ResolvedCase, type ResolvedMediaItem } from "@/lib/cases";
import { useAuth } from "@/hooks/useAuth";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";

type CardItem = {
  id: string;
  title: string;
  client: string | null;
  description?: string | null;
  displayUrl: string | null;
  media_type: string;
  tags?: string[];
  mediaList?: ResolvedMediaItem[];
};

const demoCases: CardItem[] = [
  {
    id: "demo-1",
    title: "Cafetería local: +180% en alcance orgánico",
    client: "Café Aroma",
    description:
      "Desarrollamos una estrategia integral de contenido orgánico y branding visual para destacar la experiencia única de Café Aroma. Creamos piezas audiovisuales enfocadas en la preparación artesanal de café, logrando un aumento del 180% en visualizaciones y atrayendo una gran afluencia de nuevos clientes al local.",
    displayUrl: case1,
    media_type: "image",
    tags: ["Redes Sociales", "Branding", "Estrategia Orgánica"],
    mediaList: [{ url: case1, displayUrl: case1, type: "image" }],
  },
  {
    id: "demo-2",
    title: "Tienda online: campañas que multiplican ventas",
    client: "Studio Wear",
    description:
      "Reestructuración completa del catálogo digital y optimización de contenido para e-commerce. Implementamos producciones fotográficas con modelos y un diseño visual dinámico enfocado en potenciar la tasa de conversión y el valor percibido de las prendas.",
    displayUrl: case2,
    media_type: "image",
    tags: ["E-commerce", "Fotografía", "Diseño Web"],
    mediaList: [{ url: case2, displayUrl: case2, type: "image" }],
  },
  {
    id: "demo-3",
    title: "Servicios: página web que genera consultas",
    client: "ServiPro",
    description:
      "Diseño e implementación de sitio web de alta conversión y presencia digital corporativa. Diseñado para transmitir confianza inmediata y facilitar la solicitud rápida de presupuestos a través de canales directos.",
    displayUrl: case3,
    media_type: "image",
    tags: ["Desarrollo Web", "Conversión", "Identidad"],
    mediaList: [{ url: case3, displayUrl: case3, type: "image" }],
  },
];

export function Cases() {
  const { isAdmin } = useAuth();
  const [selectedCase, setSelectedCase] = useState<CardItem | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const { data, isLoading } = useQuery({
    queryKey: ["cases", "public"],
    queryFn: () => fetchCases(false),
  });

  const items: CardItem[] = (data?.length ?? 0) > 0 ? (data as CardItem[]) : demoCases;

  function handleSelectCase(c: CardItem) {
    setSelectedCase(c);
    setActiveMediaIndex(0);
  }

  const selectedMediaList = selectedCase?.mediaList && selectedCase.mediaList.length > 0
    ? selectedCase.mediaList
    : selectedCase?.displayUrl
      ? [{ url: selectedCase.displayUrl, displayUrl: selectedCase.displayUrl, type: selectedCase.media_type as "image" | "video" }]
      : [];

  const currentMedia = selectedMediaList[activeMediaIndex] ?? selectedMediaList[0];

  return (
    <section id="casos" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="section-title text-3xl text-primary sm:text-4xl">
              Casos de <span className="text-accent">éxito</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Conoce alguno de los proyectos en los que hemos ayudado a negocios a mejorar su
              presencia digital, conectar con sus clientes y optimizar sus procesos.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {isAdmin && (
              <Link
                to="/admin"
                className="rounded-full border border-accent px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Administrar casos
              </Link>
            )}
          </div>
        </div>

        {isLoading && <p className="mt-10 text-sm text-muted-foreground">Cargando casos…</p>}

        <Carousel opts={{ align: "start", loop: true }} className="mt-10">
          <CarouselContent>
            {items.map((c) => (
              <CarouselItem key={c.id} className="sm:basis-1/2 lg:basis-1/3">
                <button
                  type="button"
                  onClick={() => handleSelectCase(c)}
                  className="group block w-full overflow-hidden rounded-2xl border border-border bg-card text-left transition-all hover:-translate-y-1 hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <div className="aspect-video w-full overflow-hidden bg-secondary relative">
                    {(() => {
                      const list = c.mediaList && c.mediaList.length > 0
                        ? c.mediaList
                        : [{ displayUrl: c.displayUrl, type: c.media_type }];
                      const first = list[0];
                      if (!first?.displayUrl) return null;

                      if (first.type === "video") {
                        if (first.displayUrl.includes("youtube.com") || first.displayUrl.includes("youtu.be")) {
                          return (
                            <iframe
                              src={`${first.displayUrl.replace("watch?v=", "embed/").replace("shorts/", "embed/").split("?")[0].replace("youtu.be/", "www.youtube.com/embed/")}?controls=0&mute=1&autoplay=0&loop=1`}
                              title={c.title}
                              className="h-full w-full pointer-events-none border-0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                          );
                        }
                        return <video src={first.displayUrl} muted playsInline className="h-full w-full object-cover" />;
                      }

                      return (
                        <img
                          src={first.displayUrl}
                          alt={c.title}
                          loading="lazy"
                          width={1024}
                          height={768}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      );
                    })()}

                    {/* Badge if project has multiple media items */}
                    {c.mediaList && c.mediaList.length > 1 && (
                      <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                        +{c.mediaList.length} archivos
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    {c.client && (
                      <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                        {c.client}
                      </p>
                    )}
                    <h3 className="mt-1 font-display text-lg font-bold text-primary">{c.title}</h3>
                    <p className="mt-2 text-xs font-medium text-accent hover:underline flex items-center gap-1">
                      Ver detalles →
                    </p>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>

      {/* Modal / Tarjeta desplegable con detalles del proyecto */}
      <Dialog open={!!selectedCase} onOpenChange={(open) => !open && setSelectedCase(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 sm:rounded-2xl border-border bg-card">
          {selectedCase && (
            <div className="flex flex-col">
              {/* Contenedor Multimedia Principal */}
              <div className="relative aspect-video w-full bg-black/90 overflow-hidden sm:rounded-t-2xl">
                {currentMedia ? (
                  currentMedia.type === "video" ? (
                    currentMedia.displayUrl.includes("youtube.com") || currentMedia.displayUrl.includes("youtu.be") ? (
                      <iframe
                        src={`${currentMedia.displayUrl.replace("watch?v=", "embed/").replace("shorts/", "embed/").split("?")[0].replace("youtu.be/", "www.youtube.com/embed/")}?autoplay=1`}
                        title={selectedCase.title}
                        className="h-full w-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={currentMedia.displayUrl}
                        controls
                        autoPlay
                        className="h-full w-full object-contain"
                      />
                    )
                  ) : (
                    <img
                      src={currentMedia.displayUrl}
                      alt={selectedCase.title}
                      className="h-full w-full object-contain"
                    />
                  )
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                    Sin multimedia disponible
                  </div>
                )}
              </div>

              {/* Selector de medios en caso de tener varios */}
              {selectedMediaList.length > 1 && (
                <div className="flex gap-2 p-3 bg-secondary/50 overflow-x-auto border-b border-border">
                  {selectedMediaList.map((m, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveMediaIndex(idx)}
                      className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                        activeMediaIndex === idx ? "border-accent scale-105" : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      {m.type === "video" ? (
                        <div className="flex h-full w-full items-center justify-center bg-black/60 text-[10px] text-white font-medium">
                          ▶ Video {idx + 1}
                        </div>
                      ) : (
                        <img src={m.displayUrl} alt="" className="h-full w-full object-cover" />
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Información y detalles del proyecto */}
              <div className="p-6 sm:p-8 space-y-5">
                <DialogHeader className="text-left space-y-1.5">
                  {selectedCase.client && (
                    <p className="text-xs font-bold uppercase tracking-wider text-accent">
                      Cliente: {selectedCase.client}
                    </p>
                  )}
                  <DialogTitle className="font-display text-2xl sm:text-3xl font-bold text-primary">
                    {selectedCase.title}
                  </DialogTitle>
                </DialogHeader>

                {/* Etiquetas / Categorías */}
                {selectedCase.tags && selectedCase.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedCase.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground"
                      >
                        <Tag className="h-3 w-3 text-accent" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Descripción completa */}
                <div className="border-t border-border/60 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Sobre el proyecto
                  </h4>
                  <p className="text-sm leading-relaxed text-foreground/90 whitespace-pre-line">
                    {selectedCase.description ||
                      "Este proyecto fue diseñado a la medida para potenciar los resultados digitales de la marca, optimizando cada canal y maximizando su impacto."}
                  </p>
                </div>

                {/* Pie con botón de cierre y contacto */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-6">
                  <a
                    href="#contacto"
                    onClick={() => setSelectedCase(null)}
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    Cotizar un proyecto similar
                  </a>
                  <DialogClose className="rounded-xl border border-border px-5 py-2.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                    Cerrar ventana
                  </DialogClose>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

