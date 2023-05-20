import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const code = searchParams.get('code')

  const registerResponse = await api.post('/register', {
    code,
  })

  const { token } = registerResponse.data

  const redirectURL = new URL('/', request.url)

  const cookieExpiresInSeconds = 60 * 60 * 24 * 30 // 30 dias

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}`, // com o path toda aplicação pode acessar esse cookie // max-age, tempo que o cookie vai ficar disponivel
    },
  })
}
