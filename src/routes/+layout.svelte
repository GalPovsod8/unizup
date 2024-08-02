<script lang="ts">
	import type { LayoutServerData } from './$types';
	import CookieConsent from '$lib/components/CookieConsent.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ParalaxBg from '$lib/components/ParalaxBg.svelte';
	import '../app.css';

	export let data: LayoutServerData;

	let { consent } = data;
</script>

<div
	class="max-w-[1920px] min-h-[screen] mx-auto leading-none bg-gradient-to-r from-white via-blue/40 to-white dark:from-black dark:via-[#102e35] dark:to-black text-black dark:text-white"
>
	<main>
		<ParalaxBg>
			<slot />
		</ParalaxBg>
	</main>
	<Footer />
	<CookieConsent bind:consent />
</div>
