"use client";

import { useState } from "react";
import { HeartIcon, ArrowUpRightIcon } from "./icons";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

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
      onSubmit={async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError("");

        const form = e.currentTarget;
        const formData = new FormData(form);
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
          }),
        });

        if (!response.ok) {
          const details = (await response.json().catch(() => null)) as
            | { error?: string }
            | null;
          setError(details?.error ?? "Unable to send your message.");
          setSubmitting(false);
          return;
        }

        setSubmitting(false);
        setSent(true);
      }}
      className="space-y-4 rounded-4xl border border-plum/10 bg-white p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Your name"
          className="w-full rounded-2xl border border-plum/15 bg-cream px-4 py-3 text-sm outline-none focus:border-magenta"
        />
        <input
          name="email"
          required
          type="email"
          placeholder="Your email"
          className="w-full rounded-2xl border border-plum/15 bg-cream px-4 py-3 text-sm outline-none focus:border-magenta"
        />
      </div>
      <input
        name="subject"
        placeholder="Subject"
        className="w-full rounded-2xl border border-plum/15 bg-cream px-4 py-3 text-sm outline-none focus:border-magenta"
      />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="How would you like to help?"
        className="w-full resize-none rounded-2xl border border-plum/15 bg-cream px-4 py-3 text-sm outline-none focus:border-magenta"
      />
      {error && (
        <p className="rounded-2xl border border-orange/30 bg-cream px-4 py-3 text-sm text-plum">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="btn-accent w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Sending..." : "Send Message"}
        <ArrowUpRightIcon className="h-4 w-4" />
      </button>
    </form>
  );
}
