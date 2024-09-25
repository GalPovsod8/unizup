<script lang="ts">
	import type { PageData } from './$types';
	import ScrollWidthSection from '$lib/components/ScrollWidthSection.svelte';
	import Aos from '$lib/components/AOS.svelte';
	import MainBtn from '$lib/components/MainBtn.svelte';
	import ActivityCard from '$lib/components/ActivityCard.svelte';
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
	import Loader2 from '$lib/components/Loader2.svelte';
	import { truncateMetaDescription } from '$lib/utils';
	import NoviceImgCarousel from '$lib/components/NoviceImgCarousel.svelte';
	import CtaIsland from '$lib/components/CTAIsland.svelte';

	export let data: PageData;
	let { skupina } = data;
</script>

<svelte:head>
	{#await skupina then data}
		<title>{data.imeSkupine} | Univerzitetna Župnija Maribor</title>
		<meta
			name="description"
			content="{data.imeSkupine} - {truncateMetaDescription(data.kratekOpisSkupine)} "
		/>
	{/await}
</svelte:head>

<Aos>
	<div class="w-full flex flex-col items-center min-h-screen">
		{#await skupina}
			<Loader2 />
		{:then data}
			<section
				class="w-full grid grid-cols-1 xl:grid-cols-5 gap-30 xl:gap-90 py-[150px] pb-90 px-[5%] bg-white dark:bg-black rounded-3xl border border-black dark:border-white"
			>
				<div
					class="w-full col-span-1 md:col-span-3 flex flex-col items-center justify-center gap-30 animate-show"
				>
					<article class="flex flex-col items-center text-center">
						<h1
							class="font-bold font-kufam max-w-[23.75rem] md:max-w-[50rem] break-words text-center animate-fontAnim text-40 md:text-64 uppercase"
						>
							{data.imeSkupine}
						</h1>
						<p class="w-[75%] text-20 md:text-24">
							{data.kratekOpisSkupine}
						</p>
					</article>
					<a
						aria-label="scroll to section"
						href="#first"
						class="relative animate-cBounce top-0 hover:top-1 dark:invert w-max grid place-items-center transition-all ease-in-out duration-150"
					>
						<img src="/Polygon.svg" alt="▼" />
						<img class="absolute w-3/5 top-2" src="/Polygon.svg" alt="▼" />
					</a>
				</div>
				<div class="aos relative col-span-1 md:col-span-2">
					<div
						class="absolute w-full grid grid-cols-2 grid-rows-3 gap-10 md:gap-30 max-h-[350px] xl:max-h-[34.375rem]"
					>
						{#if data.Media.length >= 4}
							<figure
								class="relative row-span-2 group w-full overflow-hidden rounded-3xl border border-black dark:border-white"
							>
								<img
									class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
									src={`${PUBLIC_BASE_STRAPI_URL}${data.Media[0].formats.small?.url}`}
									alt="SkupinaPhoto1"
								/>
							</figure>
							<figure
								class="relative row-span-1 group w-full overflow-hidden rounded-3xl border border-black dark:border-white"
							>
								<img
									class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
									src={`${PUBLIC_BASE_STRAPI_URL}${data.Media[1].formats.small?.url}`}
									alt="SkupinaPhoto2"
								/>
							</figure>
							<figure
								class="relative row-span-2 group w-full overflow-hidden rounded-3xl border border-black dark:border-white"
							>
								<img
									class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
									src={`${PUBLIC_BASE_STRAPI_URL}${data.Media[2].formats.small?.url}`}
									alt="SkupinaPhoto3"
								/>
							</figure>
							<figure
								class="relative row-span-1 group w-full overflow-hidden rounded-3xl border border-black dark:border-white"
							>
								<img
									class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
									src={`${PUBLIC_BASE_STRAPI_URL}${data.Media[3].formats.small?.url}`}
									alt="SkupinaPhoto4"
								/>
							</figure>
						{:else}
							<figure
								class="relative row-span-2 col-span-2 group w-full overflow-hidden rounded-3xl border border-black dark:border-white"
							>
								<img
									class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
									src={`${PUBLIC_BASE_STRAPI_URL}${data.Media[0].formats.small?.url}`}
									alt="SkupinaPhoto4"
								/>
							</figure>
						{/if}
					</div>
				</div>
			</section>
			<ScrollWidthSection
				id={'first'}
				classes={'mt-[23.75rem] xl:mt-[7.5rem] p-90 px-[5%] flex flex-col items-center gap-90 rounded-3xl bg-blue border border-black dark:border-white dark:text-black'}
			>
				<div class="w-full grid grid-cols-1 xl:grid-cols-2 gap-90 place-items-center">
					<div class="w-full flex flex-col gap-30">
						<h2 class="aos font-black text-40 md:text-64 text-center xl:text-left">KDO SMO?</h2>
						<p class="aos text-20 text-justify font-medium">
							{data.nekajOSkupini}
						</p>
						<div class="aos w-full text-center xl:text-left grid grid-cols-2 gap-15">
							<div class="w-full flex flex-col gap-10">
								<h3 class="text-32 font-bold">Kdaj?</h3>
								<p class="text-20 font-medium">{data.kdaj}</p>
							</div>
							<div class="w-full flex flex-col gap-10">
								<h3 class="text-32 font-bold">Zakaj?</h3>
								<p class="text-20 font-medium">{data.zakaj}</p>
							</div>
							<div class="w-full flex flex-col gap-10">
								<h3 class="text-32 font-bold">Kdo?</h3>
								<p class="text-20 font-medium">{data.kdo}</p>
							</div>
							<div class="w-full flex flex-col gap-10">
								<h3 class="text-32 font-bold">Kako?</h3>
								<p class="text-20 font-medium">{data.kako}</p>
							</div>
						</div>
					</div>
					<div class="aos w-full grid grid-cols-2 gap-15">
						<ActivityCard activityName={data.aktivnost1} index={1} hasAll={false} />
						<ActivityCard activityName={data.aktivnost2} index={2} hasAll={false} />
						<ActivityCard activityName={data.aktivnost3} index={3} hasAll={false} />
						<ActivityCard activityName={data.aktivnost4} index={4} hasAll={false} />
					</div>
				</div>
				{#if data.linkDoPrijavnice}
					<MainBtn btnText="PRIDRUŽI SE NAM" btnHref={data.linkDoPrijavnice} textSize="24" />
				{/if}
			</ScrollWidthSection>
			{#if data.Media.length >= 4}
				<ScrollWidthSection
					classes={'mt-[7.5rem] p-90 px-[5%] flex flex-col items-center gap-90 rounded-3xl bg-white dark:bg-black border border-black dark:border-white dark:text-black'}
					><div class="w-full flex flex-col gap-60 min-[1750px]:col-span-3">
						<h2 class="aos font-black text-40 md:text-64 text-center uppercase dark:text-white">
							GALERIJA - {data.imeSkupine}
						</h2>
						<NoviceImgCarousel images={data.Media} />
					</div>
				</ScrollWidthSection>
			{/if}
			<CtaIsland addClasses={'mt-[7.5rem]'} />
		{:catch error}
			<p>Oops. Nekaj se je zalomilo. <br /> Sporočilo: {error.message}</p>
		{/await}
	</div>
</Aos>
