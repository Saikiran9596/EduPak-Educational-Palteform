import { Container, SectionTitle } from "@/components/ui";
import { SimpleForm } from "@/components/forms/simple-form";
import { tutors } from "@/lib/tutors";

export default async function StudentInquiryPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const tutorId = typeof sp.tutor === "string" ? sp.tutor : "";
  const tutor = tutorId ? tutors.find((t) => t.id === tutorId) : undefined;

  return (
    <main className="py-10 pb-16">
      <Container>
        <SectionTitle
          title="Student Registration Inquiry"
          subtitle="Tell us what you need and we’ll match you with the best tutor."
        />

        <div className="mx-auto mt-10 max-w-3xl">
          <SimpleForm
            title={tutor ? `Inquiry for ${tutor.name}` : "Inquiry Form"}
            subtitle="Fill out the details below and we will contact you shortly."
            submitLabel="Submit Inquiry"
            tableName="inquiries"
            successMessage="Thank you! Your inquiry has been received. Our team will contact you soon."
            additionalData={tutorId ? { tutor_id: tutorId } : {}}
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
                placeholder: "0300 1234567",
              },
              {
                kind: "select",
                name: "city",
                label: "City",
                required: true,
                options: [
                  { value: "Lahore", label: "Lahore" },
                  { value: "Karachi", label: "Karachi" },
                  { value: "Islamabad", label: "Islamabad" },
                ],
              },
              {
                kind: "select",
                name: "role",
                label: "I am a...",
                required: true,
                options: [
                  { value: "student", label: "Student" },
                  { value: "parent", label: "Parent" },
                ],
              },
              {
                kind: "textarea",
                name: "requirements",
                label: "What do you want to learn?",
                required: true,
                placeholder: "Subject, grade, board, and goals…",
                rows: 4,
              },
            ]}
          />
        </div>
      </Container>
    </main>
  );
}

