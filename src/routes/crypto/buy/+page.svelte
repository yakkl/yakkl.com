<script>
  import Header from "$lib/header/Header.svelte";
  import Gradient from "$lib/backgrounds/Gradient.svelte";
  import Footer from "$lib/footer/Footer.svelte";
  import { Timeline, TimelineItem, Button, Heading, P, Mark } from 'flowbite-svelte';
</script>

<Gradient>
  <Header/>
  <div class="m-20">
    <Heading tag="h1" class='mb-4'>Regain <Mark>control</Mark> over your buys, sells, swaps</Heading>
    <P>
      Below is an <span class="underline">example</span> timeline along with an example buy/sell dialog.
    </P>
  </div>
  <div class="ml-20 flex flex-row">
    <div class="flex flex-row">
    <Timeline>
      <TimelineItem title="Purchased, Sold and Swapped Crypto from YAKKL" date="December 2022">
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Since I can buy, sell, and swap crypto from within YAKKL, I have no need for a centralized exchange.
        </p>
        <Button color="alternative"
          >Details<svg
            class="ml-2 w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd" /></svg
          ></Button>
      </TimelineItem>
      <TimelineItem title="Migrated over from other wallets" date="November 2022">
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          Imported in wallets from Metamask, Exodus, Tally Ho, Trust Wallet, and more.
        </p>
      </TimelineItem>
      <TimelineItem title="Downloaded YAKKL Smart Wallet" date="October 2022">
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          Downloaded the YAKKL Smart Wallet from Google Chrome.
        </p>
      </TimelineItem>
    </Timeline>
    </div>
    <div class="flex flex-row w-[400px] h-[400px] justify-center">
      <img src="/images/example-buy.png" alt="buyimage"/>
    </div>
  </div>
  <Footer/>
</Gradient>
