<script lang="ts">
	export let tagName: string;
	let href: string;

	$: tagName == 'Vse' ? (href = '/unipulz') : (href = `/unipulz?tag=${tagName}`);
</script>

<a
	data-sveltekit-noscroll
	class:bg-white={tagName == 'Vse'}
	class:text-black={tagName == 'Vse'}
	class:text-white={tagName == 'Duhovno' || tagName == 'Dogodek' || tagName == 'Novica'}
	class:bg-tagBlue={tagName == 'Duhovno'}
	class:bg-redTag={tagName == 'Dogodek'}
	class:bg-novicaTagYellow={tagName == 'Novica'}
	class={`font-medium rounded-xl hover:opacity-80 border border-black dark:border-white p-3 transition-all ease-in-out duration-150`}
	{href}
>
	{tagName}
</a>
