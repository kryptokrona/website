<script lang="ts">
  const projects = [
    {
      name: 'Hugin Messenger',
      url: 'https://github.com/kryptokrona/hugin-desktop',
    },
    {
      name: 'Yggdrasil wallet',
      url: 'https://github.com/kryptokrona/yggdrasil-wallet',
    },
    {
      name: 'Kryptokrona explorer',
      url: 'https://github.com/kryptokrona/svelte-explorer'
    },
    {
      name: 'Kryptokrona API',
      url: 'https://github.com/kryptokrona/kryptokrona-api',
    },
    {
      name: 'Kryptokrona kotlin SDK',
      url: 'https://github.com/kryptokrona/kryptokrona-kotlin-sdk',
    },
    {
      name: 'Kryptokrona faucet',
      url: 'https://github.com/kryptokrona/kryptokrona-faucet',
    }
  ]
</script>

<div class="max-w-6xl mx-auto px-4 xl:px-2 mt-6">
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      class="p-4 dark:bg-neutral-800 bg-neutral-200 rounded-lg md:rounded-tr-3xl lg:rounded-lg border dark:border-neutral-700/50 border-neutral-300 md:row-span-2 dark:shadow-xl shadow-md flex flex-col justify-between"
    >
      <div class="flex flex-col justify-between h-full">
        <div>
          <h2 class="text-2xl font-bold dark:text-neutral-50 text-neutral-900 tracking-tight">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block mb-1 stroke-green-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
            Software
          </h2>
          <p class="dark:text-neutral-300 text-neutral-700 mt-2 mb-4">
            Here's a list of tools and apps being built, feel free to contribute or test it out! <a href="https://github.com/kryptokrona" class="underline">More.</a>
          </p>
        </div>
        <div class="grid grid-cols-2 gap-3">
          {#each projects as project}
          <a
            class="inline-flex gap-1 items-center justify-between  rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 text-neutral-50 dark:bg-neutral-700 bg-neutral-600 border dark:border-neutral-600 border-neutral-500 hover:bg-neutral-600 h-10 py-2 px-4 col-span-2"
            href={project.url}
          >
            <p>{project.name}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-4 w-4 opacity-50" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
              <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
            </svg>
          </a>
            {/each}
        </div>
      </div>
    </div>
    <div
      class="p-4 rounded-lg lg:rounded-br-3xl border dark:border-neutral-700/50 border-neutral-300 dark:shadow-xl shadow-md"
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
            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        Get rewarded
      </h2>
      <p class="dark:text-neutral-400 mt-2 mb-4">
        Become part of our thriving mining community and leverage your computer's processing power
        to validate transactions, boost network security, and generate a steady stream of income.
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
        Be your own bank
      </h2>
      <p class="dark:text-neutral-400 mt-2 mb-4">
        Kryptokrona offers easy and safe ways to manage your money, helping you rely less on
        traditional banks and giving you more control over your financial life.
      </p>
    </div>
    <div
      class="p-4 rounded-lg md:rounded-tr-3xl lg:rounded-tr-3xl border dark:border-neutral-700/50 border-neutral-300 dark:shadow-xl shadow-md"
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
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Communicate privately
      </h2>
      <p class="dark:text-neutral-400 mt-2 mb-4">
        Our blockchain-based messenger ensures secure, private, and encrypted peer-to-peer
        communication, keeping your sensitive data and personal information safe from prying eyes.
      </p>
    </div>
    <div
      class="p-4 rounded-lg md:rounded-tl-3xl lg:rounded-tl-3xl border dark:border-neutral-700/50 border-neutral-300 dark:shadow-xl shadow-md"
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
            d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        Contribute
      </h2>
      <p class="dark:text-neutral-400 mt-2 mb-4">
        We wholeheartedly welcome contributors who share our passion for innovation,
        decentralization, and the desire to make a difference in the rapidly evolving world of
        cryptocurrency.
      </p>
    </div>
  </div>
</div>

