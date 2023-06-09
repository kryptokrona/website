<script>
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';
	import Header from './components/Header.svelte';
	import { isDarkModeActive } from '$lib/utils/helpers';
	import { roadmap } from '$lib/stores/data';
	import Description from './components/Description.svelte';
</script>

<Header title={$roadmap.title} text={$roadmap.text} subtitle={$roadmap.subtitle} />
<div class="pt-4" />
<Timeline position="alternate">
	{#each $roadmap.roadpoints as option, i}
		<TimelineItem>
			<TimelineOppositeContent slot="opposite-content">
				<p>{option.time}</p>
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineDot
					style={' border: none; background-color: ' + (isDarkModeActive() ? '#4ade80' : '#60a5fa')}
				/>

				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<div class="md:relative">
					<h3 class="dark:text-neutral-300 text-neutral-600 font-bold">
						{option.title}
					</h3>
					<Description text={option.description} title={option.title} alignRight={i % 2 != 0} />
				</div>
			</TimelineContent>
		</TimelineItem>
	{/each}
</Timeline>

<style>
	h3 {
		letter-spacing: 1.5px;
		margin: 0;
		padding: 0;
	}

	p {
		letter-spacing: 1.5px;
		margin: 0;
		color: grey;
	}
</style>
