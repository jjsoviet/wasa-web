<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';

	const dispatch = createEventDispatcher();

	export let leftLinks: string[] = ['Link 1', 'Link 2', 'Home'];
	export let rightLinks: string[] = ['About', 'Shop'];

	let selected: string;
</script>

<main>
	<div
		class="fixed h-navbar w-screen top-0 left-0 z-50 bg-navbar shadow-md flex items-center justify-center"
	>
		<div class="h-full w-3/5 min-w-navbar max-w-navbar flex justify-evenly">
			<div class="flex items-center align-left">
				{#each leftLinks as leftLink}
					<a
						class="py-2 px-6 text-xs uppercase ease-linear transition-all duration-200 ease-custom hover:cursor-pointer hover:border-b-2 hover:border-b-border"
						href={leftLink.toLowerCase()}
						class:selected={leftLink === selected}
						on:click={() => (selected = leftLink)}
					>
						{leftLink}
					</a>
				{/each}
			</div>
			<div class="flex items-center font-branding text-5xl">Fancy!</div>
			<div class="flex items-center align-right">
				{#each rightLinks as rightLink}
					<a
						class="py-2 px-6 text-xs uppercase ease-linear transition-all duration-200 ease-custom hover:cursor-pointer hover:border-b-2 hover:border-b-border"
						href={rightLink.toLowerCase()}
						class:selected={rightLink === selected}
						on:click={() => (selected = rightLink)}
					>
						{rightLink}
					</a>
				{/each}
				<Button>Contact Us</Button>
			</div>
		</div>
	</div>
</main>

<style>
	.selected {
		border-bottom: 2px solid rgb(0 0 0 / 35%);
		font-weight: 600;
	}
</style>
