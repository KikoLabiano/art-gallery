<script lang="ts">
  import { getContext } from 'svelte';
  const { toggle } = getContext('theme');

  let isDarkMode: boolean = false;

  const onToggleTheme = () => {
    isDarkMode = !isDarkMode;
    toggle();
  };
</script>

<button class:themeButton={true} on:click={onToggleTheme}>
  <div class:item-1={true} class:sun_item-1={isDarkMode} class:moon_item-1={!isDarkMode} />
  <div class:item-2={true} class:sun_item-2={isDarkMode} class:moon_item-2={!isDarkMode} />
</button>

<style src="./ThemeButton.scss" type="text/scss"></style>
