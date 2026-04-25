import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import type { NextRequest } from 'next/server'

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/api/auth') ||
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next()
  }

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  //   if (!token) {
  //     if (pathname === '/login') return NextResponse.next()
  //     return NextResponse.redirect(new URL('/login', request.url))
  //   }

  //   if (pathname === '/login') {
  //     return NextResponse.redirect(new URL('/', request.url))
  //   }

  //   return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
