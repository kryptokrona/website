<script>
	export let title = '';
	export let subtitle = '';
	export let text = '';
</script>

<div class="pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20">
	<div class="mx-auto max-w-6xl">
		<div class="mx-auto px-4 xl:px-2">
			<p class="text-base font-semibold leading-7 dark:text-neutral-300 text-neutral-600">
				{subtitle}
			</p>
			<h2
				class="mt-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-6xl"
			>
				{title}
			</h2>
			<p class="mt-6 text-lg leading-8 dark:text-neutral-400 text-neutral-600">
				{text}
			</p>
		</div>
	</div>
</div>
