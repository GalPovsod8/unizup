<script lang="ts">
	import type { PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';
	import Link from '$lib/components/Link.svelte';

	export let data: PageData;
	let { novica, drugeNovice } = data;
</script>

<svelte:head>
	<!-- PODATKI O NOVICI isto ne pozabit pr oznanilah!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
	<!-- <title>UniPulz | {novica.attributes.Naslov}</title>
	<meta
		name="description"
		content="Ostani na tekočem z Unizup-om! UniPulz novice so tu zato, da ostaneš vedno informiran o najbolj aktualnih zadevah."
	/> -->
</svelte:head>

<section class="w-full flex flex-col lg:flex-row items-start justify-between gap-90 mt-32">
	<article class="w-full lg:w-[70vw]">
		{#await novica}
			<p>Nalaganje novice...</p>
		{:then data}
			<h2 class="text-40 font-bold">{data.attributes.Naslov}</h2>
			<SvelteMarkdown source={data.attributes.Vsebina} />
		{:catch error}
			<p>Oops. Nekaj se je zalomilo. <br /> Sporočilo: {error}</p>
		{/await}
	</article>
	<aside class="sticky top-10 w-full lg:w-[30vw] flex flex-col gap-15">
		<h2 class="text-24 font-medium border-b border-black/80 dark:border-white/80 pb-1">
			Drugi članiki
		</h2>
		<ul class="flex flex-col gap-15">
			{#await drugeNovice}
				<p>Nalaganje novic...</p>
			{:then data}
				{#each data as drugaNovica}
					<li>
						<a data-sveltekit-reload href="/unipulz/{drugaNovica.id}"
							>{drugaNovica.attributes.Naslov}</a
						>
					</li>
				{/each}
			{:catch error}
				<p>Oops. Nekaj se je zalomilo. <br /> Sporočilo: {error}</p>
			{/await}
		</ul>
		<Link linkText="Vse novice" linkHref="/unipulz" />
	</aside>
</section>
