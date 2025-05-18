<script>
	let { children } = $props();

	import '../app.css';
	import SideNav from '$lib/components/SideNav.svelte';
	import { getIsSideNavOpen } from '$lib/state.svelte';
</script>

<svelte:head>
	<title>Expandable SideNav</title>
	<meta name="description" content="An expandable left sidebar made with Svelte and Tailwind CSS." />
</svelte:head>

<div class="app-wrapper flex w-full h-full">
	<div class="side-nav-wrapper h-dvh {getIsSideNavOpen() ? 'w-60' : 'w-17'}">
		<SideNav />
	</div>

	<div class="rest-of-page bg-gray-200 w-full">
		{@render children()}
	</div>
</div>

<style>

	.side-nav-wrapper {
		transition: width .2s;
		transition-delay: .02s;
		transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
		overflow: hidden;
	}
</style>
