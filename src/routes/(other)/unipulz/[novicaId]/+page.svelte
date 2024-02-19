<script lang="ts">
	import type { PageData } from './$types';
	import { FormatDate, ShortenTag } from '$lib/utils';
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
	<article class="w-full lg:w-[70vw] flex flex-col gap-30">
		{#await novica}
			<p>Nalaganje novice...</p>
		{:then data}
			<!-- Breadcrumbi grejo nad article -->
			<div class="w-full flex flex-col gap-15">
				<h2
					class="underliner font-bold text-40"
					style="text-decoration-color: {data.attributes.Tag == 'Dogodek'
						? '#942B2B'
						: data.attributes.Tag == 'Duhovno'
							? '#51B3C9'
							: '#92942B'}"
				>
					{data.attributes.Naslov}
				</h2>
				<div class="w-full flex items-center justify-between">
					<div class="flex flex-col gap-5">
						<p><b class="font-medium">Avtor: </b>{data.attributes.Avtor}</p>
						<p><b class="font-medium">Datum: </b>{FormatDate(data.attributes.Datum)}</p>
					</div>
					<a
						class:bg-blue={data.attributes.Tag == 'Duhovno'}
						class:bg-redTag={data.attributes.Tag == 'Dogodek'}
						class:bg-novicaTagYellow={data.attributes.Tag == 'Novica'}
						class="flex items-center font-medium text-white rounded-xl border border-black dark:border-white px-4 py-2 hover:opacity-80 transition-all ease-in-out duration-150"
						href={`${data.attributes.Tag}`}
					>
						{data.attributes.Tag}
					</a>
				</div>
			</div>
			<div class="markdownStyles flex flex-col gap-15 text-20">
				<SvelteMarkdown source={data.attributes.Vsebina} />
			</div>
			<p>Slike!</p>
		{:catch error}
			<p>Oops. Nekaj se je zalomilo. <br /> Sporočilo: {error}</p>
		{/await}
	</article>
	<aside class="sticky top-10 w-full lg:w-[30vw] flex flex-col gap-15">
		<h2 class="text-24 font-bold border-b border-black/80 dark:border-white/80 pb-1">
			Najbolj sveže...
		</h2>
		<ul class="flex flex-col gap-15">
			{#await drugeNovice}
				<p>Nalaganje novic...</p>
			{:then data}
				{#each data as drugaNovica}
					<li>
						<a
							class="w-full flex items-start justify-between gap-30 hover:opacity-80 transition-all ease-in-out duration-150"
							data-sveltekit-reload
							href="/unipulz/{drugaNovica.id}"
						>
							<div class="w-[80%] flex flex-col gap-5">
								<h3 class="font-medium text-20 whitespace-nowrap overflow-hidden text-ellipsis">
									{drugaNovica.attributes.Naslov}
								</h3>
								<span class="opacity-90"
									>{drugaNovica.attributes.Avtor}, {FormatDate(drugaNovica.attributes.Datum)}</span
								>
							</div>

							<a
								class:bg-blue={drugaNovica.attributes.Tag == 'Duhovno'}
								class:bg-redTag={drugaNovica.attributes.Tag == 'Dogodek'}
								class:bg-novicaTagYellow={drugaNovica.attributes.Tag == 'Novica'}
								class="flex items-center font-medium text-white rounded-xl border border-black dark:border-white p-2 hover:opacity-80 transition-all ease-in-out duration-150"
								href={`${drugaNovica.attributes.Tag}`}
							>
								{ShortenTag(drugaNovica.attributes.Tag)}
							</a>
						</a>
					</li>
				{/each}
			{:catch error}
				<p>Oops. Nekaj se je zalomilo. <br /> Sporočilo: {error}</p>
			{/await}
		</ul>
		<Link linkText="Vse novice" linkHref="/unipulz" fontSize={20} />
	</aside>
</section>

<style>
	.underliner {
		text-decoration: underline;
		text-decoration-style: solid;
		text-decoration-thickness: 3px;
	}
</style>
