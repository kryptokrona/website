<script lang="ts">
	export let data;
	const { title, text } = data;
</script>

<div
	class="p-4 rounded-lg border border-neutral-700 dark:shadow-xl shadow-md dark:bg-neutral-800"
>
	<h2 class="text-2xl font-bold dark:text-neutral-50 tracking-tight">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6 inline-block mb-1"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
			/>
		</svg>
    {title}
	</h2>
	<p class="dark:text-neutral-400 text-neutral-600 mt-2 mb-4">
    {@html text}
	</p>
</div>
