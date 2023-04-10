import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://kryptokrona.org</loc>
            <changefreq>daily</changefreq>
        </url>
        <url>
            <loc>https://kryptokrona.org/about</loc>
            <changefreq>daily</changefreq>
        </url>
        <url>
            <loc>https://kryptokrona.org/mining</loc>
            <changefreq>daily</changefreq>
        </url>
        <url>
            <loc>https://kryptokrona.org/wallet</loc>
            <changefreq>daily</changefreq>
        </url>
    </urlset>`

  return new Response(String(body), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
