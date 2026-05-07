export type DesignPage = {
  slug: string;
  title: string;
  sourceFolder: string;
  description: string;
};

export const designPages: DesignPage[] = [
  {
    slug: "home",
    title: "Homepage",
    sourceFolder: "homepage_edusuccess_pakistan_1",
    description: "Landing page for EduSuccess Pakistan.",
  },
  {
    slug: "services",
    title: "Our Tutoring Services",
    sourceFolder: "our_tutoring_services",
    description: "Overview of tutoring offerings and delivery modes.",
  },
  {
    slug: "find-tutor",
    title: "Find a Tutor",
    sourceFolder: "find_a_tutor_search_results",
    description: "Tutor search and listing experience.",
  },
  {
    slug: "pricing",
    title: "Pricing Plans",
    sourceFolder: "pricing_plans",
    description: "Subscription and package pricing page.",
  },
  {
    slug: "join-as-tutor",
    title: "Join as a Tutor",
    sourceFolder: "join_as_a_tutor",
    description: "Tutor recruitment and application page.",
  },
  {
    slug: "about",
    title: "About Our Journey",
    sourceFolder: "about_our_journey",
    description: "Brand story and mission details.",
  },
  {
    slug: "contact",
    title: "Contact Us",
    sourceFolder: "contact_us",
    description: "Inquiry and contact information page.",
  },
  {
    slug: "faq",
    title: "Frequently Asked Questions",
    sourceFolder: "frequently_asked_questions",
    description: "Common questions and support details.",
  },
  {
    slug: "student-inquiry",
    title: "Student Registration Inquiry",
    sourceFolder: "student_registration_inquiry",
    description: "Student onboarding and inquiry form.",
  },
  {
    slug: "tutor-profile",
    title: "Tutor Profile",
    sourceFolder: "tutor_profile_detailed_view",
    description: "Detailed tutor profile layout.",
  },
  {
    slug: "mobile",
    title: "Mobile Experience",
    sourceFolder: "mobile_experience",
    description: "Mobile-first experience screen.",
  },
];

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/tutors", label: "Find Tutors" },
  { href: "/pricing", label: "Pricing" },
  { href: "/join-as-tutor", label: "Recruitment" },
  { href: "/about", label: "About Us" },
];

export const quickLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/student-inquiry", label: "Student Inquiry" },
  { href: "/tutors/ayesha-khan", label: "Tutor Profile" },
];

export function getDesignPageBySlug(slug: string) {
  return designPages.find((page) => page.slug === slug);
}
