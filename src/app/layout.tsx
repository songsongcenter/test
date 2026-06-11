import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { createClient } from "@/lib/supabase/server";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: {
    default: "삼천리 동아리 커뮤니티",
    template: "%s | 삼천리 동아리 커뮤니티",
  },
  description: "삼천리 임직원 동아리 활동 플랫폼 — 다양한 동아리와 함께 즐거운 직장생활을 만들어 보세요.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const authUser = user
    ? {
        email: user.email ?? "",
        name: (user.user_metadata?.full_name as string | undefined) ?? null,
      }
    : null;

  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header user={authUser} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
