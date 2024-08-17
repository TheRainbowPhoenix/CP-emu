<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { state } from "../stores/app";

  import PickFile from "../../assets/icons/pickFile.svelte";
  import CopyScreen from "../../assets/icons/copyScreen.svelte";
  import SaveScreen from "../../assets/icons/saveScreen.svelte";
  import Debug from "../../assets/icons/debug.svelte";
  import Dump from "../../assets/icons/dump.svelte";
  import FullScreen from "../../assets/icons/fullScreen.svelte";
  import Run from "../../assets/icons/run.svelte";

  const pickFile = () => {
    fileInput.click();
  };

  let fileInput: HTMLInputElement;

  const dispatch = createEventDispatcher();

  const handleFile = (e: Event) => {
    dispatch('romChanged', e);
  }

  let ready = false;
  $: ready = $state === "ready";
</script>

<div class="tools-container">
  <div class="toolbar">
    <button
      class="toolbar-tool"
      type="button"
      tabindex="0"
      on:click={pickFile}
      id="btn_pickFile"
    >
      <PickFile />
      <input
        bind:this={fileInput}
        type="file"
        id="fileInput"
        style="display: none;"
        on:change={handleFile}
      />
    </button>

    <div
      class="separator"
      role="separator"
      data-orientation="horizontal"
      aria-orientation="horizontal"
    ></div>

    <button class="toolbar-tool" type="button" tabindex="0" id="btn_copyScreen">
      <CopyScreen />
    </button>
    <button class="toolbar-tool" type="button" tabindex="0" id="btn_saveScreen">
      <SaveScreen />
    </button>
    <div
      class="separator"
      role="separator"
      data-orientation="horizontal"
      aria-orientation="horizontal"
    ></div>

    <button class="toolbar-tool" type="button" tabindex="0" id="btn_debug">
      <Debug />
    </button>
    <button class="toolbar-tool" type="button" tabindex="0" id="btn_dump">
      <Dump />
    </button>
    <button class="toolbar-tool" type="button" tabindex="0" id="btn_run">
      <Run />
    </button>

    <div
      class="separator"
      role="separator"
      data-orientation="horizontal"
      aria-orientation="horizontal"
    ></div>

    <button class="toolbar-tool" type="button" tabindex="0" id="btn_fullscreen">
      <FullScreen />
    </button>
  </div>
</div>

<style>
  .tools-container {
    margin-left: 1.5em;
    visibility: visible;
    position: relative;
    display: flex;
    overflow: hidden;
    /* flex: 0 0 32px; */
    padding: 8px;
    font-family: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo,
      Consolas, "DejaVu Sans Mono", monospace;
    font-weight: normal;
    color: var(--cp-text);
    min-height: 960px;
    margin-top: -40px;
    min-width: 80px;
  }

  .toolbar {
    background: #0d0d0d;
    border: 2px solid #2f2f2f;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    gap: 8px;
    -webkit-user-select: none;
    user-select: none;
    padding: 0.6rem;
    border-radius: 0.6rem;
    color: #a1a1aa;
    height: 100%;
  }

  .toolbar-tool {
    border-radius: 0.25rem;
    background-color: transparent;
    display: inline-flex;
    block-size: 48px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    min-inline-size: 48px;
    row-gap: 12px;
    position: relative;
    transition: background-color 0.25s ease-in-out;
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
    border: none;
  }

  .toolbar-tool:hover {
    background-color: #1c1c20;
  }

  button.toolbar-tool :global(svg) {
    width: 32px;
    height: 32px;
  }

  .separator {
    width: auto;
    margin: 0.5rem 4px;
    min-height: 2px;
    block-size: 2px;
    border-radius: 4px;
    inline-size: 100%;
    background-color: #202026;
  }
</style>
