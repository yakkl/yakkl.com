<script lang="ts">
  import { goto } from '$app/navigation';
  import NotificationBell from './NotificationBell.svelte';
  import CallToActionBar from './CallToActionBar.svelte';
  import { sidebarStore } from './sidebarStore';

  export let isMobile = false;
  export let toggleMobileMenu: () => void;

  // SVG path for search icon
  const searchIconPath = "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z";

  // Notifications data
  let notifications = [
    { id: 1, message: "New message from John" },
    { id: 2, message: "Your order has been shipped" },
    { id: 3, message: "Payment received" },
  ];

  function handleLogoClick() {
    goto('/admin');
  }

  function toggleSidebar() {
    sidebarStore.update(state => {
      const modes: Array<'full' | 'reduced' | 'icon'> = ['full', 'reduced', 'icon'];
      const currentIndex = modes.indexOf(state.mode);
      const nextIndex = (currentIndex + 1) % modes.length;
      return {
        ...state,
        mode: modes[nextIndex]
      };
    });
  }
</script>

<header class="bg-gray-950 shadow-sm z-10 sticky top-0">
  <div class="max-w-full mx-auto px-4 h-16 flex items-center justify-between">
    <!-- Left section -->
    <div class="flex items-center space-x-4">
      {#if isMobile}
        <button on:click={toggleMobileMenu} class="text-gray-300 hover:text-gray-100">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      {:else}
        <button on:click={toggleSidebar} class="text-gray-300 hover:text-gray-100">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h8" />
          </svg>
        </button>
      {/if}
      <button on:click={handleLogoClick} class="focus:outline-none">
        <img src="/images/logoBullFav48x48.png" alt="YAKKL Logo" class="h-8 w-8">
      </button>
      {#if !isMobile}
        <div class="relative">
          <input type="text" placeholder="Search" class="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-200 placeholder-gray-400">
          <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d={searchIconPath} />
          </svg>
        </div>
      {/if}
    </div>

    <!-- Middle section -->
    {#if !isMobile}
      <div class="flex-grow flex justify-center">
        <CallToActionBar />
      </div>
    {/if}

    <!-- Right section -->
    <div class="flex items-center space-x-4">
      <NotificationBell {notifications} />
      {#if !isMobile}
        <button class="text-gray-300 hover:text-gray-100">Account Plans</button>
        <button class="text-gray-300 hover:text-gray-100">Support</button>
      {/if}
    </div>
  </div>
</header>
