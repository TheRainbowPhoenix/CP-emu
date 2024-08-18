<script lang="ts">
  import { createEventDispatcher, onDestroy } from "svelte";
  import Close from "../../assets/icons/close.svelte";
  import Refresh from "../../assets/icons/refresh.svelte";
  import { lastDump, tracing, type Dump } from "../stores/app";
  import Filter from "../../assets/icons/filter.svelte";

  const registers_names: string[] = [
    "r0",
    "r1",
    "r2",
    "r3",
    "r4",
    "r5",
    "r6",
    "r7",
    "r8",
    "r9",
    "r10",
    "r11",
    "r12",
    "r13",
    "r14",
    "r15",
    "r0_banked",
    "r1_banked",
    "r2_banked",
    "r3_banked",
    "r4_banked",
    "r5_banked",
    "r6_banked",
    "r7_banked",
    "PC",
    "PR",
    "SR",
    "GBR",
    "VBR",
    "MACH",
    "MACL",
    "SSR",
    "SPC",
    "SGR",
    "DBR",
    "TEA",
    "EXPEVT",
    "TRA",
    "RS",
    "RE",
    "RC",
    "x0",
    "x1",
    "y0",
    "y1",
    "a0",
    "a0g",
    "a1",
    "a1g",
    "m0",
    "m1",
  ];

  let filtered_names: string[] = [
    "r0",
    "r1",
    "r2",
    "r3",
    "r4",
    "r5",
    "r6",
    "r7",
    "r8",
    "r9",
    "r10",
    "r11",
    "r12",
    "r13",
    "r14",
    "r15",
    "PR",
    "T",
    "SR",
  ];

  let dump: Dump | null = null;

  const unSub = lastDump.subscribe((d) => {
    dump = d;
  });

  onDestroy(() => {
    unSub();
  });

  let filtered = true;
  const doFilter = (e: Event) => {
    filtered = !filtered;
  };

  const dispatch = createEventDispatcher();

  const doRefresh = (e: Event) => {
    dispatch("doRefresh", e);
  };

  const doClose = (e: Event) => {
    dispatch("doClose", e);
    // TODO: do this on main ?
    tracing.set(false);
  };
</script>

<div class="tracing-panel view-panel" class:visible={$tracing}>
  <div class="titlebar">
    <h4 class="header">Registers</h4>

    <button
      class="toolbar-action"
      type="button"
      tabindex="0"
      on:click={doFilter}
      id="btn_filter_trace"
    >
      <Filter on={filtered} />
    </button>

    <button
      class="toolbar-action"
      type="button"
      tabindex="0"
      on:click={doRefresh}
      id="btn_refresh_trace"
    >
      <Refresh />
    </button>

    <button
      class="toolbar-action"
      type="button"
      tabindex="0"
      on:click={doClose}
      id="btn_close_trace"
    >
      <Close />
    </button>
  </div>
  <div class="contents">
    <div class="registers">
      {#if dump}
        {#key filtered}
          {#each dump.registers as reg, i}
            {@const label = registers_names[i] || "r" + i.toString(16)}
            {#if !filtered || filtered_names.includes(label)}
              <div class="row">
                <label for="reg_{i}" title={label}>{label}</label>
                <input
                  type="text"
                  name="reg_{i}"
                  value={reg.toString(16).toUpperCase()}
                  readonly
                />
              </div>
            {/if}
          {/each}
        {/key}
      {:else}
        <p>Loading ...</p>
      {/if}
    </div>
  </div>
</div>

<style>
  
  .tracing-panel {
    max-width: 0px;
    max-height: 70px;
    visibility: hidden;
  }

  .tracing-panel.visible {
    min-width: 350px;
    max-width: 95vw;
    max-height: 95vh;
    visibility: visible;
  }

  .tracing-panel.visible .contents {
    overflow: auto;
    opacity: 1;
    animation: hide-scroll 0.5s backwards;
  }

  @keyframes hide-scroll {
    from,
    to {
      overflow: hidden;
    }
  }

  .tracing-panel .contents {
    overflow: hidden;
  }

  .tracing-panel.visible .contents {
    overflow: auto;
    opacity: 1;
    }

  .registers {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 1.2rem 0.6rem;
    padding-top: 0;
  }

  .registers .row {
    display: flex;
    overflow: hidden;
    align-items: flex-end;
  }

  .registers label {
    flex: 1 1 45%;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 50%;
    overflow: hidden;
  }

  .registers input {
    flex: 0 0 55%;
    width: 55%;

    block-size: 2rem;
    box-sizing: border-box;
    inline-size: 100%;
    padding: 0.5rem 0.25rem;

    text-overflow: ellipsis;
    font-variant-numeric: tabular-nums;
    text-align: right;

    background-color: #1c1c20;
    border: 2px solid #2f2f2f;
    border-radius: 0.25rem;
  }

  .registers input:focus-visible {
    outline: none;
    border-color: var(--cp-accent-hover);
  }
</style>
