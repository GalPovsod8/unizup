<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import Alert from './Alert.svelte';

	let result: any;
	let alertVisible: boolean = false;
	let alertGood: boolean = false;
	let alertMessage: string = '';

	$: showAlert = (good: boolean, message: string) => {
		alertGood = good;
		alertMessage = message;
		alertVisible = true;

		setTimeout(() => {
			alertVisible = false;
		}, 5000);
	};
</script>

<form
	use:enhance={({ formElement }) => {
		return async ({ result: formResult, update }) => {
			result = formResult;
			if (result.type === 'success') {
				formElement.reset();
				showAlert(true, 'Uspešno ste se naročali na novice Unizup!');
				result = null;
			} else if (result.type === 'failure') {
				if (result.data.missing) {
					showAlert(false, 'Vnesite email!');
				} else if (result.data.alreadySubscribed) {
					showAlert(false, 'Email že obstaja v bazi podatkov - ste že naročeni!');
				}
				await applyAction(result);
			}
			update();
		};
	}}
	method="POST"
	class="aos p-30 flex flex-col gap-20 bg-white dark:bg-black rounded-3xl border border-black dark:border-white drop-shadow-shadow hover:drop-shadow-shadowHover transition-all ease-in-out duration-150"
	action="/newsletter?/subscribe"
>
	<div class="flex flex-col gap-10">
		<h3 class="text-24 font-bold">OSTANI NA TEKOČEM</h3>
		<p class="text-20 text-justify">
			Izpolnji obrazec in nikoli ne zamudi UniPulz novičk in oznanil!
		</p>
	</div>
	<label class="text-20 font font-medium flex flex-col gap-10" for="email">
		Email:
		<input
			class="font-normal p-3 rounded-xl border dark:bg-black border-black dark:border-white"
			name="email"
			type="email"
		/>
	</label>
	{#if alertVisible}
		<Alert good={alertGood} message={alertMessage} />
	{/if}
	<button
		type="submit"
		class="w-full text-24 flex items-center text-center justify-center hover:bg-opacity-90 text-white border rounded-2xl px-7 py-3 font-bold bg-black dark:text-white dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all ease-in-out duration-150"
	>
		NAROČI SE
	</button>
</form>
