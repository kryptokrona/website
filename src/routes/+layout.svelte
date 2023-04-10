<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Signup from '$lib/components/Signup.svelte';
	import { blogPosts, nodeData, supplyData } from '$lib/stores/data';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { Toaster } from 'svelte-french-toast';
	import { fade } from 'svelte/transition';

	import '../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { quadInOut } from 'svelte/easing';

	export let data;
	let startAnimation;

	nodeData.set(data.node);
	blogPosts.set(data.posts);
	supplyData.set(data.supply);

	inject({ mode: dev ? 'development' : 'production' });

	onMount(() => {
		startAnimation = true;
	});
</script>

<Toaster />

<Navbar />
{#key $page.url.href}
	<main in:fade={{ duration: 500, easing: quadInOut }}>
		<slot />
	</main>
{/key}
<Signup />
<Footer />
