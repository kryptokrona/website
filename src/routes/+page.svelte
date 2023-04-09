<script>
  import LatestPosts from "$lib/components/blog/LatestPosts.svelte";
  import Grid from "$lib/components/Grid.svelte";
  import Statusbar from "$lib/components/Statusbar.svelte";
  import Features from "$lib/components/Features.svelte";
  import OrganisationLdJson from "$lib/components/seo/OrganisationLdJson.svelte";
  import Header from "$lib/components/Header.svelte";
</script>

<svelte:head>
  <title>Kryptokrona</title>
  <meta property="og:title" content="Kryptokrona" />
  <meta name="twitter:title" content="Kryptokrona" />
  <meta name="description" content="A Nordic Cryptocurrency to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the communication and money of the future." />
  <meta name="twitter:description" content="A Nordic Cryptocurrency to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the communication and money of the future." />
  <meta property="og:description" content="A Nordic Cryptocurrency to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the communication and money of the future." />
</svelte:head>

<!--SEO-->
<OrganisationLdJson />

<!--CONTENT-->
<Header />
<Features />
<Grid />
<Statusbar />
<!--<LatestPosts posts={posts.data}/>-->