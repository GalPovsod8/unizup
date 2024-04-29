<script lang="ts">
	import MainBtn from './MainBtn.svelte';
</script>

<form
	class="p-30 flex flex-col gap-20 bg-white dark:bg-black rounded-3xl border border-black dark:border-white drop-shadow-shadow hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
	action="/"
>
	<div class="flex flex-col gap-10">
		<h3 class="text-24 font-bold">OSTANI NA TEKOČEM</h3>
		<p class="text-20 text-justify">
			Izpolnji obrazec in nikoli ne zamudi UniPulz novičk in oznanil!
		</p>
	</div>
	<label class="text-20 font font-medium flex flex-col gap-10" for="email"
		>Email:
		<input
			class="font-normal p-3 rounded-xl border dark:bg-black border-black dark:border-white"
			name="email"
			type="email"
		/>
	</label>
	<MainBtn
		btnHref="/"
		btnText="NAROČI SE"
		textSize={'24'}
		isDarkBgVariant={true}
		hasMaxWidth={false}
	/>
</form>
