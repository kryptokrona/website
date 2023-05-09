import type { Actions } from "@sveltejs/kit";
import { getDirectusClient } from "../../../lib/directus/client";
import { redirect } from "@sveltejs/kit";
import type { AuthCredentials } from "@directus/sdk";

export const actions: Actions = {
	register: async ({  request }) => {

		let user
		try {
			const directus = await getDirectusClient()

			const formData = await request.formData();
			const email = formData.get('email');
			const password = formData.get('password');

			user = await directus.users.createOne(<AuthCredentials>{
				email: email,
				password: password,
				role: 'de063983-b487-4b13-9040-555478261eb2' // User role id in directus
			})

		} catch (error) {
			console.log(error);
		}

		if(user) {
			throw redirect(303, "/user/login")
		}
	},
};
