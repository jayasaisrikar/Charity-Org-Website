import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/Section";
import { ProgramCard } from "@/components/Cards";
import { NewsletterBand } from "@/components/NewsletterBand";
import {
  ArrowUpRightIcon,
  CheckCircleIcon,
  HeartIcon,
} from "@/components/icons";
import { programs, stats } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero — split layout */}
      <section className="container-page pt-8 sm:pt-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          {/* Left: message */}
          <div className="flex flex-col">
            <span className="eyebrow animate-rise rise-1 text-magenta">
              Community &amp; Nonprofit Foundation
            </span>
            <h1 className="display-heading animate-rise rise-1 mt-6 text-[2.75rem] leading-[0.95] text-plum sm:text-6xl xl:text-7xl">
              From School to Society,{" "}
              <span className="relative whitespace-nowrap text-magenta">
                Every Child
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-orange"
                >
                  <path
                    d="M2 9C60 3 240 3 298 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Can Change the World
            </h1>
            <p className="animate-rise rise-2 mt-7 max-w-md text-base leading-relaxed text-ink/70">
              Join us in bringing hope and opportunity to children in need.
              Every scholarship, every mentor and every helping hand rewrites a
              future.
            </p>

            <div className="animate-rise rise-3 mt-8 flex flex-wrap gap-3">
              <Link href="#donate" className="btn-accent">
                Donate Now
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
              <Link href="/programs" className="btn-outline">
                Explore Programs
              </Link>
            </div>

            {/* Inline trust stats */}
            <dl className="animate-rise rise-4 mt-10 flex flex-wrap gap-8 border-t border-plum/10 pt-6">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-semibold text-plum sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-0.5 text-xs font-medium uppercase tracking-wider text-ink/55">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: image with floating impact badge */}
          <div className="relative">
            {/* soft brand glow */}
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[3rem] bg-brand-gradient opacity-20 blur-2xl"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-4xl sm:aspect-[5/5] lg:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1400&q=80"
                alt="Children smiling together"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* floating impact badge — echoes the logo's hands-and-heart care motif */}
            <div className="animate-rise rise-4 absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-white/95 p-3 pr-5 shadow-xl shadow-plum/10 backdrop-blur sm:-left-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <HeartIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-display text-lg font-semibold leading-none text-plum">
                  8,400+ children
                </span>
                <span className="mt-1 block text-xs text-ink/60">
                  in school and thriving today
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering change — collage + checklist */}
      <section className="container-page grid items-center gap-12 py-20 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative row-span-2 overflow-hidden rounded-4xl">
            <Image
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
              alt="A child"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-4xl">
            <Image
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
              alt="Volunteers teaching"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-4xl">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
              alt="Community support"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="About Us"
            title="Empowering Change, Guided by Heart"
            intro="We empower communities through education, mentorship and long-term support — creating change that lasts far beyond the classroom."
          />
          <ul className="mt-8 space-y-3">
            {[
              "Community-led and locally rooted",
              "Sustainable, long-term support",
              "Every rupee transparently accounted for",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-medium text-ink/80"
              >
                <CheckCircleIcon className="h-5 w-5 text-magenta" />
                {item}
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn-plum mt-8">
            More About Us
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="container-page py-16">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-4xl border border-plum/10 bg-white p-8 text-center"
            >
              <p className="font-display text-4xl font-semibold text-magenta sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-ink/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="container-page py-12">
        <SectionHeading
          eyebrow="Programs"
          title="Comprehensive, High-Impact Support Rooted in Your Community"
          intro="Like every child who needs the right conditions to thrive, our programs are designed to address root causes — not just symptoms. Each initiative is community-led and built to last."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/programs" className="btn-outline">
            Explore All Programs <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <NewsletterBand />
    </>
  );
}
