<script lang="ts">
  import { onMount } from 'svelte';
  import { sidebarStore } from './sidebarStore';
  import type { MenuItem } from './MenuItem';
  import UserMenu from './UserMenu.svelte';
  import { clickOutside } from './clickOutside';

  let menuItems: MenuItem[] = [
    { label: 'Home', iconPaths: ['M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'], href: '/' },
    { label: 'Campaigns', iconPaths: ['M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'], href: '/campaigns' },
    { label: 'Flows', iconPaths: ['M13 10V3L4 14h7v7l9-11h-7z'], href: '/flows' },
    { label: 'Sign-up forms', iconPaths: ['M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'], href: '/forms' },
    { 
      label: 'Audience', 
      iconPaths: ['M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'],
      children: [
        { label: 'Segments', href: '/audience/segments', iconPaths: ['M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z'] },
        { label: 'Profiles', href: '/audience/profiles', iconPaths: ['M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'] }
      ]
    },
    { 
      label: 'Content', 
      iconPaths: ['M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'],
      children: [
        { label: 'Templates', href: '/content/templates', iconPaths: ['M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'] },
        { label: 'Media', href: '/content/media', iconPaths: ['M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'] }
      ]
    },
    { 
      label: 'Analytics', 
      iconPaths: ['M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'],
      children: [
        { label: 'Reports', href: '/analytics/reports', iconPaths: ['M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'] },
        { label: 'Metrics', href: '/analytics/metrics', iconPaths: ['M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'] }
      ]
    },
    { label: 'Conversations', iconPaths: ['M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'], href: '/conversations' },
  ];

  let openItems = new Set();
  let sidebarMode: 'full' | 'reduced' | 'icon';
  let isOpen: boolean;

  sidebarStore.subscribe(state => {
    sidebarMode = state.mode;
    isOpen = state.isOpen;
  });

  function toggleItem(label: string) {
    if (openItems.has(label)) {
      openItems.delete(label);
    } else {
      openItems.add(label);
    }
    openItems = openItems;
  }

  function handleClickOutside(label: string) {
    openItems.delete(label);
    openItems = openItems;
  }
</script>

<aside class={`bg-gray-100 text-gray-800 transition-all duration-300 ${sidebarMode === 'full' ? 'w-64' : sidebarMode === 'reduced' ? 'w-20' : 'w-16'}`}>
  <nav class="flex flex-col h-full">
    <div class="flex-grow overflow-y-auto">
      {#each menuItems as item}
        {#if item.children}
          <div class="relative" use:clickOutside on:outclick={() => handleClickOutside(item.label)}>
            <button
              on:click={() => toggleItem(item.label)}
              class="w-full flex items-center px-4 py-2 hover:bg-gray-200"
            >
              <svg class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                {#each item.iconPaths as path}
                  <path stroke-linecap="round" stroke-linejoin="round" d={path} />
                {/each}
              </svg>
              {#if sidebarMode !== 'icon'}
                <span class={sidebarMode === 'reduced' ? 'sr-only' : ''}>{item.label}</span>
                <svg class="ml-auto h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              {/if}
            </button>
            {#if openItems.has(item.label)}
              <div class={sidebarMode === 'full' ? 'pl-4 mt-2 border-l-2 border-gray-300 ml-6' : 'fixed left-20 top-auto mt-2 w-56 bg-white rounded-md shadow-lg overflow-hidden z-40'}>
                {#if sidebarMode !== 'full'}
                  <div class="px-4 py-2 font-semibold text-gray-700 border-b border-gray-200">
                    {item.label}
                  </div>
                {/if}
                {#each item.children as child}
                  <a href={child.href} class="flex items-center py-2 px-4 text-sm hover:bg-gray-200">
                    {#if child.iconPaths}
                      <svg class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        {#each child.iconPaths as path}
                          <path stroke-linecap="round" stroke-linejoin="round" d={path} />
                        {/each}
                      </svg>
                    {/if}
                    {child.label}
                  </a>
                {/each}
              </div>
            {/if}
          </div>
        {:else}
          <a
            href={item.href}
            class="flex items-center px-4 py-2 hover:bg-gray-200"
          >
            <svg class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              {#each item.iconPaths as path}
                <path stroke-linecap="round" stroke-linejoin="round" d={path} />
              {/each}
            </svg>
            {#if sidebarMode !== 'icon'}
              <span class={sidebarMode === 'reduced' ? 'sr-only' : ''}>{item.label}</span>
            {/if}
          </a>
        {/if}
      {/each}
    </div>
    <div class="mt-auto">
      <UserMenu {sidebarMode} />
    </div>
  </nav>
</aside>

<style>
  /* Add any additional styles here if needed */
</style>
