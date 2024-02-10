<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';
	import Link from '$lib/components/Link.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import ONasBox from '$lib/components/ONasBox.svelte';
	import Oznanilo from '$lib/components/Oznanilo.svelte';
	import SingleNewsCard from '$lib/components/SingleNewsCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	function ToggleTheme() {
		if (localStorage.theme === 'dark') {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
		} else {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
		}
	}
</script>

<div>
	<section class="h-screen md:h-[75vh] w-full rounded-3xl grid place-items-center pt-8 mb-8">
		<header class="grid place-items-center gap-50">
			<hgroup class="grid place-items-center font-bold gap-30 text-center">
				<img class="h-20 w-20 rounded-full -mb-7" src="/unizupLogo.png" alt="UZ" />
				<h1 class="text-96 -mb-5">UNIZUP</h1>
				<h2 class="text-40">UNIVERZITETNA ŽUPNIJA MARIBOR</h2>
			</hgroup>
			<!-- Na mobile, sam skrijes tti nav, pa renderas onga ko je na vsakmo pago -->
			<Nav />
			<button
				on:click={ToggleTheme}
				aria-label="Dark/light mode toggle"
				class="h-6 w-6 -mt-3 rounded-full bg-black dark:bg-white"
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
			<Oznanilo
				oznaniloImgHref="http://unizup.si/wp-content/uploads/2024/02/5-2_vecer_za_sport-819x1024.jpg"
				oznaniloNaslov="Večer za šport"
				oznaniloDatum="29. 1. 2024"
				oznaniloUra="20.45"
				oznaniloLokacija="Vrbanska cesta 30, zavod Antona Martina Slomška"
				oznaniloLink="vecer-za-sport"
			/>
			<Oznanilo
				oznaniloImgHref="http://unizup.si/wp-content/uploads/2023/11/image-9-768x401.jpg"
				oznaniloNaslov="Sv. Maša"
				oznaniloDatum="Vsaka sreda"
				oznaniloUra="19.00"
				oznaniloLokacija="Mariborska stolnica"
				oznaniloLink="sv-masa"
			/>
			<Oznanilo
				oznaniloImgHref="http://unizup.si/wp-content/uploads/2024/01/a0109f32-ca86-4ce7-9983-c234ec92c88e-768x402.jpg"
				oznaniloNaslov="Molitev za mir"
				oznaniloDatum="31. 1. 2024"
				oznaniloUra="18.40"
				oznaniloLokacija="Mariborska stolnica"
				oznaniloLink="molitev-za-mir"
				addClass="col-span-1 md:col-span-2 2xl:col-span-1"
			/>
		</div>
		<Link linkHref="/Oznanila" linkText="Vsa oznanila" />
	</section>
</div>

<section class="flex flex-col items-center gap-60">
	<h2 class="font-black text-64 text-center">KDO SMO?</h2>
	<p class="sm:w-[70%] w-9/12 text-32 text-center font-medium">
		Univerzitetna župnija Maribor je posebne vrste župnija, saj pokriva področje študentske
		pastorale, torej ne gre za teritorialno župnijo, pač pa personalno župnijo. V tem smislu
		usmerjene pastorale v študente pokriva področje celotne nadškofije Maribor. Nahaja se v središču
		mesta na Slomškovem trgu 20, poleg mariborske stolnice.
	</p>
	<div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-30 2xl:gap-60">
		<ONasBox
			index={0}
			oNasBoxNaslov="Študentje"
			oNasBoxBesedilo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
		/>
		<ONasBox
			index={1}
			oNasBoxNaslov="Na Poti"
			oNasBoxBesedilo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
		/>
		<ONasBox
			index={2}
			oNasBoxNaslov="Prijateljstva"
			oNasBoxBesedilo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
			addClass="col-span-1 md:col-span-2 2xl:col-span-1"
		/>
	</div>
	<Gallery />
</section>
<section
	class="p-30 lg:p-60 mx-[-5.58%] flex flex-col items-center gap-30 md:gap-60 rounded-3xl border bg-white dark:bg-black"
>
	<h2 class="font-black text-64 text-center">UNIPULZ</h2>
	<div
		class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 grid-flow-row auto-rows-max gap-30 2xl:gap-60"
	>
		{#if data && data.novice}
			{#each data.novice.slice(0, 6) as novica, i}
				{#if i < 3}
					<SingleNewsCard
						noivcaNaslov={novica.noivcaNaslov}
						novicaLink={novica.novicaLink}
						tag={novica.tag}
						imgSrc={novica.imgSrc}
						avtor={novica.avtor}
						datum={novica.datum}
						povzetek={novica.besedilo}
						isRecent={true}
						addClass={i === 2 ? 'col-span-1 md:col-span-2 2xl:col-span-1' : ''}
					/>
				{:else}
					<SingleNewsCard
						noivcaNaslov={novica.noivcaNaslov}
						novicaLink={novica.novicaLink}
						tag={novica.tag}
						imgSrc={novica.imgSrc}
						avtor={novica.avtor}
						datum={novica.datum}
						povzetek={novica.besedilo}
						isRecent={false}
						addClass={i === 5 ? 'col-span-1 md:col-span-2 2xl:col-span-1' : ''}
					/>
				{/if}
			{/each}
		{:else}
			<p>Error loading news</p>
		{/if}
	</div>
	<Link linkHref="/Novice" linkText="Vse novice" />
</section>
