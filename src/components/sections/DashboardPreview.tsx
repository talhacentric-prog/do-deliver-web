"use client";

import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight, LayoutDashboard, Package, ShieldCheck, Wallet } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

export default function DashboardPreview() {
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
                  <LiveDesk />

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

const seedFeed = [
  { id: "DD-18420", city: "Karachi", status: "Out for delivery" },
  { id: "DD-18419", city: "Lahore", status: "Hub scan" },
  { id: "DD-18418", city: "Islamabad", status: "Picked up" },
  { id: "DD-18417", city: "Multan", status: "In transit" },
];

function LiveDesk() {
  const [tick, setTick] = useState(0);
  const [feed, setFeed] = useState(seedFeed);
  const seq = useRef(18421);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTick((n) => n + 1);
      setFeed((rows) => {
        const nextId = seq.current++;
        const cities = ["Karachi", "Lahore", "Rawalpindi", "Islamabad", "Faisalabad", "Multan"];
        const statuses = ["Hub scan", "Out for delivery", "Picked up", "COD collected"];
        const row = {
          id: `DD-${nextId}`,
          city: cities[nextId % cities.length],
          status: statuses[nextId % statuses.length],
        };
        return [row, ...rows].slice(0, 4);
      });
    }, 2200);
    return () => window.clearInterval(timer);
  }, []);

  const stats = [
    { label: "Live", value: 128 + (tick % 7) },
    { label: "COD", value: `${42 + (tick % 5)}k` },
    { label: "Hubs", value: "6" },
    { label: "On time", value: "98%" },
  ];

  return (
    <div className="absolute inset-0 flex flex-col bg-[#f6f4f1] p-4 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
            Merchant desk
          </p>
          <p className="font-display text-sm font-bold text-ink">Live shipments</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-red">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red" />
          </span>
          Updating
        </span>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg bg-white px-2 py-2 shadow-sm sm:px-3">
            <p className="text-[9px] uppercase tracking-wider text-muted">{stat.label}</p>
            <p className="font-display text-sm font-bold text-ink sm:text-base">{stat.value}</p>
          </div>
        ))}
      </div>

      <ul className="mt-3 flex-1 space-y-1.5 overflow-hidden">
        {feed.map((row) => (
          <li
            key={row.id}
            className="flex items-center justify-between gap-2 rounded-lg bg-white px-3 py-2 text-[12px] shadow-sm"
          >
            <span className="font-mono text-[11px] text-ink">{row.id}</span>
            <span className="text-muted">{row.city}</span>
            <span className="text-red">{row.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
