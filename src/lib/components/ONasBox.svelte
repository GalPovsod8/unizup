<script lang="ts">
	export let oNasBoxNaslov: string;
	export let oNasBoxBesedilo: string;
	export let index: number;
	export let addClass = '';
</script>

<article
	class:bg-yellow={index == 0}
	class:bg-green={index == 1}
	class:bg-red={index == 2}
	class={`${addClass} group w-full p-60 flex flex-col gap-30 rounded-3xl border border-black drop-shadow-shadow hover:drop-shadow-shadowHover transition-all ease-in-out duration-150`}
>
	<h3
		class="w-full text-center font-bold text-40 scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
	>
		{oNasBoxNaslov}
	</h3>
	<p
		class="w-full text-justify text-24 scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
	>
		{oNasBoxBesedilo}
	</p>
</article>
