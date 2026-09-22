import Link from "next/link";

type Props = {
  className?: string;
  variant?: "default" | "light";
};

export default function Logo({ className = "", variant = "default" }: Props) {
  const deliverColor = variant === "light" ? "text-white" : "text-ink";

  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center" aria-hidden>
        <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none">
          <circle cx="20" cy="20" r="19" fill={variant === "light" ? "#ffffff" : "#121212"} />
          <path
            d="M20 6.5c-6.2 0-11.2 4.7-11.2 10.5 0 7.4 9.4 15.2 10.6 16.1a.9.9 0 0 0 1.2 0c1.2-.9 10.6-8.7 10.6-16.1C30.2 11.2 26.2 6.5 20 6.5Z"
            fill="#e10600"
          />
          <path
            d="M15.2 16.8c0-2.7 2.1-4.8 4.8-4.8s4.8 2.1 4.8 4.8c0 1.9-1.1 3.5-2.7 4.3v3.2h-4.2v-3.2c-1.6-.8-2.7-2.4-2.7-4.3Z"
            fill="white"
          />
        </svg>
      </span>
      <span className="font-display text-[1.35rem] font-bold leading-none tracking-tight">
        <span className="text-red transition-colors group-hover:text-red-deep">Do</span>
        <span className={deliverColor}>Deliver</span>
      </span>
    </Link>
  );
}
