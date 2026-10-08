import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DQc2yR3W.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as useAuth, t as fetchCases } from "./cases-BYHR2CAN.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as DialogOverlay$1, c as Slot, i as DialogDescription$1, n as DialogClose$1, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as ArrowLeft, a as Rocket, c as PenTool, d as Mail, g as ArrowRight, h as FileText, i as Search, l as MessageCircle, m as Globe, p as Instagram, r as Tag, t as X, u as Megaphone } from "../_libs/lucide-react.mjs";
import { t as logo_organicads_default } from "./logo_organicads-DaM-QGjF.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B2DsRDfK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		href: "#servicios",
		label: "Servicios"
	},
	{
		href: "#proceso",
		label: "Proceso"
	},
	{
		href: "#casos",
		label: "Casos de éxito"
	},
	{
		href: "#contacto",
		label: "Contacto"
	}
];
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_organicads_default,
						alt: "OrganicAds Studio",
						className: "h-20 sm:h-24 w-auto object-contain -my-4"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "transition-colors hover:text-accent",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contacto",
					className: "rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent",
					children: "Hablemos"
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute -right-40 -top-32 h-[38rem] w-[38rem] rounded-full opacity-15 blur-3xl",
			style: { backgroundImage: "var(--gradient-brand)" },
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-4xl flex-col items-center px-6 pb-20 pt-24 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logo_organicads_default,
					alt: "OrganicAds Studio",
					className: "h-72 sm:h-96 w-auto object-contain -my-8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex w-full max-w-xl items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-primary/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.18em] text-foreground sm:text-sm",
							children: [
								"Estrategia · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "Creatividad"
								}),
								" ·",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "Presencia digital"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-accent/50" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground",
					children: "Ayudamos a emprendedores y marcas a construir una presencia digital profesional coherente y orientada a resultados."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-14 font-display text-lg font-bold uppercase tracking-tight text-primary sm:text-xl",
					children: [
						"Impulsamos tu marca ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "·"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "Mejoramos tu negocio"
						})
					]
				})
			]
		})]
	});
}
var services = [
	{
		icon: Megaphone,
		title: "Marketing Digital",
		tagline: "Atrae, conecta y llega a tus clientes.",
		desc: "Estrategia, Redes Sociales, Contenido, Publicidad",
		accent: false
	},
	{
		icon: PenTool,
		title: "Diseño & Contenido",
		tagline: "Haz que tu marca se vea profesional.",
		desc: "Diseño gráfico, Posts, Reels, Identidad visual, Material publicitario",
		accent: true
	},
	{
		icon: Globe,
		title: "Presencia Digital",
		tagline: "Haz que tu negocio esté donde tus clientes te buscan.",
		desc: "Páginas web, Catálogos digitales, Optimización de perfiles",
		accent: false
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "servicios",
		className: "border-y border-border/60 bg-secondary/40 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "section-title text-3xl text-primary sm:text-4xl",
					children: ["¿Qué ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: "hacemos?"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground",
					children: [
						"Soluciones digitales para",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "hacer crecer tu negocio"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-1 gap-6 md:grid-cols-3",
					children: services.map(({ icon: Icon, title, tagline, desc, accent }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${accent ? "bg-accent" : "bg-primary"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: accent ? "h-7 w-7 text-accent-foreground" : "h-7 w-7 text-primary-foreground" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `mt-6 border-l-2 pl-4 ${accent ? "border-accent" : "border-primary"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: `font-display text-lg font-bold uppercase ${accent ? "text-accent" : "text-primary"}`,
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-1 text-sm font-semibold ${accent ? "text-accent" : "text-primary"}`,
								children: tagline
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: desc
						})]
					}, title))
				})
			]
		})
	});
}
var steps = [
	{
		icon: MessageCircle,
		title: "Nos contactas",
		text: "Nos escribes por whatsapp nos cuentas sobre tu negocio, que necesitas o que te gustaria mejorar"
	},
	{
		icon: Search,
		title: "Diagnóstico de negocio",
		text: "Analizamos tu presencia digital, necesidades y oportunidades de mejora"
	},
	{
		icon: FileText,
		title: "Propuesta comercial",
		text: "Te presentamos un plan claro con alcance, tiempos e inversión, hecho a la medida de tu negocio."
	},
	{
		icon: Rocket,
		title: "Comenzamos a mejorar",
		text: "Una vez aprobada la propuesta, ponemos en marcha las soluciones para llevar tu negocio al siguiente nivel"
	}
];
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "proceso",
		className: "border-t border-border/60 bg-secondary/40 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "section-title text-3xl text-primary sm:text-4xl",
					children: [
						"¿Cómo ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "empezamos"
						}),
						"?"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm text-muted-foreground",
					children: "Un proceso simple y transparente, desde el primer mensaje hasta los primeros resultados."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "absolute right-5 top-5 h-6 w-6 text-accent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-5xl font-extrabold text-accent/20",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-lg font-bold text-primary",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: s.text
							})
						]
					}, s.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-14 text-center font-display text-lg font-bold uppercase tracking-tight text-primary sm:text-xl",
					children: [
						"¿Listo para mejorar tu presencia digital?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contacto",
							className: "text-accent transition-opacity hover:opacity-80",
							children: "Hablemos sobre tu negocio"
						})
					]
				})
			]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const context = import_react.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = import_react.useState(false);
	const [canScrollNext, setCanScrollNext] = import_react.useState(false);
	const onSelect = import_react.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = import_react.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = import_react.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	import_react.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	import_react.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogClose = DialogClose$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose$1, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var case_1_default = "/assets/case-1-NxwAq4Fn.jpg";
