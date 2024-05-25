<script lang="ts">
	import Aos from '$lib/components/AOS.svelte';
	import ColorfullSection from '$lib/components/ColorfullSection.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import ScrollWidthSection from '$lib/components/ScrollWidthSection.svelte';
	import Zavetnik from '$lib/components/Zavetnik.svelte';
</script>

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
				<h2 class="aos font-black text-64 text-center xl:text-left">ODRINI GLOBJE</h2>
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
			<div class="w-full flex flex-col gap-60 min-[1750px]:col-span-2">alalal</div>
		</section>
		<ColorfullSection
			id={'duhovnaRast'}
			addClasses={'my-120'}
			title="duhovna rast"
			description="V tej sekciji lahko najdeš veliko koristnih informacij, praktičnih napotkov in drugih stvari, ki ti bodo pomagale pri rasti v duhovnem življenju."
		>
			<div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-90">
				<p>tesst1</p>
				<p>test2</p>
			</div>
		</ColorfullSection>
		<Zavetnik />
	</div>
</Aos>
