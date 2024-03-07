<script lang="ts">
	export let tagName: string;
</script>

<a
	data-sveltekit-reload
	class:bg-tagBlue={tagName == 'Duhovno'}
	class:bg-redTag={tagName == 'Dogodek'}
	class:bg-novicaTagYellow={tagName == 'Novica'}
	class={`font-medium text-white rounded-xl border border-black dark:border-white p-3 transition-all ease-in-out duration-150`}
	href="/unipulz?tag={tagName}"
>
	{tagName}
</a>
