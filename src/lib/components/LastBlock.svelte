<script lang="ts">
  import {onMount} from "svelte";
  import {fetchHeight, numberWithCommas} from "$lib/utils/helpers";

  const url = "https://blocksum.org/api/getinfo"

  let height: number

  onMount( async () => {
    setInterval(async () => {
      height = await fetchHeight(url)
    }, 1000 * 90)
    height = await fetchHeight(url)
  })
</script>

<a class="py-1 px-4 border rounded-full inline-flex gap-2 items-center border-neutral-700 cursor-pointer text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-stone-50/10 hover:ring-stone-50/20" target="_blank" href="https://explorer.kryptokrona.org/block/{height - 1}">
  <div class="bg-green-500 rounded-full h-2 w-2 blink_me"></div>
  <p class="text-neutral-400">Last block:</p>
  <p class="text-neutral-50">{numberWithCommas(parseInt((height - 1))) ?? 0}</p>
</a>

<style>
  .blink_me {
    animation: blinker 1s ease-out infinite;
  }
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
</style>