import { browser } from '$app/environment';

export const fetchNode = async (url1: string, url2: string): Promise<NodeData> => {
	return Promise.any([
		fetch(url1).then(res => res.json()),
		fetch(url2).then(res => res.json()),
	]);
};

export const fetchSupply = async (url: string): Promise<SupplyData> => {
	const res = await fetch(url);
	if (res.ok) return res.json();
	throw new Error("Couldn't fetch supply");
};

export const isDarkModeActive = (): boolean | undefined => {
	if (!browser) return;

	return window.matchMedia('(prefers-color-scheme: dark)').matches
		|| document.documentElement.classList.contains('dark');
};


