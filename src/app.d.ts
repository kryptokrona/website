// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface OrgSeoData {
		'@context': string;
		'@type': string;
		'@id': string;
		url: string;
		name: string;
		logo: string;
		description: string;
		sameAs: string[];
	}

	interface NodeData {
		alt_blocks_count: number,
		difficulty: number,
		grey_peerlist_size: number,
		hashrate: number,
		height: number,
		incoming_connections_count: number,
		last_known_block_index: number,
		major_version: number,
		minor_version: number,
		network_height: number,
		outgoing_connections_count: number,
		start_time: number,
		status: string,
		supported_height: number,
		synced: boolean,
		testnet: boolean,
		tx_count: number,
		tx_pool_size: number,
		upgrade_heights: Array<any>,
		version: string,
		white_peerlist_size: number
	}

	interface SupplyData {
		lastCheck: number,
		name: string
		ticker: string
		circulatingUnits: number,
		latestBlockRewardUnits: number
		maxUnits: number,
		coinUnits: number,
		decimals: number,
		calculatedSupply: number,
		calculatedMaxSupply: number
		calculatedLastReward: number

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
