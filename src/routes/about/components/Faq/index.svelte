<script>
  import Question from "./Question.svelte";

  const content = [
    {
      question: "How can I get started with Kryptokrona?",
      answer: "To get started with Kryptokrona, you'll need to download our wallet from our website. Once you've installed the wallet, you can start receiving, sending, and storing kryptokrona. You can obtain coins by mining, purchasing them on an exchange, or receiving them from another user."
    },
  ]

</script>

<div class="mx-auto max-w-6xl py-16 sm:py-24 px-4 xl:px-2">
	<h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-neutral-50">
		Frequently asked content
	</h2>
	<p class="mt-6 max-w-2xl text-base leading-7 text-neutral-500">
		Have a different question and can’t find the answer you’re looking for? Reach out to us on <a
			class="font-semibold dark:text-green-400 text-blue-400 hover:text-indigo-500"
			href="#">Discord</a
		> and our community will surely have an answer for you.
	</p>
	<div class="mt-20">
		<dl
			class="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10"
		>
			{#each content as item}
        <Question data={item}/>
			{/each}
		</dl>
	</div>
</div>
