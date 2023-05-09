import { getDirectusClient } from "../../lib/directus/client";
import { DIRECTUS_EMAIL, DIRECTUS_PASSWORD } from "$env/static/private";


/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }: any) => {
		const data = await request.formData();

		const directus = await getDirectusClient(DIRECTUS_EMAIL, DIRECTUS_PASSWORD);

		await directus.items('signups').createOne({
			email: data.get('email') ?? ''
		});

		return { success: true };
	}
};
