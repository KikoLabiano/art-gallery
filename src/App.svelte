<script lang="ts">
  import Gallery from './lib/Gallery.svelte';
</script>

<main>
  <Gallery />
</main>

<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Gelasio" rel="stylesheet" />
</svelte:head>

<style lang="scss">
  :root {
    font-family: 'Gelasio', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #252525;
  }

  main {
    text-align: center;
    background-color: #252525;
    height: 90vh;
    width: 99vw;
  }
</style>
