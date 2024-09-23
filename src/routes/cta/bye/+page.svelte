<script>
  import {browser as browserSvelte} from '$app/environment';
  import { page } from '$app/stores';
  import Content from '$lib/components/Content.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';

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

<Content>
  <PageHeader>
    <span slot="smallTitle">Bye</span>
    <span slot="largeTitle">:( - We hate to see you go!</span>
  </PageHeader>

    <div class="mt-14 rounded-4xl ring-1 ring-inset ring-black/5 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))] text-gray-950">
      <div class="mx-auto max-w-2xl py-16 px-4 text-left sm:py-20 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-center items-center">
          <h4 class="uppercase">{userName}</h4>
          <p classe="mt-1">This is a somber day for us - seeing you go!</p>
          <div class="inline-block justify-center items-center text-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm-4.34 7.964a.75.75 0 01-1.061-1.06 5.236 5.236 0 013.73-1.538 5.236 5.236 0 013.695 1.538.75.75 0 11-1.061 1.06 3.736 3.736 0 00-2.639-1.098 3.736 3.736 0 00-2.664 1.098z" clip-rule="evenodd" /></svg></div>
        </h2>
        <p class="mt-4 text-lg leading-6 text-gray-700">It appears you're leaving or resetting YAKKL® Smart Wallet. We have sincerely appreciated the opportunity to serve you, and we eagerly anticipate the possibility of your return in the near future. Please consider us as a valuable resource for cryptocurrency-related information.
        </p>
        <!-- <p class="mt-4 text-lg leading-6 text-gray-700">If you are currently subscribed to the Basic version, no further action is required on your part. However, if you have subscribed to the Premier version, we kindly request that you log in to your dashboard or portal. From there, navigate to the 'Billing' section and proceed to select the 'Cancel Subscription' option. While we do not offer refunds, this process will prevent any future renewals. We would greatly appreciate it if you could inform us of the reason behind your decision to discontinue.
        </p> -->
        <!-- <p class="mt-4 text-lg leading-6 text-gray-700">Should you wish to switch from the Premier version to the Basic version, you may do so by downloading the application once again and importing your keys accordingly.</p> -->
      </div>
    </div>

</Content>
