<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from './Footer.svelte';

  export let showHeader: boolean = true;
  export let showFooter: boolean = true;
  export let isHomePage: boolean = false;

</script>

{#if showHeader}
  <div class="relative mx-auto max-w-7xl">
    <div
      class="absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] rotate-[-10deg] rounded-full blur-3xl"
    ></div>
  </div>

  <Header transparent={true} />
{/if}

{#if !isHomePage}
  <div class="mt-16 bg-gradient-to-t from-gray-100 pb-14">
    <div class="px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-7xl">
        <slot></slot> <!-- Page-specific content -->
      </div>
    </div>
  </div>
{:else}
  <slot></slot> <!-- Home Page-specific content -->
{/if}

{#if showFooter}
  <Footer/>
{/if}
