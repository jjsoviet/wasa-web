<script lang="ts">
	export let imageUrl: string;
	export let title: string;
</script>

<main>
	<div class="h-header bg-card w-full relative">
		<div
			class="blur-sm h-full w-full bg-cover p-3 bg-card shadow-md"
			style="background-image: url({imageUrl})"
		/>

		<div
			class="absolute w-1/3 top-1/4 right-40 font-header text-7xl uppercase leading-tight text-right"
		>
			{title}
		</div>
	</div>
</main>
