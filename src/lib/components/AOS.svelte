<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	export let targetClass: string = 'aos';
	//Dodaj mogoc delayed animation classe za delaye
	let animationClass: string = 'animate-showUp';

	const dispatch = createEventDispatcher();

	function handleIntersection(entries: IntersectionObserverEntry[]) {
		entries.forEach((entry: IntersectionObserverEntry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add(animationClass);
				dispatch('animationPlayed', { target: entry.target });
			}
		});
	}

	onMount(() => {
		const options = {
			rootMargin: '100px'
		};

		const observer = new IntersectionObserver(handleIntersection, options);

		const targetElements = document.querySelectorAll(`.${targetClass}`);

		targetElements.forEach((element) => {
			observer.observe(element);
		});

		return () => {
			observer.disconnect();
		};
	});
</script>

<div>
	<slot />
</div>
