<script lang="ts">
	import Aos from '$lib/components/AOS.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
</script>

<div>Sv. Janez Pavel II</div>
<Aos>
	<div class="w-full flex flex-col items-center min-h-screen">
		<PageTitle
			pageTitle="Sv. Janez Pavel II."
			pageDescription="Naš zavetnik"
			pageScrollLink="#svJanezPavelDrugi"
		/>
		<section
			id="svJanezPavelDrugi"
			class="aos relative w-full p-90 px-[5%] grid grid-cols-1 xl:grid-cols-2 min-[1750px]:grid-cols-5 gap-90 rounded-3xl bg-white dark:bg-black border border-black dark:border-white"
		></section>
	</div>
</Aos>
