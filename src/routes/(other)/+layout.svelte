<script lang="ts">
	import { browser } from '$app/environment';

	let darkMode = true;

	function ToggleTheme() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');

		if (isMobileMenuToggle) {
			isMobileMenuToggle = false;
		}
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}

	let isMobileMenuToggle: boolean = false;

	function ToggleMobile() {
		isMobileMenuToggle = !isMobileMenuToggle;
	}
</script>

<header
	class="absolute z-50 top-0 w-full px-[5%] py-3 flex items-center justify-between bg-headerBlue dark:bg-black border-b border-black dark:border-white"
>
	<a
		class="flex z-50 items-center gap-10 text-24 font-medium hover:opacity-80 transition-all ease-in-out duration-150"
		href="/"
		aria-label="domov"
	>
		<img class="h-12" src="/unizupLogo.png" alt="logo unizup" />
		Unizup
	</a>
	<div
		class={`absolute justify-center md:top-auto  ${isMobileMenuToggle ? 'top-0' : '-top-[1000px]'} bg-blue z-50 dark:bg-black md:dark:bg-transparent md:bg-transparent left-0 md:relative h-dvh md:h-max w-full md:w-max flex flex-col md:flex-row items-center gap-30 md:gap-15 transition-all ease-in-out duration-150`}
	>
		<nav class="flex flex-col font-medium md:flex-row items-center gap-20 text-24 md:text-16">
			<a class="hover:opacity-80 transition-all ease-in-out duration-150" href="/">Domov</a>
			<a
				on:click={() => (isMobileMenuToggle = false)}
				class="hover:opacity-80 transition-all ease-in-out duration-150"
				href="/unipulz">UniPulz</a
			>
			<a
				on:click={() => (isMobileMenuToggle = false)}
				class="hover:opacity-80 transition-all ease-in-out duration-150"
				href="/oznanila">Oznanila</a
			>
			<a
				on:click={() => (isMobileMenuToggle = false)}
				class="hover:opacity-80 transition-all ease-in-out duration-150"
				href="/duhovno">Duhovno</a
			>
			<a
				on:click={() => (isMobileMenuToggle = false)}
				class="hover:opacity-80 transition-all ease-in-out duration-150"
				href="/o_nas">O Nas</a
			>
		</nav>
		<div class="h-6 w-0.5 bg-black dark:bg-white hidden md:block"></div>
		<button
			on:click={ToggleTheme}
			aria-label="Dark/light mode toggle"
			class="h-6 w-6 rounded-full bg-black dark:bg-white hover:opacity-80 ease-in-out duration-150"
		></button>
	</div>
	<button
		aria-label="toggle navigation"
		on:click={ToggleMobile}
		class="flex z-50 md:hidden flex-col gap-[4px] hover:opacity-80 transition-all ease-in-out duration-150"
	>
		<div
			class:rotate-45={isMobileMenuToggle}
			class:w-[18px]={isMobileMenuToggle}
			class="h-[3px] w-5 bg-black dark:bg-white transition-all ease-in-out duration-150"
		></div>
		<div
			class:-rotate-45={isMobileMenuToggle}
			class:w-8={isMobileMenuToggle}
			class="h-[3px] w-5 bg-black dark:bg-white transition-all ease-in-out duration-150"
		></div>
		<div
			class:opacity-0={isMobileMenuToggle}
			class="h-[3px] w-5 bg-black dark:bg-white transition-all ease-in-out duration-150"
		></div>
	</button>
</header>
<div class="flex flex-col gap-120">
	<slot />
</div>
