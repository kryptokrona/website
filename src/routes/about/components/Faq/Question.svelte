<script>
	export let data;
	const { question, answer } = data;
</script>

<div>
	<dt class="text-base font-semibold leading-7 text-neutral-900 dark:text-neutral-50">
		{question}
	</dt>
	<dd class="mt-2 text-base leading-7 text-neutral-600 dark:text-neutral-400">
		{answer}
	</dd>
</div>
