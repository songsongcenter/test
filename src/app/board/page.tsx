import SectionTitle from "@/components/ui/SectionTitle";
import { PostBadge } from "@/components/ui/Badge";
import { getPosts } from "@/lib/supabase/queries";
import { formatKoreanDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "게시판",
};

export default async function BoardPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* 브레드크럼 */}
      <nav className="text-sm text-brand-gray mb-6">
        <span>홈</span>
        <span className="mx-2">›</span>
        <span className="text-brand-near-black font-medium">게시판</span>
      </nav>

      <SectionTitle subtitle="공지사항, 행사 안내, 동아리 소식을 확인하세요.">
        게시판
      </SectionTitle>

      {/* 게시판 테이블 */}
      <div className="bg-white rounded-xl overflow-hidden border border-brand-gray-light"
        style={{ boxShadow: "0 2px 8px rgba(5,106,166,0.06)" }}
      >
        {/* 헤더 — 모바일 숨김 */}
        <div className="hidden md:grid md:grid-cols-[auto_1fr_auto_auto_auto] gap-4 px-5 py-3 bg-brand-gray-light text-xs font-semibold text-brand-gray-dark border-b border-brand-gray-light">
          <span className="w-16">분류</span>
          <span>제목</span>
          <span className="w-24 text-center">작성자</span>
          <span className="w-24 text-center">날짜</span>
          <span className="w-16 text-center">조회</span>
        </div>

        {/* 게시글 목록 */}
        <div className="divide-y divide-brand-gray-light">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`px-5 py-4 hover:bg-brand-blue-light/30 transition-colors cursor-pointer ${
                post.isPinned ? "bg-brand-blue-light/20" : ""
              }`}
            >
              {/* 모바일 레이아웃 */}
              <div className="md:hidden">
                <div className="flex items-center gap-2 mb-1.5">
                  {post.isPinned && <span className="text-brand-blue text-xs">📌</span>}
                  <PostBadge category={post.category} />
                </div>
                <p className={`text-sm font-medium ${post.isPinned ? "text-brand-blue" : "text-brand-near-black"}`}>
                  {post.title}
                </p>
                <div className="mt-1 flex items-center gap-3 text-xs text-brand-gray">
                  <span>{post.author}</span>
                  <span>·</span>
                  <span>{formatKoreanDate(post.createdAt)}</span>
                  <span>·</span>
                  <span>조회 {post.views}</span>
                </div>
              </div>

              {/* 데스크탑 레이아웃 */}
              <div className="hidden md:grid md:grid-cols-[auto_1fr_auto_auto_auto] gap-4 items-center">
                <div className="w-16 flex items-center gap-1.5">
                  {post.isPinned && <span className="text-brand-blue text-xs">📌</span>}
                  <PostBadge category={post.category} />
                </div>
                <p className={`text-sm font-medium truncate ${
                  post.isPinned ? "text-brand-blue font-semibold" : "text-brand-near-black"
                }`}>
                  {post.title}
                </p>
                <div className="w-24 text-center text-xs text-brand-gray">
                  <p className="font-medium text-brand-gray-dark">{post.author}</p>
                  <p>{post.department}</p>
                </div>
                <span className="w-24 text-center text-xs text-brand-gray">
                  {formatKoreanDate(post.createdAt)}
                </span>
                <span className="w-16 text-center text-xs text-brand-gray">
                  {post.views.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 하단 메타 */}
      <div className="mt-4 flex items-center justify-between text-xs text-brand-gray">
        <span>총 {posts.length}개의 게시글</span>
        <span>* 공지글은 항상 상단에 고정됩니다.</span>
      </div>
    </div>
  );
}
