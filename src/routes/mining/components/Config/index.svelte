<script>
  import { generateConfig } from "./generate";

  let address
</script>

<div class="py-4 dark:bg-neutral-800 sm:bg-transparent">
  <div class="mx-auto max-w-6xl px-4 xl:px-2">
    <div class="mx-auto grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 p-4 sm:p-8 rounded-lg dark:sm:bg-neutral-800 sm:border border-neutral-700">
      <div class="max-w-xl lg:col-span-7">
        <p class="text-sm font-semibold uppercase tracking-wide dark:text-neutral-400 text-neutral-500">Side option · traditional pools</p>
        <h2 class="mt-2 text-3xl font-bold tracking-tight dark:text-neutral-50 text-neutral-900 sm:text-4xl">Prefer a classic pool?</h2>
        <p class="mt-4 text-base leading-7 dark:text-neutral-400 text-neutral-600">We recommend <a href="https://docs.kryptokrona.org/mining/p2pool" class="font-semibold underline dark:text-neutral-200 text-neutral-800">p2pool</a> above, but you can still mine to a traditional, centralized pool if you prefer. Enter your wallet address to generate an XMRig config. Keep in mind these pools are run by third parties and may charge a fee — with p2pool your rewards are paid straight to your wallet.</p>
      </div>
      <div class="w-full max-w-md lg:col-span-5 lg:pt-2">
        <div class="flex gap-x-4">
          <label for="address" class="sr-only">Xkr address</label>
          <input
            id="address"
            name="text"
            type="text"
            required
            class="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset dark:ring-white/10 ring-neutral-700 dark:placeholder:text-white/75 placeholder:text-neutral-600 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            placeholder="Enter your wallet address"
            bind:value={address}
          />
          <button
            on:click={() => generateConfig(address)}
            class="rounded-md dark:bg-neutral-50 dark:text-neutral-900 bg-neutral-900 text-neutral-50 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >Generate</button
          >
        </div>
        <p class="mt-4 text-sm leading-6 text-gray-300">We can't see or save your address.</p>
      </div>
    </div>
  </div>

</div>
