<script lang="ts">
	import { onMount } from 'svelte';
	import Aos from './AOS.svelte';
	import Loader2 from './Loader2.svelte';
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';

	let galleryPhotosPromise: any = null;

	onMount(() => {
		fetch(`${PUBLIC_BASE_STRAPI_URL}/api/slike-galerija-max-7?populate=*`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				galleryPhotosPromise = data.data.slike_max_7;
			})
			.catch((error) => {
				console.log('There was an error loading images:', error);
			});
	});
</script>

<Aos>
	<div class={`aos  absolute w-[90%] grid grid-cols-3 md:grid-cols-5 gap-30`}>
		{#await galleryPhotosPromise}
			<Loader2 />
		{:then slike}
			{#if slike}
				<figure
					class="relative max-h-[500px] group w-full col-span-2 md:col-span-1 md:row-span-2 overflow-hidden rounded-3xl border border-black dark:border-white"
				>
					<img
						class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
						src={`${PUBLIC_BASE_STRAPI_URL}${slike[0].formats.small.url}`}
						alt="Uniphoto1"
					/>
				</figure>
				<figure
					class="aos relative group w-full col-span-1 md:row-start-3 overflow-hidden rounded-3xl border border-black dark:border-white"
				>
					<img
						class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
						src={`${PUBLIC_BASE_STRAPI_URL}${slike[1].formats.small.url}`}
						alt="Uniphoto2"
					/>
				</figure>
				<figure
					class="aos relative max-h-[500px] hidden md:block group w-full md:col-start-2 md:col-span-2 md:row-span-2 overflow-hidden rounded-3xl border border-black dark:border-white"
				>
					<img
						class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
						src={`${PUBLIC_BASE_STRAPI_URL}${slike[2].formats.small.url}`}
						alt="Uniphoto2"
					/>
				</figure>
				<figure
					class="aos relative group h-[17rem] w-full md:col-start-2 col-span-3 md:row-span-1 overflow-hidden rounded-3xl border border-black dark:border-white"
				>
					<img
						class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
						src={`${PUBLIC_BASE_STRAPI_URL}${slike[3].formats.small.url}`}
						alt="Uniphoto2"
					/>
				</figure>
				<figure
					class="aos relative group w-full md:col-start-5 hidden md:block md:row-start-2 md:row-span-2 overflow-hidden rounded-3xl border border-black dark:border-white"
				>
					<img
						class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
						src={`${PUBLIC_BASE_STRAPI_URL}${slike[4].formats.small.url}`}
						alt="Uniphoto2"
					/>
				</figure>
				<figure
					class="aos max-h-[240px] relative group w-full md:col-start-4 md:row-start-2 overflow-hidden rounded-3xl border border-black dark:border-white"
				>
					<img
						class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
						src={`${PUBLIC_BASE_STRAPI_URL}${slike[5].formats.small.url}`}
						alt="Uniphoto2"
					/>
				</figure>
				<figure
					class="aos relative group h-[15rem] w-full md:col-start-4 col-span-2 md:row-start-1 md:row-span-1 overflow-hidden rounded-3xl border border-black dark:border-white"
				>
					<img
						class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
						src={`${PUBLIC_BASE_STRAPI_URL}${slike[6].formats.small.url}`}
						alt="Uniphoto2"
					/>
				</figure>
			{/if}
		{/await}
	</div>
</Aos>
