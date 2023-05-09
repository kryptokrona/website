<script>
  import { enhance } from "$app/forms";

  let email;
  let password;
</script>

<div class="flex min-h-full flex-col justify-center max-w-6xl mx-auto py-32 sm:py-36 lg:py-40 px-4 xl:px-2">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">

    <h2 class="mt-6 text-center text-3xl font-bold tracking-tight dark:text-neutral-50 text-neutral-900">Register a new
      account</h2>
  </div>
  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="dark:bg-neutral-800 border border-neutral-700 px-4 py-8 shadow rounded-md sm:px-10 sm:shadow-lg">
      <form action="#" actions="?/register" class="space-y-6" method="POST" use:enhance>
        <div>
          <label class="block text-sm font-medium leading-6 dark:text-neutral-50" for="email">Email address</label>
          <div class="mt-2">
            <input autocomplete="email"
                   bind:value={email}
                   class="min-w-0 w-full block rounded-md border-0 dark:bg-white/5 px-3.5 py-2 dark:text-white shadow-sm ring-1 ring-inset dark:ring-white/10 ring-neutral-700 focus:ring-2 focus:ring-inset dark:focus:ring-white focus:ring-neutral-900/20 sm:text-sm sm:leading-6" id="email" name="email"
                   required type="email">
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium leading-6 dark:text-neutral-50" for="password">Password</label>
          <div class="mt-2">
            <input autocomplete="current-password"
                   bind:value={password}
                   class="min-w-0 w-full block rounded-md border-0 dark:bg-white/5 px-3.5 py-2 dark:text-white shadow-sm ring-1 ring-inset dark:ring-white/10 ring-neutral-700 focus:ring-2 focus:ring-inset dark:focus:ring-white focus:ring-neutral-900/20 sm:text-sm sm:leading-6" id="password" name="password"
                   required type="password">
          </div>
        </div>

        <div>
          <button
            class="flex w-full justify-center rounded-md dark:bg-neutral-300 bg-neutral-900 px-3 py-2 text-sm font-semibold dark:text-neutral-900 text-neutral-50 shadow-sm hover:bg-neutral-700 dark:hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            formaction="?/register" type="submit">
            Register account
          </button>
        </div>

        <div class="text-center dark:text-neutral-400 text-neutral-600">
          <p>Already registered? <a href="/user/login" class="dark:text-neutral-50 text-neutral-900 font-bold dark:hover:text-neutral-300 hover:text-neutral-600">Log in</a></p>
        </div>
      </form>

    </div>
  </div>
</div>
