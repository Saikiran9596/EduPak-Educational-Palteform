import Image from "next/image";
import Link from "next/link";
import { Badge, Chip } from "@/components/ui";
import type { Tutor } from "@/lib/tutors";
import { formatPkr } from "@/lib/tutors";

export function TutorCard({ 
  tutor, 
  isComparing, 
  onCompareToggle, 
  onQuickView 
}: { 
  tutor: Tutor;
  isComparing?: boolean;
  onCompareToggle?: (tutor: Tutor) => void;
  onQuickView?: (tutor: Tutor) => void;
}) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-primary/30">
      {/* Compare Checkbox */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-slate-200 opacity-0 group-hover:opacity-100 transition">
        <input 
          type="checkbox" 
          checked={isComparing} 
          onChange={() => onCompareToggle?.(tutor)}
          className="h-4 w-4 accent-primary cursor-pointer" 
        />
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">Compare</span>
      </div>

      <div className="mb-3 flex items-start justify-between">
        <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary/20 group-hover:border-primary transition-colors">
          <Image
            alt={`${tutor.name} avatar`}
            src={tutor.avatarUrl}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div className="flex flex-col items-end gap-1">
          {tutor.verified ? <Badge>Verified</Badge> : null}
          <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
            ⭐ {tutor.rating}
          </div>
        </div>
      </div>

      <div className="mb-3">
        <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-primary transition-colors">{tutor.name}</h3>
        <p className="text-sm text-slate-600 line-clamp-1">{tutor.tagline}</p>
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        {tutor.subjects.slice(0, 2).map((s) => (
          <Chip key={s}>{s}</Chip>
        ))}
        {tutor.levelTags.slice(0, 1).map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>

      <div className="mb-4 space-y-1 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span>📍 {tutor.city}</span>
          <span>•</span>
          <span>👥 {tutor.reviewsCount} reviews</span>
        </div>
        <div className="flex items-center gap-2">
          <span>💻 {tutor.modes.includes("Online") ? "Online" : "In-Person"}</span>
          <span>•</span>
          <button 
            onClick={() => onQuickView?.(tutor)}
            className="text-primary font-bold hover:underline"
          >
            Quick View
          </button>
        </div>
      </div>

      <div className="mt-auto border-t border-slate-200 pt-4">
        <div className="mb-3 flex items-baseline justify-between">
          <div>
            <span className="text-xl font-extrabold text-slate-900">
              PKR {formatPkr(tutor.pricePkrPerHour)}
            </span>
            <span className="text-xs text-slate-500 font-medium">/hr</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            href={`/tutors/${tutor.id}`}
            className="flex-1 rounded-xl border-2 border-slate-200 px-4 py-2 text-center text-xs font-bold text-slate-700 transition hover:bg-slate-50 hover:border-slate-300"
          >
            Profile
          </Link>
          <Link
            href={`/student-inquiry?tutor=${tutor.id}`}
            className="flex-1 rounded-xl bg-primary px-4 py-2 text-center text-xs font-bold text-white transition hover:opacity-90 shadow-sm shadow-primary/20"
          >
            Book Now
          </Link>
        </div>
      </div>
    </article>
  );
}

