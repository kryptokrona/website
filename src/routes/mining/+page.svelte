<script>
  import Header from "./components/Header.svelte";
  import Config from "./components/Config/index.svelte";
  import Faq from "./components/Faq/index.svelte";
  import Statusbar from "$lib/components/Statusbar.svelte";
  import Stats from "./components/Stats.svelte";
</script>

<Header />
<Stats />
<Config />
<Faq />
<Statusbar />