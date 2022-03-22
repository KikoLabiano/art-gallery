<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import Dropdown from './_components/Dropdown/Dropdown.svelte';
  export let autores: string[] = [];
  export let estilos: string[] = [];

  let placeholderEstilo: string = 'Estilo';
  let placeholderAutor: string = 'Autor';

  const dispatch = createEventDispatcher();

  const onFilter = (autor: string, estilo: string) => {
    dispatch('filter', {
      autor,
      estilo
    });
  };

  const onDeleteFilter = () => {
    dispatch('deleteFilter');
  };

  let selectedAutor: string = '';
  let selectedEstilo: string = '';

  const onSelectAutor = (autor: string) => {
    selectedAutor = autor;
  };

  const onSelectEstilo = (estilo: string) => {
    selectedEstilo = estilo;
  };
</script>

<div class:filtersWrapper={true}>
  <Dropdown
    initialOptions={autores}
    label=""
    placeholder={placeholderAutor}
    options={autores}
    on:select={event => {
      onSelectAutor(event.detail.text);
    }}
  />
  <Dropdown
    initialOptions={estilos}
    label=""
    placeholder={placeholderEstilo}
    options={estilos}
    on:select={event => {
      onSelectEstilo(event.detail.text);
    }}
  />
  <div
    class:filtersButton={true}
    on:click={() => {
      onFilter(selectedAutor, selectedEstilo);
    }}
  >
    Buscar
  </div>
  <div
    class:filtersButton={true}
    on:click={() => {
      placeholderEstilo = 'Estilo';
      placeholderAutor = 'Autor';
      onDeleteFilter();
    }}
  >
    Borrar
  </div>
</div>

<style src="./Filters.scss" type="text/scss"></style>
