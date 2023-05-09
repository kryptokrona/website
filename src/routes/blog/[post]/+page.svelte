<script lang="ts">
	import Reactions from '../components/Reactions.svelte';
  import Comments from "../components/Comments/index.svelte";

	export let data;

	const { post } = data;
	const { extra } = post;
</script>

<svelte:head>
	<title>{post.extra.title}</title>
	<meta content={post.extra.title} property="og:title" />
	<meta content={post.extra.title} name="twitter:title" />
	<meta content={post.extra.summary} name="description" />
	<meta content={post.extra.summary} name="twitter:description" />
	<meta content={post.extra.summary} property="og:description" />
</svelte:head>

<div class="h-full w-full overflow-y-scroll pb-16 pt-32 sm:pt-36 lg:pt-40">
	<div class="text-white p-4 sm:mt-0 sm:p-8">
		<article class="mx-auto prose prose-invert prose-sm max-w-4xl">
			<h1
				class="mt-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-6xl"
			>
				{post.extra.title}
			</h1>
			<Reactions />
			<div class="pt-10">
				{@html post.content}
			</div>
			<Comments data={extra.comments}/>
		</article>
	</div>
</div>
