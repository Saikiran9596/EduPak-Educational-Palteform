"use client";

import { useState } from "react";

type Plan = {
  name: string;
  description: string;
  price: number;
  features: string[];
  highlighted?: boolean;
};

const onlinePlans: Plan[] = [
  {
    name: "Basic",
    description: "Essential support for foundational understanding.",
    price: 500,
    features: ["1-on-1 Online Sessions", "Standard Subject Tutors", "Monthly Progress Reports"],
  },
  {
    name: "Standard",
    description: "Comprehensive learning with experienced educators.",
    price: 800,
    features: [
      "All Basic Features",
      "Highly Experienced Tutors",
      "Weekly Assignment Reviews",
      "Direct Tutor Messaging",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    description: "Elite tutoring for exceptional academic results.",
    price: 1200,
    features: ["All Standard Features", "Top-Tier Subject Experts", "Customized Study Plans", "Exam Strategy"],
  },
];

const homePlans: Plan[] = [
  {
    name: "Basic",
    description: "In-person essentials for consistent learning.",
    price: 900,
    features: ["Home Tuition Sessions", "Standard Subject Tutors", "Monthly Progress Reports"],
  },
  {
    name: "Standard",
    description: "Most popular for structured home learning.",
    price: 1300,
    features: ["All Basic Features", "Highly Experienced Tutors", "Weekly Assignment Reviews", "Priority Support"],
    highlighted: true,
  },
  {
    name: "Premium",
    description: "Premium in-person coaching for top results.",
    price: 1700,
    features: ["All Standard Features", "Top-Tier Experts", "Customized Study Plans", "Exam Strategy"],
  },
];

export function PricingToggle() {
  const [mode, setMode] = useState<"online" | "home">("online");
  const plans = mode === "online" ? onlinePlans : homePlans;

  return (
    <div>
      <div className="mb-12 flex justify-center">
        <div className="inline-flex rounded-full bg-slate-200 p-1">
          <button
            onClick={() => setMode("online")}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
              mode === "online" ? "bg-white text-primary shadow-sm" : "text-slate-700"
            }`}
          >
            Online Tuition
          </button>
          <button
            onClick={() => setMode("home")}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
              mode === "home" ? "bg-white text-primary shadow-sm" : "text-slate-700"
            }`}
          >
            Home Tuition
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative flex h-full flex-col rounded-2xl border p-7 shadow-sm transition hover:shadow-md ${
              p.highlighted
                ? "border-primary bg-primary text-white md:-translate-y-3"
                : "border-slate-200 bg-white"
            }`}
          >
            {p.highlighted ? (
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary px-4 py-1 text-xs font-bold text-white shadow-sm">
                Most Popular
              </div>
            ) : null}

            <div className="mb-6 mt-2">
              <h3 className={`text-xl font-extrabold ${p.highlighted ? "" : "text-primary"}`}>
                {p.name}
              </h3>
              <p className={`mt-2 text-sm ${p.highlighted ? "text-white/80" : "text-slate-600"}`}>
                {p.description}
              </p>
              <div className="mt-5 flex items-baseline gap-2">
                <div className="text-3xl font-extrabold">{`Rs. ${p.price}`}</div>
                <div className={`text-sm ${p.highlighted ? "text-white/80" : "text-slate-500"}`}>/hr</div>
              </div>
            </div>

            <ul className={`mb-6 space-y-2 text-sm ${p.highlighted ? "text-white/90" : "text-slate-700"}`}>
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>

            <button
              className={`mt-auto rounded-lg px-5 py-3 text-sm font-semibold transition ${
                p.highlighted
                  ? "bg-secondary text-white hover:opacity-90"
                  : "border-2 border-primary text-primary hover:bg-primary/5"
              }`}
              type="button"
            >
              Select {p.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

