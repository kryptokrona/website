import { error } from '@sveltejs/kit';
import { getDirectusClient } from '../lib/utils/directus';
import { fetchNode } from '$lib/utils/helpers';
import { fetchSupply } from '../lib/utils/helpers';
import { CONFIG } from "../lib/config";

export async function load() {
	try {
		const directus = await getDirectusClient();

		const [node, supply, blog] = await Promise.all([
			fetchNode(CONFIG.NODE_ONE, CONFIG.NODE_TWO),
			fetchSupply(CONFIG.SUPPLY_API),
			directus.items('posts').readByQuery({
				fields: ['*'],
				sort: ['-date_created'],
				filter: {status: {
					_eq: 'published'
					}},
			})
		]);

		return { posts: blog.data, node, supply };
	} catch (e) {
		throw error(500, {
			message: 'Error while fetching data'
		});
	}
}
