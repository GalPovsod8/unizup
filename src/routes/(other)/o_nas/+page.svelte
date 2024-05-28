<script lang="ts">
	import type { PageData } from './$types';
	import Aos from '$lib/components/AOS.svelte';
	import ActivityCard from '$lib/components/ActivityCard.svelte';
	import ONasCarousel from '$lib/components/ONasCarousel.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PersonCard from '$lib/components/PersonCard.svelte';
	import ScrollWidthSection from '$lib/components/ScrollWidthSection.svelte';
	import Loader1 from '$lib/components/Loader1.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import SkupinaCard from '$lib/components/SkupinaCard.svelte';
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
	import Zavetnik from '$lib/components/Zavetnik.svelte';
	import ColorfullSection from '$lib/components/ColorfullSection.svelte';

	export let data: PageData;
	let { aktivnosti, skupine, osebe } = data;
</script>

<Aos>
	<div class="w-full flex flex-col items-center min-h-screen">
		<PageTitle
			pageTitle="O Nas"
			pageDescription="Dobrodošli na O Nas - Preberite o univerzitetni župniji Maribor"
			pageScrollLink="#onas"
		/>
		<section
			id="onas"
			class="aos relative w-full p-90 px-[5%] grid grid-cols-1 xl:grid-cols-2 min-[1750px]:grid-cols-5 gap-90 rounded-3xl bg-white dark:bg-black border border-black dark:border-white"
		>
			<div class="w-full flex flex-col gap-60 min-[1750px]:col-span-3">
				<h2 class="aos font-black text-40 md:text-64 text-center xl:text-left">KDO SMO?</h2>
				<article class="flex flex-col gap-30">
					<p class="aos text-20 text-justify font-medium">
						Univerzitetna župnija Maribor je posebne vrste župnija, saj pokriva področje <b
							class="font-bold text-moreRed">študentske pastorale</b
						>, torej ne gre za teritorialno župnijo, pač pa personalno župnijo. V tem smislu
						usmerjene pastorale v študente pokriva področje celotne nadškofije Maribor. Nahaja se v
						središču mesta na
						<a
							href="https://www.google.com/maps/dir//Slom%C5%A1kov+trg+20,+2000+Maribor/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x476f7799df43109b:0xe7b963531c36d2cc?sa=X&ved=1t:707&ictx=111"
							target="_blank"
							class="font-bold text-moreRed underline">Slomškovem trgu 20</a
						>, poleg mariborske stolnice.
					</p>
					<p class="aos text-20 text-justify font-medium">
						Namen župnije je <b class="font-bold text-moreRed"> združevati</b> katoliške študente,
						ki študirajo v Mariboru oz. na področju mariborske nadškofije ter skupaj z njimi živeti
						<b class="font-bold text-moreRed">krščanske vrednote</b>.
					</p>
					<p class="aos text-20 text-justify font-medium">
						Vsako sredo od oktobra do konca junija se študenti zbiramo pri študentski sv. maši v
						mariborski stolnici ob 19h. Aktivni smo v pevskem zboru Vdih, ki sodeluje pri sv. mašah
						ter pripravlja koncerte. V okviru Univerzitetne župnije Maribor (Unizup) delujejo
						<a href="#skupine" class="font-bold text-moreRed underline">različne skupine</a>, h
						katerim te prisrčno vabimo, da se pridružiš! Organiziramo tudi večere z zanimivi gosti,
						molitvena srečanja, romanja v druge države, duhovne vaje in
						<b class="font-bold text-moreRed">duhovne vikende</b>. Skupaj hodimo na izlete.
						Organiziramo plese in družabne dogodke, poleg tega pa tudi dogodke za nadškofijo
						Maribor: Nikodemovi večeri, Križev pot po ulicah Maribora, Ekumensko srečanje mladih,
						Kulturni dan in še mnogo več. Smo prijatelji, ki si pomagamo med seboj in
						<b class="font-bold text-moreRed">dobra družba</b>, odprta tudi zate, ki si vabljen/a,
						da se nam pridružiš.
					</p>
				</article>
				<div class="flex-1">
					<p
						class="aos h-full w-full p-30 grid place-items-center text-24 font-medium rounded-3xl bg-white dark:bg-black border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
					>
						Smo župnija mladih, študentov in prijateljev, ki nas povezuje ljubezen do Kristusa.
					</p>
				</div>
			</div>
			<div class="w-full flex flex-col gap-60 min-[1750px]:col-span-2">
				<ONasCarousel />
				<div class="aos flex flex-col gap-30 flex-1">
					<h3 class="text-32 text-center md:text-left font-bold">Redne aktivnosti župnije:</h3>
					<div class="grid grid-cols-2 gap-15">
						{#await aktivnosti}
							<Loader1 />
						{:then data}
							{#each data as aktivnost, i}
								<ActivityCard
									activityName={aktivnost.attributes.ime}
									activityDay={aktivnost.attributes.danIzvajanja}
									activityTime={aktivnost.attributes.Ura}
									index={i}
								/>
							{/each}
						{:catch error}
							<p>Oops. Nekaj se je zalomilo. <br /> Sporočilo: {error}</p>
						{/await}
					</div>
				</div>
			</div>
			<Gallery />
		</section>
		<ColorfullSection
			id="skupine"
			addClasses="my-120 mt-[44.00rem] md:mt-[50.5rem]"
			bgColor="blue"
			title="Skupine na unizup"
			description={'Unizup je prostor za VSE. Poleg rednih srečanj, se lahko včlaniš še v katero izmed skupin na Unizupu in postaneš del še večje zgodbe. Ne odlašaj, spleti nova spoznanstva in prijateljstva!'}
		>
			<div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-90">
				{#await skupine}
					<Loader1 />
				{:then data}
					{#each data as skupina}
						<SkupinaCard
							skupinaLink={skupina.id}
							skupinaName={skupina.attributes.imeSkupine}
							skupinaImgSrc={`${PUBLIC_BASE_STRAPI_URL}${skupina.attributes.Media.data[0].attributes.formats.medium.url}`}
						/>
					{/each}
				{:catch error}
					<p>Oops. Nekaj se je zalomilo. <br /> Sporočilo: {error.message}</p>
				{/await}
			</div>
		</ColorfullSection>
		<Zavetnik />
		<ColorfullSection
			title="Naši dragi"
			description="Oglej si kdo skrbi, da pri nas vse dobro teče in je za vse poskrbljeno :)"
			addClasses="my-120"
			bgColor="yellow"
		>
			{#await osebe}
				<Loader1 />
			{:then data}
				<div class="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-90">
					{#each data as oseba}
						<PersonCard
							ime={oseba.attributes.Ime}
							funkcija={oseba.attributes.funkcija}
							imgSrc={`${PUBLIC_BASE_STRAPI_URL}${oseba.attributes.slikaOsebe.data.attributes.formats.medium.url}`}
						/>
					{/each}
				</div>
			{:catch error}
				<p>Oops. Nekaj se je zalomilo. <br /> Sporočilo: {error}</p>
			{/await}
		</ColorfullSection>
		<ScrollWidthSection
			classes={'mb-120 p-90 px-[5%] grid grid-cols-1 xl:grid-cols-5 gap-90 rounded-3xl bg-white dark:bg-black dark:text-white border border-black dark:border-white dark:text-black'}
		>
			<article class="col-span-5 xl:col-span-2 flex flex-col gap-50">
				<div class="flex flex-col gap-15">
					<h4 class="aos text-32 font-bold">Kako do nas?</h4>
					<p class="aos text-20 text-justify font-medium">
						Univerzitetna župnija Maribor se nahaja v središču mesta na <a
							href="https://www.google.com/maps/dir//Slom%C5%A1kov+trg+20,+2000+Maribor/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x476f7799df43109b:0xe7b963531c36d2cc?sa=X&ved=1t:707&ictx=111"
							target="_blank"
							class="font-bold text-moreRed underline">Slomškovem trgu 20</a
						>, poleg mariborske stolnice. Naši prostori se nahajajo ob stolnici, na vrhu stavbe
						zraven študentskega doma.
					</p>
				</div>
				<div class="flex flex-col gap-15">
					<h4 class="aos text-32 font-bold">Dobrodošel v naše prostore</h4>
					<p class="aos text-20 text-justify font-medium">
						Naši prostori se nahajajo ob Stolnici, v zgornjih prostorih Študentskega doma. V njih
						si/ste dobrodošel/i vsi <span class="font-bold"
							>v torekih od 9.00 do 13.00 ure od 15.00 naprej, v sredah</span
						> ter ostale dni po dogovoru. Lepo vabljeni!
					</p>
				</div>
				<div class="flex flex-col gap-15">
					<h4 class="aos text-32 font-bold">Unizup po spletu</h4>
					<p class="aos text-20 text-justify font-medium">
						Sledi nam tudi na facebooku in instagramu, ter nikoli ne zamudi novih objav in ostani na
						tekočem z nami!
					</p>
					<div class="aos flex items-center gap-15">
						<a
							class="hover:opacity-80 dark:invert transition-all ease-in-out duration-150"
							href="/https://www.instagram.com/unizup/"
							><img class="h-12" src="/fbIcon.svg" alt="Fb" /></a
						>
						<a
							class="hover:opacity-80 dark:invert transition-all ease-in-out duration-150"
							href="https://www.facebook.com/univerzitetnazupnijamaribor"
							><img class="h-12" src="/igIcon.svg" alt="Ig" /></a
						>
					</div>
				</div>
			</article>
			<iframe
				class="aos col-span-5 xl:col-span-3 rounded-3xl h-[31.25rem] xl:h-full border border-black dark:borde-white drop-shadow-shadow hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
				title="googleMaps"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2743.392497976708!2d15.643148876168466!3d46.559703071113105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f7799df43109b%3A0xe7b963531c36d2cc!2sSlom%C5%A1kov%20trg%2020%2C%202000%20Maribor!5e0!3m2!1sen!2ssi!4v1713478045758!5m2!1sen!2ssi"
				width="100%"
				height="500"
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</ScrollWidthSection>
	</div>
</Aos>
