<script>
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte';

</script>

<Footer footerType="socialmedia" class="border border-t">
  <div class="md:flex md:justify-between flex-row">
    <div class="flex flex-col sm:w-full sm:mb-6 md:mb-0 md:w-[30%] lg:w-[40%] xl:w-[60%]">
      <FooterBrand
        href="/"
        src="/images/logoBullFav-Black128x128.png"
        alt="YAKKL® Logo"
        name="YAKKL® "
      />
      <div class="text-[9px] text-gray-500 mt-1 sm:mr-6 mb-5 md:mb-0 text-justify">
        YAKKL® is a software platform ONLY and does not conduct any independent diligence on or substantive review of any blockchain asset, digital currency, cryptocurrency or associated funds. You are fully and solely responsible for evaluating your investments, for determining whether you will exchange blockchain assets based on your own, and for all your decisions as to whether to exchange blockchain assets with the Exodus in app exchange feature. In many cases, blockchain assets you exchange on the basis of your research may not increase in value, and may decrease in value. Similarly, blockchain assets you exchange on the basis of your research may increase in value after your exchange.
        Past performance is not indicative of future results. Any investment in blockchain assets involves the risk of loss of part or all of your investment. The value of the blockchain assets you exchange is subject to market and other investment risks.
        <br/>
        <br/>
        YAKKL® users are responsible for storing their own encrypted Emergency Kit and/or recovery phrase. If the Emergency Kit or the recovery phrase is lost, the user might not be able to retrieve their private keys. It's very important that users maintain good security practices and store their Emergency Kit and/or recovery phrase in a safe place.
      </div>
    </div>
    <div class="flex flex-col">
      <div class="grid grid-cols-3 gap-4 sm:gap-2 sm:grid-cols-6">
        <div>
          <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Solutions</h2>
          <FooterLinkGroup class="text-xs">
            <FooterLink liClass="mb-4" href="/">YAKKL® Smart Wallet</FooterLink>
            <FooterLink liClass="mb-4" href="/#features">Features</FooterLink>
            <!-- <FooterLink liClass="mb-4" href="/pricing">Pricing</FooterLink> -->
          </FooterLinkGroup>
        </div>
        <!-- <div>
          <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Crypto</h2>
          <FooterLinkGroup class="text-xs">
            <FooterLink liClass="mb-4" href="/crypto/buy">Buy</FooterLink>
            <FooterLink liClass="mb-4" href="/crypto/buy">Sell</FooterLink>
            <FooterLink liClass="mb-4" href="/crypto/buy">Swap</FooterLink>
          </FooterLinkGroup>
        </div> -->
        <div>
          <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Support</h2>
          <FooterLinkGroup class="text-xs">
            <!-- <FooterLink liClass="mb-4" href="https://yakkl.freshdesk.com/support/home">Documentation</FooterLink> -->
            <FooterLink liClass="mb-4" href="/university/support/">Help</FooterLink>
            <!-- <FooterLink liClass="mb-4" href="https://yakkl.freshdesk.com/support/home">FAQ</FooterLink> -->
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Company</h2>
          <FooterLinkGroup class="text-xs">
            <FooterLink liClass="mb-4" href="/company/about">About</FooterLink>
            <!-- <FooterLink liClass="mb-4" href="https://yakkl.pub">Blog</FooterLink> -->
            <FooterLink liClass="mb-4" href="/company/contactus">Contact us</FooterLink>
            <!-- <FooterLink liClass="mb-4" href="/company/newsletter">Newsletter</FooterLink> -->
            <FooterLink liClass="mb-4" href="/company/partnering">Partnering</FooterLink>
            <!-- <FooterLink liClass="mb-4" href="/investors">Investors</FooterLink> -->
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
          <FooterLinkGroup class="text-xs">
            <FooterLink liClass="mb-4" href="https://twitter.com/yakklcrypto" target="_blank">Twitter</FooterLink>
            <FooterLink liClass="mb-4" href="https://instagram.com/yakklcrypto" target="_blank">Instagram</FooterLink>
            <FooterLink liClass="mb-4" href="https://www.tiktok.com/@yakklofficial" target="_blank">TikTok</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
          <FooterLinkGroup class="text-xs">
            <FooterLink liClass="mb-4" href="/legal/privacy">Privacy Policy</FooterLink>
            <FooterLink liClass="mb-4" href="/legal/terms">Terms of Service</FooterLink>
            <FooterLink liClass="mb-4" href="/legal/cookie-policy">Cookie Policy</FooterLink>
            <FooterLink liClass="mb-4" href="/legal/disclaimer">Disclaimer</FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </div>
  </div>
  <hr class="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
  <div class="sm:flex sm:items-center sm:justify-between mr-20">
    <FooterCopyright href="/" by="YAKKL® - YAKKL, Inc." class="text-left"/>
    <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
      <FooterIcon target="_blank" href="https://facebook.com/yakklcrypto" class="text-gray-400 hover:text-gray-900">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
      </FooterIcon>
      <FooterIcon target="_blank" href="https://instagram.com/yakklcrypto" class="text-gray-400 hover:text-gray-900">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
      </FooterIcon>
      <FooterIcon target="_blank" href="https://twitter.com/yakklcrypto" class="text-gray-400 hover:text-gray-900">
        <svg viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg" class="flex flex-col w-4 h-4 mt-[.1rem]" aria-hidden="true">
          <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"/>
        </svg>  

      <!-- <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg> -->
      </FooterIcon>

      <!-- <FooterIcon target="_blank" href="https://github.com/yakkl" class="text-gray-400 hover:text-gray-900">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
      </FooterIcon> -->

    </div>
  </div>
</Footer>
