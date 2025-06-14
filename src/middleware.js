import {NextResponse} from 'next/server'
import {LOCALES} from './constants'

const locales = LOCALES.map((locale) => locale.code)

export function middleware(request) {
  const {pathname} = request.nextUrl

  const pathnameHasPublic = pathname === '/ajikan_game.html' || pathname === '/cv' || pathname === '/photo_2.jpg'

  if (pathnameHasPublic) return

  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return

  const locale = 'en'
  request.nextUrl.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!_next).*)',
  ]
}