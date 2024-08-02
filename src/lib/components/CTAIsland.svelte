<script lang="ts">
	import MainBtn from './MainBtn.svelte';
	import NewsSubscribe from './NewsSubscribe.svelte';
	import ScrollWidthSection from './ScrollWidthSection.svelte';
	import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
	import Loader2 from './Loader2.svelte';
	import { onMount } from 'svelte';

	export let addClasses = '';

	let skupinePromise: any[] = [];

	onMount(() => {
		fetch(`${PUBLIC_BASE_STRAPI_URL}/api/skupinas?populate=*`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				skupinePromise = data.data;
			})
			.catch((error) => {
				throw error;
			});
	});
</script>

<ScrollWidthSection
	classes={`${addClasses} p-90 px-[5%] grid grid-cols-1 xl:grid-cols-3 gap-60 rounded-3xl bg-white dark:bg-black border border-black dark:border-white`}
>
	<div class="aos max-h-[25rem] flex flex-col gap-30 overflow-auto">
		{#await skupinePromise}
			<Loader2 />
		{:then skupine}
			{#each skupine as skupina}
				<a
					class="w-full flex items-center justify-center hover:bg-opacity-90 text-black border border-black rounded-2xl px-7 py-3 font-bold text-24 dark:bg-black dark:text-white dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all ease-in-out duration-150"
					href="/o_nas/{skupina.id}">{skupina.attributes.imeSkupine}</a
				>
			{/each}
		{:catch error}
			<p>Napaka pri nalaganju skupin {error}</p>
		{/await}
	</div>
	<div class="flex flex-col gap-30">
		<article class="aos flex flex-col items-center gap-15 text-center">
			<h3 class="text-32 font-bold">Pogovor, spoved</h3>
			<p class="text-20">
				Če si se znašel v stiski in ne veš kako naprej in se želiš z nekom pogovoriti? Ali želiš
				pristopiti k zakramentu sv. spovedi me, pokliči na: <span class="font-bold"
					>031 569 689</span
				>
				ali mi piši na:
				<a class="underline" href="mailto:primoz3a@gmail.com">primoz3a@gmail.com</a>
			</p>
		</article>
		<div class="aos flex flex-col items-center gap-15 text-center">
			<h4 class="text-32 font-bold">Dar za sv. Mašo:</h4>
			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLSfHwOp69fnMXKxJsa36LgUjEP3xqHZf5NWFHDJBFJy6sRYntw/viewform"
				target="_blank"
				class="text-20 text-moreRed dark:text-moreRedDark underline">Obrazec</a
			>
		</div>
		<div class="aos flex flex-col items-center gap-20 text-center">
			<h4 class="text-32 font-bold">Socialno</h4>
			<div class="aos flex items-center gap-15">
				<a
					class="hover:opacity-80 dark:invert transition-all ease-in-out duration-150"
					href="https://www.facebook.com/univerzitetnazupnijamaribor"
					><img class="h-12" src="/fbIcon.svg" alt="Fb" /></a
				>
				<a
					class="hover:opacity-80 dark:invert transition-all ease-in-out duration-150"
					href="https://www.instagram.com/unizup?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
					><img class="h-12" src="/igIcon.svg" alt="Ig" /></a
				>
			</div>
		</div>
	</div>
	<div class="grid gap-30">
		<NewsSubscribe /><MainBtn
			btnText="DONACIJE"
			btnHref="https://docs.google.com/forms/d/e/1FAIpQLSfHwOp69fnMXKxJsa36LgUjEP3xqHZf5NWFHDJBFJy6sRYntw/viewform"
			textSize="24"
			hasMaxWidth={false}
			isExternal
		/>
	</div>
</ScrollWidthSection>
