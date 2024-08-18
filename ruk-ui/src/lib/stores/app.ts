import { writable } from "svelte/store";

export type States = "empty" | "loading" | "ready" | "loaded" | "running" | "crashed" | null
export type Dump = {
    instr: number,
    registers: number[],
    pc: number
}

export const state = writable<States>("empty");
export const loadedFilename = writable<String | null>(null);
export const autorun = writable(false);
export const traceback = writable<any>("");
export const count = writable(0);

export const debugging = writable(false);

export const tracing = writable(false);
export const lastDump = writable<Dump | null>(null);

export const copyScreenFeedback = writable<String | null>(null);