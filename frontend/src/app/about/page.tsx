import Image from "next/image";
import { ButtonLink, Card, Container } from "@/components/ui";

export default function AboutPage() {
  return (
    <main className="pb-16">
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Who We Are
              </h1>
              <p className="text-lg leading-8 text-slate-600">
                We bridge traditional educational values with modern digital
                convenience—connecting ambitious students with Pakistan&apos;s
                most qualified educators.
              </p>
              <ButtonLink href="#our-story" variant="outline">
                Discover Our Story
              </ButtonLink>
            </div>
            <div className="relative h-[360px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm lg:h-[480px]">
              <Image
                alt="About us"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWc8DZ6T7Ie8ic5jTAagC-iHDRHPfNZazpLEiw3IJ4VHdR14YP2OrAPN725yvup9-lJxlhLf2ffaYy7OGiYwIkTcE3yEaqCyJztq310J-YAAlTzrf5MjcLhS36laVJNFOPNjcL7hkUkFWR68VwbTjd18wn75SwrA1t1JV6-WW3TwjSnvF2hS534cF738QZ1hvU2BnNstCVhphCZpAr3hOJgPw7GgL3YFZqoOcLeYgrbn_No02ig2BG_7pU8SZqpgeP2pRe7KRLd-tH"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary py-12 text-white">
        <Container>
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {[
              ["500+", "Tutors"],
              ["10k+", "Students"],
              ["15", "Cities"],
              ["98%", "Success Rate"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="text-3xl font-extrabold">{value}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-widest text-white/70">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="our-story" className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold text-slate-900">
                The Path to Success
              </h2>
              <p className="text-slate-600">
                Founded with a vision to democratize access to premium
                education, we began as a small collective of passionate
                educators.
              </p>
              <p className="text-slate-600">
                Today we&apos;re a nationwide platform focused on quality,
                verification, and measurable student success.
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-slate-200 bg-white p-6">
              <div className="space-y-6">
                <div>
                  <div className="text-xl font-extrabold text-slate-900">
                    2018
                  </div>
                  <div className="text-sm font-semibold text-primary">
                    Inception
                  </div>
                  <p className="mt-1 text-slate-600">
                    Launched a pilot program for high-school math &amp; science
                    in Lahore.
                  </p>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-slate-900">
                    2020
                  </div>
                  <div className="text-sm font-semibold text-primary">
                    Digital Expansion
                  </div>
                  <p className="mt-1 text-slate-600">
                    Introduced hybrid learning to reach students nationwide.
                  </p>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-slate-900">
                    Today
                  </div>
                  <div className="text-sm font-semibold text-secondary">
                    Nationwide Excellence
                  </div>
                  <p className="mt-1 text-slate-600">
                    Serving thousands of students with a vetted roster of
                    top-tier educators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="rounded-3xl bg-slate-50 p-6 md:p-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Our Mission
                  </h3>
                  <p className="mt-3 text-slate-600">
                    Provide personalized, exceptional educational support that
                    empowers every student in Pakistan to achieve academic and
                    professional goals.
                  </p>
                </div>
              </Card>
              <Card>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Our Vision
                  </h3>
                  <p className="mt-3 text-slate-600">
                    Be the leading educational catalyst in South Asia, raising
                    teaching standards and delivering consistent student success.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-100 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Ready to start your journey?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Join thousands of students achieving their goals with top-rated
              tutors across Pakistan.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/tutors" variant="secondary">
                Find a Tutor
              </ButtonLink>
              <ButtonLink href="/join-as-tutor" variant="outline">
                Apply to Teach
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

