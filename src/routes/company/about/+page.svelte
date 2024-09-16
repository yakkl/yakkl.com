<script>
  import Header from "$lib/header/Header.svelte";
  import Gradient from "$lib/backgrounds/Gradient.svelte";
  import Footer from "$lib/footer/Footer.svelte";
</script>

<!-- <Gradient> -->
  <Header/>
  <!-- <div class="absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] rotate-[-10deg] rounded-full blur-3xl">   
  </div> -->

  <div class="overflow-hidden bg-gray-50 py-16">
    <div class="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-prose text-base lg:max-w-none">
        <h2 class="text-lg font-semibold text-gray-600">About Us</h2>
        <p class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">What makes us different</p>
      </div>
      <div class="relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
        <p class="prose prose-indigo text-gray-800">To express what makes us different in one word - <span class="font-bold">experience</span>! </p>
        <p class="prose prose-indigo text-gray-800 font-extrabold lg:max-w-xl mt-2">Andy Jassy, CEO of Amazon, said it like this, "there is no compression algorithm for actual experience!"</p>
        
        <p class="prose prose-indigo text-gray-500 mt-4">There is so much misinformation with one crypto product or blockchain saying they can do 'whatever - insert the buzzword of the moment here' when they simply don't know what they don't know. Most may have never built real production systems that can handle load or muchless businesses that have solid processes builtin from day one.</p>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
        <div class="relative z-10">
          <div class="prose prose-indigo mx-auto text-gray-500 lg:max-w-none">
            <p>There are some really good talented resources that will enter the Web3 market in the next year or two that actually know what they are doing. Those that are actually good that are in the market today may survive but the others will not. Why? Here are a few possible reasons:</p>
            <ul>
              <li>Some may have a combined experience of maybe 10 years (e.g., 5 people with 2 actual years in something other than what matters)</li>
              <li>Most seem to be from an academia world, just read the whitepapers. I would be more interested in technical roadmaps, scalable architectures with disaster recovery factored in, incident response processes or any processes, and maybe a real business plan with experience</li>
              <li>Lack of any reasonable regulation. I don't mean regulations from politians (that will most likely not work). SEC and experienced industry leaders working together</li>
            </ul>
            <p>Another problem area is the misinformation coming from "influencers." Some seem to think of themselves as the "Guardian of the Galaxy (crypto edition)" when in reality they potentially create more issues than they actually help with. Just go to TikTok, Youtube, Twitter, and others and it will not take long to see all of this in action.</p>
            <h3>We're here to help</h3>
            <p>We have brought many years of actual experience architecting, building out infrastructures that can support scale, and applications that are user friendly. Our first product is called YAKKL®  Smart Wallet. It's user friendly, highly secure, and powerful! If you are someone new to crypto you no longer have to go to three or four places and setup accounts just to get started. I found the process very user unfriendly and confusing.</p>
            <p>Today, a user can download the Chrome Extension in their browser, enter in basic information and they are ready to go - simple! If the user has no crypto then they can simply obtain cryptocurrencies or NFTs through integrated third parties. The user can also sell their digital assets or even swap them with others without ever having to leave the wallet. We also added the feature that allows our users to track addresses (accounts) they may have on exchanges so that they can easily view their complete portfolio in one view. We call these Watch Accounts.</p>
            <p>There are so many incredible features to simply list here. YAKKL®  Smart Wallet (Basic Edition) is FREE. The pricing page has all of the many options.
            </p>
          </div>
          <div class="mx-auto mt-10 flex max-w-prose text-base lg:max-w-none">
            <div class="rounded-md shadow">
              <a href="/pricing/#premium" class="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-600 px-5 py-3 text-base font-medium text-white hover:bg-gray-700">Get started (free)</a>
            </div>
            <!-- <div class="ml-4 rounded-md shadow">
              <a href="/#features" class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-600 hover:bg-gray-50">Learn more</a>
            </div> -->
          </div>
        </div>
        <div class="relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none">
          <svg class="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="bedc54bc-7371-44a2-a2bc-dc68d819ae60" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
          </svg>
          <blockquote class="relative rounded-lg bg-white shadow-lg">
            <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
              <img src="/images/logoBullFav-Black48x48.png" alt="Workcation" class="h-8">
              <div class="relative mt-8 text-lg font-medium text-gray-700">
                <svg class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p class="relative">
                  I have a solid track record and have had the luxury of working at high-levels at some of the brands you know of or use almost daily.  One such brand was Bloomberg where I focused on infrastructure required to support high-speed trading and more in the fintech space. The last few years have taught everyone a lot about <span class="underline font-bold">"what not to do" in the crypto ecosystem and the lack of actual experience in building</span> out what it takes to operate a company and products that can truly scale. At YAKKL®, you get all of that and so much more!
                </p>
              </div>
            </div>
            <cite class="relative flex items-center rounded-b-lg bg-gray-600 py-5 px-6 not-italic sm:mt-10 sm:items-start sm:py-5 sm:pl-12 sm:pr-10">
              <!-- <span class="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:-translate-y-1/2 sm:transform">
                <img class="h-12 w-12 rounded-full bg-gray-300 sm:h-20 sm:w-20" src="/images/hans.png" alt="">
              </span> -->
              <span class="relative ml-4 font-semibold leading-6 text-gray-300 sm:ml-24 sm:pl-1">
                <span class="font-semibold text-white sm:inline">Hans Jones</span>
                <span class="sm:inline">CEO</span>
              </span>
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
  </div>

  <Footer/>
<!-- </Gradient> -->
