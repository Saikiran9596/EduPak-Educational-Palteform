import Image from "next/image";
import { ButtonLink, Container, SectionTitle } from "@/components/ui";

export default function ServicesPage() {
  return (
    <main className="pb-16">
      <section className="bg-white py-16">
        <Container>
          <SectionTitle
            title="Our Educational Services"
            subtitle="Comprehensive tutoring solutions tailored to meet the unique needs of every student."
          />
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-lg md:aspect-square">
              <Image
                alt="Online tutoring"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuBIHKPaGTtAUvf0ZCoRtR-krC-NOjJTFBkDUEgMf_Uj7f9rS1SbM2N8uXTijZHtAk9FFsmhA8NGSH44XbXbpdvMbMQNnJGPCk9vdEyG1MMZtBpwux39ckK7480NkIufdUjEbCOITCgvZzxs3D_2TDs4iusnljnIul9Z51pBtbprxvQOC_wdU8MwNCT50xrXKb-d_1r96QGn6IfCdZAA5S4B0iVBbXWDAnvcLMO_lBEunsJE6oyLhdol9Un8etRZ1zrQfkTPyJP9Hj"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-primary">
                Online Tutoring
              </h2>
              <p className="mt-4 text-slate-600">
                Interactive online classes with expert tutors across Pakistan,
                with revision-friendly recordings and structured learning plans.
              </p>
              <ul className="mt-6 space-y-2 text-slate-700">
                <li>• Flexible scheduling</li>
                <li>• Access to recorded sessions</li>
                <li>• Digital tools &amp; resources</li>
              </ul>
              <div className="mt-6">
                <ButtonLink href="/tutors?mode=Online" variant="secondary">
                  Explore Online Tutors
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-extrabold text-primary">
                Home Tuition
              </h2>
              <p className="mt-4 text-slate-600">
                Face-to-face tutoring matched with verified local educators who
                understand your child&apos;s pace and learning goals.
              </p>
              <ul className="mt-6 space-y-2 text-slate-700">
                <li>• Personalized attention</li>
                <li>• Verified and background-checked tutors</li>
                <li>• Regular progress tracking</li>
              </ul>
              <div className="mt-6">
                <ButtonLink href="/tutors?mode=Home" variant="secondary">
                  Find Home Tutors
                </ButtonLink>
              </div>
            </div>
            <div className="order-1 md:order-2 relative aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-lg md:aspect-square">
              <Image
                alt="Home tuition"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsfIdEnrthDfeu-ThyicAopumAj_dmFpjIWKZ_SVi7z3Pn1Sr3VFoWhHhdVAIZ8OnWDQRQoDW2OnX60WSYT3FWmMWVbtJAtTSNgFv2vi2wTqsXn8muMfjs_q4-JzNY4QGOpDu2TOr2Uor2rb0l2gxGaesifOn4Lc7JedlMGMD4FDdFdSOkiM9wD7oCyid0kO8cQzPWWNu7cbqFX4ANUxnPWXD02fQEHpDaoalEbXtUBjWsNuXfZkjdHirrNkxmdTYcmJe5Si5QcE-C"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-lg md:aspect-square">
              <Image
                alt="O/A Level preparation"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd1TNTLmxxL6JcMEjy_S9dPAny-8Y1P0yKvO3J_mvbknP9N5vGkuaqObifxXiJzbKMEgk32AdfrlHodjgyB42ajOt4NoHT7ehWMrtrFLck32DhS98yheeGdqoBhvt6GgL-mxqpz43EPCWb7jP7baoi0pNKzY-9e0Rpx_MwMFZ1EaSLzFmmCI5SDO2nQkVJf8gBtKlB3kHN5Q5JJHjjs9te_k0mJqfRaG3sRJUxr6EeUaf9Eib6LpX_Bg3Nnjk5g-ALCnIQUW4m-5o2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-primary">
                O/A Level Preparation
              </h2>
              <p className="mt-4 text-slate-600">
                Cambridge-focused coaching with past paper practice, exam
                techniques, and intensive revision sessions to secure top grades.
              </p>
              <ul className="mt-6 space-y-2 text-slate-700">
                <li>• Cambridge curriculum expertise</li>
                <li>• Extensive past paper practice</li>
                <li>• Time management training</li>
              </ul>
              <div className="mt-6">
                <ButtonLink href="/tutors?level=O%2FA%20Levels" variant="secondary">
                  View Specialized Tutors
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Ready to start your success journey?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Speak with our educational consultants to find the perfect match
              for your academic goals.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="secondary">
                Talk to our team
              </ButtonLink>
              <ButtonLink href="/student-inquiry" variant="outline" className="border-white text-white hover:bg-white/10">
                Book Free Consultation
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

