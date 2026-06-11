import { Suspense } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ClubCard from "@/components/clubs/ClubCard";
import CategoryFilter from "@/components/clubs/CategoryFilter";
import { getClubs } from "@/lib/supabase/queries";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "동아리 목록",
};

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ClubsPage({ searchParams }: PageProps) {
  const { category } = await searchParams;
  const clubs = await getClubs(category);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* 브레드크럼 */}
      <nav className="text-sm text-brand-gray mb-6">
        <span>홈</span>
        <span className="mx-2">›</span>
        <span className="text-brand-near-black font-medium">동아리</span>
      </nav>

      <div className="flex flex-col gap-2 mb-8">
        <SectionTitle>모든 동아리</SectionTitle>
        <p className="text-brand-gray-dark text-sm -mt-4">
          총 <span className="font-semibold text-brand-blue">{clubs.length}개</span>의 동아리
        </p>
      </div>

      <Suspense>
        <CategoryFilter />
      </Suspense>

      {clubs.length === 0 ? (
        <div className="py-24 text-center text-brand-gray">
          <p className="text-lg">해당 카테고리의 동아리가 없습니다.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {clubs.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      )}
    </div>
  );
}
