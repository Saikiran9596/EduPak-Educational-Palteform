import Image from "next/image";
import { ButtonLink, Chip, Container, Badge } from "@/components/ui";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.50),white)]"></div>
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8 text-center lg:text-left">
              <Badge variant="success" className="px-4 py-1.5 text-sm uppercase tracking-widest font-bold">Verified Tutors Across Pakistan</Badge>
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl leading-[1.1]">
                Empower Your Learning with <span className="text-primary italic">Expert</span> Guidance
              </h1>
              <p className="text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto lg:mx-0">
                Connect with the top 1% of verified tutors for O/A Levels, Matric, and Professional Coding. Personalized 1-on-1 sessions at your home or online.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <ButtonLink href="/student-inquiry" variant="secondary" className="h-14 px-8 rounded-2xl shadow-xl shadow-secondary/20">
                  Book Free Trial
                </ButtonLink>
                <ButtonLink href="/tutors" variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm">
                  Explore Tutors
                </ButtonLink>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-slate-500">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative shadow-sm">
                      <Image src={`https://i.pravatar.cc/150?u=${i}`} alt="User" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium">
                  <span className="text-slate-900 font-bold">5,000+</span> Students Joined
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-12 -left-12 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"></div>
              <div className="relative h-[400px] lg:h-[550px] overflow-hidden rounded-[2.5rem] border-[12px] border-white shadow-2xl rotate-2">
                <Image
                  alt="Student learning"
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 animate-bounce duration-[3s]">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-green-500 flex items-center justify-center text-white text-2xl">✓</div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Verified Tutors</div>
                    <div className="text-xs text-slate-500">Manual Screening</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: "Verified Tutors", val: "500+", color: "text-primary" },
              { label: "Hours Taught", val: "25k+", color: "text-secondary" },
              { label: "Happy Students", val: "5k+", color: "text-green-600" },
              { label: "Subject Areas", val: "100+", color: "text-amber-600" }
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className={`text-4xl font-extrabold ${s.color}`}>{s.val}</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works (Visual Flow) */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Simple 4-Step Process</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Getting started is easy. We handle the hard work of finding and screening the best educators for you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-100 -z-10"></div>
            {[
              { step: "01", title: "Inquiry", desc: "Submit your requirements and preferred timings.", icon: "📩" },
              { step: "02", title: "Screening", desc: "Our team matches you with the best available tutors.", icon: "🔍" },
              { step: "03", title: "Free Demo", desc: "Take a 30-min trial session to check compatibility.", icon: "🎥" },
              { step: "04", title: "Start Learning", desc: "Begin your journey with structured session plans.", icon: "🚀" }
            ].map((item, i) => (
              <div key={item.title} className="text-center space-y-4">
                <div className="h-24 w-24 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-4xl mx-auto shadow-sm relative group-hover:border-primary transition-all">
                  <div className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold h-6 w-6 rounded-full flex items-center justify-center">{item.step}</div>
                  {item.icon}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 lg:mx-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full"></div>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold tracking-tight">Why Choose EduPak?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Premium Tutors", desc: "Top graduates from GIKI, NUST, LUMS, and PU.", icon: "🎓" },
                  { title: "Personalized", desc: "1-on-1 attention focused on your weak areas.", icon: "🎯" },
                  { title: "Flexible Mode", desc: "Choose between Home Tuition or Online Sessions.", icon: "🏠" },
                  { title: "Regular Reports", desc: "Weekly progress updates for parents.", icon: "📊" }
                ].map(f => (
                  <div key={f.title} className="space-y-3">
                    <div className="text-3xl">{f.icon}</div>
                    <h3 className="text-lg font-bold">{f.title}</h3>
                    <p className="text-slate-400 text-sm">{f.desc}</p>
                  </div>
                ))}
              </div>
              <ButtonLink href="/about" variant="secondary" className="px-8 rounded-xl h-12">Learn More About Us</ButtonLink>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" alt="Teacher" fill className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      {/* Subjects Section */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">What do you want to learn?</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Mathematics", "Physics", "Chemistry", "Biology", "English", "Urdu",
              "Computer Science", "Coding", "IELTS", "Accounting", "Economics", "Sociology", "Psychology"
            ].map((s) => (
              <Link 
                key={s} 
                href={`/tutors?subject=${s}`}
                className="px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 font-bold hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                {s}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-blue-50/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">Student Success Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ahmed Raza", role: "A-Level Student", text: "EduPak found me a Physics tutor in 2 days. My grades went from C to A* in just 3 months!", avatar: "https://i.pravatar.cc/150?u=a" },
              { name: "Zainab Malik", role: "Parent (O-Levels)", text: "The verified tutor badge gave us peace of mind. Highly professional and punctual service.", avatar: "https://i.pravatar.cc/150?u=b" },
              { name: "Omar Farooq", role: "Matric Student", text: "Great experience with home tuition in Lahore. The tutor was extremely patient and clear.", avatar: "https://i.pravatar.cc/150?u=c" }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 space-y-4">
                <div className="flex gap-1 text-amber-400">{"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}</div>
                <p className="text-slate-600 italic">“{t.text}”</p>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                  <Image src={t.avatar} alt={t.name} width={40} height={40} className="rounded-full" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">{t.name}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <Container>
          <div className="bg-primary rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative space-y-8">
              <h2 className="text-4xl font-extrabold md:text-5xl">Ready to Start Your Success Journey?</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">Join thousands of students across Pakistan who are excelling with EduPak.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <ButtonLink href="/student-inquiry" variant="secondary" className="h-14 px-10 rounded-2xl text-lg">Book Your Free Trial</ButtonLink>
                <ButtonLink href="/join-as-tutor" variant="outline" className="h-14 px-10 rounded-2xl border-white text-white hover:bg-white/10 text-lg">Become a Tutor</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
