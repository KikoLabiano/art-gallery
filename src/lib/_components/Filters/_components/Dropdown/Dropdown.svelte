<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let options: string[] = [];
  export let placeholder: string = '';
  export let label: string = '';

  let selectedOption: string = placeholder;
  let closedDropdown: boolean = false;

  const dispatch = createEventDispatcher();

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
      {#each options as option}
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
