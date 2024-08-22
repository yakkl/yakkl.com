<script>
  import { browser as browserSvelte } from "$app/environment";
  import Header from "$lib/header/Header.svelte";
  import Gradient from "$lib/backgrounds/Gradient.svelte";
  import Footer from "$lib/footer/Footer.svelte";
  import { Timeline, TimelineItem, Button, Heading, P, Mark } from 'flowbite-svelte';

</script>

<!-- <Gradient> -->
  <Header/>
  <div class="m-20">
    <Heading tag="h1" class='mb-4'>Need <Mark>HELP</Mark>?</Heading>
    <P>
      Below is an <span class="underline">FAQ</span> of the most common questions:
    </P>
  </div>

  <div class="divider text-gray-800">FAQ</div>


  <div class="justify-center flex">
    <div class="border-base-300 bg-base-100 rounded-box flex min-h-[6rem] md:min-w-[45rem] 2xl:min-w-[70rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4">

      <div class="join join-vertical w-full">
        <div class="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-1" checked="checked" class="w-full"/> 
          <div class="collapse-title text-xl font-medium">
            Where can I find YAKKL® Smart Wallet to download?
          </div>
          <div class="collapse-content italic ml-4"> 
            <p>Click the 'Get started today' button at the top of the page.</p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-1" class="w-full"/> 
          <div class="collapse-title text-xl font-medium">
            Is YAKKL® in a pre-release mode and if so what does that mean?
          </div>
          <div class="collapse-content italic ml-4"> 
            <p>Yes, until we reach v1.0.0.  This means we want to get features into your hands as soon as possible and get your feedback. All code is thoroughly tested before we release. Also, It's pre-release due to not having all of the features we and you want in YAKKL®. This is a GREAT THING! You can help on the design and features!</p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-1" class="w-full"/> 
          <div class="collapse-title text-xl font-medium">
            Does YAKKL® have different versions and are they FREE?
          </div>
          <div class="collapse-content italic ml-4"> 
            <p>Great question! YAKKL® has different versions, 'standard' and 'premier'. Our 'enterprise' and 'institution' releases will be available late 2024 or early 2025. The 'standard' version is free. The 'premier' version has a very small annual subscription fee to offset 3rd party fees due to the level of security and network availability. </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-1" class="w-full"/> 
          <div class="collapse-title text-xl font-medium">
            Does YAKKL® have other products available or planned?
          </div>
          <div class="collapse-content italic ml-4"> 
            <p>The YAKKL® Smart Wallet (with two different versions) is the only product line today. However, we have an aggressive product roadmap the includes 'enterprise' and 'institution' releases plus additional tax and portfolio products planned due to the recent tax rulings.</p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-1" class="w-full"/> 
          <div class="collapse-title text-xl font-medium">
            How can I help and how can I suggest features?
          </div>
          <div class="collapse-content italic ml-4"> 
            <p>Glad you asked?  If there is anything not behaving as you expect then let us know. If something you are trying to do is complicated or confusing then let us know your thoughts on how to improve it. If an expected feature is missing or you can't easily find it then please let us know and be as detailed as you like. We welcome all feedback!</p>
            <p>Also, if you are a developer and want to contribute, please click the Github logo and it will take you to the open source repo.</p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-1" class="w-full"/> 
          <div class="collapse-title text-xl font-medium">
            How do I keep up with YAKKL®?
          </div>
          <div class="collapse-content italic ml-4"> 
            <p>Somedays it seems new things are being released every few minutes and other days where it feels slower. To stay up to date, the best way is to enroll in the FREE Newsletter. You can cancel at any time but we hope that you don't. We discuss enhancements, known issues, best practices, and things we believe you should know about in the industry and how it could impact you. Click the 'Newsletter' menu option at the top of the page and it will take you to a form asking for your email. Enter in your email and submit. That's super simple and we can't wait to send you the next issue!</p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-1" class="w-full"/> 
          <div class="collapse-title text-xl font-medium">
            How do I communicate with YAKKL® Support?
          </div>
          <div class="collapse-content italic ml-4"> 
            <p>For now, the easiest way is to email <a href="mailto:support@yakkl.com" class="text-gray-600" target="_blank">support@yakkl.com</a>. There are other ways coming soon.</p>
          </div>
        </div>
        <!-- <div class="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-1" class="w-full"/> 
          <div class="collapse-title text-xl font-medium">
            Are there any training videos or ebooks on YAKKL® and/or Crypto?
          </div>
          <div class="collapse-content italic ml-4"> 
            <p>We are creating our YAKKL® University but it's not available at the moment. However, you can visit <a href="https://cryptogramps.fans?utm_medium=link&utm_source=yakkl_faq" target="_blank" class="text-gray-600">Crypto Gramps.</a> Crypto Gramps is building out a series of ebooks on crypto from beginner to technical professionals. There are a number of how-to videos available as well. Who knows, you may even see grandkids and puppies! BTW, Crypto Gramps was the primary architect and core contributor to YAKKL®. </p>
          </div>
        </div> -->
      </div>
    </div>
  </div>

  <!-- <div class="mx-20 flex flex-col md:flex-row">
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
  </div> -->
  <Footer/>
<!-- </Gradient> -->
