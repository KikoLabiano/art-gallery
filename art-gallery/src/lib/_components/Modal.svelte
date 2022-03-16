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
  import { onMount } from 'svelte';

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
    if (!isPan) return; // Do nothing
    const { x, y } = getXY(ev);
    console.log(initial.x - x, initial.y - y);
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

  const scrollZoom = (container, max_scale, factor) => {
    var target = container.children().first();
    var size = { w: target.width(), h: target.height() };
    var pos = { x: 0, y: 0 };
    var zoom_target = { x: 0, y: 0 };
    var zoom_point = { x: 0, y: 0 };
    var scale = 1;
    target.css('transform-origin', '0 0');
    target.on('mousewheel DOMMouseScroll', scrolled);

    const scrolled = e => {
      var offset = container.offset();
      zoom_point.x = e.pageX - offset.left;
      zoom_point.y = e.pageY - offset.top;

      e.preventDefault();
      var delta = e.delta || e.originalEvent.wheelDelta;
      if (delta === undefined) {
        //we are on firefox
        delta = e.originalEvent.detail;
      }
      delta = Math.max(-1, Math.min(1, delta)); // cap the delta to [-1,1] for cross browser consistency

      // determine the point on where the slide is zoomed in
      zoom_target.x = (zoom_point.x - pos.x) / scale;
      zoom_target.y = (zoom_point.y - pos.y) / scale;

      // apply zoom
      scale += delta * factor * scale;
      scale = Math.max(1, Math.min(max_scale, scale));

      // calculate x and y based on zoom
      pos.x = -zoom_target.x * scale + zoom_point.x;
      pos.y = -zoom_target.y * scale + zoom_point.y;

      // Make sure the slide stays in its container area when zooming out
      if (pos.x > 0) pos.x = 0;
      if (pos.x + size.w * scale < size.w) pos.x = -size.w * (scale - 1);
      if (pos.y > 0) pos.y = 0;
      if (pos.y + size.h * scale < size.h) pos.y = -size.h * (scale - 1);

      update();
    };

    const update = () => {
      target.css('transform', 'translate(' + pos.x + 'px,' + pos.y + 'px) scale(' + scale + ',' + scale + ')');
    };
  };
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
    background: #252525;
    border: 2px solid #fff;
    filter: drop-shadow(5px 5px 5px #555);
    padding: 1em;
  }

  .visible {
    visibility: visible !important;
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

  ::-webkit-scrollbar-track {
    background: #252525;
  }

  ::-webkit-scrollbar-thumb {
    background: white;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: gray;
  }
</style>
