<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	//Lep bg color: #FFF4E4
</script>

<!-- <div
	class="max-w-[1920px] min-h-[screen] mx-auto leading-none bg-gradient-to-r from-white via-blue/40 to-white dark:from-black dark:via-blue/90 dark:to-black text-black dark:text-white"
> -->
<div
	class="max-w-[2560px] min-h-[screen] mx-auto leading-none bg-[#E7D8C9] dark:bg-black text-black dark:text-white"
>
	<main>
		<slot />
	</main>
	<Footer />
</div>

<!-- IDEJA ZA ONO PRVO SLIKO: NAJ BO SAM KOT LOADER PA SE POCASI SCALA DO TAJ KO SE STRAN NALOZI -->
