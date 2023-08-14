<script>
  import { goto } from '$app/navigation';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="/images/logo48x48.png"
      class="mr-3 h-6 sm:h-9"
      alt="YAKKL® Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      YAKKL® Smart Wallet
    </span>
  </NavBrand>
  <div class="flex md:order-2">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <a
      class="inline-block h-14 px-7 mt-0 md:py-3 py-2 bg-indigo-600 text-white font-bold text-lg leading-snug rounded-md shadow-md hover:bg-indigo-700 hover:shadow-md focus:bg-indogo-700 focus:shadow-md focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-md transition duration-150 ease-in-out w-full"
      data-mdb-ripple="true" data-mdb-ripple-color="light"
      href="https://chrome.google.com/webstore/detail/1-yakkl%C2%AE-smart-wallet/dpmfhilhjlhhakpbieclcghochdofeao?utm_source=yakkl_web">
      <div class="inline-flex items-center align-middle">
        <span>Get started today</span>
      </div>
    </a>
    <NavHamburger on:click={toggle} />
  </div>
  <NavUl {hidden}>
    <NavLi href="/#features" >Features</NavLi>
    <!-- <NavLi href="https://yakkl.pub/?utm_source=yakkl_site&utm_medium=reflink&utm_campaign=yakkl_site_reflink" target="_blank">Blog</NavLi> -->
    <!-- <NavLi href="https://yakkl.freshdesk.com/?utm_source=yakkl_site&utm_medium=reflink&utm_campaign=yakkl_site_reflink" target="_blank">Docs</NavLi> -->
    <NavLi href="/#newsletter">Newsletter</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi id="nav-crypto" class="cursor-pointer">Crypto<Icon name="chevron-down-solid" class="w-3 h-3 ml-2 text-white dark:text-white" /></NavLi>
    <Dropdown triggeredBy="#nav-crypto" class="w-44 z-20">
      <DropdownItem href="/crypto/buy">Buy</DropdownItem>
      <DropdownItem href="/crypto/buy">Sell</DropdownItem>
      <DropdownItem href="/crypto/buy">Swap</DropdownItem>
    </Dropdown>
    <NavLi id="nav-menu1" class="cursor-pointer">Company<Icon name="chevron-down-solid" class="w-3 h-3 ml-2 text-white dark:text-white" /></NavLi>
    <Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
      <DropdownItem href="/company/about">About</DropdownItem>
      <DropdownItem href="/company/partnering">Partnering</DropdownItem>
      <!-- <DropdownItem href="/company/newsletter">Newsletters</DropdownItem> -->
      <DropdownItem href="/company/contactus">Contact Us</DropdownItem>
      <!-- <DropdownDivider /> -->
      <!-- <DropdownItem>Sign out</DropdownItem> -->
    </Dropdown>
    <NavLi href="/investors">Investors</NavLi>
  </NavUl>
</Navbar>

