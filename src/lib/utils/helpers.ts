import { browser } from '$app/environment';

export const fetchNode = async (): Promise<NodeData> => {
	try {
		return await Promise.any([
			fetch(`http://xkr.network:11898/getinfo`).then(res => {
				if (!res.ok) {
					throw new Error(`Error fetching from http://xkr.network:11898: ${res.statusText}`);
				}
				return res.json();
			}),
			fetch(`http://xkr.network:11898/getinfo`).then(res => {
				if (!res.ok) {
					throw new Error(`Error fetching from http://xkr.network:11898: ${res.statusText}`);
				}
				return res.json();
			}),
		]);
	} catch (error) {
		console.error("Error in fetchNode:", error);
		throw error;
	}
};

export const fetchSupply = async (url: string): Promise<SupplyData> => {
	try {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Couldn't fetch supply from http://xkr.network:11898: ${res.statusText}`);
		}
		return res.json();
	} catch (error) {
		console.error("Error in fetchSupply:", error);
		throw error;
	}
};

export const isDarkModeActive = (): boolean | undefined => {
	if (!browser) return;

	return window.matchMedia('(prefers-color-scheme: dark)').matches
		|| document.documentElement.classList.contains('dark');
};


