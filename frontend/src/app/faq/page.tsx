import { Container } from "@/components/ui";
import { Faq, type FaqItem } from "@/components/faq";

const items: FaqItem[] = [
  {
    id: "book-lesson",
    category: "Students",
    question: "How do I book a lesson with a tutor?",
    answer:
      'Find a tutor, open their profile, and click "Book Free Trial" or "Book". Choose a time slot and submit your request.',
  },
  {
    id: "verified",
    category: "Parents",
    question: "Are all your tutors verified?",
    answer:
      "Yes. We verify academic credentials and run background checks before listing tutors on the platform.",
  },
  {
    id: "payments",
    category: "Pricing",
    question: "What payment methods do you accept?",
    answer:
      "We support common local methods such as bank transfer and popular wallets (integration depends on your backend).",
  },
  {
    id: "reschedule",
    category: "Students",
    question: "Can I cancel or reschedule a booked lesson?",
    answer:
      "Yes. You can reschedule from your booking details page (policy depends on tutor availability and cancellation window).",
  },
  {
    id: "online",
    category: "Technical",
    question: "How do online lessons work?",
    answer:
      "Lessons happen through an online meeting link. Tutors can share a whiteboard and resources, and sessions can be recorded if enabled.",
  },
  {
    id: "requirements",
    category: "Tutors",
    question: "What are the requirements to become a tutor?",
    answer:
      "Minimum Bachelor’s degree (or enrolled), subject expertise proof, and reliable internet setup for online sessions.",
  },
  {
    id: "guarantee",
    category: "Pricing",
    question: "Is there a satisfaction guarantee?",
    answer:
      "If you’re not satisfied after the first session, we can rematch you with another tutor (final policy depends on your business rules).",
  },
  {
    id: "recordings",
    category: "Technical",
    question: "How do I access my past lesson recordings?",
    answer:
      "Recordings appear in your account under session history when enabled for your plan/tutor.",
  },
];

export default function FaqPage() {
  return (
    <main className="py-10 pb-16">
      <Container>
        <Faq items={items} />
      </Container>
    </main>
  );
}

