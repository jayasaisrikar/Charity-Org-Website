import Image from "next/image";
import type { Metadata } from "next";
import { PageHero, NewsletterBand } from "@/components/NewsletterBand";
import { SectionHeading } from "@/components/Section";
import { org } from "@/lib/content";

export const metadata: Metadata = { title: "About Us — Snehitham" };

const values = [
  {
    title: "Every Child Counts",
    body: "We believe potential is universal and opportunity should be too. No child is beyond reach.",
  },
  {
    title: "Community-Led",
    body: "Lasting change is grown, not given. Families, teachers and volunteers lead every program.",
  },
  {
    title: "Transparency",
    body: "Every rupee is accounted for. Donors see exactly how their support becomes impact.",
  },
  {
    title: "School to Society",
    body: "Education is the first step; we walk with children all the way into confident adulthood.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Educate a Child, Empower a Future"
        intro={`${org.full} began with a simple conviction: that a child with an education can lift not only themselves, but an entire community. From school to society, that is the journey we make possible.`}
      />

      <section className="container-page grid items-center gap-12 py-20 lg:grid-cols-2">
        <div className="overflow-hidden rounded-4xl">
          <Image
            src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80"
            alt="Children studying together"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Our Story"
            title="Fifteen Years of Turning Classrooms Into Futures"
            intro="What started as a handful of volunteers tutoring children after school has grown into a movement across 120 partner schools. Along the way, our mission has never changed — keep children in school, and keep hope in reach."
          />
          <p className="mt-6 text-base leading-relaxed text-ink/70">
            Today, Snehitham supports children through scholarships, supplies,
            mentorship, nutrition and digital learning — meeting each family
            where they are and staying with them for the long road ahead.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16">
          <SectionHeading
            eyebrow="Our Values"
            title="What Roots Us"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-4xl border border-plum/10 bg-white p-8"
              >
                <h3 className="font-display text-xl font-semibold text-plum">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBand />
    </>
  );
}
