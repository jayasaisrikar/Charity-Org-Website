"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowUpRightIcon } from "@/components/icons";

export function AdminLoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        setError("");
        setSubmitting(true);

        const formData = new FormData(event.currentTarget);
        const response = await fetch("/api/admin/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.get("email"),
            password: formData.get("password"),
          }),
        });

        if (!response.ok) {
          const details = (await response.json().catch(() => null)) as
            | { error?: string }
            | null;
          setError(details?.error ?? "Unable to sign in.");
          setSubmitting(false);
          return;
        }

        router.push("/admin");
        router.refresh();
      }}
      className="mx-auto max-w-xl space-y-4 rounded-4xl border border-plum/10 bg-white p-8"
    >
      <div>
        <label
          htmlFor="admin-email"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/50"
        >
          Email
        </label>
        <input
          id="admin-email"
          name="email"
          type="email"
          required
          autoComplete="username"
          className="mt-2 w-full rounded-2xl border border-plum/15 bg-cream px-4 py-3 text-sm outline-none focus:border-magenta"
        />
      </div>

      <div>
        <label
          htmlFor="admin-password"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/50"
        >
          Password
        </label>
        <input
          id="admin-password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="mt-2 w-full rounded-2xl border border-plum/15 bg-cream px-4 py-3 text-sm outline-none focus:border-magenta"
        />
      </div>

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
        {submitting ? "Signing in..." : "Sign In"}
        <ArrowUpRightIcon className="h-4 w-4" />
      </button>
    </form>
  );
}
