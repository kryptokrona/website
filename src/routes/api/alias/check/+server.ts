import type { RequestHandler } from './$types';
import { VERCEL_TOKEN } from "$env/static/private";

export const GET: RequestHandler = async ({ url }) => {
  const alias = url.searchParams.get('alias')
  const domainId = 'kryptokrona.org';

  return new Response(JSON.stringify({ message: "Service not available" }))

  if (!alias) {
    return new Response(JSON.stringify({ error: 'Alias query parameter is missing' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const response = await fetch(`https://api.vercel.com/v2/domains/${domainId}/records`, {
      headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch DNS records: ${response.statusText}`);
    }

    const data = await response.json();
    const records = data.records;
    const txts = records.filter(record => record.type === 'TXT');
    const exists = txts.some(record => record.name === alias);

    return new Response(JSON.stringify({ exists: exists }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Error checking alias' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
