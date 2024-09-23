<script>
  import Content from '$lib/components/Content.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<Content>
  <PageHeader>
    <span slot="smallTitle">Getting Started</span>
    <span slot="largeTitle">Welcome let us know how we can help you.</span>
  </PageHeader>

  <div class="mt-14 rounded-4xl ring-1 ring-inset ring-black/5 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))] text-gray-950">
      <div class="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
          <span class="block">Boost your productivity.</span>
          <span class="block">Start using YAKKL® today.</span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-gray-700">Finally, a Smart Crypto Wallet that delivers!</p>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="" class="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 sm:w-auto">Download for free</a>
      </div>
    </div>
</Content>
