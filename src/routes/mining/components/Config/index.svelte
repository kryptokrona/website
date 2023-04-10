<script>
  import { generateConfig } from "./generate";

  let address
</script>

<div class="py-16 sm:py-24 dark:bg-neutral-800 sm:bg-transparent">
  <div class="mx-auto max-w-6xl px-4 xl:px-2">
    <div class="mx-auto grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 p-4 sm:p-8 rounded-lg dark:sm:bg-neutral-800 sm:border border-neutral-700">
      <div class="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
        <h2 class="inline sm:block lg:inline xl:block dark:text-neutral-50 text-neutral-900">Generate your config file</h2>
        <p class="inline sm:block lg:inline xl:block dark:text-neutral-50 text-neutral-900">with ease.</p>
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
            class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >Generate</button
          >
        </div>
        <p class="mt-4 text-sm leading-6 text-gray-300">We can't access or save your address.</p>
      </div>
    </div>
  </div>

</div>
