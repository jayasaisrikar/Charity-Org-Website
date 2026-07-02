import type { Metadata } from "next";
import { PageHero, NewsletterBand } from "@/components/NewsletterBand";
import { ProgramCard } from "@/components/Cards";
import { programs } from "@/lib/content";

export const metadata: Metadata = { title: "Programs — Snehitham" };

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Comprehensive, High-Impact Solutions"
        intro="Every child's path is different, so our support is too. From the first day of school to the first day of work, these are the programs that carry children forward."
      />

      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </section>

      <NewsletterBand />
    </>
  );
}
