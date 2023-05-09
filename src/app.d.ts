// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {

	namespace App {
		// interface Error {}
		// interface Platform {}


		interface Locals {
			user: User | null
		}
	}

	interface PageData {
		posts: blog.data,
		post: PostData
		node: NodeData,
		supply: SupplyData,
		user?: User
	}

	interface PostData {
		content: string
		extra: {
			body: string
			date_created: string
			date_updated: string
			slug: string
			sort: any
			status: string
			summary: string
			thumbnail: string
			title:string
			user_created:string
			user_updated:string
			reactions: Array
			comments: Array
		}
	}

	interface SupplyData {
		"lastCheck": number,
		"circulatingUnits": number,
		latestBlockRewardUnits: number
		"maxUnits": number,
		"coinUnits": number,
		"decimals": number,
		"calculatedSupply": number,
		"calculatedMaxSupply": number
		"calculatedReward": number
	}


	type User = {
		id: number,
		email: string,
		role: string
	}

	interface NodeData {
		"alt_blocks_count": number,
		"difficulty": number,
		"grey_peerlist_size": number,
		"hashrate": number,
		"height": number,
		"incoming_connections_count": number,
		"last_known_block_index": number,
		"major_version": number,
		"minor_version": number,
		"network_height": number,
		"outgoing_connections_count": number,
		"start_time": number,
		"status": string,
		"supported_height": number,
		"synced": boolean,
		"testnet": boolean,
		"tx_count": number,
		"tx_pool_size": number,
		"upgrade_heights": Array<any>,
		"version": string,
		"white_peerlist_size": number
	}


	interface WalletsData {
		title: string,
		text: string,
		download: string
		source: string
		os: string[]
	}

	interface FaqData {
		question: string
		answer: string
	}
}

export {};
