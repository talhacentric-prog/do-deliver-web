"use client";

import Reveal from "@/components/Reveal";
import { ADDRESS, EMAIL, EMAIL_HREF, MAP_LINK, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { FormEvent, useState, type ReactNode } from "react";
import {
  Headphones,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Smartphone,
  User,
} from "lucide-react";

const infoCards = [
  {
    label: "Call Us Anytime",
    value: PHONE_DISPLAY,
    href: PHONE_HREF,
    icon: Headphones,
  },
  {
    label: "Make a Quote",
    value: EMAIL,
    href: EMAIL_HREF,
    icon: Mail,
  },
  {
    label: "Head Office",
    value: ADDRESS,
    href: MAP_LINK,
    icon: MapPin,
  },
];

export default function ContactFormSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    setLoading(true);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Book Now — DoDeliver")}&body=${encodeURIComponent(body)}`;
    window.setTimeout(() => {
      setLoading(false);
      setSent(true);
      form.reset();
    }, 400);
  }

  return (
    <section id="book" className="relative scroll-mt-28 overflow-hidden bg-background py-16 sm:py-24">
      <div
        className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rotate-12 bg-red/[0.04]"
        style={{ clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.35fr] lg:gap-16 lg:px-8">
        {/* Info cards */}
        <div className="space-y-4">
          {infoCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.label} delay={i * 0.06}>
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 rounded-2xl border border-line bg-surface p-5 transition hover:border-red/30 hover:shadow-[0_16px_40px_rgba(18,18,18,0.06)]"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-red text-white transition group-hover:scale-105">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="min-w-0 pt-0.5">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                      {card.label}
                    </span>
                    <span className="mt-1.5 block font-display text-[15px] font-bold leading-snug tracking-tight text-ink sm:text-base">
                      {card.value}
                    </span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* Form */}
        <Reveal delay={0.1}>
          <div className="rounded-[1.5rem] border border-line bg-surface p-6 shadow-[0_24px_60px_rgba(18,18,18,0.05)] sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red">
              Feel free! Get in touch with us
            </p>
            <h2 className="mt-3 max-w-lg font-display text-[clamp(1.6rem,3vw,2.35rem)] font-bold leading-tight tracking-tight text-ink">
              Skyrocket your business with{" "}
              <span className="text-red">Do</span>Deliver
            </h2>

            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  name="name"
                  placeholder="Your Name"
                  icon={<User className="h-4 w-4" />}
                  required
                />
                <Field
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  icon={<Mail className="h-4 w-4" />}
                  required
                />
              </div>
              <Field
                name="phone"
                type="tel"
                placeholder="Type Your Contact Number"
                icon={<Smartphone className="h-4 w-4" />}
                required
              />
              <label className="relative block">
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Type Your Message"
                  className="w-full resize-none rounded-xl border border-line bg-background px-4 py-3.5 pr-11 text-[14px] text-ink outline-none transition placeholder:text-muted/70 focus:border-red/40 focus:ring-2 focus:ring-red/10"
                />
                <span className="pointer-events-none absolute right-4 top-4 text-muted/60">
                  <MessageSquare className="h-4 w-4" />
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-red-deep disabled:opacity-70 sm:w-auto"
              >
                {loading ? "Opening email…" : "Book Now"}
                <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>

              {sent && (
                <p className="text-[13px] font-medium text-emerald-600">
                  Your email app should open with this booking ready to send.
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  name,
  placeholder,
  icon,
  type = "text",
  required,
}: {
  name: string;
  placeholder: string;
  icon: ReactNode;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="relative block">
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-background px-4 py-3.5 pr-11 text-[14px] text-ink outline-none transition placeholder:text-muted/70 focus:border-red/40 focus:ring-2 focus:ring-red/10"
      />
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted/60">
        {icon}
      </span>
    </label>
  );
}
