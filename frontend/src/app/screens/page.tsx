import Link from "next/link";
import { Container } from "@/components/ui";
import { designPages } from "@/lib/design-pages";

export default function ScreensIndexPage() {
  return (
    <main className="py-10 pb-16">
      <Container>
        <h1 className="text-2xl font-extrabold text-primary">
          Stitch Screens (Preview)
        </h1>
        <p className="mt-2 text-slate-600">
          These are raw stitched exports for reference. The real app pages are
          the main routes (Home, Tutors, Pricing, etc.).
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
          {designPages.map((p) => (
            <Link
              key={p.slug}
              href={`/screens/${p.slug}`}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="font-bold text-slate-900">{p.title}</div>
              <div className="mt-1 text-sm text-slate-600">{p.description}</div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}

