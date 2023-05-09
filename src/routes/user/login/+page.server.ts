import type { Actions } from '@sveltejs/kit';
import { getDirectusClient } from '../../../lib/directus/client';
import type { AuthCredentials } from '@directus/sdk';
import { redirect } from "@sveltejs/kit";
import { dev } from "$app/environment";

export const actions: Actions = {
	login: async ({ cookies, request }) => {

		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		const directus = await getDirectusClient(email, password);

		const user = await directus.auth.login(<AuthCredentials>{ email: email, password: password });

		console.log(user);
		if (user.access_token) {
			cookies.set('session', user.access_token, {
				path: '/',
				sameSite: 'strict',
				httpOnly: true,
				secure: dev,
				maxAge: 60 * 60 * 24 * 7
			});
			throw redirect(303,'/')
		}
	}
};
