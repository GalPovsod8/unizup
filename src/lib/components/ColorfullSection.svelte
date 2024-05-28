<script lang="ts">
	import ScrollWidthSection from './ScrollWidthSection.svelte';
	export let id = '';
	export let title;
	export let description;
	export let addClasses = '';
	export let bgColor = 'blue';
	export let starColor = 'yellow';
</script>

<ScrollWidthSection
	{id}
	classes={`${addClasses} p-90 px-[5%] rounded-3xl bg-${bgColor} dark:bg-black dark:text-white border border-black dark:border-white dark:text-black`}
>
	<div class="w-full flex flex-col items-center gap-90">
		<div class="w-full flex items-center justify-around">
			<img
				class={`hidden md:block size-16 fill-${starColor} animate-customPulse`}
				src="/star.svg"
				alt="*"
			/>
			<div class=" w-full xl:w-9/12 2xl:w-[60%] flex flex-col items-center gap-15">
				<h2 class="aos font-black text-40 md:text-64 text-center uppercase">{title}</h2>
				<p class="aos text-24 text-center">
					{description}
				</p>
			</div>
			<img
				class={`hidden md:block size-16 fill-${starColor} animate-customPulse2`}
				src="/star.svg"
				alt="*"
			/>
		</div>
		<slot />
	</div>
</ScrollWidthSection>
