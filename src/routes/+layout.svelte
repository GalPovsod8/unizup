<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	//Lep bg color: #FFF4E4
</script>

<div
	class="max-w-[1920px] min-h-[screen] mx-auto leading-none bg-gradient-to-r from-white via-blue/40 to-white dark:from-black dark:via-blue/90 dark:to-black text-black dark:text-white"
>
	<main class="flex flex-col gap-120 px-[5%]">
		<slot />
	</main>
	<Footer />
</div>
