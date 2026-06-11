import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { PostBadge } from "@/components/ui/Badge";
import { formatRelativeTime } from "@/lib/utils";
import type { Post } from "@/types";
interface LatestAnnouncementsProps {
  posts: Post[];
}

export default function LatestAnnouncements({ posts }: LatestAnnouncementsProps) {
  return (
    <section className="py-16 bg-brand-gray-light">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-0">
          <SectionTitle subtitle="중요 공지사항과 최신 소식을 확인하세요.">
            공지사항
          </SectionTitle>
          <Link
            href="/board"
            className="text-sm text-brand-blue hover:text-brand-blue-dark font-medium mb-8 flex items-center gap-1"
          >
            전체 보기
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="bg-white rounded-xl overflow-hidden border border-brand-gray-light divide-y divide-brand-gray-light"
          style={{ boxShadow: "0 2px 8px rgba(5,106,166,0.06)" }}
        >
          {posts.map((post) => (
            <Link
              key={post.id}
              href="/board"
              className={`flex items-start sm:items-center gap-3 px-5 py-4 hover:bg-brand-blue-light/50 transition-colors ${
                post.isPinned ? "bg-brand-blue-light/30" : ""
              }`}
            >
              <div className="flex items-center gap-2 shrink-0">
                {post.isPinned && (
                  <span className="text-brand-blue text-xs font-bold">📌</span>
                )}
                <PostBadge category={post.category} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-brand-near-black truncate">
                  {post.title}
                </p>
                <p className="text-xs text-brand-gray mt-0.5 hidden sm:block">
                  {post.department} · {post.author}
                </p>
              </div>
              <div className="text-xs text-brand-gray shrink-0">
                {formatRelativeTime(post.createdAt)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
