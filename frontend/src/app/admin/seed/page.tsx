"use client";

import { useState } from "react";
import { Container, Button } from "@/components/ui";
import { supabase } from "@/lib/supabase";
import { tutors } from "@/lib/tutors";

export default function SeedPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function runSeed() {
    setStatus("loading");
    setMessage("Seeding tutors...");
    
    try {
      for (const tutor of tutors) {
        const { error } = await supabase.from("tutors").upsert({
          id: tutor.id,
          name: tutor.name,
          tagline: tutor.tagline,
          qualification: tutor.qualification,
          subjects: tutor.subjects,
          level_tags: tutor.levelTags,
          rating: tutor.rating,
          reviews_count: tutor.reviewsCount,
          city: tutor.city,
          area: tutor.area,
          modes: tutor.modes,
          price_pkr_per_hour: tutor.pricePkrPerHour,
          verified: tutor.verified,
          avatar_url: tutor.avatarUrl,
          about: tutor.about,
        });

        if (error) throw error;
      }
      setStatus("success");
      setMessage("Tutors seeded successfully!");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setMessage(err.message || "Failed to seed tutors.");
    }
  }

  return (
    <main className="py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-bold text-primary">Database Seeding</h1>
          <p className="mt-4 text-slate-600">
            This will populate your Supabase database with the initial tutor data.
          </p>
          
          <div className="mt-8 p-6 border rounded-2xl bg-slate-50">
            <Button onClick={runSeed} disabled={status === "loading"}>
              {status === "loading" ? "Seeding..." : "Seed Tutors Now"}
            </Button>
            
            {message && (
              <div className={`mt-4 p-3 rounded-lg text-sm font-medium ${
                status === "success" ? "bg-green-100 text-green-800" : 
                status === "error" ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"
              }`}>
                {message}
              </div>
            )}
          </div>
          
          <div className="mt-6">
            <a href="/tutors" className="text-sm font-semibold text-primary hover:underline">
              Back to Tutors
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
