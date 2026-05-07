"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Container, Badge, Button, ButtonLink } from "@/components/ui";
import { formatPkr } from "@/lib/tutors";
import { supabase } from "@/lib/supabase";

type Tab = "overview" | "inquiries" | "applications" | "tutors" | "settings";

export function AdminContent({
  initialTutors,
  initialInquiries,
  initialApplications,
}: {
  initialTutors: any[];
  initialInquiries: any[];
  initialApplications: any[];
}) {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [tutors, setTutors] = useState(initialTutors);
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [applications, setApplications] = useState(initialApplications);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState<string | null>(null);

  // Stats
  const stats = useMemo(() => [
    { label: "Total Inquiries", value: inquiries.length, icon: "📩", color: "text-blue-600 bg-blue-50" },
    { label: "Pending Apps", value: applications.length, icon: "📄", color: "text-amber-600 bg-amber-50" },
    { label: "Active Tutors", value: tutors.length, icon: "🎓", color: "text-green-600 bg-green-50" },
  ], [inquiries, applications, tutors]);

  // Analytics Data
  const analytics = useMemo(() => {
    const cityCount: Record<string, number> = {};
    tutors.forEach(t => { cityCount[t.city] = (cityCount[t.city] || 0) + 1; });
    
    const roleCount: Record<string, number> = {};
    inquiries.forEach(i => { roleCount[i.role] = (roleCount[i.role] || 0) + 1; });

    return { 
      cities: Object.entries(cityCount).map(([name, val]) => ({ name, val })),
      roles: Object.entries(roleCount).map(([name, val]) => ({ name, val }))
    };
  }, [tutors, inquiries]);

  // Filtering
  const filteredData = useMemo(() => {
    const s = search.toLowerCase();
    if (activeTab === "inquiries") {
      return inquiries.filter(i => 
        i.full_name.toLowerCase().includes(s) || i.email.toLowerCase().includes(s) || i.requirements.toLowerCase().includes(s)
      );
    }
    if (activeTab === "applications") {
      return applications.filter(a => 
        a.full_name.toLowerCase().includes(s) || a.email.toLowerCase().includes(s) || a.subjects.toLowerCase().includes(s)
      );
    }
    if (activeTab === "tutors") {
      return tutors.filter(t => 
        t.name.toLowerCase().includes(s) || t.tagline?.toLowerCase().includes(s) || t.city?.toLowerCase().includes(s)
      );
    }
    return [];
  }, [activeTab, search, inquiries, applications, tutors]);

  // Actions
  async function toggleVerify(tutorId: string, current: boolean) {
    setLoading(tutorId);
    const { error } = await supabase
      .from("tutors")
      .update({ verified: !current })
      .eq("id", tutorId);
    
    if (!error) {
      setTutors(prev => prev.map(t => t.id === tutorId ? { ...t, verified: !current } : t));
    }
    setLoading(null);
  }

  async function deleteItem(id: string, table: string) {
    if (!confirm("Are you sure you want to delete this entry?")) return;
    setLoading(id);
    const { error } = await supabase.from(table).delete().eq("id", id);
    if (!error) {
      if (table === "inquiries") setInquiries(prev => prev.filter(i => i.id !== id));
      if (table === "applications") setApplications(prev => prev.filter(a => a.id !== id));
      if (table === "tutors") setTutors(prev => prev.filter(t => t.id !== id));
    }
    setLoading(null);
  }

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-transform group-hover:scale-110 ${s.color}`}>
                {s.icon}
              </div>
              <div>
                <div className="text-sm font-medium text-slate-500">{s.label}</div>
                <div className="text-2xl font-bold text-slate-900">{s.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs Navigation */}
      <div className="flex p-1 bg-slate-200/50 rounded-xl w-fit">
        {(["overview", "inquiries", "applications", "tutors", "settings"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-6 py-2 text-sm font-bold rounded-lg transition-all ${
              activeTab === t ? "bg-white text-primary shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === "overview" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tutors by City Chart */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              Tutors by City
            </h3>
            <div className="space-y-4">
              {analytics.cities.map(c => {
                const percentage = (c.val / tutors.length) * 100;
                return (
                  <div key={c.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
                      <span>{c.name}</span>
                      <span>{c.val}</span>
                    </div>
                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${percentage}%` }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Inquiries by Role Chart */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Inquiries Distribution
            </h3>
            <div className="flex items-center gap-12">
              <div className="relative h-40 w-40 flex items-center justify-center">
                {/* Donut Chart (CSS) */}
                <div className="absolute inset-0 rounded-full border-[16px] border-slate-100"></div>
                <div className="absolute inset-0 rounded-full border-[16px] border-green-500" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)' }}></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">{inquiries.length}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Total</div>
                </div>
              </div>
              <div className="space-y-3">
                {analytics.roles.map((r, i) => (
                  <div key={r.name} className="flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-full ${i === 0 ? 'bg-green-500' : 'bg-slate-300'}`}></div>
                    <span className="text-sm font-medium text-slate-600 capitalize">{r.name}s</span>
                    <span className="text-sm font-bold text-slate-900">{r.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {(activeTab === "inquiries" || activeTab === "applications" || activeTab === "tutors") && (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-200 bg-slate-50/50 p-4 md:p-6">
            <div className="relative">
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-10 w-full md:w-80 rounded-lg border border-slate-300 bg-white pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <span className="absolute left-3 top-2.5 text-slate-400">🔍</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50/50 text-slate-500 uppercase text-xs font-bold tracking-wider">
                <tr>
                  <th className="px-6 py-4">Details</th>
                  {activeTab === "inquiries" && <th className="px-6 py-4">Status/Role</th>}
                  {activeTab === "applications" && <th className="px-6 py-4">Qualification</th>}
                  {activeTab === "tutors" && <th className="px-6 py-4">City/Rate</th>}
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-900">{item.full_name || item.name}</div>
                      <div className="text-xs text-slate-500">{item.email || item.tagline}</div>
                      {item.requirements && (
                        <div className="mt-1 text-xs text-slate-600 line-clamp-1 max-w-xs">{item.requirements}</div>
                      )}
                    </td>
                    
                    {activeTab === "inquiries" && (
                      <td className="px-6 py-4">
                        <Badge variant={item.role === "student" ? "success" : "neutral"}>
                          {item.role}
                        </Badge>
                      </td>
                    )}

                    {activeTab === "applications" && (
                      <td className="px-6 py-4 text-slate-600">
                        {item.qualification}
                      </td>
                    )}

                    {activeTab === "tutors" && (
                      <td className="px-6 py-4">
                        <div className="text-slate-900">{item.city}</div>
                        <div className="text-xs font-bold text-primary">PKR {formatPkr(item.price_pkr_per_hour)}/hr</div>
                      </td>
                    )}

                    <td className="px-6 py-4 whitespace-nowrap text-slate-500">
                      {new Date(item.created_at).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-4 text-right space-x-2">
                      {activeTab === "tutors" && (
                        <Button
                          variant="outline"
                          className="h-8 px-3 text-xs rounded-lg"
                          onClick={() => toggleVerify(item.id, item.verified)}
                          disabled={loading === item.id}
                        >
                          {item.verified ? "Unverify" : "Verify"}
                        </Button>
                      )}
                      <button
                        onClick={() => deleteItem(item.id, activeTab)}
                        disabled={loading === item.id}
                        className="text-red-500 hover:text-red-700 font-bold text-xs transition px-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "settings" && (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Platform Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Commission Rate (%)</label>
              <input type="number" defaultValue="20" className="h-12 w-full rounded-xl border border-slate-200 px-4 bg-slate-50" />
              <p className="text-xs text-slate-500">The percentage platform takes from tutor earnings.</p>
            </div>
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Free Trial Duration</label>
              <select className="h-12 w-full rounded-xl border border-slate-200 px-4 bg-slate-50">
                <option>30 Minutes</option>
                <option>45 Minutes</option>
                <option>1 Hour</option>
              </select>
              <p className="text-xs text-slate-500">Default duration for trial sessions.</p>
            </div>
          </div>
          <Button className="mt-8 px-8">Save All Changes</Button>
          
          <div className="mt-12 pt-12 border-t border-slate-100">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Development Tools</h4>
            <div className="flex gap-4">
              <ButtonLink href="/admin/seed" variant="outline">
                Reset & Seed Database
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
