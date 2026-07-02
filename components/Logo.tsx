import Link from "next/link";
import Image from "next/image";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="Snehitham Charity Group logo"
        width={44}
        height={44}
        className="h-11 w-11 rounded-full bg-white object-contain p-0.5"
      />
      <span
        className={`font-display text-xl font-semibold tracking-tight ${
          light ? "text-cream" : "text-plum"
        }`}
      >
        Snehitham
      </span>
    </Link>
  );
}
