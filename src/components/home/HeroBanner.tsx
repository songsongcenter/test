import Link from "next/link";

interface HeroBannerProps {
  totalClubs: number;
  totalMembers: number;
  totalEvents: number;
}

export default function HeroBanner({ totalClubs, totalMembers, totalEvents }: HeroBannerProps) {
  return (
    <section className="relative bg-brand-blue overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-white" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-white" />
      </div>

      <div className="relative container mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white mb-6">
            삼천리 임직원 전용 플랫폼
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            함께 즐기는<br />
            <span className="text-white/90">동아리 커뮤니티</span>
          </h1>
          <p className="mt-5 text-white/80 text-base md:text-lg leading-relaxed">
            다양한 동아리 활동으로 더 즐거운 직장 생활을 만들어 보세요.<br className="hidden md:block" />
            취미, 스포츠, 봉사, 학습까지 — 나와 맞는 동아리를 찾아보세요.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/clubs"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-blue hover:bg-brand-blue-light transition-colors"
            >
              동아리 둘러보기
            </Link>
            <Link
              href="/board"
              className="inline-flex items-center rounded-lg border border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              게시판 보기
            </Link>
          </div>
        </div>

        {/* 통계 바 */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{totalClubs}개</div>
            <div className="text-xs text-white/70 mt-0.5">전체 동아리</div>
          </div>
          <div className="text-center border-x border-white/20">
            <div className="text-2xl font-bold text-white">{totalMembers}명</div>
            <div className="text-xs text-white/70 mt-0.5">활동 회원</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{totalEvents}개</div>
            <div className="text-xs text-white/70 mt-0.5">이번 달 행사</div>
          </div>
        </div>
      </div>
    </section>
  );
}
