"use client";

import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "./socialLinks";

const rail = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#tracking", label: "Track" },
  { href: "/contact", label: "Contact" },
  { href: "/#dashboard", label: "Portal" },
];

const ticker = [
  "KARACHI HUB",
  "LAHORE OFFICE",
  "NATIONWIDE LAST-MILE",
  "COD SETTLEMENT",
  "LIVE TRACKING",
  "MERCHANT FIRST",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">
      {/* Marquee identity strip */}
      <div className="border-y border-white/10 bg-ink py-3 overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...ticker, ...ticker].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-10 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/40"
            >
              {item}
              <span className="inline-block h-1 w-1 rotate-45 bg-red" />
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-16 lg:px-8 lg:pt-20">
        {/* Oversized brand architecture */}
        <div className="relative border-b border-white/10 pb-12">
          <p
            className="pointer-events-none select-none font-display text-[clamp(3.5rem,14vw,9rem)] font-bold leading-[0.85] tracking-[-0.04em]"
            aria-hidden
          >
            <span className="text-red">Do</span>
            <span className="text-white">Deliver</span>
          </p>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/50">
            Courier infrastructure for Pakistan&apos;s sellers — speed you feel, COD you can
            schedule, visibility your buyers trust.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[12px] font-medium text-white/70 transition hover:border-red hover:bg-red hover:text-white"
                aria-label={label}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Compact command grid — not 4 boring columns */}
        <div className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr_1fr]">
          {/* Nav rail with indices */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
              Navigate
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-1">
              {rail.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 border-b border-transparent py-2.5 text-[14px] text-white/65 transition hover:border-white/10 hover:text-white"
                  >
                    <span className="font-mono text-[10px] text-red/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact console */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red">
              Dispatch desk
            </p>
            <ul className="mt-5 space-y-4 text-[14px] text-white/70">
              <li>
                <a href="tel:03111363333" className="flex items-start gap-3 transition hover:text-white">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-red" />
                  <span>
                    03 111 363 333
                    <br />
                    <span className="text-white/40">0345 111 3633</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@dodeliver.com.pk"
                  className="flex items-start gap-3 transition hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-red" />
                  info@dodeliver.com.pk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red" />
                <span>
                  29C Old Clifton, Block 5
                  <br />
                  Karachi · Lahore
                </span>
              </li>
            </ul>
          </div>

          {/* Manifesto / hours card */}
          <div className="flex flex-col justify-between rounded-2xl border border-red/25 bg-gradient-to-br from-red/15 to-transparent p-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red">
                Always moving
              </p>
              <p className="mt-3 font-display text-2xl font-bold tracking-tight">
                Support that knows the route.
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                Talk to operators — not scripts. From booking to COD, we stay on the lane with you.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[12px] font-semibold uppercase tracking-wide text-ink transition hover:bg-red hover:text-white"
            >
              Open Contact
              <ArrowUp className="h-3.5 w-3.5 rotate-45" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 text-[13px] text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} DoDeliver · All rights reserved</p>
          <div className="flex items-center gap-5">
            <Link href="/contact" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Terms
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/60 transition hover:border-red hover:bg-red hover:text-white"
              aria-label="Back to top"
            >
              Top
              <ArrowUp className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
