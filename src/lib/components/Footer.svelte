<script lang="ts">
	import Nav from './Nav.svelte';
</script>

<footer
	class="relative w-full z-40 mt-[7.5rem] bg-blue border dark:text-black border-black dark:border-white rounded-t-3xl"
>
	<div class="grid place-items-center gap-60 px-[5%] py-[3.75rem]">
		<Nav />
		<div class="w-full gap-30 lg:gap-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			<div class="w-full flex flex-col gap-30 text-center md:text-left">
				<h4 class="text-24 font-semibold">Za vas smo odprti:</h4>
				<ul class="flex flex-col gap-10 text-20 lg:w-3/5">
					<li>
						<span class="font-semibold">Torek:</span> 9.00 - 13.00
					</li>
					<li>
						<span class="font-semibold">Sreda:</span> 19.00 - 23.00
					</li>
					<li>
						<span class="font-semibold">Sv.Maša:</span> Vsako sredo ob 19.00 v mariborski stolnici
					</li>
				</ul>
			</div>
			<div
				class="w-full text-center md:text-right lg:text-center flex flex-col gap-30 my-7 md:my-0 md:mb-7 lg:mb-0"
			>
				<h4 class="text-24 font-semibold">Pogovor / Sv. Spoved / Kontakt</h4>

				<ul class="flex flex-col gap-10 text-20">
					<li class="font-semibold">Župnik Primož Lorbek</li>
					<li><span class="font-semibold">Tel.: </span>031 569 689</li>
					<li>
						<span class="font-semibold">Privat E-mail: </span>
						<a class="underline" href="mailto:primoz3a@gmail.com">primoz3a@gmail.com</a>
					</li>
					<li>
						<span class="font-semibold">E-mail: </span><a
							class="underline"
							href="mailto:unizup.maribor@gmail.com"
						>
							unizup.maribor@gmail.com</a
						>
					</li>
				</ul>
			</div>
			<div
				class="w-full md:col-span-2 lg:col-span-1 text-center lg:text-right flex items-center lg:items-end flex-col gap-30"
			>
				<h4 class="text-24 font-semibold">Podpora:</h4>
				<p class="lg:w-4/5 text-20">
					Če nas želite podpreti, lahko na naš <a class="underline font-medium" href="/tekociRac"
						>tekoči račun</a
					>
					nakažete sredstva in, če želite, pri tem dopišete svoje
					<span class="font-medium">ime in naslov</span> ter tako postanete naši podporniki
				</p>
			</div>
		</div>
	</div>
	<div
		class="w-full flex flex-col md:flex-row items-center gap-30 md:gap-0 md:justify-between px-[5%] py-10 md:py-4 font-medium border-t border-black"
	>
		<div class="md:w-full flex items-center gap-15">
			<a
				class="hover:opacity-80 transition-all ease-in-out duration-150"
				target="_blank"
				href="https://www.facebook.com/univerzitetnazupnijamaribor"
				><img class="h-6" src="/fbIcon.svg" alt="Fb" /></a
			>
			<a
				class="hover:opacity-80 transition-all ease-in-out duration-150"
				target="_blank"
				href="https://www.instagram.com/unizup?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
				><img class="h-6" src="/igIcon.svg" alt="Ig" /></a
			>
		</div>
		<a
			class="md:w-full text-center hover:opacity-80 transition-all ease-in-out duration-150"
			href="/"
			>&copy; Unizup
			{new Date().getFullYear()}</a
		>
		<p class="md:w-full text-right">
			Made with &#10084; by <a
				class="underline hover:opacity-80 transition-all ease-in-out duration-150"
				href="/GalPovsod">Gal Povsod</a
			>
		</p>
	</div>
</footer>
