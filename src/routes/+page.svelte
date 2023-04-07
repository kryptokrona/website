<script>
  import Signup from "$lib/components/Signup.svelte";
  import LatestPosts from "$lib/components/blog/LatestPosts.svelte";
  import Grid from "$lib/components/Grid.svelte";
  import Statusbar from "$lib/components/Statusbar.svelte";
  import Faq from "$lib/components/faq/Faq.svelte";

  export let data
  const { posts } = data

</script>

<div class="relative isolate">
  <div class="mx-auto max-w-6xl pt-32 sm:pt-36 lg:pt-40 px-4 xl:px-2">
    <div class="hidden sm:mb-8 sm:flex sm:justify-start">
      <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-stone-50/10 hover:ring-stone-50/20">
        What is kryptokrona? <a href="#" class="font-semibold text-blue-600"><span class="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
    <div>
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Fix our money, better our future.</h1>
      <p class="mt-6 text-lg leading-8 text-gray-600 max-w-4xl">A Nordic Cryptocurrency to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the communication and money of the future.</p>
      <div class="mt-10 flex items-center gap-x-6">
        <a href="#" class="rounded-md dark:bg-white dark:text-neutral-900 bg-neutral-900 text-neutral-50 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Get started</a>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Learn more <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </div>
</div>
<Grid variant={1}/>
<Statusbar />
<Grid variant={2}/>
<Faq />
<LatestPosts posts={posts.data}/>
<Signup/>