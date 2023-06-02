<script>
  import {browser as browserSvelte} from '$app/environment';
  import Header from "$lib/header/Header.svelte";
  import Gradient from "$lib/backgrounds/Gradient.svelte";
  import Footer from "$lib/footer/Footer.svelte";
  import { page } from '$app/stores';
  //
  // /** @type {import('./$types').PageData} */
  // export let data;

  let userName;

  if (browserSvelte) {
    try {
      userName = $page.url.searchParams.get('userName');
    } catch(e) {
      // console.log(e);
    }
  }  
</script>

<Gradient>
  <Header/>

    <div class="bg-indigo-700">
      <div class="mx-auto max-w-2xl py-16 px-4 text-left sm:py-20 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-white text-center items-center">
          <h4 class="uppercase">{userName}</h4>
          <p>This is a sad day for us to see you go!</p>
          <div class="inline-block justify-center items-center text-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm-4.34 7.964a.75.75 0 01-1.061-1.06 5.236 5.236 0 013.73-1.538 5.236 5.236 0 013.695 1.538.75.75 0 11-1.061 1.06 3.736 3.736 0 00-2.639-1.098 3.736 3.736 0 00-2.664 1.098z" clip-rule="evenodd" /></svg></div>
        </h2>
        <p class="mt-4 text-lg leading-6 text-indigo-200">It appears you're leaving or resetting YAKKL Smart Wallet. We enjoyed serving you and we all hope to see you again soon! Feel free to use us as a source of information in the crypto space.</p>
        <p class="mt-4 text-lg leading-6 text-indigo-200">If you are using the Basic version then there is nothing else to do. However, if you are using the Premier version then please login to your dashboard/portal and select 'Billing' and then 'Cancel Subscription.' We do not offer refunds but this will stop any renewals from occuring. Please let us know why you're leaving.</p>
        <p class="mt-4 text-lg leading-6 text-indigo-200">If you're using the Premier version you can downgrade to the Basic version by downloading again and import your keys.</p>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <!-- <a href="/utm_source=cta_bye" class="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto">Download for free</a> -->
      </div>
    </div>

    <Footer/>
</Gradient>
