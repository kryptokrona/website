import { browser } from '$app/environment';

export const fetchNode = async (url1: string, url2: string): Promise<NodeData> => {
	return await Promise.any([
		fetch(url1).then(res => res.json()),
		fetch(url2).then(res => res.json()),
	]).then(data => {
		return data
	})
};

export const fetchSupply = async (url: string): Promise<SupplyData> => {
	const res = await fetch(url);
	if (res.ok) return await res.json();
	throw new Error("Couldn't fetch supply");
};

export const isDarkModeActive = () => {
	if(!browser) return;

	return window.matchMedia('(prefers-color-scheme: dark)').matches
	  || document.documentElement.classList.contains('dark');
  }


