<script lang="ts">
	export let btnText: string;
	export let btnHref: string;
	export let hasMaxWidth: boolean = true;
	export let isDarkBgVariant: boolean = false;
	export let isExternal: boolean = false;
	export let textSize: string = '32';
	export let addClasses: string = '';
	$: target = isExternal ? '_blank' : null;
</script>

<a
	class:bg-black={isDarkBgVariant}
	class:bg-white={!isDarkBgVariant}
	class:text-white={isDarkBgVariant}
	class:max-w-96={hasMaxWidth}
	href={btnHref}
	{target}
	class={`aos ${addClasses} w-full flex items-center text-center justify-center hover:bg-opacity-90 text-black border border-black rounded-2xl px-7 py-3 font-bold text-${textSize} dark:bg-black dark:text-white dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all ease-in-out duration-150`}
	>{btnText}</a
>
