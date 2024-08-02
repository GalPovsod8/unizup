<script lang="ts">
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
	import Aos from '$lib/components/AOS.svelte';
	import CtaIsland from '$lib/components/CTAIsland.svelte';
	import ColorfullSection from '$lib/components/ColorfullSection.svelte';
	import DuhovnaRastCard from '$lib/components/DuhovnaRastCard.svelte';
	import Loader1 from '$lib/components/Loader1.svelte';
	import MainBtn from '$lib/components/MainBtn.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Povezave from '$lib/components/Povezave.svelte';
	import Zavetnik from '$lib/components/Zavetnik.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let { koristnePovezave, duhovniClanki } = data;
</script>

<svelte:head>
	<title>Duhovno | Odrini globje in širše z Unizup</title>
	<meta
		name="description"
		content="Duhovno - Odrini na globoko in odkrij pot resnične svobode, veselja in ljubezni. Pridruži se duhovnim aktivnostim, ki te povežejo z Bogom."
	/>
</svelte:head>

<Aos>
	<div class="w-full flex flex-col items-center min-h-screen">
		<PageTitle
			pageTitle="Duhovno"
			pageDescription="Dobrodošli na Duhovno - Odrini na globoko, stopi na pot resnične svobode, veselja ljubezni, ki jo ima Bog zate!"
			pageScrollLink="#duhovno"
		/>
		<section
			id="duhovno"
			class="aos relative w-full p-90 px-[5%] grid grid-cols-1 xl:grid-cols-2 min-[1750px]:grid-cols-5 gap-90 rounded-3xl bg-white dark:bg-black border border-black dark:border-white"
		>
			<div class="w-full flex flex-col gap-60 min-[1750px]:col-span-3">
				<h2 class="aos font-black text-40 md:text-64 text-center xl:text-left">ODRINI GLOBJE</h2>
				<article class="flex flex-col gap-30">
					<p class="aos text-20 text-justify font-medium">
						Temeljni namen človeškega življenja je <span
							class="text-moreRed dark:text-moreRedDark font-bold">spoznati</span
						>
						Boga, ga <span class="text-moreRed dark:text-moreRedDark font-bold">ljubiti</span> in
						<span class="text-moreRed dark:text-moreRedDark font-bold">mu služiti</span>. Ker se na
						Unizupu tega kot župnija mladih še posebej zavedamo, je ta stran zato namenjena vsem
						stvarem, povezanim z duhovnim življenjem človeka, ki je v določenem oziru najbolj
						pomembno in ključno.
					</p>
					<div class="flex flex-col gap-15">
						<h3 class="aos text-32 font-bold text-center md:text-justify">
							Rast v duhovnem življenju
						</h3>
						<p class="aos text-20 text-justify font-medium">
							Pot duhovnega življenja se lahko upravičeno zdi dokaj zapletena in težavna, vendar pa
							temu ni tako oz. je vsaj lažje, če imamo na tej poti prave smernice in pomoči, s
							katerimi si lahko pomagamo. Na tej strani lahko zato pod sekcijo <a
								class="text-moreRed dark:text-moreRedDark font-bold underline"
								href="#duhovnaRast">duhovna rast</a
							> duhovna rast najdeš ogromno koristnih napotkov, usmeritev, praktičnih vaj in še mnogo
							več, kar ti bo pomagalo pri rasti v duhovnem življenju.
						</p>
					</div>
					<div class="flex flex-col gap-15">
						<h3 class="aos text-32 font-bold text-center md:text-justify">
							Bistvo življenja - postati svetnik
						</h3>
						<p class="aos text-20 text-justify font-medium">
							Vsak človek je poklican, da postane svetnik. To ni nekakšna nemogoča misija, pač pa
							sodelovanje z Bogom v vseh vsakdanjih stvareh; to pomeni ljubiti in delovati na način,
							kot je deloval naš Gospod Jezus Kristus. Odličen primer tega so že mnogi svetniki z
							Božjo Materjo Devico Marijo na čelu. Upamo, da ti lahko ta stran obilno pomaga na poti
							svetništva. Pogumno naprej!
						</p>
					</div>
				</article>
				<div class="flex-1">
					<div
						class="aos h-full w-full p-30 grid gap-15 text-24 font-medium rounded-3xl bg-white dark:bg-black border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
					>
						<p>“Biti svetnik ni privilegij le za izbrane, ampak poklicanost vseh.”</p>
						<p class="place-self-end">Papež Frančišek</p>
					</div>
				</div>
			</div>
			<div class="w-full flex flex-col gap-60 min-[1750px]:col-span-2">
				<Povezave data={koristnePovezave} />
			</div>
		</section>
		<ColorfullSection
			id={'duhovnaRast'}
			addClasses={'my-120'}
			title="duhovna rast"
			description="V tej sekciji lahko najdeš veliko koristnih informacij, praktičnih napotkov in drugih stvari, ki ti bodo pomagale pri rasti v duhovnem življenju."
		>
			<div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-90">
				{#await duhovniClanki}
					<Loader1 />
				{:then duhovniClanki}
					{#each duhovniClanki as clanek}
						<DuhovnaRastCard
							clanekName={clanek.attributes.Naslov}
							clanekLink={clanek.id}
							clanekImgSrc={`${PUBLIC_BASE_STRAPI_URL}${clanek.attributes.Media.data[0].attributes.formats.medium.url}`}
						/>
					{/each}
				{:catch error}
					<p>Napaka pri nalaganju člankov: {error}</p>
				{/await}
			</div>
			<MainBtn btnText="Več" btnHref="unipulz?tag=Duhovno" />
		</ColorfullSection>
		<Zavetnik />
		<CtaIsland addClasses={'mt-[7.5rem]'} />
	</div>
</Aos>
