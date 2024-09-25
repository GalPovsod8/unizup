<script lang="ts">
	import type { PageData } from './$types';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import CtaIsland from '$lib/components/CTAIsland.svelte';
	import Oznanilo from '$lib/components/Oznanilo.svelte';

	export let data: PageData;

	let oznanila = data.oznanila.data;
	let totalNumOfOznanila: number = data.oznanila.meta.pagination.total;
	let pageSize: number = 9;
	let totalPages: number = Math.ceil(totalNumOfOznanila / pageSize);
	let currentPage: number = Math.floor(
		(Number($page.url.searchParams.get('skip')) || 0) / pageSize
	);

	$: oznanila = data.oznanila.data;
	$: currentPage = Math.floor((Number($page.url.searchParams.get('skip')) || 0) / pageSize);

	function calculateVisiblePages(currentPage: number, totalPages: number): number[] {
		let start = Math.max(0, currentPage - 2);
		let end = Math.min(totalPages - 1, currentPage + 2);
		return Array.from({ length: end - start + 1 }, (_, i) => start + i);
	}

	async function changePage(pageNumber: number) {
		const skip = pageNumber * pageSize;
		const url = new URL(window.location.href);
		url.searchParams.set('limit', pageSize.toString());
		url.searchParams.set('skip', skip.toString());
		await goto(url.toString(), { replaceState: true, noScroll: true });
	}
</script>

<svelte:head>
	<title>Oznanila | Oznanila Univerzitetne Župnije Maribor</title>
	<meta
		name="description"
		content="Oznanila - Ostani na tekočem z Unizup-om! Nikoli ne zamudi najnovejših obvestil, dogodkov in dejavnosti. Spremljaj redne posodobitve."
	/>
</svelte:head>

<div class="w-full min-h-screen flex flex-col items-center">
	<PageTitle
		pageTitle="Oznanila"
		pageDescription="Dobrodošli na Oznanila - Oznanila univerzitetne župnije Maribor. Želimo vam prijetno branje!"
		pageScrollLink="#oznanila"
	/>
	<section
		id="oznanila"
		class="w-full p-90 px-[5%] flex flex-col gap-90 rounded-3xl bg-white dark:bg-black border border-black dark:border-white"
	>
		{#if oznanila.length > 0}
			<div class="h-max grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-30 2xl:gap-60">
				{#each oznanila as oznanilo, i}
					<Oznanilo
						oznaniloImgSrc={`${PUBLIC_BASE_STRAPI_URL}${oznanilo.Media[0].formats.small.url}`}
						oznaniloNaslov={oznanilo.Naslov}
						oznaniloDatum={oznanilo.Datum}
						oznaniloUra={oznanilo.Ura}
						oznaniloLokacija={oznanilo.Kraj}
						oznaniloLink={oznanilo.documentId}
						addClass={i === 2 ? 'col-span-1 md:col-span-2 2xl:col-span-1' : ''}
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
		{:else}
			<p>No data available.</p>
		{/if}
	</section>
	<CtaIsland addClasses="mt-[7.5rem]" />
</div>
