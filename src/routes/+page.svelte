<script lang="ts">
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
		class="p-90 bg-white dark:bg-black rounded-3xl border md:grid-cols-2 grid lg:grid-cols-3 gap-60"
	>
		<a
			href="/"
			class="group h-max w-full lg:max-w-96 bg-white dark:bg-black border drop-shadow-shadow hover:drop-shadow-shadowHover transition-all ease-out duration-150 rounded-3xl"
		>
			<figure class="relative h-[40%] w-full overflow-hidden rounded-3xl border">
				<img
					class="h-52 w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
					src="http://unizup.si/wp-content/uploads/2024/01/IMG_3978.jpg"
					alt="NewsPhoto"
				/>
				<a
					class="absolute -bottom-0.5 -left-0.5 font-medium bg-redTag text-white rounded-tr-3xl rounded-bl-3xl border border-black p-4 z-50 scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
					href="/tag"
				>
					Dogodek
				</a>
			</figure>
			<article class="h-[60%] flex flex-col justify-between rounded-3xl p-7 gap-30">
				<div class="w-full flex flex-col gap-5">
					<h3 class="text-32 font-semibold overflow-clip text-nowrap">Smučanje z UNIZUP</h3>
					<span class="w-full flex items-center justify-between text-16">
						<p>Avtor: Primož Lorbek</p>
						<p>17.1.2024</p>
					</span>
				</div>
				<p class=" max-h-20 overflow-clip">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing
					elit.
				</p>
				<button
					class="w-full bg-black text-white rounded-2xl px-7 py-3 font-bold text-32 dark:bg-white dark:text-black"
					>Več</button
				>
			</article>
		</a>
		<a
			href="/"
			class="group h-max w-full lg:max-w-96 bg-white dark:bg-black border drop-shadow-shadow hover:drop-shadow-shadowHover transition-all ease-out duration-150 rounded-3xl"
		>
			<figure class="relative h-[40%] w-full overflow-hidden rounded-3xl border">
				<img
					class="h-52 w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
					src="http://unizup.si/wp-content/uploads/2024/01/IMG_3978.jpg"
					alt="NewsPhoto"
				/>
				<a
					class="absolute -bottom-0.5 -left-0.5 font-medium bg-redTag text-white rounded-tr-3xl rounded-bl-3xl border border-black p-4 z-50 scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
					href="/tag"
				>
					Dogodek
				</a>
			</figure>
			<article class="h-[60%] flex flex-col justify-between rounded-3xl p-7 gap-30">
				<div class="w-full flex flex-col gap-5">
					<h3 class="text-32 font-semibold overflow-clip text-nowrap">Smučanje z UNIZUP</h3>
					<span class="w-full flex items-center justify-between text-16">
						<p>Avtor: Primož Lorbek</p>
						<p>17.1.2024</p>
					</span>
				</div>
				<p class=" max-h-20 overflow-clip">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing
					elit.
				</p>
				<button
					class="w-full bg-black text-white rounded-2xl px-7 py-3 font-bold text-32 dark:bg-white dark:text-black"
					>Več</button
				>
			</article>
		</a>
		<a
			href="/"
			class="group h-max w-full lg:max-w-96 bg-white dark:bg-black border drop-shadow-shadow hover:drop-shadow-shadowHover transition-all ease-out duration-150 rounded-3xl"
		>
			<figure class="relative h-[40%] w-full overflow-hidden rounded-3xl border">
				<img
					class="h-52 w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
					src="http://unizup.si/wp-content/uploads/2024/01/IMG_3978.jpg"
					alt="NewsPhoto"
				/>
				<a
					class="absolute -bottom-0.5 -left-0.5 font-medium bg-redTag text-white rounded-tr-3xl rounded-bl-3xl border border-black p-4 z-50 scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
					href="/tag"
				>
					Dogodek
				</a>
			</figure>
			<article class="h-[60%] flex flex-col justify-between rounded-3xl p-7 gap-30">
				<div class="w-full flex flex-col gap-5">
					<h3 class="text-32 font-semibold overflow-clip text-nowrap">Smučanje z UNIZUP</h3>
					<span class="w-full flex items-center justify-between text-16">
						<p>Avtor: Primož Lorbek</p>
						<p>17.1.2024</p>
					</span>
				</div>
				<p class=" max-h-20 overflow-clip">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Maxime mollitia. Lorem ipsum dolor sit amet consectetur adipisicing
					elit.
				</p>
				<button
					class="w-full bg-black text-white rounded-2xl px-7 py-3 font-bold text-32 dark:bg-white dark:text-black"
					>Več</button
				>
			</article>
		</a>
	</section>
</div>
