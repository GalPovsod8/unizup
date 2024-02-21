<script lang="ts">
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
	import type { NumericRange } from '@sveltejs/kit';
	import ImgPopup from './ImgPopup.svelte';

	export let images: any[];

	let currentIndex: number = 0;
	let showModal: boolean = false;
	let selectedImageIndex: Number | any = null;

	function MoveLeft() {
		if (currentIndex > 0) {
			currentIndex--;
		}
	}

	function MoveRight() {
		if (currentIndex < images.length - 3) {
			currentIndex++;
		}
	}

	function ShowFullImage(index: number) {
		selectedImageIndex = currentIndex + index;
		showModal = true;
	}
</script>

<div class="h-64 w-full flex items-center justify-between gap-30">
	{#if images.length > 2}
		<button
			on:click={MoveLeft}
			aria-label="slide image carousel left button"
			class="h-12 w-14 z-20 flex items-center justify-center rounded-xl bg-white dark:bg-black border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
		>
			<img class="h-5 dark:invert hover:opacity-85" src="\Arrow.svg" alt="<" />
		</button>
	{/if}
	<div
		class="h-full w-full flex gap-20 overflow-hidden pb-1 transition-all ease-in-out duration-150"
	>
		{#each images.slice(currentIndex, currentIndex + 3) as img, index}
			<button
				class="group h-full w-full rounded-3xl overflow-hidden border border-black dark:border-white cursor-pointer drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
				aria-label="show image"
				on:click={() => ShowFullImage(index)}
			>
				<img
					class="h-full w-full object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
					src={`${PUBLIC_BASE_STRAPI_URL}${img.attributes.formats.medium.url}`}
					alt="slika"
				/>
			</button>
		{/each}
	</div>
	{#if images.length > 2}
		<button
			on:click={MoveRight}
			aria-label="slide image carousel right button"
			class="h-12 w-14 z-20 flex items-center justify-center rounded-xl bg-white dark:bg-black border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
		>
			<img class="h-5 rotate-180 dark:invert hover:opacity-85" src="\Arrow.svg" alt="<" />
		</button>
	{/if}
</div>

{#if selectedImageIndex !== null}
	<ImgPopup
		bind:showModal
		imgSrc={`${PUBLIC_BASE_STRAPI_URL}${images[selectedImageIndex].attributes.formats.large.url}`}
	/>
{/if}
