<script lang="ts">
  export let data

  const  {date, title, text} = data
</script>

<div>
  <time datetime="2021-08" class="flex items-center text-sm font-semibold leading-6 dark:text-green-400 text-blue-400">
    <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
      <circle cx="2" cy="2" r="2" fill="currentColor" />
    </svg>
    {date}
    <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-blue-900/10 dark:bg-green-50/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
  </time>
  <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-50 dark:text-neutral-50 text-neutral-900">{title}</p>
  <p class="mt-1 text-base leading-7 dark:text-neutral-400 text-neutral-600">{@html text}</p>
</div>