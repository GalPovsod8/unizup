<script lang="ts">
	export let skupinaName: string;
	export let skupinaImgSrc: string;
	export let skupinaLink: string;
</script>

<a
	href={`/o_nas/${skupinaLink}`}
	class="aos relative group h-64 min-[1750px]:h-80 w-full flex items-center overflow-hidden rounded-3xl border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
>
	<h3
		class="absolute w-full text-center break-words z-40 text-32 scale-90 group-hover:scale-100 text-white font-bold transition-all ease-in-out duration-150"
	>
		{skupinaName}
	</h3>
	<img
		class="absolute h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 brightness-75 group-hover:brightness-90 transition-all ease-in-out duration-150"
		src={skupinaImgSrc}
		alt={skupinaName}
	/>
</a>
