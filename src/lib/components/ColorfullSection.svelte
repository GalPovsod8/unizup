<script lang="ts">
	import ScrollWidthSection from './ScrollWidthSection.svelte';
	export let id = '';
	export let title;
	export let description;
	export let addClasses = '';
	export let bgColor = 'blue';
</script>

<ScrollWidthSection
	{id}
	classes={`${addClasses} p-90 px-[5%] rounded-3xl bg-${bgColor} border border-black dark:border-white dark:text-black`}
>
	<div class="w-full flex flex-col items-center gap-90">
		<div class="w-full flex flex-col items-center gap-15">
			<h2 class="aos font-black text-64 text-center uppercase">{title}</h2>
			<p class="aos sm:w-[60%] w-9/12 text-24 text-center">
				{description}
			</p>
		</div>
		<slot />
	</div>
</ScrollWidthSection>
