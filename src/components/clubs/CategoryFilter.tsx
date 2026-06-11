"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { CATEGORY_LABELS } from "@/types";
import type { ClubCategory } from "@/types";

const CATEGORIES: { value: string; label: string }[] = [
  { value: "all", label: "전체" },
  ...Object.entries(CATEGORY_LABELS).map(([value, label]) => ({ value, label })),
];

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("category") ?? "all";

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete("category");
    } else {
      params.set("category", value);
    }
    router.push(`/clubs?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.value}
          onClick={() => handleFilter(cat.value)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            active === cat.value
              ? "bg-brand-blue text-white"
              : "bg-white text-brand-gray-dark border border-brand-gray-light hover:bg-brand-blue-light hover:text-brand-blue hover:border-brand-blue/30"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
