"use client";

import { motion } from "framer-motion";
import { ArrowRight, PackageSearch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink text-white">
      {/* Full-bleed visual plane */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        {/* Low-poly geometric edge */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[42%] opacity-40"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, rgba(225,6,0,0.12) 40%, rgba(225,6,0,0.12) 42%, transparent 42%), linear-gradient(160deg, transparent 55%, rgba(255,255,255,0.04) 55%, rgba(255,255,255,0.04) 58%, transparent 58%)",
          }}
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-5 pb-20 pt-36 sm:justify-center sm:pb-28 sm:pt-40 lg:px-8">
        <motion.p
          className="font-display text-[clamp(3.5rem,14vw,9.5rem)] font-bold leading-[0.85] tracking-[-0.04em]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-red">Do</span>Deliver
        </motion.p>

        <motion.h1
          className="mt-6 max-w-xl font-display text-[clamp(1.6rem,3.4vw,2.65rem)] font-semibold leading-[1.15] tracking-tight text-white"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Logistics that move as fast as your orders.
        </motion.h1>

        <motion.p
          className="mt-4 max-w-md text-[15px] leading-relaxed text-white/65 sm:text-base"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
        >
          Nationwide courier, COD, and merchant tools — built for Pakistan&apos;s growing
          sellers who refuse delayed payouts.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.4 }}
        >
          <Link
            href="#signin"
            className="inline-flex items-center gap-2 rounded-md bg-red px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-red-deep"
          >
            Start Shipping
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#tracking"
            className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/10"
          >
            <PackageSearch className="h-4 w-4" />
            Track Parcel
          </Link>
        </motion.div>
      </div>

      {/* Red geometric corner accent */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-24 w-40 bg-red sm:h-32 sm:w-56"
        style={{ clipPath: "polygon(40% 100%, 100% 0, 100% 100%)" }}
        aria-hidden
      />
    </section>
  );
}
