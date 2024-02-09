<script lang="ts">
	import MainBtn from './MainBtn.svelte';

	export let oznaniloImgHref: string;
	export let oznaniloNaslov: string;
	export let oznaniloDatum: string;
	export let oznaniloUra: string;
	export let oznaniloLokacija: string;
	export let oznaniloLink: string;
</script>

<a
	href="/OznaniloID"
	class="group h-full w-full lg:min-w-[23.75rem] lg:max-w-96 bg-white dark:bg-black border drop-shadow-shadow hover:drop-shadow-shadowHover transition-all ease-out duration-150 rounded-3xl"
>
	<figure class="w-full overflow-hidden rounded-3xl border">
		<img
			class={`h-60 w-full rounded-3xl object-cover object-top scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
			src={oznaniloImgHref}
			alt={oznaniloNaslov}
		/>
	</figure>
	<article class="flex flex-col justify-between rounded-3xl p-7 gap-30 text-center">
		<div>
			<h3 class="text-32 font-black uppercase">{oznaniloNaslov}</h3>
			<div class="flex flex-col items-center justify-center gap-30 text-20">
				<div class="flex flex-col items-center justify-center gap-10">
					<span class="font-semibold">Kdaj?</span>
					<p>{oznaniloDatum} ob {oznaniloUra}</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-10">
					<span class="font-semibold">Kje?</span>
					<p>{oznaniloLokacija}</p>
				</div>
			</div>
		</div>
		<MainBtn btnText="Več" btnHref={`/Oznanila/${oznaniloLink}`} />
	</article>
</a>
