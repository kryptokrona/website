export const fetchNode = async (url1: string, url2: string): Promise<NodeData> => {
	if(!url1 || !url2) return

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


