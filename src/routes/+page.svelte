<script>
  import LatestPosts from "$lib/components/blog/LatestPosts.svelte";
  import Grid from "$lib/components/Grid.svelte";
  import Statusbar from "$lib/components/Statusbar.svelte";
  import LastBlock from "$lib/components/LastBlock.svelte";
  import Features from "$lib/components/Features.svelte";

</script>

<div class="relative isolate">
  <div class="mx-auto max-w-6xl py-32 sm:py-36 lg:py-40 px-4 xl:px-2">
    <div class="flex mb-8 justify-start">
      <LastBlock />
    </div>
    <div>
      <h1 class="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">Fix our money, better our future.</h1>
      <p class="mt-6 text-lg leading-8 dark:text-neutral-400 text-neutral-600 max-w-4xl">A Nordic Cryptocurrency to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the communication and money of the future.</p>
      <div class="mt-10 flex items-center gap-x-6">
        <a href="#" class="rounded-md dark:bg-neutral-50 dark:text-neutral-900 bg-neutral-900 text-neutral-50 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Get started</a>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Learn more <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </div>
</div>

<Features />
<Grid />
<Statusbar />
<!--<LatestPosts posts={posts.data}/>-->