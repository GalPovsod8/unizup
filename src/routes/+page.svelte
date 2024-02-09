<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import SingleNewsCard from '$lib/components/SingleNewsCard.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	function ToggleTheme() {
		if (localStorage.theme === 'dark') {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
		} else {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
		}
	}
</script>

<div>
	<section class="h-[75vh] w-full rounded-3xl grid place-items-center pt-8 mb-8">
		<header class="grid place-items-center gap-50">
			<hgroup class="grid place-items-center font-bold gap-30 text-center">
				<img class="h-20 w-20 rounded-full -mb-7" src="/unizupLogo.png" alt="UZ" />
				<h1 class="text-96 -mb-5">UNIZUP</h1>
				<h2 class="text-40">UNIVERZITETNA ŽUPNIJA MARIBOR</h2>
			</hgroup>
			<!-- Na mobile, sam skrijes tti nav, pa renderas onga ko je na vsakmo pago -->
			<Nav />
			<button
				on:click={ToggleTheme}
				aria-label="Dark/light mode toggle"
				class="h-6 w-6 -mt-3 rounded-full bg-black dark:bg-white"
			></button>
		</header>
		<p class="text-20">
			Študentska maša vsako sredo ob <b class="font-bold text-moreRed">19. uri</b> v
			<b class="font-bold text-moreRed">mariborski stolnici</b>.
		</p>
	</section>
	<section
		class="p-90 grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row auto-rows-max gap-60 rounded-3xl border bg-white dark:bg-black"
	>
		{#if data && data.novice}
			{#each data.novice.slice(0, 6) as novica, i}
				{#if i < 3}
					<SingleNewsCard
						noivcaNaslov={novica.noivcaNaslov}
						novicaLink={novica.novicaLink}
						tag={novica.tag}
						imgSrc={novica.imgSrc}
						avtor={novica.avtor}
						datum={novica.datum}
						povzetek={novica.besedilo}
						isRecent={true}
					/>
				{:else}
					<SingleNewsCard
						noivcaNaslov={novica.noivcaNaslov}
						novicaLink={novica.novicaLink}
						tag={novica.tag}
						imgSrc={novica.imgSrc}
						avtor={novica.avtor}
						datum={novica.datum}
						povzetek={novica.besedilo}
						isRecent={false}
					/>
				{/if}
			{/each}
		{:else}
			<p>Error loading news</p>
		{/if}
		<Link linkHref="/Novice" linkText="Vse novice" />
	</section>
</div>
<section class="flex flex-col items-center gap-60">
	<h2 class="font-black text-64 text-center">KDO SMO?</h2>
	<p class="sm:w-[70%] w-9/12 text-32 text-center font-medium">
		Univerzitetna župnija Maribor je posebne vrste župnija, saj pokriva področje študentske
		pastorale, torej ne gre za teritorialno župnijo, pač pa personalno župnijo. V tem smislu
		usmerjene pastorale v študente pokriva področje celotne nadškofije Maribor. Nahaja se v središču
		mesta na Slomškovem trgu 20, poleg mariborske stolnice.
	</p>
	<div>
		<article>1</article>
		<article>2</article>
		<article>3</article>
	</div>
</section>
