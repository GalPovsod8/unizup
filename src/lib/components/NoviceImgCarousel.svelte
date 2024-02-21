<script lang="ts">
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';

	export let images: any[];

	function MoveLeft() {
		console.log('left');
	}

	function MoveRight() {
		console.log('right');
	}
</script>

<div class=" h-64 w-full flex items-center justify-between gap-30">
	<button
		on:click={MoveLeft}
		aria-label="slide image carousel left button"
		class="h-12 w-14 flex items-center justify-center rounded-xl bg-white dark:bg-black border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
	>
		<img class="h-5 dark:invert hover:opacity-85" src="\Arrow.svg" alt="<" />
	</button>
	<div class="h-full w-full flex overflow-hidden pb-1">
		{#each images as img}
			<figure
				class="group h-full w-full rounded-3xl overflow-hidden border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
			>
				<img
					class="h-full w-full object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
					src={`${PUBLIC_BASE_STRAPI_URL}${img.attributes.formats.medium.url}`}
					alt="slika"
				/>
			</figure>
		{/each}
	</div>
	<button
		on:click={MoveRight}
		aria-label="slide image carousel right button"
		class="h-12 w-14 flex items-center justify-center rounded-xl bg-white dark:bg-black border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
	>
		<img class="h-5 rotate-180 dark:invert hover:opacity-85" src="\Arrow.svg" alt="<" />
	</button>
</div>
