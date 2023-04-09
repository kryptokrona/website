<script>
	import Card from './Card.svelte';
  import {numberWithCommas} from "$lib/utils/helpers";
  import {supplyData} from "$lib/stores/data";

  const content = [
    {
      title: 'Supply',
      text: `<span class="dark:text-neutral-100 text-neutral-900">${numberWithCommas(
        $supplyData.calculatedSupply.toFixed()
      )}</span> coins has been minted out of ${numberWithCommas($supplyData.calculatedMaxSupply)}.`
    },
    {
      title: 'Supply',
      text: 'supply'
    }
  ];

</script>

<div class="max-w-6xl mx-auto px-4 xl:px-2 pb-16 sm:pb-20">
	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each content ?? [] as item}
			<Card data={item} />
		{/each}
	</div>
</div>
