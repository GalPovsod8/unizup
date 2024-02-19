<script lang="ts">
	import { FormatDate, FormatTime } from '$lib/utils';
	import MainBtn from './MainBtn.svelte';

	export let oznaniloImgSrc: string;
	export let oznaniloNaslov: string;
	export let oznaniloDatum: string;
	export let oznaniloUra: string;
	export let oznaniloLokacija: string;
	export let oznaniloLink: string;
	export let addClass = '';
</script>

<a
	href={`/oznanila/${oznaniloLink}`}
	class={`${addClass} group h-full w-full lg:min-w-[23.75rem] bg-white dark:bg-black border border-black dark:border-white drop-shadow-shadow hover:drop-shadow-shadowHover transition-all ease-out duration-150 rounded-3xl flex flex-col`}
>
	<figure class="w-full overflow-hidden rounded-3xl border">
		<img
			class={`h-60 w-full rounded-3xl object-cover object-top scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
			src={oznaniloImgSrc}
			alt={oznaniloNaslov}
		/>
	</figure>
	<article class="flex flex-col justify-between rounded-3xl p-7 gap-30 text-center flex-grow">
		<h3 class="text-32 font-black uppercase">{oznaniloNaslov}</h3>
		<div class="flex flex-col items-center justify-center gap-30 text-20 flex-grow">
			<div class="flex flex-col items-center justify-center gap-10">
				<span class="font-semibold">Kdaj?</span>
				<p>{FormatDate(oznaniloDatum)} ob {FormatTime(oznaniloUra)}</p>
			</div>
			<div class="flex flex-col items-center justify-center gap-10">
				<span class="font-semibold">Kje?</span>
				<p>{oznaniloLokacija}</p>
			</div>
		</div>
		<MainBtn btnText="Več" btnHref={`/oznanila/${oznaniloLink}`} />
	</article>
</a>
