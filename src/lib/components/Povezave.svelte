<script lang="ts">
	import Loader2 from './Loader2.svelte';
	import MainBtn from './MainBtn.svelte';

	export let data;
</script>

<div
	class="h-full max-h-[30rem] md:max-h-[53rem] min-[1920px]:max-h-[43.125rem] flex flex-col items-center gap-30 p-60 rounded-3xl border border-black dark:border-white drop-shadow-shadow text-center bg-yellow dark:bg-black hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
>
	<h4 class="aos text-32 font-bold">KORISTNE POVEZAVE</h4>
	<p class="text-20">
		Tukaj lahko najdeš nekatere koristne povezave iz področja duhovnosti, ki ti bodo pomagale na
		poti duhovnega življenja in duhovne rasti.
	</p>
	<div class="w-full flex flex-col gap-30 overflow-auto">
		{#await data}
			<Loader2 />
		{:then povezave}
			{#each povezave as povezava}
				<MainBtn
					hasMaxWidth={false}
					isExternal={true}
					textSize={'24'}
					btnText={povezava.imePovezave}
					btnHref={povezava.link}
				/>
			{/each}
		{:catch error}
			<p>Napaka pri nalaganju povezav: {error}</p>
		{/await}
	</div>
</div>
