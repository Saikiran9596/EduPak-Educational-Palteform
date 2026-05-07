import Image from "next/image";
import { Container, SectionTitle } from "@/components/ui";
import { SimpleForm } from "@/components/forms/simple-form";

export default function ContactPage() {
  return (
    <main className="pb-16">
      <section className="py-16">
        <Container>
          <SectionTitle
            title="Get in Touch"
            subtitle="Reach out for inquiries, support, or guidance on finding the perfect tutor."
          />
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Call Us",
                desc: "Available Mon-Sat, 9AM-6PM PKT",
                link: "tel:+923001234567",
                label: "+92 300 123 4567",
              },
              {
                title: "WhatsApp",
                desc: "Quick responses via chat",
                link: "https://wa.me/923001234567",
                label: "Message Us",
              },
              {
                title: "Email",
                desc: "For detailed inquiries & support",
                link: "mailto:support@edusuccess.pk",
                label: "support@edusuccess.pk",
              },
            ].map((c) => (
              <a
                key={c.title}
                href={c.link}
                className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="text-lg font-extrabold text-primary">
                  {c.title}
                </div>
                <div className="mt-2 text-sm text-slate-600">{c.desc}</div>
                <div className="mt-4 text-sm font-semibold text-secondary">
                  {c.label}
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold text-primary">
                  Our Headquarters
                </h2>
                <p className="mt-3 text-slate-600">
                  Visit our main office or reach out through our official
                  channels.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-bold text-slate-900">
                  Office Address
                </div>
                <p className="mt-2 text-slate-600">
                  Suite 402, EduTech Plaza,
                  <br />
                  Shahrah-e-Faisal, Karachi,
                  <br />
                  Pakistan 75400
                </p>
                <div className="mt-5 text-sm font-bold text-slate-900">
                  Business Hours
                </div>
                <p className="mt-2 text-slate-600">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>

              <div className="relative h-[240px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <Image
                  alt="Map showing location"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNpKRmKcQex2TVa_bY9IJtHiwm_MSL2ccV5yMds98sad5yUk_35ZChftZXsBduD7ckUc6KeSulQNaxpMEV1-IdvA8HVQJ-vf66ceuDPSOfI_DnOQUs77nO-TkKvG-tTWtTJ2UwreI5PFqDR3VlzFu-ONRrZ_zwIdeJvZpCg0wO1CUpwqb2PAqYNXM9T4k8Jm3-6sYRDVs4LBR6RiesN-HpVqQ8kDQhWjKSx2fCbbXyFLUFsgijmilOeYWPQ8g6SnpPxwt1kieSgyoD"
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <SimpleForm
                title="Send a Message"
                subtitle="Fill out the form and our academic advisors will get back to you within 24 hours."
                submitLabel="Send Message"
                fields={[
                  {
                    kind: "text",
                    name: "firstName",
                    label: "First Name",
                    required: true,
                    placeholder: "Ali",
                  },
                  {
                    kind: "text",
                    name: "lastName",
                    label: "Last Name",
                    required: true,
                    placeholder: "Khan",
                  },
                  {
                    kind: "email",
                    name: "email",
                    label: "Email Address",
                    required: true,
                    placeholder: "ali.khan@example.com",
                  },
                  {
                    kind: "select",
                    name: "role",
                    label: "I am a...",
                    required: true,
                    options: [
                      { value: "student", label: "Student / Parent" },
                      { value: "tutor", label: "Tutor" },
                      { value: "school", label: "School / Institution" },
                      { value: "other", label: "Other" },
                    ],
                  },
                  {
                    kind: "textarea",
                    name: "message",
                    label: "Message",
                    required: true,
                    placeholder: "How can we help you?",
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

