<script lang="ts">
	import '../app.css';
</script>

<div
	class="max-w-[1920px] min-h-screen mx-auto px-[5%] leading-none bg-gradient-to-r from-white via-blue/40 to-white dark:from-black dark:via-blue/90 dark:to-black text-black dark:text-white"
>
	<main class="flex flex-col gap-120">
		<slot />
	</main>
</div>
