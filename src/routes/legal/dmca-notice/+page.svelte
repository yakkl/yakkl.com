<script>
  import Header from "$lib/header/Header.svelte";
  import Gradient from "$lib/backgrounds/Gradient.svelte";
  import Footer from "$lib/footer/Footer.svelte";
</script>

<Gradient>
  <Header/>
    <!-- svelte-ignore missing-declaration -->
    <div class="relative w-full px-6 py-10 overflow-hidden md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-10 lg:pb-15">
      <div class="mt-8 prose prose-slate max-w-prose mx-auto prose-sm">
        <h1>DMCA-NOTICE</h1>

        <p>
          We're in the process of updating this notice. Thank you.
        </p>
      </div>
    </div>
  <Footer/>
</Gradient>
