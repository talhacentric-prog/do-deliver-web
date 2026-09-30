const SOURCE = "https://dodeliver.com.pk/tracking-detail/";

export type TrackingEvent = {
  status: string;
  date: string;
  time: string;
};

export type TrackingResult = {
  id: string;
  status: string;
  service: string;
  weight: string;
  cod: string;
  product: string;
  recipient: string[];
  events: TrackingEvent[];
};

function decode(html: string) {
  return html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#0*39;|&apos;/gi, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/\s+/g, " ")
    .trim();
}

export function parseTrackingPage(html: string, id: string): TrackingResult | null {
  const start = html.indexOf('class="track-table"');
  if (start < 0) return null;
  const slice = html.slice(start, start + 12000);
  if (/Tracking ID not found/i.test(slice)) return null;

  const recipientBlock = slice.match(/class="pad-1 mar-t-3">([\s\S]*?)<\/div>/i)?.[1] ?? "";
  const recipient = [...recipientBlock.matchAll(/<p>([\s\S]*?)<\/p>/gi)]
    .map((m) => decode(m[1]))
    .filter(Boolean);

  const status = decode(slice.match(/Current status:\s*<strong>([\s\S]*?)<\/strong>/i)?.[1] ?? "");
  const meta = decode(slice.match(/<p>\s*Service:([\s\S]*?)<\/p>/i)?.[1] ?? "");
  const service = decode(meta.split("|")[0]?.replace(/^Service:\s*/i, "") ?? "");
  const weight = meta.match(/Weight:\s*([^|]+)/i)?.[1]?.trim() ?? "";
  const cod = meta.match(/COD:\s*([^|]+)/i)?.[1]?.trim() ?? "";
  const product = decode(slice.match(/Product:\s*([^<]+)/i)?.[1] ?? "");

  const events = [...slice.matchAll(/<tr>\s*<td>([\s\S]*?)<\/td>\s*<td>([\s\S]*?)<\/td>\s*<td>([\s\S]*?)<\/td>\s*<\/tr>/gi)]
    .map((m) => ({
      status: decode(m[1]),
      date: decode(m[2]),
      time: decode(m[3]),
    }))
    .filter((row) => row.status && row.status !== "Status");

  if (!status && events.length === 0 && recipient.length === 0) return null;

  return { id, status, service, weight, cod, product, recipient, events };
}

export async function lookupTracking(id: string): Promise<TrackingResult | null> {
  const url = `${SOURCE}?track_no=${encodeURIComponent(id)}`;
  const res = await fetch(url, {
    cache: "no-store",
    headers: { "User-Agent": "DoDeliverWeb/1.0" },
  });
  if (!res.ok) return null;
  return parseTrackingPage(await res.text(), id);
}
