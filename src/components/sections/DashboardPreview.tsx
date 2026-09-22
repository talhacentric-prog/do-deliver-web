"use client";

import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight, LayoutDashboard, Package, ShieldCheck, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const highlights = [
  {
    icon: Package,
    title: "Live shipments",
    desc: "Every scan, city to doorstep.",
  },
  {
    icon: Wallet,
    title: "COD ledger",
    desc: "Settlements you can schedule.",
  },
  {
    icon: ShieldCheck,
    title: "SLA clarity",
    desc: "Performance without the noise.",
  },
];

/**
 * Drop your screenshot here tomorrow:
 * public/merchant-portal.png
 */
const PORTAL_SRC = "/merchant-portal.png";

export default function DashboardPreview() {
  const [imgOk, setImgOk] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch(PORTAL_SRC, { method: "HEAD" })
      .then((res) => {
        if (alive) setImgOk(res.ok);
      })
      .catch(() => {
        if (alive) setImgOk(false);
      });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <section id="dashboard" className="relative overflow-hidden bg-surface py-20 sm:py-28">
      {/* Soft editorial atmosphere */}
      <div
        className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-red/[0.04] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#1a6bff]/[0.05] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-background px-3 py-1.5">
              <LayoutDashboard className="h-3.5 w-3.5 text-red" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">
                Merchant Portal
              </span>
            </div>

            <h2 className="mt-5 font-display text-[clamp(1.85rem,3.6vw,2.85rem)] font-bold leading-[1.08] tracking-tight text-ink">
              Your operations desk —{" "}
              <span className="text-red">clear</span>, not cluttered.
            </h2>

            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
              One refined portal for shipments, COD, and performance. Built for sellers who
              run volume without living in spreadsheets.
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <li key={h.title} className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-background text-red">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.85} />
                    </span>
                    <span>
                      <span className="block font-display text-[15px] font-semibold text-ink">
                        {h.title}
                      </span>
                      <span className="mt-0.5 block text-[13px] text-muted">{h.desc}</span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[12px] font-semibold uppercase tracking-wide text-white transition hover:bg-red"
            >
              Request portal access
              <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.div
              className="relative"
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Offset paper frame */}
              <div
                className="absolute -inset-3 translate-x-2 translate-y-3 rounded-[1.75rem] border border-line bg-background"
                aria-hidden
              />
              <div
                className="absolute -right-2 -top-2 h-24 w-24 rounded-full bg-red/10 blur-2xl"
                aria-hidden
              />

              {/* Browser chrome */}
              <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-white shadow-[0_30px_80px_rgba(18,18,18,0.08)]">
                <div className="flex items-center gap-2 border-b border-line bg-[#faf9f7] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <div className="ml-3 flex flex-1 items-center rounded-full border border-line bg-white px-3 py-1.5">
                    <span className="truncate text-[11px] text-muted">
                      portal.dodeliver.com.pk / dashboard
                    </span>
                  </div>
                </div>

                <div className="relative aspect-[16/10] bg-background">
                  {imgOk ? (
                    <Image
                      src={PORTAL_SRC}
                      alt="DoDeliver merchant portal dashboard"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  ) : (
                    <PortalPlaceholder />
                  )}

                  {/* Soft vignette */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"
                    aria-hidden
                  />
                </div>

                {/* Floating status chip */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 sm:left-5 sm:right-auto">
                  <div className="rounded-xl border border-line bg-white/95 px-4 py-2.5 shadow-[0_12px_30px_rgba(18,18,18,0.08)] backdrop-blur-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                      Live desk
                    </p>
                    <p className="mt-0.5 font-display text-sm font-bold text-ink">
                      Merchant control room
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PortalPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#f6f4f1] p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <div>
          <div className="h-2.5 w-24 rounded-full bg-ink/10" />
          <div className="mt-2 h-4 w-40 rounded-full bg-ink/15" />
        </div>
        <div className="flex gap-2">
          {["24h", "7d", "30d"].map((t, i) => (
            <span
              key={t}
              className={`rounded-md px-2.5 py-1 text-[10px] font-medium ${
                i === 0 ? "bg-red text-white" : "bg-white text-muted"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2.5 sm:grid-cols-6">
        {["#fee2e2", "#dcfce7", "#e0f2fe", "#fef3c7", "#f3e8ff", "#f1f5f9"].map((c, i) => (
          <div key={i} className="rounded-lg bg-white p-2.5 shadow-sm" style={{ borderTop: `2px solid ${c}` }}>
            <div className="h-1.5 w-10 rounded-full bg-ink/10" />
            <div className="mt-2 h-5 w-8 rounded bg-ink/15" />
          </div>
        ))}
      </div>

      <div className="mt-4 grid flex-1 gap-3 sm:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="h-2 w-20 rounded-full bg-ink/10" />
          <svg viewBox="0 0 220 70" className="mt-4 h-16 w-full" aria-hidden>
            <defs>
              <linearGradient id="portalArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e10600" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#e10600" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 50 L30 42 L55 48 L85 30 L115 36 L145 18 L175 26 L220 12 L220 70 L0 70 Z"
              fill="url(#portalArea)"
            />
            <path
              d="M0 50 L30 42 L55 48 L85 30 L115 36 L145 18 L175 26 L220 12"
              fill="none"
              stroke="#e10600"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="grid grid-rows-2 gap-3">
          <div className="rounded-xl bg-white p-4 shadow-sm" />
          <div className="rounded-xl bg-white p-4 shadow-sm" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="rounded-full border border-dashed border-ink/20 bg-white/80 px-5 py-2.5 text-center backdrop-blur-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Portal image slot
          </p>
          <p className="mt-1 font-mono text-[12px] text-ink/50">public/merchant-portal.png</p>
        </div>
      </div>
    </div>
  );
}
