<script lang="ts">
	export let ime: string;
	export let funkcija: string;
	export let imgSrc: string;
</script>

<figure
	class="relative group h-[35rem] w-full 2xl:max-w-[30rem] overflow-hidden rounded-3xl border border-black drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
>
	<div
		class="absolute h-4/5 w-full z-40 overflow-hidden rounded-3xl border border-black drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
	>
		<img
			class="h-full w-full object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`"
			src={imgSrc}
			alt={ime}
		/>
	</div>
	<figcaption class="relative h-full w-full bg-white">
		<div class="absolute bottom-0 h-max w-full p-9 flex flex-col gap-5 items-center">
			<p class="text-24 font-bold">{ime}</p>
			<p class="text-20">{funkcija}</p>
		</div>
	</figcaption>
</figure>
