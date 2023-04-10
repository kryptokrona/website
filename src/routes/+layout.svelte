<script>
	import Footer from '$lib/layout/Footer.svelte';
	import Navbar from '$lib/layout/Navbar.svelte';
	import Signup from '$lib/layout/Signup.svelte';
	import { blogPosts, nodeData, supplyData } from '$lib/stores/data';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { Toaster } from 'svelte-french-toast';
	import { fade } from 'svelte/transition';
  import { page } from '$app/stores';
  import { quadInOut } from 'svelte/easing';

	import '../app.css';

	export let data;

	nodeData.set(data.node);
	blogPosts.set(data.posts);
	supplyData.set(data.supply);

	inject({ mode: dev ? 'development' : 'production' });

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
