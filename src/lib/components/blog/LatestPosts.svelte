<script>
  import Post from "$lib/components/blog/Post.svelte";
</script>

<div class="py-24 sm:py-32 px-4 xl:px-2">
  <div class="mx-auto max-w-6xl">
    <div>
      <h2 class="text-3xl font-bold tracking-tight text-stone-800 dark:text-white sm:text-4xl">From the blog</h2>
      <p class="mt-2 text-lg leading-8 dark:text-stone-200 text-stone-600">Learn how to grow your business with our expert advice.</p>
    </div>
    <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <Post />
      <Post />
      <Post />
    </div>
  </div>
</div>
