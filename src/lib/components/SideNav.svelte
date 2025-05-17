<script lang="ts">
	import { toggleSideNav, getIsSideNavOpen } from '$lib/state.svelte';
	import LayoutSidebarLeftCollapse from './icons/LayoutSidebarLeftCollapse.svelte';
	import LayoutSidebarLeftExpand from './icons/LayoutSidebarLeftExpand.svelte';
</script>

<div class="side-nav bg-gray-900 text-gray-100 h-dvh">
	<div class="button-wrapper text-right">
		<button
			class="text-white bg-violet-500 p-3 -mr-6 cursor-pointer mt-4 shadow-sm rounded-full"
			onclick={() => toggleSideNav()}
		>
			{#if getIsSideNavOpen()}
				<LayoutSidebarLeftCollapse />
			{:else}
				<LayoutSidebarLeftExpand />
			{/if}
		</button>
	</div>
	<nav class="bg-yellow-700 mt-2">
		<ul>
			<li>Home</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	</nav>
</div>
