import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DQc2yR3W.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as logo_organicads_default } from "./logo_organicads-DaM-QGjF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-C3JzV3o2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthPage() {
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("login");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	async function onSubmit(e) {
		e.preventDefault();
		setLoading(true);
		if (mode === "login") {
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password
			});
			setLoading(false);
			if (error) {
				toast.error(error.message);
				return;
			}
			navigate({ to: "/admin" });
		} else {
			const { error } = await supabase.auth.signUp({
				email,
				password,
				options: { emailRedirectTo: `${window.location.origin}/admin` }
			});
			setLoading(false);
			if (error) {
				toast.error(error.message);
				return;
			}
			toast.success("Cuenta creada. Solicita permisos de administrador.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-secondary/40 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_organicads_default,
						alt: "OrganicAds Studio",
						className: "h-10 w-auto object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 font-display text-2xl font-bold text-primary",
					children: mode === "login" ? "Iniciar sesión" : "Crear cuenta"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value),
							placeholder: "Correo",
							className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							required: true,
							minLength: 6,
							value: password,
							onChange: (e) => setPassword(e.target.value),
							placeholder: "Contraseña",
							className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: loading,
							className: "w-full rounded-xl bg-primary px-6 py-3 font-display text-sm font-bold uppercase text-primary-foreground transition-colors hover:bg-accent disabled:opacity-60",
							children: loading ? "Procesando…" : mode === "login" ? "Entrar" : "Registrarme"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setMode(mode === "login" ? "signup" : "login"),
					className: "mt-4 w-full text-center text-xs text-muted-foreground hover:text-accent",
					children: mode === "login" ? "¿No tienes cuenta? Crear una" : "Ya tengo cuenta"
				})
			]
		})
	});
}
//#endregion
export { AuthPage as component };
