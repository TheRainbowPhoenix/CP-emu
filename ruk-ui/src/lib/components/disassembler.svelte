<script lang="ts">
  import { onMount } from "svelte";
  import Disassembler from "../jcore/disassembly";
  import { format } from "../tools/fstrings";
  import { default_theme } from "../disasm/theme";
  import { colorizeAsm, getOpColor } from "../disasm/guiWrap";

  export let local_pc: number;
  export let instructions: {
    pc: number;
    value: number;
  }[] = [];

  const styles = Object.entries(default_theme)
    .map(
      (k) =>
        `--${k[0].replaceAll(" ", "-").replaceAll(/[^a-zA-Z-]/g, "")}: ${k[1]}`
    )
    .join("; ");

  let disassembler: Disassembler = new Disassembler(true);

  onMount(() => {});
</script>

<div class="disassembly" style={styles}>
  {#each instructions as instr, i (instr.pc)}
    {@const opcode_string = format(...disassembler.disasm(instr.value, true))}
    {@const opcode_op = opcode_string.split(" ")[0]}
    {@const opcode_args = opcode_string.split(" ").slice(1).join(" ")}
    <div class="line" class:current={local_pc >>> 0 == instr.pc >>> 0}>
      <!-- /* breakpoint/gutter, pc, instr, values, raw instr */ -->
      <div>-</div>
      <div>{instr.pc.toString(16).padStart(8, "0")}</div>
      <div class={getOpColor(opcode_op)}>{opcode_op}</div>
      <div>{@html colorizeAsm(opcode_args)}</div>
      <div>; {instr.value.toString(16).padStart(4, "0")}</div>
    </div>
  {/each}
</div>

<style global>
  .disassembly .line {
    /* breakpoint/gutter, pc, instr, values, raw instr */
    grid-template-columns: 0.5fr 1.5fr 5rem 2fr 1fr;
    display: grid;
    gap: 0.5rem;
    user-select: text;
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

  /* .disassembly .line div:nth-child(4) {
    color: var(--ec-num);
  } */

  .disassembly .line div:nth-child(5) {
    color: var(--ec-comment);
  }

  
</style>
