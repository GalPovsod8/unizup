<script lang="ts">
	export let showModal: Boolean;
	export let imgSrc: string;
	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	class="h-[80vh] max-w-[80vw] md:max-w-max rounded-3xl border border-black dark:border-white"
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<img class="h-full w-full object-cover" src={imgSrc} alt="slikaFull" />
	<!-- svelte-ignore a11y-autofocus -->
	<button
		class="absolute bottom-0 left-0 w-full p-4 text-20 font-medium bg-black text-white flex items-center justify-center"
		autofocus
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
