<script lang="ts">
	let scroll: number;
	let speed1: number = 4;
	let speed2: number = 10;
	let speed3: number = 8;
	let speed1x: number = 20;
	let speed2x: number = 22;
	let speed3x: number = 24;
</script>

<svelte:window bind:scrollY={scroll} />

<div
	style:transform={`translate3d(${scroll / speed1x}px, ${scroll / speed1}px, 0)`}
	class="fixed z-0 size-4 md:size-8 bg-moreRed dark:bg-moreRedDark opacity-50 top-[140px] left-[8%] rounded-xl animate-customPulse"
></div>
<div
	style:transform={`translate3d(${scroll / speed2x}px, ${scroll / speed2}px, 0)`}
	class="fixed z-0 size-6 md:size-10 bg-yellow opacity-50 top-[240px] left-[17%] rounded-2xl animate-customPulse2"
></div>
<div
	style:transform={`translate3d(${scroll / speed3x}px, ${scroll / speed3}px, 0)`}
	class="fixed z-0 size-8 md:size-16 bg-blue opacity-50 top-[380px] left-[11%] rounded-3xl animate-customPulse3"
></div>
<div class=" relative z-10">
	<slot />
</div>
<div
	style:transform={`translate3d(-${scroll / speed3}px, ${scroll / speed3}px, 0)`}
	class="fixed z-0 size-8 md:size-16 bg-blue opacity-50 top-[380px] right-[11%] rounded-3xl animate-customPulse3"
></div>
<div
	style:transform={`translate3d(-${scroll / speed2x}px, ${scroll / speed2}px, 0)`}
	class="fixed z-0 size-6 md:size-10 bg-yellow opacity-50 top-[240px] right-[17%] rounded-2xl animate-customPulse2"
></div>
<div
	style:transform={`translate3d(-${scroll / speed3x}px, ${scroll / speed1}px, 0)`}
	class="fixed z-0 size-4 md:size-8 bg-moreRed dark:bg-moreRedDark opacity-50 top-[140px] right-[8%] rounded-xl animate-customPulse"
></div>
