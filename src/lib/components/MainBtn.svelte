<script lang="ts">
	export let btnText: string;
	export let btnHref: string;
</script>

<a
	href={btnHref}
	class="w-full max-w-96 flex items-center justify-center bg-white text-black border border-black rounded-2xl px-7 py-3 font-bold text-32 dark:bg-black dark:text-white dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all ease-in-out duration-150"
	>{btnText}</a
>
