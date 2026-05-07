import { notFound } from "next/navigation";
import { ScreenRenderer } from "@/components/screen-renderer";
import { getPageHtml } from "@/lib/design-content";
import { designPages, getDesignPageBySlug } from "@/lib/design-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return designPages.map((page) => ({ slug: page.slug }));
}

export default async function ScreenPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getDesignPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const html = await getPageHtml(page.sourceFolder);

  return (
    <main className="mx-auto w-full max-w-7xl px-2 py-4 md:px-4 md:py-6">
      <div className="mb-5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h1 className="text-2xl font-extrabold text-primary">{page.title}</h1>
        <p className="mt-1 text-sm text-slate-600">{page.description}</p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <ScreenRenderer html={html} />
      </div>
    </main>
  );
}
