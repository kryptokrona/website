<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';

	let showModal;
	onMount(() => {
		let seen = window.localStorage.getItem('hide_discord_invite');
		setTimeout(() => {
			if (seen) return;
			showModal = true;
		}, 1000 * 4);
	});

	const decline = () => {
		showModal = false;
		window.localStorage.setItem('hide_discord_invite', 'true');
	};

	const accept = () => {
		showModal = false;
		window.localStorage.setItem('hide_discord_invite', 'true');
		goto('https://discord.gg/nRK5k7wYy8');
	};
</script>

<div
	aria-live="assertive"
	class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-end sm:p-6 z-[100]"
>
	<div class="flex w-full flex-col items-center space-y-4 sm:items-end">
		{#if showModal}
			<div
				transition:fade
				class="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-700 border border-neutral-700 rounded-lg dark:bg-neutral-800 bg-white shadow-lg ring-1 ring-black ring-opacity-5"
			>
				<div class="flex w-0 flex-1 items-center p-4">
					<div class="w-full">
						<p class="text-sm font-medium text-gray-900 dark:text-gray-50"><span>
                        <svg
                          fill="currentColor"
                          height="16"
                          viewBox="0 0 16 16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                          class="inline-flex h-5 w-5 mr-1"
                        >
            <path
              d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
            />
          </svg>
            </span>Discord invitation</p>
						<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
							Kryptokrona would like to invite you to their community on discord! 😄
						</p>
					</div>
				</div>
				<div class="flex">
					<div class="flex flex-col divide-y divide-neutral-700">
						<div class="flex h-0 flex-1">
							<button
								on:click={accept}
								type="button"
								class="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-green-400 hover:text-green-200 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
							>
								Accept
							</button>
						</div>
						<div class="flex h-0 flex-1">
							<button
								on:click={decline}
								type="button"
								class="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
							>
								Decline
							</button>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
