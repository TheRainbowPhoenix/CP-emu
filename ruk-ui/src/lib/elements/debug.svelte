<script lang="ts">
    import { createEventDispatcher, onDestroy } from "svelte";
    import Close from "../../assets/icons/close.svelte";
    import { debugging, debugPane } from "../stores/app";
  import StepOver from "../../assets/icons/stepOver.svelte";
  import StepIn from "../../assets/icons/stepIn.svelte";
  import Ffowards from "../../assets/icons/ffowards.svelte";
  import Halt from "../../assets/icons/halt.svelte";

    const dispatch = createEventDispatcher();

    const doClose = (e: Event) => {
        dispatch("doClose", e);
        // TODO: do this on main ?
        debugPane.set(false);
    };

    const doStepOver = (e: Event) => { dispatch("doStepOver", e) }
    const doStepIn = (e: Event) => { dispatch("doStepIn", e) }
    const doFastForwards = (e: Event) => { dispatch("doFastForwards", e) }
    const doHalt = (e: Event) => { dispatch("doHalt", e) }
</script>

<div class="debugging-panel view-panel" class:visible={$debugPane}>
    <div class="titlebar">
      <h4 class="header">Debugger</h4>

      
      <button
        class="toolbar-action"
        type="button"
        title="Run until"
        tabindex="0"
        on:click={doFastForwards}
        id="btn_forwards_debug"
      >
        <Ffowards />
      </button>

      <button
        class="toolbar-action"
        type="button"
        title="step over"
        tabindex="0"
        on:click={doStepOver}
        id="btn_step_over_debug"
      >
        <StepOver />
      </button>

      <button
        class="toolbar-action"
        type="button"
        title="step in"
        tabindex="0"
        on:click={doStepIn}
        id="btn_step_in_debug"
      >
        <StepIn />
      </button>
      <button
        class="toolbar-action"
        type="button"
        title="halt"
        tabindex="0"
        on:click={doHalt}
        id="btn_close_debug"
      >
        <Halt />
      </button>
  
      <button
        class="toolbar-action"
        type="button"
        title="close"
        tabindex="0"
        on:click={doClose}
        id="btn_close_debug"
      >
        <Close />
      </button>
  
    </div>
    <div class="contents">

        <p>TODO</p>
    </div>
</div>

<style>
    .debugging-panel {
        max-width: 0px;
        max-height: 70px;
        visibility: hidden;
        width: 650px;
    }

    .debugging-panel.visible {
        max-width: 95vw;
        max-height: 95vh;
        flex: 0.45 1 650px;
        visibility: visible;
    }
    
</style>