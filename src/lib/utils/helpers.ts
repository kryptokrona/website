export const fetchNode = async (node1: string, node2?: string): Promise<NodeData> => {
	if (node1) {
		const responseNode1 = await fetch(node1);
		if (responseNode1.ok) return await responseNode1.json();
	}

	if (node2) {
		const responseNode2 = await fetch(node1);
		if (responseNode2.ok) return await responseNode2.json();
	}

	throw new Error("Couldn't fetch node data");
};

export const fetchSupply = async (url: string): Promise<SupplyData> => {
	const res = await fetch(url);
	if (res.ok) return await res.json();
	throw new Error("Couldn't fetch supply");
};


