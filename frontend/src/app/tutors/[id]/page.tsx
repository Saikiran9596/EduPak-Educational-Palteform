import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge, ButtonLink, Chip, Container } from "@/components/ui";
import { formatPkr, getTutorById } from "@/lib/tutors";
import { AvailabilityGrid } from "./availability-grid";

export default async function TutorProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tutor = await getTutorById(id);

  if (!tutor) notFound();

  return (
    <main className="pb-24 bg-slate-50 min-h-screen">
      <section className="py-12 bg-white border-b border-slate-200">
        <Container>
          <div className="flex flex-col gap-10 md:flex-row md:items-center">
            <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-3xl border-4 border-primary/10 md:h-56 md:w-56 shadow-xl">
              <Image
                alt={`${tutor.name} profile`}
                src={tutor.avatarUrl}
                fill
                className="object-cover"
                sizes="224px"
                priority
              />
            </div>

            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                    {tutor.name}
                  </h1>
                  {tutor.verified ? <Badge>Verified Professional</Badge> : null}
                </div>
                <p className="text-xl text-primary font-semibold">{tutor.tagline}</p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-amber-500 text-lg">⭐</span>
                  <span className="text-slate-900 font-bold">{tutor.rating}</span>
                  <span className="text-slate-400">({tutor.reviewsCount} reviews)</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-lg">📍</span>
                  <span className="text-slate-900 font-bold">{tutor.city}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-lg">💻</span>
                  <span className="text-slate-900 font-bold">{tutor.modes.join(" & ")}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {tutor.subjects.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
                {tutor.levelTags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-12">
              {/* About Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3">
                  <span className="h-8 w-1 bg-primary rounded-full"></span>
                  About the Tutor
                </h2>
                <div className="text-lg text-slate-600 leading-relaxed space-y-4">
                  {tutor.about.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Teaching Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3">
                  <span className="h-8 w-1 bg-primary rounded-full"></span>
                  Teaching Expertise
                </h2>
                <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                  <table className="w-full text-sm text-left">
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-6 py-4 font-bold text-slate-500 bg-slate-50/50 w-40">Qualification</td>
                        <td className="px-6 py-4 text-slate-900 font-medium">{tutor.qualification}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-slate-500 bg-slate-50/50">Experience</td>
                        <td className="px-6 py-4 text-slate-900 font-medium">8+ Years Professional Teaching</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-slate-500 bg-slate-50/50">Levels</td>
                        <td className="px-6 py-4 text-slate-900 font-medium">{tutor.levelTags.join(", ")}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-slate-500 bg-slate-50/50">Languages</td>
                        <td className="px-6 py-4 text-slate-900 font-medium">English, Urdu, Punjabi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Availability */}
              <div className="space-y-6">
                <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3">
                  <span className="h-8 w-1 bg-primary rounded-full"></span>
                  Weekly Availability
                </h2>
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <AvailabilityGrid />
                </div>
              </div>
            </div>

            {/* Sidebar Sticky */}
            <aside className="lg:sticky lg:top-24 h-fit space-y-6">
              <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 space-y-8">
                <div className="text-center space-y-2">
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Hourly Investment</div>
                  <div className="text-4xl font-extrabold text-slate-900">
                    PKR {formatPkr(tutor.pricePkrPerHour)}
                    <span className="text-lg text-slate-400 font-medium ml-1">/hr</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <ButtonLink
                    href={`/student-inquiry?tutor=${tutor.id}`}
                    variant="secondary"
                    className="w-full h-14 rounded-2xl text-lg shadow-lg shadow-secondary/20"
                  >
                    Book Free Trial
                  </ButtonLink>
                  <a
                    className="inline-flex w-full h-14 items-center justify-center rounded-2xl bg-[#25D366] text-lg font-bold text-white transition hover:opacity-90 shadow-lg shadow-green-500/20 gap-2"
                    href={`https://wa.me/923001234567?text=Hi, I'm interested in tutoring with ${tutor.name} via EduPak.`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>💬</span>
                    WhatsApp Inquiry
                  </a>
                </div>

                <div className="pt-6 border-t border-slate-100 text-center">
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">
                    100% Satisfaction Guarantee. Pay securely after your trial session is completed.
                  </p>
                </div>
              </div>

              {/* Badges card */}
              <div className="rounded-3xl bg-slate-900 p-8 text-white space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-xl">🛡️</div>
                  <div className="text-sm font-bold">EduPak Secured</div>
                </div>
                <p className="text-xs text-slate-400">All tutors are manually interviewed and their degrees verified by our academic team.</p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}

