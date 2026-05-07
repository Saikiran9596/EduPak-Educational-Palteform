import Link from "next/link";
import { quickLinks } from "@/lib/design-pages";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="text-base font-bold text-primary">EduSuccess Pakistan</p>
          <p className="text-sm text-slate-600">High-quality education for a brighter future.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 transition hover:border-primary hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
