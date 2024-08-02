<script lang="ts">
	import { cleanMarkdown, FormatDate } from '$lib/utils';
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

	let aWidth: number;
	let h2Width: number;
</script>

<a
	bind:clientWidth={aWidth}
	href={`/unipulz/${novicaLink}`}
	class={`${addClass} group h-full w-full bg-white dark:bg-black border drop-shadow-shadow hover:drop-shadow-shadowHover transition-all ease-out duration-150 rounded-3xl flex flex-col`}
	style="--aWidth: {aWidth}px"
>
	<figure class="relative w-full overflow-hidden rounded-3xl border">
		<img
			class={`${isRecent ? 'h-52' : 'h-32'} w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
			src={imgSrc}
			alt={noivcaNaslov}
		/>
		<p
			class:bg-tagBlue={tag == 'Duhovno'}
			class:bg-redTag={tag == 'Dogodek'}
			class:bg-novicaTagYellow={tag == 'Novica'}
			class={`absolute -bottom-0.5 -left-0.5 font-medium text-white rounded-tr-3xl rounded-bl-3xl border border-black dark:border-white p-4 z-50 scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
		>
			{tag}
		</p>
	</figure>
	<article class="flex flex-col justify-between rounded-3xl p-7 gap-30 flex-grow">
		<div class="w-full flex flex-col gap-5 overflow-hidden">
			<h2
				bind:clientWidth={h2Width}
				class:scrolling-text={h2Width > aWidth}
				class={`${isRecent ? 'text-32' : 'text-24'} relative font-semibold overflow-hidden text-nowrap`}
			>
				{noivcaNaslov}
			</h2>
			<span class="w-full flex items-center justify-between text-16">
				<p>Avtor: {avtor}</p>
				<p>{FormatDate(datum)}</p>
			</span>
		</div>
		{#if isRecent}
			<p class=" max-h-20 overflow-hidden text-ellipsis">
				{cleanMarkdown(povzetek)}
			</p>

			<MainBtn hasMaxWidth={false} btnText="Več" btnHref={`/unipulz/${novicaLink}`} />
		{/if}
	</article>
</a>

<style>
	.scrolling-text {
		display: inline-block;
		white-space: nowrap;
		animation: scroll-left 15s linear infinite;
	}

	@keyframes scroll-left {
		0% {
			transform: translateX(var(--aWidth));
		}
		100% {
			transform: translateX(calc(-1 * var(--aWidth)));
		}
	}
</style>
