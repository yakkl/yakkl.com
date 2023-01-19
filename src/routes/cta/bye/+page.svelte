<script>
  import Header from "$lib/header/Header.svelte";
  import Gradient from "$lib/backgrounds/Gradient.svelte";
  import Footer from "$lib/footer/Footer.svelte";
</script>

<Gradient>
  <Header/>
    <div class="bg-indigo-700">
      <div class="mx-auto max-w-2xl py-16 px-4 text-left sm:py-20 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-white">
          <span>This is a sad day :(.</span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-indigo-200">It appears you're leaving or resetting YAKKL Smart Wallet. We enjoyed serving you and we all hope to see you again soon! Feel free to use us as a source of information in the crypto space.</p>
        <p class="mt-4 text-lg leading-6 text-indigo-200">If you are using the Basic version then there is nothing else to do. However, if you are using the Premier version then please login to your dashboard/portal and select 'Billing' and then 'Cancel Subscription.' We do not offer refunds but this will stop any renewals from occuring. Please let us know why you're leaving.</p>
        <p class="mt-4 text-lg leading-6 text-indigo-200">If you're using the Premier version you can downgrade to the Basic version by downloading again and import your keys.</p>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="" class="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto">Download for free</a>
      </div>
    </div>
    <Footer/>
</Gradient>
