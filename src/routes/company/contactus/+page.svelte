<script>
  import Content from '$lib/components/Content.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<Content>
  <PageHeader>
    <span slot="smallTitle">Contact Us</span>
    <span slot="largeTitle">Please let us know how we can help you.</span>
  </PageHeader>

      <!-- lg:grid-cols-3 -->
      <div class="grid grid-cols-1 mt-8">
        <!-- Contact information -->
        <div class="relative overflow-hidden py-10 px-6 sm:px-10 xl:p-12 rounded-4xl ring-1 ring-inset ring-black/5 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))] text-gray-950">
          <div class="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
            <svg class="absolute inset-0 h-full w-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1" />
              <defs>
                <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#fff"></stop>
                  <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden" aria-hidden="true">
            <svg class="absolute inset-0 h-full w-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1" />
              <defs>
                <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#fff"></stop>
                  <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block" aria-hidden="true">
            <svg class="absolute inset-0 h-full w-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1" />
              <defs>
                <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#fff"></stop>
                  <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3 class="text-lg font-medium">Contact information</h3>
          <p class="mt-6 max-w-3xl text-base text-gray-700">We look forward to hearing from you.</p>

          <dl class="mt-8 space-y-6">
            <dt><span class="sr-only">Support</span></dt>
            <dd class="flex text-base text-gray-700">
              <!-- Heroicon name: outline/recover -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 flex-shrink-0 text-gray-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
              </svg>              
              <!-- svelte-ignore security-anchor-rel-noreferrer -->
              <span class="ml-3 underline"><a href="https://support.yakkl.com?utm_source=yakkl_web" target="_blank" >support.yakkl.com</a></span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 ml-2 mt-2.5 -mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <span class="ml-3">If you need help on anything or need to access an FAQ</span>
            </dd>
          </dl>

          <dl class="mt-8 space-y-6">
            <dt><span class="sr-only">Email</span></dt>
            <dd class="flex text-base text-gray-700">
              <!-- Heroicon name: outline/envelope -->
              <svg class="h-6 w-6 flex-shrink-0 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span class="ml-3 underline"><a href="mailto:investors@yakkl.com" target="_blank">investors@yakkl.com</a></span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 ml-2 mt-2.5 -mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <span class="ml-3">This mailbox is monitored for <span class="underline">investor relations only!</span></span>
            </dd>
          </dl>
          <dl class="mt-8 space-y-6">
            <dt><span class="sr-only">Email</span></dt>
            <dd class="flex text-base text-gray-700">
              <!-- Heroicon name: outline/envelope -->
              <svg class="h-6 w-6 flex-shrink-0 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span class="ml-3 underline"><a href="mailto:partners@yakkl.com" target="_blank">partners@yakkl.com</a></span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 ml-2 mt-2.5 -mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <span class="ml-3">This mailbox is monitored for business development, collaboration, or affiliate opportunities</span>
            </dd>
          </dl>
          <dl class="mt-8 space-y-6">
            <dt><span class="sr-only">Email</span></dt>
            <dd class="flex text-base text-gray-700">
              <!-- Heroicon name: outline/envelope -->
              <svg class="h-6 w-6 flex-shrink-0 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span class="ml-3 underline"><a href="mailto:sales@yakkl.com" target="_blank">sales@yakkl.com</a></span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 ml-2 mt-2.5 -mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <span class="ml-3">This mailbox is monitored for all things sales related</span>
            </dd>
          </dl>
          <dl class="mt-8 space-y-6">
            <dt><span class="sr-only">Email</span></dt>
            <dd class="flex text-base text-gray-700">
              <!-- Heroicon name: outline/envelope -->
              <svg class="h-6 w-6 flex-shrink-0 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span class="ml-3 underline"><a href="mailto:billing@yakkl.com" target="_blank">billing@yakkl.com</a></span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 ml-2 mt-2.5 -mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <span class="ml-3">This mailbox is monitored for all things billing related</span>
            </dd>
          </dl>
          <dl class="mt-8 space-y-6">
            <div class="border border-gray-400 rounded-lg">
            <dt><span class="sr-only">Email</span></dt>
            <dd class="flex text-base text-gray-700">
              <!-- Heroicon name: outline/envelope -->
              <svg class="h-6 w-6 flex-shrink-0 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span class="ml-3 underline"><a href="mailto:support@yakkl.com" target="_blank">support@yakkl.com</a></span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2 mt-1.5 -mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <span class="ml-3">This mailbox is anything support or general question related. BEST option is to click on the live chat button on the bottom right of all pages! If our AI bot can't handle your question then we look forward to assisting anyway we can.</span>
            </dd>
          </div>
          </dl>
          <!-- <ul class="mt-8 flex space-x-12"> -->
            <!-- <li>
              <a class="text-gray-200 hover:text-gray-100" target="_blank" rel="noreferrer" href="https://facebook.com/yakklcrypto">
                <span class="sr-only">Facebook</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" aria-hidden="true">
                  <path d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1" fill="currentColor" />
                </svg>
              </a>
            </li> -->
            <!-- <li>
              <a class="text-gray-200 hover:text-gray-100" target="_blank" rel="noreferrer" href="...yakklcrypto">
                <span class="sr-only">Telegram</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" aria-hidden="true">
                  <path d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1" fill="currentColor" />
                </svg>
              </a>
            </li> -->
            <!-- <li>
              <a class="text-gray-200 hover:text-gray-100" target="_blank" rel="noreferrer" href="https://discord.com/yakkl">
                <span class="sr-only">Discord</span>
                <i class="fa-brands fa-discord"></i>
              </a>
            </li> -->

            <!-- <li>
              <a class="text-gray-200 hover:text-gray-100" rel="noreferrer" target="_blank" href="https://github.com/yakkl">
                <span class="sr-only">GitHub</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" aria-hidden="true">
                  <path d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12" fill="currentColor" />
                </svg>
              </a>
            </li> -->

            <!-- <li>
              <a class="text-gray-700 hover:text-gray-400" rel="noreferrer" target="_blank" href="https://twitter.com/yakklcrypto" >
                <span class="sr-only">X</span>
                <svg viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg" class="flex flex-col w-5 h-5 mt-[.1rem]" aria-hidden="true">
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"/>
                </svg>   -->
                <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" aria-hidden="true">
                  <path d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209" fill="currentColor" />
                </svg> -->
              <!-- </a>
            </li>
          </ul>
        </div> -->

        <!-- Contact form -->
        <!-- <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
          <h3 class="text-lg font-medium text-gray-900">Send us a message</h3>
          <form action="#" method="POST" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label for="first-name" class="block text-sm font-medium text-gray-900">First name</label>
              <div class="mt-1">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500">
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-medium text-gray-900">Last name</label>
              <div class="mt-1">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500">
              </div>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
              <div class="mt-1">
                <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500">
              </div>
            </div>
            <div>
              <div class="flex justify-between">
                <label for="phone" class="block text-sm font-medium text-gray-900">Phone</label>
                <span id="phone-optional" class="text-sm text-gray-500">Optional</span>
              </div>
              <div class="mt-1">
                <input type="text" name="phone" id="phone" autocomplete="tel" class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500" aria-describedby="phone-optional">
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="subject" class="block text-sm font-medium text-gray-900">Subject</label>
              <div class="mt-1">
                <input type="text" name="subject" id="subject" class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500">
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label for="message" class="block text-sm font-medium text-gray-900">Message</label>
                <span id="message-max" class="text-sm text-gray-500">Max. 500 characters</span>
              </div>
              <div class="mt-1">
                <textarea id="message" name="message" rows="4" class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500" aria-describedby="message-max"></textarea>
              </div>
            </div>
            <div class="sm:col-span-2 sm:flex sm:justify-end">
              <button type="submit" class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gray-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto">Submit</button>
            </div>
          </form>
        </div> -->
      </div>
  
</Content>
