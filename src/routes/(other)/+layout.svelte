<script lang="ts">
	function ToggleTheme() {
		if (localStorage.theme === 'dark') {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
		} else {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
		}
	}

	let isMobileMenuToggle: boolean = false;

	function ToggleMobile() {
		isMobileMenuToggle = !isMobileMenuToggle;
	}
</script>

<header
	class="absolute top-0 w-full px-[5%] py-3 flex items-center justify-between border-b border-black dark:border-white"
>
	<a
		class="flex z-50 items-center gap-10 text-24 font-medium hover:opacity-80 transition-all ease-in-out duration-150"
		href="/"
		aria-label="domov"
	>
		<img class="h-12" src="/unizupLogo.png" alt="Unizup" />
		Unizup
	</a>
	<div
		class={`absolute justify-center md:top-auto  ${isMobileMenuToggle ? 'top-0' : '-top-[1000px]'} bg-[#E7D8C9] dark:bg-black md:dark:bg-transparent md:bg-transparent left-0 md:relative h-screen md:h-max w-full md:w-max flex flex-col md:flex-row items-center gap-30 md:gap-15 transition-all ease-in-out duration-150`}
	>
		<nav class="flex flex-col font-medium md:flex-row items-center gap-20 text-24 md:text-16">
			<a class="hover:opacity-80 transition-all ease-in-out duration-150" href="/">Domov</a>
			<a class="hover:opacity-80 transition-all ease-in-out duration-150" href="/unipulz">UniPulz</a
			>
			<a class="hover:opacity-80 transition-all ease-in-out duration-150" href="/">Kaj zaj?</a>
			<a class="hover:opacity-80 transition-all ease-in-out duration-150" href="/">Duhovnost</a>
			<a class="hover:opacity-80 transition-all ease-in-out duration-150" href="/">O Nas</a>
		</nav>
		<div class="h-6 w-0.5 bg-black dark:bg-white hidden md:block"></div>
		<button
			on:click={ToggleTheme}
			aria-label="Dark/light mode toggle"
			class="h-6 w-6 rounded-full bg-black dark:bg-white hover:opacity-80 ease-in-out duration-150"
		></button>
	</div>
	<button
		on:click={ToggleMobile}
		class="flex z-50 md:hidden flex-col gap-[4px] hover:opacity-80 transition-all ease-in-out duration-150"
	>
		<div
			class:rotate-45={isMobileMenuToggle}
			class="h-[3px] w-5 bg-black dark:bg-white transition-all ease-in-out duration-150"
		></div>
		<div
			class:-rotate-45={isMobileMenuToggle}
			class="h-[3px] w-5 bg-black dark:bg-white transition-all ease-in-out duration-150"
		></div>
		<div
			class:opacity-0={isMobileMenuToggle}
			class="h-[3px] w-5 bg-black dark:bg-white transition-all ease-in-out duration-150"
		></div>
	</button>
</header>
<div class="flex flex-col gap-120 px-[5%]">
	<slot />
</div>
