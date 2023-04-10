<script>
  import Wallet from "./Wallet.svelte";
  import { wallets } from "./wallets";

</script>

<div class="mx-auto max-w-6xl px-2 xl:px-2">
  <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
    {#each wallets as wallet}
      <Wallet data={wallet}/>
    {/each}
  </ul>
</div>