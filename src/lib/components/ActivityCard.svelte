<script lang="ts">
	export let activityName: string;
	export let activityDay: string = '';
	export let activityTime: string = '';
	export let index: number;
	export let hasAll: boolean = true;

	const colors = ['#FDD708', '#92EBFF', '#FF7D7D', '#7DFF7D'];

	const getColor = (index: number) => colors[index % colors.length];
</script>

<div
	class="h-full py-30 px-[20px] w-full flex flex-col items-center justify-center gap-15 text-center dark:text-black border border-black dark:border-white rounded-3xl drop-shadow-shadowSm hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
	style="background-color: {getColor(index)};"
>
	<h3 class="font-bold text-20">{activityName}</h3>
	{#if hasAll}
		<p>{activityDay}</p>
		<p>{activityTime}</p>
	{/if}
</div>
