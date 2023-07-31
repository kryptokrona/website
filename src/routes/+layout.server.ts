import { error } from '@sveltejs/kit';
import { getDirectusClient } from '../lib/utils/directus';
import { fetchNode } from '$lib/utils/helpers';
import { fetchSupply } from '../lib/utils/helpers';
import { CONFIG } from "../lib/config";
import { redirect } from '@sveltejs/kit';

export async function load({url}) {
	
	if(url.pathname == "/en" || 
		url.pathname == "/sv" || 
		url.pathname == "/no") throw redirect(307, "/")

	try {
		const directus = await getDirectusClient();
			const [node, supply, blog, roadmap] = await Promise.all([
				fetchNode(CONFIG.NODE_ONE, CONFIG.NODE_TWO),
				fetchSupply(CONFIG.SUPPLY_API),
				directus.items('posts').readByQuery({
					fields: ['*'],
					sort: ['-date_created'],
					filter: {status: {
						_eq: 'published'
						}},
				}),

				directus.items('Roadmap').readByQuery({})
			]);
		return { posts: blog.data, node, supply, roadmap: roadmap.data };
	} catch (e) {
		throw error(500, {
			message: 'Error while fetching data'
		});
	}
}
