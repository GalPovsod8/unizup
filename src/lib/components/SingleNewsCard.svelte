<script lang="ts">
	import { FormatDate } from '$lib/utils';
	import MainBtn from './MainBtn.svelte';

	export let noivcaNaslov: string;
	export let tag: string;
	export let imgSrc: string;
	export let avtor: string;
	export let datum: string;
	export let povzetek: string;
	export let novicaLink: string;
	export let isRecent: boolean;
	export let addClass = '';
</script>

<a
	href={`/unipulz/${novicaLink}`}
	class={`${addClass} group h-full w-full 2xl:max-w-96 bg-white dark:bg-black border drop-shadow-shadow hover:drop-shadow-shadowHover transition-all ease-out duration-150 rounded-3xl flex flex-col`}
>
	<figure class="relative w-full overflow-hidden rounded-3xl border">
		<img
			class={`${isRecent ? 'h-52' : 'h-32'} w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
			src={imgSrc}
			alt={noivcaNaslov}
		/>
		<a
			class:bg-blue={tag == 'Duhovno'}
			class:bg-redTag={tag == 'Dogodek'}
			class:bg-novicaTagYellow={tag == 'Novica'}
			class={`absolute -bottom-0.5 -left-0.5 font-medium text-white rounded-tr-3xl rounded-bl-3xl border border-black p-4 z-50 scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
			href="/tag"
		>
			{tag}
		</a>
	</figure>
	<article class="flex flex-col justify-between rounded-3xl p-7 gap-30 flex-grow">
		<div class="w-full flex flex-col gap-5">
			<h3 class={`${isRecent ? 'text-32' : 'text-24'} font-semibold overflow-clip text-nowrap`}>
				{noivcaNaslov}
			</h3>
			<span class="w-full flex items-center justify-between text-16">
				<p>Avtor: {avtor}</p>
				<p>{FormatDate(datum)}</p>
			</span>
		</div>
		{#if isRecent}
			<p class=" max-h-20 overflow-clip">
				{povzetek}
			</p>

			<MainBtn hasMaxWidth={false} btnText="Več" btnHref={`/unipulz/${novicaLink}`} />
		{/if}
	</article>
</a>
