<script lang="ts">
	export let clanekName: string;
	export let clanekImgSrc: string;
	export let clanekImgAlt: string;
	export let clanekLink: string;
</script>

<a
	href={`/unipulz/${clanekLink}`}
	class="relative group h-64 min-[1750px]:h-80 w-full flex items-center overflow-hidden rounded-3xl border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
>
	<h3
		class="absolute uppercase w-full text-center break-words z-40 text-32 scale-90 group-hover:scale-100 text-white font-bold transition-all ease-in-out duration-150"
	>
		{clanekName}
	</h3>
	<img
		class="absolute h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 brightness-75 group-hover:brightness-90 transition-all ease-in-out duration-150"
		src={clanekImgSrc}
		alt={clanekImgAlt}
	/>
</a>
