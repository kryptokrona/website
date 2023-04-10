import type { Handle } from "@sveltejs/kit";
import * as cookie from 'cookie';

const securityHeaders = {
  'Cross-Origin-Embedder-Policy': 'require-corp',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'X-XSS-Protection': '0',
  'X-Content-Type-Options': 'nosniff'
}

export const handle: Handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '');
  event.locals.userid = cookies['userid'] || crypto.randomUUID();

  const response = await resolve(event);

  if ("headers" in response) {
    Object.entries(securityHeaders).forEach(
      ([header, value]) => response.headers.set(header, value)
    );
    response.headers.set(
      'set-cookie', cookie.serialize('userid', event.locals.userid, { path: '/', httpOnly: true })
    );
  }

  return response;
}