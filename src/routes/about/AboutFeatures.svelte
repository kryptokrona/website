<script>
  import {supplyData} from "$lib/stores/data";
  import {numberWithCommas} from "$lib/utils/helpers";
</script>

<div class="max-w-6xl mx-auto px-4 xl:px-2 pb-16 sm:pb-20">
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      class="p-4 rounded-lg lg:rounded-br-3xl border dark:border-neutral-700/50 border-neutral-300 dark:shadow-xl shadow-md"
    >
      <h2 class="text-2xl font-bold dark:text-neutral-50 tracking-tight">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 inline-block mb-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>

        Supply
      </h2>
      <p class="dark:text-neutral-400 text-neutral-600 mt-2 mb-4">
        <span class="dark:text-neutral-100 text-neutral-900">{numberWithCommas(($supplyData.calculatedSupply).toFixed())} </span> coins has been minted out of {numberWithCommas($supplyData.calculatedMaxSupply)}.
      </p>
    </div>
    <div
      class="p-4 rounded-lg lg:rounded-br-3xl border dark:border-neutral-700/50 border-neutral-300 dark:shadow-xl shadow-md"
    >
      <h2 class="text-2xl font-bold dark:text-neutral-50 tracking-tight">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 inline-block mb-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>

        Algorithm
      </h2>
      <p class="dark:text-neutral-400 mt-2 mb-4">
        Currently using CryptoNight-Pico, which is a more fair algorithm than Bitcoin's SHA256 and can even be competently mined on ARM based phones!
      </p>
    </div>
    <div
      class="p-4 rounded-lg lg:rounded-br-3xl border dark:border-neutral-700/50 border-neutral-300 dark:shadow-xl shadow-md"
    >
      <h2 class="text-2xl font-bold dark:text-neutral-50 tracking-tight">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 inline-block mb-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>

        Blocktime
      </h2>
      <p class="dark:text-neutral-400 mt-2 mb-4">
        Our network processes new transactions every 90 seconds, in comparison to Bitcoins 10 minute delay.
      </p>
    </div>
    <div
      class="p-4 rounded-lg md:rounded-bl-3xl lg:rounded-bl-3xl border dark:border-neutral-700/50 border-neutral-300 dark:shadow-xl shadow-md"
    >
      <h2 class="text-2xl font-bold dark:text-neutral-50 tracking-tight">
        <svg
          class="w-6 h-6 inline-block mb-1"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Untraceable
      </h2>
      <p class="dark:text-neutral-400 mt-2 mb-4">
        XKR transactions make use of ring signatures and stealth addresses to keep prying eyes off of your private transactions!
      </p>
    </div>
    <div
      class="p-4 rounded-lg md:rounded-tr-3xl lg:rounded-tr-3xl border dark:border-neutral-700/50 border-neutral-300 dark:shadow-xl shadow-md"
    >
      <h2 class="text-2xl font-bold dark:text-neutral-50 tracking-tight">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 inline-block mb-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
        Fungible
      </h2>
      <p class="dark:text-neutral-400 mt-2 mb-4">
        The Kryptokrona isn’t dependent on our central banks or servers, thus less fragile than todays financial systems.
      </p>
    </div>
    <div
      class="p-4 rounded-lg md:rounded-tl-3xl lg:rounded-tl-3xl border dark:border-neutral-700/50 border-neutral-300 dark:shadow-xl shadow-md"
    >
      <h2 class="text-2xl font-bold dark:text-neutral-50 tracking-tight">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 inline-block mb-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
          />
        </svg>

        Drama-free
      </h2>
      <p class="dark:text-neutral-400 mt-2 mb-4">
        Our network reduces the amount of new coins minted with every block, making for a drama-free emission.
      </p>
    </div>
  </div>
</div>