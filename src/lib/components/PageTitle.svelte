<script lang="ts">
	export let pageTitle: string;
	export let pageDescription: string;
	export let pageScrollLink: string = '#';
	import { page } from '$app/stores';
	import Breadcrumbs from './Breadcrumbs.svelte';
</script>

<section
	class="h-[80dvh] md:h-[75dvh] pt-20 w-full flex flex-col items-center justify-center gap-30 animate-show"
>
	<article class="flex flex-col items-center text-center">
		<h1
			class="font-bold w-[95%] break-words font-kufam animate-fontAnim text-64 md:text-96 uppercase"
		>
			{pageTitle}
		</h1>
		<p class="w-[90%] md:w-[65%] text-20 md:text-24">
			{pageDescription}
		</p>
	</article>
	<Breadcrumbs path={$page.url.pathname} />
	<a
		href={pageScrollLink}
		class="relative animate-cBounce top-0 hover:top-1 dark:invert w-max grid place-items-center transition-all ease-in-out duration-150"
	>
		<img src="/Polygon.svg" alt="▼" />
		<img class="absolute w-3/5 top-2" src="/Polygon.svg" alt="▼" />
	</a>
</section>
