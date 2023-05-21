import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectURL = new URL('/', request.url)

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=; Path=/; max-age=0;`, // com o path toda aplicação pode acessar esse cookie // max-age, tempo que o cookie vai ficar disponivel
    },
  })
}
