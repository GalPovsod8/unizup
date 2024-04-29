<script lang="ts">
	import Aos from './AOS.svelte';
</script>

<Aos>
	<div class={`aos absolute w-[90%] grid grid-cols-1 md:grid-cols-5 gap-30`}>
		<figure
			class="relative group w-full col-span-2 md:col-span-1 md:row-span-2 overflow-hidden rounded-3xl border border-black dark:border-white"
		>
			<img
				class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
				src="http://unizup.si/wp-content/uploads/2024/01/IMG_3976.jpg"
				alt="Uniphoto1"
			/>
		</figure>
		<figure
			class="aos relative group w-full col-span-1 md:row-start-3 overflow-hidden rounded-3xl border border-black dark:border-white"
		>
			<img
				class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
				src="http://unizup.si/wp-content/uploads/2024/01/IMG_3977.jpg"
				alt="Uniphoto2"
			/>
		</figure>
		<figure
			class="aos relative hidden md:block group w-full md:col-start-2 md:col-span-2 md:row-span-2 overflow-hidden rounded-3xl border border-black dark:border-white"
		>
			<img
				class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
				src="http://unizup.si/wp-content/uploads/2024/01/IMG_3988.jpg"
				alt="Uniphoto2"
			/>
		</figure>
		<figure
			class="aos relative group h-[15rem] w-full md:col-start-2 col-span-3 md:row-span-1 overflow-hidden rounded-3xl border border-black dark:border-white"
		>
			<img
				class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
				src="http://unizup.si/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-15-at-12.48.57-1.jpeg"
				alt="Uniphoto2"
			/>
		</figure>
		<figure
			class="aos relative group w-full md:col-start-5 md:row-start-2 md:row-span-2 overflow-hidden rounded-3xl border border-black dark:border-white"
		>
			<img
				class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
				src="http://unizup.si/wp-content/uploads/2024/01/IMG_3979.jpg"
				alt="Uniphoto2"
			/>
		</figure>
		<figure
			class="aos relative group w-full md:col-start-4 md:row-start-2 overflow-hidden rounded-3xl border border-black dark:border-white"
		>
			<img
				class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
				src="http://unizup.si/wp-content/uploads/2024/01/IMG_3985.jpg"
				alt="Uniphoto2"
			/>
		</figure>
		<figure
			class="aos relative group h-[15rem] w-full md:col-start-4 md:col-span-2 md:row-start-1 md:row-span-1 overflow-hidden rounded-3xl border border-black dark:border-white"
		>
			<img
				class={`h-full w-full rounded-3xl object-cover scale-105 group-hover:scale-100 transition-all ease-in-out duration-150`}
				src="http://unizup.si/wp-content/uploads/2024/01/IMG_3971-scaled.jpeg"
				alt="Uniphoto2"
			/>
		</figure>
	</div>
</Aos>
