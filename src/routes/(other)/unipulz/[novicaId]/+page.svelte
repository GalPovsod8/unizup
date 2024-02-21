<script lang="ts">
	import type { PageData } from './$types';
	import { FormatDate, ShortenTag } from '$lib/utils';
	import SvelteMarkdown from 'svelte-markdown';
	import Link from '$lib/components/Link.svelte';
	import NoviceImgCarousel from '$lib/components/NoviceImgCarousel.svelte';
	import MainBtn from '$lib/components/MainBtn.svelte';
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
	import ImgPopup from '$lib/components/ImgPopup.svelte';

	export let data: PageData;
	let { novica, drugeNovice } = data;
	let showModal: boolean = false;
</script>

<svelte:head>
	<!-- PODATKI O NOVICI isto ne pozabit pr oznanilah!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
	<!-- <title>UniPulz | {novica.attributes.Naslov}</title>
	<meta
		name="description"
		content="Ostani na tekočem z Unizup-om! UniPulz novice so tu zato, da ostaneš vedno informiran o najbolj aktualnih zadevah."
	/> -->
</svelte:head>

<section
	class="w-full flex flex-col lg:flex-row items-start justify-between gap-60 2xl:gap-90 pt-120 pb-16 px-[5%] bg-white dark:bg-black rounded-3xl border border-black"
>
	<!-- Breadcrumbi grejo nad article -->
	<article class="w-full lg:w-[70vw] flex flex-col gap-30">
		{#await novica}
			<p>Nalaganje novice...</p>
		{:then data}
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
			<div class="markdownStyles flex flex-col gap-15 text-20 mb-4">
				<SvelteMarkdown source={data.attributes.Vsebina} />
			</div>
			{#if data.attributes.Media.data.length > 1}
				<NoviceImgCarousel images={data.attributes.Media.data} />
			{:else}
				<button
					class="group h-60 w-full self-center rounded-3xl overflow-hidden bg-white dark:bg-black border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
					aria-label="show full image"
					on:click={() => (showModal = true)}
				>
					<img
						class="h-full w-full object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
						src={`${PUBLIC_BASE_STRAPI_URL}${data.attributes.Media.data[0].attributes.url}`}
						alt="slika"
					/>
				</button>
				<ImgPopup
					bind:showModal
					imgSrc={`${PUBLIC_BASE_STRAPI_URL}${data.attributes.Media.data[0].attributes.url}`}
				/>
			{/if}
		{:catch error}
			<p>Oops. Nekaj se je zalomilo. <br /> Sporočilo: {error}</p>
		{/await}
	</article>
	<aside class="sticky top-10 w-full lg:w-[30vw] flex flex-col gap-30">
		<div
			class="flex flex-col gap-15 p-30 bg-white dark:bg-black rounded-3xl border border-black dark:border-white drop-shadow-shadow hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
		>
			<h2 class="text-24 font-bold border-b border-black/80 dark:border-white/80 pb-1">
				NAJBOLJ SVEŽE...
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
									<h3 class="font-medium whitespace-nowrap overflow-hidden text-ellipsis">
										{drugaNovica.attributes.Naslov}
									</h3>
									<span class="text-14 opacity-90"
										>{drugaNovica.attributes.Avtor}, {FormatDate(
											drugaNovica.attributes.Datum
										)}</span
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
		</div>
		<form
			class="p-30 flex flex-col gap-30 bg-white dark:bg-black rounded-3xl border border-black dark:border-white drop-shadow-shadow hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
			action="/"
		>
			<div class="flex flex-col gap-10">
				<h3 class="text-24 font-bold">OSTANI NA TEKOČEM</h3>
				<p class="text-20 text-justify">
					Izpolnji obrazec in nikoli ne zamudi UniPulz novičk in oznanil!
				</p>
			</div>
			<label class="text-20 font font-medium flex flex-col gap-10" for="email"
				>Email:
				<input
					class="font-normal p-3 rounded-xl border dark:bg-black border-black dark:border-white"
					name="email"
					type="email"
				/>
			</label>
			<MainBtn
				btnHref="/"
				btnText="NAROČI SE"
				textSize={'24'}
				isDarkBgVariant={true}
				hasMaxWidth={false}
			/>
		</form>
	</aside>
</section>

<style>
	.underliner {
		text-decoration: underline;
		text-decoration-style: solid;
		text-decoration-thickness: 3px;
	}
</style>
