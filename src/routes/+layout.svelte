<script>
	let { children } = $props();
	import "../app.css";
	import SideNav from '$lib/components/SideNav.svelte';
	import { getIsSideNavOpen } from "$lib/state.svelte";

</script>

<div class={ getIsSideNavOpen() ? 'w-60' : 'w-16'}>
	<SideNav />
</div>
<div class="rest-of-page">
	{@render children()}
</div>
