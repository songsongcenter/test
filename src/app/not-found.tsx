import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center px-4">
      <div className="text-6xl font-bold text-brand-blue mb-4">404</div>
      <h1 className="text-2xl font-bold text-brand-near-black mb-3">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="text-brand-gray-dark mb-8 max-w-md">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.
      </p>
      <Link
        href="/"
        className="inline-flex items-center rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-dark transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
