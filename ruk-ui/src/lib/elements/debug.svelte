<script lang="ts">
    import { createEventDispatcher, onDestroy, onMount } from "svelte";
    import Close from "../../assets/icons/close.svelte";
    import { currentPC, debugging, debugPane, getPC, readMemory2Quick, state, tracing } from "../stores/app";
    import StepOver from "../../assets/icons/stepOver.svelte";
    import StepIn from "../../assets/icons/stepIn.svelte";
    import Ffowards from "../../assets/icons/ffowards.svelte";
    import Halt from "../../assets/icons/halt.svelte";
    import { get } from "svelte/store";
    import { default_theme } from "../disasm/theme";

    const dispatch = createEventDispatcher();

    const doClose = (e: Event) => {
        dispatch("doClose", e);
        // TODO: do this on main ?
        debugPane.set(false);
    };

    const doStepOver = (e: Event) => {
        const instr = prefetchInstr()
        try {
            if ($tracing) {
                window.Module.ccall('dumpOneFrame', null, [], [])
            }
            
            window.Module.ccall('runOneFrame', null, ['number'], [1])
            console.debug("runOneFrame OK - ", instr);
        } catch (error) {
            console.error(error);
            return false;
        }

        dispatch("doStepOver", e);
    }
    
    const doStepIn = (e: Event) => {
        
        const instr = prefetchInstr()
        try {
            if ($tracing) {
                window.Module.ccall('dumpOneFrame', null, [], [])
            }
            
            window.Module.ccall('runOneFrame', null, ['number'], [1])
            console.debug("runOneFrame OK - ", instr);
        } catch (error) {
            console.error(error);
            return false;
        }

        dispatch("doStepIn", e);
     }
    const doFastForwards = (e: Event) => { 
        window.Module.ccall('runFrame', null, [], []);

        dispatch("doFastForwards", e);
    }
    const doHalt = (e: Event) => { dispatch("doHalt", e) }


    // Mapping for system instructions
    let localGetPC: any = null;
    let localReadMem: any = null;
    let local_pc: number;

    $: if ($getPC !== undefined) {
        localGetPC = $getPC;
        local_pc = localGetPC() >>> 0;
        currentPC.set(local_pc);
    }

    $: if ($readMemory2Quick !== undefined) {
        localReadMem = $readMemory2Quick;
    }

    let debugger_state: number = 0;
    
    // Check if the system is ready
    $: if (localReadMem && localGetPC && $debugging && ($state === "running")) {
        console.log("Ready to ready memory !")
        try {
            local_pc = localGetPC()
            let instr = localReadMem(local_pc);
            debugger_state = 1;
            setupUI();
        } catch (_) {}
    }

    let instructions: {
        pc: number, value: number
    }[] = []

    const refreshInstructions = () => {
        if (localReadMem && localGetPC) {
            local_pc = localGetPC();
            for (let i = 0; i < 30; i++) {
                let instr = localReadMem(local_pc + i * 2)
                instructions.push({
                    pc: (local_pc >>> 0) + i * 2,
                    value: instr
                })
            }
            return true
        }
        return false
    } 

    const setupUI = () => {
        if (refreshInstructions()) {
            console.log(instructions);
            debugger_state = 10
        } else {
            console.error("Can't load instructions ...");
            debugger_state = -1;
        }
    }

    const prefetchInstr = () => {
        if (localReadMem && localGetPC) {
            local_pc = localGetPC();
            currentPC.set(local_pc)
            return localReadMem(local_pc)
        } else {
            return null;
        }
    }

    const styles = Object.entries(default_theme).map(
        (k) => `--${k[0].replaceAll(" ", '-').replaceAll(/[^a-zA-Z-]/g, '')}: ${k[1]}`
    ).join('; ')


    onMount(() => {
        // const pc = ($getPC() >>> 0);
        // console.log("Got PC : ", pc)
        // currentPC.set(pc);

        // const instr = $readMemory2Quick(pc);
        // console.log("Got instr : ", instr)

        // window.Module.ccall('readMemory2Quick', null, ["number"], [pc])
        // window.Module.ccall('writeMemory', null, ["number", "number", "number"], [address, size, value])
    })
</script>

<div class="debugging-panel view-panel" class:visible={$debugPane}>
    <div class="titlebar">
      <h4 class="header">Debugger - {$state}</h4>

      
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
        {#if debugger_state === 0}
            <p class="skeleton">Loading ...</p>
        {:else if debugger_state === 1}
            <p class="skeleton">Fetching data ...</p>
        {:else if debugger_state === 10}
            <div>Current PC: {(local_pc >>> 0).toString(16).padStart(8, '0')}</div>
            <div class="disassembly" style={styles}>
                {#each instructions as instr, i (instr.pc)}
                    <div class="line" class:current={(local_pc >>> 0) == (instr.pc >>> 0)}>
                        <!-- /* breakpoint/gutter, pc, instr, values, raw instr */ -->
                        <div>-</div>
                        <div>{instr.pc.toString(16).padStart(8, '0')}</div>
                        <div>{"OP_" + instr.value}</div>
                        <div> - </div>
                        <div>; {instr.value.toString(16).padStart(4, '0')}</div>
                    </div>
                {/each}
            </div>
        {:else}
            <p class="skeleton">Debugger state KO</p>
        {/if}
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

    .skeleton {
        padding: .5rem .75rem;
        text-align: center;
    }

    .disassembly .line {
        /* breakpoint/gutter, pc, instr, values, raw instr */ 
        grid-template-columns: .5fr 1.5fr 1fr 2fr 1fr;
        display: grid;
        gap: .5rem;
    }

    .disassembly .line div {
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
        overflow: hidden;
    }

    .disassembly .line.current {
        background-color: var(--highlightPC);
    }

    .disassembly .line div:nth-child(2) {
        color: var(--ec-offset);
    }
    
    .disassembly .line div:nth-child(4) {
        color: var(--ec-num);
    }
    
    .disassembly .line div:nth-child(5) {
        color: var(--ec-comment);
    }
    
</style>