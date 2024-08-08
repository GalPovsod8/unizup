<script lang="ts">
	import MainBtn from '$lib/components/MainBtn.svelte';
</script>

<svelte:head>
	<title>Tekoči račun - Univerzitetna župnija Maribor</title>
</svelte:head>

<div
	class="h-max min-h-screen py-24 w-full grid place-items-center bg-white dark:bg-black rounded-3xl border border-black dark:border-white"
>
	<div class="mt-5 grid place-items-center text-center gap-60">
		<div class="flex flex-col items-center justify-center gap-30">
			<h1 class="text-40 md:text-64 font-bold">Podprite nas</h1>
			<p class="md:w-3/5 px-[5%] md:p-0 text-24">
				Če nas želite podpreti, ste vabljeni, da na naš tekoči račun nakažete sredstva in, če
				želite, pri tem dopišete svoje ime in naslov ter tako postanete naši podporniki.
			</p>
		</div>
		<div class="flex flex-col gap-30">
			<h2 class="font-bold text-40">Naši podatki:</h2>
			<div class="flex flex-col gap-15 px-[5%]">
				<p class="font-medium text-24">
					Univerzitetna župnija Maribor, Slomškov trg 20, 2000 Maribor
				</p>
				<p class="font-medium text-24"><strong>TRR:</strong> SI56 6100 0001 7669 867</p>
			</div>
		</div>
		<MainBtn btnText="Domov" btnHref="/" isDarkBgVariant />
	</div>
</div>
