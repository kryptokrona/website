import type { Handle } from '@sveltejs/kit';
import { authUser } from './lib/directus/auth';
import { redirect } from '@sveltejs/kit';

const securityHeaders = {
	'Cross-Origin-Opener-Policy': 'same-origin',
	'X-XSS-Protection': '0',
	'X-Content-Type-Options': 'nosniff'
};

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = await authUser(event);

	if (event.url.pathname.startsWith('/auth')) {
		if (!event.locals.user) throw redirect(303, '/');
		if (event.url.pathname.startsWith('/auth/admin')) {
      if(event.locals.user.role !== 'ADMIN') throw redirect(303, "/auth/admin")
		}
	}

  const response = await resolve(event);

	if ('headers' in response) {
		Object.entries(securityHeaders).forEach(([header, value]) =>
			response.headers.set(header, value)
		);
	}

	return response;
};
