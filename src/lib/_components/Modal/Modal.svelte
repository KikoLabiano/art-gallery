<script context="module" lang="ts">
  let onTop; //keeping track of which open modal is on top
  const modals = {}; //all modals get registered here for easy future access

  // 	returns an object for the modal specified by `id`, which contains the API functions (`open` and `close` )
  export function getModal(id = '') {
    return modals[id];
  }
</script>

<script lang="ts">
  import { onDestroy } from 'svelte';

  let topDiv;
  let visible = false;
  let prevOnTop;
  let closeCallback;
  let imageRef;

  export let id = '';

  const initial = { x: 0, y: 0 };
  let isPan = false;

  const getXY = ({ clientX, clientY }) => {
    const bcr = imageRef.getBoundingClientRect();
    return {
      x: clientX - bcr.left,
      y: clientY - bcr.top
    };
  };

  const panStart = ev => {
    ev.preventDefault();
    isPan = true;
    const { x, y } = getXY(ev);
    initial.x = imageRef.scrollLeft + x;
    initial.y = imageRef.scrollTop + y;
  };

  const panMove = ev => {
    if (!isPan) return;
    const { x, y } = getXY(ev);
    imageRef.scrollTo(initial.x - x, initial.y - y);
  };

  const panEnd = () => {
    isPan = false;
  };

  const keyPress = ev => {
    //only respond if the current modal is the top one
    if (ev.key == 'Escape' && onTop == topDiv) close(); //ESC
  };

  /**  API **/
  const open = callback => {
    closeCallback = callback;
    if (visible) return;
    prevOnTop = onTop;
    onTop = topDiv;
    window.addEventListener('keydown', keyPress);

    //this prevents scrolling of the main window on larger screens
    document.body.style.overflow = 'hidden';

    visible = true;
    //Move the modal in the DOM to be the last child of <BODY> so that it can be on top of everything
    document.body.appendChild(topDiv);
  };

  const close = retVal => {
    if (!visible) return;
    window.removeEventListener('keydown', keyPress);
    onTop = prevOnTop;
    if (onTop == null) document.body.style.overflow = '';
    visible = false;
    if (closeCallback) closeCallback(retVal);
  };

  //expose the API
  modals[id] = { open, close };

  onDestroy(() => {
    delete modals[id];
    window.removeEventListener('keydown', keyPress);
  });
</script>

<div id="topModal" class:visible bind:this={topDiv} on:click={() => close()}>
  <div id="modal" on:click|stopPropagation={() => {}}>
    <svg id="close" on:click={() => close()} viewBox="0 0 12 12">
      <circle cx="6" cy="6" r="6" />
      <line x1="3" y1="3" x2="9" y2="9" />
      <line x1="9" y1="3" x2="3" y2="9" />
    </svg>
    <div bind:this={imageRef} id="modal-content" on:mousedown={panStart} on:mousemove={panMove} on:mouseup={panEnd}>
      <slot />
    </div>
  </div>
</div>

<style>
  #topModal {
    visibility: hidden;
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #4448;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #modal {
    position: relative;
    border-radius: 6px;
    filter: drop-shadow(5px 5px 5px #555);
    padding: 1em;
  }

  :global(#modal) {
    background: var(--theme-background);
    border: 2px solid var(--theme-text);
  }

  .visible {
    visibility: visible !important;
    transition: visibility 0.3s ease-in-out;
  }

  #close {
    position: absolute;
    top: -12px;
    right: -12px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    fill: rgb(0, 0, 0);
    transition: transform 0.3s;
  }

  #close:hover {
    transform: scale(1.5);
  }

  #close line {
    stroke: #fff;
    stroke-width: 2;
  }
  #modal-content {
    max-width: calc(95vw - 20px);
    max-height: calc(95vh - 20px);
    overflow: auto;
  }

  ::-webkit-scrollbar {
    width: 10px !important;
    height: 10px !important;
  }

  :global(::-webkit-scrollbar-track) {
    background: var(--theme-background);
  }

  :global(::-webkit-scrollbar-thumb) {
    background: var(--theme-text);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: gray;
  }
</style>
