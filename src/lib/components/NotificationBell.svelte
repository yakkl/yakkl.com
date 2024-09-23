<script lang="ts">
  import { onMount } from 'svelte';
  import { clickOutside } from './clickOutside';

  export let notifications: { id: number; message: string }[] = [];

  // SVG path for bell icon
  const bellIconPath = "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9";

  let showNotifications = false;
  let isSwinging = false;
  let isHovering = false;

  $: swingClass = (isSwinging || isHovering) && notifications.length > 0 ? 'animate-swing' : '';

  function toggleNotifications() {
    if (notifications.length > 0) {
      showNotifications = !showNotifications;
    }
  }

  function closeNotifications() {
    showNotifications = false;
  }

  function handleNotificationClick(notification) {
    alert(`Clicked notification: ${JSON.stringify(notification)}`);
    closeNotifications();
  }

  onMount(() => {
    if (notifications.length > 0) {
      isSwinging = true;
      setTimeout(() => {
        isSwinging = false;
      }, 7000);
    }
  });
</script>

<div class="relative" use:clickOutside on:outclick={closeNotifications}>
  <button 
    on:click={toggleNotifications}
    class={`focus:outline-none ${notifications.length > 0 ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 cursor-not-allowed'}`}
    disabled={notifications.length === 0}
    on:mouseenter={() => { isHovering = true; }}
    on:mouseleave={() => { isHovering = false; }}
  >
    <div class="relative">
      <svg 
        class={`h-6 w-6 transition-transform duration-200 ease-in-out ${swingClass}`} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d={bellIconPath} />
      </svg>
      {#if notifications.length > 0}
        <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
          {notifications.length}
        </span>
      {/if}
    </div>
  </button>
  {#if showNotifications}
    <div class="absolute right-0 mt-2 w-80 bg-gray-800 rounded-md shadow-lg overflow-hidden z-20">
      <div class="py-2">
        <div class="px-4 py-2 text-lg font-semibold text-gray-100 flex justify-between items-center">
          <span>Notifications</span>
          <button on:click={closeNotifications} class="text-gray-400 hover:text-gray-200">
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <hr class="border-gray-700">
        <div class="max-h-60 overflow-y-auto">
          {#each notifications as notification}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div 
              class="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              on:click={() => handleNotificationClick(notification)}
            >
              <p class="text-sm text-gray-300">{notification.message}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  @keyframes swing {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(15deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(-15deg); }
    100% { transform: rotate(0deg); }
  }

  .animate-swing {
    animation: swing 0.5s ease-in-out infinite;
  }
</style>
