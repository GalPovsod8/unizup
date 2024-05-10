<script lang="ts">
	import type { PageData } from './$types';
	import SingleNewsCard from '$lib/components/SingleNewsCard.svelte';
	import Loader1 from '$lib/components/Loader1.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
	import { FormatDate } from '$lib/utils';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let data: PageData;

	let vseNovice = data.vseNovice;
	let totalNumOfNews: number;
	let pageSize: number = 1;
	let totalPages: number;
	let currentPage: number = (Number($page.url.searchParams.get('skip')) || 0) / pageSize;
	let visiblePages: number[];

	onMount(() => {
		data.vseNovice.then((resolvedData) => {
			totalNumOfNews = resolvedData.meta.pagination.total;
			totalPages = Math.ceil(totalNumOfNews / pageSize);
			visiblePages = calculateVisiblePages(currentPage, totalPages);
		});
	});

	function calculateVisiblePages(currentPage: number, totalPages: number): number[] {
		const visiblePagesCount = 5;
		const halfVisible = Math.floor(visiblePagesCount / 2);
		let startPage = Math.max(currentPage - halfVisible, 0);
		let endPage = Math.min(startPage + visiblePagesCount - 1, totalPages - 1);

		if (endPage - startPage + 1 < visiblePagesCount) {
			startPage = Math.max(endPage - visiblePagesCount + 1, 0);
		}

		return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
	}
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
					{#if currentPage == 0}
						Najnovejša objava: {FormatDate(vseNovice.data[0].attributes.Datum)}
					{:else}
						Stran: {currentPage + 1}
					{/if}
				</p>
			{/await}
		</div>
		<div class="h-max grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-30 2xl:gap-60">
			{#await vseNovice}
				<Loader1 />
			{:then data}
				{#each data.data as novica}
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
				<p>Oops. Nekaj se je zalomilo. <br /> Sporočilo: {error.message}</p>
			{/await}
		</div>
		<div class="flex items-center justify-center">
			{#if totalPages > 5}
				{#each Array(totalPages) as _, id}
					<a
						data-sveltekit-reload
						href="/unipulz?limit={pageSize}&skip={pageSize * id}"
						class={`size-10 flex items-center justify-center border border-black dark:border-white text-24 ${currentPage == id ? 'bg-red' : 'bg-white'}`}
						>{id + 1}</a
					>
				{/each}
			{:else}
				{#each Array(totalPages) as _, id}
					<a
						data-sveltekit-reload
						href="/unipulz?limit={pageSize}&skip={pageSize * id}"
						class={`size-10 flex items-center justify-center border border-black dark:border-white text-24 ${currentPage == id ? 'bg-red' : 'bg-white'}`}
						>{id + 1}</a
					>
				{/each}
			{/if}
		</div>
	</section>
</div>
