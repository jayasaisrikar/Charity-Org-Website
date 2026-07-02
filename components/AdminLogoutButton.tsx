"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function AdminLogoutButton() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  return (
    <button
      type="button"
      disabled={submitting}
      onClick={async () => {
        setSubmitting(true);
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
      }}
      className="btn-outline disabled:cursor-not-allowed disabled:opacity-70"
    >
      {submitting ? "Signing Out..." : "Sign Out"}
    </button>
  );
}
