import { error } from "@sveltejs/kit";
import { getDirectusClient } from "$lib/utils/directus";
import { fetchNode } from '$lib/utils/helpers';
import { fetchSupply } from "$lib/utils/helpers";
import { CONFIG } from "$lib/config";
import { redirect } from '@sveltejs/kit';
import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({url}) => {
	
	if(url.pathname == "/en" || 
		url.pathname == "/sv" || 
		url.pathname == "/no") throw redirect(307, "/")

	try {
			const [node, supply] = await Promise.all([
				fetchNode(),
				fetchSupply(CONFIG.SUPPLY_API),
			]);
		return { node, supply };
	} catch (e) {
		throw error(500, {
			message: 'Error while fetching data'
		});
	}
}
