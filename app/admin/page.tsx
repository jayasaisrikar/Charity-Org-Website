import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { AdminLogoutButton } from "@/components/AdminLogoutButton";
import { PageHero } from "@/components/NewsletterBand";
import { ArrowUpRightIcon } from "@/components/icons";
import { isAdminSessionActive } from "@/lib/admin-auth";
import { getContactSubmissions, type ContactSubmission } from "@/lib/supabase";

export const metadata: Metadata = { title: "Admin — Snehitham" };
export const dynamic = "force-dynamic";

function formatDate(value?: string | null) {
  if (!value) return "Not recorded";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Not recorded";

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function getRecentCount(submissions: ContactSubmission[]) {
  const cutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;

  return submissions.filter((submission) => {
    if (!submission.created_at) return false;
    const date = new Date(submission.created_at);
    return !Number.isNaN(date.getTime()) && date.getTime() >= cutoff;
  }).length;
}

export default async function AdminPage() {
  if (!isAdminSessionActive()) {
    redirect("/admin/login");
  }

  const { data: submissions, error } = await getContactSubmissions();
  const latest = submissions[0];

  return (
    <>
      <PageHero
        eyebrow="Admin"
        title="Contact Submissions"
        intro="Review messages from donors, volunteers, families, and partners in one place."
      />

      <section className="container-page py-20">
        {error ? (
          <div className="rounded-4xl border border-orange/30 bg-white p-8">
            <p className="font-display text-2xl font-semibold text-plum">
              Supabase connection needed
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">
              {error}
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-4xl border border-plum/10 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">
                  Total
                </p>
                <p className="mt-3 font-display text-4xl font-semibold text-magenta">
                  {submissions.length}
                </p>
              </div>
              <div className="rounded-4xl border border-plum/10 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">
                  Last 7 Days
                </p>
                <p className="mt-3 font-display text-4xl font-semibold text-magenta">
                  {getRecentCount(submissions)}
                </p>
              </div>
              <div className="rounded-4xl border border-plum/10 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">
                  Latest
                </p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-ink/80">
                  {latest ? formatDate(latest.created_at) : "No submissions yet"}
                </p>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-4xl border border-plum/10 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-plum/10 p-6">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-plum">
                    Inbox
                  </h2>
                  <p className="mt-1 text-sm text-ink/60">
                    Newest messages appear first.
                  </p>
                </div>
                <Link href="/contact" className="btn-outline">
                  Contact Page <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
                <AdminLogoutButton />
              </div>

              {submissions.length === 0 ? (
                <div className="p-10 text-center">
                  <p className="font-display text-2xl font-semibold text-plum">
                    No submissions yet
                  </p>
                  <p className="mt-2 text-sm text-ink/60">
                    Messages sent from the contact page will show up here.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-plum/10">
                  {submissions.map((submission, index) => (
                    <article
                      key={`${submission.id ?? submission.email}-${submission.created_at ?? index}`}
                      className="grid gap-5 p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
                    >
                      <div>
                        <p className="font-display text-xl font-semibold text-plum">
                          {submission.name}
                        </p>
                        <a
                          href={`mailto:${submission.email}`}
                          className="mt-1 block text-sm font-medium text-magenta hover:text-plum"
                        >
                          {submission.email}
                        </a>
                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">
                          {formatDate(submission.created_at)}
                        </p>
                      </div>
                      <div>
                        <p className="font-display text-2xl font-semibold text-plum">
                          {submission.subject || "General inquiry"}
                        </p>
                        <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-ink/70">
                          {submission.message}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </section>
    </>
  );
}
