import { Container } from "@/components/ui";
import { supabase } from "@/lib/supabase";
import { AdminContent } from "./admin-content";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  // Fetch data for the dashboard on the server
  const [tutorsRes, inquiriesRes, applicationsRes] = await Promise.all([
    supabase.from("tutors").select("*").order("created_at", { ascending: false }),
    supabase.from("inquiries").select("*").order("created_at", { ascending: false }),
    supabase.from("applications").select("*").order("created_at", { ascending: false }),
  ]);

  const tutors = tutorsRes.data || [];
  const inquiries = inquiriesRes.data || [];
  const applications = applicationsRes.data || [];

  return (
    <main className="py-10 pb-20 bg-slate-50 min-h-screen">
      <Container>
        <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-black text-primary tracking-tight">Admin Control</h1>
            <p className="text-slate-500 font-medium">Manage your platform data and requests.</p>
          </div>
          <div className="flex gap-3">
            <a 
              href="/admin/seed" 
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm border border-slate-200 hover:bg-slate-50 transition"
            >
              🌱 Seed Database
            </a>
          </div>
        </div>

        <AdminContent 
          initialTutors={tutors}
          initialInquiries={inquiries}
          initialApplications={applications}
        />
      </Container>
    </main>
  );
}
