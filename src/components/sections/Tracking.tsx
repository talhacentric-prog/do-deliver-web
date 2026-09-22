"use client";

import Reveal from "@/components/Reveal";
import { Search } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Tracking() {
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!code.trim()) {
      setMsg("Enter a tracking number to continue.");
      return;
    }
    setMsg(`Looking up ${code.trim().toUpperCase()}… demo mode — connect your API next.`);
  }

  return (
    <section id="tracking" className="relative overflow-hidden bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red">
            Live Tracking
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight text-ink">
            Where is your parcel right now?
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            Paste your DoDeliver tracking ID and follow every scan from pickup to doorstep.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            className="mt-10 flex flex-col gap-3 rounded-xl border border-line bg-background p-2 shadow-[0_12px_40px_rgba(18,18,18,0.05)] sm:flex-row sm:items-center"
          >
            <div className="flex flex-1 items-center gap-2 px-3">
              <Search className="h-4 w-4 shrink-0 text-muted" />
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="e.g. DD-98451203"
                className="w-full bg-transparent py-3 text-[15px] text-ink outline-none placeholder:text-muted/70"
                aria-label="Tracking number"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-red px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-red-deep"
            >
              Track
            </button>
          </form>
          {msg && <p className="mt-4 text-[13px] text-muted">{msg}</p>}
        </Reveal>
      </div>
    </section>
  );
}
