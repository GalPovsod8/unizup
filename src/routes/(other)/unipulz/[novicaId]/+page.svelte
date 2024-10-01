<script lang="ts">
	import type { PageData } from './$types';
	import { FormatDate, ShortenTag, truncateMetaDescription } from '$lib/utils';
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
	import SvelteMarkdown from 'svelte-markdown';
	import Link from '$lib/components/Link.svelte';
	import NoviceImgCarousel from '$lib/components/NoviceImgCarousel.svelte';
	import NewsSubscribe from '$lib/components/NewsSubscribe.svelte';
	import ImgPopup from '$lib/components/ImgPopup.svelte';

	export let data: PageData;
	let showModal: boolean = false;
	let showMoreImages: boolean = false;

	$: ostaleNovice = data.drugeNovice;
	$: novica = data.novica;
</script>

<svelte:head>
	{#await novica then data}
		<title>{data.Naslov} | Univerzitetna Župnija Maribor</title>
		<meta name="description" content="{data.Naslov} - {truncateMetaDescription(data.Vsebina)} " />
	{/await}
</svelte:head>

<section
	class="w-full flex flex-col lg:flex-row items-start justify-between gap-60 2xl:gap-90 pt-120 pb-16 px-[5%] bg-white dark:bg-black rounded-3xl border border-black dark:border-white"
>
	<article class="w-full lg:max-w-[57vw] flex flex-col gap-30 animate-show">
		{#await novica}
			<p>Nalaganje novice...</p>
		{:then data}
			<div class="w-full flex flex-col gap-30 md:gap-15">
				<h2
					class="underliner font-bold text-40 text-center md:text-left"
					style="text-decoration-color: {data.Tag == 'Dogodek'
						? '#942B2B'
						: data.Tag == 'Duhovno'
							? '#1E8096'
							: '#75770E'}"
				>
					{data.Naslov}
				</h2>
				<div class="w-full flex items-center justify-between">
					<div class="flex flex-col gap-5">
						<p><b class="font-medium">Avtor: </b>{data.Avtor}</p>
						<p><b class="font-medium">Datum: </b>{FormatDate(data.Datum)}</p>
					</div>
					<a
						class:bg-tagBlue={data.Tag == 'Duhovno'}
						class:bg-redTag={data.Tag == 'Dogodek'}
						class:bg-novicaTagYellow={data.Tag == 'Novica'}
						class="flex items-center font-medium text-white rounded-xl border border-black dark:border-white px-4 py-2 hover:opacity-80 transition-all ease-in-out duration-150"
						href={`/unipulz?tag=${data.Tag}`}
					>
						{data.Tag}
					</a>
				</div>
			</div>
			<div class="markdownStyles">
				<SvelteMarkdown source={data.Vsebina} />
			</div>
			{#if data.Media.length > 1}
				<NoviceImgCarousel images={data.Media} />
				{#if showMoreImages}
					<div class=" max-h-[500px] grid grid-cols-3">
						{#each data.Media as img, id}
							<img
								class=""
								src={`${PUBLIC_BASE_STRAPI_URL}${img.formats?.small.url}`}
								alt={img.alternativeText ?? `slika ${id + 1}`}
							/>
						{/each}
					</div>
				{/if}
				<button
					on:click={() =>
						showMoreImages == false ? (showMoreImages = true) : (showMoreImages = false)}
					>{showMoreImages ? 'Pokaži manj' : 'Pokaži več'}</button
				>
			{:else if data.Media.length == 1}
				<button
					class="group h-60 w-full self-center rounded-3xl overflow-hidden bg-white dark:bg-black border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
					aria-label="show full image"
					on:click={() => (showModal = true)}
				>
					<img
						class="h-full w-full object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
						src={`${PUBLIC_BASE_STRAPI_URL}${data.Media[0].formats.small.url}`}
						alt={data.Media.alternativeText ?? `slika`}
					/>
				</button>
				<ImgPopup
					bind:showModal
					imgSrc={`${PUBLIC_BASE_STRAPI_URL}${data.Media[0].formats.small.url}`}
				/>
			{/if}
			{#if data.YTVideoEmbedIframe != null}
				{@html data.YTVideoEmbedIframe}
			{/if}
		{:catch error}
			<p>Oops. Nekaj se je zalomilo. <br /> Sporočilo: {error.message}</p>
		{/await}
	</article>
	<aside class="sticky top-10 w-full lg:w-[30vw] flex flex-col gap-30 animate-show">
		<div
			class="flex flex-col gap-15 p-30 bg-white dark:bg-black rounded-3xl border border-black dark:border-white drop-shadow-shadow hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
		>
			<h2 class="text-24 font-bold border-b border-black/80 dark:border-white/80 pb-1">
				NAJBOLJ SVEŽE...
			</h2>
			<ul class="flex flex-col gap-15">
				{#await ostaleNovice}
					<p>Nalaganje novic...</p>
				{:then data}
					{#each data as drugaNovica}
						<li>
							<a
								class="w-full flex items-start justify-between gap-30 hover:opacity-80 transition-all ease-in-out duration-150"
								href="/unipulz/{drugaNovica.documentId}"
							>
								<div class="w-[80%] flex flex-col gap-5">
									<h3 class="font-medium whitespace-nowrap overflow-hidden text-ellipsis">
										{drugaNovica.Naslov}
									</h3>
									<span class="text-14 opacity-90"
										>{drugaNovica.Avtor}, {FormatDate(drugaNovica.Datum)}</span
									>
								</div>

								<a
									class:bg-tagBlue={drugaNovica.Tag == 'Duhovno'}
									class:bg-redTag={drugaNovica.Tag == 'Dogodek'}
									class:bg-novicaTagYellow={drugaNovica.Tag == 'Novica'}
									class="flex items-center font-medium text-white rounded-xl border border-black dark:border-white p-2 hover:opacity-80 transition-all ease-in-out duration-150"
									href={`/unipulz?tag=${drugaNovica.Tag}`}
								>
									{ShortenTag(drugaNovica.Tag)}
								</a>
							</a>
						</li>
					{/each}
				{:catch error}
					<p>Oops. Nekaj se je zalomilo. <br /> Sporočilo: {error}</p>
				{/await}
			</ul>
			<Link linkText="Vse novice" linkHref="/unipulz" fontSize={20} />
		</div>
		<NewsSubscribe />
	</aside>
</section>

<style>
	.underliner {
		text-decoration: underline;
		text-decoration-style: solid;
		text-decoration-thickness: 3px;
		word-wrap: break-word;
	}
</style>
