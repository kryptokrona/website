<script>
  import { enhance } from "$app/forms";

  export let data
</script>
<form class="flex flex-wrap gap-2 sm:gap-4 text-md border-b border-neutral-500 pb-10" method="POST" use:enhance>
  <button class="rounded-full px-3 border border-neutral-500 hover:bg-neutral-700 transition" formaction="?/addLike">
    👍 1
  </button>
  <button class="rounded-full px-3 border border-neutral-500 hover:bg-neutral-700 transition" formaction="?/addLove">
    ❤️ 3
  </button>
  <button class="rounded-full px-3 border border-neutral-500 hover:bg-neutral-700 transition"
          formaction="?/addrRocket">🚀 6
  </button>
  <button class="rounded-full px-3 border border-neutral-500 hover:bg-neutral-700 transition" formaction="?/addTada">
    🎉 2
  </button>
  <a class="rounded-full px-3 border border-neutral-500 hover:bg-neutral-700 transition"
     href="#comments">💬 Comments</a>
</form>