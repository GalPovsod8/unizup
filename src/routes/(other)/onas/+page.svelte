<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PersonCard from '$lib/components/PersonCard.svelte';
	import ScrollWidthSection from '$lib/components/ScrollWidthSection.svelte';

	let widthVar: number = 90;

	function handleScroll(event: Event) {
		const scrollPosition = window.scrollY;
		widthVar = Math.min(100, 90 + scrollPosition / 10);
	}
</script>

<svelte:window on:scroll={handleScroll} />

<div class="w-full flex flex-col items-center min-h-screen">
	<PageTitle
		pageTitle="O Nas"
		pageDescription="Dobrodošli na O Nas - Preberite o univerzitetni župniji Maribor"
		pageScrollLink="#onas"
	/>
	<section id="onas" class="h-[200vh]">prvi</section>
	<ScrollWidthSection
		classes={'p-90 px-[5%] rounded-3xl bg-yellow border border-black dark:border-white dark:text-black'}
	>
		<div class="w-full flex flex-col items-center gap-90">
			<div class="w-full flex flex-col items-center gap-15">
				<h2 class="font-black text-64 text-center">NAŠI DRAGI</h2>
				<p class="sm:w-[70%] w-9/12 text-24 text-center">
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
	<!-- <section
		style={`width:${widthVar}%`}
		class="p-90 px-[5%] rounded-3xl bg-yellow border border-black dark:border-white dark:text-black"
	>
		<div class="w-full flex flex-col items-center gap-90">
			<div class="w-full flex flex-col items-center gap-15">
				<h2 class="font-black text-64 text-center">NAŠI DRAGI</h2>
				<p class="sm:w-[70%] w-9/12 text-24 text-center">
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
	</section> -->
</div>
