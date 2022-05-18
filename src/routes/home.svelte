<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Section from '$lib/components/Section.svelte';

	import { lorem } from '$lib/util/constants';

	export let description: string = lorem;
</script>

<Header
	title="Some Cool Storefront"
	imageUrl="https://static-cse.canva.com/blob/559873/usinglifestylephotographyinbusiness.jpg"
/>

<div class="h-spacer w-full" />

<Section
	alignment="right"
	imageUrl="https://assets.entrepreneur.com/content/3x2/2000/start-event-planning-service.jpg"
	title="Title One"
	{description}
/>

<div class="h-spacer w-full" />

<Section
	alignment="left"
	imageUrl="https://assets.entrepreneur.com/content/3x2/2000/start-event-planning-service.jpg"
	title="Title Two"
	{description}
/>

<div class="h-spacer w-full" />
