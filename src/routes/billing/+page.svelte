<script>
  import Header from "$lib/header/Header.svelte";
  import Gradient from "$lib/backgrounds/Gradient.svelte";
  import Footer from "$lib/footer/Footer.svelte";
</script>

<Gradient>
  <Header/>

  <div class="bg-gradient-to-b from-white to-gray-50">
    <div class="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
      <div class="sm:align-center sm:flex sm:flex-col">
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">Update on YAKKL Chrome Extension</h1>
        <p class="mt-5 text-xl text-gray-500 sm:text-center">The YAKKL Chrome Extension is v0.9.6.</p>
        <p class="mt-5 text-xl text-gray-500 sm:text-center">Download of YAKKL Smart Wallet is by invitation only until v1.0.0.</p>
        <p class="mt-5 text-xl text-gray-500 sm:text-center">If you would like to be added to the list then please sign up to be notified <a href="/#newsletter" class="text-blue-700">HERE</a>.</p>
        <p class="mt-5 text-xl text-gray-500 sm:text-center">The count down to v1.0.0 is on and we can't wait to demonstrate the incredible features to everyone!</p>
        <!-- <div class="relative mt-6 flex self-center rounded-lg bg-gray-100 p-0.5 sm:mt-8">
          <button type="button" class="relative w-1/2 whitespace-nowrap rounded-md border-gray-200 bg-white py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:w-auto sm:px-8">Monthly billing</button>
          <button type="button" class="relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-transparent py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:w-auto sm:px-8">Yearly billing</button>
        </div> -->
      </div>
    </div>
  </div>

  <Footer/>
</Gradient>
