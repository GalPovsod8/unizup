<script lang="ts">
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
	import Aos from '$lib/components/AOS.svelte';
	import Loader2 from '$lib/components/Loader2.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { onMount } from 'svelte';

	let SvJanezPavelIISlikePromise: any = null;

	onMount(() => {
		fetch(`${PUBLIC_BASE_STRAPI_URL}/api/slike-sv-janez-p-max-6?populate=*`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				SvJanezPavelIISlikePromise = data.data.attributes.slike_max_6;
			})
			.catch((error) => {
				console.log('There was an error loading images:', error);
			});
	});
</script>

<Aos>
	<div class="w-full flex flex-col items-center min-h-screen">
		<PageTitle
			pageTitle="Sv. Janez Pavel II."
			pageDescription="Naš zavetnik"
			pageScrollLink="#svJanezPavelDrugi"
		/>
		<section
			id="svJanezPavelDrugi"
			class="aos relative w-full p-90 px-[5%] grid grid-cols-1 xl:grid-cols-5 gap-90 rounded-3xl bg-white dark:bg-black border border-black dark:border-white"
		>
			<article class="flex flex-col gap-30 xl:col-span-3">
				<h2 class="aos font-black text-40 md:text-64 text-center xl:text-left">
					O NAŠEM ZAVETNIKU
				</h2>
				<p class="aos text-20 text-center md:text-justify font-medium">
					Zavetnik Univerzitetne župnije Maribor je sveti Janez Pavel II, ker katoliški študenti v
					njem vidijo vzor vere, upanja, ljubezni, dialoga, intelekta, izkušnje, ustvarjalnosti,
					poguma, razločevanja in svobode.
				</p>
				<div class="flex flex-col gap-15">
					<h4 class="aos text-32 font-bold text-center md:text-left">Hodi za menoj!</h4>
					<p class="aos text-20 font-medium text-justify">
						»Hodi za menoj!« Kot mlad študent je bil Karol Wojtila navdušen nad leposlovjem,
						gledališčem, poezijo. Ko je delal v kemični tovarni in so ga obdajale ter ogrožale
						strahote nacizma, je zaslišal Gospodov glas »Hodi za menoj!« V teh posebnih okoliščinah
						je začel prebirati filozofske in teološke knjige in vstopil v skrivno semenišče, ki ga
						je ustanovil kardinal Sapieha. Po vojni je mogel študij dopolniti na teološki fakulteti
						krakovske Jagelonske univerze. V pismih duhovnikom in v avtobiografskih knjigah je
						pogosto govoril o svojem duhovništvu. V duhovnika je bil posvečen 1. novembra 1946. V 
						teh besedilih v razlagi svojega duhovništva izhaja zlasti iz treh Gospodovih besed.
						»Niste vi mene izvolili, ampak sem jaz vas izvolil in vas postavil, da greste in
						obrodite sad in da vaš sad ostane« (Jn 15,16). Drugi navedek je: »Jaz sem dobri pastir.
						Dobri pastir da svoje življenje za ovce« (Jn 10,11). In končno: »Kakor je Oče mene
						ljubil, sem tudi jaz vas ljubil. Ostanite v moji ljubezni« (Jn 15,9). V teh stavkih
						odseva vsa duša našega svetega očeta. Dejansko je neutrudno hodil, da bi obrodil sad,
						sad, ki ostane. »Vstanite, pojdimo!«, je naslov njegove predzadnje knjige. S temi
						besedami nas je zdramil iz utrujene vere, iz spanja včerajšnjih in današnjih učencev.
						»Vstanite, pojdimo!« pravi danes tudi nam. Sveti oče je bil duhovnik vse do svojih
						globin, saj je Bogu daroval svoje življenje za svoje ovce in za vso človeško družino, v
						vsakdanjem darovanju v službi Cerkve in predvsem v hudih preizkušnjah zadnjih mesecev.
						Tako je postal eno s Kristusom, dobrim pastirjem, ki ljubi svoje ovce.
					</p>
				</div>
				<div class="flex flex-col gap-15">
					<h4 class="aos text-32 font-bold text-center md:text-left">Izgubiti samega sebe</h4>
					<p class="aos text-20 font-medium text-justify">
						Julija 1958 se začenja za mladega duhovnika Karla Wojtila nova stopnja na poti z
						Gospodom in za njim. Karel se je – kot ponavadi – odpravil s skupino mladih strastnih
						kanuistov na jezero Masuri, da bi skupaj preživeli počitnice. Toda s seboj je nosil
						pismo, v katerem je bilo vabilo, naj se zglasi pri poljskem primasu, kardinalu Štefanu
						Wyszynskem. Namen srečanja si je lahko predstavljal: imenovanje za krakovskega pomožnega
						škofa. Zapustiti akademsko poučevanje, zapustiti to spodbudno povezanost z mladimi,
						zapustiti veliko razumsko bojišče, da bi spoznaval in razlagal skrivnost ustvarjenega
						človeka, da bi sedanjemu svetu približal krščansko razlago naše biti – vse to se mu je
						moralo zazdeti kot izgubiti samega sebe, kot izguba prav tistega, kar je postalo
						človeška identiteta tega mladega duhovnika. Karel Wojtila je sprejel, saj je v klicu
						Cerkve slišal Kristusov glas. In potem se je zavedel, kako resnična je Gospodova beseda:
						»Kdor bo skušal rešiti svoje življenje, ga bo izgubil; kdor pa ga bo izgubil, ga bo
						rešil« (Lk 17,33). Vsi vemo, da naš papež ni nikoli hotel rešiti svojega življenja, ga
						zadržati zase. Samega sebe je hotel dati brez pridržka, vse do zadnjega trenutka za
						Kristusa in tako tudi za nas. Zato mu je bilo vse, kar je izročil v Gospodove roke,
						vrnjeno na način: ljubezen do besede, do poezije, do leposlovja je bila bistveni del
						njegovega dušnopastirskega poslanstva in je dala novo svežino, novo privlačnost
						oznanjevanju evangelija, in to tudi takrat, ko je evangelij znamenje nasprotovanja.
					</p>
				</div>
				<div class="flex flex-col gap-15">
					<h4 class="aos text-32 font-bold text-center md:text-left">Peter, ali me ljubiš?</h4>
					<p class="aos text-20 font-medium text-justify">
						Oktobra 1978 je kardinal Wojtila znova zaslišal Gospodov glas. Ponovi se dialog s
						Petrom, ki ga prinaša evangeljski odlomek  tega slavja: »Simon, Janezov sin, ali me
						ljubiš? Pasi moje ovce!« Na Gospodovo vprašanje: »Karel, ali me ljubiš!«, je krakovski
						nadškof iz globine svojega srca odgovoril: »Gospod, ti vse veš: ti veš, da te ljubim.«
						Kristusova ljubezen je bila gonilna sila našega ljubljenega svetega očeta. Kdor ga je
						videl moliti, kdor ga je slišal oznanjati, to ve. In tako je mogel, zahvaljujoč se tej
						globoki zakoreninjenosti v Kristusu, nositi breme, ki presega zgolj človeške moči, to je
						biti pastir Kristusove črede, njegove vesoljne Cerkve.
					</p>
				</div>
				<div class="flex flex-col gap-15">
					<h4 class="aos text-32 font-bold text-center md:text-left">Glasnik Božjega usmiljenja</h4>
					<p class="aos text-20 font-medium text-justify">
						Velikonočno skrivnost je razlagal kot skrivnost Božjega usmiljenja. V svoji zadnji
						knjigi piše: Končna meja zla »je v bistvu Božje usmiljenje«. In ko razmišlja o atentatu,
						pravi: »Kristus je s tem, ko je trpel za nas, dal trpljenju nov smisel, uvedel ga je v
						novo razsežnost, v novi red, ki je red ljubezni… Trpljenje, ki žge in použiva zlo z
						ognjem ljubezni, lahko stori, da se tudi iz greha razcveti dobro.« Papež je trpel in
						ljubil v občestvu s Kristusom, zato je bilo sporočilo njegovega trpljenja in njegovega
						molka tako zgovorno in rodovitno. Božje usmiljenje: sveti oče je v Božji Materi odkril
						najčistejši odsev Božjega usmiljenja. On, ki je v nežnih letih izgubil mater, je toliko
						bolj ljubil Božjo Mater. Besede križanega Gospoda: »Glej, tvoja Mati!« je doživljal kot
						izrečene njemu samemu. In storil je kot ljubljeni učenec: sprejel jo je v globino
						svojega bitja. Totus tuus. In od Matere se je učil upodabljanja po Kristusu.
					</p>
				</div>
				<p class="aos text-20 text-center md:text-justify font-bold">
					Odlomki iz homilije Papeža Benedikta XVI (takrat še kardinala Jožefa Ratzingerja) na
					papeževem pogrebu, 8. 4. 2005
				</p>
			</article>
			<div class="flex flex-col gap-30 xl:col-span-2">
				{#await SvJanezPavelIISlikePromise}
					<Loader2 />
				{:then slike}
					{#if slike}
						<div class="max-h-[31.25rem] z-20 w-full grid grid-cols-2 gap-30">
							<figure
								class="aos relative md:max-h-[31.25rem] group w-full overflow-hidden rounded-3xl border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
							>
								<img
									class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
									src={`${PUBLIC_BASE_STRAPI_URL}${slike.data[0].attributes.formats.medium.url}`}
									alt="SvJanezPavelII"
								/>
							</figure>
							<div class="flex flex-col justify-between gap-30">
								<figure
									class="aos relative group h-52 w-full overflow-hidden rounded-3xl border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
								>
									<img
										class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
										src={`${PUBLIC_BASE_STRAPI_URL}${slike.data[1].attributes.formats.medium.url}`}
										alt="SvJanezPavelII"
									/>
								</figure>
								<figure
									class="aos relative group h-52 w-full overflow-hidden rounded-3xl border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
								>
									<img
										class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
										src={`${PUBLIC_BASE_STRAPI_URL}${slike.data[2].attributes.formats.medium.url}`}
										alt="SvJanezPavelII"
									/>
								</figure>
							</div>
						</div>
						<div
							class="aos h-max w-full p-30 grid gap-15 text-24 font-medium rounded-3xl bg-white dark:bg-black border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
						>
							<p>“Ne bojte se! Odprite, na stežaj odprite vrata Kristusu!”</p>
							<p class="place-self-end">Sv. Janez Pavel II</p>
						</div>
						<div class="max-h-[31.25rem] overflow-hidden z-20 w-full grid grid-cols-2 gap-30">
							<div class="flex flex-col justify-between gap-30">
								<figure
									class="aos relative group h-52 w-full overflow-hidden rounded-3xl border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
								>
									<img
										class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
										src={`${PUBLIC_BASE_STRAPI_URL}${slike.data[3].attributes.formats.medium.url}`}
										alt="SvJanezPavelII"
									/>
								</figure>
								<figure
									class="aos relative group h-52 w-full overflow-hidden rounded-3xl border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
								>
									<img
										class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
										src={`${PUBLIC_BASE_STRAPI_URL}${slike.data[4].attributes.formats.medium.url}`}
										alt="SvJanezPavelII"
									/>
								</figure>
							</div>
							<figure
								class="aos relative md:max-h-[31.25rem] group w-full overflow-hidden rounded-3xl border border-black drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
							>
								<img
									class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
									src={`${PUBLIC_BASE_STRAPI_URL}${slike.data[5].attributes.formats.medium.url}`}
									alt="SvJanezPavelII"
								/>
							</figure>
						</div>
						<div
							class="aos h-max w-full p-30 grid gap-15 text-24 font-medium rounded-3xl bg-white dark:bg-black border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
						>
							<p>
								“Marsikomu pomeni svoboda pravico, da dela, kar hoče, svetnikom pa daje moč, da iz
								ljubezni in odpovedi delajo tudi to, kar jim ne ugaja”
							</p>
							<p class="place-self-end">Sv. Janez Pavel II</p>
						</div>
					{/if}
				{/await}
			</div>
		</section>
	</div>
</Aos>
