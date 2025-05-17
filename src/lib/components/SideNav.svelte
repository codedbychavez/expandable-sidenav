<script lang="ts">
  import { toggleSideNav } from "$lib/state.svelte";

  interface Props {
    isSideNavOpen: boolean;
  }
</script>

<div class="side-nav bg-gray-50 text-gray-900 h-dvh">
  <div class="button-wrapper text-right">
    <button class="text-black bg-amber-300 py-2 px-3 -mr-6 cursor-pointer rounded-r-2xl mt-4 shadow-sm" onclick="{() => toggleSideNav()}">X</button>
  </div>
  <nav>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
</div>