<script lang="ts">
	import SingleNewsCard from '$lib/components/SingleNewsCard.svelte';

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
	<section class="h-[75vh] w-full rounded-3xl grid place-items-center pt-8 mb-8">
		<header class="grid place-items-center gap-50">
			<hgroup class="grid place-items-center font-bold gap-30 text-center">
				<img class="h-20 w-20 rounded-full -mb-7" src="/unizupLogo.png" alt="UZ" />
				<h1 class="text-96 -mb-5">UNIZUP</h1>
				<h2 class="text-40">UNIVERZITETNA ŽUPNIJA MARIBOR</h2>
			</hgroup>
			<!-- Na mobile, sam skrijes tti nav, pa renderas onga ko je na vsakmo pago -->
			<nav class="flex items-center gap-30 text-20">
				<a class="hover:opacity-80 transition-all ease-in-out duration-150" href="/">Domov</a>
				<a class="hover:opacity-80 transition-all ease-in-out duration-150" href="/">UniPulz</a>
				<a class="hover:opacity-80 transition-all ease-in-out duration-150" href="/">Kaj zaj?</a>
				<a class="hover:opacity-80 transition-all ease-in-out duration-150" href="/">Duhovnost</a>
				<a class="hover:opacity-80 transition-all ease-in-out duration-150" href="/">O Nas</a>
			</nav>
			<button
				on:click={ToggleTheme}
				aria-label="Dark/light mode toggle"
				class="h-6 w-6 -mt-3 rounded-full bg-black dark:bg-white"
			></button>
		</header>
		<p class="text-20">
			Študentska maša vsako sredo ob <b class="font-bold text-moreRed">19. uri</b> v
			<b class="font-bold text-moreRed">mariborski stolnici</b>.
		</p>
	</section>
	<section
		class="p-90 bg-white dark:bg-black rounded-3xl border grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 grid-flow-row auto-rows-max gap-60"
	>
		<SingleNewsCard
			noivcaNaslov="Smučanje z UNIZUP"
			novicaLink="smucanje-z-unizup"
			tag="Dogodek"
			imgSrc="http://unizup.si/wp-content/uploads/2024/01/IMG_3978.jpg"
			avtor="Primož Lorbek"
			datum="17.1.2024"
			povzetek="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit."
		/>
		<SingleNewsCard
			noivcaNaslov="Božična poslanica 2023"
			novicaLink="bozicna-poslanica-2023"
			tag="Duhovno"
			imgSrc="http://unizup.si/wp-content/uploads/2023/12/Gaza-1-600x400.jpg"
			avtor="Primož Lorbek"
			datum="27.12.2023"
			povzetek="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit."
		/>
		<SingleNewsCard
			noivcaNaslov="Človekovo dostojanstvo"
			novicaLink="clovekovo-dostojanstvo"
			tag="Novica"
			imgSrc="http://unizup.si/wp-content/uploads/2024/01/311336193_833078238057361_2655733340416960969_n-1080x710.jpg"
			avtor="Primož Lorbek"
			datum="17.1.2024"
			povzetek="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit."
		/>
	</section>
</div>
