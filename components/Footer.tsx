import Link from "next/link";
import { Logo } from "./Logo";
import { ArrowUpRightIcon } from "./icons";
import { navLinks, org } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-plum-dark text-cream/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            {org.motto} — {org.tagline}.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">
            Links
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">
            Location
          </h4>
          <p className="mt-5 text-sm leading-relaxed">
            {org.address.line1}
            <br />
            {org.address.line2}
          </p>
          <p className="mt-4 space-y-1 text-sm">
            <a href={`tel:${org.phone}`} className="block hover:text-orange">
              {org.phone}
            </a>
            <a href={`tel:${org.phoneAlt}`} className="block hover:text-orange">
              {org.phoneAlt}
            </a>
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">
            Get in touch
          </h4>
          <a
            href={`mailto:${org.email}`}
            className="mt-5 block text-sm hover:text-orange"
          >
            {org.email}
          </a>
          <Link href="#donate" className="btn-accent mt-6">
            Donate
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream/50 sm:flex-row">
          <p>© 2026 {org.full}. All Rights Reserved.</p>
          <p>{org.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
