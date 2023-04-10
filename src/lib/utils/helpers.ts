export const fetchNode = async (url1: string, url2: string): Promise<NodeData> => {
	if(!url1 || !url2) return

	const results = await Promise.allSettled([
		fetch(url1).then(res => res.json()),
		fetch(url2).then(res => res.json()),
	])
	const [node1, node2] = results

	if(node1.status === 'fulfilled') {
		return node1.value
	} else if(node2.status === 'fulfilled') {
		return node2.value
	} else 	throw new Error("Couldn't fetch nodes");
};

export const fetchSupply = async (url: string): Promise<SupplyData> => {
	const res = await fetch(url);
	if (res.ok) return await res.json();
	throw new Error("Couldn't fetch supply");
};


