<script lang="ts">
	import { toggleSideNav, getIsSideNavOpen } from '$lib/state.svelte';
	import Dashboard from './icons/Dashboard.svelte';
	import LayoutSidebarLeftCollapse from './icons/LayoutSidebarLeftCollapse.svelte';
	import LayoutSidebarLeftExpand from './icons/LayoutSidebarLeftExpand.svelte';
	import Logout from './icons/Logout.svelte';
	import Plug from './icons/Plug.svelte';
	import Settings from './icons/Settings.svelte';
	import Speakerphone from './icons/Speakerphone.svelte';
	import User from './icons/User.svelte';
</script>

<div class="side-nav bg-gray-900 text-gray-100 h-full flex flex-col">
	<div class="{!getIsSideNavOpen() &&
					'text-center'} button-wrapper mt-4 px-5">
		<button
			class="text-white cursor-pointer"
			onclick={() => toggleSideNav()}
		>
			{#if getIsSideNavOpen()}
				<LayoutSidebarLeftCollapse />
			{:else}
				<LayoutSidebarLeftExpand />
			{/if}
		</button>
	</div>
	<nav class="mt-8">
		<ul>
			<li
				class="{!getIsSideNavOpen() &&
					'justify-center'} flex p-5 my-4 hover:bg-gray-700 cursor-pointer"
			>
				{#if getIsSideNavOpen()}
					Dashboard
				{:else}
					<Dashboard />
				{/if}
			</li>
			<li
				class="{!getIsSideNavOpen() &&
					'justify-center'} flex p-5 my-4 hover:bg-gray-700 cursor-pointer"
			>
				{#if getIsSideNavOpen()}
					Integrations
				{:else}
					<Plug />
				{/if}
			</li>
			<li
				class="{!getIsSideNavOpen() &&
					'justify-center'} flex p-5 my-4 hover:bg-gray-700 cursor-pointer"
			>
				{#if getIsSideNavOpen()}
					Settings
				{:else}
					<Settings />
				{/if}
			</li>
		</ul>
	</nav>

	<nav class="mt-auto">
		<ul>
			<li
				class="{!getIsSideNavOpen() &&
					'justify-center'} flex p-5 my-4 hover:bg-gray-700 cursor-pointer"
			>
				{#if getIsSideNavOpen()}
					Account
				{:else}
					<User />
				{/if}
			</li>
			<li
				class="{!getIsSideNavOpen() &&
					'justify-center'} flex p-5 my-4 hover:bg-gray-700 cursor-pointer"
			>
				{#if getIsSideNavOpen()}
					News & Events
				{:else}
					<Speakerphone />
				{/if}
			</li>
			<li
				class="{!getIsSideNavOpen() &&
					'justify-center'} flex p-5 my-4 hover:bg-gray-700 cursor-pointer"
			>
				{#if getIsSideNavOpen()}
					Logout
				{:else}
					<Logout />
				{/if}
			</li>
		</ul>
	</nav>
</div>
