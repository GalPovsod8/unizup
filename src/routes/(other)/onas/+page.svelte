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
	import MainBtn from '$lib/components/MainBtn.svelte';
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';

	export let data: PageData;
	let { aktivnosti, skupine } = data;
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
				<h2 class="aos font-black text-64 text-center xl:text-left">KDO SMO?</h2>
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
					<h3 class="text-32 font-bold">Redne aktivnosti župnije:</h3>
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
		<ScrollWidthSection
			id={'skupine'}
			classes={'my-120 mt-[44.00rem] md:mt-[50.5rem] p-90 px-[5%] rounded-3xl bg-blue border border-black dark:border-white dark:text-black'}
		>
			<div class="w-full flex flex-col items-center gap-90">
				<div class="w-full flex flex-col items-center gap-15">
					<h2 class="aos font-black text-64 text-center">SKUPINE NA UNIZUP</h2>
					<p class="aos sm:w-[60%] w-9/12 text-24 text-center">
						Unizup je prostor za VSE. Poleg rednih srečanj, se lahko včlaniš še v <span
							class="font-bold">katero izmed skupin</span
						> na Unizupu in postaneš del še večje zgodbe. Ne odlašaj, spleti nova spoznanstva in prijateljstva!
					</p>
				</div>
				<div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-90">
					{#await skupine}
						<Loader1 />
					{:then data}
						{#each data as skupina, i}
							<SkupinaCard
								skupinaName={skupina.attributes.imeSkupine}
								skupinaImgSrc={`${PUBLIC_BASE_STRAPI_URL}${skupina.attributes.Media.data[0].attributes.formats.medium.url}`}
								skupinaLink={`${i + 1}`}
							/>
						{/each}
					{:catch error}
						<p>Oops. Nekaj se je zalomilo. <br /> Sporočilo: {error.message}</p>
					{/await}
				</div>
			</div>
		</ScrollWidthSection>
		<ScrollWidthSection
			classes={'mb-120 p-90 px-[5%] rounded-3xl bg-white dark:bg-black border border-black dark:border-white'}
		>
			<div class="w-full flex flex-col items-center gap-90">
				<div class="w-full flex flex-col items-center gap-15">
					<h2 class="aos font-black text-64 text-center uppercase">sv. Janez Pavel ii.</h2>
					<p class="aos sm:w-[60%] w-9/12 text-24 text-center">Naš zavetnik.</p>
				</div>
				<div class="relative w-full grid grid-cols-1 xl:grid-cols-5 gap-90">
					<div
						style="
							rotate: 45deg;"
						class="aos absolute -top-6 -left-6 size-12 rounded-xl opacity-20 outline outline-green"
					></div>
					<div class="col-span-5 xl:col-span-2 flex flex-col justify-between gap-30 text-20">
						<article class=" flex flex-col justify-between gap-30 text-center xl:text-justify">
							<p class="aos">
								Zavetnik Univerzitetne župnije Maribor je sveti Janez Pavel II, ker katoliški
								študenti v njem vidijo vzor vere, upanja, ljubezni, dialoga, intelekta, izkušnje,
								ustvarjalnosti, poguma, razločevanja in svobode.
							</p>
							<p class="aos">
								»Hodi za menoj!« Karel Wojtila je sprejel, saj je v klicu Cerkve slišal Kristusov
								glas. In potem se je zavedel, kako resnična je Gospodova beseda: »Kdor bo skušal
								rešiti svoje življenje, ga bo izgubil; kdor pa ga bo izgubil, ga bo rešil (Lk
								17,33). Vsi vemo, da naš papež ni nikoli hotel rešiti svojega življenja, ga zadržati
								zase. Samega sebe je hotel dati brez pridržka, vse do zadnjega trenutka za Kristusa
								in tako tudi za nas.
							</p>
						</article>
						<MainBtn
							btnHref={`/duhovno`}
							btnText={'Več o našem zavetniku'}
							hasMaxWidth={false}
							textSize={'24'}
						/>
					</div>
					<div
						class="max-h-[31.25rem] z-20 w-full col-span-5 xl:col-span-3 grid grid-cols-2 gap-30"
					>
						<figure
							class="aos relative group w-full overflow-hidden rounded-3xl border border-black drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
						>
							<img
								class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
								src="https://www.santiebeati.it/immagini/Original/90026/90026EC.JPG"
								alt="SvJanezPavelII"
							/>
						</figure>
						<div class="flex flex-col justify-between gap-30">
							<figure
								class="aos relative group h-52 w-full overflow-hidden rounded-3xl border border-black drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
							>
								<img
									class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
									src="https://unizup.si/wp-content/uploads/2020/11/Papez-300x276.jpeg"
									alt="SvJanezPavelII"
								/>
							</figure>
							<figure
								class="aos relative group h-52 w-full overflow-hidden rounded-3xl border border-black drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
							>
								<img
									class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
									src="https://wp.en.aleteia.org/wp-content/uploads/sites/2/2019/01/web3-john-paul-ii-sicily-young-people-1993-orcppciric.jpg"
									alt="SvJanezPavelII"
								/>
							</figure>
						</div>
					</div>
					<div
						style="
							rotate: 45deg;"
						class="aos absolute -top-6 -right-6 size-12 rounded-xl opacity-20 outline outline-green"
					></div>
				</div>
			</div>
		</ScrollWidthSection>
		<ScrollWidthSection
			classes={'my-120 p-90 px-[5%] rounded-3xl bg-yellow border border-black dark:border-white dark:text-black'}
		>
			<div class="w-full flex flex-col items-center gap-90">
				<div class="w-full flex flex-col items-center gap-15">
					<h2 class="aos font-black text-64 text-center">NAŠI DRAGI</h2>
					<p class="aos sm:w-[60%] w-9/12 text-24 text-center">
						Oglej si kdo skrbi, da pri nas vse dobro teče in je za vse poskrbljeno :)
					</p>
				</div>
				<div class="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-90">
					<PersonCard
						ime="G. Primož Lorbek"
						funkcija="Duhovnik, vodja"
						imgSrc="https://www.tednik.si/images/galerija/naslovnica/1671646126_cg_primoz_lorbek.jpg"
					/>
					<PersonCard
						ime="S. Simona Kov"
						funkcija="Koordinatorka"
						imgSrc="https://unizup.si/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-15-at-12.48.57-4.jpeg"
					/>
					<PersonCard
						ime="Nataša Dolenc"
						funkcija="Zborovodja"
						imgSrc="https://scontent.flju2-4.fna.fbcdn.net/v/t1.6435-9/48372044_2014951225248255_3263091735164616704_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CsjtfLxg_GMAX__zwlX&_nc_ht=scontent.flju2-4.fna&oh=00_AfDQDePIJjjk91CE7ldqDg8VqCyBPRWFFZXau_CNl0p7bQ&oe=66241D1D"
					/>
				</div>
			</div>
		</ScrollWidthSection>
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
