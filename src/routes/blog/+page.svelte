<script>
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

  $:console.log(data)
</script>

<div class="h-full w-full overflow-y-scroll py-32 sm:py-36 lg:py-40">
  <div class="text-white mx-auto max-w-6xl px-4 xl:px-2">
    <div class="mb-10">
      <p class="text-base font-semibold leading-7 text-neutral-300">Stay upto date</p>
      <h2 class="mt-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-6xl">Kryptokrona blog</h2>
      <p class="mt-6 text-lg leading-8 text-neutral-500">Here we delve into the world of
        privacy-enhancing technologies and their potential to protect individuals' digital rights. In a time where data
        breaches and privacy violations have become commonplace, it is more important than ever to explore innovative
        solutions to protect personal information. We believe that open source technologies have a critical role to play
        in this space, as they allow for transparency, community-driven development, and peer review of code. Our blog
        will cover a range of topics, from the latest developments in privacy-preserving software to ethical
        considerations around data usage. Join us on this journey to empower individuals and safeguard their privacy in
        the digital age.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each data.posts.data ?? [] as post}
        <a href="/blog/{post.slug}" class="mb-5 sm:mb-10 group">
          <article>
            <div class="bg-zinc-800 p-4 rounded border border-zinc-700 h-48 sm:group-hover:scale-105 transition"></div>
            <div class="flex flex-col gap-2 px-2 mt-2">
              <h2 class="text-2xl">{post.title}</h2>
              <p class="text-sm text-zinc-500">{getPostDate(post.date_created)}</p>
              <p class="text-zinc-400">{post.summary}</p>
            </div>
          </article>
        </a>
      {/each}
    </div>
  </div>
</div>