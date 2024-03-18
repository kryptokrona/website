import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ url }) => {
  const token = 'FGwlYozWYGiyLlzXx1kIskC1';
  const alias = url.searchParams.get('alias');
  const value = url.searchParams.get('value');
  
  try {
    const fetchResponse = await fetch(`https://api.vercel.com/v2/domains/kryptokrona.org/records`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!fetchResponse.ok) {
      throw new Error(`Failed to fetch DNS records: ${fetchResponse.statusText}`);
    }

    const data = await fetchResponse.json();
    const records = data.records;
    const exists = records.some(record => record.type === 'TXT' && record.name === alias);

    if (exists) {
      return new Response(JSON.stringify({ success: false, taken: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const setResponse = await fetch(`https://api.vercel.com/v2/domains/kryptokrona.org/records`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type: 'TXT',
        name: alias,
        value: value,
      }),
    });

    if (!setResponse.ok) {
      throw new Error(`Failed to create DNS record: ${setResponse.statusText}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 201, // Created
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error processing request' }), {
      status: 500, // Internal Server Error
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
