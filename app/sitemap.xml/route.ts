const SITE_URL = 'https://la1casino.vercel.app'

export function GET() {
  const lastmod = new Date().toISOString()
  const paths = ['', '#obzor', '#zerkalo', '#sloty', '#registraciya', '#bonusy', '#vyvod', '#mobile', '#faq']

  const urls = paths
    .map(
      (p) => `  <url>
    <loc>${SITE_URL}/${p}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${p === '' ? '1.0' : '0.7'}</priority>
  </url>`,
    )
    .join('\n')

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
