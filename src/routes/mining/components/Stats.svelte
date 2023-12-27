<script>
  import { nodeData, supplyData } from "$lib/stores/data";
  import { prettifyHashrate, getReadableDifficultyString } from "$lib/utils/formats";
</script>

<div class="mx-auto max-w-6xl px-4 xl:px-2">
  <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-neutral-50">Network</h3>
  <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
    <div class="overflow-hidden rounded-lg dark:bg-neutral-800 border border-neutral-700 px-4 py-5 shadow sm:p-6">
      <dt class="truncate text-sm font-medium dark:text-gray-50">Hashrate</dt>
      <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900 dark:text-neutral-50">{prettifyHashrate($nodeData.hashrate, 2)}</dd>
    </div>

    <div class="overflow-hidden rounded-lg dark:bg-neutral-800 border border-neutral-700 px-4 py-5 shadow sm:p-6">
      <dt class="truncate text-sm font-medium dark:text-gray-50">Last reward</dt>
      <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900 dark:text-neutral-50">{$supplyData.calculatedLastReward ? `${$supplyData.calculatedLastReward.toFixed(2)} XKR` : "No data"}</dd>
    </div>

    <div class="overflow-hidden rounded-lg dark:bg-neutral-800 border border-neutral-700 px-4 py-5 shadow sm:p-6">
      <dt class="truncate text-sm font-medium dark:text-gray-50">Difficulty</dt>
      <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900 dark:text-neutral-50">{getReadableDifficultyString($nodeData.difficulty, 3)}</dd>
    </div>
  </dl>
</div>