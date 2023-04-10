<script>
	import Card from './Card.svelte';
	import { supplyData } from '$lib/stores/data';
	import { numberWithCommas } from '$lib/utils/formats';

	const content = [
		{
			title: 'Supply',
			text: `<span class="dark:text-neutral-100 text-neutral-900">${numberWithCommas(
				$supplyData.calculatedSupply.toFixed()
			)}</span> coins has been minted out of ${numberWithCommas($supplyData.calculatedMaxSupply)}.`
		},
		{
			title: 'Algorithm',
			text: "We are currently running on CryptoNight-Pico, which is a more fair algorithm than Bitcoin's SHA256 and can even be competently mined on ARM based phones!"
		},
    {
      title: 'Blocktime',
      text: "Our network processes new transactions every 90 seconds, in comparison to Bitcoins 10 minute delay."
    },
    {
      title: 'Untraceable',
      text: "Our network processes new transactions every 90 seconds, in comparison to Bitcoins 10 minute delay."
    },
    {
      title: 'Fungible',
      text: "The Kryptokrona isn’t dependent on our central banks or servers, thus less fragile than today's financial systems."
    },
    {
      title: 'Drama-free',
      text: "Our network reduces the amount of new coins minted with every block, making for a drama-free emission."
    },
	];
</script>

<div class="max-w-6xl mx-auto px-4 xl:px-2 pb-16 sm:pb-20">
	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each content ?? [] as item}
			<Card data={item} />
		{/each}
	</div>
</div>
