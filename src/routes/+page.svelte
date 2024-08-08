<script lang="ts">
	import { browser } from '$app/environment';
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
	import Aos from '$lib/components/AOS.svelte';
	import CtaIsland from '$lib/components/CTAIsland.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Link from '$lib/components/Link.svelte';
	import Loader1 from '$lib/components/Loader1.svelte';
	import MainBtn from '$lib/components/MainBtn.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import ONasBox from '$lib/components/ONasBox.svelte';
	import Oznanilo from '$lib/components/Oznanilo.svelte';
	import ScrollWidthSection from '$lib/components/ScrollWidthSection.svelte';
	import SingleNewsCard from '$lib/components/SingleNewsCard.svelte';
	import type { PageData } from './$types';

	let darkMode = true;

	function ToggleTheme() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}

	export let data: PageData;
	let { novice, oznanila } = data;
</script>

<svelte:head>
	<title>Študentska pastorala - Univerzitetna župnija Maribor</title>
	<meta
		name="description"
		content="Univerzitetna župnija Maribor - Študenstka župnija, ki povezuje študente v Katoliški veri. Duhovna podpora, Študentska maša in druženje."
	/>
</svelte:head>

<Aos>
	<div class="flex flex-col gap-120 w-full items-center min-h-screen">
		<div class="w-full flex flex-col items-center">
			<section
				class="h-[100dvh] pb-10 md:pb-0 md:h-[75vh] px-[5%] md:px-0 w-full rounded-3xl grid place-items-center pt-8 mb-8 animate-show"
			>
				<header class="grid place-items-center gap-50">
					<hgroup class="grid w-4/5 md:w-full place-items-center font-bold gap-30 text-center">
						<img class="h-20 w-20 rounded-full -mb-7" src="/unizupLogo.png" alt="Logo unizup" />
						<h1 class="-mb-5 text-64 md:text-96 font-kufam animate-fontAnim">UNIZUP</h1>
						<h2 class="-mb-4 text-32 md:text-40 font-kufam animate-fontAnim">
							UNIVERZITETNA ŽUPNIJA MARIBOR
						</h2>
					</hgroup>
					<Nav />
					<button
						on:click={ToggleTheme}
						aria-label="Dark/light mode toggle"
						class="h-6 w-6 -mt-3 rounded-full bg-black dark:bg-white hover:opacity-80 ease-in-out duration-150"
					></button>
				</header>
				<p class="text-20 text-center">
					Študentska maša vsako sredo ob <b class="font-bold text-moreRed dark:text-moreRedDark"
						>19. uri</b
					>
					v
					<b class="font-bold text-moreRed dark:text-moreRedDark">mariborski stolnici</b>.
				</p>
			</section>
			<ScrollWidthSection
				classes={'w-full p-30 lg:p-60 flex flex-col items-center gap-15 lg:gap-30 rounded-3xl border bg-white dark:bg-black'}
			>
				<div class="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-30 2xl:gap-60">
					{#await oznanila}
						<Loader1 />
					{:then data}
						{#each data as oznanilo, i}
							<Oznanilo
								oznaniloImgSrc={`${PUBLIC_BASE_STRAPI_URL}${oznanilo.attributes.Media.data[0].attributes.formats.small.url}`}
								oznaniloNaslov={oznanilo.attributes.Naslov}
								oznaniloDatum={oznanilo.attributes.Datum}
								oznaniloUra={oznanilo.attributes.Ura}
								oznaniloLokacija={oznanilo.attributes.Kraj}
								oznaniloLink={oznanilo.id}
								addClass={i === 2 ? 'col-span-1 md:col-span-2 2xl:col-span-1' : ''}
							/>
						{/each}
					{:catch error}
						<p>Oops. Nekaj se je zalomilo. <br /> Sporočilo: {error}</p>
					{/await}
				</div>
				<Link linkHref="/oznanila" linkText="Vsa oznanila" />
			</ScrollWidthSection>
		</div>
		<ScrollWidthSection
			classes={'relative flex flex-col gap-90 p-90 px-[5%] rounded-3xl bg-blue dark:bg-black dark:text-white border border-black dark:border-white dark:text-black'}
		>
			<div class="w-full flex flex-col items-center gap-30">
				<h2 class="aos font-black text-64 text-center">KDO SMO?</h2>

				<p class="aos sm:w-[70%] w-9/12 text-32 text-center font-medium">
					Univerzitetna župnija Maribor je posebne vrste župnija, saj pokriva področje <b
						class="font-bold text-moreRed dark:text-moreRedDark">študentske pastorale</b
					>, torej ne gre za teritorialno župnijo, pač pa personalno župnijo. V tem smislu usmerjene
					pastorale v študente pokriva področje celotne nadškofije Maribor. Nahaja se v središču
					mesta na
					<a
						href="https://www.google.com/maps/dir//Slom%C5%A1kov+trg+20,+2000+Maribor/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x476f7799df43109b:0xe7b963531c36d2cc?sa=X&ved=1t:707&ictx=111"
						target="_blank"
						class="font-bold text-moreRed dark:text-moreRedDark underline">Slomškovem trgu 20</a
					>, poleg mariborske stolnice.
				</p>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-30 2xl:gap-60">
				<ONasBox
					index={0}
					oNasBoxNaslov="Študentje"
					oNasBoxBesedilo="Smo študentje združeni v skupni ljubezeni do Jezusa Kristusa. Poleg vseh obveznosti se zelo radi družimo na Unizupu."
					addClass="aos dark:text-black"
				/>
				<ONasBox
					index={1}
					oNasBoxNaslov="Na Poti"
					oNasBoxBesedilo="Smo na poti za Kristusom, vsak dan bolj in v tem se nenehno podpiramo. Naša pot je skupna pot, ki jo nenehno gradimo in krepimo."
					addClass="aos dark:text-black"
				/>
				<ONasBox
					index={2}
					oNasBoxNaslov="Prijateljstva"
					oNasBoxBesedilo="Na Unizupu smo tudi dobri prijatelji in ne samo občasni znanci. Gradimo globje in trdne odnose in se v življenju podpiramo."
					addClass="col-span-1 md:col-span-2 2xl:col-span-1 aos dark:text-black"
				/>
			</div>
			<Gallery />
			<MainBtn
				addClasses={'absolute -bottom-[48.125rem] xl:-bottom-[50.875rem] self-center'}
				btnText="Več o nas"
				btnHref="/o_nas"
			/>
		</ScrollWidthSection>
		<ScrollWidthSection
			classes={'mt-[47.125rem] md:mt-[800px] p-30 lg:p-60 flex flex-col items-center gap-30 md:gap-60 rounded-3xl border bg-white dark:bg-black'}
		>
			<h2 class="font-black text-64 text-center">UNIPULZ</h2>
			<div
				class="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 grid-flow-row auto-rows-max gap-30 2xl:gap-60"
			>
				{#await novice}
					<Loader1 />
				{:then data}
					{#each data as novica, i}
						{#if i < 3}
							<SingleNewsCard
								noivcaNaslov={novica.attributes.Naslov}
								novicaLink={novica.id}
								tag={novica.attributes.Tag}
								imgSrc={`${PUBLIC_BASE_STRAPI_URL}${novica.attributes.Media.data[0].attributes.formats.small.url}`}
								avtor={novica.attributes.Avtor}
								datum={novica.attributes.Datum}
								povzetek={novica.attributes.Vsebina.substring(0, 100)}
								isRecent={true}
								addClass={i === 2 ? 'col-span-1 md:col-span-2 2xl:col-span-1' : ''}
							/>
						{:else}
							<SingleNewsCard
								noivcaNaslov={novica.attributes.Naslov}
								novicaLink={novica.id}
								tag={novica.attributes.Tag}
								imgSrc={`${PUBLIC_BASE_STRAPI_URL}${novica.attributes.Media.data[0].attributes.formats.small.url}`}
								avtor={novica.attributes.Avtor}
								datum={novica.attributes.Datum}
								povzetek={novica.attributes.Vsebina.substring(0, 100)}
								isRecent={false}
								addClass={i === 5 ? 'col-span-1 md:col-span-2 2xl:col-span-1' : ''}
							/>
						{/if}
					{/each}
				{:catch error}
					<p>Oops. Nekaj se je zalomilo. <br /> Sporočilo: {error}</p>
				{/await}
			</div>
			<Link linkHref="/unipulz" linkText="Vse novice" />
		</ScrollWidthSection>
		<CtaIsland />
	</div>
</Aos>
