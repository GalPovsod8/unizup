<script lang="ts">
	import { page } from '$app/stores';
	import MainBtn from '$lib/components/MainBtn.svelte';
</script>

<div
	class="h-[80vh] grid place-items-center text-center bg-white dark:bg-black rounded-b-3xl border border-black dark:border-white"
>
	<div class="flex flex-col items-center justify-center gap-30">
		<h1 class="text-40 md:text-64 font-bold">{$page.status}: {$page.error?.message}</h1>
		{#if $page.status === 404}
			<p class="text-24 md:text-32 font-medium">Stran, ki jo iščete žal ne obstaja.</p>
		{/if}
		<MainBtn btnText="Nazaj na Unizup" btnHref="/" isDarkBgVariant />
	</div>
</div>
