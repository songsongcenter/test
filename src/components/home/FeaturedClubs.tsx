import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import ClubCard from "@/components/clubs/ClubCard";
import type { Club } from "@/types";

interface FeaturedClubsProps {
  clubs: Club[];
}

export default function FeaturedClubs({ clubs }: FeaturedClubsProps) {
  return (
    <section className="py-16 container mx-auto max-w-6xl px-4">
      <div className="flex items-end justify-between mb-0">
        <SectionTitle subtitle="삼천리 임직원들이 가장 활발하게 활동하는 동아리를 소개합니다.">
          인기 동아리
        </SectionTitle>
        <Link
          href="/clubs"
          className="text-sm text-brand-blue hover:text-brand-blue-dark font-medium mb-8 flex items-center gap-1"
        >
          전체 보기
          <span aria-hidden>→</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {clubs.map((club) => (
          <ClubCard key={club.id} club={club} />
        ))}
      </div>
    </section>
  );
}
