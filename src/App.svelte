<script lang="ts">
  import Gallery from './lib/Gallery.svelte';
  import ThemeContext from './lib/_functions/Contexts/ThemeContext.svelte';
</script>

<main>
  <ThemeContext>
    <Gallery />
  </ThemeContext>
</main>

<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Gelasio" rel="stylesheet" />
</svelte:head>

<style lang="scss">
  :root {
    font-family: 'Gelasio', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  :global(html) {
    background-color: var(--theme-background);
    color: var(--theme-text);
    transition: background-color 0.5s ease;
  }

  main {
    text-align: center;
    height: 90vh;
    width: 99vw;
  }
</style>
