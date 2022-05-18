<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Italianno&family=Marcellus&family=Noto+Sans:wght@300;600&family=Roboto+Flex:opsz,wght@8..144,300&display=swap"
	rel="stylesheet"
/>
<Navbar />
<slot />

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		overflow-x: hidden;
	}
</style>
