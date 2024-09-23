<script lang="ts">
  import { clickOutside } from './clickOutside';

  export let sidebarMode: 'full' | 'reduced' | 'icon';

  let user = {
    name: 'YAKKL, Inc.',
    email: 'hans.jones@yakkl.com',
    avatar: 'Y'
  };

  let showMenu = false;

  function toggleMenu() {
    showMenu = !showMenu;
  }

  function closeMenu() {
    showMenu = false;
  }

  $: popupLeftPosition = sidebarMode === 'full' ? 'left-64' : sidebarMode === 'reduced' ? 'left-20' : 'left-16';
</script>

<div class="relative" use:clickOutside on:outclick={closeMenu}>
  <button
    on:click={toggleMenu}
    class="w-full flex items-center px-4 py-3 hover:bg-gray-200 focus:outline-none"
  >
    <div class="flex-shrink-0">
      <span class="inline-block h-8 w-8 rounded-full bg-gray-300 text-center leading-8 text-gray-700">
        {user.avatar}
      </span>
    </div>
    {#if sidebarMode === 'full'}
      <div class="ml-3 text-left">
        <p class="text-sm font-medium text-gray-900">{user.name}</p>
        <p class="text-xs font-medium text-gray-500">{user.email}</p>
      </div>
      <svg class="ml-auto h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    {/if}
  </button>

  {#if showMenu}
    <div class={`fixed ${popupLeftPosition} bottom-12 w-56 bg-white rounded-md shadow-lg overflow-hidden z-50`}>
      <div class="py-2">
        <div class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          User Menu
        </div>
        <hr class="border-gray-200">
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">What's new?</a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Billing</a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Integrations</a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
        <hr class="border-gray-200">
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Log out</a>
      </div>
    </div>
  {/if}
</div>
