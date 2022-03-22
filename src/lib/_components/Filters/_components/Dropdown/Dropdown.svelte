<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  export let options: string[] = [];
  export let initialOptions: string[] = [];
  export let placeholder: string = '';
  export let label: string = '';

  let selectedOption: string = placeholder;
  let closedDropdown: boolean = false;
  let filter: string = '';
  let isFiltered: boolean = false;

  const dispatch = createEventDispatcher();

  onMount(() => {
    console.log({ options });
    initialOptions = [...options];
  });

  $: {
    if (filter !== '') {
      options = initialOptions.filter(option => option.includes(filter));
    }
    console.log(initialOptions.filter(option => option.includes(filter)));
    isFiltered = filter !== '';
  }

  const onSelectOption = (option: string) => {
    dispatch('select', {
      text: option
    });
  };
</script>

<div class:dropdownWrapper={true}>
  <label>{label}</label>
  <details open={closedDropdown}>
    <summary
      on:click={() => {
        closedDropdown = false;
      }}>{selectedOption}</summary
    >
    <ul class:closed={closedDropdown}>
      <div class:filterWrapper={true}>
        <input class:buscador={true} type="text" placeholder="Buscar..." bind:value={filter} />
        {#if filter !== ''}
          <span
            class:deleteFilter={true}
            on:click={() => {
              filter = '';
            }}
          />
        {/if}
      </div>
      {#each isFiltered ? options : initialOptions as option}
        <li
          on:click={() => {
            selectedOption = option;
            closedDropdown = true;
            onSelectOption(option);
          }}
        >
          {option}
        </li>
      {/each}
    </ul>
  </details>
</div>

<style src="./Dropdown.scss" type="text/scss"></style>
