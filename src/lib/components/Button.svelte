<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let disabled: boolean = false;
</script>

<main>
	<button
		class="py-2 px-4 my-0 mx-2 text-center shadow-md bg-button ease-custom transition-all duration-200 uppercase text-xs font-semibold text-white b-0 hover:cursor-pointer hover:shadow-lg"
		on:click={() => dispatch('click')}
		{disabled}
	>
		<span><slot>Button</slot></span>
	</button>
</main>

<style>
	button:disabled {
		background-color: rgb(180, 180, 180) !important;
	}

	button:disabled:hover {
		cursor: not-allowed;
	}
</style>
