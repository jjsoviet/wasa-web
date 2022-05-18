<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Item } from '$lib/models/Item';

	export let item: Item;

	function navigate() {
		goto(`items/${item.id}`);
	}
</script>

<main>
	<div
		on:click={navigate}
		class="bg-navbar w-full h-full rounded-md shadow-md p-6 hover:cursor-pointer hover:shadow-xl ease-custom transition-all duration-200"
	>
		<div
			class="w-full aspect-square bg-white rounded-md bg-cover"
			style="background-image: url({item.image})"
		/>

		<div class="p-2 w-full">
			<div
				class="font-header text-mb font-semibold uppercase mb-3 overflow-y-auto h-card-title leading-tight"
			>
				{item.title}
			</div>
			<div class="font-content text-xs">{item.category.toUpperCase()}</div>
			<div class="font-content text-2xl font-semibold text-orange-400">${item.price}</div>
		</div>
	</div>
</main>
