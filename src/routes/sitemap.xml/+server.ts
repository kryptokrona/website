import type { RequestHandler } from '@sveltejs/kit'
import { getDirectusClient } from "../../lib/utils/directus";

/*let blogPosts: ManyItems<unknown, { fields: string[] }> = []
const directus = await getDirectusClient();


blogPosts = await directus.items('posts').readByQuery({
    fields: ['slug'],
  }) ?? []*/

export const GET: RequestHandler = async () => {
    const body = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://kryptokrona.org</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://kryptokrona.org/about</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://kryptokrona.org/mining</loc>
            <changefreq>weekly</changefreq>
        </url>
        <url>
            <loc>https://kryptokrona.org/wallet</loc>
            <changefreq>weekly</changefreq>
        </url>
    </urlset>`;

  return new Response(String(body), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  })

}
