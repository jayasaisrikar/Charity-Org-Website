"use client";

import { useState } from "react";
import { HeartIcon, ArrowUpRightIcon } from "./icons";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex items-center justify-center rounded-4xl border border-plum/10 bg-white p-10 text-center">
        <div>
          <p className="inline-flex items-center gap-2 font-display text-2xl font-semibold text-plum">
            Thank you! <HeartIcon className="h-6 w-6 text-magenta" />
          </p>
          <p className="mt-2 text-sm text-ink/70">
            Your message has been received. We&apos;ll get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4 rounded-4xl border border-plum/10 bg-white p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          placeholder="Your name"
          className="w-full rounded-2xl border border-plum/15 bg-cream px-4 py-3 text-sm outline-none focus:border-magenta"
        />
        <input
          required
          type="email"
          placeholder="Your email"
          className="w-full rounded-2xl border border-plum/15 bg-cream px-4 py-3 text-sm outline-none focus:border-magenta"
        />
      </div>
      <input
        placeholder="Subject"
        className="w-full rounded-2xl border border-plum/15 bg-cream px-4 py-3 text-sm outline-none focus:border-magenta"
      />
      <textarea
        required
        rows={5}
        placeholder="How would you like to help?"
        className="w-full resize-none rounded-2xl border border-plum/15 bg-cream px-4 py-3 text-sm outline-none focus:border-magenta"
      />
      <button type="submit" className="btn-accent w-full justify-center">
        Send Message <ArrowUpRightIcon className="h-4 w-4" />
      </button>
    </form>
  );
}
