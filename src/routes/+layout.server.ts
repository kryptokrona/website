import { getDirectusClient } from '../lib/utils/directus';
import { fetchNode } from '$lib/utils/helpers';
import { fetchSupply } from "../lib/utils/helpers";
import { blogPosts, nodeData, supplyData } from "../lib/stores/data";

export async function load() {
	const directus = await getDirectusClient();
	const node: NodeData = await fetchNode("https://blocksum.org/api/getinfo", "https://privacymine.net:21898/getinfo");
	const supply = await fetchSupply("https://blocksum.org/api/v1/supply")

	try {
		const {data: posts} = await directus.items('posts').readByQuery({
			fields: ['*'],
			filter: {status: 'published'},
			sort: '-date_created'
		});

		supplyData.set(supply)
		nodeData.set(node)
		blogPosts.set(posts)
		return { posts,node, supply }

	} catch (e) {
		console.log(e);
	}
}


