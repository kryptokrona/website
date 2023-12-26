import type { ServerLoad } from "@sveltejs/kit";
import { error, redirect } from "@sveltejs/kit";
import type { NodeResponse } from "$lib/utils/get-node";
import { getFastestNodeResponse } from "$lib/utils/get-node";
import { fetchSupply } from "$lib/utils/helpers";

export const load: ServerLoad = async ({ url }) => {
	if (url.pathname == "/en" ||
		url.pathname == "/sv" ||
		url.pathname == "/no") {
		throw redirect(307, "/");
	}

	try {
		const fastestNode: NodeResponse | null = await getFastestNodeResponse();
		if (!fastestNode) {
			throw new Error('No responsive node found');
		}

		const supply = await fetchSupply();

		return {
			node: fastestNode.node,
			nodeInfo: fastestNode.response,
			supply
		};
	} catch (e) {
		if (e instanceof Error) {
			throw error(500, {
				message: "Error while fetching data: " + e.message
			});
		} else {
			throw error(500, {
				message: "An unknown error occurred while fetching data."
			});
		}
	}
};
