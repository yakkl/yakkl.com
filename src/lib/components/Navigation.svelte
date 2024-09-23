<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { clickOutside } from './clickOutside';
  import type { MenuItem } from './MenuItem';
  import { goto } from '$app/navigation';

  export let transparent = false;
  export let isFixed = false;
  export let logo = '/images/logoBullFav48x48.png';
  export let pillLink = 'https://chrome.google.com/webstore/detail/1-yakkl%C2%AE-smart-wallet/dpmfhilhjlhhakpbieclcghochdofeao?utm_source=yakkl_web';
  export let pillText = 'Get started today!';

  export let menuItems: MenuItem[] = [
    { 
      label: 'Home', 
      href: '/', 
      type: 'link', 
      iconPaths: ['M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6']
    },
    { 
      label: 'Company', 
      type: 'dropdown',
      iconPaths: ['M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'],
      children: [
        { label: 'Company', type: 'title' },
        { label: 'About', href: '/company/about', type: 'link' },
        { label: 'Partnering', href: '/company/partnering', type: 'link' },
        { label: 'Contact Us', href: '/company/contactus', type: 'link' },
      ]
    },
    { 
      label: 'Crypto', 
      type: 'dropdown',
      children: [
        { label: 'Trading', type: 'title' },
        { label: 'Buy', href: '/crypto/buy', type: 'link' },
        { label: 'Sell/Swap', href: '/crypto/swap', type: 'link' },
      ]
    },
    { label: 'Support', href: '/university/support', type: 'link' },
  ];

  let mobileMenuOpen = false;
  let openDropdowns: { [key: string]: boolean } = {};

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function toggleDropdown(label: string, event: MouseEvent) {
    event.stopPropagation();
    openDropdowns = {
      ...openDropdowns,
      [label]: !openDropdowns[label]
    };
    console.log('Toggled dropdown:', label, openDropdowns[label]);
  }

  function handleOutclick(item: MenuItem) {
    openDropdowns[item.label] = false;
    if (item.children) {
      item.children.forEach(child => {
        if (child.children) {
          openDropdowns[child.label] = false;
        }
      });
    }
  }

  function handleNestedDropdownClick(e: MouseEvent, label: string) {
    e.stopPropagation();
    toggleDropdown(label, e);
  }

  function handleIconClick() {
    goto('/');
  }

  function handleDropdownClick(e: MouseEvent, item: MenuItem) {
    e.preventDefault();
    e.stopPropagation();
    toggleDropdown(item.label, e);
  }

  function getActiveClass(transparent: boolean) {
    return transparent
      ? 'bg-black/10 text-gray-900'
      : 'bg-gray-900 text-white';
  }

  function getHoverClass(transparent: boolean) {
    return transparent
      ? 'hover:bg-black/10 hover:text-gray-900'
      : 'hover:bg-gray-700 hover:text-white';
  }

  function positionDropdown(node: HTMLElement) {
    function position() {
      const rect = node.getBoundingClientRect();
      const parentRect = node.parentElement?.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Reset styles
      node.style.left = 'auto';
      node.style.right = 'auto';
      node.style.top = 'auto';
      node.style.bottom = 'auto';

      // Check if it's a top-level dropdown or a nested one
      const isNestedDropdown = node.classList.contains('nested-dropdown');

      if (isNestedDropdown) {
        // For nested dropdowns, position to the right by default
        if (rect.right + 200 > viewportWidth) {
          // Not enough space on the right, position to the left
          node.style.right = '100%';
          node.style.left = 'auto';
        } else {
          node.style.left = '100%';
          node.style.right = 'auto';
        }

        // Vertical positioning
        if (rect.bottom > viewportHeight) {
          // Not enough space at the bottom, position upwards
          node.style.bottom = '0';
          node.style.top = 'auto';
        } else {
          node.style.top = '0';
          node.style.bottom = 'auto';
        }
      } else {
        // For top-level dropdowns
        if (rect.right > viewportWidth) {
          // Not enough space on the right, align to the right edge
          node.style.right = '0';
          node.style.left = 'auto';
        } else {
          node.style.left = '0';
          node.style.right = 'auto';
        }

        // Vertical positioning
        if (parentRect && rect.bottom > viewportHeight) {
          // Not enough space at the bottom, position upwards
          node.style.bottom = `${parentRect.height}px`;
          node.style.top = 'auto';
        } else {
          node.style.top = '100%';
          node.style.bottom = 'auto';
        }
      }

      // Ensure the dropdown is at least partially visible
      const updatedRect = node.getBoundingClientRect();
      if (updatedRect.left < 0) {
        node.style.left = '0';
      }
      if (updatedRect.top < 0) {
        node.style.top = '0';
      }
    }

    position();
    window.addEventListener('resize', position);
    return {
      destroy() {
        window.removeEventListener('resize', position);
      }
    };
  }

  onMount(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        mobileMenuOpen = false;
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
</script>

<nav class={`w-full ${transparent ? 'bg-transparent' : 'bg-gray-800'} ${!isFixed ? '' : 'fixed top-0 left-0 right-0 z-50'} z-50`}>
  <div class="max-w-7xl mx-auto sm:px-2">
    <div class="relative">
      <!-- Top border and + signs -->
      <div class="absolute inset-x-0 top-0 h-px bg-black/5"></div>
      <div class="absolute inset-x-0 top-[.5rem] h-px bg-black/5"></div>
      <svg viewBox="0 0 15 15" class="absolute top-2 left-0 w-4 h-4 -translate-y-1/2 -translate-x-1/2 text-black/10 fill-current">
        <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
      </svg>
      <svg viewBox="0 0 15 15" class="absolute top-2 right-0 w-4 h-4 -translate-y-1/2 translate-x-1/2 text-black/10 fill-current">
        <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
      </svg>

      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <button 
            on:click={handleIconClick}
            class={`${transparent ? 'text-gray-800' : 'text-gray-300'} ${getHoverClass(transparent)} px-3 py-2 rounded-md text-sm font-medium`}
          >
            <img src={logo} alt="YAKKL® Logo" />
          </button>
        </div>
        {#if pillLink || pillText}
        <div class="relative hidden items-center py-3 lg:flex">
          <a class="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white hover:bg-fuchsia-950/30" href={pillLink} target="_blank">{pillText}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-4"><path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>
        {/if}
        <div class="hidden md:flex md:items-center md:justify-end md:flex-1">
          <div class="flex items-baseline space-x-4">
            {#each menuItems as item}
              {#if item.children}
                <div class="relative" use:clickOutside on:outclick={() => handleOutclick(item)}>
                  <button 
                    on:click={(e) => handleDropdownClick(e, item)}
                    class={`${transparent ? 'text-gray-800' : 'text-gray-300'} ${getHoverClass(transparent)} px-3 py-2 rounded-md text-sm font-medium flex items-center`}
                  >
                    {item.label}
                    <svg class="ml-2 h-4 w-4 transition-transform duration-200 ease-in-out" class:rotate-180={openDropdowns[item.label]} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {#if openDropdowns[item.label]}
                    <div class="absolute z-10 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" use:positionDropdown>
                      <div class="py-1">
                        {#each item.children as child}
                          {#if child.type === 'title'}
                            <h3 class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              {child.label}
                            </h3>
                          {:else if child.type === 'separator'}
                            <hr class="my-1 border-gray-200">
                          {:else if child.type === 'dropdown'}
                            <div class="relative" use:clickOutside on:outclick={() => handleOutclick(child)}>
                              <button 
                                on:click={(e) => handleNestedDropdownClick(e, child.label)}
                                class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
                              >
                                <span class="flex items-center">
                                  {#if child.iconPaths && child.iconPaths.length > 0}
                                    <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      {#each child.iconPaths as path}
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={path} />
                                      {/each}
                                    </svg>
                                  {:else}
                                    <span class="w-5 mr-3"></span>
                                  {/if}
                                  <span class="truncate">{child.label}</span>
                                </span>
                                <svg class="ml-2 h-4 w-4 transition-transform duration-200 ease-in-out" class:rotate-90={openDropdowns[child.label]} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                              {#if openDropdowns[child.label]}
                                <div class="absolute z-20 left-full top-0 mt-0 -ml-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 nested-dropdown" use:positionDropdown>
                                  <div class="py-1">
                                    {#each child.children as grandchild}
                                      {#if grandchild.type === 'title'}
                                        <h3 class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                          {grandchild.label}
                                        </h3>
                                      {:else if grandchild.type === 'separator'}
                                        <hr class="my-1 border-gray-200">
                                      {:else}
                                        <a href={grandchild.href} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 items-center">
                                          {#if grandchild.iconPaths && grandchild.iconPaths.length > 0}
                                            <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              {#each grandchild.iconPaths as path}
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={path} />
                                              {/each}
                                            </svg>
                                          {:else}
                                            <span class="w-5 mr-3"></span>
                                          {/if}
                                          {grandchild.label}
                                        </a>
                                      {/if}
                                    {/each}
                                  </div>
                                </div>
                              {/if}
                            </div>
                          {:else}
                            <a href={child.href} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 items-center">
                              {#if child.iconPaths && child.iconPaths.length > 0}
                                <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  {#each child.iconPaths as path}
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={path} />
                                  {/each}
                                </svg>
                              {:else}
                                <span class="w-5 mr-3"></span>
                              {/if}
                              {child.label}
                            </a>
                          {/if}
                        {/each}
                      </div>
                    </div>
                  {/if}
                </div>
              {:else}
                <a 
                  href={item.href} 
                  class={`${transparent ? 'text-gray-800' : 'text-gray-300'} ${getHoverClass(transparent)} px-3 py-2 rounded-md text-sm font-medium`}
                  class:${getActiveClass(transparent)}={$page.url.pathname === item.href}
                >
                  {item.label}
                </a>
              {/if}
            {/each}
          </div>
        </div>
        <div class="md:hidden">
          <button 
            on:click={toggleMobileMenu}
            type="button" 
            class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Bottom border and + signs -->
      <div class="absolute inset-x-0 bottom-0 h-px bg-black/5"></div>
      <div class="absolute inset-x-0 bottom-[.5rem] h-px bg-black/5"></div>
      <svg viewBox="0 0 15 15" class="absolute bottom-2 left-0 w-4 h-4 translate-y-1/2 -translate-x-1/2 text-black/10 fill-current">
        <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
      </svg>
      <svg viewBox="0 0 15 15" class="absolute bottom-2 right-0 w-4 h-4 translate-y-1/2 translate-x-1/2 text-black/10 fill-current">
        <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
      </svg>
    </div>
  </div>

  {#if mobileMenuOpen}
    <div class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {#each menuItems as item}
          {#if item.type === 'dropdown'}
            <div>
              <button 
                on:click={(e) => toggleDropdown(item.label, e)}
                class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left items-center justify-between"
              >
                <span class="flex items-center">
                  {#if item.iconPaths && item.iconPaths.length > 0}
                    <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {#each item.iconPaths as path}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={path} />
                      {/each}
                    </svg>
                  {:else}
                    <span class="w-5 mr-3"></span>
                  {/if}
                  {item.label}
                </span>
                <svg class="ml-2 h-4 w-4 transition-transform duration-200 ease-in-out" class:rotate-180={openDropdowns[item.label]} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {#if openDropdowns[item.label]}
                <div class="pl-4">
                  {#each item.children as child}
                    {#if child.type === 'title'}
                      <h3 class="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {child.label}
                      </h3>
                    {:else if child.type === 'separator'}
                      <hr class="my-1 border-gray-700">
                    {:else if child.type === 'dropdown'}
                      <!-- Render nested dropdown for mobile -->
                    {:else}
                      <a 
                        href={child.href} 
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium items-center"
                        class:bg-gray-900={$page.url.pathname === child.href}
                      >
                        {#if child.iconPaths && child.iconPaths.length > 0}
                          <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {#each child.iconPaths as path}
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={path} />
                            {/each}
                          </svg>
                        {:else}
                          <span class="w-5 mr-3"></span>
                        {/if}
                        {child.label}
                      </a>
                    {/if}
                  {/each}
                </div>
              {/if}
            </div>
          {:else if item.type === 'link'}
            <a 
              href={item.href} 
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium items-center"
              class:bg-gray-900={$page.url.pathname === item.href}
            >
              {#if item.iconPaths && item.iconPaths.length > 0}
                <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {#each item.iconPaths as path}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={path} />
                  {/each}
                </svg>
              {:else}
                <span class="w-5 mr-3"></span>
              {/if}
              {item.label}
            </a>
          {/if}
        {/each}
      </div>
    </div>
  {/if}
</nav>

<style>
  .absolute {
    position: absolute;
    max-height: none;
  }

  .nested-dropdown {
    min-width: 200px;
  }

  .z-10 {
    z-index: 10;
  }

  .z-20 {
    z-index: 20;
  }

  .nested-dropdown {
    pointer-events: auto;
    visibility: visible;
    opacity: 1;
  }
</style>
