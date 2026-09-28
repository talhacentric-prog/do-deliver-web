"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import Logo from "./Logo";
import { socialLinks } from "./socialLinks";

const nav = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#tracking", label: "Track" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("/");
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useEffect(() => {
    setActive(pathname === "/contact" ? "/contact" : "/");
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 48);
  });

  function isActive(href: string) {
    if (href === "/contact") return active === "/contact";
    if (href === "/") return active === "/";
    return active === href;
  }
  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        {/* Live network strip */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              initial={{ y: -28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -28, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="pointer-events-auto border-b border-white/10 bg-ink/80 backdrop-blur-md"
            >
              <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-1.5 text-[11px] text-white/55 lg:px-8">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red" />
                  </span>
                  <span className="tracking-[0.18em] uppercase">
                    Network live · Karachi hub
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={PHONE_HREF}
                    className="hidden items-center gap-1.5 transition hover:text-white sm:inline-flex"
                  >
                    <Phone className="h-3 w-3 text-red" />
                    {PHONE_DISPLAY}
                  </a>
                  <div className="flex items-center gap-1.5">
                    {socialLinks.map(({ href, label, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="grid h-6 w-6 place-items-center rounded-full bg-red text-white transition hover:bg-red-deep"
                      >
                        <Icon className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating command bar */}
        <div
          className={`pointer-events-auto px-3 transition-all duration-500 sm:px-5 ${
            scrolled ? "pt-3" : "pt-2"
          }`}
        >
          <div
            className={`mx-auto flex max-w-7xl items-center gap-3 transition-all duration-500 ${
              scrolled
                ? "rounded-2xl border border-white/10 bg-ink/92 px-3 py-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:px-4"
                : "rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2.5 backdrop-blur-md lg:px-4"
            }`}
          >
            {/* Brand + dispatch route */}
            <div className="flex min-w-0 items-center gap-3">
              <Logo />
              <div className="hidden h-8 w-px bg-white/15 md:block" />
              <div className="hidden flex-col text-white/45 md:flex">
                <span className="text-[9px] font-semibold uppercase tracking-[0.22em]">
                  Dispatch
                </span>
                <svg width="72" height="10" viewBox="0 0 72 10" className="mt-0.5" aria-hidden>
                  <path
                    className="route-dash"
                    d="M2 5 H70"
                    stroke="#e10600"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Island nav pill */}
            <nav className="mx-auto hidden items-center gap-0.5 rounded-full bg-white/10 p-1 lg:flex">
              {nav.map((item) => {
                const itemActive = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setActive(item.href)}
                    className={`relative rounded-full px-4 py-2 text-[13px] font-medium transition ${
                      itemActive ? "text-ink" : "text-white/75 hover:text-white"
                    }`}
                  >
                    {itemActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="ml-auto flex items-center gap-2">
              <Link
                href="/contact#book"
                className="group relative inline-flex overflow-hidden rounded-full bg-red px-4 py-2.5 text-[12px] font-semibold uppercase tracking-wide text-white sm:px-5"
              >
                <span className="relative z-10 inline-flex items-center gap-1">
                  Book Now
                  <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="absolute inset-0 translate-y-full bg-red-deep transition duration-300 group-hover:translate-y-0" />
              </Link>
              <a
                href="https://portal.dodeliver.com.pk/login"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-[12px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:inline-flex"
              >
                Sign In
              </a>

              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white lg:hidden"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-ink text-white lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActive(item.href);
                      setOpen(false);
                    }}
                    className="group flex items-baseline justify-between border-b border-white/10 py-4"
                  >
                    <span className="font-display text-3xl font-bold tracking-tight transition group-hover:text-red">
                      {item.label}
                    </span>
                    <span className="text-[11px] tracking-[0.2em] text-white/30">
                      0{i + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="space-y-3 px-6 pb-10">
              <Link
                href="/contact#book"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-red py-3.5 text-[13px] font-semibold uppercase tracking-wide"
              >
                Book Now
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 text-[13px] text-white/55"
              >
                <Phone className="h-3.5 w-3.5 text-red" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
