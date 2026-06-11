import Link from "next/link";

export default function ClubNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center px-4">
      <div className="text-5xl mb-4">🔍</div>
      <h1 className="text-2xl font-bold text-brand-near-black mb-3">
        동아리를 찾을 수 없습니다
      </h1>
      <p className="text-brand-gray-dark mb-8">
        요청하신 동아리가 존재하지 않거나 삭제되었습니다.
      </p>
      <Link
        href="/clubs"
        className="inline-flex items-center rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-dark transition-colors"
      >
        동아리 목록으로
      </Link>
    </div>
  );
}
