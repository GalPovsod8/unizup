<script lang="ts">
	export let linkText: string;
	export let linkHref: string;
	export let fontSize: number = 32;
</script>

<a
	class={`md:col-span-2 lg:col-span-3 w-max flex items-center justify-center text-center font-bold text-${fontSize} mt-6 gap-[8px] hover:gap-[10px] hover:opacity-85 transition-all ease-in-out duration-150`}
	href={linkHref}
	>{linkText}
	<div class="h-max w-max">
		<div class="h-1 w-3 mb-0.5 bg-black dark:bg-white rotate-45"></div>
		<div class="h-1 w-3 bg-black dark:bg-white -rotate-45"></div>
	</div>
</a>
