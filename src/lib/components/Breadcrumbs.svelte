<script lang="ts">
	export let path: string;
	let crumbs: any[];

	function formatAndCapitalize(string: string) {
		const stringWithSpaces = string.replace(/_/g, ' ');
		const words = stringWithSpaces.split(' ');
		const capitalizedWords = words.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		});
		return capitalizedWords.join(' ');
	}

	$: {
		const tokens = path.split('/').filter((t: any) => t !== '');

		let tokenPath = '';
		crumbs = tokens.map((t: any) => {
			tokenPath += '/' + t;
			return {
				label: formatAndCapitalize(t),
				href: tokenPath
			};
		});

		crumbs.unshift({ label: 'Domov', href: '/' });
	}
</script>

<div class="text-16 md:text-20">
	{#each crumbs as c, i}
		{#if i == crumbs.length - 1}
			<a class="font-semibold text-moreRed dark:text-moreRedDark" href={c.href}>{c.label}</a>
		{:else}
			<a href={c.href}>{c.label}</a> &gt;&nbsp;
		{/if}
	{/each}
</div>
