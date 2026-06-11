import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-near-black text-white">
      <div className="container mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* 브랜드 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue font-bold text-white text-sm">
                S
              </div>
              <span className="font-bold text-lg">삼천리 동아리 커뮤니티</span>
            </div>
            <p className="text-sm text-brand-gray leading-relaxed">
              삼천리 임직원이 함께 만들어가는<br />
              동아리 활동 플랫폼입니다.
            </p>
          </div>

          {/* 바로가기 */}
          <div>
            <h3 className="font-semibold text-sm text-brand-gray mb-3 uppercase tracking-wide">바로가기</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-brand-gray hover:text-white transition-colors">홈</Link></li>
              <li><Link href="/clubs" className="text-brand-gray hover:text-white transition-colors">동아리 목록</Link></li>
              <li><Link href="/board" className="text-brand-gray hover:text-white transition-colors">게시판</Link></li>
            </ul>
          </div>

          {/* 문의 */}
          <div>
            <h3 className="font-semibold text-sm text-brand-gray mb-3 uppercase tracking-wide">문의</h3>
            <ul className="space-y-2 text-sm text-brand-gray">
              <li>인사팀 동아리 담당자</li>
              <li>내선: 02-3489-XXXX</li>
              <li>이메일: club@samchully.co.kr</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 하단 바 */}
      <div className="bg-brand-blue py-3">
        <div className="container mx-auto max-w-6xl px-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-xs text-white/80">
          <span>© 2026 삼천리 주식회사. All rights reserved.</span>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">개인정보처리방침</span>
            <span className="hover:text-white cursor-pointer">이용약관</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
