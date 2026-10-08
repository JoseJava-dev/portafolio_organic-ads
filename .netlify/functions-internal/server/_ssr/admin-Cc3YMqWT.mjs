import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DQc2yR3W.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as useAuth, i as uploadCaseMedia, n as getYouTubeThumbnail, r as parseMediaString, t as fetchCases } from "./cases-BYHR2CAN.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as LogOut, n as Trash2, o as Plus, s as Pencil } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Cc3YMqWT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var empty = {
	title: "",
	client: "",
	description: "",
	media_type: "image",
	media_url: "",
	mediaList: [],
	tags: "",
	sort_order: 0,
	published: true
};
function AdminPage() {
	const navigate = useNavigate();
	const { user, isAdmin, loading } = useAuth();
	const qc = useQueryClient();
	const [form, setForm] = (0, import_react.useState)(empty);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [newUrl, setNewUrl] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!loading && !user) navigate({ to: "/auth" });
	}, [
		loading,
		user,
		navigate
	]);
	const { data: cases } = useQuery({
		queryKey: ["cases", "admin"],
		queryFn: () => fetchCases(true),
		enabled: isAdmin
	});
	const save = useMutation({
		mutationFn: async (state) => {
			let finalMediaUrl = "";
			if (state.mediaList.length > 0) finalMediaUrl = JSON.stringify(state.mediaList);
			else finalMediaUrl = state.media_url.trim();
			const primaryType = state.mediaList.some((m) => m.type === "video") ? "video" : state.media_type;
			const payload = {
				title: state.title.trim(),
				client: state.client.trim() || null,
				description: state.description.trim() || null,
				media_type: primaryType,
				media_url: finalMediaUrl || null,
				tags: state.tags.split(",").map((t) => t.trim()).filter(Boolean),
				sort_order: Number(state.sort_order) || 0,
				published: state.published
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
			qc.invalidateQueries({ queryKey: ["cases"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const remove = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from("case_studies").delete().eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Caso eliminado");
			qc.invalidateQueries({ queryKey: ["cases"] });
		},
		onError: (e) => toast.error(e.message)
	});
	async function onFiles(fileList) {
		setUploading(true);
		try {
			const newItems = [];
			for (let i = 0; i < fileList.length; i++) {
				const file = fileList[i];
				const path = await uploadCaseMedia(file);
				newItems.push({
					url: path,
					type: file.type.startsWith("video") ? "video" : "image"
				});
			}
			setForm((f) => ({
				...f,
				mediaList: [...f.mediaList, ...newItems],
				media_url: newItems[0]?.url ?? f.media_url
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
		const item = {
			url: trimmed,
			type: trimmed.includes("youtube.com") || trimmed.includes("youtu.be") || /\.(mp4|webm|ogg)$/i.test(trimmed) ? "video" : "image"
		};
		setForm((f) => ({
			...f,
			mediaList: [...f.mediaList, item],
			media_url: f.media_url || trimmed
		}));
		setNewUrl("");
	}
	function removeMediaItem(index) {
		setForm((f) => {
			const updated = f.mediaList.filter((_, i) => i !== index);
			return {
				...f,
				mediaList: updated,
				media_url: updated[0]?.url ?? ""
			};
		});
	}
	function edit(c) {
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
			published: c.published
		});
		setNewUrl("");
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "p-10 text-sm text-muted-foreground",
		children: "Cargando…"
	});
	if (user && !isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-6 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-bold text-primary",
				children: "Sin permisos"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 max-w-sm text-sm text-muted-foreground",
				children: [
					"Tu cuenta (",
					user.email,
					") no tiene rol de administrador."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => supabase.auth.signOut(),
				className: "mt-6 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground",
				children: "Cerrar sesión"
			})
		] })
	});
	const inputCls = "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-secondary/30 pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-5xl items-center justify-between px-6 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "font-display text-sm font-extrabold uppercase text-primary",
					children: [
						"Organic",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "Ads"
						}),
						" · Panel"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: async () => {
						await supabase.auth.signOut();
						navigate({ to: "/" });
					},
					className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Salir"]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-5xl space-y-10 px-6 py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-xl font-bold text-primary",
					children: form.id ? "Editar caso" : "Nuevo caso de éxito"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 grid gap-4 sm:grid-cols-2",
					onSubmit: (e) => {
						e.preventDefault();
						if (!form.title.trim()) {
							toast.error("El título es obligatorio");
							return;
						}
						save.mutate(form);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputCls,
							placeholder: "Título",
							maxLength: 120,
							value: form.title,
							onChange: (e) => setForm({
								...form,
								title: e.target.value
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputCls,
							placeholder: "Cliente",
							maxLength: 120,
							value: form.client,
							onChange: (e) => setForm({
								...form,
								client: e.target.value
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: `${inputCls} sm:col-span-2`,
							rows: 3,
							maxLength: 600,
							placeholder: "Descripción del caso",
							value: form.description,
							onChange: (e) => setForm({
								...form,
								description: e.target.value
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: inputCls,
							value: form.media_type,
							onChange: (e) => setForm({
								...form,
								media_type: e.target.value
							}),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "image",
								children: "Imagen"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "video",
								children: "Video"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputCls,
							placeholder: "Etiquetas separadas por coma",
							value: form.tags,
							onChange: (e) => setForm({
								...form,
								tags: e.target.value
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: "Archivos Multimedia (Puedes subir múltiples imágenes y videos, o agregar enlaces de YouTube)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-xl border border-dashed border-border bg-secondary/30 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "cursor-pointer inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-accent transition-colors shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: uploading ? "Subiendo archivo(s)..." : "📁 Subir archivos (imágenes/videos)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "file",
											multiple: true,
											accept: "image/*,video/*",
											disabled: uploading,
											onChange: (e) => {
												if (e.target.files && e.target.files.length > 0) onFiles(e.target.files);
											},
											className: "hidden"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground flex-1",
										children: uploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-accent animate-pulse font-medium",
											children: "Subiendo archivos a tu servidor..."
										}) : "Puedes seleccionar varios archivos a la vez desde tu equipo. Se admiten fotos (.jpg, .png) y videos (.mp4)."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: `${inputCls} flex-1`,
										placeholder: "O agrega una URL / enlace de YouTube (Shorts o Video)",
										value: newUrl,
										onChange: (e) => setNewUrl(e.target.value),
										onKeyDown: (e) => {
											if (e.key === "Enter") {
												e.preventDefault();
												addUrlItem();
											}
										}
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: addUrlItem,
										className: "rounded-xl bg-secondary px-5 py-3 text-xs font-bold uppercase text-primary hover:bg-accent hover:text-accent-foreground transition-colors",
										children: "Agregar enlace"
									})]
								}),
								form.mediaList.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs font-semibold text-primary",
										children: [
											"Elementos agregados a este proyecto (",
											form.mediaList.length,
											"):"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
										children: form.mediaList.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-2 rounded-lg border border-border bg-card p-2 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 min-w-0 flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `px-2 py-0.5 rounded text-[10px] font-bold uppercase ${item.type === "video" ? "bg-accent/20 text-accent" : "bg-primary/10 text-primary"}`,
													children: item.type === "video" ? "Video" : "Imagen"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "truncate text-muted-foreground",
													children: item.url
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => removeMediaItem(idx),
												className: "text-destructive hover:opacity-80 p-1 font-bold",
												title: "Eliminar este elemento",
												children: "✕"
											})]
										}, idx))
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm text-muted-foreground",
								children: ["Orden", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									className: "w-20 rounded-lg border border-input bg-background px-2 py-1 text-sm",
									value: form.sort_order,
									onChange: (e) => setForm({
										...form,
										sort_order: Number(e.target.value)
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: form.published,
									onChange: (e) => setForm({
										...form,
										published: e.target.checked
									})
								}), "Publicado"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3 sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: save.isPending || uploading,
								className: "flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-display text-sm font-bold uppercase text-accent-foreground disabled:opacity-60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), uploading ? "Subiendo…" : form.id ? "Guardar cambios" : "Agregar caso"]
							}), form.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setForm(empty),
								className: "rounded-xl border border-border px-6 py-3 text-sm font-semibold text-muted-foreground",
								children: "Cancelar"
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold text-primary",
						children: "Casos existentes"
					}),
					cases?.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Todavía no hay casos."
					}),
					cases?.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex items-center gap-4 rounded-2xl border border-border bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-secondary relative",
								children: [c.displayUrl && c.media_type === "image" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.displayUrl,
									alt: c.title,
									loading: "lazy",
									className: "h-full w-full object-cover"
								}), c.displayUrl && c.media_type === "video" && (c.displayUrl.includes("youtube.com") || c.displayUrl.includes("youtu.be") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: getYouTubeThumbnail(c.displayUrl) ?? "",
									alt: c.title,
									className: "h-full w-full object-cover"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
									src: c.displayUrl,
									className: "h-full w-full object-cover"
								}))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-semibold text-primary",
									children: c.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate text-xs text-muted-foreground",
									children: [
										c.client ?? "Sin cliente",
										" · ",
										c.published ? "Publicado" : "Borrador"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => edit(c),
								className: "rounded-lg border border-border p-2 text-primary hover:border-accent hover:text-accent",
								"aria-label": "Editar",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									if (confirm(`¿Eliminar "${c.title}"?`)) remove.mutate(c.id);
								},
								className: "rounded-lg border border-border p-2 text-destructive hover:border-destructive",
								"aria-label": "Eliminar",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
							})
						]
					}, c.id))
				]
			})]
		})]
	});
}
//#endregion
export { AdminPage as component };
