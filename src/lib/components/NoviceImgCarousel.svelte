<script lang="ts">
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
	import ImgPopup from './ImgPopup.svelte';

	export let images: any[];

	let currentIndex: number = 0;
	let innerWidth: number = 0;
	let showModal: boolean = false;
	let isMobile: boolean = false;
	let selectedImageIndex: number | any = null;

	let touchStartX = 0;
	let touchEndX = 0;

	function MoveLeft() {
		if (currentIndex > 0) {
			currentIndex--;
		}
	}

	function MoveRight() {
		if (!isMobile && currentIndex < images.length - 3) {
			currentIndex++;
		} else if (isMobile && currentIndex < images.length - 1) {
			currentIndex++;
		}
	}

	function ShowFullImage(index: number) {
		selectedImageIndex = currentIndex + index;
		showModal = true;
	}

	function slideImagesLeftRight(e: any) {
		switch (e.keyCode) {
			case 37:
				if (selectedImageIndex !== null && selectedImageIndex > 0) {
					selectedImageIndex--;
				}
				break;
			case 39:
				if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
					selectedImageIndex++;
				}
				break;
		}
	}

	function handleTouchStart(event: TouchEvent) {
		touchStartX = event.changedTouches[0].screenX;
	}

	function handleTouchEnd(event: TouchEvent) {
		touchEndX = event.changedTouches[0].screenX;
		handleSwipeGesture();
	}

	function handleSwipeGesture() {
		if (touchEndX < touchStartX) {
			MoveRight();
		}
		if (touchEndX > touchStartX) {
			MoveLeft();
		}
	}

	$: isMobile = innerWidth <= 800;
</script>

<svelte:window bind:innerWidth on:keydown={slideImagesLeftRight} />

<div
	class="h-64 w-full flex 2xl:max-w-[100%] 2xl:self-center items-center justify-between gap-30"
	on:touchstart={handleTouchStart}
	on:touchend={handleTouchEnd}
>
	{#if images.length > 2}
		<button
			on:click={MoveLeft}
			aria-label="slide image carousel left - button"
			class="h-12 w-14 z-20 flex items-center justify-center rounded-xl bg-white dark:bg-black border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
		>
			<img class="h-5 dark:invert hover:opacity-85" src="/Arrow.svg" alt="<" />
		</button>
	{/if}
	<div
		class="h-full w-full flex gap-20 overflow-hidden pb-1 transition-all ease-in-out duration-150"
	>
		{#if isMobile}
			{#each images.slice(currentIndex, currentIndex + 1) as img, index}
				<button
					class="group h-full w-full rounded-3xl overflow-hidden border border-black dark:border-white cursor-pointer drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
					aria-label="show full image"
					on:click={() => ShowFullImage(index)}
				>
					<img
						class="h-full w-full object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
						src={`${PUBLIC_BASE_STRAPI_URL}${img.formats?.small.url}`}
						alt="slika"
					/>
				</button>
			{/each}
		{:else}
			{#each images.slice(currentIndex, currentIndex + 3) as img, index}
				<button
					class="group h-full w-full rounded-3xl overflow-hidden border border-black dark:border-white cursor-pointer drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
					aria-label="show full image"
					on:click={() => ShowFullImage(index)}
				>
					<img
						class="h-full w-full object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
						src={`${PUBLIC_BASE_STRAPI_URL}${img.formats?.small.url}`}
						alt="slika"
					/>
				</button>
			{/each}
		{/if}
	</div>
	{#if images.length > 2}
		<button
			on:click={MoveRight}
			aria-label="slide image carousel right - button"
			class="h-12 w-14 z-20 flex flex-col items-center justify-center rounded-xl bg-white dark:bg-black border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
		>
			<img class="h-5 rotate-180 dark:invert hover:opacity-85" src="/Arrow.svg" alt="<" />
		</button>
	{/if}
</div>

{#if selectedImageIndex !== null}
	<ImgPopup
		bind:showModal
		imgSrc={`${PUBLIC_BASE_STRAPI_URL}${
			images[selectedImageIndex].formats.large
				? images[selectedImageIndex].formats.large.url
				: images[selectedImageIndex].formats.medium
					? images[selectedImageIndex].formats.medium.url
					: images[selectedImageIndex].formats.small.url
		}`}
		MoveLeft={() => {
			if (selectedImageIndex > 0) selectedImageIndex--;
		}}
		MoveRight={() => {
			if (selectedImageIndex < images.length - 1) selectedImageIndex++;
		}}
		{isMobile}
	/>
{/if}
