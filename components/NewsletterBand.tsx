"use client";

import { useState } from "react";
import { SectionHeading } from "./Section";
import { HeartIcon } from "./icons";

export function NewsletterBand() {
  const [sent, setSent] = useState(false);
  return (
    <section
      id="donate"
      className="relative overflow-hidden bg-plum-dark"
    >
      {/* Photographic background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      {/* Deep plum scrim for legibility + brand warmth */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-plum-dark via-plum-deep/90 to-plum/70"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-plum-dark/80 via-transparent to-plum-dark/40"
      />
      {/* Warm brand glow accent */}
      <div
        aria-hidden
        className="absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-orange/25 blur-3xl"
      />

      <div className="container-page relative py-20 sm:py-24">
        <span className="eyebrow rounded-full bg-plum-dark/20 px-3 py-1 text-cream">
          Join the Movement
        </span>
        <h2 className="display-heading mt-6 max-w-3xl text-4xl text-cream sm:text-6xl">
          Educate a Child, Empower a Future — Grow Change Together
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
          Change starts with a single step. Join thousands who receive updates
          and ways to make a difference straight to your inbox.
        </p>

        <form
          className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="w-full rounded-full border border-white/40 bg-white/95 px-6 py-4 text-sm text-ink outline-none placeholder:text-ink/50 focus:border-white"
          />
          <button
            type="submit"
            className="btn bg-plum-dark text-cream hover:bg-plum-deep sm:whitespace-nowrap"
          >
            Join the Community
          </button>
        </form>
        {sent && (
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cream">
            Thank you for joining — we&apos;ll be in touch soon!
            <HeartIcon className="h-4 w-4 text-orange" />
          </p>
        )}
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="bg-plum-dark">
      <div className="container-page py-20 sm:py-28">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} light />
      </div>
    </section>
  );
}
