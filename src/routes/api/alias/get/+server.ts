import type { RequestHandler } from "./$types";
import { VERCEL_TOKEN } from "$env/static/private";

export const GET: RequestHandler = async ({ url }) => {
  const alias = url.searchParams.get('alias');
  const domainId = 'kryptokrona.org';

  try {
    const response = await fetch(`https://api.vercel.com/v2/domains/${domainId}/records`, {
      headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch DNS records: ${response.statusText}`);
    }

    const data = await response.json();
    const records = data.records;
    const txtRecord = records.find(record => record.type === 'TXT' && record.name === alias);

    if (txtRecord) {
      return new Response(JSON.stringify({ value: txtRecord.value, found: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ value: null, found: false }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Error retrieving alias value', found: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
