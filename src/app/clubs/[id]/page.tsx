import Image from "next/image";
import { notFound } from "next/navigation";
import { ClubBadge } from "@/components/ui/Badge";
import Avatar from "@/components/ui/Avatar";
import MemberList from "@/components/clubs/MemberList";
import ActivityTimeline from "@/components/clubs/ActivityTimeline";
import ClubGallery from "@/components/clubs/ClubGallery";
import { getClubById, getAllClubIds } from "@/lib/supabase/queries";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const ids = await getAllClubIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const club = await getClubById(id);
  if (!club) return {};
  return {
    title: club.name,
    description: club.description,
  };
}

export default async function ClubDetailPage({ params }: PageProps) {
  const { id } = await params;
  const club = await getClubById(id);

  if (!club) notFound();

  return (
    <div>
      {/* 히어로 배너 */}
      <div className="relative h-56 md:h-72 overflow-hidden bg-brand-gray-light">
        <Image
          src={club.imageUrl}
          alt={club.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="container mx-auto max-w-6xl">
            <ClubBadge category={club.category} className="mb-3" />
            <h1 className="text-2xl md:text-3xl font-bold text-white">{club.name}</h1>
            <div className="mt-2 flex items-center gap-4 text-sm text-white/80">
              <span>회원 {club.memberCount}명</span>
              <span>·</span>
              <span>{club.foundedYear}년 창설</span>
            </div>
          </div>
        </div>
      </div>

      {/* 브레드크럼 */}
      <div className="container mx-auto max-w-6xl px-4 py-4">
        <nav className="text-sm text-brand-gray">
          <span>홈</span>
          <span className="mx-2">›</span>
          <a href="/clubs" className="hover:text-brand-blue">동아리</a>
          <span className="mx-2">›</span>
          <span className="text-brand-near-black font-medium">{club.name}</span>
        </nav>
      </div>

      {/* 본문 */}
      <div className="container mx-auto max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* 왼쪽 — 메인 콘텐츠 */}
          <div className="lg:col-span-2 space-y-10">
            {/* 동아리 소개 */}
            <section>
              <h2 className="text-lg font-bold text-brand-near-black mb-4 pb-2 border-b border-brand-gray-light">
                동아리 소개
              </h2>
              <p className="text-brand-gray-dark leading-relaxed">{club.longDescription}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {club.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs bg-brand-blue-light text-brand-blue font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </section>

            {/* 활동 이력 */}
            {club.activities.length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-brand-near-black mb-6 pb-2 border-b border-brand-gray-light">
                  최근 활동
                </h2>
                <ActivityTimeline activities={club.activities} />
              </section>
            )}

            {/* 갤러리 */}
            {club.galleryImages.length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-brand-near-black mb-4 pb-2 border-b border-brand-gray-light">
                  활동 갤러리
                </h2>
                <ClubGallery images={club.galleryImages} clubName={club.name} />
              </section>
            )}
          </div>

          {/* 오른쪽 — 사이드바 */}
          <div className="space-y-6">
            {/* 동아리장 카드 */}
            {club.leader.name && (
              <div className="bg-brand-blue-light rounded-xl p-5">
                <h3 className="text-sm font-semibold text-brand-blue mb-3">동아리장</h3>
                <div className="flex items-center gap-3">
                  <Avatar name={club.leader.name} size="lg" />
                  <div>
                    <p className="font-bold text-brand-near-black">{club.leader.name}</p>
                    <p className="text-sm text-brand-gray-dark">{club.leader.department}</p>
                  </div>
                </div>
              </div>
            )}

            {/* 회원 수 */}
            <div className="bg-white rounded-xl p-5 border border-brand-gray-light">
              <h3 className="text-sm font-semibold text-brand-near-black mb-1">
                회원 현황
              </h3>
              <p className="text-3xl font-bold text-brand-blue">{club.memberCount}<span className="text-base font-normal text-brand-gray-dark ml-1">명</span></p>
              {club.members.length > 0 && <MemberList members={club.members} />}
            </div>

            {/* 가입 신청 버튼 */}
            <button className="w-full py-3 bg-brand-blue text-white font-semibold rounded-xl hover:bg-brand-blue-dark transition-colors">
              가입 신청하기
            </button>
            <p className="text-xs text-center text-brand-gray">
              가입 신청 후 동아리장 승인이 필요합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
