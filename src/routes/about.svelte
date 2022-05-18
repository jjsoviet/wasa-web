<script lang="ts">
	import { lorem } from '$lib/util/constants';

	export let about: string = lorem;
</script>

<main>
	<div class="bg-card p-8 m-24 shadow-md">
		<div class="font-header font-bold text-6xl mb-6">About Us</div>
		<div class="font-content text-lg leading-7">
			{about}
		</div>
	</div>
</main>
