
import { writable } from 'svelte/store';

export const name = writable("");

export const selected = writable<string>("home");
