<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Signup from '$lib/components/Signup.svelte';
	import { blogPosts, nodeData, supplyData } from '$lib/stores/data';
	import { Toaster } from 'svelte-french-toast';

	export let data;

	nodeData.set(data.node);
	blogPosts.set(data.posts);
	supplyData.set(data.supply);
</script>

<Toaster />

<Navbar />
<slot />
<Signup />
<Footer />
