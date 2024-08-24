// tests/disassembler.test.ts
import Disassembler from '../src/lib/jcore/disassembly';
import { describe, it, expect, vi } from 'vitest';

describe('Disassembler', () => {
  it('should correctly disassemble with traceOnly - add', () => {
    const disasm = new Disassembler(false);
    const result = disasm.disasm(0x7f54, true);
    console.log(result)
    expect(result).toEqual(["add 0x{i:04x}, r{n:d}", { 'i': 0x54, 'n': 15 }]);
  });

    it('should correctly disassemble with traceOnly - lsd.l', () => {
    const disasm = new Disassembler(false);
    const result = disasm.disasm(0x4f26, true);
    console.log(result)
    expect(result).toEqual(["lds.l @r{m:d}+, PR", { 'm': 15 }]);
  });
      it('should correctly disassemble with traceOnly - jmp', () => {
    const disasm = new Disassembler(false);
    const result = disasm.disasm(0x422b, true);
    console.log(result)
    expect(result).toEqual(["jmp @r{m:d}", { 'm': 2 }]);
  });
  
  it('should correctly disassemble with traceOnly', () => {
    const disasm = new Disassembler(false);
    const result = disasm.disasm(0x717f, true);
    expect(result).toEqual(["add 0x{i:04x}, r{n:d}", { 'n': 1, 'i': 127 }]);
  });

  it('should print debug information', () => {
    const disasm = new Disassembler(true);
    const logSpy = vi.spyOn(console, 'log');
    disasm.disasm(0x717f);
    expect(logSpy).toHaveBeenCalledWith("add 0x{i:04x}, r{n:d}");
    logSpy.mockRestore();
  });

  it('unknown opcode', () => {
    const disasm = new Disassembler(true);
    const result = disasm.disasm(0x8CFE, true);
    console.log(result)
    expect(result).toEqual([".word 0x{w:08x}", {w: 0x080c0f0e}]);
  });
});
