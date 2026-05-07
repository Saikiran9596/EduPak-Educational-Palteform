"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function SortSelect({ currentSort }: { currentSort: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (val: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", val);
    router.push(`/tutors?${params.toString()}`);
  };

  return (
    <select 
      className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-primary shadow-sm"
      defaultValue={currentSort}
      onChange={(e) => handleSortChange(e.target.value)}
    >
      <option value="newest">Newest</option>
      <option value="rating">Top Rated</option>
      <option value="price_asc">Price: Low to High</option>
      <option value="price_desc">Price: High to Low</option>
    </select>
  );
}
