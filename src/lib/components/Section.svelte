<script lang="ts">
	export let alignment: 'left' | 'right' = 'left';
	export let imageUrl: string;
	export let title: string;
	export let description: string;
</script>

<main>
	<div class="section {alignment} relative w-full h-section">
		{#if imageUrl}
			<div
				class="image absolute w-2/4 h-full bg-cover z-10 shadow-md"
				style="background-image: url({imageUrl})"
			/>
		{/if}

		<div class="block w-3/5 h-section bg-card absolute" />
		<div class="content absolute z-20 p-6 bg-white shadow-md min-w-1/5 max-w-1/3 min-h-1/3">
			<div class="font-header uppercase font-semibold text-5xl mb-5">{title}</div>
			<div class="font-content text-base leading-loose">{description}</div>
		</div>
	</div>
</main>

<style>
	.section.left .image {
		top: 10%;
		left: 30%;
	}

	.section.right .image {
		top: 10%;
		right: 30%;
	}

	.section.left .block {
		top: 0;
		right: 0;
	}

	.section.right .block {
		top: 0;
		left: 0;
	}

	.section.left .content {
		top: 20%;
		right: 10%;
		text-align: right;
	}

	.section.right .content {
		top: 20%;
		left: 10%;
		text-align: left;
	}
</style>
