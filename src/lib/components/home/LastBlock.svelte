<script lang="ts">
	import { nodeData } from '$lib/stores/data';
	import { numberWithCommas } from '$lib/utils/formats';
</script>

<a
	class="py-1 px-4 border rounded-full inline-flex gap-2 items-center dark:bg-neutral-900 border-neutral-700 cursor-pointer text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-stone-50/10 hover:ring-stone-50/20"
	target="_blank"
	href="https://explorer.kryptokrona.org/block/{$nodeData.height - 1}"
>
	<div class="dark:bg-green-400 bg-blue-400 rounded-full h-2 w-2 blink_me"></div>
	<p class="text-neutral-500">Last block:</p>
	<p class="dark:text-neutral-50 text-neutral-900">
		{numberWithCommas(parseInt($nodeData.height - 1)) ?? 0}
	</p>
</a>

<style>
	.blink_me {
		animation: blinker 1s ease-out infinite;
	}
	@keyframes blinker {
		50% {
			opacity: 0;
		}
	}
</style>
