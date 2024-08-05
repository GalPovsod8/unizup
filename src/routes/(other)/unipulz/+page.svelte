<script lang="ts">
	import type { PageData } from './$types';
	import SingleNewsCard from '$lib/components/SingleNewsCard.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
	import { FormatDate } from '$lib/utils';
	import { page } from '$app/stores';
	import CtaIsland from '$lib/components/CTAIsland.svelte';
	import { goto } from '$app/navigation';

	export let data: PageData;

	$: totalNumOfNoivce = data.vseNovice.meta.pagination.total;
	let pageSize: number = 9;
	$: totalPages = Math.ceil(totalNumOfNoivce / pageSize);
	let currentPage: number = Math.floor(
		(Number($page.url.searchParams.get('skip')) || 0) / pageSize
	);

	$: novice = data.vseNovice;
	$: currentPage = Math.floor((Number($page.url.searchParams.get('skip')) || 0) / pageSize);

	$: calculateVisiblePages = (currentPage: number, totalPages: number): number[] => {
		let start = Math.max(0, currentPage - 2);
		let end = Math.min(totalPages - 1, currentPage + 2);
		return Array.from({ length: end - start + 1 }, (_, i) => start + i);
	};

	async function changePage(pageNumber: number) {
		const skip = pageNumber * pageSize;
		const url = new URL(window.location.href);
		url.searchParams.set('limit', pageSize.toString());
		url.searchParams.set('skip', skip.toString());
		await goto(url.toString(), { replaceState: true, noScroll: true });
	}
</script>

<svelte:head>
	<title>UniPulz | Novice Univerzitetne Župnije Maribor</title>
	<meta
		name="description"
		content="UniPulz - Novice Univerzitetne župnije Maribor. Spremljaj najnovejše dogodke, obvestila in novice, da boš vedno na tekočem."
	/>
</svelte:head>

<div class="w-full min-h-screen flex flex-col items-center">
	<PageTitle
		pageTitle="UniPulz"
		pageDescription="Dobrodošli na UniPulz - novice univerzitetne župnije Maribor. Želimo vam prijetno branje!"
		pageScrollLink="#unipulz"
	/>
	<section
		id="unipulz"
		class=" w-full p-90 px-[5%] flex flex-col gap-90 rounded-3xl bg-white dark:bg-black border border-black dark:border-white"
	>
		<div
			class=" w-full flex flex-col md:flex-row items-center md:items-end justify-between pb-3 border-b border-black dark:border-white gap-20 md:gap-120"
		>
			<div class="w-full md:w-max flex justify-center md:justify-start items-center gap-10">
				<Tag tagName="Vse" />
				<Tag tagName="Dogodek" />
				<Tag tagName="Duhovno" />
				<Tag tagName="Novica" />
			</div>
			<p class="font-medium text-16 md:text-20">
				{#if currentPage == 0}
					Najnovejša objava: {FormatDate(novice.data[0].attributes.Datum)}
				{:else}
					Stran: {currentPage + 1}
				{/if}
			</p>
		</div>
		<div class="aos h-max grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-30 2xl:gap-60">
			{#each novice.data as novica}
				<SingleNewsCard
					noivcaNaslov={novica.attributes.Naslov}
					novicaLink={novica.id}
					tag={novica.attributes.Tag}
					imgSrc={`${PUBLIC_BASE_STRAPI_URL}${novica.attributes.Media.data[0].attributes.formats.medium.url}`}
					avtor={novica.attributes.Avtor}
					datum={novica.attributes.Datum}
					povzetek={novica.attributes.Vsebina.substring(0, 100)}
					isRecent={true}
				/>
			{/each}
		</div>
		<div
			class="w-max flex items-center justify-center self-center rounded-3xl border border-black dark:border-white overflow-hidden"
		>
			{#if totalPages > 5}
				{#if currentPage > 2}
					<button
						on:click={() => changePage(0)}
						class={`size-10 flex items-center justify-center border border-black dark:border-white text-24 ${currentPage === 0 ? 'bg-red dark:text-black' : 'bg-white dark:bg-black'}`}
						>1</button
					>
				{/if}
				{#each calculateVisiblePages(currentPage, totalPages) as visiblePage}
					<button
						on:click={() => changePage(visiblePage)}
						class={`size-10 flex items-center justify-center border border-black dark:border-white text-24 ${currentPage === visiblePage ? 'bg-red dark:text-black' : 'bg-white dark:bg-black'}`}
						>{visiblePage + 1}</button
					>
				{/each}
				{#if currentPage + 1 < totalPages - 1}
					<span
						class="size-10 flex items-center justify-center border border-black dark:border-white text-24"
						>...</span
					>
				{/if}
				{#if currentPage + 1 !== totalPages}
					<button
						on:click={() => changePage(currentPage + 1)}
						aria-label="increase pagination page"
						class="size-10 flex items-center justify-center text-24 border border-black dark:border-white"
						>&rarr;</button
					>
					<button
						on:click={() => changePage(totalPages - 1)}
						class={`size-10 flex items-center justify-center border border-black dark:border-white text-24 ${currentPage === totalPages - 1 ? 'bg-red dark:text-black' : 'bg-white dark:bg-black'}`}
						>{totalPages}</button
					>
				{/if}
			{:else}
				{#each Array(totalPages) as _, id}
					<button
						on:click={() => changePage(id)}
						class={`size-10 flex items-center justify-center border border-black dark:border-white text-24 ${currentPage === id ? 'bg-red dark:text-black' : 'bg-white dark:bg-black'}`}
						>{id + 1}</button
					>
				{/each}
			{/if}
		</div>
	</section>
	<CtaIsland addClasses="mt-[7.5rem] " />
</div>
