<script lang="ts">
	export let classes: string;
	let widthVar: number = 90;
	let section: HTMLElement;
	const maxWidth = 100;
	const minWidth = 90;
	const transitionStartOffset = 10;

	function handleScroll(event: Event) {
		const scrollPosition = window.scrollY + window.innerHeight;
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;

		if (
			scrollPosition >= sectionTop &&
			scrollPosition <= sectionTop + sectionHeight + transitionStartOffset
		) {
			const scrollProgress =
				(scrollPosition - sectionTop) / (sectionHeight + transitionStartOffset);
			widthVar = minWidth + (maxWidth - minWidth) * scrollProgress;
		} else if (scrollPosition < sectionTop) {
			widthVar = minWidth;
		} else {
			widthVar = maxWidth;
		}
	}
</script>

<svelte:window on:scroll={handleScroll} />

<section class={classes} bind:this={section} style="width: {widthVar}%;">
	<slot />
</section>
