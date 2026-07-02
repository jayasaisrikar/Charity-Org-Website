import type { Metadata } from "next";
import { PageHero } from "@/components/NewsletterBand";
import { ContactForm } from "@/components/ContactForm";
import { org } from "@/lib/content";

export const metadata: Metadata = { title: "Contact — Snehitham" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Grow Change Together"
        intro="Whether you want to volunteer, partner, or simply learn more — we'd love to hear from you."
      />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-2">
        <div>
          <h3 className="font-display text-2xl font-semibold text-plum">
            Reach us
          </h3>
          <dl className="mt-8 space-y-6 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-ink/50">
                Address
              </dt>
              <dd className="mt-1 leading-relaxed text-ink/80">
                {org.address.line1}
                <br />
                {org.address.line2}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-ink/50">
                Phone
              </dt>
              <dd className="mt-1 text-ink/80">
                <a href={`tel:${org.phone}`} className="block hover:text-magenta">
                  {org.phone}
                </a>
                <a
                  href={`tel:${org.phoneAlt}`}
                  className="block hover:text-magenta"
                >
                  {org.phoneAlt}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-ink/50">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${org.email}`}
                  className="text-ink/80 hover:text-magenta"
                >
                  {org.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
