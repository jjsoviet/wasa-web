<script context="module">
	import { getItemById } from '$lib/stores/store';

	export async function load({ params }) {
		const id = params.id;
		const item = await getItemById(id);

		return { props: { item } };
	}
</script>

<script lang="ts">
	import { goto } from '$app/navigation';

	import Button from '$lib/components/Button.svelte';
	import Loading from '$lib/components/Loading.svelte';

	import type { Item } from '$lib/models/Item';

	// populated with data from the endpoint
	export let item: Item;

	function navigateBack(defaultRoute = '/home') {
		goto(defaultRoute);
	}
</script>

<main>
	{#if !item}
		<div class="w-screen h-screen flex items-center justify-center">
			<Loading />
		</div>
	{/if}

	{#if item}
		<div class="w-full px-12 mt-24">
			<div class="bg-card container mx-auto w-full shadow-md">
				<div class="flex p-12">
					<div
						class="h-card aspect-square bg-white rounded-md bg-cover"
						style="background-image: url({item.image})"
					/>
					<div class="ml-20 h-full flex flex-col">
						<div class="font-header text-4xl font-semibold uppercase mb-3 leading-tight">
							{item.title}
						</div>
						<div class="font-content text-lg font-semibold uppercase">
							{item.category}
						</div>
						<div class="font-content text-6xl font-semibold text-orange-400 mt-4">
							${item.price}
						</div>
						<div class="font-content text-xl mt-8">
							{item.description}
						</div>
						<div class="mt-24 flex justify-end">
							<Button on:click={() => navigateBack('/shop')}>Back to List</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</main>
