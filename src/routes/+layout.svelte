<script>
  import "../app.css";
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Signup from "$lib/components/Signup.svelte";

</script>

<Navbar />
<slot />
<Signup />
<Footer />