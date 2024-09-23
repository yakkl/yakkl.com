<script lang="ts">
  import type { MenuItem } from '$lib/components/MenuItem';
  import Navigation from '$lib/components/Navigation.svelte';

  export let transparent = false;
  export let isFixed = false;
  // Set the menuItems here but they could be loaded from a store or API or simply passed in for every Header
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
</script>

<div class="relative px-6 lg:px-8">    
  <div class="mx-auto max-w-2xl lg:max-w-7xl">
    <header class="pt-12 sm:pt-16">
      <div class="relative flex justify-between group/row isolate pt-[calc(theme(spacing.2)+1px)] last:pb-[calc(theme(spacing.2)+1px)]">
        <Navigation isFixed={isFixed} transparent={transparent} {menuItems} />
      </div>
    </header>
  </div>
</div>
