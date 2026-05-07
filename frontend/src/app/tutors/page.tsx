import { Container, Badge, Button } from "@/components/ui";
import { TutorCard } from "@/components/tutor-card";
import { TutorsClient } from "./tutors-client";
import { SortSelect } from "./sort-select";
import { cities, getTutors, subjects, formatPkr } from "@/lib/tutors";
import Link from "next/link";

type Mode = "Online" | "Home" | "TutorLocation";

export default async function TutorsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const q = (typeof sp.q === "string" ? sp.q : "").trim().toLowerCase();
  const subject = typeof sp.subject === "string" ? sp.subject : "";
  const city = typeof sp.city === "string" ? sp.city : "";
  const mode = typeof sp.mode === "string" ? sp.mode : "";
  const level = typeof sp.level === "string" ? sp.level : "";
  const sort = typeof sp.sort === "string" ? sp.sort : "newest";
  const minPrice = Number(sp.minPrice) || 0;
  const maxPrice = Number(sp.maxPrice) || 10000;

  const allTutors = await getTutors();

  let filtered = allTutors.filter((t) => {
    const queryOk =
      q.length === 0 ||
      t.name.toLowerCase().includes(q) ||
      t.subjects.some((s) => s.toLowerCase().includes(q)) ||
      t.tagline.toLowerCase().includes(q);
    const subjectOk = !subject || t.subjects.includes(subject);
    const cityOk = !city || t.city === city;
    const modeOk = !mode || t.modes.includes(mode as Mode);
    const levelOk = !level || t.levelTags.includes(level);
    const priceOk = t.pricePkrPerHour >= minPrice && t.pricePkrPerHour <= maxPrice;
    return queryOk && subjectOk && cityOk && modeOk && levelOk && priceOk;
  });

  // Sorting
  filtered = [...filtered].sort((a, b) => {
    if (sort === "price_asc") return a.pricePkrPerHour - b.pricePkrPerHour;
    if (sort === "price_desc") return b.pricePkrPerHour - a.pricePkrPerHour;
    if (sort === "rating") return b.rating - a.rating;
    return 0; // Default: newest (assuming order in DB)
  });

  const activeFilters = [
    subject && { label: `Subject: ${subject}`, key: "subject" },
    city && { label: `City: ${city}`, key: "city" },
    mode && { label: `Mode: ${mode}`, key: "mode" },
    level && { label: `Level: ${level}`, key: "level" },
    (minPrice > 0 || maxPrice < 10000) && { label: `Price: ${minPrice}-${maxPrice}`, key: "price" },
  ].filter(Boolean) as { label: string; key: string }[];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Search Header */}
      <div className="bg-white border-b border-slate-200 py-8">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">Find a Tutor</h1>
              <p className="text-slate-500 mt-1">Discover expert tutors tailored to your learning goals.</p>
            </div>
            <form className="relative flex-1 max-w-lg">
              <input
                name="q"
                defaultValue={q}
                placeholder="Search by name, subject, or specialty..."
                className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition outline-none"
              />
              <span className="absolute left-4 top-3.5 text-slate-400">🔍</span>
              {/* Keep other params */}
              {subject && <input type="hidden" name="subject" value={subject} />}
              {city && <input type="hidden" name="city" value={city} />}
              {mode && <input type="hidden" name="mode" value={mode} />}
              {level && <input type="hidden" name="level" value={level} />}
            </form>
          </div>
        </Container>
      </div>

      <Container className="py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-slate-900 uppercase tracking-wider text-xs">Filters</h2>
                <Link href="/tutors" className="text-xs font-semibold text-primary hover:underline">Reset All</Link>
              </div>

              <form className="space-y-6 rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                {/* Keep search query if filtering */}
                <input type="hidden" name="q" value={q} />
                
                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Subject</label>
                  <select name="subject" defaultValue={subject} className="w-full h-10 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:border-primary">
                    <option value="">All Subjects</option>
                    {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* City */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">City</label>
                  <select name="city" defaultValue={city} className="w-full h-10 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:border-primary">
                    <option value="">All Cities</option>
                    {cities.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* Level */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Level</label>
                  <select name="level" defaultValue={level} className="w-full h-10 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:border-primary">
                    <option value="">All Levels</option>
                    <option value="Primary (1-5)">Primary (1-5)</option>
                    <option value="Middle (6-8)">Middle (6-8)</option>
                    <option value="O-Levels / Matric">O Levels / Matric</option>
                    <option value="A-Levels / FSC">A Levels / FSC</option>
                  </select>
                </div>

                {/* Mode */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Mode</label>
                  <div className="space-y-1">
                    {["Online", "Home"].map(m => (
                      <label key={m} className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 cursor-pointer">
                        <input type="radio" name="mode" value={m} defaultChecked={mode === m} className="accent-primary" />
                        {m}
                      </label>
                    ))}
                    <label className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 cursor-pointer">
                      <input type="radio" name="mode" value="" defaultChecked={!mode} className="accent-primary" />
                      Any
                    </label>
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Price (PKR/hr)</label>
                  <div className="flex items-center gap-2">
                    <input type="number" name="minPrice" placeholder="Min" defaultValue={minPrice || ""} className="w-full h-9 rounded border border-slate-200 bg-slate-50 px-2 text-sm" />
                    <span className="text-slate-400">-</span>
                    <input type="number" name="maxPrice" placeholder="Max" defaultValue={maxPrice === 10000 ? "" : maxPrice} className="w-full h-9 rounded border border-slate-200 bg-slate-50 px-2 text-sm" />
                  </div>
                </div>

                <Button className="w-full h-10">Apply Filters</Button>
              </form>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Toolbar */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-slate-600">
                Found <span className="font-bold text-slate-900">{filtered.length}</span> verified tutors
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-500">Sort by:</span>
                <SortSelect currentSort={sort} />
              </div>
            </div>

            {/* Active Chips */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {activeFilters.map(f => {
                  const filteredParams = new URLSearchParams();
                  Object.entries(sp).forEach(([k, v]) => {
                    if (k !== f.key && v !== undefined) {
                      filteredParams.set(k, String(v));
                    }
                  });
                  return (
                    <Badge key={f.key} variant="neutral" className="flex items-center gap-1 pr-1 pl-3 py-1">
                      {f.label}
                      <Link href={`/tutors?${filteredParams.toString()}`} className="ml-1 hover:text-red-500">✕</Link>
                    </Badge>
                  );
                })}
              </div>
            )}

            {/* Grid */}
            {filtered.length > 0 ? (
              <TutorsClient tutors={filtered} />
            ) : (
              <div className="flex flex-col items-center justify-center py-20 rounded-3xl border-2 border-dashed border-slate-200 bg-white text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-slate-900">No tutors found</h3>
                <p className="text-slate-500 mt-2 max-w-xs">We couldn&apos;t find any tutors matching your current filters. Try broadening your search.</p>
                <Button variant="outline" className="mt-6" asChild>
                  <Link href="/tutors">Clear All Filters</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
