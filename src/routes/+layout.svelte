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
  import { onMount } from "svelte";
  import { fetchNode, fetchSupply } from "$lib/utils/helpers";

	import '../app.css';
  import { CONFIG } from "$lib/config";

	export let data;

	inject({ mode: dev ? 'development' : 'production' });

  nodeData.set(data.node);
  blogPosts.set(data.posts);
  supplyData.set(data.supply);

  onMount(async () => {
    nodeData.set(await fetchNode(CONFIG.NODE_ONE, CONFIG.NODE_TWO));
    supplyData.set(await fetchSupply(CONFIG.SUPPLY_API));
    setInterval(async () => {
      nodeData.set(await fetchNode(CONFIG.NODE_ONE, CONFIG.NODE_TWO));
      supplyData.set(await fetchSupply(CONFIG.SUPPLY_API));
    }, 1000 * 30)
  })

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
