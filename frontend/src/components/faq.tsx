"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: "All" | "Students" | "Parents" | "Tutors" | "Pricing" | "Technical";
};

export function Faq({ items }: { items: FaqItem[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FaqItem["category"]>("All");
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const categoryOk = category === "All" || item.category === category;
      const queryOk =
        q.length === 0 ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return categoryOk && queryOk;
    });
  }, [items, category, query]);

  const categories: Array<FaqItem["category"]> = [
    "All",
    "Students",
    "Parents",
    "Tutors",
    "Pricing",
    "Technical",
  ];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <div className="rounded-2xl bg-primary p-6 text-white">
          <h1 className="text-3xl font-extrabold">
            How can we help you today?
          </h1>
          <p className="mt-2 text-white/80">
            Search our knowledge base or browse categories below.
          </p>
          <div className="mt-5">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for 'pricing', 'tutor requirements', etc."
              className="h-12 w-full rounded-full border border-white/20 bg-white px-5 text-slate-900 outline-none ring-0 transition focus:ring-2 focus:ring-white/40"
            />
          </div>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {categories.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-secondary text-white shadow-sm"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
              >
                {c === "All" ? "All Questions" : c}
              </button>
            );
          })}
        </div>

        <div className="mt-6 space-y-3">
          {filtered.map((item) => {
            const open = item.id === openId;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenId(open ? null : item.id)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left hover:bg-slate-50"
                >
                  <span className="text-lg font-bold text-slate-900">
                    {item.question}
                  </span>
                  <span className={`text-slate-500 transition ${open ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>
                {open ? (
                  <div className="border-t border-slate-200 px-5 pb-5 pt-4 text-slate-600">
                    {item.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-600">
              No results. Try a different keyword.
            </div>
          ) : null}
        </div>
      </div>

      <aside className="lg:col-span-4 lg:sticky lg:top-24 self-start">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="absolute left-0 top-0 h-1 w-full bg-secondary" />
          <h2 className="text-2xl font-extrabold text-slate-900">
            Still have questions?
          </h2>
          <p className="mt-2 text-slate-600">
            Our support team is available to help you navigate your educational
            journey.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Button
              variant="secondary"
              onClick={() => window.open("https://wa.me/923001234567", "_blank")}
            >
              Chat on WhatsApp
            </Button>
            <Button
              variant="outline"
              onClick={() => (window.location.href = "tel:+923001234567")}
            >
              Call Support
            </Button>
            <Button
              variant="outline"
              onClick={() => (window.location.href = "mailto:support@edusuccess.pk")}
            >
              Email Us
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
}

