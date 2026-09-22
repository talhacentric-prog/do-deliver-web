"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  title: string;
  breadcrumb: string;
};

export default function PageHero({ title, breadcrumb }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[55%] opacity-50"
        style={{
          background:
            "linear-gradient(145deg, transparent 38%, rgba(225,6,0,0.14) 38%, rgba(225,6,0,0.14) 41%, transparent 41%), linear-gradient(165deg, transparent 52%, rgba(255,255,255,0.05) 52%, rgba(255,255,255,0.05) 56%, transparent 56%), linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.03) 20%, rgba(255,255,255,0.03) 22%, transparent 22%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/80" />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-36 sm:pb-20 sm:pt-40 lg:px-8">
        <motion.p
          className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/55"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <span className="mx-2 text-white/30">/</span>
          {breadcrumb}
        </motion.p>
        <motion.h1
          className="mt-4 font-display text-[clamp(2.4rem,6vw,4rem)] font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          {title}
        </motion.h1>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 right-0 h-20 w-36 bg-red sm:h-28 sm:w-48"
        style={{ clipPath: "polygon(35% 100%, 100% 0, 100% 100%)" }}
        aria-hidden
      />
    </section>
  );
}
