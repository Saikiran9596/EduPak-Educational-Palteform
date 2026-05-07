import Image from "next/image";
import { Container, SectionTitle } from "@/components/ui";
import { SimpleForm } from "@/components/forms/simple-form";

export default function JoinAsTutorPage() {
  return (
    <main className="pb-16">
      <section className="bg-primary py-16 text-white">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                Turn Your Knowledge Into Income
              </h1>
              <p className="text-lg text-white/75">
                Join Pakistan&apos;s premium network of educators. Set your own
                availability, connect with motivated students, and grow your
                tutoring career.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#registration"
                  className="rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                >
                  Apply Now
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-lg border-2 border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative hidden h-[420px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl lg:block">
              <Image
                alt="Tutor helping student"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRGhJCaVB9I8zt011y3zT3cDyTtkj8TrJimrJEM2cOtr2WfxCj-v9gOUmDE3OTupRo8jKphE6AyvyvU-4CgIkZTXoamDbedW-VxyNVaEXEZoVNU30QUvYjX5U3oHQG3a5vTDxvLXewqmkbb5y6DIousX4VPp-vSHuamj4Kw3hf8KjF34TOmMbmBKFMBS5ouCtU3f4Poqjrq6Kg5OPpFhVnC63tKJvnDDYRRrpomWZeikV40v1KRAPD42tKCMl62uW7K4oKZtwHBYyb"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionTitle
            title="Why Teach With Us?"
            subtitle="We provide the platform, tools, and students. You bring the expertise."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Flexible Hours", "Set your availability and balance tutoring with your other commitments."],
              ["Work From Home", "Teach students across Pakistan using online learning tools."],
              ["Competitive Earnings", "Set your own rates based on experience and qualifications."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-xl font-extrabold text-slate-900">{title}</h3>
                <p className="mt-3 text-slate-600">{desc}</p>
              </div>
            ))}
            <div className="rounded-2xl bg-primary p-8 text-white shadow-sm md:col-span-2">
              <h3 className="text-xl font-extrabold">Free Professional Listing</h3>
              <p className="mt-3 text-white/75">
                Create a compelling profile showcasing your expertise. We market
                your services to students actively seeking help.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="how-it-works" className="bg-slate-50 py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-extrabold text-slate-900">
                Minimum Requirements
              </h3>
              <ul className="mt-5 space-y-3 text-slate-700">
                <li>
                  <span className="font-semibold">Educational Background:</span>{" "}
                  Bachelor&apos;s degree or currently enrolled.
                </li>
                <li>
                  <span className="font-semibold">Subject Expertise:</span>{" "}
                  Demonstrable mastery in chosen subjects.
                </li>
                <li>
                  <span className="font-semibold">Technical Setup:</span>{" "}
                  Reliable internet, webcam, microphone.
                </li>
                <li>
                  <span className="font-semibold">Professionalism:</span>{" "}
                  Strong communication and commitment to student success.
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Your Path to Tutoring
              </h2>
              <div className="mt-6 space-y-4">
                {[
                  ["Submit Application", "Fill out the registration form with your education, experience, and subjects."],
                  ["Review & Verification", "We verify credentials and may conduct a short interview."],
                  ["Start Teaching", "Once approved, your profile goes live and you can accept bookings."],
                ].map(([t, d], idx) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="text-sm font-bold text-primary">
                      Step {idx + 1}
                    </div>
                    <div className="mt-1 text-lg font-extrabold text-slate-900">
                      {t}
                    </div>
                    <p className="mt-2 text-slate-600">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="registration" className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionTitle
              title="Tutor Application Form"
              subtitle="Complete the form below to begin your journey with EduSuccess Pakistan."
            />
            <div className="mt-10">
              <SimpleForm
                title="Application"
                submitLabel="Submit Application"
                tableName="applications"
                successMessage="Your application has been submitted successfully. Our team will review it and get back to you shortly."
                fields={[
                  {
                    kind: "text",
                    name: "full_name",
                    label: "Full Name",
                    required: true,
                    placeholder: "e.g. Ali Khan",
                  },
                  {
                    kind: "email",
                    name: "email",
                    label: "Email Address",
                    required: true,
                    placeholder: "ali@example.com",
                  },
                  {
                    kind: "tel",
                    name: "phone",
                    label: "Phone Number",
                    required: true,
                    placeholder: "0300-0000000",
                  },
                  {
                    kind: "select",
                    name: "qualification",
                    label: "Highest Qualification",
                    required: true,
                    options: [
                      { value: "bachelors", label: "Bachelor's Degree" },
                      { value: "masters", label: "Master's Degree" },
                      { value: "phd", label: "Ph.D." },
                      { value: "other", label: "Other Certification" },
                    ],
                  },
                  {
                    kind: "text",
                    name: "subjects",
                    label: "Primary Subjects (comma separated)",
                    required: true,
                    placeholder: "e.g. Mathematics, Physics",
                  },
                  {
                    kind: "textarea",
                    name: "bio",
                    label: "Brief Bio (Why do you want to teach?)",
                    required: true,
                    placeholder:
                      "Share a little about your teaching philosophy and experience...",
                    rows: 4,
                  },
                ]}
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

