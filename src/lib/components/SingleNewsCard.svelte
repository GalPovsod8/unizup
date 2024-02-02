<script lang="ts">
	export let noivcaNaslov: string;
	export let tag: string;
	export let imgSrc: string;
	export let avtor: string;
	export let datum: string;
	export let povzetek: string;
	export let novicaLink: string;

	let isRecent: boolean;
	let tagColor: string;

	if (tag == 'Dogodek') {
		tagColor = 'redTag';
	} else if (tag == 'Duhovno') {
		tagColor = 'blue';
	} else if (tag == 'Novica') {
		tagColor = 'novicaTagYellow';
	} else {
		tagColor = 'black';
	}
</script>

<a
	href={`/novice/${novicaLink}`}
	class="group h-max w-full lg:max-w-96 bg-white dark:bg-black border drop-shadow-shadow hover:drop-shadow-shadowHover transition-all ease-out duration-150 rounded-3xl"
>
	<figure class="relative h-[40%] w-full overflow-hidden rounded-3xl border">
		<img
			class="h-52 w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
			src={imgSrc}
			alt={noivcaNaslov}
		/>
		<a
			class={`absolute -bottom-0.5 -left-0.5 font-medium bg-${tagColor} text-white rounded-tr-3xl rounded-bl-3xl border border-black p-4 z-50 scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
			href="/tag"
		>
			{tag}
		</a>
	</figure>
	<article class="h-[60%] flex flex-col justify-between rounded-3xl p-7 gap-30">
		<div class="w-full flex flex-col gap-5">
			<h3 class="text-32 font-semibold overflow-clip text-nowrap">{noivcaNaslov}</h3>
			<span class="w-full flex items-center justify-between text-16">
				<p>Avtor: {avtor}</p>
				<p>{datum}</p>
			</span>
		</div>
		<p class=" max-h-20 overflow-clip">
			{povzetek}
		</p>
		<a
			href={`/novice/${novicaLink}`}
			class="w-full flex items-center justify-center bg-black text-white rounded-2xl px-7 py-3 font-bold text-32 dark:bg-white dark:text-black hover:bg-opacity-95 transition-all ease-in-out duration-150"
			>Več</a
		>
	</article>
</a>
