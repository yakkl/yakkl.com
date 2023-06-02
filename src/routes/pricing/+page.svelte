<script>
  import Gradient from "$lib/backgrounds/Gradient.svelte";
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/footer/Footer.svelte";

  let billType = 'Annual';
  let monthlyPro = '14.95';
  let yearlyPro = '9.95';
  let chrome_id = import.meta.env.VITE_CHROME_PROD_ID;
  // https://chrome.google.com/webstore/detail/yakkl/{chrome_id}
  // https://buy.stripe.com/cN215Sdlt3j9gXCcMM - annual
  // https://buy.stripe.com/cN2cOA3KTf1R9va9AB - monthly
</script>

<Gradient>
  <Header/>

  <!-- Pricing with four tiers and toggle -->
  <div class="bg-gradient-to-b from-white to-gray-50">
    <div class="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
      <div class="sm:align-center sm:flex sm:flex-col">
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">Pricing Plans</h1>
        <p class="mt-5 text-xl text-gray-500 sm:text-center">Start exploring crypto for <span class="font-extrabold">free</span>. When the time comes for more horsepower, features, and security options then step up to the level that works best for you. Business and Enterprise/Institution levels unlock additional features specific for multi-divisional enterprises and global institutions.</p>
        <!-- <div class="relative mt-6 flex self-center rounded-lg bg-gray-100 p-0.5 sm:mt-8">
          <button type="button" class="relative w-1/2 whitespace-nowrap rounded-md border-gray-200 bg-white py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:w-auto sm:px-8">Monthly billing</button>
          <button type="button" class="relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-transparent py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:w-auto sm:px-8">Yearly billing</button>
        </div> -->
      </div>
      <div class="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
        <div class="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-lg">
          <div class="p-6 h-[295px] grid grid-rows-6">
            <h2 class="text-lg font-medium leading-6 text-gray-900">Standard</h2>
            <p class="text-sm text-gray-500 row-span-2">All the basics needed for securely managing digital assets (crypto, NFTs, ...).</p>
            <p class="row-span-2">
              <span class="text-2xl font-bold tracking-tight text-gray-900">$0</span>
              <span class="text-base font-medium text-gray-500">/free</span>
            </p>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="/billing" class=" w-full rounded-md border border-transparent bg-purple-600 py-2 text-center text-sm font-semibold text-white hover:bg-purple-700">Get started today</a>
          </div>
          <div class="px-6 pt-6 pb-8">
            <h3 class="text-sm font-medium text-gray-900">What's included</h3>
            <!-- svelte-ignore a11y-no-redundant-roles -->
            <ul role="list" class="mt-6 space-y-4">
              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Easy to use interface</span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Ability to buy, sell, and swap</span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Automatically print off a secure emergency kit</span>
              </li>
              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">AI enhanced knowledge access with a "ring of the bell"</span>
              </li>
              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Ethereum and EVM based coins/tokens</span>
              </li>
              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Easily manage your NFTs</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="relative z-10 divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-2xl">
          <!-- <div class="flex flex-col rounded-t-lg fill-indigo-600 bg-indigo-600 w-[156px] h-10 border-none">
            <span class="flex flex-col text-gray-100 uppercase text-center font-bold">Recommended</span>
            <svg class="flex flex-col" xmlns="http://www.w3.org/2000/svg" width="156" height="15.476" viewBox="0 0 156 15.476">
              <path id="Path_712" data-name="Path 712" d="M332.23,375.422l-74.046,11.4a3.875,3.875,0,0,1-1.188,0l-74.045-11.4a3.991,3.991,0,0,1-3.361-3.962c-.3.3,155.985-.253,156,0A3.992,3.992,0,0,1,332.23,375.422Z" transform="translate(-179.591 -371.392)"></path>
            </svg>
          </div> -->
          <!-- grid-rows-7 gap-2 -->
          <div id="premium" class="p-6 h-[295px] grid grid-rows-6">
            <!-- <p class="absolute top-0 -translate-y-1/2 transform rounded-full bg-indigo-500 py-1.5 px-4 text-sm font-semibold text-white">Most popular</p> -->
            <h2 class="text-lg font-medium leading-6 text-gray-900">Premium</h2>
            <p class=" text-sm text-gray-500 row-span-2">When you need more horsepower, features, and security options.</p>
            <p class="row-span-2">
              <span class="text-xl font-bold tracking-tight text-gray-900">21 Days Free - $0 Today</span>
            </p>
              <!-- svelte-ignore security-anchor-rel-noreferrer -->
              <a href="/billing?term=annual" target="_blank" class="w-full row-span-1 rounded-md border border-transparent bg-purple-600 py-2 text-center text-sm font-semibold text-white hover:bg-purple-700">Annual billing $9.99/yr</a>
              <!-- svelte-ignore security-anchor-rel-noreferrer -->
              <!-- <a href="/billing?term=monthly" target="_blank" class="w-full row-span-1 rounded-md border border-transparent bg-purple-600 py-2 text-center text-sm font-semibold text-white hover:bg-purple-700">Monthly billing $14.99/mo</a> -->
          </div>
          <div class="px-6 pt-6 pb-8">
            <h3 class="text-sm font-medium text-gray-900">What's included</h3>
            <!-- svelte-ignore a11y-no-redundant-roles -->
            <ul role="list" class="mt-6 space-y-4">
              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Everything in Standard version - plus...</span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Enhanced security</span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Ability to save multi-encrypted emergency kit. This allows for storage on encrypted drives, devices, and backups</span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Transaction Notes. Add a memo or note to any given transaction so you know what it was for later</span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Supports most all coins/tokens/blockchains</span>
              </li>
              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Receipent pays "gas" fees - option</span>
              </li>
              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Developer APIs and plugins</span>
              </li>
              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">YAKKL™ University</span>
              </li>
              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Plus so much more...</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-lg">
          <div class="p-6 h-[295px] grid grid-rows-6">
            <h2 class="text-lg font-medium leading-6 text-gray-900">Business</h2>
            <p class="text-sm text-gray-500 row-span-2">When you need a true multi-user digital asset manager, enhanced reporting, and additional security options.</p>
            <p class="mt-0 row-span-2">
              <span class="text-4xl font-bold tracking-tight text-gray-900"></span>
              <span class="text-base font-medium text-gray-500"></span>
            </p>
            <a href="/company/contactus" class="w-full rounded-md border border-transparent bg-purple-600 py-2 text-center text-sm font-semibold text-white hover:bg-purple-700">Contact us</a>
          </div>
          <div class="px-6 pt-6 pb-8">
            <h3 class="text-sm font-medium text-gray-900">What's included</h3>
            <!-- svelte-ignore a11y-no-redundant-roles -->
            <ul role="list" class="mt-6 space-y-4">
              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Everything in Premium version plus...</span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Ability to have multiple Primary Accounts (think divisions and/or teams)</span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Mulptiple layers of permissions</span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Multi-user profiles</span>
              </li>
              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Enhanced secure backups of keys</span>
              </li>
              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Multi-currency Fiat</span>
              </li>
              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Enhanced Reporting</span>
              </li>
              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Manage from a secured dashboard and backend</span>
              </li>
              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Plus so much more...</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-lg">
          <div class="p-6 h-[295px] grid grid-rows-6">
            <h2 class="text-lg font-medium leading-6 text-gray-900">Enterprise/Institution</h2>
            <p class="text-sm text-gray-500 row-span-2">Unlock Enterprise and Institutional level features such as SSO, integration, and more.</p>
            <p class="row-span-2">
              <span class="text-4xl font-bold tracking-tight text-gray-900"></span>
              <span class="text-base font-medium text-gray-500"></span>
            </p>
            <a href="/company/contactus" class="w-full rounded-md border border-transparent bg-purple-600 py-2 text-center text-sm font-semibold text-white hover:bg-purple-700">Contact us</a>
          </div>
          <div class="px-6 pt-6 pb-8">
            <h3 class="text-sm font-medium text-gray-900">What's included</h3>
            <!-- svelte-ignore a11y-no-redundant-roles -->
            <ul role="list" class="mt-6 space-y-4">
              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Everything in Business version plus...</span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Enhanced authorization/authentication/AD...</span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">White label for consumers</span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Scalable backend</span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Transaction details for tax reporting</span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">KYC integration</span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: mini/check -->
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Plus so much more...</span>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</Gradient>
<!-- Add a logo cloud -->
<!-- Add testimonial -->
