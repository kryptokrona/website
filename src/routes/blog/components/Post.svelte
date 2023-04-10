<script lang="ts">

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

  export let post

</script>

<a href="/blog/{post.slug}" class="mb-5 sm:mb-10 group">
  <article>
    <div class="bg-zinc-800 p-4 rounded border border-zinc-700 h-48"></div>
    <div class="flex flex-col gap-2 px-2 mt-2">
      <h2 class="text-2xl">{post.title}</h2>
      <p class="text-sm text-zinc-500">{getPostDate(post.date_created)}</p>
      <p class="text-zinc-400">{post.summary}</p>
    </div>
  </article>
</a>