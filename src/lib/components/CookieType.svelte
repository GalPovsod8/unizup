<script lang="ts">
	export let cookieTypeName: string;
	export let cookieTypeDescription: string;
	export let isNecessary: boolean = false;

	let isSpecificConsent: boolean = false;
	let isMoreSpecicInfo: boolean = false;

	isNecessary ? (isSpecificConsent = true) : '';
</script>

<li
	class="flex flex-col gap-15 p-15 border bg-white dark:bg-black border-black dark:border-white rounded-3xl drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
>
	<div class="w-full flex items-center justify-between">
		<button
			on:click={() => (isMoreSpecicInfo ? (isMoreSpecicInfo = false) : (isMoreSpecicInfo = true))}
			class="w-full flex items-center gap-5"
		>
			<img
				class:rotate-[270deg]={isMoreSpecicInfo}
				class="size-3 rotate-180 transition-all ease-in-out duration-150 dark:invert"
				src="Arrow.svg"
				alt="več o piškotku"
			/>
			<p class="font-bold">{cookieTypeName}</p>
		</button>
		<button
			class:bg-silver={isNecessary}
			class="h-8 w-16 rounded-3xl border border-black dark:border-white"
			on:click={() =>
				isNecessary
					? (isSpecificConsent = true)
					: isSpecificConsent
						? (isSpecificConsent = false)
						: (isSpecificConsent = true)}
			><div
				class:bg-green={isSpecificConsent}
				class:bg-red={!isSpecificConsent}
				class:translate-x-full={isSpecificConsent}
				class="h-full w-1/2 bg-black border border-black rounded-full transition-all ease-in-out duration-150"
			></div></button
		>
	</div>
	{#if isMoreSpecicInfo}
		<p class="max-h-52 text-left px-[18px] overflow-y-auto">
			{cookieTypeDescription}
		</p>
	{/if}
</li>
