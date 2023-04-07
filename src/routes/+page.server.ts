import { getDirectusClient } from '../lib/utils/directus';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const directus = await getDirectusClient();

		await directus.items('contact').createOne({
			email: data.get('email') ?? ''
		});

		return { success: true };
	}
};
