"use client";

import Reveal from "@/components/Reveal";
import type { TrackingEvent, TrackingResult } from "@/lib/tracking";
import { motion } from "framer-motion";
import {
  Bike,
  ClipboardCheck,
  MapPinned,
  Package,
  PackageCheck,
  RotateCcw,
  Search,
  Truck,
  Undo2,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import { FormEvent, useState } from "react";

function iconFor(status: string): LucideIcon {
  const s = status.toLowerCase();
  if (s.includes("book")) return ClipboardCheck;
  if (s.includes("origin")) return Warehouse;
  if (s.includes("out for dest")) return Truck;
  if (s.includes("arrived") && s.includes("dest")) return MapPinned;
  if (s.includes("out for deliv")) return Bike;
  if (s.includes("reattempt") || s.includes("attempt")) return RotateCcw;
  if (s.includes("return")) return Undo2;
  if (s.includes("deliver")) return PackageCheck;
  return Package;
}

function RouteTimeline({ events }: { events: TrackingEvent[] }) {
  return (
    <ol className="mt-6">
      {events.map((event, i) => {
        const Icon = iconFor(event.status);
        const last = i === events.length - 1;
        return (
          <li key={`${event.status}-${event.date}-${event.time}-${i}`} className="flex gap-4">
            <div className="flex w-11 shrink-0 flex-col items-center">
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.34, type: "spring", stiffness: 420, damping: 18 }}
                className={`relative z-10 grid h-11 w-11 place-items-center rounded-full ${
                  last ? "bg-red text-white shadow-[0_0_0_6px_rgba(225,6,0,0.14)]" : "bg-ink text-white"
                }`}
              >
                {last && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-red/25" aria-hidden />
                )}
                <Icon className="relative h-[18px] w-[18px]" strokeWidth={2} />
              </motion.span>
              {!last && (
                <motion.span
                  aria-hidden
                  className="my-1 w-[2px] origin-top rounded-full bg-red"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: i * 0.34 + 0.16, duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  style={{ minHeight: 28, flex: 1 }}
                />
              )}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.34 + 0.08, duration: 0.35 }}
              className={last ? "pt-2" : "pb-5 pt-2"}
            >
              <p className={`font-display text-[15px] font-semibold ${last ? "text-red" : "text-ink"}`}>
                {event.status}
              </p>
              <p className="mt-0.5 text-[13px] text-muted">
                {event.date}
                <span className="mx-1.5 text-red/50">·</span>
                {event.time}
              </p>
            </motion.div>
          </li>
        );
      })}
    </ol>
  );
}

export default function Tracking() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<TrackingResult | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const id = code.trim().toUpperCase();
    if (!id) {
      setError("Enter a tracking number to continue.");
      setResult(null);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/track?no=${encodeURIComponent(id)}`);
      const data = await res.json();
      if (!res.ok) {
        setResult(null);
        setError(data.error || "Tracking ID not found.");
        return;
      }
      setResult(data);
    } catch {
      setResult(null);
      setError("Tracking is unavailable right now. Try again in a moment.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="tracking" className="relative overflow-hidden bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red">
              Live Tracking
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight text-ink">
              Where is your parcel right now?
            </h2>
            <p className="mt-3 text-[15px] text-muted">
              Paste your DoDeliver tracking ID and follow every scan from pickup to doorstep.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-10 flex max-w-3xl flex-col gap-3 rounded-xl border border-line bg-background p-2 shadow-[0_12px_40px_rgba(18,18,18,0.05)] sm:flex-row sm:items-center"
          >
            <div className="flex flex-1 items-center gap-2 px-3">
              <Search className="h-4 w-4 shrink-0 text-muted" />
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="e.g. RWP11066095"
                className="w-full bg-transparent py-3 text-[15px] text-ink outline-none placeholder:text-muted/70"
                aria-label="Tracking number"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-red px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-red-deep disabled:opacity-70"
            >
              {loading ? "Tracking…" : "Track"}
            </button>
          </form>
          {error && <p className="mt-4 text-center text-[13px] text-red">{error}</p>}
        </Reveal>

        {result && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white shadow-[0_20px_50px_rgba(18,18,18,0.06)]">
            <div className="grid lg:grid-cols-[280px_1fr]">
              <aside className="border-b border-line lg:border-b-0 lg:border-r">
                <div className="bg-red px-5 py-3 text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-white">
                  Recipient
                </div>
                <div className="space-y-3 px-5 py-6 text-center text-[14px] text-ink/80">
                  {result.recipient.map((line, i) => (
                    <p key={`${line}-${i}`} className={i === 0 ? "font-display text-base font-bold text-ink" : ""}>
                      {line}
                    </p>
                  ))}
                </div>
              </aside>

              <div className="px-5 py-6 sm:px-8">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-ink sm:text-xl">
                  Tracking ID: {result.id}
                </h3>
                <p className="mt-2 text-[14px] text-muted">
                  Current status: <strong className="text-ink">{result.status}</strong>
                </p>
                <p className="mt-2 text-[14px] text-ink/75">
                  {[
                    result.service && `Service: ${result.service}`,
                    result.weight && `Weight: ${result.weight}`,
                    result.cod && `COD: ${result.cod}`,
                  ]
                    .filter(Boolean)
                    .join(" | ")}
                </p>
                {result.product && (
                  <p className="mt-2 text-[14px] text-ink/75">Product: {result.product}</p>
                )}

                <RouteTimeline key={result.id} events={result.events} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
