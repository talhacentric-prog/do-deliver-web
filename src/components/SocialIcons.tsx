type IconProps = { className?: string };

export function IconFacebook({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.2l.8-3H14V9z" />
    </svg>
  );
}

export function IconInstagram({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2z" />
      <circle cx="17.5" cy="6.5" r="1.1" />
      <path d="M16.5 2h-9A5.5 5.5 0 0 0 2 7.5v9A5.5 5.5 0 0 0 7.5 22h9a5.5 5.5 0 0 0 5.5-5.5v-9A5.5 5.5 0 0 0 16.5 2zm3.7 14.5a3.7 3.7 0 0 1-3.7 3.7h-9a3.7 3.7 0 0 1-3.7-3.7v-9a3.7 3.7 0 0 1 3.7-3.7h9a3.7 3.7 0 0 1 3.7 3.7v9z" />
    </svg>
  );
}

export function IconLinkedin({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M6.3 9.3H3.5V20h2.8V9.3zM4.9 4A1.6 1.6 0 1 0 5 7.2 1.6 1.6 0 0 0 4.9 4zM20.5 13.3c0-3-1.6-4.4-3.8-4.4a3.3 3.3 0 0 0-3 1.6V9.3H11v10.7h2.8v-5.3c0-1.4.3-2.8 2-2.8s1.7 1.6 1.7 2.9V20h2.8v-6.7z" />
    </svg>
  );
}