var case_2_default = "/assets/case-2-BHrVVsAF.jpg";
var case_3_default = "/assets/case-3-DXFItelQ.jpg";
var demoCases = [
	{
		id: "demo-1",
		title: "Cafetería local: +180% en alcance orgánico",
		client: "Café Aroma",
		description: "Desarrollamos una estrategia integral de contenido orgánico y branding visual para destacar la experiencia única de Café Aroma. Creamos piezas audiovisuales enfocadas en la preparación artesanal de café, logrando un aumento del 180% en visualizaciones y atrayendo una gran afluencia de nuevos clientes al local.",
		displayUrl: case_1_default,
		media_type: "image",
		tags: [
			"Redes Sociales",
			"Branding",
			"Estrategia Orgánica"
		],
		mediaList: [{
			url: case_1_default,
			displayUrl: case_1_default,
			type: "image"
		}]
	},
	{
		id: "demo-2",
		title: "Tienda online: campañas que multiplican ventas",
		client: "Studio Wear",
		description: "Reestructuración completa del catálogo digital y optimización de contenido para e-commerce. Implementamos producciones fotográficas con modelos y un diseño visual dinámico enfocado en potenciar la tasa de conversión y el valor percibido de las prendas.",
		displayUrl: case_2_default,
		media_type: "image",
		tags: [
			"E-commerce",
			"Fotografía",
			"Diseño Web"
		],
		mediaList: [{
			url: case_2_default,
			displayUrl: case_2_default,
			type: "image"
		}]
	},
	{
		id: "demo-3",
		title: "Servicios: página web que genera consultas",
		client: "ServiPro",
		description: "Diseño e implementación de sitio web de alta conversión y presencia digital corporativa. Diseñado para transmitir confianza inmediata y facilitar la solicitud rápida de presupuestos a través de canales directos.",
		displayUrl: case_3_default,
		media_type: "image",
		tags: [
			"Desarrollo Web",
			"Conversión",
			"Identidad"
		],
		mediaList: [{
			url: case_3_default,
			displayUrl: case_3_default,
			type: "image"
		}]
	}
];
function Cases() {
	const { isAdmin } = useAuth();
	const [selectedCase, setSelectedCase] = (0, import_react.useState)(null);
	const [activeMediaIndex, setActiveMediaIndex] = (0, import_react.useState)(0);
	const { data, isLoading } = useQuery({
		queryKey: ["cases", "public"],
		queryFn: () => fetchCases(false)
	});
	const items = (data?.length ?? 0) > 0 ? data : demoCases;
	function handleSelectCase(c) {
		setSelectedCase(c);
		setActiveMediaIndex(0);
	}
	const selectedMediaList = selectedCase?.mediaList && selectedCase.mediaList.length > 0 ? selectedCase.mediaList : selectedCase?.displayUrl ? [{
		url: selectedCase.displayUrl,
		displayUrl: selectedCase.displayUrl,
		type: selectedCase.media_type
	}] : [];
	const currentMedia = selectedMediaList[activeMediaIndex] ?? selectedMediaList[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "casos",
		className: "py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "section-title text-3xl text-primary sm:text-4xl",
						children: ["Casos de ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "éxito"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Conoce alguno de los proyectos en los que hemos ayudado a negocios a mejorar su presencia digital, conectar con sus clientes y optimizar sus procesos."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3",
						children: isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							className: "rounded-full border border-accent px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground",
							children: "Administrar casos"
						})
					})]
				}),
				isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-sm text-muted-foreground",
					children: "Cargando casos…"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
					opts: {
						align: "start",
						loop: true
					},
					className: "mt-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, { children: items.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
							className: "sm:basis-1/2 lg:basis-1/3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => handleSelectCase(c),
								className: "group block w-full overflow-hidden rounded-2xl border border-border bg-card text-left transition-all hover:-translate-y-1 hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "aspect-video w-full overflow-hidden bg-secondary relative",
									children: [(() => {
										const first = (c.mediaList && c.mediaList.length > 0 ? c.mediaList : [{
											displayUrl: c.displayUrl,
											type: c.media_type
										}])[0];
										if (!first?.displayUrl) return null;
										if (first.type === "video") {
											if (first.displayUrl.includes("youtube.com") || first.displayUrl.includes("youtu.be")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
												src: `${first.displayUrl.replace("watch?v=", "embed/").replace("shorts/", "embed/").split("?")[0].replace("youtu.be/", "www.youtube.com/embed/")}?controls=0&mute=1&autoplay=0&loop=1`,
												title: c.title,
												className: "h-full w-full pointer-events-none border-0",
												allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											});
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
												src: first.displayUrl,
												muted: true,
												playsInline: true,
												className: "h-full w-full object-cover"
											});
										}
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: first.displayUrl,
											alt: c.title,
											loading: "lazy",
											width: 1024,
											height: 768,
											className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
										});
									})(), c.mediaList && c.mediaList.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm",
										children: [
											"+",
											c.mediaList.length,
											" archivos"
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5",
									children: [
										c.client && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold uppercase tracking-wide text-accent",
											children: c.client
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 font-display text-lg font-bold text-primary",
											children: c.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs font-medium text-accent hover:underline flex items-center gap-1",
											children: "Ver detalles →"
										})
									]
								})]
							})
						}, c.id)) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "hidden sm:flex" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "hidden sm:flex" })
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!selectedCase,
			onOpenChange: (open) => !open && setSelectedCase(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
				className: "max-w-3xl max-h-[90vh] overflow-y-auto p-0 sm:rounded-2xl border-border bg-card",
				children: selectedCase && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative aspect-video w-full bg-black/90 overflow-hidden sm:rounded-t-2xl",
							children: currentMedia ? currentMedia.type === "video" ? currentMedia.displayUrl.includes("youtube.com") || currentMedia.displayUrl.includes("youtu.be") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								src: `${currentMedia.displayUrl.replace("watch?v=", "embed/").replace("shorts/", "embed/").split("?")[0].replace("youtu.be/", "www.youtube.com/embed/")}?autoplay=1`,
								title: selectedCase.title,
								className: "h-full w-full border-0",
								allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
								allowFullScreen: true
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								src: currentMedia.displayUrl,
								controls: true,
								autoPlay: true,
								className: "h-full w-full object-contain"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: currentMedia.displayUrl,
								alt: selectedCase.title,
								className: "h-full w-full object-contain"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-full items-center justify-center text-sm text-muted-foreground",
								children: "Sin multimedia disponible"
							})
						}),
						selectedMediaList.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2 p-3 bg-secondary/50 overflow-x-auto border-b border-border",
							children: selectedMediaList.map((m, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setActiveMediaIndex(idx),
								className: `relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${activeMediaIndex === idx ? "border-accent scale-105" : "border-transparent opacity-70 hover:opacity-100"}`,
								children: m.type === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex h-full w-full items-center justify-center bg-black/60 text-[10px] text-white font-medium",
									children: ["▶ Video ", idx + 1]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: m.displayUrl,
									alt: "",
									className: "h-full w-full object-cover"
								})
							}, idx))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 sm:p-8 space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
									className: "text-left space-y-1.5",
									children: [selectedCase.client && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs font-bold uppercase tracking-wider text-accent",
										children: ["Cliente: ", selectedCase.client]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
										className: "font-display text-2xl sm:text-3xl font-bold text-primary",
										children: selectedCase.title
									})]
								}),
								selectedCase.tags && selectedCase.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2 pt-1",
									children: selectedCase.tags.map((tag, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-3 w-3 text-accent" }), tag]
									}, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-border/60 pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2",
										children: "Sobre el proyecto"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed text-foreground/90 whitespace-pre-line",
										children: selectedCase.description || "Este proyecto fue diseñado a la medida para potenciar los resultados digitales de la marca, optimizando cada canal y maximizando su impacto."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#contacto",
										onClick: () => setSelectedCase(null),
										className: "inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90",
										children: "Cotizar un proyecto similar"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
										className: "rounded-xl border border-border px-5 py-2.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
										children: "Cerrar ventana"
									})]
								})
							]
						})
					]
				})
			})
		})]
	});
}
var schema = objectType({
	name: stringType().trim().min(2, "Ingresa tu nombre").max(100),
	email: stringType().trim().email("Correo inválido").max(255),
	phone: stringType().trim().max(30).optional(),
	message: stringType().trim().min(10, "Cuéntanos un poco más").max(1e3)
});
var WHATSAPP = "+56964497519";
function Contact() {
	const [sending, setSending] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const fd = new FormData(form);
		const parsed = schema.safeParse({
			name: fd.get("name"),
			email: fd.get("email"),
			phone: fd.get("phone") || void 0,
			message: fd.get("message")
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
			message: parsed.data.message
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
			`Mensaje: ${parsed.data.message}`
		].join("\n");
		window.open(`https://wa.me/${WHATSAPP.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
		toast.success("Abriendo WhatsApp con tu mensaje…");
		form.reset();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contacto",
		className: "border-t border-border/60 bg-secondary/40 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-accent",
					children: "¿Tienes una idea para tu negocio?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "section-title mt-2 text-3xl text-primary sm:text-4xl",
					children: ["Conversemos ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-accent" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-md text-sm leading-relaxed text-muted-foreground",
					children: "Hablamos sobre como podemos ayudarte a mejorar tu presencia digital"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-10 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-11 w-11 items-center justify-center rounded-full bg-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5 text-primary-foreground" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "WhatsApp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `https://wa.me/${WHATSAPP.replace(/\D/g, "")}`,
								target: "_blank",
								rel: "noreferrer",
								className: "font-semibold text-primary hover:text-accent",
								children: "+56 9 6449 7519"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-11 w-11 items-center justify-center rounded-full bg-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5 text-accent-foreground" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Instagram"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://instagram.com/organicadsstudio",
								target: "_blank",
								rel: "noreferrer",
								className: "font-semibold text-primary hover:text-accent",
								children: "@organicadsstudio"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-11 w-11 items-center justify-center rounded-full bg-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 text-primary-foreground" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Correo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:organicads.studio@gmail.com",
								className: "font-semibold text-primary hover:text-accent",
								children: "organicads.studio@gmail.com"
							})] })]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "rounded-2xl border border-border bg-card p-8 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-bold text-primary",
					children: "como podemos ayudarte?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "name",
							placeholder: "Tu nombre",
							maxLength: 100,
							className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "email",
							type: "email",
							placeholder: "Tu correo",
							maxLength: 255,
							className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "phone",
							placeholder: "Teléfono",
							maxLength: 30,
							className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							rows: 5,
							maxLength: 1e3,
							placeholder: "¿Qué necesitas para tu marca?",
							className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: sending,
							className: "w-full rounded-xl bg-accent px-6 py-3 font-display text-sm font-bold uppercase text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60",
							children: sending ? "Enviando…" : "Enviar por WhatsApp"
						})
					]
				})]
			})]
		})
	});
}
var icon_organic_default = "/assets/icon_organic-f018BYLD.svg";
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border/80 bg-secondary/70 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: icon_organic_default,
					alt: "OrganicAds Studio",
					className: "h-10 w-10 object-contain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-sm font-bold uppercase text-primary",
					children: [
						"Tu marca ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "más visible"
						}),
						" y más profesional."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/auth",
				className: "text-xs font-semibold text-muted-foreground transition-colors hover:text-accent",
				children: "Acceso administrador"
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cases, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
