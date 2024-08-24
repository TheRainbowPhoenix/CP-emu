<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { copyScreenFeedback, debugging, state, tracing } from "../stores/app";

  import PickFile from "../../assets/icons/pickFile.svelte";
  import CopyScreen from "../../assets/icons/copyScreen.svelte";
  import SaveScreen from "../../assets/icons/saveScreen.svelte";
  import Debug from "../../assets/icons/debug.svelte";
  import Dump from "../../assets/icons/dump.svelte";
  import FullScreen from "../../assets/icons/fullScreen.svelte";
  import Run from "../../assets/icons/run.svelte";
  import Popover from "../components/popover.svelte";
  import Folder from "../../assets/icons/folder.svelte";

  const pickFile = () => {
    fileInput.click();
  };

  $: loadHint = $state === "empty" 
  $: loaded = $state === "loaded"
  $: crashed = $state === "crashed"
  $: running = $state === "running"

  let crashedHint = false;
  $: if (crashed) {
    crashedHint = true;
    setTimeout(() => {
      crashedHint = false
    }, 4000)
  }

  let fileInput: HTMLInputElement;

  const dispatch = createEventDispatcher();

  const handleFile = (e: Event) => {
    dispatch('romChanged', e);
  }

  const doBrowseFiles = (e: Event) => {
    dispatch('doBrowseFiles', e);
  }

  const doCopyScreen = (e: Event) => {
    dispatch('doCopyScreen', e);
  }

  const doSaveScreen = (e: Event) => {
    dispatch('doSaveScreen', e);
}

  const doRun = (e: Event) => {
    dispatch('doRun', e);
  }

  const doFullscreen = (e: Event) => {
    dispatch('doFullscreen', e);
  }

  const doDump = (e: Event) => {
    dispatch('doDump', e);
  }

  const doDebug = (e: Event) => {
    dispatch('doDebug', e);
  }

  let ready = false;
  $: ready = $state === "ready";
  $: isDebug = $debugging;
</script>


<div class="toolbar">
  <button
    class="toolbar-action"
    type="button"
    tabindex="0"
    on:click={pickFile}
    id="btn_pickFile"
  >

  <Popover visible={loadHint}>
      Start by picking a BIN program
  </Popover>
    
    <PickFile />
    <input
      bind:this={fileInput}
      type="file"
      id="fileInput"
      style="display: none;"
      on:change={handleFile}
    />
  </button>

  <button
    class="toolbar-action"
    type="button"
    tabindex="0"
    on:click={doBrowseFiles}
    id="btn_browseFiles"

  > 
    <Folder />
  </button>


  <div
    class="separator"
    role="separator"
    data-orientation="horizontal"
    aria-orientation="horizontal"
  ></div>

  <button class="toolbar-action" type="button" tabindex="0" on:click={doCopyScreen} id="btn_copyScreen">
    <Popover visible={$copyScreenFeedback !== null}>
      {$copyScreenFeedback}
    </Popover>

    <CopyScreen />
  </button>
  <button class="toolbar-action" type="button" tabindex="0" on:click={doSaveScreen} id="btn_saveScreen">
    <SaveScreen />
  </button>
  <div
    class="separator"
    role="separator"
    data-orientation="horizontal"
    aria-orientation="horizontal"
  ></div>

  <button class="toolbar-action" type="button" tabindex="0" id="btn_debug" on:click={doDebug} disabled={!loaded && (running && !isDebug)}>
    <Debug active={$debugging} />
  </button>
  <button class="toolbar-action" type="button" tabindex="0" id="btn_dump" on:click={doDump} disabled={!loaded && !crashed && !running}>
    <Popover visible={crashedHint && !$tracing}>
      Check why it crashed here
    </Popover>

    <Dump />
  </button>
  <button class="toolbar-action" type="button" tabindex="0" id="btn_run" on:click={doRun} disabled={!loaded}>
      <Popover visible={loaded && !$debugging}>
          Now let's start the program
      </Popover>

      <Run />
      
  </button>

  <div
    class="separator"
    role="separator"
    data-orientation="horizontal"
    aria-orientation="horizontal"
  ></div>

  <button class="toolbar-action" type="button" tabindex="0" on:click={doFullscreen} id="btn_fullscreen">
    <FullScreen />
  </button>
</div>