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
	let pageSize: number = 2;
	let totalPages: number;
	let currentPage: number = (Number($page.url.searchParams.get('skip')) || 0) / pageSize;

	function calculateVisiblePages(currentPage: number, totalPages: number): number[] {
		let start = Math.max(0, currentPage - 2);
		let end = Math.min(totalPages - 1, currentPage + 2);
		return Array.from({ length: end - start + 1 }, (_, i) => start + i);
	}

	onMount(() => {
		data.vseNovice.then((resolvedData) => {
			totalNumOfNews = resolvedData.meta.pagination.total;
			totalPages = Math.ceil(totalNumOfNews / pageSize);
		});
	});
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
				{#if currentPage > 2}
					<a
						data-sveltekit-reload
						href={`/unipulz?limit=${pageSize}&skip=0${$page.url.searchParams.has('tag') ? '&tag=' + $page.url.searchParams.get('tag') : ''}`}
						class={`size-10 flex items-center justify-center border border-black dark:border-white text-24 ${currentPage === 0 ? 'bg-red' : 'bg-white'} border border-black dark:border-white`}
						>1</a
					>
				{/if}
				{#each calculateVisiblePages(currentPage, totalPages) as visiblePage}
					<a
						data-sveltekit-reload
						href={`/unipulz?limit=${pageSize}&skip=${pageSize * visiblePage}${$page.url.searchParams.has('tag') ? '&tag=' + $page.url.searchParams.get('tag') : ''}`}
						class={`size-10 flex items-center justify-center border border-black dark:border-white text-24 ${currentPage === visiblePage ? 'bg-red' : 'bg-white'} border border-black dark:border-white`}
						>{visiblePage + 1}</a
					>
				{/each}
				{#if currentPage + 1 < totalPages - 1}
					<span
						class="size-10 flex items-center justify-center border border-black dark:border-white text-24"
						>...</span
					>
				{/if}
				{#if currentPage + 1 !== totalPages}
					<a
						aria-label="increase pagination page"
						data-sveltekit-reload
						href={`/unipulz?limit=${pageSize}&skip=${(currentPage + 1) * pageSize}${$page.url.searchParams.has('tag') ? '&tag=' + $page.url.searchParams.get('tag') : ''}`}
						class="size-10 flex items-center justify-center text-24 border border-black dark:border-white"
						>&rarr;</a
					>
					<a
						data-sveltekit-reload
						href={`/unipulz?limit=${pageSize}&skip=${(totalPages - 1) * pageSize}${$page.url.searchParams.has('tag') ? '&tag=' + $page.url.searchParams.get('tag') : ''}`}
						class={`size-10 flex items-center justify-center border border-black dark:border-white text-24 ${currentPage === totalPages - 1 ? 'bg-red' : 'bg-white'} border border-black dark:border-white`}
						>{totalPages}</a
					>
				{/if}
			{:else}
				{#each Array(totalPages) as _, id}
					<a
						data-sveltekit-reload
						href={`/unipulz?limit=${pageSize}&skip=${pageSize * id}${$page.url.searchParams.has('tag') ? '&tag=' + $page.url.searchParams.get('tag') : ''}`}
						class={`size-10 flex items-center justify-center border border-black dark:border-white text-24 ${currentPage === id ? 'bg-red' : 'bg-white'} border border-black dark:border-white`}
						>{id + 1}</a
					>
				{/each}
			{/if}
		</div>
	</section>
</div>
