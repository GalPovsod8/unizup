<script lang="ts">
	import type { PageData } from './$types';
	import SingleNewsCard from '$lib/components/SingleNewsCard.svelte';
	import Loader1 from '$lib/components/Loader1.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	export let data: PageData;
	let vseNovice = data.vseNovice;

	//ZA TAG SORTIRANJE
	// <a href="/unipulz/Novica">Novica</a>
	// 		<a
	// 			href="http://localhost:1337/api/novicas?populate=*&sort=Datum:desc&filters[$and][0][Tag][$eq]=Duhovno"
	// 			>Duhovno</a
	// 		>
	// 		<a
	// 			href="http://localhost:1337/api/novicas?populate=*&sort=Datum:desc&filters[$and][0][Tag][$eq]=Dogodek"
	// 			>Dogodek</a
	// 		>
</script>

<svelte:head>
	<title>UniPulz | Novice Univerzitetne Župnije Maribor</title>
	<meta
		name="description"
		content="Ostani na tekočem z Unizup-om! UniPulz novice so tu zato, da ostaneš vedno informiran o najbolj aktualnih zadevah."
	/>
</svelte:head>

<div class="w-full min-h-screen px-[5%]">
	<PageTitle
		pageTitle="UniPulz"
		pageDescription="Dobrodošli na UniPulz - novice univerzitetne župnije Maribor. Želimo vam prijetno branje!"
		pageScrollLink="#unipulz"
	/>
	<section id="unipulz" class=" flex flex-col gap-90 scroll-m-20">
		<div
			class="w-full flex flex-col md:flex-row items-center justify-between pb-1 border-b border-black dark:border-white"
		>
			<div class="flexi items-center gap-30">
				<!-- Naredi komponento z tagam -->
			</div>
			<p class="font-medium text-20">Najnovejša objava: 17.1.2024</p>
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
						imgSrc={`http://localhost:1337${novica.attributes.Media.data[0].attributes.url}`}
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
