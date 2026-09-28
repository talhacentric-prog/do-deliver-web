"use client";

import Reveal from "@/components/Reveal";
import { motion, useInView } from "framer-motion";
import {
  Bolt,
  ShieldCheck,
  MapPinned,
  Wallet,
  Headphones,
  Boxes,
  Gauge,
  Plug,
} from "lucide-react";
import { HUB_CITIES } from "@/lib/site";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 120, suffix: "+", label: "Cities Live" },
  { value: 50, suffix: "K+", label: "Monthly Parcels" },
  { value: 98, suffix: "%", label: "On-Time Rate" },
  { value: 6, suffix: "", label: "Hub Cities" },
];

const pillars = [
  {
    icon: Bolt,
    title: "Dispatch that doesn’t wait",
    desc: "Same-day pickup in major metros — your SLA starts when the order lands.",
  },
  {
    icon: Wallet,
    title: "COD that actually settles",
    desc: "Clear payback cycles. No chasing finance. Cash movement you can plan around.",
  },
  {
    icon: MapPinned,
    title: "Buyer-grade visibility",
    desc: "Live scans from hub to doorstep — you and your customer see the same truth.",
  },
  {
    icon: ShieldCheck,
    title: "Coverage when it matters",
    desc: "Insurance options and proof of delivery for parcels that can’t disappear.",
  },
  {
    icon: Plug,
    title: "Built for your stack",
    desc: "APIs and merchant tools that plug into stores without a six-week project.",
  },
  {
    icon: Headphones,
    title: "Operators, not scripts",
    desc: "Support that knows routes, riders, and COD — not a chatbot loop.",
  },
  {
    icon: Boxes,
    title: "Space to scale",
    desc: "Warehouse & fulfillment when volume outgrows your back room.",
  },
  {
    icon: Gauge,
    title: "Honest performance",
    desc: "SLA dashboards and seller insights that don’t sugarcoat returns.",
  },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1100;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(to * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export default function WhyUs() {
  const [hovered, setHovered] = useState(0);

  return (
    <section id="about" className="relative overflow-hidden bg-[#0a0a0a] text-white">
      {/* ── Vibrant company visibility band ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-red via-[#c40500] to-[#7a0300]">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0.12) 42%, transparent 42%), linear-gradient(-25deg, transparent 60%, rgba(0,0,0,0.15) 60%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-display text-[8rem] font-bold leading-none text-white/10 sm:block lg:text-[11rem]"
          aria-hidden
        >
          DD
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-14 lg:px-8">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
                  Company Visibility
                </p>
                <h2 className="mt-2 font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold tracking-tight">
                  <span className="text-white/90">Do</span>Deliver across Pakistan
                </h2>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                  Network Online
                </span>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-5 backdrop-blur-sm sm:px-5">
                  <p className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-none tracking-tight">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Hub visibility strip */}
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/20 pt-6 text-[13px] text-white/85">
              <span className="font-semibold uppercase tracking-[0.18em] text-white/60">
                Hubs
              </span>
              <span className="h-1 w-1 rounded-full bg-white/50" />
              {HUB_CITIES.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1.5"
                >
                  <MapPinned className="h-3.5 w-3.5" />
                  {city}
                </span>
              ))}
              <span className="text-[12px] text-white/60">
                Nationwide last-mile · Seller-first ops
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── VIP reasons ── */}
      <div className="relative py-20 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,720px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-red/60 to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red">
                Why Choose Us
              </p>
              <h3 className="mt-4 font-display text-[clamp(1.85rem,3.8vw,3rem)] font-bold leading-[1.08] tracking-tight">
                Built for sellers who measure trust in{" "}
                <span className="text-red">payouts</span>, not promises.
              </h3>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/55">
                DoDeliver is the courier layer operators keep — because visibility, COD, and
                dispatch stay sharp after the first booking.
              </p>

              {/* Featured active pillar preview */}
              <motion.div
                key={hovered}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mt-10 hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-6 lg:block"
              >
                <p className="font-mono text-[11px] tracking-wider text-red">
                  0{hovered + 1} / 0{pillars.length}
                </p>
                <p className="mt-3 font-display text-xl font-bold tracking-tight">
                  {pillars[hovered].title}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-white/55">
                  {pillars[hovered].desc}
                </p>
              </motion.div>
            </Reveal>

            <Reveal delay={0.08}>
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {pillars.map((p, i) => {
                  const Icon = p.icon;
                  const on = hovered === i;
                  return (
                    <li key={p.title}>
                      <button
                        type="button"
                        onMouseEnter={() => setHovered(i)}
                        onFocus={() => setHovered(i)}
                        className={`group flex w-full items-start gap-4 py-5 text-left transition sm:gap-5 ${
                          on ? "bg-white/[0.03]" : ""
                        }`}
                      >
                        <span
                          className={`mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl transition ${
                            on
                              ? "bg-red text-white"
                              : "border border-white/15 text-white/50 group-hover:border-red/50 group-hover:text-red"
                          }`}
                        >
                          <Icon className="h-4.5 w-4.5 h-[18px] w-[18px]" strokeWidth={1.85} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-baseline justify-between gap-3">
                            <span
                              className={`font-display text-[15px] font-semibold tracking-tight sm:text-base ${
                                on ? "text-white" : "text-white/70"
                              }`}
                            >
                              {p.title}
                            </span>
                            <span className="font-mono text-[10px] text-white/25">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                          </span>
                          <span
                            className={`mt-1 block text-[13px] leading-relaxed transition sm:text-[14px] ${
                              on ? "text-white/60" : "text-white/35"
                            }`}
                          >
                            {p.desc}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
