import { describe, it, expect, vi } from 'vitest';
import { format } from '../src/lib/tools/fstrings';

describe('FStrings', () => {
  it('multiple number format', () => {
    const result = format("R{n:d} ^ R{m:d} -> R{n:d}", { n: 1, m: 2 });
    expect(result).toEqual("R1 ^ R2 -> R1");
  });

  it('multiple hex and number format', () => {
    const result = format("R0 ^ (zero extend)h'{i:04x} -> R0", { i: 4660 });
    expect(result).toEqual("R0 ^ (zero extend)h'1234 -> R0");
  });

  it('just hex format', () => {
    const result = format("(R0 + GBR) ^ (zero extend)h'{i:04x} -> (R0 + GBR)", { i: 17 });
    expect(result).toEqual("(R0 + GBR) ^ (zero extend)h'0011 -> (R0 + GBR)");
  });

  it('just number format', () => {
    const result = format("T << R{n:d} << T", { n: 3 });
    expect(result).toEqual("T << R3 << T");
  });

  it('Key not found', () => {
    try {
        format("R{n:d} -> R{m:d}", { n: 1 });
    } catch (e) {
        expect(() => { throw e; }).toThrow("Key 'm' not found in provided values.");
    }
  });

  it('Unsupported format specifier', () => {
    try {
        format("R{n:x}", { n: 1 });
    } catch (e) {
        expect(() => { throw e; }).toThrow("Unsupported format specifier 'x'");
    }
  });

});