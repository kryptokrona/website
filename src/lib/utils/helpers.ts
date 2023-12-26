import { browser } from '$app/environment';
import { supplyUrl } from "$lib/config";

export const fetchSupply = async (): Promise<SupplyData> => {
	
	try {
		const res = await fetch(supplyUrl);
		if (!res.ok) {
			//Error -> catch
		}
		return res.json();
	} catch (error) {
		console.error("Error in fetchSupply:", error);
		//throw error;
		//Return empty to avoid errors
		return {
			"lastCheck": 0,
			"circulatingUnits": 0,
			"latestBlockRewardUnits": 0,
			"maxUnits": 0,
			"coinUnits": 0,
			"decimals": 0,
			"calculatedSupply": 0,
			"calculatedMaxSupply": 0,
			"calculatedReward": 0
		}
	}
};

export const isDarkModeActive = (): boolean | undefined => {
	if (!browser) return;

	return window.matchMedia('(prefers-color-scheme: dark)').matches
		|| document.documentElement.classList.contains('dark');
};


