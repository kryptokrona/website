import { error } from '@sveltejs/kit';
import { fetchNode } from '$lib/utils/helpers';
import { fetchSupply } from '../lib/utils/helpers';
import { CONFIG } from '../lib/config';
import { getDirectusClient } from '../lib/directus/client';
import type { PageData, PageServerLoad } from "./$types";
export const load: PageServerLoad = async ({locals}): Promise<PageData> => {
	try {
		const directus = await getDirectusClient();

		//Gets node, supply and blog data, we then store it in stores, see root +layout.svelte
		const [node, supply, blog] = await Promise.all([
			fetchNode(CONFIG.NODE_ONE, CONFIG.NODE_TWO),
			fetchSupply(CONFIG.SUPPLY_API),
			directus.items('posts').readByQuery({
				fields: ['*'],
				// @ts-ignore
				sort: ['-date_created'],
				filter: {
					status: {
						_eq: 'published'
					}
				}
			})
		]);

		return { posts: blog.data, node, supply, user: locals.user };

	} catch (e) {
		throw error(500, {
			message: 'Error while fetching data'
		});
	}
}
