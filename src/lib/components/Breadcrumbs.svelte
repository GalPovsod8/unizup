<script lang="ts">
	export let path: string;
	let crumbs: any[];

	$: {
		const tokens = path.split('/').filter((t: any) => t !== '');

		let tokenPath = '';
		crumbs = tokens.map((t: any) => {
			tokenPath += '/' + t;
			return {
				label: t,
				href: tokenPath
			};
		});

		crumbs.unshift({ label: 'Domov', href: '/' });
	}
</script>

<div class="text-16 md:text-20">
	{#each crumbs as c, i}
		{#if i == crumbs.length - 1}
			<a class="font-semibold text-moreRed" href={c.href}>{c.label}</a>
		{:else}
			<a href={c.href}>{c.label}</a> &gt;&nbsp;
		{/if}
	{/each}
</div>
