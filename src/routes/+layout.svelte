<script>
	import Footer from '$lib/layout/Footer.svelte';
	import Navbar from '$lib/layout/Navbar.svelte';
	import Signup from '$lib/layout/Signup.svelte';
	import { nodeData, supplyData } from '$lib/stores/data';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { Toaster } from 'svelte-french-toast';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { quadInOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	import '../app.css';
	import DiscordPopup from '$lib/components/DiscordPopup.svelte';
	import Noise from '$lib/components/Noise.svelte';
	import LoadingScreen from '$lib/components/LoadingScreen.svelte';

	export let data;
	let loading = true;

	inject({ mode: dev ? 'development' : 'production' });

	nodeData.set(data.nodeInfo);
	supplyData.set(data.supply);

	onMount(async () => {
		setTimeout(() => {
			loading = false;
		}, 1000);
	});
</script>

<Toaster />
<DiscordPopup />

{#if loading}
	<LoadingScreen />
{/if}

<Navbar />
<Noise />
{#key $page.url.href}
	<main in:fade={{ duration: 500, easing: quadInOut }}>
		<slot />
	</main>
{/key}
<Signup />
<Footer />
