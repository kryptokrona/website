import { error } from '@sveltejs/kit';
import { getDirectusClient } from '../lib/utils/directus';
import { fetchNode } from '$lib/utils/helpers';
import { fetchSupply } from '../lib/utils/helpers';

export async function load() {
	try {
		const directus = await getDirectusClient();

		const [node, supply, blog] = await Promise.all([
			fetchNode('https://blocksum.org/api/getinfo', 'https://privacymine.net:21898/getinfo', 'http://techy.ddns.net:11898/getinfo'),
			fetchSupply('https://blocksum.org/api/v1/supply'),
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
