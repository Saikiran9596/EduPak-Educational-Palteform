"use client";

import { useState } from "react";
import { TutorCard } from "@/components/tutor-card";
import { Modal, Badge, Button, Chip } from "@/components/ui";
import { formatPkr, type Tutor } from "@/lib/tutors";
import Link from "next/link";
import Image from "next/image";

export function TutorsClient({ tutors }: { tutors: Tutor[] }) {
  const [comparing, setComparing] = useState<Tutor[]>([]);
  const [quickViewTutor, setQuickViewTutor] = useState<Tutor | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  const toggleCompare = (tutor: Tutor) => {
    setComparing((prev) => {
      if (prev.find((t) => t.id === tutor.id)) {
        return prev.filter((t) => t.id !== tutor.id);
      }
      if (prev.length >= 3) return prev; // Limit to 3
      return [...prev, tutor];
    });
  };

  return (
    <>
      {/* Comparison Tray */}
      {comparing.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl animate-in slide-in-from-bottom-8 duration-300">
          <div className="rounded-2xl bg-white p-4 shadow-2xl border border-primary/20 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {comparing.map((t) => (
                  <div key={t.id} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                    <Image src={t.avatarUrl} alt={t.name} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{comparing.length} / 3 selected</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">To compare</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setComparing([])}
                className="text-xs font-bold text-slate-400 hover:text-slate-600 px-3"
              >
                Clear
              </button>
              <Button 
                onClick={() => setShowComparison(true)}
                disabled={comparing.length < 2}
                className="h-10 px-6 rounded-xl"
              >
                Compare Now
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {tutors.map((t) => (
          <TutorCard 
            key={t.id} 
            tutor={t} 
            isComparing={comparing.some(c => c.id === t.id)}
            onCompareToggle={toggleCompare}
            onQuickView={setQuickViewTutor}
          />
        ))}
      </div>

      {/* Quick View Modal */}
      <Modal 
        isOpen={!!quickViewTutor} 
        onClose={() => setQuickViewTutor(null)} 
        title="Tutor Quick View"
      >
        {quickViewTutor && (
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="relative h-20 w-20 rounded-2xl overflow-hidden shadow-md">
                <Image src={quickViewTutor.avatarUrl} alt={quickViewTutor.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">{quickViewTutor.name}</h3>
                <p className="text-primary font-semibold text-sm">{quickViewTutor.tagline}</p>
                <div className="mt-2 flex gap-2">
                  <Badge>{quickViewTutor.rating} ⭐</Badge>
                  <Badge variant="neutral">{quickViewTutor.reviewsCount} reviews</Badge>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {quickViewTutor.subjects.map(s => <Chip key={s}>{s}</Chip>)}
                {quickViewTutor.levelTags.map(l => <Chip key={l}>{l}</Chip>)}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">About</h4>
              <div className="text-slate-600 text-sm leading-relaxed space-y-2">
                {quickViewTutor.about.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex gap-4">
              <ButtonLink href={`/tutors/${quickViewTutor.id}`} variant="outline" className="flex-1 rounded-xl">View Full Profile</ButtonLink>
              <ButtonLink href={`/student-inquiry?tutor=${quickViewTutor.id}`} className="flex-1 rounded-xl">Book Session</ButtonLink>
            </div>
          </div>
        )}
      </Modal>

      {/* Comparison Modal */}
      <Modal 
        isOpen={showComparison} 
        onClose={() => setShowComparison(false)} 
        title="Tutor Comparison"
        maxWidth="max-w-4xl"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 bg-slate-50 border-b border-slate-100"></th>
                {comparing.map(t => (
                  <th key={t.id} className="p-4 border-b border-slate-100 text-center">
                    <div className="relative h-16 w-16 mx-auto rounded-full overflow-hidden mb-2">
                      <Image src={t.avatarUrl} alt={t.name} fill className="object-cover" />
                    </div>
                    <div className="text-sm font-bold text-slate-900">{t.name}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="p-4 font-bold text-slate-500 border-b border-slate-50">Rate / hr</td>
                {comparing.map(t => <td key={t.id} className="p-4 text-center border-b border-slate-50 font-bold text-primary">PKR {formatPkr(t.pricePkrPerHour)}</td>)}
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-500 border-b border-slate-50">Rating</td>
                {comparing.map(t => <td key={t.id} className="p-4 text-center border-b border-slate-50">⭐ {t.rating}</td>)}
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-500 border-b border-slate-50">Subjects</td>
                {comparing.map(t => <td key={t.id} className="p-4 text-center border-b border-slate-50 text-xs">{t.subjects.join(", ")}</td>)}
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-500 border-b border-slate-50">Modes</td>
                {comparing.map(t => <td key={t.id} className="p-4 text-center border-b border-slate-50 text-xs">{t.modes.join(", ")}</td>)}
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-500">Action</td>
                {comparing.map(t => (
                  <td key={t.id} className="p-4 text-center">
                    <ButtonLink href={`/student-inquiry?tutor=${t.id}`} className="h-9 px-4 rounded-lg text-xs">Book</ButtonLink>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  );
}

// Sub-component for Link Button inside Modal
function ButtonLink({ href, children, variant = "primary", className = "" }: any) {
  return (
    <Link 
      href={href} 
      className={`inline-flex items-center justify-center font-bold transition shadow-sm ${
        variant === "primary" ? "bg-primary text-white hover:opacity-90" : "border-2 border-slate-200 text-slate-700 hover:bg-slate-50"
      } ${className}`}
    >
      {children}
    </Link>
  );
}
