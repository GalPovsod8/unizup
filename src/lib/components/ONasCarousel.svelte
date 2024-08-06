<script lang="ts">
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Loader1 from './Loader1.svelte';

	let slikeONas: Promise<any[]> = $page.data.slikeONas;
	let slike: any[] = [];
	let currentIndex: number = 0;

	async function loadImages() {
		try {
			slike = await slikeONas;
		} catch (error) {
			console.error('Napaka pri nalaganju slik:', error);
		}
	}

	function toggle(index: number) {
		currentIndex = index;
	}

	function nextImage() {
		if (slike.length > 0) {
			currentIndex = (currentIndex + 1) % slike.length;
		}
	}

	let interval: any;

	onMount(() => {
		loadImages().then(() => {
			interval = setInterval(nextImage, 5000);
		});

		return () => clearInterval(interval);
	});
</script>

<div class="aos">
	<div class="flex">
		{#if slike.length === 0}
			<Loader1 />
		{:else}
			{#each slike as img, index}
				<div class={index === currentIndex ? 'slide-active w-full' : 'slide w-full'}>
					<figure
						class="group h-96 w-full self-center rounded-3xl overflow-hidden bg-white dark:bg-black border border-black dark:border-white drop-shadow-shadow hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
					>
						<img
							class="h-full w-full object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
							src={`${PUBLIC_BASE_STRAPI_URL}${
								img.attributes.formats.large
									? img.attributes.formats.large.url
									: img.attributes.formats.medium
										? img.attributes.formats.medium.url
										: img.attributes.formats.small.url
							}`}
							alt={img.attributes.alternativeText ?? 'slika'}
						/>
					</figure>
				</div>
			{/each}
		{/if}
	</div>
	<div class="mt-6 flex items-center justify-center gap-10 overflow-auto">
		{#each slike as img, index}
			<button
				aria-label="show image {index + 1} button"
				on:click={() => toggle(index)}
				class={index === currentIndex
					? 'size-7 min-h-5 min-w-5 rounded-full bg-black dark:bg-blue'
					: 'size-7 min-h-5 min-w-5 rounded-full bg-silver'}
			></button>
		{/each}
	</div>
</div>

<style>
	.slide {
		display: none;
	}

	.slide-active {
		display: block;
	}
</style>
