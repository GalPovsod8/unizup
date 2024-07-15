<script lang="ts">
	import { onMount } from 'svelte';
	import MainBtn from './MainBtn.svelte';
	import ScrollWidthSection from './ScrollWidthSection.svelte';
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
	import Loader2 from './Loader2.svelte';

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

<ScrollWidthSection
	classes={'mb-120 p-90 px-[5%] rounded-3xl bg-white dark:bg-black border border-black dark:border-white'}
>
	<div class="w-full flex flex-col items-center gap-90">
		<div class="w-full flex flex-col items-center gap-15">
			<h2 class="aos font-black text-40 md:text-64 text-center uppercase">sv. Janez Pavel ii.</h2>
			<p class="aos sm:w-[60%] w-9/12 text-24 text-center">Naš zavetnik.</p>
		</div>
		<div class="relative w-full grid grid-cols-1 xl:grid-cols-5 gap-90">
			<div
				style="rotate: 45deg;"
				class="aos hidden md:block absolute -top-6 -left-6 size-12 rounded-xl opacity-20 outline outline-green"
			></div>
			<div class="col-span-4 xl:col-span-2 flex flex-col justify-between gap-30 text-20">
				<article class="flex flex-col justify-between gap-30 text-center xl:text-justify">
					<p class="aos">
						Zavetnik Univerzitetne župnije Maribor je sveti Janez Pavel II, ker katoliški študenti v
						njem vidijo vzor vere, upanja, ljubezni, dialoga, intelekta, izkušnje, ustvarjalnosti,
						poguma, razločevanja in svobode.
					</p>
					<p class="aos">
						»Hodi za menoj!« Karel Wojtila je sprejel, saj je v klicu Cerkve slišal Kristusov glas.
						In potem se je zavedel, kako resnična je Gospodova beseda: »Kdor bo skušal rešiti svoje
						življenje, ga bo izgubil; kdor pa ga bo izgubil, ga bo rešil (Lk 17,33). Vsi vemo, da
						naš papež ni nikoli hotel rešiti svojega življenja, ga zadržati zase. Samega sebe je
						hotel dati brez pridržka, vse do zadnjega trenutka za Kristusa in tako tudi za nas.
					</p>
				</article>
				<MainBtn
					btnHref={`/duhovno/sv_janez_pavel_drugi`}
					btnText={'Več o našem zavetniku'}
					hasMaxWidth={false}
					textSize={'24'}
				/>
			</div>
			<div class="max-h-[31.25rem] z-20 w-full col-span-4 xl:col-span-3 grid grid-cols-2 gap-30">
				{#await SvJanezPavelIISlikePromise}
					<Loader2 />
				{:then slike}
					{#if slike}
						<figure
							class="aos relative group w-full overflow-hidden rounded-3xl border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
						>
							<img
								class="h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
								src={`${PUBLIC_BASE_STRAPI_URL}${slike.data[0].attributes.formats.medium.url}`}
								alt="SvJanezPavelII"
							/>
						</figure>

						<div class="flex flex-col justify-between gap-30">
							<figure
								class="aos relative group h-52 w-full overflow-hidden rounded-3xl border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
							>
								<img
									class="h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
									src={`${PUBLIC_BASE_STRAPI_URL}${slike.data[1].attributes.formats.medium.url}`}
									alt="SvJanezPavelII"
								/>
							</figure>
							<figure
								class="aos relative group h-52 w-full overflow-hidden rounded-3xl border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
							>
								<img
									class="h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
									src={`${PUBLIC_BASE_STRAPI_URL}${slike.data[2].attributes.formats.medium.url}`}
									alt="SvJanezPavelII"
								/>
							</figure>
						</div>
					{:else}
						<p>Error: Unable to load image.</p>
						{#if slike}
							<p>Debug: {JSON.stringify(slike)}</p>
						{/if}
					{/if}
				{/await}
			</div>
			<div
				style="rotate: 45deg;"
				class="aos hidden md:block absolute -top-6 -right-6 size-12 rounded-xl opacity-20 outline outline-green"
			></div>
		</div>
	</div>
</ScrollWidthSection>
