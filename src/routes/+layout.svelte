<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Signup from '$lib/components/Signup.svelte';
	import { blogPosts, nodeData, supplyData } from '$lib/stores/data';
	import { Toaster } from 'svelte-french-toast';
  import { browser } from "$app/environment";
  import { webVitals } from '$lib/vitals';
  import { page } from '$app/stores';

  import '../app.css';

	export let data;

	nodeData.set(data.node);
	blogPosts.set(data.posts);
	supplyData.set(data.supply);

  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;
  $: if (browser && analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId
    })
  }
</script>

<Toaster />

<Navbar />
<slot />
<Signup />
<Footer />
