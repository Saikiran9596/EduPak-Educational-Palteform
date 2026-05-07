import { Container, SectionTitle } from "@/components/ui";
import { PricingToggle } from "@/app/pricing/pricing-toggle";
import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="pb-16">
      <section className="py-16">
        <Container>
          <SectionTitle
            title="Simple, Transparent Pricing"
            subtitle="Flexible tutoring plans designed for every learning need and budget."
          />
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <PricingToggle />
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-center text-xl font-extrabold text-primary">
              All plans include:
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-4 text-center md:grid-cols-4">
              {[
                "Verified Tutors",
                "24/7 Support",
                "Flexible Scheduling",
                "Satisfaction Guarantee",
              ].map((f) => (
                <div
                  key={f}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-800"
                >
                  {f}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold text-primary">
                Still not sure which plan is right for you?
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Our educational consultants are ready to help you find the
                perfect match for your goals.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/student-inquiry"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                >
                  Book Free Consultation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/5"
                >
                  Chat with Us
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

