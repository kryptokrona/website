<script>
  import Wallet from "./Wallet.svelte";

  const wallets = [
    {
      title: 'Desktop Wallet',
      text: 'Easy to use desktop wallet',
      download: 'https://github.com/kryptokrona/kryptokrona-desktop-wallet/releases/latest',
      source: 'https://github.com/kryptokrona/kryptokrona-mobile-wallet',
      os: ['win']
    },
    {
      title: 'Mobile Wallet',
      text: 'Take kryptokrona with you',
      download: 'https://play.google.com/store/apps/details?id=com.xkr&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
      source: 'https://github.com/kryptokrona/kryptokrona-mobile-wallet',
      os: ['android']
    },
    {
      title: 'Terminal Wallet',
      text: "If you know what you're doing",
      download: 'https://github.com/kryptokrona/kryptokrona/releases/latest',
      source: 'https://github.com/kryptokrona/kryptokrona',
      os: ['linux']
    }
  ]
</script>

<div class="mx-auto max-w-6xl px-2 xl:px-2">
  <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
    {#each wallets as wallet}
      <Wallet data={wallet}/>
    {/each}
  </ul>
</div>