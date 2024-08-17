<script lang="ts">
  import { onMount } from "svelte";

  let canvas: HTMLCanvasElement;

  const doContextLost = (e) => {
    alert('WebGL context lost. You will need to reload the page.');
  }

    onMount(() => {
        window.Module.canvas = canvas;

		canvas.addEventListener("webglcontextlost", (e) => {
            alert('WebGL context lost. You will need to reload the page.');
            e.preventDefault(); }, false);
	})

</script>

<canvas class="emscripten" id="canvas" bind:this={canvas} on:contextmenu|preventDefault tabindex=-1></canvas>

<style>
    canvas {
        image-rendering: pixelated;
        position: absolute;
        top: 72px;
        left: 54px;
    }
</style>