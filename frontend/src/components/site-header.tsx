"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/design-pages";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-lg font-extrabold text-primary">
          EduSuccess Pakistan
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {primaryNav.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/tutors" && pathname.startsWith("/tutors/"));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-slate-700 hover:bg-slate-100 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="h-4 w-px bg-slate-200 mx-2" />
          <Link
            href="/admin"
            className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-slate-800"
          >
            Admin Panel
          </Link>
        </nav>
      </div>
    </header>
  );
}
