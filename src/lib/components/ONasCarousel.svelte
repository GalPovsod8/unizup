<script lang="ts">
	import ImgPopup from './ImgPopup.svelte';
	import { onMount } from 'svelte';

	const images = [
		{
			url: 'https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			showModal: false
		},
		{
			url: 'https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			showModal: false
		},
		{
			url: 'https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			showModal: false
		}
	];

	let currentIndex = 0;

	function toggle(index: number) {
		currentIndex = index;
	}

	function nextImage() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	let interval: any;

	onMount(() => {
		interval = setInterval(nextImage, 5000);
		return () => clearInterval(interval);
	});
</script>

<div class="aos">
	<div class="flex">
		{#each images as img, index}
			<div class={index === currentIndex ? 'slide-active w-full' : 'slide w-full'}>
				<button
					class="group h-96 w-full self-center rounded-3xl overflow-hidden bg-white dark:bg-black border border-black dark:border-white drop-shadow-shadow hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
					aria-label="show full image"
					on:click={() => toggle(index)}
				>
					<img
						class="h-full w-full object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150"
						src={img.url}
						alt="slika"
					/>
				</button>
				<ImgPopup bind:showModal={img.showModal} imgSrc={img.url} />
			</div>
		{/each}
	</div>
	<div class="mt-6 flex items-center justify-center gap-10 overflow-auto">
		{#each images as img, index}
			<button
				aria-label={`show image ${index + 1} button`}
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
