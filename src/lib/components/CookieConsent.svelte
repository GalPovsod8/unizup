<script lang="ts">
	import CookieType from './CookieType.svelte';

	export let consent: boolean | null = null;
	let isMoreInfo: boolean = false;

	async function setConsent(value: boolean) {
		await fetch('/api/set-consent', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ consent: value })
		});

		consent = value;
	}
</script>

<div
	class:hidden={consent !== null}
	class="animate-showUp w-full max-h-[80vh] overflow-auto fixed flex flex-col gap-20 p-30 bottom-0 text-center xl:text-left bg-white dark:bg-black z-50 border rounded-t-3xl border-black dark:border-white"
>
	<p class="text-24 font-bold">Mmmmm. Piškotki!</p>
	<div class="flex w-full items-center justify-center xl:justify-between flex-wrap gap-15 xl:gap-0">
		<p class="max-w-full xl:max-w-[70%]">
			Na naši strani uporabljamo piškotke, da <span class="font-bold">izboljšamo vašo izkušnjo</span
			>
			brskanja ter <span class="font-bold">analiziramo</span>
			naš promet. S klikom na <span class="font-bold">»Sprejmi«</span> soglašate z našo uporabo piškotkov.
		</p>
		<div class="flex flex-wrap md:flex-nowrap items-center gap-15">
			<button
				on:click={() => (isMoreInfo ? (isMoreInfo = false) : (isMoreInfo = true))}
				class="w-full flex items-center text-center justify-center hover:bg-opacity-90 text-black border border-black rounded-2xl px-7 py-3 font-bold dark:bg-black dark:text-white dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all ease-in-out duration-150"
			>
				Možnosti
			</button>
			<button
				on:click={() => setConsent(false)}
				class="w-full flex items-center text-center justify-center hover:bg-opacity-90 text-black border border-black rounded-2xl px-7 py-3 font-bold dark:bg-black dark:text-white dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all ease-in-out duration-150"
			>
				Zavrni
			</button>
			<button
				on:click={() => setConsent(true)}
				class="w-full flex items-center text-center justify-center hover:bg-opacity-90 text-white border rounded-2xl px-7 py-3 font-bold bg-black dark:text-white dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all ease-in-out duration-150"
			>
				Sprejmi
			</button>
		</div>
	</div>
	{#if isMoreInfo}
		<div class="flex flex-col gap-20">
			<p class="text-20 font-bold">Tipi piškotkov, ki jih uporabljamo:</p>
			<ul class="flex flex-col gap-15">
				<CookieType
					isNecessary
					cookieTypeName={'Nujni piškotki'}
					cookieTypeDescription={'Nujni piškotki so potrebni za omogočanje osnovnih funkcij te strani, kot so zagotavljanje varne prijave ali prilagajanje vaših nastavitev soglasja. Ti piškotki ne shranjujejo nobenih osebnih podatkov.'}
				/>
				<CookieType
					cookieTypeName={'Analitika'}
					cookieTypeDescription={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eos quos architecto? Iure odio maxime eaque, earum officiis est voluptatibus iusto obcaecati. Voluptatum optio aperiam ipsa tempore vel nam ex culpa. Quod nihil, nesciunt animi sunt placeat dignissimos odio, sapiente sit architecto, corporis dicta voluptatibus saepe explicabo. Fuga sequi ullam sed ea enim illum perspiciatis recusandae ut est, assumenda facilis ducimus, excepturi dignissimos libero placeat aliquam temporibus ipsam quasi nekaj'}
				/>
			</ul>
		</div>
	{/if}
</div>
