<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Signup from '$lib/components/Signup.svelte';
	import { blogPosts, nodeData, supplyData } from '$lib/stores/data';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
	import { Toaster } from 'svelte-french-toast';

  import '../app.css';

	export let data;

	nodeData.set(data.node);
	blogPosts.set(data.posts);
	supplyData.set(data.supply);

  inject({ mode: dev ? 'development' : 'production' });

</script>

<Toaster />

<Navbar />
<slot />
<Signup />
<Footer />
