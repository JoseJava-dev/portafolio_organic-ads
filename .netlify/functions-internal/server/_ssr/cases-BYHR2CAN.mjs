import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DQc2yR3W.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cases-BYHR2CAN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useAuth() {
	const [session, setSession] = (0, import_react.useState)(null);
	const [user, setUser] = (0, import_react.useState)(null);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => {
			setSession(newSession);
			setUser(newSession?.user ?? null);
			if (newSession?.user) setTimeout(() => {
				supabase.rpc("has_role", {
					_user_id: newSession.user.id,
					_role: "admin"
				}).then(({ data }) => setIsAdmin(Boolean(data)));
			}, 0);
			else setIsAdmin(false);
		});
		supabase.auth.getSession().then(async ({ data }) => {
			setSession(data.session);
			setUser(data.session?.user ?? null);
			if (data.session?.user) {
				const { data: roleData } = await supabase.rpc("has_role", {
					_user_id: data.session.user.id,
					_role: "admin"
				});
				setIsAdmin(Boolean(roleData));
			}
			setLoading(false);
		});
		return () => sub.subscription.unsubscribe();
	}, []);
	return {
		session,
		user,
		isAdmin,
		loading
	};
}
var CASE_BUCKET = "case-media";
function getYouTubeId(url) {
	if (!url) return null;
	const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/i);
	return match ? match[1] : null;
}
function getYouTubeThumbnail(url) {
	const id = getYouTubeId(url);
	return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}
async function resolveUrl(mediaUrl) {
	if (!mediaUrl) return null;
	if (/^https?:\/\//i.test(mediaUrl)) return mediaUrl;
	const { data } = await supabase.storage.from(CASE_BUCKET).createSignedUrl(mediaUrl, 604800);
	return data?.signedUrl ?? null;
}
function parseMediaString(raw, fallbackType = "image") {
	if (!raw || !raw.trim()) return [];
	const trimmed = raw.trim();
	if (trimmed.startsWith("[") && trimmed.endsWith("]")) try {
		const parsed = JSON.parse(trimmed);
		if (Array.isArray(parsed)) return parsed.map((item) => ({
			url: typeof item === "string" ? item : item.url,
			type: typeof item === "object" && item.type ? item.type : typeof item === "string" && (item.includes("youtube.com") || item.includes("youtu.be") || /\.(mp4|webm|ogg)$/i.test(item)) ? "video" : "image"
		}));
	} catch {}
	return [{
		url: trimmed,
		type: fallbackType === "video" || trimmed.includes("youtube.com") || trimmed.includes("youtu.be") || /\.(mp4|webm|ogg)$/i.test(trimmed) ? "video" : "image"
	}];
}
async function fetchCases(includeUnpublished = false) {
	let query = supabase.from("case_studies").select("*").order("sort_order", { ascending: true }).order("created_at", { ascending: false });
	if (!includeUnpublished) query = query.eq("published", true);
	const { data, error } = await query;
	if (error) throw error;
	return Promise.all((data ?? []).map(async (row) => {
		const caseItem = row;
		const rawList = parseMediaString(caseItem.media_url, caseItem.media_type);
		const mediaList = await Promise.all(rawList.map(async (m) => ({
			url: m.url,
			displayUrl: await resolveUrl(m.url) ?? m.url,
			type: m.type
		})));
		const displayUrl = mediaList.length > 0 ? mediaList[0].displayUrl : await resolveUrl(caseItem.media_url);
		return {
			...caseItem,
			displayUrl,
			mediaList
		};
	}));
}
async function uploadCaseMedia(file) {
	const ext = file.name.split(".").pop() ?? "bin";
	const path = `${crypto.randomUUID()}.${ext}`;
	const { error } = await supabase.storage.from(CASE_BUCKET).upload(path, file, {
		cacheControl: "3600",
		upsert: false
	});
	if (error) throw error;
	return path;
}
//#endregion
export { useAuth as a, uploadCaseMedia as i, getYouTubeThumbnail as n, parseMediaString as r, fetchCases as t };
