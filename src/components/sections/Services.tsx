"use client";

import Reveal from "@/components/Reveal";
import { AnimatePresence, motion } from "framer-motion";
import {
  Gift,
  FileText,
  Bike,
  Plane,
  Package,
  Warehouse,
  ShoppingBag,
  Ship,
  Truck,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Service = {
  title: string;
  blurb: string;
  tag: string;
  href: string;
  image: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Document Deliveries",
    blurb: "Same-day sealed runs for contracts, bank papers, and board-room originals.",
    tag: "Priority Lane",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1600&q=80",
    icon: FileText,
  },
  {
    title: "Gift Deliveries",
    blurb: "White-glove moments — baskets, hampers, and celebration drops with care.",
    tag: "Concierge",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1600&q=80",
    icon: Gift,
  },
  {
    title: "Rider Management",
    blurb: "Fleet visibility, live assignment, and SLA control across your city network.",
    tag: "Ops Control",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    icon: Bike,
  },
  {
    title: "COD Services",
    blurb: "Cash collection that settles clean — reconciliation without the chase.",
    tag: "Cash Flow",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80",
    icon: Plane,
  },
  {
    title: "Non-COD Services",
    blurb: "Prepaid & prepaid-plus lanes for brands that move volume with precision.",
    tag: "Volume",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1600&q=80",
    icon: Package,
  },
  {
    title: "Warehouse Facility",
    blurb: "Secure staging, pick-pack, and dispatch from space built for scale.",
    tag: "Fulfillment",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    icon: Warehouse,
  },
  {
    title: "E-Commerce Logistics",
    blurb: "Store-to-door orchestration for sellers who refuse missed SLAs.",
    tag: "Commerce",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
    icon: ShoppingBag,
  },
  {
    title: "Wholesale Transport",
    blurb: "Bulk lanes for distributors — scheduled, insured, and route-optimized.",
    tag: "B2B Freight",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=80",
    icon: Ship,
  },
  {
    title: "Full Truck Load",
    blurb: "Dedicated FTL capacity when your cargo owns the entire journey.",
    tag: "Dedicated",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc1da5d9a?auto=format&fit=crop&w=1600&q=80",
    icon: Truck,
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];
  const Icon = current.icon;

  return (
    <section id="services" className="relative overflow-hidden bg-[#080808] py-20 text-white sm:py-28">
      {/* Atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.09) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[520px] w-[520px] rounded-full bg-red/15 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-[360px] w-[360px] rounded-full bg-red/10 blur-[100px]"
        aria-hidden
      />

      {/* Giant watermark */}
      <p
        className="pointer-events-none absolute -right-4 top-16 select-none font-display text-[clamp(5rem,18vw,14rem)] font-bold leading-none tracking-tighter text-white/[0.035] sm:top-10"
        aria-hidden
      >
        SUITE
      </p>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red">
                The DoDeliver Suite
              </p>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-tight">
                Logistics, curated
                <span className="text-red">.</span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/55">
                Not a grid of services — a private dispatch suite. Hover a lane to unlock the brief.
              </p>
            </div>
            <div className="flex items-center gap-4 text-[12px] uppercase tracking-[0.2em] text-white/40">
              <span className="font-mono text-red">{String(active + 1).padStart(2, "0")}</span>
              <span className="h-px w-10 bg-white/20" />
              <span className="font-mono">{String(services.length).padStart(2, "0")}</span>
              <span className="hidden sm:inline">Lanes</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.35fr] lg:gap-12">
          {/* Index list */}
          <Reveal>
            <ul className="relative space-y-1" role="listbox" aria-label="Services">
              {/* Active rail */}
              <motion.span
                className="absolute left-0 top-0 hidden h-12 w-[2px] bg-red lg:block"
                animate={{ y: active * 56 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                aria-hidden
              />

              {services.map((service, i) => {
                const isActive = i === active;
                return (
                  <li key={service.title}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={`group flex w-full items-center gap-4 rounded-xl px-3 py-3 text-left transition lg:pl-5 ${
                        isActive ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"
                      }`}
                    >
                      <span
                        className={`font-mono text-[11px] tracking-wider transition ${
                          isActive ? "text-red" : "text-white/25 group-hover:text-white/45"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`flex-1 font-display text-[15px] font-semibold tracking-tight transition sm:text-base ${
                          isActive ? "text-white" : "text-white/45 group-hover:text-white/75"
                        }`}
                      >
                        {service.title}
                      </span>
                      <span
                        className={`hidden text-[10px] uppercase tracking-[0.18em] sm:inline ${
                          isActive ? "text-red" : "text-white/20"
                        }`}
                      >
                        {service.tag}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Cinematic stage */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-ink">
              <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:min-h-[520px] lg:aspect-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.title}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      priority={active === 0}
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

                {/* Diagonal VIP cut */}
                <div
                  className="pointer-events-none absolute bottom-0 right-0 h-28 w-40 bg-red"
                  style={{ clipPath: "polygon(40% 100%, 100% 0, 100% 100%)" }}
                  aria-hidden
                />

                {/* Floating meta */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.title + "-copy"}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-red text-white">
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
                          {current.tag}
                        </span>
                      </div>

                      <h3 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold tracking-tight">
                        {current.title}
                      </h3>
                      <p className="mt-2 max-w-md text-[14px] leading-relaxed text-white/65 sm:text-[15px]">
                        {current.blurb}
                      </p>

                      <Link
                        href={current.href}
                        className="group mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[12px] font-semibold uppercase tracking-wide text-ink transition hover:bg-red hover:text-white"
                      >
                        Brief this lane
                        <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Top suite badge */}
                <div className="absolute left-5 top-5 flex items-center gap-2 sm:left-8 sm:top-8">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red" />
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">
                    Suite {String(active + 1).padStart(2, "0")} Live
                  </span>
                </div>

                {/* Animated route line accent */}
                <svg
                  className="pointer-events-none absolute right-6 top-6 hidden h-16 w-28 opacity-70 sm:block"
                  viewBox="0 0 112 64"
                  fill="none"
                  aria-hidden
                >
                  <path
                    className="route-dash"
                    d="M4 48 C28 48, 36 16, 56 16 S84 52, 108 28"
                    stroke="#e10600"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="4" cy="48" r="3" fill="#e10600" />
                  <circle cx="108" cy="28" r="3" fill="white" />
                </svg>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Mobile hint / quick chips */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {services.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-medium tracking-wide transition ${
                i === active
                  ? "bg-red text-white"
                  : "border border-white/15 text-white/50"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
