import { writable } from "svelte/store";

export type States = "empty" | "loading" | "ready" | "loaded" | "running" | null

export const state = writable<States>("empty");
export const loadedFilename = writable<String | null>(null);
export const count = writable(0);