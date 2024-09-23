<script>
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Features from '$lib/components/Features.svelte';
  import Newsletter from '$lib/components/Newsletter.svelte';
  import Content from '$lib/components/Content.svelte';
</script>

<Content showHeader={false} isHomePage={true}>

  <Hero>
    <Header isHomePage=true transparent=true />
  </Hero>

  <Features/>

  <Newsletter/>

</Content>

