<script>
  import Signup from "$lib/components/Signup.svelte";

  export const getPostDate = (timestamp) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const date = new Date(timestamp)
    const day = date.getDay()
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
  }

  export let data

</script>

<svelte:head>
  <title>{data.extra.title}</title>
  <meta property="og:title" content={data.extra.title} />
  <meta name="twitter:title" content={data.extra.title} />
  <meta name="description" content={data.extra.summary} />
  <meta name="twitter:description" content={data.extra.summary} />
  <meta property="og:description" content={data.extra.summary} />
</svelte:head>

<div class="h-full w-full overflow-y-scroll pb-16 pt-16">
  <div class="text-white mx-auto max-w-md sm:max-w-3xl lg:max-w-5xl p-4 sm:mt-0 sm:p-8">
    <article class="mx-auto prose prose-invert prose-sm">
      <p class="text-sm text-zinc-500">{getPostDate(data.extra.date_created)}</p>
      {@html data.content}
    </article>
  </div>
</div>
<Signup />