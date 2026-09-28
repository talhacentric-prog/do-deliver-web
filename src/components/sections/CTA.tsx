"use client";

import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="signin" className="relative overflow-hidden bg-[#050505] py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-red/50 to-transparent" />
        <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-red/20 blur-[110px]" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-red/10 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          {/* Boarding / dispatch ticket */}
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#141414] via-[#0c0c0c] to-[#1a0808]">
            {/* Perforation edge */}
            <div
              className="pointer-events-none absolute inset-y-0 left-[38%] hidden w-px border-l border-dashed border-white/15 lg:block"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-[38%] top-0 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#050505] lg:block"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-[38%] hidden h-5 w-5 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#050505] lg:block"
              aria-hidden
            />

            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              {/* Main panel */}
              <div className="relative p-7 sm:p-10 lg:p-12">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-red">
                  <Sparkles className="h-3.5 w-3.5" />
                  Onboarding Setup
                </div>

                <h2 className="mt-5 max-w-lg font-display text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-[0.98] tracking-tight text-white">
                  Your next order
                  <br />
                  deserves a{" "}
                  <span className="relative inline-block text-red">
                    faster exit
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-red"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                    />
                  </span>
                  .
                </h2>

                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/55">
                  Open a DoDeliver lane — COD that settles, tracking buyers trust, and dispatch
                  that doesn&apos;t stall your storefront.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact#book"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-red px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white"
                  >
                    <span className="relative z-10">Book Now</span>
                    <ArrowUpRight className="relative z-10 h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    <span className="absolute inset-0 translate-y-full bg-red-deep transition duration-300 group-hover:translate-y-0" />
                  </Link>
                  <Link
                    href="/#services"
                    className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white/80 transition hover:border-white/45 hover:text-white"
                  >
                    View Suite
                  </Link>
                </div>

                {/* Animated city route */}
                <div className="mt-10 hidden items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/35 sm:flex">
                  <span>KHI</span>
                  <svg width="120" height="12" viewBox="0 0 120 12" className="opacity-80" aria-hidden>
                    <path
                      className="route-dash"
                      d="M2 6 H118"
                      stroke="#e10600"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                  <span>LHE</span>
                  <svg width="80" height="12" viewBox="0 0 80 12" className="opacity-60" aria-hidden>
                    <path
                      className="route-dash"
                      d="M2 6 H78"
                      stroke="rgba(255,255,255,0.35)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                  <span>PK</span>
                </div>
              </div>

              {/* Stub panel */}
              <div className="relative border-t border-white/10 bg-white/[0.03] p-7 sm:p-10 lg:border-t-0 lg:p-12">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
                  Onboarding Setup
                </p>
                <ul className="mt-6 space-y-5">
                  {[
                    { k: "Setup", v: "Zero fees" },
                    { k: "Minimum", v: "None" },
                    { k: "Coverage", v: "Nationwide" },
                    { k: "Payout", v: "Scheduled COD" },
                  ].map((row) => (
                    <li
                      key={row.k}
                      className="flex items-center justify-between border-b border-white/10 pb-3"
                    >
                      <span className="text-[12px] uppercase tracking-[0.18em] text-white/40">
                        {row.k}
                      </span>
                      <span className="font-display text-sm font-bold text-white">{row.v}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-xl border border-red/30 bg-red/10 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-red">Gate open</p>
                  <p className="mt-1 font-display text-lg font-bold text-white">
                    Ship with <span className="text-red">Do</span>Deliver
                  </p>
                </div>

                {/* Fake barcode */}
                <div className="mt-8 flex h-10 items-end gap-[2px] opacity-40" aria-hidden>
                  {Array.from({ length: 28 }).map((_, i) => (
                    <span
                      key={i}
                      className="flex-1 rounded-[1px] bg-white"
                      style={{ height: `${30 + ((i * 17) % 70)}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
