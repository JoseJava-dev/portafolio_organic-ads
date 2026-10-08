import { supabase } from "@/integrations/supabase/client";

export type MediaItem = {
  url: string;
  type: "image" | "video";
};

export type CaseStudy = {
  id: string;
  title: string;
  client: string | null;
  description: string | null;
  media_type: string;
  media_url: string | null;
  tags: string[];
  sort_order: number;
  published: boolean;
  created_at: string;
  updated_at: string;
};

export type ResolvedMediaItem = {
  url: string;
  displayUrl: string;
  type: "image" | "video";
};

export type ResolvedCase = CaseStudy & {
  displayUrl: string | null;
  mediaList: ResolvedMediaItem[];
};

export const CASE_BUCKET = "case-media";

export function getYouTubeId(url: string | null): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/i);
  return match ? match[1] : null;
}

export function getYouTubeEmbedUrl(url: string | null): string | null {
  const id = getYouTubeId(url);
  return id ? `https://www.youtube.com/embed/${id}` : null;
}

export function getYouTubeThumbnail(url: string | null): string | null {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

export async function resolveUrl(mediaUrl: string | null): Promise<string | null> {
  if (!mediaUrl) return null;
  if (/^https?:\/\//i.test(mediaUrl)) return mediaUrl;
  const { data } = await supabase.storage
    .from(CASE_BUCKET)
    .createSignedUrl(mediaUrl, 60 * 60 * 24 * 7);
  return data?.signedUrl ?? null;
}

export function parseMediaString(raw: string | null, fallbackType = "image"): MediaItem[] {
  if (!raw || !raw.trim()) return [];
  const trimmed = raw.trim();
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return parsed.map((item: any) => ({
          url: typeof item === "string" ? item : item.url,
          type: (typeof item === "object" && item.type)
            ? item.type
            : (typeof item === "string" && (item.includes("youtube.com") || item.includes("youtu.be") || /\.(mp4|webm|ogg)$/i.test(item)) ? "video" : "image")
        }));
      }
    } catch {
      // ignore
    }
  }
  const isVideo = fallbackType === "video" || trimmed.includes("youtube.com") || trimmed.includes("youtu.be") || /\.(mp4|webm|ogg)$/i.test(trimmed);
  return [{ url: trimmed, type: isVideo ? "video" : "image" }];
}

export async function fetchCases(includeUnpublished = false): Promise<ResolvedCase[]> {
  let query = supabase
    .from("case_studies")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  if (!includeUnpublished) query = query.eq("published", true);

  const { data, error } = await query;
  if (error) throw error;

  return Promise.all(
    (data ?? []).map(async (row) => {
      const caseItem = row as CaseStudy;
      const rawList = parseMediaString(caseItem.media_url, caseItem.media_type);
      const mediaList: ResolvedMediaItem[] = await Promise.all(
        rawList.map(async (m) => ({
          url: m.url,
          displayUrl: (await resolveUrl(m.url)) ?? m.url,
          type: m.type,
        }))
      );
      const displayUrl = mediaList.length > 0 ? mediaList[0].displayUrl : await resolveUrl(caseItem.media_url);

      return {
        ...caseItem,
        displayUrl,
        mediaList,
      };
    }),
  );
}

export async function uploadCaseMedia(file: File): Promise<string> {
  const ext = file.name.split(".").pop() ?? "bin";
  const path = `${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from(CASE_BUCKET).upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });
  if (error) throw error;
  return path;
}
