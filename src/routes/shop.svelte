<script lang="ts">
	import ItemCard from '$lib/components/ItemCard.svelte';
	import Loading from '$lib/components/Loading.svelte';

	import { items } from '$lib/stores/store';
</script>

<main>
	{#if !$items || !$items.length}
		<div class="w-screen h-screen flex items-center justify-center">
			<Loading />
		</div>
	{/if}

	{#if $items && $items.length}
		<div class="w-full px-12 mt-24">
			<div class="container mx-auto w-full bg-card rounded-md p-8 flex flex-wrap justify-center">
				{#each $items as item}
					<div class="md:w-1/5 sm:w-1/4 min-w-card m-4 h-card">
						<ItemCard {item} />
					</div>
				{/each}
			</div>
		</div>
	{/if}
</main>
