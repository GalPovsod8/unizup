<script lang="ts">
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
	import Aos from '$lib/components/AOS.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Link from '$lib/components/Link.svelte';
	import Loader1 from '$lib/components/Loader1.svelte';
	import MainBtn from '$lib/components/MainBtn.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import ONasBox from '$lib/components/ONasBox.svelte';
	import Oznanilo from '$lib/components/Oznanilo.svelte';
	import SingleNewsCard from '$lib/components/SingleNewsCard.svelte';
	import type { PageData } from './$types';

	function ToggleTheme() {
		if (localStorage.theme === 'dark') {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
		} else {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
		}
	}

	export let data: PageData;
	let { novice, oznanila } = data;
</script>

<svelte:head>
	<title>Študentska pastorala - Univerzitetna župnija Maribor</title>
</svelte:head>

<Aos>
	<div class="flex flex-col gap-120 px-[5%]">
		<div>
			<section
				class="h-screen md:h-[75vh] w-full rounded-3xl grid place-items-center pt-8 mb-8 animate-show"
			>
				<header class="grid place-items-center gap-50">
					<hgroup class="grid place-items-center font-bold gap-30 text-center">
						<img class="h-20 w-20 rounded-full -mb-7" src="/unizupLogo.png" alt="UZ" />
						<h1 class="-mb-5 text-96 font-kufam animate-fontAnim">UNIZUP</h1>
						<h2 class="-mb-4 text-40 font-kufam animate-fontAnim">UNIVERZITETNA ŽUPNIJA MARIBOR</h2>
					</hgroup>
					<Nav />
					<button
						on:click={ToggleTheme}
						aria-label="Dark/light mode toggle"
						class="h-6 w-6 -mt-3 rounded-full bg-black dark:bg-white hover:opacity-80 ease-in-out duration-150"
					></button>
				</header>
				<p class="text-20 text-center">
					Študentska maša vsako sredo ob <b class="font-bold text-moreRed">19. uri</b> v
					<b class="font-bold text-moreRed">mariborski stolnici</b>.
				</p>
			</section>
			<section
				class="w-full p-30 lg:p-60 flex flex-col items-center gap-15 lg:gap-30 rounded-3xl border bg-white dark:bg-black"
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
			</section>
		</div>

		<section class="flex flex-col items-center gap-90">
			<div class="w-full flex flex-col items-center gap-30">
				<h2 class="aos font-black text-64 text-center">KDO SMO?</h2>

				<p class="aos sm:w-[70%] w-9/12 text-32 text-center font-medium">
					Univerzitetna župnija Maribor je posebne vrste župnija, saj pokriva področje študentske
					pastorale, torej ne gre za teritorialno župnijo, pač pa personalno župnijo. V tem smislu
					usmerjene pastorale v študente pokriva področje celotne nadškofije Maribor. Nahaja se v
					središču mesta na Slomškovem trgu 20, poleg mariborske stolnice.
				</p>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-30 2xl:gap-60">
				<ONasBox
					index={0}
					oNasBoxNaslov="Študentje"
					oNasBoxBesedilo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
					addClass="aos"
				/>
				<ONasBox
					index={1}
					oNasBoxNaslov="Na Poti"
					oNasBoxBesedilo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
					addClass="aos"
				/>
				<ONasBox
					index={2}
					oNasBoxNaslov="Prijateljstva"
					oNasBoxBesedilo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
					addClass="col-span-1 md:col-span-2 2xl:col-span-1 aos"
				/>
			</div>
			<Gallery />
			<MainBtn btnText="Več o nas" btnHref="/onas" />
		</section>
		<section
			class="p-30 lg:p-60 mx-[-5.58%] flex flex-col items-center gap-30 md:gap-60 rounded-3xl border bg-white dark:bg-black"
		>
			<h2 class="font-black text-64 text-center">UNIPULZ</h2>
			<div
				class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 grid-flow-row auto-rows-max gap-30 2xl:gap-60"
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
								imgSrc={`${PUBLIC_BASE_STRAPI_URL}${novica.attributes.Media.data[0].attributes.url}`}
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
								imgSrc={`${PUBLIC_BASE_STRAPI_URL}${novica.attributes.Media.data[0].attributes.url}`}
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
		</section>
	</div>
</Aos>
