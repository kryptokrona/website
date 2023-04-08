<script lang="ts">

  import {getAssetURL} from "$lib/utils/getAssets";

  export let data

  console.log(data)
</script>

<article class="flex flex-col items-start justify-between">
  <div class="relative w-full">
    <img src="{getAssetURL(data.thumbnail)}" alt="" class="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
    <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
  </div>
  <div class="max-w-xl">
    <div class="mt-8 flex items-center gap-x-4 text-xs">
      <time datetime="2020-03-16" class="text-stone-500 dark:text-stone-400">Mar 16, 2020</time>
<!--      <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-stone-600 dark:text-stone-400 hover:bg-gray-100">Marketing</a>-->
    </div>
    <div class="group relative">
      <h3 class="mt-3 text-lg font-semibold leading-6 text-stone-900 dark:text-stone-200 group-hover:text-gray-600">
        <a data-sveltekit-preload-data href="/blog/{data.slug}">
          <span class="absolute inset-0"></span>
          {data.title}
        </a>
      </h3>
      <p class="mt-5 line-clamp-3 text-sm leading-6 text-stone-600 dark:text-stone-400">{data.summary}</p>
    </div>
  </div>
</article>