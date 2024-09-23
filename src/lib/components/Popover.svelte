<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';

  export let position: 'top' | 'right' | 'bottom' | 'left' = 'right'; // Default position
  export let customClasses: string = ''; // Custom Tailwind classes
  export let triggeredBy: string = ''; // Selector for the trigger element (e.g., #2)
  
  let popoverVisible = writable(false);
  let popoverPosition = writable({ top: '0px', left: '0px' });
  
  let popoverRef: HTMLElement;
  let triggerElement: HTMLElement | null;
  let hideTimeout: number;

  const showPopover = () => {
    popoverVisible.set(true);
    calculatePosition();
    clearTimeout(hideTimeout); // Prevent hiding if the user quickly moves between elements
  };

  const hidePopover = () => {
    hideTimeout = setTimeout(() => {
      popoverVisible.set(false);
    }, 100); // Delay to avoid flickering
  };

  const calculatePosition = () => {
    if (!triggerElement || !popoverRef) return;

    const triggerRect = triggerElement.getBoundingClientRect();
    const popoverRect = popoverRef.getBoundingClientRect();
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

    let top = triggerRect.bottom + 'px';
    let left = triggerRect.left + 'px';

    // Adjust position based on the available space and the specified position prop
    if (position === 'top' && triggerRect.top >= popoverRect.height) {
      top = (triggerRect.top - popoverRect.height) + 'px';
      left = triggerRect.left + 'px';
    } else if (position === 'right' && (viewportWidth - triggerRect.right) >= popoverRect.width) {
      left = (triggerRect.right) + 'px';
      top = (triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2) + 'px';
    } else if (position === 'left' && triggerRect.left >= popoverRect.width) {
      left = (triggerRect.left - popoverRect.width) + 'px';
      top = (triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2) + 'px';
    } else if (position === 'bottom' || triggerRect.bottom < viewportHeight - popoverRect.height) {
      top = (triggerRect.bottom) + 'px';
      left = triggerRect.left + 'px';
    }

    // Fallback for positioning when there's not enough space
    if (triggerRect.bottom + popoverRect.height > viewportHeight) {
      top = (viewportHeight - popoverRect.height - 10) + 'px'; // 10px margin from viewport bottom
    }
    if (triggerRect.left + popoverRect.width > viewportWidth) {
      left = (viewportWidth - popoverRect.width - 10) + 'px'; // 10px margin from viewport right
    }

    popoverPosition.set({ top, left });
  };

  onMount(() => {
    if (typeof window !== 'undefined' && triggeredBy) {
      // Get the element by ID or selector
      triggerElement = document.querySelector(triggeredBy);
      
      if (triggerElement) {
        triggerElement.addEventListener('mouseenter', showPopover);
        triggerElement.addEventListener('mouseleave', hidePopover);
      }

      if (typeof window !== 'undefined') window.addEventListener('resize', calculatePosition);
    }
  });

  onDestroy(() => {
    if (triggerElement) {
      triggerElement.removeEventListener('mouseenter', showPopover);
      triggerElement.removeEventListener('mouseleave', hidePopover);
    }

    if (typeof window !== 'undefined') window.removeEventListener('resize', calculatePosition);
  });
</script>

<!-- Popover -->
{#if $popoverVisible}
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    bind:this={popoverRef}
    class={`absolute bg-white shadow-lg p-4 rounded-md ${customClasses}`}
    style="position: absolute;"
    style:top={$popoverPosition.top}; style:left={$popoverPosition.left};
    on:mouseenter={showPopover} on:mouseleave={hidePopover}
  >
    <slot></slot>
  </div>
{/if}
