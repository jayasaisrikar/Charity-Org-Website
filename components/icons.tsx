import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function GraduationIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5" />
      <path d="M22 10v5" />
    </svg>
  );
}

export function BookIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 4.5A2 2 0 0 1 6 2.5h13v17H6a2 2 0 0 0-2 2Z" />
      <path d="M4 4.5v15" />
    </svg>
  );
}

export function HandshakeIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2" />
      <path d="m14 15 2.5 2.5a1.4 1.4 0 0 0 2-2L14 11" />
      <path d="m18 15.5 2-2a2 2 0 0 0 0-2.8l-3.2-3.2a2 2 0 0 0-1.4-.6H12L8 8" />
      <path d="M4 8h2l4 4a1.4 1.4 0 0 1-2 2l-1-1" />
      <path d="M4 8v6" />
    </svg>
  );
}

export function LaptopIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="4" y="5" width="16" height="10" rx="1.5" />
      <path d="M2 19h20" />
    </svg>
  );
}

export function AppleIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 8c-2-2.5-6-1.7-6 2.5C6 15 9 20 12 20s6-5 6-9.5C18 6.3 14 5.5 12 8Z" />
      <path d="M12 8c0-2 .8-3.5 2.5-4.5" />
    </svg>
  );
}

export function SproutIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 20v-8" />
      <path d="M12 12C12 8 9 6 5 6c0 4 3 6 7 6Z" />
      <path d="M12 11c0-3 2.5-5 6-5 0 3-2.5 5-6 5Z" />
    </svg>
  );
}

export function ArrowUpRightIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowRightIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function CheckCircleIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </svg>
  );
}

export function HeartIcon(p: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...p}>
      <path d="M12 20s-7-4.6-9.2-9C1.3 8 3 4.5 6.4 4.5c2 0 3.2 1.2 3.6 2 .4-.8 1.6-2 3.6-2C17 4.5 18.7 8 17.2 11 15 15.4 12 20 12 20Z" />
    </svg>
  );
}

export function PlayIcon(p: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...p}>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

export const programIcons = {
  scholarship: GraduationIcon,
  book: BookIcon,
  handshake: HandshakeIcon,
  laptop: LaptopIcon,
  apple: AppleIcon,
  sprout: SproutIcon,
} as const;

export type ProgramIconName = keyof typeof programIcons;
