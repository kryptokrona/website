<script lang="ts">
  import {fade} from "svelte/transition";
  import {onDestroy, onMount} from "svelte";

  let supply = 0;
  onMount(() => {
    supply = 0
    supply = 447000000
  })
</script>

<div class="max-w-6xl w-full mx-auto mt-6 px-4 xl:px-2 h-20 py-32 sm:py-36">
  <div>
    {#if supply}
      <p in:fade={{delay: 500}} class="text-neutral-500 mb-1.5 tracking-tight text-end md:text-start">SUPPLY</p>
    {:else }
      <p class="opacity-0 mb-1.5">-</p>
    {/if}
  </div>
  <div class="w-full h-4 dark:bg-neutral-500 bg-neutral-300 rounded-sm p-0.5">
    <div
      class="relative flex justify-end rounded-sm bg-green-400 h-full transition-all duration-1000"
      style="width: {((supply / 1000000000) * 100).toFixed(2)}%"
    >
      {#if supply}
        <p class="absolute -top-8 dark:text-white text-neutral-900 w-36 text-end mr-4 font-bold" in:fade={{delay: 150}}>
          <span class="block"><span></span>{(supply / 1000000).toFixed(2)}M / 1 B <span
            class="absolute mt-1.5 ml-1"> ↴</span></span></p>
      {:else }
        <div class="absolute -top-8 text-white mr-5"></div>
      {/if}
    </div>
  </div>
  {#if supply}
    <div class="flex justify-between dark:text-white text-neutral-900 mt-4" in:fade={{delay: 500}}>
      <div>
        <p class="font-bold">542M</p>
        <p class="text-neutral-500">TRANSACTIONS</p>
      </div>
      <div class="text-center">
        <p class="font-bold">557M</p>
        <p class="text-neutral-500">DIFFICULTY</p>
      </div>
      <div class="text-end">
        <p class="font-bold">362</p>
        <p class="text-neutral-500">NODES</p>
      </div>
    </div>
  {/if}
</div>
