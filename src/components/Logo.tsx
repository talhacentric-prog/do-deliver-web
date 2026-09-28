import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
};

export default function Logo({ className = "" }: Props) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="DoDeliver home">
      <Image
        src="/brand/dodeliver-logo.png"
        alt="DoDeliver"
        width={142}
        height={76}
        priority
        className="h-11 w-auto sm:h-12"
      />
    </Link>
  );
}
