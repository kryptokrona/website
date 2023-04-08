<script lang="ts">
	import { enhance } from '$app/forms';
  /** @type {import('./$types').PageData} */
  export let data;
  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<div class="border-t dark:border-neutral-50/10 border-neutral-300 mt-16 sm:mt-24 sm:mt-24 xl:mt-32">
	<div
		class="xl:px-2 max-w-6xl mx-auto relative isolate overflow-hidden px-6 py-16 sm:py-24 sm:px-24 xl:py-32"
	>
		<h2
			class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight dark:text-white sm:text-4xl"
		>
			Sign up to our newsletter.
		</h2>
		<p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 dark:text-gray-300">
			Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et
			culpa.
		</p>
		<form use:enhance class="mx-auto mt-10 flex max-w-md gap-x-4" method="post">
			<label class="sr-only" for="email-address">Email address</label>
			<input
				autocomplete="email"
				class="min-w-0 flex-auto rounded-md border-0 dark:bg-white/5 px-3.5 py-2 dark:text-white shadow-sm ring-1 ring-inset dark:ring-white/10 ring-neutral-900/10 focus:ring-2 focus:ring-inset dark:focus:ring-white focus:ring-neutral-900/20 sm:text-sm sm:leading-6"
				id="email-address"
				name="email"
				placeholder="Enter your email"
				required
				type="email"
			/>
			<button
				class="flex-none rounded-md dark:bg-white bg-neutral-900 px-3.5 py-2.5 text-sm font-semibold dark:text-gray-900 text-white shadow-sm dark:hover:bg-gray-100 hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
				type="submit"
			>
				Notify me
			</button>
		</form>
	</div>
</div>
