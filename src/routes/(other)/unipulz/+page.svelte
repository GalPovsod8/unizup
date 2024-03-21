<script lang="ts">
	import type { PageData } from './$types';
	import SingleNewsCard from '$lib/components/SingleNewsCard.svelte';
	import Loader1 from '$lib/components/Loader1.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
	import { FormatDate } from '$lib/utils';
	export let data: PageData;
	let vseNovice = data.vseNovice;
</script>

<svelte:head>
	<title>UniPulz | Novice Univerzitetne Župnije Maribor</title>
	<meta
		name="description"
		content="Ostani na tekočem z Unizup-om! UniPulz novice so tu zato, da ostaneš vedno informiran o najbolj aktualnih zadevah."
	/>
</svelte:head>

<div class="w-full min-h-screen">
	<PageTitle
		pageTitle="UniPulz"
		pageDescription="Dobrodošli na UniPulz - novice univerzitetne župnije Maribor. Želimo vam prijetno branje!"
		pageScrollLink="#unipulz"
	/>
	<section
		id="unipulz"
		class="w-full p-90 px-[5%] flex flex-col gap-90 rounded-3xl bg-white dark:bg-black border border-black dark:border-white"
	>
		<div
			class="w-full flex flex-col md:flex-row items-center md:items-end justify-between pb-3 border-b border-black dark:border-white gap-20 md:gap-120"
		>
			<div class="w-full md:w-max flex justify-center md:justify-start items-center gap-10">
				<Tag tagName="Vse" />
				<Tag tagName="Dogodek" />
				<Tag tagName="Duhovno" />
				<Tag tagName="Novica" />
			</div>
			{#await vseNovice}
				<p class="font-medium text-16 md:text-20">Nalaganje...</p>
			{:then vseNovice}
				<p class="font-medium text-16 md:text-20">
					Najnovejša objava: {FormatDate(vseNovice[0].attributes.Datum)}
				</p>
			{/await}
		</div>
		<div class="h-max grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-30 2xl:gap-60">
			{#await vseNovice}
				<Loader1 />
			{:then data}
				{#each data as novica}
					<SingleNewsCard
						noivcaNaslov={novica.attributes.Naslov}
						novicaLink={novica.id}
						tag={novica.attributes.Tag}
						imgSrc={`${PUBLIC_BASE_STRAPI_URL}${novica.attributes.Media.data[0].attributes.url}`}
						avtor={novica.attributes.Avtor}
						datum={novica.attributes.Datum}
						povzetek={novica.attributes.Vsebina.substring(0, 100)}
						isRecent={true}
					/>
				{/each}
			{:catch error}
				<p>Oops. Nekaj se je zalomilo. <br /> Sporočilo: {error}</p>
			{/await}
		</div>
	</section>
</div>
