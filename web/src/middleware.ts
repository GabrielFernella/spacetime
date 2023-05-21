import { NextRequest, NextResponse } from 'next/server'

const signInURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(signInURL, {
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20`, // com o path toda aplicação pode acessar esse cookie // max-age, tempo que o cookie vai ficar disponivel
      },
    }) // Obriga a fazer o signIn
  }

  return NextResponse.next() // signitica que pode passar a diante nas rotas
}

// rotas que são obrigatórias pelo middleware
export const config = {
  matcher: '/memories/:path*',
}
