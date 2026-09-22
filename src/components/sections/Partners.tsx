"use client";

import Reveal from "@/components/Reveal";

const partners = [
  "TRAX",
  "Daraz Express",
  "M&P",
  "DoDeliver",
  "iDeliver",
  "TCS",
  "Leopards",
  "PostEx",
];

const brands = [
  "RAGE",
  "TECH BASE",
  "Makkah",
  "BIOGENESIS",
  "Shikarpur Foods",
  "REIKON & CO.",
  "Urban Wear",
  "Nexus Labs",
];

function LogoMark({ name }: { name: string }) {
  if (name === "DoDeliver") {
    return (
      <span className="font-display text-sm font-bold tracking-tight">
        <span className="text-red">Do</span>
        <span className="text-ink">Deliver</span>
      </span>
    );
  }
  return (
    <span className="font-display text-sm font-bold tracking-tight text-ink/65 transition group-hover:text-ink">
      {name}
    </span>
  );
}

function MarqueeRow({
  items,
  reverse,
  variant = "plain",
}: {
  items: string[];
  reverse?: boolean;
  variant?: "plain" | "tile";
}) {
  const loop = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent sm:w-24" />

      <div
        className={`flex w-max gap-4 ${reverse ? "animate-marquee-slow" : "animate-marquee"}`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {loop.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className={
              variant === "tile"
                ? "group flex h-[4.5rem] min-w-[156px] items-center justify-center rounded-2xl border border-line bg-white px-6 shadow-[0_1px_0_rgba(18,18,18,0.03)] transition hover:border-red/25 hover:shadow-[0_12px_30px_rgba(18,18,18,0.06)]"
                : "group flex h-12 min-w-[130px] items-center justify-center px-5"
            }
          >
            <LogoMark name={name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(80%,640px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-line to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Partners */}
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
            A curated partner stack — so your parcels ride the strongest routes nationwide.
          </p>
        </Reveal>

        <div className="mt-12 space-y-4">
          <MarqueeRow items={partners} />
          <MarqueeRow items={[...partners].reverse()} reverse />
        </div>

        {/* Brands band */}
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
                  From emerging labels to established houses — operators who need clarity at scale.
                </p>
              </div>
            </Reveal>

            <div className="relative mt-10">
              {/* Override fade colors for nested band */}
              <div className="relative overflow-hidden [&_.from-surface]:from-background [&_.to-transparent]:to-transparent">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-20" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-20" />
                <div className="flex w-max animate-marquee-slow gap-4">
                  {[...brands, ...brands, ...brands].map((name, i) => (
                    <div
                      key={`${name}-${i}`}
                      className="group flex h-[4.75rem] min-w-[168px] items-center justify-center rounded-2xl border border-line bg-white px-6 transition hover:-translate-y-0.5 hover:border-red/20 hover:shadow-[0_14px_36px_rgba(18,18,18,0.06)]"
                    >
                      <LogoMark name={name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-line pt-8 text-[12px] uppercase tracking-[0.2em] text-muted">
              <span>Retail</span>
              <span className="h-1 w-1 rounded-full bg-red/50" />
              <span>FMCG</span>
              <span className="h-1 w-1 rounded-full bg-red/50" />
              <span>Fashion</span>
              <span className="h-1 w-1 rounded-full bg-red/50" />
              <span>Tech</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
