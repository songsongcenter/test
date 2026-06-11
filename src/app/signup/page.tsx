import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { signup } from '@/app/actions/auth'

export const metadata = { title: '회원가입' }

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) redirect('/')

  const { error, message } = await searchParams

  if (message) {
    return (
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-brand-near-black mb-2">가입 신청 완료!</h2>
          <p className="text-brand-gray text-sm leading-relaxed">{message}</p>
          <Link
            href="/login"
            className="mt-6 inline-block text-brand-blue text-sm font-medium hover:underline"
          >
            로그인 화면으로 이동
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 mx-auto mb-4">
              <span className="text-brand-blue font-bold text-xl">S</span>
            </div>
            <h1 className="text-2xl font-bold text-brand-near-black">회원가입</h1>
            <p className="text-sm text-brand-gray mt-1">삼천리 임직원 전용 동아리 플랫폼</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          <form action={signup} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-near-black mb-1">
                이름
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="이름을 입력하세요"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-near-black mb-1">
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="이메일을 입력하세요"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-brand-near-black mb-1">
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="new-password"
                minLength={6}
                placeholder="6자 이상 입력하세요"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-shadow"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-brand-blue text-white rounded-lg text-sm font-medium hover:bg-brand-blue/90 active:scale-[0.98] transition-all"
            >
              회원가입
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-brand-gray">
            이미 계정이 있으신가요?{' '}
            <Link href="/login" className="text-brand-blue font-medium hover:underline">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
