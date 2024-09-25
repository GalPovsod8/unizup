<script lang="ts">
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
	import Aos from '$lib/components/AOS.svelte';
	import CtaIsland from '$lib/components/CTAIsland.svelte';
	import Loader2 from '$lib/components/Loader2.svelte';
	import NoviceImgCarousel from '$lib/components/NoviceImgCarousel.svelte';
	import ScrollWidthSection from '$lib/components/ScrollWidthSection.svelte';
	import { FormatDate, FormatTime, truncateMetaDescription } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
	let { oznanilo } = data;
</script>

<svelte:head>
	{#await oznanilo then data}
		<title>{data.Naslov} | Univerzitetna Župnija Maribor</title>
		<meta name="description" content="{data.Naslov} - {truncateMetaDescription(data.Vsebina)} " />
	{/await}
</svelte:head>

<Aos>
	<div class="w-full overflow-hidden flex flex-col items-center min-h-screen">
		{#await oznanilo}
			<Loader2 />
		{:then oznanilo}
			<section
				class="w-full grid grid-cols-1 xl:grid-cols-5 gap-30 xl:gap-90 py-[150px] pb-90 px-[5%] bg-white dark:bg-black rounded-3xl border border-black dark:border-white"
			>
				<div
					class="w-full col-span-1 md:col-span-3 flex flex-col items-center justify-center gap-30 animate-show"
				>
					<h1
						class="font-bold max-w-full break-words text-center font-kufam animate-fontAnim text-40 md:text-64 xl:text-64 uppercase"
					>
						{oznanilo.Naslov}
					</h1>
					<div class="flex justify-center gap-30 text-center">
						<div class="flex flex-col gap-10">
							<h2 class="aos text-32 font-bold">Kdaj?</h2>
							<p class="text-24 font-medium">
								{FormatDate(oznanilo.Datum)} <br /> ob {FormatTime(oznanilo.Ura)}
							</p>
						</div>
						{#if oznanilo.Kdo != null}
							<div class="flex flex-col gap-10">
								<h2 class="aos text-32 font-bold">Kdo?</h2>
								<p class="text-24 font-medium">{oznanilo.Kdo}</p>
							</div>
						{/if}
					</div>
					{#if oznanilo.Vsebina != null}
						<p class="text-justify text-24">{oznanilo.Vsebina}</p>
					{/if}
				</div>

				<div class="aos relative col-span-1 md:col-span-2">
					{#if oznanilo.Media.length >= 2}
						<div class="flex flex-col gap-30 max-h-[50rem]">
							<figure
								class="aos max-h-[20rem] md:max-h-[33rem] relative group w-full overflow-hidden rounded-3xl border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
							>
								<img
									class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
									src={`${PUBLIC_BASE_STRAPI_URL}${oznanilo.Media[0].formats.medium ? oznanilo.Media[0].formats.medium.url : oznanilo.Media[0].formats.small.url}`}
									alt="oznaniloImg"
								/>
							</figure>
							<figure
								class="aos max-h-[20rem] md:max-h-[33rem] relative group w-full overflow-hidden rounded-3xl border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
							>
								<img
									class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
									src={`${PUBLIC_BASE_STRAPI_URL}${oznanilo.Media[1].formats.medium ? oznanilo.Media[1].formats.medium.url : oznanilo.Media[1].formats.small.url}`}
									alt="oznaniloImg"
								/>
							</figure>
						</div>
					{:else}
						<figure
							class="aos max-h-[20rem] md:max-h-[33rem] relative group w-full overflow-hidden rounded-3xl border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
						>
							<img
								class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
								src={`${PUBLIC_BASE_STRAPI_URL}${oznanilo.Media[0].formats.medium ? oznanilo.Media[0].formats.medium.url : oznanilo.Media[0].formats.small.url}`}
								alt="oznaniloImg"
							/>
						</figure>
					{/if}
				</div>
			</section>
			{#if oznanilo.Media.length >= 2}
				<ScrollWidthSection
					classes={'mt-[7.5rem] p-90 px-[5%] flex flex-col items-center gap-90 rounded-3xl bg-white dark:bg-black border border-black dark:border-white dark:text-black'}
					><div class="w-full flex flex-col gap-60 min-[1750px]:col-span-3">
						<h2 class="aos font-black text-40 md:text-64 text-center uppercase dark:text-white">
							GALERIJA - OZNANILO
						</h2>
						<NoviceImgCarousel images={oznanilo.Media} />
					</div>
				</ScrollWidthSection>
			{/if}

			<CtaIsland addClasses="mt-[7.5rem]" />
		{:catch error}
			<p>Oops. Nekaj se je zalomilo. <br /> Sporočilo: {error.message}</p>
		{/await}
	</div>
</Aos>
