"use client";

import Reveal from "@/components/Reveal";
import { ADDRESS_LINES, MAP_EMBED, MAP_LINK } from "@/lib/site";
import { motion } from "framer-motion";
import { ExternalLink, Navigation, Radio } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 sm:py-24">
      {/* Atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-red/20 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-red">
                <Radio className="h-3.5 w-3.5" />
                Live HQ Signal
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.6rem,3.2vw,2.4rem)] font-bold tracking-tight text-white">
                Head office, locked on map
              </h2>
              <p className="mt-2 max-w-md text-[14px] text-white/55">
                {ADDRESS_LINES[0]}, {ADDRESS_LINES[1]}, {ADDRESS_LINES[2]}.
              </p>
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-wide text-white transition hover:border-red hover:bg-red"
            >
              Navigate
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
            {/* Map canvas */}
            <div className="relative h-[420px] sm:h-[500px] lg:h-[560px]">
              <iframe
                title="DoDeliver Head Office — KMCHS Alamgir Road, Karachi"
                src={MAP_EMBED}
                className="h-full w-full scale-[1.02] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              {/* Dim edges — spotlight focus on HQ */}
              <div
                className="hq-spotlight pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 50% 46%, transparent 8%, rgba(8,8,12,0.15) 22%, rgba(8,8,12,0.55) 48%, rgba(8,8,12,0.82) 100%)",
                }}
                aria-hidden
              />

              {/* Animated HQ beacon — centered over typical embed marker */}
              <div
                className="pointer-events-none absolute left-1/2 top-[46%] z-10 h-0 w-0"
                aria-hidden
              >
                {/* Scan cone */}
                <div className="hq-scan absolute left-0 top-0 h-56 w-56 -translate-x-1/2 -translate-y-1/2 opacity-40">
                  <div
                    className="h-full w-full rounded-full"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0deg, rgba(225,6,0,0.35) 40deg, transparent 70deg)",
                    }}
                  />
                </div>

                {/* Orbit ring */}
                <svg
                  className="absolute left-0 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2"
                  viewBox="0 0 160 160"
                  fill="none"
                >
                  <circle
                    cx="80"
                    cy="80"
                    r="68"
                    stroke="rgba(225,6,0,0.45)"
                    strokeWidth="1.5"
                    className="hq-orbit"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="48"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    strokeDasharray="2 8"
                  />
                </svg>

                {/* Pulse rings */}
                <span className="hq-radar absolute left-0 top-0 h-36 w-36 rounded-full border-2 border-red" />
                <span className="hq-radar hq-radar-delay absolute left-0 top-0 h-36 w-36 rounded-full border-2 border-red" />
                <span className="hq-radar hq-radar-delay-2 absolute left-0 top-0 h-36 w-36 rounded-full border border-red/70" />

                {/* Core pin */}
                <div className="hq-pin absolute left-0 top-0">
                  <svg width="44" height="56" viewBox="0 0 44 56" fill="none">
                    <path
                      d="M22 0C10.4 0 1 9.2 1 20.6c0 14.5 18.4 33.2 20 34.6a1.4 1.4 0 0 0 2 0c1.6-1.4 20-20.1 20-34.6C43 9.2 33.6 0 22 0Z"
                      fill="#e10600"
                    />
                    <circle cx="22" cy="20" r="8" fill="white" />
                    <circle cx="22" cy="20" r="3.5" fill="#e10600" />
                  </svg>
                  {/* Soft glow under pin */}
                  <span className="absolute left-1/2 top-[92%] h-2 w-6 -translate-x-1/2 rounded-full bg-red/50 blur-[3px]" />
                </div>
              </div>

              {/* Floating HUD card */}
              <motion.div
                className="absolute bottom-5 left-4 right-4 z-20 sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.6 }}
              >
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-ink/80 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-red" />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50">
                      Head Office · Active
                    </span>
                  </div>
                  <div className="px-4 py-4">
                    <p className="font-display text-lg font-bold text-white">
                      <span className="text-red">Do</span>Deliver Karachi Hub
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-white/60">
                      {ADDRESS_LINES[0]}
                      <br />
                      {ADDRESS_LINES[1]}
                      <br />
                      {ADDRESS_LINES[2]}, Pakistan
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <a
                        href={MAP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-red px-4 py-2.5 text-[12px] font-semibold uppercase tracking-wide text-white transition hover:bg-red-deep"
                      >
                        <Navigation className="h-3.5 w-3.5" />
                        Get Directions
                      </a>
                      <div className="hidden rounded-xl border border-white/10 px-3 py-2 text-center sm:block">
                        <p className="text-[9px] uppercase tracking-wider text-white/40">Zone</p>
                        <p className="font-display text-sm font-bold text-white">KMCHS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Corner coordinates tick */}
              <div className="pointer-events-none absolute right-4 top-4 hidden rounded-lg border border-white/10 bg-ink/60 px-3 py-2 font-mono text-[10px] tracking-wider text-white/45 backdrop-blur-sm sm:block">
                KMCHS · Karachi
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
