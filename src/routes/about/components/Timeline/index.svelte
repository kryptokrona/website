<script>
	import Time from './Time.svelte';

  const content = [
    {
      date: "Apr 2019",
      title: "Genesis block",
      text: "Genesis block of kryptokrona"
    }
  ]
</script>

<div class="mx-auto mt-8 max-w-6xl px-4 xl:px-2">
	<div
		class="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:gap-10 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4"
	>
		{#each content as item}
			<Time data={item}/>
		{/each}
	</div>
</div>
