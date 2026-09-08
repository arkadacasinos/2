const SITE_URL = 'https://la1casino.vercel.app'

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
Host: ${SITE_URL}
`
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
