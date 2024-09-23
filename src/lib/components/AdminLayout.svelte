<script lang="ts">
  import { onMount } from 'svelte';
  import HeaderStatic from './HeaderStatic.svelte';
  import Sidebar from './Sidebar.svelte';
  import { sidebarStore } from './sidebarStore';

  let isMobile = false;
  let showMobileMenu = false;

  onMount(() => {
    const checkMobile = () => {
      isMobile = window.innerWidth < 768;
      if (!isMobile) showMobileMenu = false;
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  });

  function toggleMobileMenu() {
    showMobileMenu = !showMobileMenu;
  }
</script>

<div class="flex flex-col h-screen bg-gray-100">
  <HeaderStatic {isMobile} {toggleMobileMenu} />
  
  <div class="flex flex-1 overflow-hidden">
    {#if !isMobile || showMobileMenu}
      <Sidebar />
    {/if}
    
    <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
      <slot />
    </main>
  </div>
</div>
