<script lang="ts">
	import MainBtn from '$lib/components/MainBtn.svelte';
</script>

<div
	class="h-screen w-full grid place-items-center bg-white dark:bg-black rounded-3xl border border-black dark:border-white"
>
	<div class="grid place-items-center gap-30">
		<h2 class="text-32 text-center font-bold">Hvala za prijavo na novice Unizup!</h2>
		<MainBtn btnText="Nazaj na stran" btnHref="/" isDarkBgVariant />
	</div>
</div>
