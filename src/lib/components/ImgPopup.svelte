<script lang="ts">
	export let showModal: Boolean;
	export let imgSrc: string;
	export let MoveLeft: () => void = () => {};
	export let MoveRight: () => void = () => {};
	export let isMobile: boolean = false;
	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	class="aspect-square md:aspect-auto md:h-[80vh] max-w-[80vw] md:max-w-max rounded-3xl border border-black dark:border-white z-50"
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<img class="h-full w-full object-cover" src={imgSrc} alt="slikaFull" />

	{#if isMobile}
		<div class="w-full flex justify-between items-center">
			<button
				on:click={MoveLeft}
				aria-label="slide image left"
				class="h-10 w-full flex items-center justify-center bg-black"
			>
				<img class="h-5 invert" src="/Arrow.svg" alt="<" />
			</button>
			<button
				on:click={MoveRight}
				aria-label="slide image right"
				class="h-10 w-full flex items-center justify-center bg-black"
			>
				<img class="h-5 rotate-180 invert" src="/Arrow.svg" alt=">" />
			</button>
		</div>
	{/if}
	<button
		class="absolute bottom-0 left-0 w-full p-4 text-20 font-medium bg-black text-white flex items-center justify-center"
		on:click={() => dialog.close()}>ZAPRI</button
	>
</dialog>

<style>
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
