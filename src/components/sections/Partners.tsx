"use client";

import Reveal from "@/components/Reveal";
import { clients, couriers } from "@/lib/clients";

function Marquee({
  items,
  reverse,
}: {
  items: readonly { name: string; src: string }[];
  reverse?: boolean;
}) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent sm:w-24" />
      <div
        className={`flex w-max gap-4 ${reverse ? "animate-marquee-slow" : "animate-marquee"}`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {loop.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex h-[5.25rem] w-[200px] items-center justify-center rounded-2xl border border-line bg-white px-5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.name}
              className="max-h-16 max-w-[168px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Partners() {
  const clientLoop = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(80%,640px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-line to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red">
            Trusted Network
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.65rem,3.2vw,2.5rem)] font-bold tracking-tight text-ink">
            We move through Pakistan&apos;s{" "}
            <span className="relative inline-block">
              top courier lanes
              <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-red/80" />
            </span>
          </h2>
          <p className="mt-4 text-[14px] text-muted">
            Partner courier logos on the lanes your parcels actually ride.
          </p>
        </Reveal>

        <div className="mt-12 space-y-4">
          <Marquee items={couriers} />
          <Marquee items={[...couriers].reverse()} reverse />
        </div>

        <div className="relative mt-20 overflow-hidden rounded-[1.75rem] border border-line bg-background">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-red/[0.05] blur-3xl"
            aria-hidden
          />
          <div className="relative px-5 py-12 sm:px-10 sm:py-14 lg:px-12">
            <Reveal>
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                <div className="max-w-xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-muted">
                    Trusted Clients
                  </p>
                  <h3 className="mt-3 font-display text-[clamp(1.5rem,3vw,2.2rem)] font-bold tracking-tight text-ink">
                    Brands that ship with{" "}
                    <span className="text-red">Do</span>Deliver
                  </h3>
                </div>
                <p className="max-w-xs text-[13px] leading-relaxed text-muted sm:text-right">
                  Client logos from the DoDeliver network — retail, fashion, pharmacy, and commerce.
                </p>
              </div>
            </Reveal>

            <div className="relative mt-10 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-20" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-20" />
              <div className="flex w-max animate-marquee-slow gap-4">
                {clientLoop.map((item, i) => (
                  <div
                    key={`${item.name}-${i}`}
                    className="flex h-[4.75rem] w-[176px] items-center justify-center rounded-2xl border border-line bg-white px-4"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.name}
                      className="max-h-12 max-w-[140px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-line pt-8 text-[12px] uppercase tracking-[0.2em] text-muted">
              <span>Retail</span>
              <span className="h-1 w-1 rounded-full bg-red/50" />
              <span>FMCG</span>
              <span className="h-1 w-1 rounded-full bg-red/50" />
              <span>Fashion</span>
              <span className="h-1 w-1 rounded-full bg-red/50" />
              <span>Pharmacy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
