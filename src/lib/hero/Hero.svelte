<script lang="ts">
	import Header from "$lib/header/Header.svelte";
</script>

<!-- Hero section -->
<div class="relative">
  <div class="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]"></div>
  <div class="relative px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-7xl">
      <div class="relative flex justify-between group/row isolate pt-[calc(theme(spacing.2)+1px)] last:pb-[calc(theme(spacing.2)+1px)]">
        <div aria-hidden="true" class="absolute inset-y-4 left-1/2 -z-10 w-screen -translate-x-1/2">
          <div class="absolute inset-x-0 top-0 border-t border-black/5"></div>
          <div class="absolute inset-x-0 top-2 border-t border-black/5"></div>
          <div class="absolute inset-x-0 bottom-0 border-b border-black/5 group-last/row:block"></div>
          <div class="absolute inset-x-0 bottom-2 border-b border-black/5 group-last/row:block"></div>
        </div>
      
        <div class="relative flex gap-6">
          <div class="py-3 group/item relative">
            <svg viewBox="0 0 15 15" aria-hidden="true" class="roup-first/item:block absolute size-[15px] fill-black/10 -top-2 -left-2">
              <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
            </svg>
            <svg viewBox="0 0 15 15" aria-hidden="true" class="absolute size-[15px] fill-black/10 -top-2 -right-2">
              <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
            </svg>
            <svg viewBox="0 0 15 15" aria-hidden="true" class="group-last/row:group-first/item:block absolute size-[15px] fill-black/10 -bottom-2 -left-2">
              <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
            </svg>
            <svg viewBox="0 0 15 15" aria-hidden="true" class="group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -right-2">
              <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
            </svg>
        </div>
          
          <!-- <div class="relative hidden items-center py-3 lg:flex">
            <a class="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30" data-headlessui-state="" href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures">Radiant raises $100M Series A from Tailwind Ventures
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-4"><path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div> -->

          <slot/>

      </div>


    </div>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <!-- Left column: Content -->
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

          <!-- Middle column: Open Source Image -->
          <div class="w-full lg:w-1/4 mb-10 lg:mb-0 flex justify-center">
            <a href="https://github.com/yakkl/smart-wallet?utm_source=yakkl_web" target="_blank" class="transform transition-transform duration-300 hover:scale-105">
              <img class="h-60 w-60 rounded-full shadow-lg animate-slow-pulse" src="/images/opensource.png" alt="Open Source">
            </a>
          </div>

          <!-- Right column: Wallet Image -->
          <div class="w-full lg:w-1/4 flex justify-center">
            <a href="https://chrome.google.com/webstore/detail/1-yakkl%C2%AE-smart-wallet/dpmfhilhjlhhakpbieclcghochdofeao?utm_source=yakkl_web" target="_blank">
              <img class="h-[600px] w-[297px]" src="/images/wallet_welcome297x600.png" alt="Wallet Welcome">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
