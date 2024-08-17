<script lang="ts">
  import { onMount } from "svelte";
  import { state, traceback } from "../stores/app";
  import Bomb from "../../assets/icons/bomb.svelte";
  import Unhappy from "../../assets/icons/unhappy.svelte";

  let canvas: HTMLCanvasElement;

  const doContextLost = (e: Event) => {
    alert("WebGL context lost. You will need to reload the page.");
  };

  $: crashed = $state === "crashed";

  onMount(() => {
    window.Module.canvas = canvas;

    canvas.addEventListener(
      "webglcontextlost",
      (e) => {
        alert("WebGL context lost. You will need to reload the page.");
        e.preventDefault();
      },
      false
    );
  });
</script>

<canvas
  class="emscripten"
  id="canvas"
  bind:this={canvas}
  on:contextmenu|preventDefault
  tabindex="-1"
></canvas>

{#if crashed}
  <div class="bsod">
    <Unhappy />
    <pre>
            <code class="name">{$traceback.name}</code>
            <code class="message">{$traceback.message}</code>
        </pre>
  </div>
{/if}

<style>
  canvas {
    image-rendering: pixelated;
    position: absolute;
    top: 72px;
    left: 54px;
  }

  .bsod {
    position: absolute;
    top: 72px;
    left: 54px;
    width: 320px;
    height: 528px;
    background-color: #00a;
    color: #aaa;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bsod pre {
    padding-top: 0;
    font-size: 1.25rem;
    font-family: "Lucida Console", monospace;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    font-weight: bold;
    padding: 0;
    margin: 0;
    padding: 24px;

    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    flex-grow: 1;
    flex-shrink: 1;
  }

  .bsod .name {
    display: flex;
    justify-content: center;
    background: #aaaaaa;
    color: #0000a0;
  }

  .bsod .message {
    height: 100%;
    overflow: auto;
  }

  .bsod :global(svg) {
    width: 6rem;
    height: 6rem;
    padding: 1rem;
    padding-top: 2rem;
    width: 6rem;
    height: 6rem;
    padding: 1rem;
    flex-grow: 0;
    flex-shrink: 0;
  }
</style>
