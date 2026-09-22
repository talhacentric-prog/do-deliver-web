"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CourierLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const done = window.setTimeout(() => setVisible(false), 2200);
    return () => window.clearTimeout(done);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
          aria-label="Loading DoDeliver"
          role="status"
        >
          <div className="relative flex w-[min(90vw,340px)] flex-col items-center gap-8 px-6">
            <motion.div
              className="font-display text-2xl tracking-tight text-white"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-red">Do</span>Deliver
            </motion.div>

            <div className="relative h-16 w-full">
              {/* Route line */}
              <svg
                className="absolute left-0 top-1/2 h-8 w-full -translate-y-1/2"
                viewBox="0 0 340 32"
                fill="none"
                aria-hidden
              >
                <path
                  d="M8 22 C70 22, 90 8, 160 8 S250 26, 332 16"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  className="route-dash"
                  d="M8 22 C70 22, 90 8, 160 8 S250 26, 332 16"
                  stroke="#e10600"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="8" cy="22" r="4" fill="#e10600" />
                <circle cx="332" cy="16" r="4" fill="white" />
              </svg>

              {/* Package traveling along route */}
              <motion.div
                className="absolute top-1/2 -mt-4"
                initial={{ left: "0%", rotate: -6 }}
                animate={{ left: "88%", rotate: 6 }}
                transition={{
                  duration: 1.65,
                  ease: [0.45, 0, 0.25, 1],
                  repeat: Infinity,
                  repeatDelay: 0.15,
                }}
              >
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
                  <rect x="6" y="10" width="24" height="18" rx="2" fill="#e10600" />
                  <path d="M6 16h24" stroke="white" strokeWidth="1.5" opacity="0.85" />
                  <path d="M18 10v18" stroke="white" strokeWidth="1.5" opacity="0.85" />
                  <path d="M12 10 L18 5 L24 10" stroke="#e10600" strokeWidth="2" fill="none" />
                </svg>
              </motion.div>
            </div>

            <motion.p
              className="text-xs uppercase tracking-[0.28em] text-white/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              Dispatching…
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
