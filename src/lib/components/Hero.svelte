<script lang="ts">
	import Popover from '$lib/components/Popover.svelte';
  import Navigation from "$lib/components/Navigation.svelte";
</script>

<!-- Hero section -->
<div class="relative">
  <div class="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]"></div>
  <div class="relative px-6 lg:px-8">    
    <div class="mx-auto max-w-2xl lg:max-w-7xl">
      <header class="pt-12 sm:pt-16">
        <div class="relative flex justify-between group/row isolate pt-[calc(theme(spacing.2)+1px)] last:pb-[calc(theme(spacing.2)+1px)]">
          <Navigation transparent={true} />
        </div>
        <div class="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 id="2" class="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">Secure and Simple.</h1>
          <Popover triggeredBy="#2" position="left" customClasses="bg-gray-100 border border-gray-300">
            <!-- <span slot="trigger">
              <i class="fas fa-info-circle text-blue-500"></i>
            </span> -->
            <div>
              This is the content of the popover.
            </div>
          </Popover>

          <p class="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">YAKKL Smart Wallet makes crypto easy!</p>
          <div class="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <a class="inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)] rounded-full border border-transparent bg-gray-950 shadow-md whitespace-nowrap text-base font-medium text-white data-[disabled]:bg-gray-950 data-[hover]:bg-gray-800 data-[disabled]:opacity-40" href="https://chrome.google.com/webstore/detail/1-yakkl%C2%AE-smart-wallet/dpmfhilhjlhhakpbieclcghochdofeao?utm_source=yakkl_web" target="_blank">Get started</a>
            <!-- <a class="relative inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)] rounded-full border border-transparent bg-white/15 shadow-md ring-1 ring-[#D15052]/15 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d] whitespace-nowrap text-base font-medium text-gray-950 data-[disabled]:bg-white/15 data-[hover]:bg-white/20 data-[disabled]:opacity-40" href="/pricing">See pricing</a> -->
            
          </div>
        </div>
      </header>
    </div>
    <!-- <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-7xl pt-16"> 

        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row items-center justify-between">
            
            <div class="w-full lg:w-1/2 xl:w-5/12 mb-10 lg:mb-0">
              <img class="mx-auto mb-8" src="/images/yakkl-dream.png" alt="YAKKL Dream">
              <p class="text-lg text-gray-500 sm:text-xl mb-8">
                Introducing the YAKKL® Smart Wallet, the simplest way to manage and secure your cryptocurrencies. Gone are the days of crypto being a hassle and difficult to get into. Our easy-to-use features, built-in AI support, and advanced security options make crypto accessible to everyone. YAKKL® is the perfect solution for everyone. Try YAKKL®  today and experience the future of crypto!          
              </p>
              <div class="mb-8">
                <a href="https://chrome.google.com/webstore/detail/1-yakkl%C2%AE-smart-wallet/dpmfhilhjlhhakpbieclcghochdofeao?utm_source=yakkl_web" class="inline-block rounded-md border border-transparent bg-gray-800 px-8 py-3 text-base font-medium text-white hover:bg-gray-700 md:py-4 md:px-10 md:text-lg">Get Started</a>
              </div>
              <p class="font-semibold italic text-md text-gray-500 sm:text-md">
                YAKKL® is the perfect solution for novice and experienced users alike. Now is the time to join the YAKKL® community!
              </p>
            </div>

            
            <div class="w-full lg:w-1/4 mb-10 lg:mb-0 flex justify-center">
              <a href="https://github.com/yakkl/smart-wallet?utm_source=yakkl_web" target="_blank" class="transform transition-transform duration-300 hover:scale-105">
                <img class="h-60 w-60 rounded-full shadow-lg animate-slow-pulse" src="/images/opensource.png" alt="Open Source">
              </a>
            </div>

            
            <div class="w-full lg:w-1/4 flex justify-center">
              <a href="https://chrome.google.com/webstore/detail/1-yakkl%C2%AE-smart-wallet/dpmfhilhjlhhakpbieclcghochdofeao?utm_source=yakkl_web" target="_blank">
                <img class="h-[600px] w-[297px]" src="/images/wallet_welcome297x600.png" alt="Wallet Welcome">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</div>
