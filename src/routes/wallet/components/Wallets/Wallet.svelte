<script lang="ts">
	import WindowsIcon from './icons/WindowsIcon.svelte';
	import AppleIcon from './icons/AppleIcon.svelte';
	import LinuxIcon from './icons/LinuxIcon.svelte';
	import AndroidIcon from './icons/AndroidIcon.svelte';
	import DownloadIcon from './icons/DownloadIcon.svelte';
	import GithubIcon from './icons/GithubIcon.svelte';

	export let data;
	const { title, text, download, source, os } = data;
</script>

<li
	class="col-span-1 divide-y divide-neutral-700 rounded-lg dark:bg-neutral-800 border border-neutral-700 shadow"
>
	<div class="flex w-full items-center justify-between space-x-6 p-6">
		<div class="flex-1 truncate">
			<div class="flex items-center space-x-3">
				<h3 class="truncate text-lg font-medium dark:text-neutral-50">{title}</h3>
				<span
					class="inline-flex gap-2 flex-shrink-0 rounded-full py-0.5 text-xs font-medium dark:text-neutral-50 text-neutral-900"
				>
					{#if os.includes('win')}
						<WindowsIcon />
					{/if}
					{#if os.includes('mac') || os.includes('ios')}
						<AppleIcon />
					{/if}
					{#if os.includes('linux')}
						<LinuxIcon />
					{/if}
					{#if os.includes('android')}
						<AndroidIcon />
					{/if}
				</span>
			</div>
			<p class="mt-1 truncate text-sm dark:text-neutral-400 text-neutral-700">{text}</p>
		</div>
	</div>
	<div>
		<div class="-mt-px flex divide-x divide-neutral-600">
			<div class="flex w-0 flex-1">
				<a
					class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold dark:text-neutral-50"
					href={download}
				>
					<DownloadIcon />
					Download
				</a>
			</div>
			<div class="-ml-px flex w-0 flex-1">
				<a
					class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold dark:text-neutral-50"
					href={source}
				>
					<GithubIcon />
					Source
				</a>
			</div>
		</div>
	</div>
</li>
