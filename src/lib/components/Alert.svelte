<script lang="ts">
	export let good: boolean;
	export let message: string;
	export let hide: boolean = false;
</script>

<div
	class:hidden={hide}
	class:bg-green={good}
	class:bg-red={!good}
	class="w-full max-w-[950px] animate-show flex justify-between rounded-3xl p-15 font-medium text-20 border border-black dark:border-white drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
>
	<p>{message}</p>
	<button
		on:click={() => {
			hide = true;
		}}
		class="hover:cursor-pointer hover:opacity-80 transition-all ease-in-out duration-150"
	>
		X
	</button>
</div>
