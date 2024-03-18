import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
  const alias = url.searchParams.get('alias')
  const domainId = 'kryptokrona.org';
  const token = 'FGwlYozWYGiyLlzXx1kIskC1'

  if (!alias) {
    return new Response(JSON.stringify({ error: 'Alias query parameter is missing' }), {
      status: 400, // Bad Request
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const response = await fetch(`https://api.vercel.com/v2/domains/${domainId}/records`, {
      headers: { Authorization: `Bearer ${token}` },
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
