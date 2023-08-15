<script>
  import { browser as browserSvelte } from "$app/environment";
  import Header from "$lib/header/Header.svelte";
  import Gradient from "$lib/backgrounds/Gradient.svelte";
  import Footer from "$lib/footer/Footer.svelte";
  import { Timeline, TimelineItem, Button, Heading, P, Mark } from 'flowbite-svelte';

  let standaloneOnramp;
  let redirectUrl;

  if (browserSvelte) {
    standaloneOnramp = window.StripeOnramp.Standalone({
      source_currency: 'usd',
      amount: {source_amount: '50'},
      destination_networks: ['ethereum'],
      destination_currencies: ['eth'],
    });

    redirectUrl = standaloneOnramp.getUrl();
  }

</script>

<Gradient>
  <Header/>
  <div class="m-20">
    <Heading tag="h1" class='mb-4'>Regain <Mark>control</Mark> over your buys, sells, swaps</Heading>
    <P>
      Below is an <span class="underline">example</span> step-by-step along with an example buy dialog.
    </P>
  </div>
  <div class="ml-20 mb-10 flex flex-row">
    <div class="indicator flex flex-row">
      <span class="indicator-item badge badge-secondary animate-bounce">LIVE</span> 
      <a
        id="buy"
        href="{redirectUrl}"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary btn-wide uppercase rounded-xl ml-2"
        aria-label="Buy Crypto">
        Buy Crypto
      </a>
    </div>
  </div>
  <div class="divider text-primary">Process Flow with Example</div>
  <div class="mx-20 flex flex-col md:flex-row">
    <div class="flex flex-col md:flex-row mr-20">
    <Timeline class="">
      <TimelineItem title="Click BUY CRYPTO above" date="Step 1">
        <p class="mb-1 text-base font-normal text-gray-500 dark:text-gray-300">
          This requires, by law, a KYC (Know Your Customer) process. This simply means our partner, Stripe, will ask you to verify your identity. This is a <span class="font-bold">one-time process</span>. The example image to the right shows the default amount we have set for you. You can change this amount to any amount you wish.</p>
        <p class="mb-1 text-base font-normal text-gray-500 dark:text-gray-300">
          
        </p>
      </TimelineItem>
      <TimelineItem title="KYC Process - a step-by-step and only one-time" date="Step 2">
        <p class="text-base font-normal text-gray-500 dark:text-gray-300">
          You will be prompted to enter your email address along with other personal identifying information. <span class="font-semibold">This is a one-time process. You will not be asked to do this again.</span> Just follow the prompts. Also, YAKKL® does not store any of this information. It is all managed by Stripe.
        </p>
      </TimelineItem>
      <TimelineItem title="Enter your purchase method (bank, debit, or creditcard) and make purchase" date="Step 3">
        <p class="text-base font-normal text-gray-500 dark:text-gray-300">
          You will be prompted to enter your Ethereum address (assuming Ethereum for this explanation). That address DOES NOT have to be managed by YAKKL®, it can be managed by any wallet you choose. This is one of the great things about self-custody, you're in control. <br/><br/>
          There are help prompts to explain any fees and what things mean. Once you have made your purchase, Stripe will submit your purchase to the blockchain and wait on confirmation. You can always check YAKKL® Smart Wallet for your transaction status (assuming YAKKL® manages it). If it has been processed, you will see it in your wallet. If it has not been processed, you will see it in your wallet as pending. <br/><br/>
          <span class="font-medium">GREAT! You have now purchased your first crypto. You can now use it to buy, sell, swap, or send to anyone you choose. You can also use it to pay for goods and services. If YAKKL® manages your address and keys then you can track everything knowing you are completely secure!</span>
        </p>
      </TimelineItem>
    </Timeline>
    </div>
    <div class="flex flex-col md:flex-row md:min-w-[350px] md:h-[600px] ml-10">
      <img src="/images/stripe-eth.png" alt="buyimage"/>
    </div>
  </div>
  <Footer/>
</Gradient>
