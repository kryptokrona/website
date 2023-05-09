<script>
	import { userData } from "$lib/stores/data";
  import Divider from "./Divider.svelte";
  import CommentInput from "./CommentInput.svelte";

  export let data;

	console.log(data);
</script>

<div id="comments">
  <h2>Comments</h2>
  <div class="space-y-4">
    {#each data as item}
      <div class="flex-1 border border-neutral-700 dark:bg-neutral-800 rounded-lg px-4 py-2 sm:px-6 sm:py-2 leading-relaxed">
        <strong>{item.user_created.nickname ? item.user_created.nickname : 'Anon'}</strong> <span class="text-xs text-gray-400">{new Date(item.date_created).toLocaleString()}</span>
        <p class="text-sm my-2">
          {item.comment}
        </p>
        <div class="flex items-center">
          <div class="text-sm text-gray-500 font-semibold">
            {#if item.replies}
              5 Replies
              <div class="space-y-4">
                {#each item.replies as reply}
                  <div class="flex">
                    <div class="flex-shrink-0 mr-3">
                      <img class="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="">
                    </div>
                    <div class="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                      <strong>Sarah</strong> <span class="text-xs text-gray-400">3:34 PM</span>
                      <p class="text-xs sm:text-sm">
                        The reply here
                      </p>
                    </div>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
  {#if !$userData}
    <Divider />
    {:else}
    <CommentInput />
  {/if}
</div>
