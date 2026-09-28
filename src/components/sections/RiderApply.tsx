"use client";

import Reveal from "@/components/Reveal";
import { EMAIL, HUB_CITIES } from "@/lib/site";
import { Bike, IdCard, Smartphone, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const requirements = [
  {
    icon: IdCard,
    title: "Valid CNIC",
    desc: "18+ with a readable CNIC. We verify identity before the first dispatch.",
  },
  {
    icon: Bike,
    title: "Own bike or car",
    desc: "A roadworthy bike for city runs, or a car for bulk and document lanes.",
  },
  {
    icon: Smartphone,
    title: "Android phone",
    desc: "Live job updates, proof of delivery, and route instructions on the rider app.",
  },
];

export default function RiderApply() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      "Rider application",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `City: ${data.get("city")}`,
      `Vehicle: ${data.get("vehicle")}`,
      `CNIC: ${data.get("cnic")}`,
      `Note: ${data.get("note") || "—"}`,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Rider Application — DoDeliver")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="riders" className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-16 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red">
            Rider Application
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.85rem,3.6vw,2.8rem)] font-bold leading-[1.08] tracking-tight text-ink">
            Ride with DoDeliver across six hubs.
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
            City riders and document runners. Apply with your details — the form opens your email
            so the dispatch desk receives it directly.
          </p>

          <ul className="mt-8 space-y-4">
            {requirements.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-red text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-[15px] font-semibold text-ink">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-[13px] leading-relaxed text-muted">
                      {item.desc}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>

          <p className="mt-6 text-[13px] text-muted">
            Hiring hubs: {HUB_CITIES.join(", ")}.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            className="rounded-[1.5rem] border border-line bg-white p-6 shadow-[0_24px_60px_rgba(18,18,18,0.05)] sm:p-8"
          >
            <h3 className="font-display text-xl font-bold tracking-tight text-ink">
              Apply to ride
            </h3>
            <p className="mt-1 text-[13px] text-muted">
              Sends your application to {EMAIL}.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Full name"
                className="rounded-xl border border-line bg-background px-4 py-3 text-[14px] outline-none focus:border-red/40"
              />
              <input
                name="phone"
                required
                type="tel"
                placeholder="Mobile number"
                className="rounded-xl border border-line bg-background px-4 py-3 text-[14px] outline-none focus:border-red/40"
              />
              <select
                name="city"
                required
                defaultValue=""
                className="rounded-xl border border-line bg-background px-4 py-3 text-[14px] outline-none focus:border-red/40"
              >
                <option value="" disabled>
                  Hub city
                </option>
                {HUB_CITIES.map((city) => (
                  <option key={city}>{city}</option>
                ))}
              </select>
              <select
                name="vehicle"
                required
                defaultValue="Bike"
                className="rounded-xl border border-line bg-background px-4 py-3 text-[14px] outline-none focus:border-red/40"
              >
                <option>Bike</option>
                <option>Car</option>
                <option>Both</option>
              </select>
              <input
                name="cnic"
                required
                placeholder="CNIC number"
                className="rounded-xl border border-line bg-background px-4 py-3 text-[14px] outline-none focus:border-red/40 sm:col-span-2"
              />
              <textarea
                name="note"
                rows={3}
                placeholder="Area you know, or previous courier experience"
                className="resize-none rounded-xl border border-line bg-background px-4 py-3 text-[14px] outline-none focus:border-red/40 sm:col-span-2"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-red px-6 py-3 text-[12px] font-semibold uppercase tracking-wide text-white transition hover:bg-red-deep"
            >
              Email application
              <Send className="h-3.5 w-3.5" />
            </button>
            {sent && (
              <p className="mt-3 text-[13px] text-emerald-700">
                Your email app should open with the application ready to send.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
