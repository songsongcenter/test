"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { logout } from "@/app/actions/auth";

const NAV_LINKS = [
  { href: "/", label: "홈" },
  { href: "/clubs", label: "동아리" },
  { href: "/board", label: "게시판" },
];

type AuthUser = { email: string; name: string | null } | null;

export default function Header({ user }: { user: AuthUser }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const displayName = user?.name ?? user?.email ?? "";

  return (
    <header className="sticky top-0 z-50 bg-brand-blue shadow-md">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-2 text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 font-bold text-white text-sm">
              S
            </div>
            <span className="font-bold text-lg leading-tight hidden sm:block">
              삼천리 동아리 커뮤니티
            </span>
            <span className="font-bold text-base leading-tight sm:hidden">
              삼천리
            </span>
          </Link>

          {/* 데스크탑 내비게이션 + 인증 영역 */}
          <div className="hidden md:flex items-center gap-1">
            <nav className="flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="ml-2 pl-2 border-l border-white/20 flex items-center gap-2">
              {user ? (
                <>
                  <span className="flex items-center gap-1.5 text-white/80 text-sm">
                    <UserCircleIcon className="w-5 h-5" />
                    <span className="max-w-[120px] truncate">{displayName}</span>
                  </span>
                  <form action={logout}>
                    <button
                      type="submit"
                      className="px-3 py-1.5 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      로그아웃
                    </button>
                  </form>
                </>
              ) : (
                <Link
                  href="/login"
                  className="px-4 py-1.5 rounded-lg text-sm font-medium bg-white/15 text-white hover:bg-white/25 transition-colors"
                >
                  로그인
                </Link>
              )}
            </div>
          </div>

          {/* 모바일 햄버거 버튼 */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-brand-blue-dark border-t border-white/10">
          <nav className="container mx-auto max-w-6xl px-4 py-2 flex flex-col">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-1 pt-2 border-t border-white/10">
              {user ? (
                <>
                  <div className="flex items-center gap-2 px-4 py-2 text-white/70 text-sm">
                    <UserCircleIcon className="w-5 h-5 flex-shrink-0" />
                    <span className="truncate">{displayName}</span>
                  </div>
                  <form action={logout}>
                    <button
                      type="submit"
                      className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      로그아웃
                    </button>
                  </form>
                </>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  로그인
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
