<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	let open = false;
</script>

<header class="border-b dark:border-neutral-50/10 border-neutral-900/10 backdrop-blur-lg fixed top-0 w-full z-[99]">
	<nav aria-label="Global" class="mx-auto flex max-w-6xl items-center justify-between p-6 px-4 xl:px-2">
		<a class="-m-1.5 p-1.5" href="#">
			<span class="sr-only">Your Company</span>
			<img
				alt=""
				class="h-8 w-auto"
				src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
			/>
		</a>
		<div class="flex lg:hidden">
			<button
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				on:click={() => (open = !open)}
				type="button"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					aria-hidden="true"
					class="h-6 w-6"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					viewBox="0 0 24 24"
				>
					<path
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			<a class="text-sm font-semibold leading-6 text-gray-900 dark:text-neutral-50" href="#"
				>Home</a
			>

			<a class="text-sm font-semibold leading-6 text-gray-900 dark:text-neutral-50" href="#"
				>Wallet</a
			>

			<a class="text-sm font-semibold leading-6 text-gray-900 dark:text-neutral-50" href="#"
				>Blog</a
			>

			<a class="text-sm font-semibold leading-6 text-gray-900 dark:text-neutral-50" href="#"
				>About</a
			>

			<a class="text-sm font-semibold leading-6 text-gray-900 dark:text-neutral-50" href="#"
				>Hugin <span aria-hidden="true">&rarr;</span></a
			>
		</div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	{#if open}
		<div class="lg:hidden z-50" role="dialog" aria-modal="true">
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div class="fixed inset-0 z-10" />
			<div
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto dark:bg-neutral-900/80 backdrop-blur-md px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="#" class="-m-1.5 p-1.5">
						<span class="sr-only">Your Company</span>
						<img
							class="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
							alt=""
						/>
					</a>
					<button
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
						on:click={() => (open = !open)}
					>
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-neutral-50 hover:bg-gray-50"
								>Product</a
							>

							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-neutral-50 hover:bg-gray-50"
								>Features</a
							>

							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-neutral-50 hover:bg-gray-50"
								>Marketplace</a
							>

							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-neutral-50 hover:bg-gray-50"
								>Company</a
							>
						</div>
						<div class="py-6">
							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-neutral-50 hover:bg-gray-50"
								>Log in</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>
