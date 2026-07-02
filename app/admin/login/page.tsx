import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { PageHero } from "@/components/NewsletterBand";
import { isAdminSessionActive } from "@/lib/admin-auth";
import { AdminLoginForm } from "./AdminLoginForm";

export const metadata: Metadata = { title: "Admin Login — Snehitham" };
export const dynamic = "force-dynamic";

export default function AdminLoginPage() {
  if (isAdminSessionActive()) {
    redirect("/admin");
  }

  return (
    <>
      <PageHero
        eyebrow="Admin Login"
        title="Sign In to View Submissions"
        intro="Use the admin credentials to review contact form messages."
      />

      <section className="container-page py-20">
        <AdminLoginForm />
      </section>
    </>
  );
}
