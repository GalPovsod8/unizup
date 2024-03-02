<script lang="ts">
	export let pageTitle: string;
	export let pageDescription: string;
	export let pageScrollLink: string = '#';
</script>

<section
	class="h-[80dvh] md:h-[75dvh] pt-20 w-full flex flex-col items-center justify-center gap-30"
>
	<article class="flex flex-col items-center text-center gap-10">
		<h1 class="font-bold text-64 md:text-96 uppercase">{pageTitle}</h1>
		<div class="flex flex-col items-center gap-20">
			<p class="w-full md:w-[65%] text-20 md:text-24">
				{pageDescription}
			</p>
			<a href="/" class="text-16 md:text-20"
				>Domov > <a href="/dynamic" class="font-semibold text-moreRed">UniPulz</a></a
			>
		</div>
	</article>
	<a
		href={pageScrollLink}
		class="relative top-0 hover:top-2 dark:invert w-max grid place-items-center transition-all ease-in-out duration-150"
	>
		<img src="/Polygon.svg" alt="▼" />
		<img class="absolute w-3/5 top-2" src="/Polygon.svg" alt="▼" />
	</a>
</section>
